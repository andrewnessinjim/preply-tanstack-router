import { createFileRoute } from '@tanstack/react-router'
import { ProductDetail } from './-components/ProductDetail'

export const Route = createFileRoute('/12-non-nested/products/$productId')({
  component: ProductDetail,
})
