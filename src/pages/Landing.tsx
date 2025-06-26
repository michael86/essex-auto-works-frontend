import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NavBar from "@/components/Navbar/NavBar";
import AuthGuard from "@/components/AuthGuard";

const Landing = () => {
  return (
    <AuthGuard>
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
    </AuthGuard>
  );
};

export default Landing;
