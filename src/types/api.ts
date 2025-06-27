import type { RegisterUserResult } from "./auth";

export type RegisterUser = (data: {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}) => Promise<RegisterUserResult>;

export type LoginUser = (data: { email: string; password: string }) => Promise<RegisterUserResult>;
