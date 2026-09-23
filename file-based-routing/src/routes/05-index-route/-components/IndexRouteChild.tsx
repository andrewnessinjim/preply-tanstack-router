import { Link } from '@tanstack/react-router'
import { IndexRouteChildDescription } from './IndexRouteChildDescription'

export function IndexRouteChild() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Child Route
        </h1>
      </header>
      <IndexRouteChildDescription />
      <Link
        to="/05-index-route"
        className="mt-4 inline-block text-sm font-medium text-indigo-300 hover:text-indigo-200"
      >
        ← Back to the index route
      </Link>
    </main>
  )
}
