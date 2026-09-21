import { Link, Outlet, useLocation } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export function RootLayout() {
  const isHome = useLocation({ select: (location) => location.pathname === '/' })

  return (
    <>
      {!isHome && (
        <nav className="mx-auto max-w-2xl px-6 pt-8">
          <Link
            to="/"
            className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
          >
            ← Back to all examples
          </Link>
        </nav>
      )}
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}
