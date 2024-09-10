import { createFileRoute } from "@tanstack/react-router";

import { Chat } from "../components";

export const Route = createFileRoute("/chat")({
  component: Chat,
});
