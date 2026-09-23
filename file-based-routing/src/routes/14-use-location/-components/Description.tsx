export function Description() {
  return (
    <p className="text-slate-400">
      <code>useParams</code> reads values TanStack Router already knows are
      there, typed against one specific route. <code>useLocation</code>{' '}
      instead reads the browser's actual current URL, the same shape on
      every route — so its fields, like <code>pathname</code>, are plain
      strings, not the literal route paths <code>Link to</code> checks
      against.
    </p>
  )
}
