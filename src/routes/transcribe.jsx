import { createFileRoute } from "@tanstack/react-router";

import { Transcribe } from "../components";

export const Route = createFileRoute("/transcribe")({
  component: () => <Transcribe />,
});
