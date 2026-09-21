import { Link } from '@tanstack/react-router'

const introExamples = [
  { title: 'The Root Route', to: '/01-root-route' },
  { title: 'Anatomy of a Route', to: '/02-anatomy-of-a-route' },
  { title: 'Links', to: '/03-link' },
  {
    title: 'Index Routes',
    links: [
      { to: '/04-index-route', label: 'Visit parent page' },
      { to: '/04-index-route/child', label: 'Visit child page' },
    ],
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
        <ul className="space-y-3">
          {introExamples.map((example, index) => (
            <li
              key={example.title}
              className="flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-900 p-4 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-semibold text-indigo-300">
                {index + 1}
              </span>
              {'to' in example ? (
                <Link
                  to={example.to}
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
