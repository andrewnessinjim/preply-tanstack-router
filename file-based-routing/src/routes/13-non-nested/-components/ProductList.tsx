import { Link } from '@tanstack/react-router'

export function ProductList() {
  return (
    <section>
      <h1 className="text-4xl font-bold tracking-tight text-slate-50">
        Products
      </h1>
      <p className="mt-4 text-slate-400">
        This page renders inside the <code>products</code> layout, so the
        navbar above is visible.
      </p>
      <ul className="mt-4 space-y-3">
        {['1', '2'].map((productId) => (
          <li key={productId}>
            <Link
              to="/13-non-nested/products/$productId"
              params={{ productId }}
              className="font-medium text-slate-100 hover:text-indigo-300"
            >
              Product {productId}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
