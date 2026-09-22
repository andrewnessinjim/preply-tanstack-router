import { createFileRoute } from '@tanstack/react-router'
import { RouteMatchExample } from './-components/RouteMatchExample'

export const Route = createFileRoute('/14-route-matching/products/')({
  component: () => <RouteMatchExample current="products.index.tsx" />,
})
