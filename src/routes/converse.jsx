import { createFileRoute } from "@tanstack/react-router";

import { Converse } from "../components";

export const Route = createFileRoute("/converse")({
  component: Converse,
});
