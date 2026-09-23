import { Link, useNavigate, useSearch } from '@tanstack/react-router'
import { ProductsTable } from '../../../components/ProductsTable'
import { products } from '../../../data/products'

export function SearchProducts() {
  const { q } = useSearch({ from: '/19-search-string-replace/products' })
  const navigate = useNavigate({ from: '/19-search-string-replace/products' })

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
      <p className="text-slate-400">
        Same as{' '}
        <Link
          to="/18-search-string-no-replace/products"
          search={{ q }}
          className="font-medium text-indigo-300 hover:text-indigo-200"
        >
          the previous example →
        </Link>
        , except this input navigates with <code>replace: true</code>. Type
        a few letters, then hit your browser's Back button — it takes you
        away from this search entirely, in one step, instead of undoing one
        character at a time.
      </p>
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
