import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { verifySession } from "@/store/thunks/verifySession";
import SplashScreen from "@/components/SplashScreen";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { unprotectedRoutes } from "@/constants/unprotectedRoutes";
import gsap from "gsap";

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

  const containerRef = useRef<HTMLDivElement>(null);

  const shouldShowSplash = isLoading && !tokenVerified;

  useEffect(() => {
    dispatch(verifySession());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && tokenVerified) {
      if (isAuthenticated) {
        navigate({ to: "/dashboard" });
      } else {
        const { pathname } = route;
        const isUnprotected = unprotectedRoutes.some((path) =>
          path === "/" ? pathname === "/" : pathname.startsWith(path)
        );
        if (!isUnprotected) {
          navigate({ to: "/login" });
        }
      }
    }
  }, [isLoading, tokenVerified, isAuthenticated, navigate, route]);

  useEffect(() => {
    if (!shouldShowSplash && containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 0.6, ease: "power2.out" }
      );
    }
  }, [shouldShowSplash]);

  if (shouldShowSplash) {
    return <SplashScreen />;
  }

  return (
    <div ref={containerRef} className="min-h-screen w-full flex flex-col">
      {children}
    </div>
  );
};

export default AuthGuard;
