import { createFileRoute } from '@tanstack/react-router'
import { fetchProducts } from '../../data/products'
import { LoaderProducts } from './-components/LoaderProducts'

export const Route = createFileRoute('/19-loader/products')({
  loader: () => fetchProducts(),
  // By default the router caches loaded data for 5 minutes and shows it
  // instantly on the next visit. 0 drops it on leaving, so every visit waits
  // for the loader again and the three links can be compared repeatedly.
  gcTime: 0,
  component: LoaderProducts,
})
