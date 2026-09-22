import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/14-route-matching/products')({
  component: Outlet,
})
