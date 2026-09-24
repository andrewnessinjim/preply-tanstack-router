import { createFileRoute } from '@tanstack/react-router'
import { ProductsLayout } from './-components/ProductsLayout'

export const Route = createFileRoute('/13-non-nested/products')({
  component: ProductsLayout,
})
