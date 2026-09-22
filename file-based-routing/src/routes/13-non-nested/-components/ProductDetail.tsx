import { Link, useParams } from '@tanstack/react-router'

export function ProductDetail() {
  const { productId } = useParams({
    from: '/13-non-nested/products/$productId',
  })

  return (
    <section>
      <h1 className="text-4xl font-bold tracking-tight text-slate-50">
        Product {productId}
      </h1>
      <p className="mt-4 text-slate-400">
        Still nested in the <code>products</code> layout: the navbar is
        visible.
      </p>
      <Link
        to="/13-non-nested/products/$productId/checkout"
        params={{ productId }}
        className="mt-4 inline-block text-sm font-medium text-indigo-300 hover:text-indigo-200"
      >
        Go to checkout →
      </Link>
    </section>
  )
}
