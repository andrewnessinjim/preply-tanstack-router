import { Link } from '@tanstack/react-router'

export function IndexRouteIndex() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Index Route
        </h1>
      </header>
      <p className="text-slate-400">
        This is the index route. It is rendered when the URL is exactly{' '}
        <code>/05-index-route</code>, with nothing after it.
      </p>
      <Link
        to="/05-index-route/child"
        className="mt-4 inline-block text-sm font-medium text-indigo-300 hover:text-indigo-200"
      >
        Go to the child route →
      </Link>
    </main>
  )
}
