import type { CSSProperties } from "react";
import { Icon } from "./Icon";
import { phases } from "@/lib/journey";

// Folder-style ascending steps with progress bars, following the "Infographic step" reference.
const folder = [
  { bg: "bg-[#9FC6DC]", text: "text-navy-deep" },
  { bg: "bg-[#7D8CA6]", text: "text-white" },
  { bg: "bg-[#3F5A7A]", text: "text-white" },
  { bg: "bg-navy", text: "text-white" },
];
const icons = ["MessageCircle", "ClipboardCheck", "Plane", "MapPin"];

export function StairSteps() {
  return (
    <ol className="flex flex-col-reverse gap-5">
      {phases.map((p, i) => (
        <li key={p.n} style={{ "--o": `${i * 9}%` } as CSSProperties} className="grid items-center gap-4 sm:grid-cols-[minmax(220px,300px)_1fr] md:ml-[var(--o)]">
          <div className={`relative rounded-b-card rounded-tr-card ${folder[i].bg} ${folder[i].text} p-5 shadow-card`}>
            <span aria-hidden="true" className={`absolute -top-3 left-0 h-3 w-24 rounded-t-md ${folder[i].bg}`} />
            <div className="flex items-end justify-between">
              <div><span className="text-xs tracking-widest">STEP</span><span className="block font-display text-5xl leading-none">{String(p.n).padStart(2, "0")}</span></div>
              <div className="w-24 text-right text-xs">
                <span>{p.progress}%</span>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-black/15"><div className="h-full rounded-full bg-current" style={{ width: `${Math.max(p.progress, 6)}%` }} /></div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Icon name={icons[i]} className="mt-1 h-7 w-7 shrink-0 text-navy/60" />
            <div><h3 className="!text-xl">{p.title}</h3><p className="mt-1 max-w-md text-[15px] text-navy/75">{p.text}</p></div>
          </div>
        </li>
      ))}
    </ol>
  );
}
