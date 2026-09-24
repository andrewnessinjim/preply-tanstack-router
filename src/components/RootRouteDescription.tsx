export function RootRouteDescription() {
  return (
    <>
      <p className="text-slate-400">
        The "Back to all examples" link above this page is not part of this
        route. It is rendered by the root route (<code>__root.tsx</code>),
        which wraps every page through its <code>&lt;Outlet /&gt;</code>.
      </p>
      <p className="mt-4 text-slate-400">
        The root route has no URL of its own. It is matched first for every
        URL. Routes currently matched:
      </p>
    </>
  )
}
