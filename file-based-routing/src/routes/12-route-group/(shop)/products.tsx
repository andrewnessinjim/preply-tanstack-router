import { createFileRoute } from '@tanstack/react-router'
import { LayoutPage } from '../../../components/LayoutPage'

export const Route = createFileRoute('/12-route-group/(shop)/products')({
  component: () => (
    <LayoutPage
      title="Products"
      body="The URL is /12-route-group/products, not /12-route-group/(shop)/products. The (shop) folder adds the navbar but no path segment."
    />
  ),
})
