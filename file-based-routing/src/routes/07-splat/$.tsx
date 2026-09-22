import { createFileRoute } from '@tanstack/react-router'
import { Splat } from './-components/Splat'

export const Route = createFileRoute('/07-splat/$')({
  component: Splat,
})
