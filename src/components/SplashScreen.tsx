import { useAppSelector } from "../store";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import logo from "../assets/splash_logo.png";

const SplashScreen = ({
  setShowSplash,
  playLanding,
}: {
  setShowSplash: (v: boolean) => void;
  playLanding: () => void;
}) => {
  const isLoading = useAppSelector((s) => s.user.isLoading);
  const splashRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!contentRef.current) return;

    gsap.to(contentRef.current.children, {
      scale: 1.1,
      duration: 0.8,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  useEffect(() => {
    if (!isLoading && splashRef.current) {
      gsap.to(splashRef.current, {
        opacity: 0,
        duration: 0.6,
        onComplete: () => {
          setShowSplash(false);
          console.log("playing landing");
          playLanding();
        },
      });
    }
  }, [isLoading]);

  return (
    <div
      ref={splashRef}
      className="splash-container w-full h-screen bg-black flex flex-col items-center justify-center text-white"
    >
      <div className="content-container flex flex-col items-center" ref={contentRef}>
        <img src={logo} alt="splash logo" className="w-1/3 h-auto mb-4 origin-center" />
        <h2 className="underline text-7xl origin-center">Loading...</h2>
      </div>
    </div>
  );
};

export default SplashScreen;
