import { createFileRoute } from '@tanstack/react-router'
import { ProductLayout } from '../../-components/ProductLayout'

export const Route = createFileRoute('/15-relative-links/products/$productId')({
  component: ProductLayout,
})
