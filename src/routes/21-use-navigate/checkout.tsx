import { createFileRoute } from '@tanstack/react-router'
import { Checkout } from './-components/Checkout'

export const Route = createFileRoute('/21-use-navigate/checkout')({
  component: Checkout,
})
