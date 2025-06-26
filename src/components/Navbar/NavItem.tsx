import { useRef, useState } from "react";
import gsap from "gsap";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";

const NavItem = ({ label, links }: { label: string; links: { label: string; href: string }[] }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<SVGSVGElement | null>(null);

  const handleEnter = () => {
    setOpen(true);
    gsap.fromTo(
      menuRef.current,
      { y: -10, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.3, ease: "power2.out" }
    );
    gsap.to(iconRef.current, {
      rotate: -180,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(menuRef.current, {
      y: -10,
      autoAlpha: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => setOpen(false),
    });
    gsap.to(iconRef.current, { rotate: 0, duration: 0.2, ease: "power2.in" });
  };

  return (
    <div className="relative inline-block" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div className="flex flex-col">
        <button className="inline-flex items-center gap-1 text-lg font-medium">
          {label}
          <CaretDownIcon ref={iconRef} className="transition-transform" />
        </button>

        {open && (
          <div
            ref={menuRef}
            className="absolute right-0 top-full w-44 rounded-md bg-white shadow-lg z-50"
          >
            <ul className="py-2 text-sm text-gray-800">
              {links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="block px-4 py-2 hover:bg-gray-100 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavItem;
