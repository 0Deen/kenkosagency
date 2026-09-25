import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import { Icon } from "./Icon";
import { Logo } from "./Navbar";
import { contact, whatsappLink } from "@/lib/contact";
import { footerGroups } from "@/lib/navigation";

const socialIcon: Record<string, string> = {
  Facebook: "Facebook",
  Instagram: "Instagram",
  Threads: "MessageCircle",
  Linktree: "Link2",
};

export function Footer() {
  const deenWhatsApp =
    "https://wa.me/254719760996?text=Hello%20Deen%2C%20I%20found%20your%20work%20on%20the%20Kenkos%20website%20and%20I%27m%20interested%20in%20a%20website%2C%20company%20system%20or%20AI%20solution.";

  return (
    <>
      <footer className="relative overflow-hidden bg-navy-deep text-ivory-sand">
        {/* =========================================================
            DECORATIVE BACKGROUND
        ========================================================== */}

        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

        {/* =========================================================
            MAIN FOOTER
        ========================================================== */}

        <div className="container-x relative z-10 py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr_1fr_1fr_1.35fr]">
            {/* =====================================================
                COMPANY
            ====================================================== */}

            <div>
              <Logo />

              <p className="mt-6 max-w-sm text-[15px] leading-7 text-white/65">
                A Kenyan travel, recruitment and logistics company helping
                people move safely and confidently between Kenya and the
                world.
              </p>

              {/* Social Media */}

              <div className="mt-7">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Follow Kenkos
                </p>

                <ul
                  className="flex flex-wrap gap-2.5"
                  aria-label="Social media"
                >
                  {contact.socials.map((s) => (
                    <li key={s.name}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Kenkos on ${s.name}`}
                        className="group grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
                      >
                        <Icon name={socialIcon[s.name] ?? "Globe"} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Message */}

              <div className="mt-8 flex max-w-sm items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cyan-500/10 text-cyan-400">
                  <MapPin className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Based in Kenya
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/50">
                    Supporting journeys between Kenya and international
                    destinations.
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                NAVIGATION GROUPS
            ====================================================== */}

            {footerGroups.map((g) => (
              <nav key={g.title} aria-label={g.title}>
                <h2 className="!font-sans !text-base !font-semibold !text-white">
                  {g.title}
                </h2>

                <ul className="mt-5 space-y-3 text-[15px]">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="group inline-flex items-center gap-1 text-white/60 transition duration-200 hover:text-cyan-300"
                      >
                        <span>{l.label}</span>

                        <ArrowUpRight className="h-3 w-3 opacity-0 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* =====================================================
                CONTACT
            ====================================================== */}

            <div>
              <h2 className="!font-sans !text-base !font-semibold !text-white">
                Contact Kenkos
              </h2>

              <div className="mt-5 space-y-3">
                {/* Phone */}

                <a
                  href={contact.phoneHref}
                  className="-mx-3 group flex items-start gap-3 rounded-2xl border border-transparent p-3 transition hover:border-white/10 hover:bg-white/5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cyan-500/10 text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <Phone className="h-4 w-4" />
                  </span>

                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/35">
                      Call us
                    </span>

                    <span className="mt-1 block text-sm font-semibold text-white">
                      {contact.phone}
                    </span>
                  </span>
                </a>

                {/* Email */}

                <a
                  href={contact.emailHref}
                  className="-mx-3 group flex items-start gap-3 rounded-2xl border border-transparent p-3 transition hover:border-white/10 hover:bg-white/5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cyan-500/10 text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <Mail className="h-4 w-4" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/35">
                      Email
                    </span>

                    <span className="mt-1 block break-all text-sm font-semibold text-white">
                      {contact.email}
                    </span>
                  </span>
                </a>

                {/* Address */}

                <div className="-mx-3 flex items-start gap-3 rounded-2xl p-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cyan-500/10 text-cyan-400">
                    <MapPin className="h-4 w-4" />
                  </span>

                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/35">
                      Office
                    </span>

                    <span className="mt-1 block text-sm leading-6 text-white/75">
                      {contact.addressLines.join(", ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Kenkos WhatsApp */}

              <a
                href={whatsappLink(
                  "Hello Kenkos, I would like to make an enquiry."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 flex items-center justify-between rounded-2xl bg-cyan-500 p-4 text-white shadow-lg shadow-cyan-950/30 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
                    <MessageCircle className="h-5 w-5" />
                  </span>

                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/70">
                      WhatsApp
                    </span>

                    <span className="block text-sm font-semibold">
                      Chat with our team
                    </span>
                  </span>
                </span>

                <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>

          {/* =======================================================
              MAP + OFFICE INFORMATION
          ======================================================== */}

          <div className="mt-16 grid gap-6 border-t border-white/10 pt-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Google Map */}

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8200211227613!2d36.81534807585854!3d-1.2817416356230111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d3a70a1df1%3A0xf8f6ef447bb70af9!2sRATTANSI%20EDUCATIONAL%20TRUST!5e0!3m2!1sen!2ske!4v1790076322366!5m2!1sen!2ske"
                  width="600"
                  height="450"
                  style={{
                    border: 0,
                    width: "100%",
                    height: "380px",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Kenkos office location"
                  className="grayscale-[15%] transition duration-500 hover:grayscale-0"
                />

                <div className="pointer-events-none absolute left-5 top-5">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[#172033]/90 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-xl">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                    Our Location
                  </div>
                </div>
              </div>
            </div>

            {/* Office Card */}

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-7 sm:p-9">
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Visit Us
                </span>

                <h2 className="mt-5 font-display text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                  Let&apos;s talk about
                  <span className="block text-cyan-400">
                    your next move.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                  Whether you are looking for work abroad, planning a trip,
                  preparing to relocate or need logistics support, our team
                  is ready to help you understand the next step.
                </p>

                <div className="mt-7 space-y-4">
                  {/* Find Us */}

                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cyan-500/10 text-cyan-400">
                      <MapPin className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                        Find us
                      </p>

                      <p className="mt-1 text-sm leading-6 text-white/75">
                        {contact.addressLines.join(", ")}
                      </p>
                    </div>
                  </div>

                  {/* Call */}

                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cyan-500/10 text-cyan-400">
                      <Phone className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                        Call
                      </p>

                      <a
                        href={contact.phoneHref}
                        className="mt-1 block text-sm font-semibold text-white transition hover:text-cyan-300"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}

                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cyan-500/10 text-cyan-400">
                      <Mail className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                        Email
                      </p>

                      <a
                        href={contact.emailHref}
                        className="mt-1 block break-all text-sm font-semibold text-white transition hover:text-cyan-300"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Buttons */}

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400"
                  >
                    Contact Us
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <a
                    href={whatsappLink(
                      "Hello Kenkos, I would like to speak with your team."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-cyan-500"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =======================================================
              DEEN DEVELOPER CREDIT
          ======================================================== */}

          <div className="mt-14 flex justify-center">
            <a
              href={deenWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Deen for website and digital development"
              className="group relative flex w-full max-w-2xl items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#25D366]/30 hover:bg-white/[0.06]"
            >
              {/* WhatsApp Glow */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#25D366]/10 blur-3xl transition duration-500 group-hover:bg-[#25D366]/20" />

              {/* WhatsApp Icon */}

              <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25D366]/10 text-[#25D366] ring-1 ring-[#25D366]/20 transition duration-300 group-hover:bg-[#25D366] group-hover:text-white">
                <MessageCircle className="h-6 w-6" />
              </div>

              {/* Credit */}

              <div className="relative min-w-0 flex-1">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
                  Digital Experience
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Website crafted by Deen
                </p>

                <p className="mt-1 text-xs leading-5 text-white/45">
                  Need a website, company system or AI solution like this?
                  Let&apos;s build yours.
                </p>
              </div>

              {/* Desktop WhatsApp CTA */}

              <div className="relative hidden shrink-0 items-center gap-2 rounded-full bg-[#25D366]/10 px-4 py-2 text-xs font-semibold text-[#25D366] transition duration-300 group-hover:bg-[#25D366] group-hover:text-white sm:flex">
                <MessageCircle className="h-4 w-4" />

                <span>Chat with Deen</span>

                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================== */}

        <div className="relative z-10 border-t border-white/10">
          <div className="container-x flex flex-wrap items-center justify-between gap-4 py-6 text-sm">
            <p className="text-white/45">
              &copy; {new Date().getFullYear()} {contact.company}. All
              rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/privacy"
                className="text-white/45 transition hover:text-cyan-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-white/45 transition hover:text-cyan-300"
              >
                Terms
              </Link>

              <span className="hidden h-4 w-px bg-white/10 sm:block" />

              <span className="text-white/30">Kenya</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ===========================================================
          PERSISTENT KENKOS WHATSAPP BUTTON
      ============================================================ */}

      <a
        href={whatsappLink(
          "Hello Kenkos, I would like to make an enquiry."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kenkos on WhatsApp"
        className="group fixed bottom-5 right-5 z-[100] flex items-center gap-3 rounded-full border border-white/20 bg-cyan-500 px-4 py-3 text-white shadow-[0_15px_40px_rgba(8,145,178,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 sm:bottom-7 sm:right-7"
      >
        {/* Pulse */}

        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-cyan-400/30" />

        <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
          <MessageCircle className="h-5 w-5" />
        </span>

        <span className="hidden sm:block">
          <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70">
            Chat with us
          </span>

          <span className="block text-sm font-semibold">
            WhatsApp
          </span>
        </span>
      </a>
    </>
  );
}
