import { Route } from "@/routes/auth/verify-email/$token";

const VerifyEmail = () => {
  const loader = Route.useLoaderData() as { code: "EMAIL_VERIFIED" | undefined };

  if (loader.code === "EMAIL_VERIFIED") {
    return <p>Your email has been successfully verified</p>;
  }

  return (
    <p style={{ color: "red" }}>Invalid or expired verification link. Please request a new one.</p>
  );
};

export default VerifyEmail;
