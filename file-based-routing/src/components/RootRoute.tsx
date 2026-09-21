import { useMatches } from '@tanstack/react-router'

export function RootRoute() {
  const matches = useMatches()

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          The Root Route
        </h1>
      </header>
      <p className="text-slate-400">
        The "Back to all examples" link above this page is not part of this
        route. It is rendered by the root route (<code>__root.tsx</code>),
        which wraps every page through its <code>&lt;Outlet /&gt;</code>.
      </p>
      <p className="mt-4 text-slate-400">
        The root route has no URL of its own. It is matched first for every
        URL. Routes currently matched:
      </p>
      <ul className="mt-4 space-y-2 font-mono text-sm text-indigo-300">
        {matches.map((match) => (
          <li key={match.id}>{match.routeId}</li>
        ))}
      </ul>
    </main>
  )
}
