import { createFileRoute } from '@tanstack/react-router'
import { LayoutPage } from '../../../components/LayoutPage'

export const Route = createFileRoute('/12-route-group/(shop)/cart')({
  component: () => (
    <LayoutPage
      title="Cart"
      body="Also wrapped by the (shop) layout. Only the folder name carries the group, never the URL."
    />
  ),
})
