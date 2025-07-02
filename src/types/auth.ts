import type { ApiError, RateLimit, ValidationErrors } from "./genericApi";

interface UserRegistered {
  status: "SUCCESS";
  code: "REGISTERED";
  message: "Account created, please verify your email";
  data: {
    email: string;
    firstname: string;
    lastname: string;
    role: string;
    emailVerified: number;
  };
}

export interface UserLoggedIn {
  code: "LOGIN_SUCCESS";
  data: {
    email: string;
    emailVerified: number;
    firstName: string;
    lastName: string;
    role: "admin" | "staff";
  };

  message: "Login successful";
  status: "SUCCESS";
}

export type RegisterUserResult = RateLimit | ValidationErrors | UserRegistered;
export type LoginUserResult = RateLimit | ValidationErrors | UserLoggedIn;

export interface RegisterUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface RegisterUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface EmailVerified {
  code: "EMAIL_VERIFIED";
  message: "Email verified succesfully, you can now log in";
  status: "SUCCESS";
}

export type VerifyEmailRequest = RateLimit | ValidationErrors | ApiError | EmailVerified;
