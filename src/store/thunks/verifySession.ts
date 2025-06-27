import { type AppDispatch } from "../";
import {
  clearUser,
  setLoading,
  setTokenVerified,
  setUser,
} from "../slices/user";
import { fetchMe } from "@/api/auth";

export const verifySession = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const user = await fetchMe();
    dispatch(setUser(user));
  } catch {
    dispatch(clearUser());
  } finally {
    dispatch(setTokenVerified(true));
    dispatch(setLoading(false));
  }
};
