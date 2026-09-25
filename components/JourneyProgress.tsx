import { Check } from "lucide-react";
import { journeyStages } from "@/lib/journey";

/** "Where am I?" indicator: ticks for finished stages, arrow for the current one, circle for the rest. */
export function JourneyProgress({ stage }: { stage: number }) {
  return (
    <section aria-label="Your journey" className="card p-5 sm:p-6">
      <p className="font-display text-xl">Your journey</p>
      <p className="mt-1 text-sm text-navy/70">You are here. Each guide explains one part of the road from Kenya to your new destination.</p>
      <ol className="mt-5 grid grid-cols-4 gap-x-2 gap-y-4 sm:grid-cols-7">
        {journeyStages.map((s, i) => {
          const done = i < stage; const current = i === stage;
          return (
            <li key={s} aria-current={current ? "step" : undefined} className="flex flex-col items-center text-center">
              <span className={`grid h-10 w-10 place-items-center rounded-full border text-sm font-medium ${done ? "border-navy bg-navy text-white" : current ? "border-gold bg-gold text-navy-deep" : "border-navy/30 bg-white text-navy/50"}`}>
                {done ? <Check className="h-4 w-4" aria-hidden="true" /> : current ? <span aria-hidden="true">&rarr;</span> : <span aria-hidden="true">&#9675;</span>}
              </span>
              <span className={`mt-2 text-[13px] ${current ? "font-semibold" : ""}`}>{s}</span>
              <span className="sr-only">{done ? "Done" : current ? "You are here" : "Coming up"}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
