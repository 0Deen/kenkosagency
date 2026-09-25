"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type Item = { id: string; label: string; help: string };

/** Tap each document as you get it. Nothing is saved or sent anywhere. */
export function DocumentChecklist({ items, title = "Your document checklist" }: { items: Item[]; title?: string }) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const count = items.filter((i) => done[i.id]).length;
  const pct = Math.round((count / items.length) * 100);
  return (
    <div className="card p-5 sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h3>{title}</h3>
        <p className="text-sm" aria-live="polite">{count} of {items.length} ready</p>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-navy-soft" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Documents ready">
        <div className="h-full rounded-full bg-gold transition-all" style={{ width: `${pct}%` }} />
      </div>
      <ul className="mt-5 divide-y divide-navy/10">
        {items.map((i) => {
          const on = !!done[i.id];
          return (
            <li key={i.id}>
              <label className="flex min-h-[60px] cursor-pointer items-start gap-4 py-3">
                <input type="checkbox" checked={on} onChange={() => setDone((d) => ({ ...d, [i.id]: !d[i.id] }))} className="peer sr-only" />
                <span className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md border-2 peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-gold ${on ? "border-navy bg-navy text-white" : "border-navy/40 bg-white"}`}>
                  {on && <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />}
                </span>
                <span><span className={`block font-medium ${on ? "line-through opacity-60" : ""}`}>{i.label}</span><span className="block text-sm text-navy/70">{i.help}</span></span>
              </label>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm text-navy/70">Requirements can change depending on the employer, job and destination. Always confirm your details with our team.</p>
    </div>
  );
}
