# TanStack Router teaching project

Two sibling projects: `file-based-routing` and `code-based-routing`. Used to teach TanStack Router to students. Example domain: an e-commerce store (chosen because it is familiar to students).

## Conventions

- Route files in `src/routes/` must export only the `Route`. Exporting components from a route file triggers the react-refresh ESLint error ("Fast refresh only works when a file only exports components").
- From example 04 (Colocation) onward, each example's own component(s) live next to its route, in a `-components/` subfolder inside that example's route directory (e.g. `src/routes/06-dynamic-segment/-components/DynamicSegment.tsx`). A leading `-` on a file or folder anywhere under `src/routes/` excludes it from route generation (TanStack Router's default `routeFileIgnorePrefix`), so this colocates implementation with the route that uses it. A component reused by more than one example (e.g. `LayoutPage`) is the exception and stays in `src/components/`, imported by each route that needs it, since it isn't owned by a single route. Examples 01–03 predate this convention and keep their components in `src/components/`.
- Non-component data reused by more than one example (e.g. the sample `products` array shared by 18 and 19) lives in `src/data/`, not `src/components/` — that folder is for components only.
- Applies to all new routes and examples going forward, in both projects.
- Keep examples simple and focused on the single concept being taught.
- Each example may only use features already covered by earlier examples. Do not introduce uncovered features (Outlet in a parent route, layout routes, loaders, etc.) just to make an example work. If a request cannot be done without one, push back and say so instead of building it.
- Example 05 (Index Routes) is provisional: it has no parent route file and no `<Outlet />`, so the index and child pages are just two separate pages. Revisit it once the Outlet/layout route example exists, and rework it so the index route renders inside the parent and the child replaces it via the `<Outlet />`.
- Example routes are standalone and numbered (`01-root-route`, `02-anatomy-of-a-route`, `03-link`, `04-colocation`, `05-index-route`, `06-dynamic-segment`, `07-splat`, `08-optional-param`, ...). Each new example must also be added to the `introExamples` list in `src/components/Home.tsx` (the list is `as const` so `Link` stays type-checked).

## Visual design

Styling uses Tailwind CSS v4 (`@tailwindcss/vite` plugin; `src/index.css` contains only `@import 'tailwindcss';`, so do not add global element styles that fight utilities). Use the same look for every example page, not just the homepage.

- Dark theme only (no light mode, no toggle). Palette: slate for surfaces/text/borders, indigo for accents, no custom colors.
- Page background: set once on `<body>` in `index.html`: `min-h-screen bg-slate-950 text-slate-300`. Do not set backgrounds per page.
- Page container: `<main className="mx-auto max-w-2xl px-6 py-16">`.
- Page title (h1): `text-4xl font-bold tracking-tight text-slate-50`, inside a `<header className="mb-10">`.
- Section label (h2): `text-sm font-semibold uppercase tracking-wider text-slate-400`, followed by a one-line description `mt-1 mb-4 text-slate-400`.
- Body text: `text-slate-400`.
- List of items: `<ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">` (two columns from the `sm` breakpoint up), each item a static card: `flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900 p-3 shadow-sm`, with the number badge followed by the title. For a single-page example the title itself is the link (`font-medium text-slate-100 hover:text-indigo-300`); no separate "Visit page" link. Only an example with several pages (e.g. 04) shows an `h3` title with inline links below it.
- Number badge in a card: `flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-semibold text-indigo-300`; card title `font-medium text-slate-100`; inline links `text-sm font-medium text-indigo-300 hover:text-indigo-200` (also used for in-page links in examples).
- Keep markup minimal: examples teach routing, so styling should stay light and consistent, never elaborate.
