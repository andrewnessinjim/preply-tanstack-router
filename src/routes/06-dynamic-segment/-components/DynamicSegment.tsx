import { Link, useParams } from '@tanstack/react-router'
import { Description } from './Description'

export function DynamicSegment() {
  const { productId } = useParams({ from: '/06-dynamic-segment/$productId' })

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Dynamic Route Segment
        </h1>
      </header>
      <Description />
      <p className="mt-4 text-slate-400">
        The matched value is read with <code>useParams</code>. Product ID:{' '}
        <code className="inline-block rounded bg-indigo-500/30 px-1.5 py-0.5 text-indigo-300">
          {productId}
        </code>
      </p>
      <div className="mt-4 flex gap-4">
        {['1', '2', '3'].map((id) => (
          <Link
            key={id}
            to="/06-dynamic-segment/$productId"
            params={{ productId: id }}
            className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
          >
            Product {id}
          </Link>
        ))}
      </div>
    </main>
  )
}
