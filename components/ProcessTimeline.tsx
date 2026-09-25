import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";
import { journeySteps } from "@/lib/journey";

/** Every number is a link to that step on /how-it-works. */
export function ProcessTimeline({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`grid gap-4 ${compact ? "sm:grid-cols-2 lg:grid-cols-5" : "sm:grid-cols-2"}`}>
      {journeySteps.map((s) => (
        <li key={s.id}>
          <Link href={`/how-it-works#${s.id}`} className="group card flex h-full items-start gap-4 p-4 transition-shadow hover:shadow-lg">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy font-display text-xl text-white">{String(s.n).padStart(2, "0")}</span>
            <span className="min-w-0">
              <span className="flex items-center gap-2 font-medium"><Icon name={s.icon} className="h-4 w-4 text-gold-deep" />{s.title}</span>
              <span className="mt-1 block text-sm text-navy/70">{s.short}</span>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium">See this step <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
