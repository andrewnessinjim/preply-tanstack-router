import { useNavigate, useSearch } from '@tanstack/react-router'

const products = [
  { name: 'Running Shoes', price: 89 },
  { name: 'Leather Boots', price: 129 },
  { name: 'Canvas Sneakers', price: 59 },
  { name: 'Wool Socks', price: 15 },
  { name: 'Rain Jacket', price: 99 },
  { name: 'Baseball Cap', price: 25 },
  { name: 'Leather Belt', price: 35 },
  { name: 'Sunglasses', price: 45 },
  { name: 'Backpack', price: 79 },
  { name: 'Water Bottle', price: 19 },
] as const

export function SearchParams() {
  const { q } = useSearch({ from: '/18-search-params/products' })
  const navigate = useNavigate({ from: '/18-search-params/products' })

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(q.toLowerCase()),
  )

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Search Params
        </h1>
      </header>
      <p className="text-slate-400">
        A path param is part of the URL's path; a search param is the{' '}
        <code>?query=string</code> part. A route declares{' '}
        <code>validateSearch</code> to parse and type it, the same way a
        file name like <code>$productId.tsx</code> declares a path param.
      </p>
      <p className="mt-4 text-slate-400">
        This table is hardcoded — no data loading yet — but{' '}
        <code>q</code> filtering it lives entirely in the URL, so the
        filtered view is shareable and survives a refresh.
      </p>
      <input
        value={q}
        onChange={(event) => {
          const value = event.target.value
          navigate({
            search: (prev) => ({ ...prev, q: value }),
            replace: true,
          })
        }}
        placeholder="Search products…"
        className="mt-6 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none"
      />
      <table className="mt-4 w-full text-left">
        <thead>
          <tr className="text-xs uppercase tracking-wider text-slate-500">
            <th className="border-b border-slate-800 pb-2">Name</th>
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
                ${product.price}
              </td>
            </tr>
          ))}
          {visibleProducts.length === 0 && (
            <tr>
              <td colSpan={2} className="py-4 text-slate-600">
                No products match "{q}".
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  )
}
