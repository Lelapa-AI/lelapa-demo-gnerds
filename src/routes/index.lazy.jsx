import { createLazyFileRoute } from "@tanstack/react-router";
import { Home } from "../components";

export const Route = createLazyFileRoute("/")({
  component: Home,
});
