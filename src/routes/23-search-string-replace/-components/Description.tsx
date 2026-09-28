import { Link } from '@tanstack/react-router'

type DescriptionProps = {
  q: string
}

export function Description({ q }: DescriptionProps) {
  return (
    <p className="text-slate-400">
      Same as{' '}
      <Link
        to="/22-search-string-no-replace/products"
        search={{ q }}
        className="font-medium text-indigo-300 hover:text-indigo-200"
      >
        the previous example →
      </Link>
      , except this input navigates with <code>replace: true</code>. Type a
      few letters, then hit your browser's Back button — it takes you away
      from this search entirely, in one step, instead of undoing one
      character at a time.
    </p>
  )
}
