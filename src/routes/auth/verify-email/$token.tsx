import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/verify-email/$token")({
  component: RouteComponent,
});

//Pick up form here tomorrow: https://tanstack.com/router/v1/docs/framework/react/guide/path-params

function RouteComponent() {
  return <div>Hello "/auth/verify-email/$token"!</div>;
}
