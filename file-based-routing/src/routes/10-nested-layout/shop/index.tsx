import { createFileRoute } from '@tanstack/react-router'
import { LayoutPage } from '../../../components/LayoutPage'

export const Route = createFileRoute('/10-nested-layout/shop/')({
  component: () => (
    <LayoutPage
      title="Home"
      body="Welcome to the store. This page is the index route, rendered inside the layout's Outlet."
    />
  ),
})
