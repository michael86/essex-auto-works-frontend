import { Route } from "@/routes/auth/verify-email/$token";
import { useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";

const VerifyEmail = () => {
  const { code } = Route.useLoaderData() as { code: "EMAIL_VERIFIED" | undefined };
  const [counter, setCounter] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (code === "EMAIL_VERIFIED") {
      const timerId = setInterval(() => {
        setCounter((state) => {
          if (state <= 1) {
            clearInterval(timerId);
            navigate({ to: "/login" });
            return 0;
          }
          return state - 1;
        });
      }, 1000);

      // cleanup if the component unmounts before timer fires
      return () => clearInterval(timerId);
    }

    return undefined;
  }, [code, navigate]);

  if (code === "EMAIL_VERIFIED") {
    return (
      <>
        <p className="text-5xl text-green-600 text-center">
          Your email has been successfully verified
        </p>
        <p className="text-center mt-2">
          You’ll be redirected to the login screen in{" "}
          <span className="text-green-600">{counter}</span> second
          {counter === 1 ? "" : "s"}
        </p>
      </>
    );
  }

  return (
    <p className={"text-center text-3xl px-2 text-red-600 mt-6"}>
      Invalid or expired verification link. Please request a new one.
    </p>
  );
};

export default VerifyEmail;
