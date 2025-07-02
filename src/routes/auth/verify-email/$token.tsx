import api from "@/api/interceptors";
import VerifyEmail from "@/pages/auth/VerifyEmail";
import type { VerifyEmailRequest } from "@/types/auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/verify-email/$token")({
  loader: async ({ params }) => {
    try {
      const { token } = params;
      const res = await api.get<VerifyEmailRequest>(`auth/verify-email/${token}`);
      return {
        code:
          "code" in res.data && res.data.code === "EMAIL_VERIFIED" ? "EMAIL_VERIFIED" : undefined,
      };
    } catch (err: any) {
      return { code: undefined };
    }
  },
  onError: () => undefined,

  component: VerifyEmail,
});
