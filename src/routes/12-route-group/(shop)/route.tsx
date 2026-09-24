import { createFileRoute } from '@tanstack/react-router'
import { ShopLayout } from './-components/ShopLayout'

export const Route = createFileRoute('/12-route-group/(shop)')({
  component: ShopLayout,
})
