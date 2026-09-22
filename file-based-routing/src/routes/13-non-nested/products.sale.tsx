import { createFileRoute } from '@tanstack/react-router'
import { LayoutPage } from '../../components/LayoutPage'

export const Route = createFileRoute('/13-non-nested/products/sale')({
  component: () => (
    <LayoutPage
      title="Sale"
      body="Another page nested in the products layout: the navbar stays visible when you navigate here."
    />
  ),
})
