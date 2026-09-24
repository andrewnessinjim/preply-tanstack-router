import { Link } from '@tanstack/react-router'
import { LinkExampleDescription } from './LinkExampleDescription'

export function LinkExample() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Links
        </h1>
      </header>
      <LinkExampleDescription />
      <Link
        to="/02-anatomy-of-a-route"
        className="mt-4 inline-block text-sm font-medium text-indigo-300 hover:text-indigo-200"
      >
        Go to "Anatomy of a Route" →
      </Link>
    </main>
  )
}
