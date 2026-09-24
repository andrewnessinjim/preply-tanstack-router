import { createFileRoute } from "@tanstack/react-router";
import { SearchJsonProducts } from "./-components/SearchJsonProducts";
import type { ProductsSearch, SortBy, SortDir } from "./-components/types";

function isSortBy(value: unknown): value is SortBy {
  return value === "name" || value === "category" || value === "price";
}

function isSortDir(value: unknown): value is SortDir {
  return value === "asc" || value === "desc";
}

export const Route = createFileRoute("/22-search-json/products")({
  validateSearch: (search: Record<string, unknown>): ProductsSearch => ({
    q: typeof search.q === "string" ? search.q : undefined,
    maxPrice: typeof search.maxPrice === "number" ? search.maxPrice : undefined,
    category: typeof search.category === "string" ? search.category : undefined,
    sortBy: isSortBy(search.sortBy) ? search.sortBy : "name",
    sortDir: isSortDir(search.sortDir) ? search.sortDir : "asc",
  }),
  component: SearchJsonProducts,
});
