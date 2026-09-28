export function Description() {
  return (
    <>
      <p className="text-slate-400">
        The previous examples had one search field, a plain string. This one
        has five, of different types — <code>q</code> is a string,{' '}
        <code>maxPrice</code> is a number or <code>undefined</code>,{' '}
        <code>category</code> is a string or <code>undefined</code>, and{' '}
        <code>sortBy</code>/<code>sortDir</code> are each a fixed set of
        literal values. <code>validateSearch</code> checks every field's
        actual type before trusting it, defaulting anything wrong or missing.
        <code>undefined</code> rather than <code>null</code> is deliberate:
        the router omits a search field from the URL entirely when its value
        is <code>undefined</code>, but still writes out a literal{' '}
        <code>=null</code> — clear filters and the key disappears instead of
        lingering as noise.
      </p>
      <p className="mt-4 text-slate-400">
        Every control below only changes its own field, via{' '}
        <code>{'(prev) => ({ ...prev, field: value })'}</code> — the same
        pattern from the previous example, just with more fields to
        accidentally clobber if you forget to spread <code>prev</code>.
      </p>
      <p className="mt-4 text-slate-400">
        One thing this approach can't express:{' '}
        <code>{'<Link to="/24-search-json/products">'}</code> with no{' '}
        <code>search</code> prop still fails to type-check, even though every
        field above falls back to a working default. <code>validateSearch</code>{' '}
        here is one plain function with one return type,{' '}
        <code>ProductsSearch</code>, where <code>sortBy</code>/
        <code>sortDir</code> are typed as plain <code>SortBy</code>/
        <code>SortDir</code> — never <code>{'| undefined'}</code>. TypeScript
        has no way to see that a runtime default exists; it just sees two
        required fields and demands you supply them.
      </p>
    </>
  )
}
