import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { MobileNav } from "../components/common";
import { AppLayout } from "../components";

export const Route = createRootRoute({
  component: () => (
    <AppLayout>
      <MobileNav />
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </AppLayout>
  ),
});
