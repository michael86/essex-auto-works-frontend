import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/customers/add")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/customers/add"!</div>;
}
