import { createFileRoute } from '@tanstack/react-router'
import { RouteMatchExample } from './-components/RouteMatchExample'

export const Route = createFileRoute('/15-route-matching/about')({
  component: () => <RouteMatchExample current="about.tsx" />,
})
