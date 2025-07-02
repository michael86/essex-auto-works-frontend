import VerifyEmail from "@/pages/auth/VerifyEmail";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/verify-email/$token")({
  component: VerifyEmail,
});

//Pick up form here tomorrow: https://tanstack.com/router/v1/docs/framework/react/guide/path-params
