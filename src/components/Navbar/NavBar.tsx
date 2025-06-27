import { useRef, useState } from "react";

import NavMobileToggle from "./NavMobiletoggle";
import NavAside from "./NavAside";

const NavBar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);

  return (
    <nav>
      <NavMobileToggle open={open} setOpen={setOpen} ref={navRef} />

      <NavAside open={open} setOpen={setOpen} />
    </nav>
  );
};

export default NavBar;
