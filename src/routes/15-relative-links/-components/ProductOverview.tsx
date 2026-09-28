import { Route } from '../products/$productId/index'

export function ProductOverview() {
  const { productId } = Route.useParams()

  return (
    <>
      <p className="text-slate-400">
        The links above sit in this product's layout route, and use its{' '}
        <code>fullPath</code>,{' '}
        <code>/15-relative-links/products/$productId</code>, as{' '}
        <code>from</code>.
      </p>
      <p className="mt-4 text-slate-400">
        <code>..</code> goes up one level: "All products" has{' '}
        <code>to=".."</code> and leads to{' '}
        <code>/15-relative-links/products</code>.
      </p>
      <p className="mt-4 text-slate-400">
        <code>.</code> is the <code>from</code> route itself: "Overview" has{' '}
        <code>to="."</code> and leads to{' '}
        <code>/15-relative-links/products/{productId}</code>, this page.
      </p>
    </>
  )
}
