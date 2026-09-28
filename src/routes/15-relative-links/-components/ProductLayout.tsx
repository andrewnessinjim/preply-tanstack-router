import { Link, Outlet } from '@tanstack/react-router'
import { Route } from '../products/$productId/route'

export function ProductLayout() {
  const { productId } = Route.useParams()

  return (
    <section>
      <Link
        from={Route.fullPath}
        to=".."
        className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
      >
        ← All products
      </Link>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-50">
        Product {productId}
      </h1>
      <nav className="mt-4 mb-6 flex gap-4">
        <Link
          from={Route.fullPath}
          to="."
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          Overview
        </Link>
        <Link
          from={Route.fullPath}
          to="./reviews"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          Reviews
        </Link>
      </nav>
      <Outlet />
    </section>
  )
}
