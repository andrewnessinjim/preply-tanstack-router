import { createFileRoute } from '@tanstack/react-router'
import { LayoutPage } from '../../../components/LayoutPage'

export const Route = createFileRoute('/12-route-group/(legal)/terms')({
  component: () => (
    <LayoutPage
      title="Terms"
      body="This page is wrapped by a different route group, (legal), yet the URL is just /12-route-group/terms."
    />
  ),
})
