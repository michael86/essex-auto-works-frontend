export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Essex Auto Works Internal Web App
      </h1>

      <p className="text-muted-foreground mb-6">
        This is a restricted service, if you feel you landed here by mistake,
        you can find our public facing domain{" "}
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
    </div>
  );
}
