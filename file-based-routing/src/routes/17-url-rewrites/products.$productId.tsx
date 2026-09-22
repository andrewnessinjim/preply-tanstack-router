import { createFileRoute } from '@tanstack/react-router'
import { UrlRewrites } from './-components/UrlRewrites'

export const Route = createFileRoute('/17-url-rewrites/products/$productId')({
  component: UrlRewrites,
})
