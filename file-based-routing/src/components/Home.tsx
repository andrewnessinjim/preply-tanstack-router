import { Link } from '@tanstack/react-router'

const introExamples = [
  { title: 'The Root Route', to: '/01-root-route' },
  { title: 'Anatomy of a Route', to: '/02-anatomy-of-a-route' },
  { title: 'Links', to: '/03-link' },
  { title: 'Colocation', to: '/04-colocation' },
  {
    title: 'Index Routes',
    links: [
      { to: '/05-index-route', label: 'Parent page' },
      { to: '/05-index-route/child', label: 'Child page' },
    ],
  },
  {
    title: 'Dynamic Route Segment',
    to: '/06-dynamic-segment/$productId',
    params: { productId: '1' },
  },
  {
    title: 'Splat Route',
    to: '/07-splat/$',
    params: { _splat: 'shoes/running' },
  },
  {
    title: 'Optional Path Parameter',
    to: '/08-optional-param/{-$category}',
  },
  { title: 'Layout Route & Outlet (flat files)', to: '/09-layout/shop' },
  {
    title: 'Layout Route & Outlet (nested directories)',
    to: '/10-nested-layout/shop',
  },
  {
    title: 'Pathless Layout Routes',
    links: [
      { to: '/11-pathless-layout/products', label: 'Shop layout' },
      { to: '/11-pathless-layout/terms', label: 'Legal layout' },
    ],
  },
  {
    title: 'Pathless Route Group Directories',
    links: [
      { to: '/12-route-group/products', label: 'Shop layout' },
      { to: '/12-route-group/terms', label: 'Legal layout' },
    ],
  },
  { title: 'Non-Nested Routes', to: '/13-non-nested/products' },
  {
    title: 'useLocation',
    to: '/14-use-location/$category',
    params: { category: 'shoes' },
  },
  { title: 'Route Matching', to: '/15-route-matching/products' },
  { title: 'Escape Characters', to: '/16-escape-characters/sitemap.xml' },
  {
    title: 'URL Rewrites',
    to: '/17-url-rewrites/products/$productId',
    params: { productId: '7' },
  },
] as const

export function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          TanStack Router Examples
        </h1>
      </header>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          Intro
        </h2>
        <p className="mt-1 mb-4 text-slate-400">
          Small, standalone examples that each focus on one routing concept.
        </p>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {introExamples.map((example, index) => (
            <li
              key={example.title}
              className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900 p-3 shadow-sm"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-semibold text-indigo-300">
                {index + 1}
              </span>
              {'to' in example ? (
                <Link
                  to={example.to}
                  params={'params' in example ? example.params : undefined}
                  className="font-medium text-slate-100 hover:text-indigo-300"
                >
                  {example.title}
                </Link>
              ) : (
                <div>
                  <h3 className="font-medium text-slate-100">
                    {example.title}
                  </h3>
                  <div className="mt-1 flex gap-4">
                    {example.links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
                      >
                        {link.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
