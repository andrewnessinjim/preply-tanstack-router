import { Link, useLocation, useParams } from '@tanstack/react-router'
import { Description } from './Description'

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
      <Description />
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
