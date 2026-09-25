import Link from "next/link";
import { Icon } from "./Icon";

// Six-segment hexagonal ring inspired by the "Business infographic" reference.
const items = [
  { n: "01", label: "Work abroad", href: "/work-abroad", icon: "Briefcase", text: "Understand jobs, countries and the process.", fill: "#222F45", ink: "#ffffff" },
  { n: "02", label: "Travel", href: "/services/travel", icon: "Plane", text: "Trip planning and travel support.", fill: "#D3B08B", ink: "#1A2436" },
  { n: "03", label: "Visa", href: "/services/visa", icon: "Stamp", text: "Guidance on documents and procedures.", fill: "#2F3E59", ink: "#ffffff" },
  { n: "04", label: "Flights", href: "/services/flights", icon: "Ticket", text: "Coordinating suitable flight options.", fill: "#7D8CA6", ink: "#ffffff" },
  { n: "05", label: "Relocation", href: "/services/relocation", icon: "MapPin", text: "Documents, airport and arrival guidance.", fill: "#1A2436", ink: "#ffffff" },
  { n: "06", label: "Logistics", href: "/services/logistics", icon: "Truck", text: "Move people, goods and business needs.", fill: "#B99468", ink: "#1A2436" },
];

const C = 200, R = 178, r = 92;
const pt = (rad: number, k: number) => {
  const a = ((-90 + 60 * k) * Math.PI) / 180;
  return [C + rad * Math.cos(a), C + rad * Math.sin(a)] as const;
};

export function ServiceRing() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,460px)_1fr]">
      <svg viewBox="0 0 400 400" role="group" aria-label="Six ways Kenkos can help" className="mx-auto w-full max-w-[460px]">
        {items.map((it, i) => {
          const [x1, y1] = pt(R, i), [x2, y2] = pt(R, i + 1), [x3, y3] = pt(r, i + 1), [x4, y4] = pt(r, i);
          const mx = (x1 + x2 + x3 + x4) / 4, my = (y1 + y2 + y3 + y4) / 4;
          return (
            <a key={it.n} href={it.href} aria-label={`${it.label}: ${it.text}`} className="cursor-pointer hover:opacity-90">
              <polygon points={`${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`} fill={it.fill} stroke="#F6F3EE" strokeWidth="5" strokeLinejoin="round" />
              <text x={mx} y={my - 8} textAnchor="middle" fontSize="24" style={{ fontFamily: "var(--font-display), serif" }} fill={it.ink}>{it.n}</text>
              <text x={mx} y={my + 14} textAnchor="middle" fontSize="13" fontWeight="500" fill={it.ink}>{it.label}</text>
            </a>
          );
        })}
        <circle cx={C} cy={C} r={r - 12} fill="#F6F3EE" />
        <text x={C} y={C - 2} textAnchor="middle" fontSize="22" style={{ fontFamily: "var(--font-display), serif" }} letterSpacing="3" fill="#222F45">KENKOS</text>
        <text x={C} y={C + 20} textAnchor="middle" fontSize="11" fill="#222F45" opacity="0.7">Six ways we help</text>
      </svg>
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it.n}>
            <Link href={it.href} className="group card flex h-full gap-3 p-4 hover:shadow-lg">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white" style={{ background: it.fill, color: it.ink }}><Icon name={it.icon} className="h-5 w-5" /></span>
              <span><span className="block font-medium">{it.label}</span><span className="block text-sm text-navy/70">{it.text}</span></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
