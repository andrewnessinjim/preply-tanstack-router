import { Link, Outlet } from '@tanstack/react-router'

export function NestedLayout() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <nav className="mb-10 flex gap-4 border-b border-slate-800 pb-4">
        <Link
          to="/10-nested-layout/shop"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          Home
        </Link>
        <Link
          to="/10-nested-layout/shop/products"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          Products
        </Link>
        <Link
          to="/10-nested-layout/shop/about"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          About
        </Link>
      </nav>
      <Outlet />
    </main>
  )
}
