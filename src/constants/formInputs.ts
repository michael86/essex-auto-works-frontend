import type { RegisterFormData } from "@/schema/registerSchema";

export type FormInputConfig = {
  label: string;
  name: keyof RegisterFormData;
  type?: string;
  autoComplete?: string;
};

export const registerFormInputs: FormInputConfig[] = [
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
