import { useMatches } from '@tanstack/react-router'
import { RootRouteDescription } from './RootRouteDescription'

export function RootRoute() {
  const matches = useMatches()

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          The Root Route
        </h1>
      </header>
      <RootRouteDescription />
      <ul className="mt-4 space-y-2 font-mono text-sm text-indigo-300">
        {matches.map((match) => (
          <li key={match.id}>{match.routeId}</li>
        ))}
      </ul>
    </main>
  )
}
