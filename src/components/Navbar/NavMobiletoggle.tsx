type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ref: React.Ref<HTMLDivElement | null>;
};

const NavMobileToggle: React.FC<Props> = ({ open, setOpen, ref }) => {
  return (
    <div
      id="nav-mobile-toggle"
      className={`bg-gray-800 fixed w-full text-white shadow-md shadow-black px-6 py-4 justify-end space-x-6 flex md:hidden transition-transform duration-300 ${open ? "-translate-y-full" : "translate-y-0"}`}
      ref={ref}
    >
      <button
        type="button"
        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
        aria-controls="mobile-menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open main menu</span>

        <svg
          className={`block size-6 transition-transform duration-300 ease-in-out ${open ? "rotate-90" : "rotate-0"}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              !open
                ? "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                : "M6 18 18 6M6 6l12 12"
            }
          />
        </svg>
      </button>
    </div>
  );
};

export default NavMobileToggle;
