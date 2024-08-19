import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { Nav } from "../components/common";
import { AppLayout } from "../components";

export const Route = createRootRoute({
  component: () => (
    <AppLayout>
      <Nav />
      <hr />
      <Outlet />
      {/*  <TanStackRouterDevtools isOpen={false} /> */}
    </AppLayout>
  ),
});
