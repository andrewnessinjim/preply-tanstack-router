import { createFileRoute } from '@tanstack/react-router'
import { LayoutPage } from '../../components/LayoutPage'

export const Route = createFileRoute('/11-pathless-layout/_shop/cart')({
  component: () => (
    <LayoutPage
      title="Cart"
      body="Also wrapped by the _shop layout. Only the file name carries the _shop prefix, never the URL."
    />
  ),
})
