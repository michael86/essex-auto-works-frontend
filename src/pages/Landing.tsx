import { Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NavBar from "@/components/Navbar/NavBar";
import AuthGuard from "@/components/AuthGuard";
import { useAppSelector } from "../store";
import { sidebar, topbar } from "@/constants/layoutOffsetRoutes";

const Landing = () => {
  const isAuthenticated = useAppSelector((s) => s.user.isAuthenticated);

  const location = useLocation();

  return (
    <AuthGuard>
      <header>{isAuthenticated && <NavBar />}</header>

      <main
        className={`flex-1  ${!sidebar.includes(location.pathname) && "md:ml-64"} ${!topbar.includes(location.pathname) && "mt-15 md:mt-0"}`}
      >
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white text-muted-foreground text-center text-sm py-4">
        &copy; {new Date().getFullYear()} Essex Auto Works. All rights reserved.
      </footer>

      <TanStackRouterDevtools />
    </AuthGuard>
  );
};

export default Landing;
