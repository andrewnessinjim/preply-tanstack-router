import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
  // Router-level config, not scoped to a single route file — unlike every
  // other example, this can't live inside src/routes/. It exists for
  // 18-url-rewrites: the store used to serve products at /item/:id before a
  // redesign renamed it to /products/:id. Old inbound links and bookmarks
  // still use /item/:id, so this transparently maps them onto the current
  // route, without changing the browser's address bar.
  //
  // /item/:id is only ever expected to be hit this way — from an old
  // bookmark or an external site's stale link — never as a link generated
  // from inside this app. Nothing here should ever produce a Link to it.
  rewrite: {
    input: ({ url }) => {
      const oldProductUrl = url.pathname.match(/^\/item\/(.+)$/)
      if (oldProductUrl) {
        url.pathname = `/18-url-rewrites/products/${oldProductUrl[1]}`
      }
      return url
    },
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
