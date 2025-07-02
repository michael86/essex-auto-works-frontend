import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { verifySession } from "@/store/thunks/verifySession";
import SplashScreen from "@/components/SplashScreen";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { unprotectedRoutes } from "@/constants/unprotectedRoutes";

type Props = {
  children: React.ReactNode;
};

const AuthGuard = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const route = useLocation();

  const isLoading = useAppSelector((s) => s.user.isLoading);
  const tokenVerified = useAppSelector((s) => s.user.tokenVerified);
  const isAuthenticated = useAppSelector((s) => s.user.isAuthenticated);

  const hasDispatched = useRef(false);
  const landingTween = useRef<gsap.core.Tween | null>(null);
  const [fadeInReady, setFadeInReady] = useState(false);

  const shouldShowSplash = isLoading && !tokenVerified;
  useEffect(() => {
    if (!hasDispatched.current) {
      hasDispatched.current = true;
      dispatch(verifySession());
    }
  }, [dispatch]);

  useEffect(() => {
    if (tokenVerified && !isLoading) {
      if (isAuthenticated) {
        navigate({ to: "/dashboard" });
        return;
      }

      const { pathname } = route;
      const isUnprotected = unprotectedRoutes.some(
        (path) => (path === "/" ? pathname === "/" : pathname.startsWith(path)) //Changed to startsWith to take into account tokens
      );

      if (!isUnprotected) {
        console.log("redirecting");
        navigate({ to: "/login" });
      }
    }
  }, [tokenVerified, isLoading, isAuthenticated, navigate]);

  useEffect(() => {
    if (!shouldShowSplash && landingTween.current) {
      landingTween.current.play();
    }
  }, [shouldShowSplash]);

  if (shouldShowSplash) {
    return <SplashScreen playLanding={() => setFadeInReady(true)} />;
  }

  return (
    <div
      ref={(el) => {
        if (el && fadeInReady) {
          landingTween.current = gsap.fromTo(
            el,
            { opacity: 0 },
            { opacity: 1, duration: 0.6, ease: "power2.out", paused: true }
          );
        }
      }}
      className="min-h-screen w-full flex flex-col"
    >
      {children}
    </div>
  );
};

export default AuthGuard;
