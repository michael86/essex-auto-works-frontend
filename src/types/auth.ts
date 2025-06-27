import type { RateLimit, ValidationErrors } from "./genericApi";

interface UserRegistered {
  status: "SUCCESS";
  code: "REGISTERED";
  message: "Account created, please verify your email";
}

export type RegisterUserResult = RateLimit | ValidationErrors | UserRegistered;

export interface RegisterUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
