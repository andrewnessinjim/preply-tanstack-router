import { createFileRoute } from '@tanstack/react-router'
import { LayoutPage } from '../../../components/LayoutPage'

// This directory is the nested-directory counterpart to 09-layout's flat,
// dot-separated files. Same URLs, different file organization:
//
//   09-layout (flat)      10-nested-layout (directory)
//   shop.tsx              shop/route.tsx
//   shop.index.tsx        shop/index.tsx      <- this file
//   shop.products.tsx     shop/products.tsx
//   shop.about.tsx        shop/about.tsx

export const Route = createFileRoute('/10-nested-layout/shop/')({
  component: () => (
    <LayoutPage
      title="Home"
      body="Welcome to the store. This page is the index route, rendered inside the layout's Outlet."
    />
  ),
})
