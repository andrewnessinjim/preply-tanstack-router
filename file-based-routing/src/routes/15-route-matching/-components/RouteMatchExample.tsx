import { Link, useLocation } from '@tanstack/react-router'
import { Description } from './Description'

type RouteEntry = {
  id:
    | 'products.index.tsx'
    | 'about.tsx'
    | 'products.$productId.tsx'
    | 'products.specialOffer.tsx'
    | 'products.$.tsx'
  label: string
  /** Does this file's route structurally match these trailing segments? */
  matches: (parts: Array<string>) => boolean
  visit: React.ReactNode
}

const routes: Array<RouteEntry> = [
  {
    id: 'products.index.tsx',
    label: '/15-route-matching/products',
    matches: (p) => p.length === 1 && p[0] === 'products',
    visit: <Link to="/15-route-matching/products">Visit →</Link>,
  },
  {
    id: 'about.tsx',
    label: '/15-route-matching/about',
    matches: (p) => p.length === 1 && p[0] === 'about',
    visit: <Link to="/15-route-matching/about">Visit →</Link>,
  },
  {
    id: 'products.$productId.tsx',
    label: '/15-route-matching/products/$productId',
    matches: (p) => p.length === 2 && p[0] === 'products',
    visit: (
      <Link
        to="/15-route-matching/products/$productId"
        params={{ productId: '42' }}
      >
        Visit →
      </Link>
    ),
  },
  {
    id: 'products.specialOffer.tsx',
    label: '/15-route-matching/products/specialOffer',
    matches: (p) => p.length === 2 && p[0] === 'products' && p[1] === 'specialOffer',
    visit: (
      <Link to="/15-route-matching/products/specialOffer">Visit →</Link>
    ),
  },
  {
    id: 'products.$.tsx',
    label: '/15-route-matching/products/$',
    // A bare splat matches "products" plus anything after it, including
    // nothing at all — but it ranks below the index, dynamic and static
    // siblings above wherever they also apply.
    matches: (p) => p.length >= 1 && p[0] === 'products',
    visit: (
      <Link
        to="/15-route-matching/products/$"
        params={{ _splat: 'shoes/running' }}
      >
        Visit →
      </Link>
    ),
  },
]

type RouteMatchExampleProps = {
  current: RouteEntry['id']
}

export function RouteMatchExample({ current }: RouteMatchExampleProps) {
  const parts = useLocation({
    select: (location) =>
      location.pathname
        .replace(/^\/15-route-matching\/?/, '')
        .split('/')
        .filter(Boolean),
  })

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Route Matching
        </h1>
      </header>
      <Description />
      <ol className="mt-6 space-y-2">
        {routes.map((route) => {
          const isCurrent = route.id === current
          const wouldHaveMatched = !isCurrent && route.matches(parts)

          return (
            <li
              key={route.id}
              className={
                isCurrent
                  ? 'flex items-center justify-between gap-4 rounded-lg border border-indigo-500 bg-indigo-500/10 p-3'
                  : 'flex items-center justify-between gap-4 rounded-lg border border-slate-800 bg-slate-900 p-3'
              }
            >
              <span>
                <span
                  className={
                    isCurrent
                      ? 'font-mono text-sm text-indigo-200'
                      : wouldHaveMatched
                        ? 'font-mono text-sm text-slate-600 line-through'
                        : 'font-mono text-sm text-slate-400'
                  }
                >
                  {route.id}
                </span>
                <span className="ml-2 text-xs text-slate-600">
                  {route.label}
                </span>
              </span>
              {isCurrent ? (
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  Matched
                </span>
              ) : (
                <span className="text-sm font-medium text-indigo-300 hover:text-indigo-200">
                  {route.visit}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </main>
  )
}
