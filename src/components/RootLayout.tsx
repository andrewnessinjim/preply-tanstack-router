import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export function RootLayout() {
  // Based on the matches being rendered, not on a location. location
  // updates as soon as a navigation starts, and resolvedLocation only once
  // the loader has finished; neither is right when a page renders its
  // pendingComponent before its data arrives. matches is exactly what the
  // <Outlet /> below is showing, so the link appears together with it.
  const isHome = useRouterState({
    select: (state) => {
      console.log({
        status: state.status,
        location: state.location.pathname,
        resolvedLocation: state.resolvedLocation?.pathname,
        matches: state.matches.map((match) => match.routeId),
      });
      return state.matches.some((match) => match.routeId === "/");
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
