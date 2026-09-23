import { Link, useParams } from '@tanstack/react-router'
import { CheckoutDescription } from './CheckoutDescription'

export function Checkout() {
  const { productId } = useParams({
    from: '/13-non-nested/products_/$productId/checkout',
  })

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Checkout
        </h1>
      </header>
      <CheckoutDescription productId={productId} />
      <Link
        to="/13-non-nested/products/$productId"
        params={{ productId }}
        className="mt-4 inline-block text-sm font-medium text-indigo-300 hover:text-indigo-200"
      >
        ← Back to product
      </Link>
    </main>
  )
}
