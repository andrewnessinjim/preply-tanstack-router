import { Link } from '@tanstack/react-router'
import { Route } from '../products/$productId/reviews'

export function ProductReviews() {
  const { productId } = Route.useParams()

  return (
    <>
      <p className="text-slate-400">
        The link below has no <code>from</code>. A relative path then
        resolves against the current location,{' '}
        <code>/15-relative-links/products/{productId}/reviews</code>, so{' '}
        <code>to=".."</code> leads back to{' '}
        <code>/15-relative-links/products/{productId}</code>.
      </p>
      <Link
        to=".."
        className="mt-4 inline-block text-sm font-medium text-indigo-300 hover:text-indigo-200"
      >
        ← Back to the overview
      </Link>
    </>
  )
}
