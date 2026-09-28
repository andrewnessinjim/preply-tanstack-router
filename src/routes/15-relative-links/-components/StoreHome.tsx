import { Link } from '@tanstack/react-router'

export function StoreHome() {
  return (
    <section>
      <h1 className="text-4xl font-bold tracking-tight text-slate-50">
        Store
      </h1>
      <p className="mt-4 text-slate-400">
        A relative <code>to</code> can be combined with a <code>from</code>{' '}
        route path. The link below has{' '}
        <code>from="/15-relative-links/products/"</code> and{' '}
        <code>to="./$productId"</code>, so it resolves against the products
        path, not against this page, and lands on{' '}
        <code>/15-relative-links/products/1</code>.
      </p>
      <Link
        from="/15-relative-links/products/"
        to="./$productId"
        params={{ productId: '1' }}
        className="mt-4 inline-block text-sm font-medium text-indigo-300 hover:text-indigo-200"
      >
        Featured: Product 1 →
      </Link>
    </section>
  )
}
