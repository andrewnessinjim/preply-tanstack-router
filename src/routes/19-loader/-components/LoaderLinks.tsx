import { Link, MatchRoute } from '@tanstack/react-router'

export function LoaderLinks() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Loader
        </h1>
      </header>
      <p className="text-slate-400">
        All three links go to the same products page, whose loader takes 2–2.5s.
        They differ only in what happens before and during that wait.
      </p>
      <ul className="mt-6 space-y-6">
        <li>
          <Link
            to="/19-loader/products"
            className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
          >
            Default →
          </Link>
          <p className="mt-1 text-slate-400">
            The loader starts when you click. This page stays on screen,
            looking frozen, until the data arrives.
          </p>
        </li>
        <li>
          <Link
            to="/19-loader/products"
            preload="intent"
            className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
          >
            Preload: intent →
          </Link>
          <p className="mt-1 text-slate-400">
            The loader starts when you hover over the link. Wait a couple of
            seconds before clicking and the page opens instantly.
          </p>
        </li>
        <li>
          <Link
            to="/19-loader/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-indigo-200"
          >
            MatchRoute →
            <MatchRoute to="/19-loader/products" pending>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-300 border-t-transparent" />
            </MatchRoute>
          </Link>
          <p className="mt-1 text-slate-400">
            <code>{'<MatchRoute pending>'}</code> shows a spinner while the
            router is navigating to the products page, so this page no longer
            looks frozen. It matches the route, not the link, so the spinner
            also appears when you click Default.
          </p>
        </li>
      </ul>
    </main>
  )
}
