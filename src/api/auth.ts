import { type UserState } from "../store/slices/user";
import api from "./interceptors";

export const fetchMe = async (): Promise<Omit<UserState, "isAuthenticated" | "isLoading">> => {
  const res = await api.get("/auth/me", { withCredentials: true });
  return res.data.data;
};
