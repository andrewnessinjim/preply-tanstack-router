import { useLoaderData } from '@tanstack/react-router'
import { ProductsTable } from '../../../components/ProductsTable'
import { ProductsPageHeader } from './ProductsPageHeader'

export function PendingProducts() {
  const products = useLoaderData({ from: '/19-pending-component/products' })

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <ProductsPageHeader />
      <ProductsTable visibleProducts={products} />
    </main>
  )
}
