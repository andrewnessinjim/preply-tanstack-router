import type { Product } from '../data/products'

type ProductsTableProps = {
  visibleProducts: ReadonlyArray<Product>
}

export function ProductsTable({ visibleProducts }: ProductsTableProps) {
  return (
    <table className="mt-4 w-full text-left">
      <thead>
        <tr className="text-xs uppercase tracking-wider text-slate-500">
          <th className="border-b border-slate-800 pb-2">Name</th>
          <th className="border-b border-slate-800 pb-2">Category</th>
          <th className="border-b border-slate-800 pb-2">Price</th>
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
              No products match your search.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
