import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { registerSchema, type RegisterFormData } from "@/schema/registerSchema";
import { useRegisterUser } from "@/api/hooks/useRegisterUser";
import { isApiError } from "@/utils/typeGuards";
import FormStatus from "@/components/Form/FormStatus";
import FormInputs from "@/components/Form//FormInputs";
import { registerFormInputs } from "@/constants/formInputs";
import { useNavigate } from "@tanstack/react-router";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const { mutateAsync, isPending } = useRegisterUser();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setSuccess(undefined);
    setErrorMessage(undefined);
    try {
      await mutateAsync(data);
      setSuccess("Account Created. Please verify your email, don't forget to check your spam");
    } catch (error: any) {
      process.env.NODE_ENV === "development" && console.warn(error);
      if (!isApiError(error)) return;
      if (error.type === "CONFLICT_ERROR") {
        setErrorMessage("Email already in use, please try again with a different email or log in");
        return;
      }
      if ("message" in error && typeof error.message === "string") {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto px-5 sm:px-0">
        {registerFormInputs.map(({ label, name, autoComplete, type = "text" }) => (
          <FormInputs
            key={name}
            label={label}
            id={name as keyof RegisterFormData}
            register={register(name as keyof RegisterFormData)}
            autoComplete={autoComplete}
            type={type}
            error={errors[name as keyof RegisterFormData]?.message}
            showPassword={type === "password" ? showPassword : undefined}
            onTogglePassword={
              type === "password" ? () => setShowPassword((prev) => !prev) : undefined
            }
          />
        ))}

        <button
          type="submit"
          disabled={isPending}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <FormStatus
        errorMessage={errorMessage}
        successMessage={success}
        button={
          errorMessage
            ? {
                action: () => navigate({ to: "/forgot-password" }),
                text: "Forgot Password",
                classes:
                  " mt-2 mb-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white",
              }
            : undefined
        }
      />
    </>
  );
};

export default RegisterForm;
