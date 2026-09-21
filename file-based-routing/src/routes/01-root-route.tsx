import { createFileRoute } from '@tanstack/react-router'
import { RootRoute } from '../components/RootRoute'

export const Route = createFileRoute('/01-root-route')({
  component: RootRoute,
})
