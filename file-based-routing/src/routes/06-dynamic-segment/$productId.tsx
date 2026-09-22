import { createFileRoute } from '@tanstack/react-router'
import { DynamicSegment } from './-components/DynamicSegment'

export const Route = createFileRoute('/06-dynamic-segment/$productId')({
  component: DynamicSegment,
})
