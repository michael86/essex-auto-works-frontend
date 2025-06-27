import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  registerSchema,
  type RegisterFormData,
} from "../../schema/registerSchema";
import { useRegisterUser } from "../../api/hooks/useRegisterUser";
import { isApiError } from "../../utils/typeGuards";
import RegisterInput from "./RegisterInput";
import RegisterStatus from "./RegisterStatus";

const formInputs = [
  { label: "Firstname", name: "firstname", autoComplete: "given-name" },
  { label: "Lastname", name: "lastname", autoComplete: "family-name" },
  { label: "Email", name: "email", autoComplete: "email", type: "email" },
  {
    label: "Password",
    name: "password",
    autoComplete: "new-password",
    type: "password",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    autoComplete: "new-password",
    type: "password",
  },
];

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { mutateAsync, isPending, isError } = useRegisterUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setSuccess(false);
    setErrorMessage(null);
    try {
      await mutateAsync(data);
      setSuccess(true);
    } catch (error: any) {
      if (!isApiError(error)) return;
      if (error.type === "CONFLICT_ERROR") {
        setErrorMessage(
          "Email already in use, please try again with a different email or log in"
        );
        return;
      }
      if ("message" in error && typeof error.message === "string") {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm mx-auto px-5 sm:px-0"
      >
        {formInputs.map(({ label, name, autoComplete, type = "text" }) => (
          <RegisterInput
            key={name}
            label={label}
            id={name as keyof RegisterFormData}
            register={register(name as keyof RegisterFormData)}
            autoComplete={autoComplete}
            type={type}
            error={errors[name as keyof RegisterFormData]?.message}
            showPassword={type === "password" ? showPassword : undefined}
            onTogglePassword={
              type === "password"
                ? () => setShowPassword((prev) => !prev)
                : undefined
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

      <RegisterStatus
        isError={isError}
        errorMessage={errorMessage}
        success={success}
      />
    </>
  );
};

export default RegisterForm;
