import { Link } from '@tanstack/react-router'
import { Route } from '../products/index'

const productIds = ['1', '2', '3']

export function ProductList() {
  return (
    <section>
      <h1 className="text-4xl font-bold tracking-tight text-slate-50">
        Products
      </h1>
      <p className="mt-4 text-slate-400">
        These links use <code>from={'{Route.fullPath}'}</code> and{' '}
        <code>to="./$productId"</code>. <code>Route.fullPath</code> is this
        route's own path, <code>{Route.fullPath}</code>, read from the route
        itself. If the folder is renamed, it updates with it, so there's no
        hardcoded path to fix.
      </p>
      <div className="mt-4 flex gap-4">
        {productIds.map((productId) => (
          <Link
            key={productId}
            from={Route.fullPath}
            to="./$productId"
            params={{ productId }}
            className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
          >
            Product {productId}
          </Link>
        ))}
      </div>
    </section>
  )
}
