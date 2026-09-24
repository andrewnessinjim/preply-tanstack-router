import { createFileRoute } from '@tanstack/react-router'
import { LayoutPage } from '../../components/LayoutPage'

export const Route = createFileRoute('/11-pathless-layout/_shop/products')({
  component: () => (
    <LayoutPage
      title="Products"
      body="The URL is /11-pathless-layout/products, not /11-pathless-layout/_shop/products. The _shop layout adds the navbar but no path segment."
    />
  ),
})
