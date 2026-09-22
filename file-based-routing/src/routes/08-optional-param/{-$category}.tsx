import { createFileRoute } from '@tanstack/react-router'
import { OptionalParam } from './-components/OptionalParam'

export const Route = createFileRoute('/08-optional-param/{-$category}')({
  component: OptionalParam,
})
