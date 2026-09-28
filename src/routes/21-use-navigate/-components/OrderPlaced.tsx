import { Link } from '@tanstack/react-router'
import { Route } from '../orders.$orderId'

export function OrderPlaced() {
  const { orderId } = Route.useParams()

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Order placed
        </h1>
      </header>
      <p className="text-slate-400">
        Your order number is {orderId}. The checkout page brought you here by
        calling <code>navigate</code>, not through a <code>Link</code>.
      </p>
      <Link
        to="/21-use-navigate/checkout"
        className="mt-4 inline-block text-sm font-medium text-indigo-300 hover:text-indigo-200"
      >
        ← Back to checkout
      </Link>
    </main>
  )
}
