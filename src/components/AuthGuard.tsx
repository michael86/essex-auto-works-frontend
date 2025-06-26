import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { verifySession } from "@/store/thunks/verifySession";
import SplashScreen from "@/components/SplashScreen";

type Props = {
  children: React.ReactNode;
};

const AuthGuard = ({ children }: Props) => {
  const isLoading = useAppSelector((s) => s.user.isLoading);
  const tokenVerified = useAppSelector((s) => s.user.tokenVerified);
  const dispatch = useAppDispatch();

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
