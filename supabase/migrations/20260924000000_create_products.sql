-- Products table read by fetchProducts (examples 19 and 20).

create table public.products (
  id bigint generated always as identity primary key,
  name text not null,
  category text not null,
  price integer not null
);

alter table public.products enable row level security;

create policy "Anyone can read products"
  on public.products for select
  to anon
  using (true);

grant select on public.products to anon;
