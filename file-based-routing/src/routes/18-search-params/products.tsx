import { createFileRoute } from '@tanstack/react-router'
import { SearchParams } from './-components/SearchParams'

type ProductsSearch = {
  q: string
}

export const Route = createFileRoute('/18-search-params/products')({
  validateSearch: (search: Record<string, unknown>): ProductsSearch => ({
    q: typeof search.q === 'string' ? search.q : '',
  }),
  component: SearchParams,
})
