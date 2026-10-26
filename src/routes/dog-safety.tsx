import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dog-safety")({
  beforeLoad: () => { throw redirect({ to: "/initiatives", replace: true }); },
});