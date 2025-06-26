import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Essex Auto Works</h1>
      <p className="text-muted-foreground mb-6">
        Book services, view invoices, and manage customers with ease.
      </p>
      <Button>Get Started</Button>
    </main>
  );
}
