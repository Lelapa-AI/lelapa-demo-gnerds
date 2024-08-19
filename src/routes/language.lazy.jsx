import { createLazyFileRoute } from "@tanstack/react-router";

import { Language } from "../components";

export const Route = createLazyFileRoute("/language")({
  component: Language,
});
