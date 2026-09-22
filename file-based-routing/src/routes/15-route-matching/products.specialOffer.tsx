import { createFileRoute } from '@tanstack/react-router'
import { RouteMatchExample } from './-components/RouteMatchExample'

export const Route = createFileRoute('/15-route-matching/products/specialOffer')({
  component: () => <RouteMatchExample current="products.specialOffer.tsx" />,
})
