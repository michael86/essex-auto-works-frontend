import { type UseFormRegisterReturn } from "react-hook-form";
import { type RegisterFormData } from "../../schema/registerSchema";

type Props = {
  label: string;
  id: keyof RegisterFormData;
  register: UseFormRegisterReturn;
  error?: string;
  type?: string;
  autoComplete?: string;
  showPassword?: boolean;
  onTogglePassword?: () => void;
};

const RegisterInput = ({
  label,
  id,
  register,
  error,
  type = "text",
  autoComplete,
  showPassword,
  onTogglePassword,
}: Props) => {
  const isPassword = type === "password";

  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={isPassword && showPassword ? "text" : type}
          autoComplete={autoComplete}
          {...register}
          className={`$${isPassword ? "pr-10" : ""} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300"
            tabIndex={-1}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.318.265-2.576.742-3.713M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c.994 0 1.956.152 2.862.438"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 01-6 0m12 0c0 5-4 9-9 9S3 17 3 12s4-9 9-9 9 4 9 9z"
                />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default RegisterInput;
