import { createFileRoute } from '@tanstack/react-router'
import { RouteMatchExample } from './-components/RouteMatchExample'

export const Route = createFileRoute('/16-route-matching/products/$productId')({
  component: () => <RouteMatchExample current="products.$productId.tsx" />,
})
