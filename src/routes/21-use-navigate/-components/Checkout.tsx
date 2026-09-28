import { useNavigate } from '@tanstack/react-router'

export function Checkout() {
  const navigate = useNavigate()

  function placeOrder(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    // In a real store the server saves the order and returns its ID. The
    // destination isn't known until then, so it can't be written into a Link.
    const orderId = String(Math.floor(Math.random() * 9000) + 1000)
    navigate({ to: '/21-use-navigate/orders/$orderId', params: { orderId } })
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Checkout
        </h1>
      </header>
      <p className="text-slate-400">
        A <code>Link</code> navigates when the user clicks it, to a destination
        known up front. <code>useNavigate</code> returns a{' '}
        <code>navigate</code> function you call from your own code instead,
        when navigating is the result of something else happening.
      </p>
      <p className="mt-4 text-slate-400">
        Here the form's submit handler places the order, then calls{' '}
        <code>navigate</code> to the confirmation page for the new order
        number, which doesn't exist until the order is placed. Submit with an
        empty name and nothing happens: the browser blocks the form, so the
        handler never runs.
      </p>
      <form onSubmit={placeOrder} className="mt-6">
        <input
          name="name"
          required
          placeholder="Your name"
          className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none"
        />
        <button
          type="submit"
          className="mt-4 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-slate-50 hover:bg-indigo-400"
        >
          Place order
        </button>
      </form>
    </main>
  )
}
