import { Link } from '@tanstack/react-router'

type EscapeCharactersProps = {
  title: string
  filename: string
  body: string
}

export function EscapeCharacters({
  title,
  filename,
  body,
}: EscapeCharactersProps) {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          {title}
        </h1>
      </header>
      <p className="text-slate-400">
        File: <code>{filename}</code>
      </p>
      <p className="mt-4 text-slate-400">{body}</p>
      <div className="mt-4 flex gap-4">
        <Link
          to="/16-escape-characters/sitemap.xml"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          Escaped →
        </Link>
        <Link
          to="/16-escape-characters/sitemap/xml"
          className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          Unescaped →
        </Link>
      </div>
    </main>
  )
}
