import type { Product } from '../../../data/products'

export type SortBy = 'name' | 'category' | 'price'
export type SortDir = 'asc' | 'desc'

type Optional<T>= T | undefined;

export type ProductsSearch = {
  q: Optional<string>
  maxPrice: Optional<number>
  category: Optional<string>
  sortBy: SortBy
  sortDir: SortDir
}

export type SortableProductsTableProps = {
  visibleProducts: ReadonlyArray<Product>
  sortBy: SortBy
  sortDir: SortDir
}
