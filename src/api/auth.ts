import type { RegisterUser } from "../types/api";
import { type UserState } from "../store/slices/user";
import api from "./interceptors";
import type { RegisterUserResult } from "src/types/auth";

export const fetchMe = async (): Promise<
  Omit<UserState, "isAuthenticated" | "isLoading">
> => {
  const res = await api.get("/auth/me", { withCredentials: true });
  return res.data.data;
};

export const registerUser: RegisterUser = async (data) => {
  const res = await api.post("/auth/register", data);
  return res.data as RegisterUserResult;
};
