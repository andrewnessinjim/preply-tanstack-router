export function Description() {
  return (
    <>
      <p className="text-slate-400">
        <code>products.index.tsx</code> and <code>about.tsx</code> don't
        compete with anything — each has its own exclusive URL.
      </p>
      <p className="mt-4 text-slate-400">
        But <code>products/$productId</code> and{' '}
        <code>products/specialOffer</code> both structurally match{' '}
        <code>/products/specialOffer</code>: a static segment always beats a
        dynamic one, so <code>specialOffer</code> wins there even though{' '}
        <code>$productId</code> could also capture that exact value.
      </p>
      <p className="mt-4 text-slate-400">
        <code>products/$</code> is a splat: it also matches{' '}
        <code>/products/specialOffer</code> and every other{' '}
        <code>/products/...</code> URL, but it ranks last, below both of
        them. It only actually wins on a URL nothing else can match, like{' '}
        <code>/products/shoes/running</code>.
      </p>
    </>
  )
}
