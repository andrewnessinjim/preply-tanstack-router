import { Link, useParams } from '@tanstack/react-router'

export function Splat() {
  const { _splat } = useParams({ from: '/07-splat/$' })

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Splat Route
        </h1>
      </header>
      <p className="text-slate-400">
        A lone <code>$</code> in the filename (<code>07-splat/$.tsx</code>)
        matches the rest of the URL, including any slashes. Unlike a dynamic
        segment, it is not limited to one segment.
      </p>
      <p className="mt-4 text-slate-400">
        The matched value is available as <code>_splat</code>. Value:{' '}
        <code className="inline-block rounded bg-indigo-500/30 px-1.5 py-0.5 text-indigo-300">
          {_splat}
        </code>
      </p>
      <div className="mt-4 flex gap-4">
        {['shoes', 'shoes/running', 'accessories/hats/summer'].map((path) => (
          <Link
            key={path}
            to="/07-splat/$"
            params={{ _splat: path }}
            className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
          >
            /{path}
          </Link>
        ))}
      </div>
    </main>
  )
}
