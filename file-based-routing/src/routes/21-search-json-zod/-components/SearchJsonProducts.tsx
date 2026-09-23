import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { products } from "../../../data/products";
import { Description } from "./Description";
import { SortableProductsTable } from "./SortableProductsTable";

const categories = [...new Set(products.map((product) => product.category))];

export function SearchJsonProducts() {
  const { q, maxPrice, category, sortBy, sortDir } = useSearch({
    from: "/21-search-json-zod/products",
  });
  const navigate = useNavigate({ from: "/21-search-json-zod/products" });

  const visibleProducts = products
    .filter(
      (product) =>
        q === undefined || product.name.toLowerCase().includes(q.toLowerCase()),
    )
    .filter((product) => maxPrice === undefined || product.price <= maxPrice)
    .filter(
      (product) => category === undefined || product.category === category,
    )
    .sort((a, b) => {
      const direction = sortDir === "asc" ? 1 : -1;
      if (sortBy === "price") return (a.price - b.price) * direction;
      return a[sortBy].localeCompare(b[sortBy]) * direction;
    });

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Search Params: Zod
        </h1>
      </header>
      <Description />
      <div className="mt-6 flex flex-wrap gap-4">
        <input
          value={q}
          onChange={(event) => {
            navigate({
              search: (prev) => ({ ...prev, q: event.target.value }),
              replace: true,
            });
          }}
          placeholder="Search products…"
          className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none"
        />
        <input
          type="number"
          value={maxPrice ?? ""}
          onChange={(event) => {
            const raw = event.target.value;
            const parsed = raw === "" ? undefined : Number(raw);
            navigate({
              search: (prev) => ({
                ...prev,
                maxPrice:
                  parsed === undefined || Number.isNaN(parsed)
                    ? undefined
                    : parsed,
              }),
              replace: true,
            });
          }}
          placeholder="Max price"
          className="w-32 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none"
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {[undefined, ...categories].map((option) => (
          <Link
            key={option ?? "all"}
            from="/21-search-json-zod/products"
            search={(prev) => ({ ...prev, category: option })}
            className={
              option === category
                ? "rounded-full bg-indigo-500/20 px-3 py-1 text-sm font-medium text-indigo-300"
                : "rounded-full border border-slate-800 px-3 py-1 text-sm font-medium text-slate-400 hover:text-slate-200"
            }
          >
            {option ?? "All"}
          </Link>
        ))}
      </div>
      <SortableProductsTable
        visibleProducts={visibleProducts}
        sortBy={sortBy}
        sortDir={sortDir}
      />
    </main>
  );
}
