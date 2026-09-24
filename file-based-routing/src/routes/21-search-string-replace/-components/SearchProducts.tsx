import { useNavigate, useSearch } from '@tanstack/react-router'
import { ProductsTable } from '../../../components/ProductsTable'
import { products } from '../../../data/products'
import { Description } from './Description'

export function SearchProducts() {
  const { q } = useSearch({ from: '/21-search-string-replace/products' })
  const navigate = useNavigate({ from: '/21-search-string-replace/products' })

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(q.toLowerCase()),
  )

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Search Params: Replace
        </h1>
      </header>
      <Description q={q} />
      <input
        value={q}
        onChange={(event) => {
          navigate({ search: { q: event.target.value }, replace: true })
        }}
        placeholder="Search products…"
        className="mt-6 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none"
      />
      <ProductsTable visibleProducts={visibleProducts} />
    </main>
  )
}
