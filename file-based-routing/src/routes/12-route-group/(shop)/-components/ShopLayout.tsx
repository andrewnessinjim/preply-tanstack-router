import { Link, Outlet } from '@tanstack/react-router'

export function ShopLayout() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <nav className="mb-10 flex gap-4 border-b border-slate-800 pb-4">
        <Link
          to="/12-route-group/products"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          Products
        </Link>
        <Link
          to="/12-route-group/cart"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          Cart
        </Link>
        <Link
          to="/12-route-group/terms"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          Terms →
        </Link>
      </nav>
      <Outlet />
    </main>
  )
}
