import { createFileRoute } from "@tanstack/react-router";
import { Profile } from "../components";

export const Route = createFileRoute("/profile")({
  component: Profile,
});
