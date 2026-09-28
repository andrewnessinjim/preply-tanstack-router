import { createFileRoute } from '@tanstack/react-router'
import { ProductOverview } from '../../-components/ProductOverview'

export const Route = createFileRoute('/15-relative-links/products/$productId/')({
  component: ProductOverview,
})
