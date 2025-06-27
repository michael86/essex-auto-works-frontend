type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavAside: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <aside
      id="default-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <button
          type="button"
          className={`absolute -right-12 top-5 ${open ? "inline-flex" : "hidden"} items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset bg-gray-800`}
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

        {/* Insert navigation links here */}
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default NavAside;
