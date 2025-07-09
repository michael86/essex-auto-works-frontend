import api from "@/api/interceptors";
import ResetPassword from "@/pages/auth/ResetPassword";
import type { VerifyToken } from "@/types/auth";

import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/reset-password/$token")({
  loader: async ({ params }) => {
    const { token } = params;
    try {
      const res = await api.get<VerifyToken>(`/auth/reset-password/validate/${token}`);
      return {
        code: "code" in res.data && res.data.code === "TOKEN_VALID" ? token : undefined,
      };
    } catch (err) {
      throw redirect({ to: "/auth/forgot-password", replace: true });
    }
  },
  onError: () => undefined,

  component: ResetPassword,
});
