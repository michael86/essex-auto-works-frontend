import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/customers/manage")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/customers/manage"!</div>;
}
