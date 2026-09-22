import { createFileRoute } from '@tanstack/react-router'
import { LegalLayout } from './-components/LegalLayout'

export const Route = createFileRoute('/12-route-group/(legal)')({
  component: LegalLayout,
})
