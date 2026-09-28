import { createFileRoute } from '@tanstack/react-router'
import { ProductList } from '../-components/ProductList'

export const Route = createFileRoute('/15-relative-links/products/')({
  component: ProductList,
})
