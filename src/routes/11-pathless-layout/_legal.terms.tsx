import { createFileRoute } from '@tanstack/react-router'
import { LayoutPage } from '../../components/LayoutPage'

export const Route = createFileRoute('/11-pathless-layout/_legal/terms')({
  component: () => (
    <LayoutPage
      title="Terms"
      body="This page is wrapped by a different pathless layout, _legal, yet the URL is just /11-pathless-layout/terms."
    />
  ),
})
