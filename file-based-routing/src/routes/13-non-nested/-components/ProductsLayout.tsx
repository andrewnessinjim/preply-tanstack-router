import { Link, Outlet } from '@tanstack/react-router'

export function ProductsLayout() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <nav className="mb-10 flex gap-4 border-b border-slate-800 pb-4">
        <Link
          to="/13-non-nested/products"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          Products
        </Link>
        <Link
          to="/13-non-nested/products/sale"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          Sale
        </Link>
      </nav>
      <Outlet />
    </main>
  )
}
