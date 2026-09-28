import { createFileRoute } from '@tanstack/react-router'
import { OrderPlaced } from './-components/OrderPlaced'

export const Route = createFileRoute('/21-use-navigate/orders/$orderId')({
  component: OrderPlaced,
})
