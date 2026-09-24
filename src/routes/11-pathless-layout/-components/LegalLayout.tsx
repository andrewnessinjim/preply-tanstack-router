import { Link, Outlet } from '@tanstack/react-router'

export function LegalLayout() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <nav className="mb-10 flex gap-4 border-b border-slate-800 pb-4">
        <Link
          to="/11-pathless-layout/terms"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          Terms
        </Link>
        <Link
          to="/11-pathless-layout/privacy"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          Privacy
        </Link>
        <Link
          to="/11-pathless-layout/products"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          ← Back to store
        </Link>
      </nav>
      <Outlet />
    </main>
  )
}
