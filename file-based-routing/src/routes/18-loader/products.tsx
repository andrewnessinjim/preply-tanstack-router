import { createFileRoute } from '@tanstack/react-router'
import { fetchProducts } from '../../data/products'
import { LoaderProducts } from './-components/LoaderProducts'

export const Route = createFileRoute('/18-loader/products')({
  // Without this, after the default 1000ms (pendingMs) the router stops
  // showing the previous page while the loader is still running, so the
  // screen goes blank until the data arrives.
  pendingMs: Infinity,
  loader: () => fetchProducts(),
  component: LoaderProducts,
})
