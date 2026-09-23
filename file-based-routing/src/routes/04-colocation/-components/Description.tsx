export function Description() {
  return (
    <>
      <p className="text-slate-400">
        Any file or folder inside <code>src/routes/</code> whose name starts
        with <code>-</code> is excluded from routing. This page's component
        lives right next to its route, in{' '}
        <code>04-colocation/-components/Colocation.tsx</code>, instead of in{' '}
        <code>src/components/</code>.
      </p>
      <p className="mt-4 text-slate-400">
        From here on, every example colocates its own components this way. A
        component reused by more than one example still lives in{' '}
        <code>src/components/</code>, since it does not belong to a single
        route.
      </p>
    </>
  )
}
