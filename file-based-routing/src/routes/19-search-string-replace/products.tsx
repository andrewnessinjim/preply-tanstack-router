import { createFileRoute } from '@tanstack/react-router'
import { SearchProducts } from './-components/SearchProducts'

type ProductsSearch = {
  q: string
}

export const Route = createFileRoute('/19-search-string-replace/products')({
  validateSearch: (search: Record<string, unknown>): ProductsSearch => ({
    q: typeof search.q === 'string' ? search.q : '',
  }),
  component: SearchProducts,
})
