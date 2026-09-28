# TanStack Router: File-Based Routing

Numbered examples that teach TanStack Router with file-based routing, using a small e-commerce store as the example domain.

## Requirements

- [Node.js](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/), running

## Setup

```sh
npm install
npm run db:start
cp .env.example .env.local
npm run dev
```

## Database commands

| Command            | What it does                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------ |
| `npm run db:start` | Starts the local database. The first run downloads Docker images and takes a few minutes. |
| `npm run db:stop`  | Stops it. Run this when you're done, to free up memory.                                    |
| `npm run db:reset` | Deletes everything and reloads the sample products from scratch.                           |

While the database is running, you can browse the `products` table in Supabase Studio at http://127.0.0.1:55323.

## Troubleshooting

- **The app shows a blank page or an error about `supabaseUrl`:** `.env.local` is missing. Run `cp .env.example .env.local`, then restart `npm run dev`.
- **Examples 19 and 20 show an error instead of the table:** the database isn't running. Run `npm run db:start`.
- **`db:start` fails with "port is already allocated":** another local Supabase project is using the same ports. Stop it by running `npx supabase stop` in that project's folder.
