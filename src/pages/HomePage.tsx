import { useNavigate } from "@tanstack/react-router";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-3.5">
      <h1 className="text-4xl text-white font-bold mb-4">
        Welcome to Essex Auto Works Internal Web App
      </h1>

      <p className="text-white mb-6">
        This is a restricted service, if you feel you landed here by mistake, you can find our
        public facing domain{" "}
        <a
          href="https://essexautoworks.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Essex Auto Works public website"
          className="underline text-foreground hover:text-destructive visited:text-destructive"
        >
          here
        </a>
      </p>
      <section className="flex flex-wrap gap-4 justify-center">
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800  dark:border-gray-600 dark:hover:text-white "
          onClick={() => navigate({ to: "/register" })}
        >
          Register
        </button>
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white "
          onClick={() => navigate({ to: "/login" })}
        >
          Login
        </button>
      </section>
    </div>
  );
}
