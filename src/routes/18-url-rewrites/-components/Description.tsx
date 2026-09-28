export function Description() {
  return (
    <>
      <p className="text-slate-400">
        A rewrite is configured once on the router (in <code>main.tsx</code>,
        not in a route file) and transforms an incoming URL before the
        router matches it — unlike a redirect, the address bar never
        changes.
      </p>
      <p className="mt-4 text-slate-400">
        This page is <code>/18-url-rewrites/products/$productId</code>. Say
        this store used to serve products at <code>/item/:id</code> before a
        redesign renamed it — that URL has no route of its own anymore, but
        the router's <code>rewrite.input</code> maps it onto this route
        before matching, so an old inbound link or bookmark still resolves.
      </p>
      <p className="mt-4 text-slate-400">
        <code>/item/:id</code> is only ever expected to be reached from an
        old bookmark or an external site's stale link — nothing inside this
        app should ever generate a link to it. The link below only exists to
        simulate that outside arrival.
      </p>
    </>
  )
}
