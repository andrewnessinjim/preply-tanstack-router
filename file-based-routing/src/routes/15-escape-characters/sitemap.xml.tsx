import { createFileRoute } from '@tanstack/react-router'
import { EscapeCharacters } from './-components/EscapeCharacters'

export const Route = createFileRoute('/15-escape-characters/sitemap/xml')({
  component: () => (
    <EscapeCharacters
      title="Unescaped Dot"
      filename="sitemap.xml.tsx"
      body="Without brackets, the . here is read as an ordinary flat-routing separator, exactly like the . in 09-layout/shop.products.tsx. So this file doesn't match /sitemap.xml at all — it matches two nested segments, /15-escape-characters/sitemap/xml."
    />
  ),
})
