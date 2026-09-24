import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/15-route-matching/products')({
  component: Outlet,
})
