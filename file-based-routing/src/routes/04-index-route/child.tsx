import { createFileRoute } from '@tanstack/react-router'
import { IndexRouteChild } from '../../components/IndexRouteChild'

export const Route = createFileRoute('/04-index-route/child')({
  component: IndexRouteChild,
})
