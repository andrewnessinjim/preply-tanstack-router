import { createFileRoute } from '@tanstack/react-router'
import { RouteMatchExample } from './-components/RouteMatchExample'

export const Route = createFileRoute('/14-route-matching/products/specialOffer')({
  component: () => <RouteMatchExample current="products.specialOffer.tsx" />,
})
