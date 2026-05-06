import { createRouter, createRootRoute, createRoute } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import Root from "./routes/__root";
import Index from "./routes/index";

export const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: Root,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}