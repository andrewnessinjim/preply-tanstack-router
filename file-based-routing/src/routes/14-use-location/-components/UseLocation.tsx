import { Link, useLocation } from '@tanstack/react-router'

export function UseLocation() {
  const pathname = useLocation({ select: (location) => location.pathname })

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          useLocation
        </h1>
      </header>
      <p className="text-slate-400">
        <code>useParams</code> reads values TanStack Router already knows
        are there, typed against one specific route. <code>useLocation</code>{' '}
        instead reads the browser's actual current URL, the same shape on
        every route — so its fields, like <code>pathname</code>, are plain
        strings, not the literal route paths <code>Link to</code> checks
        against.
      </p>
      <p className="mt-4 text-slate-400">
        Current pathname: <code>{pathname}</code>
      </p>
      <div className="mt-4 flex gap-4">
        {['shoes', 'hats', 'bags'].map((category) => (
          <Link
            key={category}
            to="/14-use-location/$category"
            params={{ category }}
            className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
          >
            {category}
          </Link>
        ))}
      </div>
    </main>
  )
}
