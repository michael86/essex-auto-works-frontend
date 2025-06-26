import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="bg-blue-800/80 text-white shadow-md shadow-black px-6 py-4 flex justify-end space-x-6">
      <NavItem
        label="Account"
        links={[
          { label: "Settings", href: "/settings" },
          { label: "Logout", href: "/logout" },
        ]}
      />
      <NavItem
        label="Resources"
        links={[
          { label: "Docs", href: "/docs" },
          { label: "Blog", href: "/blog" },
        ]}
      />
    </nav>
  );
};

export default NavBar;
