import { createFileRoute } from '@tanstack/react-router'
import { LayoutPage } from '../../components/LayoutPage'

export const Route = createFileRoute('/11-pathless-layout/_legal/privacy')({
  component: () => (
    <LayoutPage
      title="Privacy"
      body="Sibling pages can share one layout while other top-level URLs use another."
    />
  ),
})
