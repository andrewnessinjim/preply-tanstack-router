export function Description() {
  return (
    <p className="text-slate-400">
      A path segment that starts with <code>$</code> matches any value. This
      page's file is named <code>$productId.tsx</code>, so it matches{' '}
      <code>/06-dynamic-segment/1</code>, <code>/06-dynamic-segment/2</code>,
      and so on.
    </p>
  )
}
