import { createFileRoute } from '@tanstack/react-router'
import { ProductList } from './-components/ProductList'

export const Route = createFileRoute('/13-non-nested/products/')({
  component: ProductList,
})
