import { Link } from '@tanstack/react-router'

export function IndexRouteChild() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Child Route
        </h1>
      </header>
      <p className="text-slate-400">
        This is the child route. It is rendered when the URL is{' '}
        <code>/04-index-route/child</code>. The index route's page is replaced
        entirely.
      </p>
      <Link
        to="/04-index-route"
        className="mt-4 inline-block text-sm font-medium text-indigo-300 hover:text-indigo-200"
      >
        ← Back to the index route
      </Link>
    </main>
  )
}
