import api from "@/api/interceptors";
import FormInputs from "@/components/Form/FormInputs";
import FormStatus from "@/components/Form/FormStatus";
import { forgotPasswordInputs } from "@/constants/formInputs";
import { Route } from "@/routes/auth/reset-password/$token";
import { forgotPasswordSchema, type ForgotPasswordData } from "@/schema/registerSchema";
import { isApiError } from "@/utils/typeGuards";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const { token } = Route.useLoaderData() as { token: string | undefined };
  const [successMessage, setSuccessMessage] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordData) => {
    setSuccessMessage(undefined);
    setErrorMessage(undefined);
    try {
      await api.post(`auth/reset-password/${token}`, { password: data.password });
      setSuccessMessage("Password changed, you can now log in with your new Credentials");
    } catch (error: any) {
      process.env.NODE_ENV === "development" && console.warn(error);

      if (!isApiError(error)) return;

      if ("message" in error && typeof error.message === "string") {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <section>
      <h1 className="text-white text-5xl text-center">Reset Password</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mt-5 mx-auto px-5 sm:px-0">
        {forgotPasswordInputs.map(({ label, name, autoComplete, type = "text" }) => (
          <FormInputs
            key={name}
            label={label}
            id={name as keyof ForgotPasswordData}
            register={register(name as keyof ForgotPasswordData)}
            autoComplete={autoComplete}
            type={type}
            error={errors[name as keyof ForgotPasswordData]?.message}
            showPassword={type === "password" ? showPassword : undefined}
            onTogglePassword={
              type === "password" ? () => setShowPassword((prev) => !prev) : undefined
            }
          />
        ))}

        <button
          className="mt-5 w-full md:w-auto
          text-white
          bg-blue-700
          hover:bg-blue-800
            font-medium rounded-lg text-sm
            px-5 py-2.5 text-center
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          Submit
        </button>
      </form>

      <FormStatus
        successMessage={successMessage}
        errorMessage={errorMessage}
        button={
          successMessage
            ? {
                action: () => navigate({ to: "/login" }),
                text: "Login",
                classes:
                  " mt-2 mb-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white",
              }
            : undefined
        }
      />
    </section>
  );
};

export default ResetPassword;
