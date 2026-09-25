"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  ChevronRight as Chevron,
  Search,
  Menu,
  X,
  Phone,
  ExternalLink,
  Sun,
  Moon,
} from "lucide-react";

import { Icon } from "@/components/Icon";
import { primaryNav, utilityNav, quickLinks, mobileTabs } from "@/lib/navigation";
import { contact, whatsappLink } from "@/lib/contact";
import { jobs } from "@/lib/jobs";
import { countries } from "@/lib/countries";

/* =========================================================
   LOGO
========================================================= */

export function Logo({ compact = false, onClick }: { compact?: boolean; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Kenkos home"
      className={`flex items-center justify-center overflow-hidden rounded-xl transition-all duration-300 ${
        compact ? "h-11 w-11" : "h-14 w-full"
      }`}
    >
      <Image
        src="/logo.png"
        alt="Kenkos Travel and Work Overseas"
        width={150}
        height={150}
        priority
        className={`object-contain ${compact ? "h-10 w-10" : "h-14 w-auto"}`}
      />
    </Link>
  );
}

/* =========================================================
   THEME TOGGLE — persists to localStorage, flips the
   `dark` class on <html>. Rendered both as a full segmented
   control (expanded rail) and an icon-only button (collapsed
   rail / mobile).
========================================================= */

function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("kenkos-theme") : null;
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggle(next?: boolean) {
    const value = next ?? !dark;
    setDark(value);
    document.documentElement.classList.toggle("dark", value);
    window.localStorage.setItem("kenkos-theme", value ? "dark" : "light");
  }

  return { dark, toggle };
}

function badgeCount(badge?: "jobs" | "countries" | null) {
  if (badge === "jobs") return jobs.length;
  if (badge === "countries") return countries.length;
  return null;
}

/* =========================================================
   TOOLTIP-WRAPPED ICON (used on the collapsed rail)
========================================================= */

function RailLink({
  href,
  label,
  icon,
  badge,
  active,
}: {
  href: string;
  label: string;
  icon: string;
  badge?: number | null;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`
        group relative grid h-11 w-11 place-items-center rounded-xl transition-all duration-200
        ${active ? "bg-[#d6aa72] text-[#10151f] shadow-lg" : "text-white/65 hover:bg-white/10 hover:text-white"}
      `}
    >
      <Icon name={icon} className="h-[18px] w-[18px]" strokeWidth={1.8} />

      {badge ? (
        <span className="absolute -right-1 -top-1 grid h-4 min-w-[16px] place-items-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white">
          {badge}
        </span>
      ) : null}

      {/* Tooltip */}
      <span
        className="
          pointer-events-none absolute left-[calc(100%+10px)] top-1/2 z-50 -translate-y-1/2
          whitespace-nowrap rounded-lg bg-[#0b0f17] px-3 py-1.5 text-xs font-medium text-white
          opacity-0 shadow-lg ring-1 ring-white/10 transition-all duration-150
          group-hover:opacity-100 group-hover:translate-x-0 translate-x-[-4px]
        "
      >
        {label}
      </span>
    </Link>
  );
}

/* =========================================================
   NAVBAR / APP SHELL SIDEBAR
========================================================= */

export function Navbar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setExpanded(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* ===================================================
          DESKTOP APP-SHELL SIDEBAR — flush full height,
          floating with a small margin, exactly like the
          reference: collapsed icon rail that flies open into
          a full panel with Menu / Support / Group / theme
          toggle / profile row.
      =================================================== */}

      <aside
        className={`
          fixed inset-y-3 left-3 z-[200] hidden md:block
          transition-[width] duration-500 ease-[cubic-bezier(.22,1,.36,1)]
          ${expanded ? "w-[300px]" : "w-[76px]"}
        `}
      >
        <div className="relative flex h-full w-full overflow-hidden rounded-[26px] border border-white/15 bg-[#10151f]/95 shadow-rail backdrop-blur-2xl">
          {/* -------- COLLAPSED RAIL -------- */}
          <div className={`flex w-[76px] shrink-0 flex-col items-center py-5 ${expanded ? "border-r border-white/10" : ""}`}>
            <Logo compact onClick={() => { setExpanded(false); setMobileOpen(false); }} />

            <div className="mt-5 h-px w-9 bg-white/10" />

            <div className="mt-8 flex flex-1 flex-col items-center gap-2 overflow-y-auto">
              {primaryNav.map((item) => (
                <RailLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  badge={badgeCount(item.badge)}
                  active={isActive(item.href)}
                />
              ))}

              <div className="my-2 h-px w-7 bg-white/10" />

              {utilityNav.map((item) => (
                <RailLink key={item.href} href={item.href} label={item.label} icon={item.icon} active={isActive(item.href)} />
              ))}
            </div>

            <button
              type="button"
              onClick={() => toggle()}
              aria-label="Toggle dark mode"
              className="grid h-11 w-11 place-items-center rounded-xl text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              {dark ? <Moon className="h-[18px] w-[18px]" /> : <Sun className="h-[18px] w-[18px]" />}
            </button>

            <a
              href={contact.phoneHref}
              aria-label={`Call ${contact.phone}`}
              className="mt-1 grid h-11 w-11 place-items-center rounded-xl text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              <Phone className="h-[18px] w-[18px]" />
            </a>
          </div>

          {/* -------- EXPANDED PANEL -------- */}
          <div
            className={`
              flex min-w-0 flex-1 flex-col overflow-y-auto py-5 transition-all duration-500
              ${expanded ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-4 opacity-0"}
            `}
          >
            <div className="px-4">
              <p className="font-display text-[22px] tracking-[0.14em] text-white">KENKOS</p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/40">Recruitment &amp; Logistics Centre</p>
            </div>

            <div className="mx-4 my-5 h-px bg-white/10" />

            <Link
              href="/faq"
              className="mx-4 flex h-10 items-center gap-2 rounded-xl bg-white/[0.07] px-3 text-[11px] text-white/40 transition hover:bg-white/[0.1] hover:text-white/70"
            >
              <Search className="h-3.5 w-3.5" />
              Search Kenkos...
            </Link>

            {/* MENU */}
            <div className="mt-6">
              <p className="px-4 pb-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/35">Menu</p>
              <div className="space-y-1 px-2">
                {primaryNav.map((item) => {
                  const active = isActive(item.href);
                  const count = badgeCount(item.badge);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        relative flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-[13px] font-medium transition-all duration-200
                        ${active ? "bg-[#d6aa72] text-[#10151f]" : "text-white/70 hover:bg-white/[0.08] hover:text-white"}
                      `}
                    >
                      {active && <span className="absolute -left-2 h-5 w-1 rounded-full bg-rose-500" />}
                      <Icon name={item.icon} className="h-[17px] w-[17px]" strokeWidth={1.8} />
                      <span className="flex-1">{item.label}</span>
                      {count ? (
                        <span
                          className={`grid h-5 min-w-[20px] place-items-center rounded-full px-1 text-[10px] font-bold ${
                            active ? "bg-[#10151f] text-white" : "bg-rose-500 text-white"
                          }`}
                        >
                          {count}
                        </span>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* SUPPORT (utility, unlabelled group like Setting/Support) */}
            <div className="mt-4 space-y-1 px-2">
              {utilityNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex min-h-[42px] items-center gap-3 rounded-xl px-3 text-[13px] transition ${
                      active ? "bg-white/[0.1] text-white" : "text-white/60 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    <Icon name={item.icon} className="h-[16px] w-[16px]" strokeWidth={1.8} />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mx-4 my-5 h-px bg-white/10" />

            {/* GROUP — quick, colour-tagged shortcuts */}
            <div>
              <p className="px-4 pb-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/35">Group</p>
              <div className="space-y-1 px-2">
                {quickLinks.map((q) => (
                  <Link
                    key={q.href}
                    href={q.href}
                    className="flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-[13px] text-white/75 transition hover:bg-white/[0.08] hover:text-white"
                  >
                    <span className={`grid h-7 w-7 place-items-center rounded-lg ${q.tint}`}>
                      <Icon name={q.icon} className="h-[14px] w-[14px]" strokeWidth={2} />
                    </span>
                    <span className="flex-1">{q.label}</span>
                    <Chevron className="h-3.5 w-3.5 text-white/30" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mx-4 my-5 h-px bg-white/10" />

            {/* THEME TOGGLE — segmented pill */}
            <div className="mx-4 flex items-center gap-1 rounded-full bg-white/[0.06] p-1">
              <button
                type="button"
                onClick={() => toggle(false)}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-full py-2 text-[11px] font-semibold transition ${
                  !dark ? "bg-white text-[#10151f]" : "text-white/50 hover:text-white"
                }`}
              >
                <Sun className="h-3.5 w-3.5" /> Light
              </button>
              <button
                type="button"
                onClick={() => toggle(true)}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-full py-2 text-[11px] font-semibold transition ${
                  dark ? "bg-white text-[#10151f]" : "text-white/50 hover:text-white"
                }`}
              >
                <Moon className="h-3.5 w-3.5" /> Dark
              </button>
            </div>

            <div className="flex-1" />

            {/* PROFILE / TALK-TO-US ROW */}
            <div className="mx-3 mt-5 flex items-center gap-3 rounded-2xl bg-white/[0.06] p-3">
              <Image src="/logo.png" alt="Kenkos" width={36} height={36} className="h-9 w-9 shrink-0 rounded-full bg-white object-contain p-1" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-semibold text-white">{contact.short}</p>
                <p className="truncate text-[10px] text-white/45">{contact.email}</p>
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Kenkos on WhatsApp"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-white/70 transition hover:bg-[#d6aa72] hover:text-[#10151f]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* EXPAND / COLLAPSE HANDLE */}
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-label={expanded ? "Collapse navigation" : "Expand navigation"}
            className="absolute right-[-12px] top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-[#10151f]/20 bg-white text-[#10151f] shadow-lg transition hover:scale-105"
          >
            {expanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
        </div>
      </aside>

      {/* ===================================================
          MOBILE — slim top bar (secondary links via hamburger)
          plus a native-style bottom tab bar for the 5 primary
          destinations.
      =================================================== */}

      <header className="sticky top-0 z-[200] flex h-[68px] items-center justify-between border-b border-[#172033]/10 bg-[#f8f5ef]/95 px-5 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0f17]/95 md:hidden">
        <Logo onClick={() => setMobileOpen(false)} />
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => toggle()}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-full bg-black/5 text-[#172033] dark:bg-white/10 dark:text-white"
          >
            {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="kenkos-mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full bg-[#172033] text-white"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div id="kenkos-mobile-menu" className="fixed inset-0 z-[190] md:hidden">
          <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

          <div className="absolute bottom-[84px] left-3 right-3 top-[80px] overflow-y-auto rounded-[22px] border border-white/10 bg-[#10151f]/95 p-3 text-white shadow-rail backdrop-blur-2xl animate-pop-in">
            <div className="flex items-center gap-3 px-3 py-3">
              <Image src="/logo.png" alt="Kenkos" width={60} height={60} className="h-12 w-12 rounded-xl bg-white object-contain p-1" />
              <div>
                <p className="font-display text-xl tracking-[0.12em]">KENKOS</p>
                <p className="text-[8px] uppercase tracking-[0.16em] text-white/40">Recruitment &amp; Logistics</p>
              </div>
            </div>

            <div className="my-3 h-px bg-white/10" />

            <p className="px-3 pb-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/35">Menu</p>
            <div className="space-y-1">
              {primaryNav.map((item) => {
                const active = isActive(item.href);
                const count = badgeCount(item.badge);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex min-h-[50px] items-center gap-3 rounded-xl px-4 text-sm font-medium transition ${
                      active ? "bg-[#d6aa72] text-[#10151f]" : "text-white/75 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon name={item.icon} className="h-[18px] w-[18px]" strokeWidth={1.8} />
                    <span className="flex-1">{item.label}</span>
                    {count ? (
                      <span className="grid h-5 min-w-[20px] place-items-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">{count}</span>
                    ) : null}
                  </Link>
                );
              })}
            </div>

            <div className="my-3 h-px bg-white/10" />

            <p className="px-3 pb-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/35">Group</p>
            <div className="space-y-1">
              {quickLinks.map((q) => (
                <Link key={q.href} href={q.href} onClick={() => setMobileOpen(false)} className="flex min-h-[46px] items-center gap-3 rounded-xl px-4 text-sm text-white/75 transition hover:bg-white/10 hover:text-white">
                  <span className={`grid h-7 w-7 place-items-center rounded-lg ${q.tint}`}>
                    <Icon name={q.icon} className="h-[14px] w-[14px]" strokeWidth={2} />
                  </span>
                  <span className="flex-1">{q.label}</span>
                  <Chevron className="h-3.5 w-3.5 text-white/30" />
                </Link>
              ))}
            </div>

            <div className="my-3 h-px bg-white/10" />

            {utilityNav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="flex min-h-[46px] items-center gap-3 rounded-xl px-4 text-sm text-white/70 transition hover:bg-white/10 hover:text-white">
                <Icon name={item.icon} className="h-[16px] w-[16px]" strokeWidth={1.8} />
                {item.label}
              </Link>
            ))}

            <div className="my-4 h-px bg-white/10" />

            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex min-h-[48px] items-center justify-center rounded-xl bg-[#d6aa72] text-sm font-semibold text-[#10151f]">
              WhatsApp Us
            </a>
          </div>
        </div>
      )}

      {/* BOTTOM TAB BAR — native-app feel on mobile */}
      <nav className="fixed inset-x-0 bottom-0 z-[195] flex items-stretch justify-around border-t border-black/5 bg-[#f8f5ef]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0f17]/95 md:hidden">
        {mobileTabs.map((tab) => {
          const active = isActive(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] font-medium transition ${
                active ? "text-[#9A7548] dark:text-[#d6aa72]" : "text-[#172033]/50 dark:text-white/45"
              }`}
            >
              <Icon name={tab.icon} className="h-[19px] w-[19px]" strokeWidth={active ? 2.2 : 1.7} />
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
