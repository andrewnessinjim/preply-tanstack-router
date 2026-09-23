import { Link, useParams } from '@tanstack/react-router'
import { ProductDetailDescription } from './ProductDetailDescription'

export function ProductDetail() {
  const { productId } = useParams({
    from: '/13-non-nested/products/$productId',
  })

  return (
    <section>
      <h1 className="text-4xl font-bold tracking-tight text-slate-50">
        Product {productId}
      </h1>
      <ProductDetailDescription />
      <Link
        to="/13-non-nested/products/$productId/checkout"
        params={{ productId }}
        className="mt-4 inline-block text-sm font-medium text-indigo-300 hover:text-indigo-200"
      >
        Go to checkout →
      </Link>
    </section>
  )
}
