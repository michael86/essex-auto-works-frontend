import { z } from "zod";
const nameRegex = /^[a-zA-ZÀ-ÿ' -]+$/;

export const registerSchema = z
  .object({
    firstname: z
      .string()
      .min(1, "First name is required")
      .regex(nameRegex, "First name must only contain letters and valid name characters"),
    lastname: z
      .string()
      .min(1, "Last name is required")
      .regex(nameRegex, "Last name must only contain letters and valid name characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
        "Password must include an uppercase, lowercase, number, and special character"
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string(),
});

export const forgotPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
        "Password must include an uppercase, lowercase, number, and special character"
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;
