import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export function RootLayout() {
  // resolvedLocation, not useLocation(): location updates as soon as a
  // navigation starts, while resolvedLocation only updates once the new
  // page's loaders have finished and it renders. Falls back to location on
  // the very first load, before anything has resolved.
  const isHome = useRouterState({
    select: (state) => {
      console.log({
        status: state.status,
        location: state.location.pathname,
        resolvedLocation: state.resolvedLocation?.pathname,
        matches: state.matches.map((match) => match.routeId),
      });
      return (state.resolvedLocation ?? state.location).pathname === "/";
    },
  });

  console.log("Root layout rendered");

  return (
    <>
      {!isHome && (
        <nav className="mx-auto max-w-2xl px-6 pt-8">
          <Link
            to="/"
            className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
          >
            ← Back to all examples
          </Link>
        </nav>
      )}
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
