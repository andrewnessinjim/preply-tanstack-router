export function Description() {
  return (
    <>
      <p className="text-slate-400">
        <code>useParams</code> reads values TanStack Router already knows are
        there, typed against one specific route. <code>useLocation</code>{' '}
        instead reads the browser's actual current URL, the same shape on
        every route — so its fields, like <code>pathname</code>, are plain
        strings, not the literal route paths <code>Link to</code> checks
        against.
      </p>
      <p className="mt-4 text-slate-400">
        A <code>Link</code> also knows whether it points at the current
        location. It adds <code>activeProps</code> when it does and{' '}
        <code>inactiveProps</code> when it doesn't, which is how the current
        category below is highlighted — no <code>useLocation</code> needed.
      </p>
      <p className="mt-4 text-slate-400">
        The active link also gets a <code>data-status="active"</code>{' '}
        attribute (inspect it in the browser's dev tools). Inactive links don't
        have it, so CSS can target <code>[data-status="active"]</code> to style
        the current link instead of using <code>activeProps</code>.
      </p>
    </>
  )
}
