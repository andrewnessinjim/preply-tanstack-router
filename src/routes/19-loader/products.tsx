import { createFileRoute } from '@tanstack/react-router'
import { fetchProducts } from '../../data/products'
import { LoaderProducts } from './-components/LoaderProducts'

export const Route = createFileRoute('/19-loader/products')({
  loader: () => fetchProducts(),
  component: LoaderProducts,
})
