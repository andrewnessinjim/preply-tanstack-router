import { createFileRoute } from '@tanstack/react-router'
import { Checkout } from './-components/Checkout'

export const Route = createFileRoute('/12-non-nested/products_/$productId/checkout')({
  component: Checkout,
})
