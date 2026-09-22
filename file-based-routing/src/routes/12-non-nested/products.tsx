import { createFileRoute } from '@tanstack/react-router'
import { ProductsLayout } from './-components/ProductsLayout'

export const Route = createFileRoute('/12-non-nested/products')({
  component: ProductsLayout,
})
