import { ChevronDown } from "lucide-react";

/** Native <details> keeps the accordion accessible, keyboard friendly and free of client JavaScript. */
export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-navy/15 rounded-card bg-white shadow-card">
      {items.map((f) => (
        <details key={f.q} className="group px-5 py-1 sm:px-7">
          <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-lg sm:text-xl">
            {f.q}
            <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="pb-5 pr-8 text-[16px] text-navy/80">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
