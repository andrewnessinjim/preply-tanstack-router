import { Link, useLoaderData } from '@tanstack/react-router'
import { ProductsTable } from '../../../components/ProductsTable'
import { Description } from './Description'

export function LoaderProducts() {
  const products = useLoaderData({ from: '/19-loader/products' })

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <Link
          to="/19-loader"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          ← Back to the links
        </Link>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-50">
          Loader
        </h1>
      </header>
      <Description />
      <ProductsTable visibleProducts={products} />
    </main>
  )
}
