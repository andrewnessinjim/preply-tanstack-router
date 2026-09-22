import { Link, useLocation, useParams } from '@tanstack/react-router'

export function UrlRewrites() {
  const { productId } = useParams({ from: '/17-url-rewrites/products/$productId' })
  const pathname = useLocation({ select: (location) => location.pathname })

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          URL Rewrites
        </h1>
      </header>
      <p className="text-slate-400">
        A rewrite is configured once on the router (in <code>main.tsx</code>,
        not in a route file) and transforms an incoming URL before the
        router matches it — unlike a redirect, the address bar never
        changes.
      </p>
      <p className="mt-4 text-slate-400">
        This page is <code>/17-url-rewrites/products/$productId</code>. Say
        this store used to serve products at <code>/item/:id</code> before a
        redesign renamed it — that URL has no route of its own anymore, but
        the router's <code>rewrite.input</code> maps it onto this route
        before matching, so an old inbound link or bookmark still resolves.
      </p>
      <p className="mt-4 text-slate-400">
        <code>/item/:id</code> is only ever expected to be reached from an
        old bookmark or an external site's stale link — nothing inside this
        app should ever generate a link to it. The link below only exists to
        simulate that outside arrival.
      </p>
      <p className="mt-4 text-slate-400">
        Product ID: <code>{productId}</code>
      </p>
      <p className="mt-4 text-slate-400">
        Current address bar (via <code>useLocation</code>):{' '}
        <code>{pathname}</code>
      </p>
      <div className="mt-4 flex gap-4">
        <a
          href="/item/7"
          title="Only ever expected from a bookmark or an external site — never a link generated inside this app"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          Old link, /item/7 (full page load) →
        </a>
        <Link
          to="/17-url-rewrites/products/$productId"
          params={{ productId: '7' }}
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          Current route directly →
        </Link>
      </div>
    </main>
  )
}
