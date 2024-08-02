import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { MobileNav } from "../components/common";

export const Route = createRootRoute({
  component: () => (
    <>
      <MobileNav />
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
