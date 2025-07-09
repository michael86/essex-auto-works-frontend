import type { UserState } from "@/store/slices/user";
import type { LoginUser, RegisterUser, SendForgotPasswordEmail } from "@/types/api";
import type { RegisterUserResult, UserLoggedIn } from "@/types/auth";

import api from "./interceptors";

export const fetchMe = async (): Promise<Omit<UserState, "isAuthenticated" | "isLoading">> => {
  const res = await api.get("/auth/me", { withCredentials: true });
  return res.data.data;
};

export const registerUser: RegisterUser = async (data) => {
  const res = await api.post("/auth/register", data);
  return res.data as RegisterUserResult;
};

export const loginUser: LoginUser = async (data) => {
  const res = await api.post("/auth/login", data);
  return res.data as UserLoggedIn;
};

export const sendForgotPasswordEmail: SendForgotPasswordEmail = async (email) => {
  await api.post("/auth/forgot-password", { email });
};
