export function Description() {
  return (
    <>
      <p className="text-slate-400">
        A route's <code>loader</code> runs before the route's component is
        rendered. Navigating to this page waits for it to resolve — nothing
        appears until the data is ready.
      </p>
      <p className="mt-4 text-slate-400">
        This page's loader is <code>() =&gt; fetchProducts()</code>, which
        requests the products table from Supabase (watch for it in the
        Network tab), then adds an artificial 2–2.5s delay so the wait is
        easy to see. The component then reads the result with{' '}
        <code>useLoaderData</code>.
      </p>
    </>
  )
}
