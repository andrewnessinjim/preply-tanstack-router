import { Link } from '@tanstack/react-router'

export function Description() {
  return (
    <>
      <p className="text-slate-400">
        Same fields as the previous example, but <code>validateSearch</code>{' '}
        is a Zod schema instead of a hand-written function — TanStack Router
        accepts it directly, since Zod implements the{' '}
        <a
          href="https://github.com/standard-schema/standard-schema"
          className="text-indigo-300 hover:text-indigo-200"
        >
          Standard Schema
        </a>{' '}
        spec.
      </p>
      <p className="mt-4 text-slate-400">
        <code>.catch(defaultValue)</code> replaces every{' '}
        <code>typeof x === '...' ? x : fallback</code> check from before —
        wrong type, missing field, both fall back the same way. And{' '}
        <code>SortBy</code>/<code>SortDir</code>/<code>ProductsSearch</code>{' '}
        are now <code>z.infer</code>'d from the schema itself, not typed by
        hand in a separate file that could drift out of sync with it.
      </p>
      <p className="mt-4 text-slate-400">
        This also fixes something the previous example couldn't: a{' '}
        <code>Link</code> to this route with no <code>search</code> prop at
        all type-checks here. <code>.catch()</code> alone doesn't do it — it
        only changes what happens on a parse failure, not whether the field
        is required. Zod tracks separate input and output types, and it's
        specifically <code>.default()</code> that marks a field optional on
        input, because <code>sortBy</code>/<code>sortDir</code> chain both:{' '}
        <code>{"sortBySchema.catch('name').default('name')"}</code>. An
        invalid <code>?sortBy=garbage</code> in the URL still falls back
        gracefully via <code>.catch()</code>, and omitting the field from a{' '}
        <code>Link</code> is no longer a type error, thanks to{' '}
        <code>.default()</code> — proof, not just a claim:{' '}
        <Link
          to="/21-search-json-zod/products"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          this link has no search prop and still compiles
        </Link>
        .
      </p>
    </>
  )
}
