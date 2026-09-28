import { createFileRoute } from '@tanstack/react-router'
import { ProductReviews } from '../../-components/ProductReviews'

export const Route = createFileRoute('/15-relative-links/products/$productId/reviews')({
  component: ProductReviews,
})
