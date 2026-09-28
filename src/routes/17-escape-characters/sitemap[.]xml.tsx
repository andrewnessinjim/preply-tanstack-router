import { createFileRoute } from '@tanstack/react-router'
import { EscapeCharacters } from './-components/EscapeCharacters'

export const Route = createFileRoute('/17-escape-characters/sitemap.xml')({
  component: () => (
    <EscapeCharacters
      title="Escaped Literal Dot"
      filename="sitemap[.]xml.tsx"
      body="In flat file-based routing, a . separates nested segments. Wrapping a . in square brackets escapes it, so it's treated as a literal character instead. This file matches exactly one segment, /17-escape-characters/sitemap.xml — the dot is part of the URL text, not a route separator."
    />
  ),
})
