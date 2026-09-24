import { createFileRoute } from '@tanstack/react-router'
import { Colocation } from './-components/Colocation'

export const Route = createFileRoute('/04-colocation/')({
  component: Colocation,
})
