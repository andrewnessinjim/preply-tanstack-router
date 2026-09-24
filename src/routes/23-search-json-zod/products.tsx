import { createFileRoute } from '@tanstack/react-router'
import { SearchJsonProducts } from './-components/SearchJsonProducts'
import { productsSearchSchema } from './-schema/schema'

export const Route = createFileRoute('/23-search-json-zod/products')({
  validateSearch: productsSearchSchema,
  component: SearchJsonProducts,
})
