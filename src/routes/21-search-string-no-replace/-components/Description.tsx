import { Link } from '@tanstack/react-router'

type DescriptionProps = {
  q: string
}

export function Description({ q }: DescriptionProps) {
  return (
    <>
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
          to="/22-search-string-replace/products"
          search={{ q }}
          className="font-medium text-indigo-300 hover:text-indigo-200"
        >
          the replace: true version →
        </Link>
      </p>
    </>
  )
}
