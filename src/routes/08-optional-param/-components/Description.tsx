export function Description() {
  return (
    <p className="text-slate-400">
      Wrapping a dynamic segment as <code>{'{-$category}'}</code> makes it
      optional. This one route matches both <code>/08-optional-param</code>{' '}
      and <code>/08-optional-param/shoes</code>.
    </p>
  )
}
