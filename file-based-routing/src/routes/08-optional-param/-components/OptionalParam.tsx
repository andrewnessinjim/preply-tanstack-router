import { Link, useParams } from '@tanstack/react-router'

export function OptionalParam() {
  const { category } = useParams({ from: '/08-optional-param/{-$category}' })

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Optional Path Parameter
        </h1>
      </header>
      <p className="text-slate-400">
        Wrapping a dynamic segment as <code>{'{-$category}'}</code> makes it
        optional. This one route matches both <code>/08-optional-param</code>{' '}
        and <code>/08-optional-param/shoes</code>.
      </p>
      <p className="mt-4 text-slate-400">
        The value is <code>undefined</code> when the segment is missing.
        Category: <code>{category ?? 'none (all products)'}</code>
      </p>
      <div className="mt-4 flex gap-4">
        <Link
          to="/08-optional-param/{-$category}"
          params={{ category: undefined }}
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          All products
        </Link>
        {['shoes', 'hats'].map((name) => (
          <Link
            key={name}
            to="/08-optional-param/{-$category}"
            params={{ category: name }}
            className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
          >
            {name}
          </Link>
        ))}
      </div>
    </main>
  )
}
