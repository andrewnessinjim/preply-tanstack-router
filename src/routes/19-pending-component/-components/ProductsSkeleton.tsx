import { ProductsPageHeader } from './ProductsPageHeader'

export function ProductsSkeleton() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <ProductsPageHeader />
      <div className="mt-4 space-y-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="h-9 animate-pulse rounded-lg bg-slate-900"
          />
        ))}
      </div>
    </main>
  )
}
