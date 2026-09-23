import { Link, useNavigate, useSearch } from '@tanstack/react-router'
import { ProductsTable } from '../../../components/ProductsTable'
import { products } from '../../../data/products'

export function SearchProducts() {
  const { q } = useSearch({ from: '/18-search-string-no-replace/products' })
  const navigate = useNavigate({ from: '/18-search-string-no-replace/products' })

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(q.toLowerCase()),
  )

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Search Params: No Replace
        </h1>
      </header>
      <p className="text-slate-400">
        A path param is part of the URL's path; a search param is the{' '}
        <code>?query=string</code> part. A route declares{' '}
        <code>validateSearch</code> to parse and type it, the same way a
        file name like <code>$productId.tsx</code> declares a path param.
      </p>
      <p className="mt-4 text-slate-400">
        This input navigates with <code>replace: false</code> (the default),
        so every keystroke pushes a new browser history entry. Type a few
        letters, then hit your browser's Back button — it undoes one
        character at a time.
      </p>
      <p className="mt-4 text-slate-400">
        Compare with{' '}
        <Link
          to="/19-search-string-replace/products"
          search={{ q }}
          className="font-medium text-indigo-300 hover:text-indigo-200"
        >
          the replace: true version →
        </Link>
      </p>
      <input
        value={q}
        onChange={(event) => {
          navigate({ search: { q: event.target.value }, replace: false })
        }}
        placeholder="Search products…"
        className="mt-6 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none"
      />
      <ProductsTable visibleProducts={visibleProducts} />
    </main>
  )
}
