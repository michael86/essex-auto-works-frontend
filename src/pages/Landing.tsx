import { useEffect, useRef, useState } from "react";
import NavBar from "@/components/Navbar/NavBar";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import SplashScreen from "@/components/SplashScreen";
import { useAppDispatch } from "../store";
import { clearUser, setLoading, setUser } from "@/store/slices/user";
import { fetchMe } from "../api/auth";

const Landing = () => {
  const [showSplash, setShowSplash] = useState(true);
  const landingRef = useRef<HTMLDivElement>(null);
  const landingTween = useRef<gsap.core.Tween | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const init = async () => {
      dispatch(setLoading(true));
      try {
        const user = await fetchMe();
        dispatch(setUser(user));
      } catch {
        dispatch(clearUser());
      } finally {
        dispatch(setLoading(false));
      }
    };

    init();
  }, [dispatch]);

  useEffect(() => {
    if (landingRef.current) {
      landingTween.current = gsap.fromTo(
        landingRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out", paused: true }
      );
    }
  }, []);

  if (showSplash)
    return (
      <SplashScreen
        setShowSplash={setShowSplash}
        playLanding={() => landingTween.current?.play()}
      />
    );

  return (
    <div ref={landingRef} id="landing-root" className="flex flex-col min-h-screen w-full">
      <header>
        <NavBar />
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-muted text-muted-foreground text-center text-sm py-4">
        &copy; {new Date().getFullYear()} Essex Auto Works. All rights reserved.
      </footer>

      <TanStackRouterDevtools />
    </div>
  );
};

export default Landing;
