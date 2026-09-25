"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { Checklist, LinkButton } from "./ui";
import { requirementSets } from "@/lib/requirements";
import { whatsappLink } from "@/lib/contact";

export function RequirementsSelector() {
  const [id, setId] = useState(requirementSets[0].id);
  const set = requirementSets.find((s) => s.id === id) ?? requirementSets[0];
  return (
    <div>
      <div role="group" aria-label="What are you doing?" className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {requirementSets.map((s) => (
          <button key={s.id} type="button" aria-pressed={s.id === id} onClick={() => setId(s.id)}
            className={`flex min-h-[72px] flex-col items-center justify-center gap-1.5 rounded-card border p-3 text-center text-[15px] font-medium transition-colors ${s.id === id ? "border-navy bg-navy text-white" : "border-navy/20 bg-white hover:border-navy"}`}>
            <Icon name={s.icon} className="h-5 w-5" />{s.label}
          </button>
        ))}
      </div>
      <div className="card mt-6 p-6 sm:p-8" aria-live="polite">
        <h2 className="!text-3xl">{set.label}: what you may need</h2>
        <div className="mt-6"><Checklist items={set.items} /></div>
        <p className="mt-6 rounded-card bg-navy-soft/70 p-4 text-[15px]"><strong>Your exact requirements depend on your destination, job and employer.</strong> Ask us if you are unsure.</p>
        <div className="mt-6"><LinkButton href={whatsappLink(`Hello Kenkos, I want to check what I need for: ${set.label}.`)} external>Check my requirements</LinkButton></div>
      </div>
    </div>
  );
}
