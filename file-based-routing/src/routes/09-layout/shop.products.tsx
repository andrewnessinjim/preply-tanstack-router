import { createFileRoute } from '@tanstack/react-router'
import { LayoutPage } from '../../components/LayoutPage'

export const Route = createFileRoute('/09-layout/shop/products')({
  component: () => (
    <LayoutPage
      title="Products"
      body="Browse our catalog. Only this part of the page changes when you navigate; the navbar stays."
    />
  ),
})
