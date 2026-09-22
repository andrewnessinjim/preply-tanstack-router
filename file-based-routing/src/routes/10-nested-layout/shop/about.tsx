import { createFileRoute } from '@tanstack/react-router'
import { LayoutPage } from '../../../components/LayoutPage'

export const Route = createFileRoute('/10-nested-layout/shop/about')({
  component: () => (
    <LayoutPage
      title="About"
      body="About the store. The layout route renders the navbar once and swaps its children in the Outlet."
    />
  ),
})
