import { createLazyFileRoute } from "@tanstack/react-router";

import { Translate } from "../components";

export const Route = createLazyFileRoute("/translate")({
  component: Translate,
});
