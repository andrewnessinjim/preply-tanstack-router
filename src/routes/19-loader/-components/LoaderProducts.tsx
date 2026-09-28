import { useLoaderData } from '@tanstack/react-router'
import { ProductsTable } from '../../../components/ProductsTable'
import { Description } from './Description'

export function LoaderProducts() {
  const products = useLoaderData({ from: '/19-loader/products' })

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Loader
        </h1>
      </header>
      <Description />
      <ProductsTable visibleProducts={products} />
    </main>
  )
}
