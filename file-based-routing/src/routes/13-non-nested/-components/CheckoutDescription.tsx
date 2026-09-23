type CheckoutDescriptionProps = {
  productId: string
}

export function CheckoutDescription({ productId }: CheckoutDescriptionProps) {
  return (
    <p className="text-slate-400">
      The URL is <code>/13-non-nested/products/{productId}/checkout</code>,
      but the route file is named <code>products_</code>. The trailing
      underscore opts out of nesting, so the <code>products</code> layout
      and its navbar are not rendered.
    </p>
  )
}
