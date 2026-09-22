import { createFileRoute } from '@tanstack/react-router'
import { LayoutPage } from '../../../components/LayoutPage'

export const Route = createFileRoute('/12-route-group/(legal)/privacy')({
  component: () => (
    <LayoutPage
      title="Privacy"
      body="Sibling pages can share one group's layout while other top-level URLs use another group's."
    />
  ),
})
