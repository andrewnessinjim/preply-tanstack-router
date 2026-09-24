export function Description() {
  return (
    <>
      <p className="text-slate-400">
        <code>pendingMs</code> is how long the router will wait on a
        navigation before giving up and committing anyway. Past that point,
        it renders <code>pendingComponent</code> in place of the real
        component — so the address bar, the layout, and this page all
        update together, just with a skeleton where the data would go.
      </p>
      <p className="mt-4 text-slate-400">
        Compare this to <code>18-loader</code>, which sets{' '}
        <code>pendingMs: Infinity</code> so the navigation never commits
        early — nothing changes anywhere until the loader resolves.
      </p>
    </>
  )
}
