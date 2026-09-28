import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/16-route-matching/products')({
  component: Outlet,
})
