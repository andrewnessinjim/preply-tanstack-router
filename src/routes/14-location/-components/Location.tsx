import { Link, useLocation } from "@tanstack/react-router";
import { Description } from "./Description";
import { Route as categoryRoute } from "../$category";

export function Location() {
  const pathname = useLocation({ select: (location) => location.pathname });

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50">
          Location
        </h1>
      </header>
      <Description />
      <p className="mt-4 text-slate-400">
        Current pathname: <code>{pathname}</code>
      </p>
      <div className="mt-4 flex gap-4">
        {["shoes", "hats", "bags"].map((category) => (
          <Link
            key={category}
            to={categoryRoute.to}
            params={{ category }}
            className="text-sm font-medium hover:text-indigo-200"
            activeProps={{ className: "text-slate-50 underline" }}
            inactiveProps={{ className: "text-indigo-300" }}
          >
            {category}
          </Link>
        ))}
      </div>
    </main>
  );
}
