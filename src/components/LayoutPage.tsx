type LayoutPageProps = {
  title: string
  body: string
}

export function LayoutPage({ title, body }: LayoutPageProps) {
  return (
    <section>
      <h1 className="text-4xl font-bold tracking-tight text-slate-50">
        {title}
      </h1>
      <p className="mt-4 text-slate-400">{body}</p>
    </section>
  )
}
