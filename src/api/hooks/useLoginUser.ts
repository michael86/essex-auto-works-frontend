import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../auth";

export const useLoginUser = () =>
  useMutation({
    mutationKey: ["register-user"],
    mutationFn: loginUser,
  });
