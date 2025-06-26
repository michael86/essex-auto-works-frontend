import NavItem from "./NavItem";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useAppSelector } from "@/store/index";

const links = [
  [
    { label: "Settings", href: "/settings" },
    { label: "Logout", href: "/logout" },
  ],
  [
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
  ],
];

const NavBar = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const isAuthenticated = useAppSelector((s) => s.user.isAuthenticated);

  useGSAP(() => {
    if (!navRef.current) return;

    gsap.fromTo(navRef.current, { y: "-150%", alpha: 0 }, { y: 0, alpha: 1 });
  }, []);

  return (
    <nav
      className="bg-blue-800/80 text-white shadow-md shadow-black px-6 py-4 flex justify-end space-x-6"
      ref={navRef}
    >
      <NavItem label="Account" links={links[isAuthenticated ? 0 : 1]} />
    </nav>
  );
};

export default NavBar;
