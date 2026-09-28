import { Link } from '@tanstack/react-router'
import type { SortableProductsTableProps, SortBy } from './types'

const columns: ReadonlyArray<{ key: SortBy; label: string }> = [
  { key: 'name', label: 'Name' },
  { key: 'category', label: 'Category' },
  { key: 'price', label: 'Price' },
]

export function SortableProductsTable({
  visibleProducts,
  sortBy,
  sortDir,
}: SortableProductsTableProps) {
  return (
    <table className="mt-4 w-full text-left">
      <thead>
        <tr className="text-xs uppercase tracking-wider text-slate-500">
          {columns.map((column) => {
            const isActive = column.key === sortBy
            return (
              <th key={column.key} className="border-b border-slate-800 pb-2">
                <Link
                  from="/23-search-json/products"
                  search={(prev) => ({
                    ...prev,
                    sortBy: column.key,
                    sortDir:
                      isActive && prev.sortDir === 'asc' ? 'desc' : 'asc',
                  })}
                  className={
                    isActive
                      ? 'text-indigo-300'
                      : 'text-slate-500 hover:text-slate-300'
                  }
                >
                  {column.label}
                  {isActive ? (sortDir === 'asc' ? ' ↑' : ' ↓') : ''}
                </Link>
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {visibleProducts.map((product) => (
          <tr key={product.name}>
            <td className="border-b border-slate-800 py-2 text-slate-100">
              {product.name}
            </td>
            <td className="border-b border-slate-800 py-2 text-slate-400">
              {product.category}
            </td>
            <td className="border-b border-slate-800 py-2 text-slate-400">
              ${product.price}
            </td>
          </tr>
        ))}
        {visibleProducts.length === 0 && (
          <tr>
            <td colSpan={3} className="py-4 text-slate-600">
              No products match your filters.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
