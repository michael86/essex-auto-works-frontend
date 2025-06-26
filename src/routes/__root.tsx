import Navbar from "@/components/Navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <header>
          <Navbar />
        </header>

        <main className="flex-1">
          <Outlet />
        </main>

        <footer className="bg-muted text-muted-foreground text-center text-sm py-4">
          &copy; {new Date().getFullYear()} Essex Auto Works. All rights
          reserved.
        </footer>

        <TanStackRouterDevtools />
      </div>
    </>
  ),
});
