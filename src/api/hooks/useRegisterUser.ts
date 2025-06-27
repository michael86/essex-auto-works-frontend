import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../auth";

export const useRegisterUser = () =>
  useMutation({
    mutationKey: ["register-user"],
    mutationFn: registerUser,
  });
