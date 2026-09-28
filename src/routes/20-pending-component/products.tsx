import { createFileRoute } from '@tanstack/react-router'
import { fetchProducts } from '../../data/products'
import { PendingProducts } from './-components/PendingProducts'
import { ProductsSkeleton } from './-components/ProductsSkeleton'

export const Route = createFileRoute('/20-pending-component/products')({
  loader: () => fetchProducts(),
  // pendingMs is how long the router keeps the PREVIOUS page mounted
  // before switching to pendingComponent. A nonzero value would reopen a
  // gap where the nav updates but the outlet still shows the old page —
  // 0 makes the skeleton commit in the same instant as the navigation.
  pendingMs: 0,
  pendingComponent: ProductsSkeleton,
  component: PendingProducts,
})
