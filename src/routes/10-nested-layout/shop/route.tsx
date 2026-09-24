import { createFileRoute } from '@tanstack/react-router'
import { NestedLayout } from './-components/NestedLayout'

export const Route = createFileRoute('/10-nested-layout/shop')({
  component: NestedLayout,
})
