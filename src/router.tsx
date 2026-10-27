import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Matches the Vite base so the app also works when hosted under a sub-path
// (e.g. GitHub Pages project sites at /<repo>/).
const basepath = (import.meta.env.VITE_BASE_PATH ?? "/").replace(/\/$/, "") || "/";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
