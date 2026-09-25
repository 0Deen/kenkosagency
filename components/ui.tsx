import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Icon } from "./Icon";
import { contact, whatsappLink } from "@/lib/contact";

type Variant = "primary" | "gold" | "light" | "outline" | "outline-light";

/** Pill button with the circular arrow chip used in the reference (Roamora "Explore Now"). */
export function LinkButton({
  href, children, variant = "primary", arrow = true, external = false, className = "",
}: { href: string; children: ReactNode; variant?: Variant; arrow?: boolean; external?: boolean; className?: string }) {
  const chip =
    variant === "primary" ? "bg-white text-navy" :
    variant === "gold" ? "bg-navy text-white" :
    variant === "light" ? "bg-navy text-white" :
    variant === "outline" ? "bg-navy text-white" : "bg-white text-navy";
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${chip}`}>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      )}
    </>
  );
  const cls = `btn-${variant} ${arrow ? "!pr-2" : ""} ${className}`;
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{inner}</a>;
  }
  return <Link href={href} className={cls}>{inner}</Link>;
}

export function SectionHeading({
  title, text, align = "left", light = false, as: Tag = "h2", className = "", id,
}: { id?: string; title: string; text?: string; align?: "left" | "center"; light?: boolean; as?: "h1" | "h2" | "h3"; className?: string }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <Tag id={id} className={light ? "!text-white" : ""}>{title}</Tag>
      {text && <p className={`mt-4 text-[17px] ${light ? "text-ivory-sand" : "text-navy/75"}`}>{text}</p>}
    </div>
  );
}

/** Inner page header: dark band like the reference's dark navigation/section band. */
export function PageHero({
  title, text, crumbs, image, imagePos = "50% 30%", children,
}: { title: string; text?: string; crumbs?: { label: string; href?: string }[]; image?: string; imagePos?: string; children?: ReactNode }) {
  return (
    <section className="bg-navy text-white">
      <div className={`container-x grid items-center gap-10 py-14 sm:py-20 ${image ? "lg:grid-cols-[1.2fr_0.8fr]" : ""}`}>
        <div>
          {crumbs && (
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-ivory-sand/80">
              <ol className="flex flex-wrap gap-2">
                {crumbs.map((c, i) => (
                  <li key={c.label} className="flex gap-2">
                    {c.href ? <Link href={c.href} className="underline-offset-4 hover:underline">{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                    {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="!text-white">{title}</h1>
          {text && <p className="mt-5 max-w-[60ch] text-lg text-ivory-sand">{text}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {image && (
          <FrameImage src={image} alt="" pos={imagePos} className="mx-auto w-full max-w-[380px]" ratio="aspect-[4/5]" dark />
        )}
      </div>
    </section>
  );
}

/** Photo with the thin offset outline frame used on the Audrey reference. */
export function FrameImage({
  src, alt, pos = "50% 50%", ratio = "aspect-[4/5]", className = "", dark = false, priority = false, sizes = "(min-width:1024px) 400px, 90vw",
}: { src: string; alt: string; pos?: string; ratio?: string; className?: string; dark?: boolean; priority?: boolean; sizes?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div aria-hidden="true" className={`absolute -right-3 -top-3 h-full w-full rounded-card border ${dark ? "border-gold/70" : "border-navy/25"} sm:-right-4 sm:-top-4`} />
      <div className={`relative overflow-hidden rounded-card ${ratio}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" style={{ objectPosition: pos }} />
      </div>
    </div>
  );
}

export function InfoCallout({ children, title = "Good to know" }: { children: ReactNode; title?: string }) {
  return (
    <aside className="flex gap-4 rounded-card border border-navy/15 bg-navy-soft/60 p-5" role="note">
      <Icon name="Info" className="mt-1 h-5 w-5 shrink-0 text-navy" />
      <div><p className="font-medium">{title}</p><div className="mt-1 text-[15px] text-navy/85">{children}</div></div>
    </aside>
  );
}

export function WarningBox({ children, title = "Important" }: { children: ReactNode; title?: string }) {
  return (
    <aside className="flex gap-4 rounded-card border-l-4 border-gold bg-white p-5 shadow-card" role="note">
      <Icon name="TriangleAlert" className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
      <div><p className="font-medium">{title}</p><div className="mt-1 text-[15px] text-navy/85">{children}</div></div>
    </aside>
  );
}

export function Checklist({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full ${dark ? "bg-gold text-navy-deep" : "bg-navy text-white"}`}>
            <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
          </span>
          <span className={dark ? "text-ivory-sand" : ""}>{i}</span>
        </li>
      ))}
    </ul>
  );
}

/** Large serif numeral + content, echoing the numbered "Packages" rows in the reference. */
export function StepCard({ n, title, children, id, icon }: { n: number; title: string; children: ReactNode; id?: string; icon?: string }) {
  return (
    <article id={id} className="scroll-mt-28 border-t border-navy/15 py-10 first:border-t-0 sm:py-14">
      <div className="grid gap-6 md:grid-cols-[110px_1fr]">
        <div className="flex items-center gap-4 md:block">
          <span className="font-display text-6xl leading-none text-gold-deep sm:text-7xl" aria-hidden="true">{n}</span>
          {icon && <span className="grid h-11 w-11 place-items-center rounded-full bg-navy text-white md:mt-4"><Icon name={icon} /></span>}
        </div>
        <div>
          <h2 className="!text-3xl">{title}</h2>
          <div className="prose-simple mt-4 text-[17px] text-navy/85">{children}</div>
        </div>
      </div>
    </article>
  );
}

export function WhatNext({
  steps, label = "Talk to Kenkos", message = "Hello Kenkos, I have read your website and would like to know the next step.", title = "What happens next?", lead = "Ready to explore an overseas job?",
}: { steps?: string[]; label?: string; message?: string; title?: string; lead?: string }) {
  const s = steps ?? ["Choose your job.", "Check the requirements.", "Contact Kenkos.", "Our team explains the next step."];
  return (
    <section className="bg-navy-deep text-white" aria-labelledby="what-next">
      <div className="container-x grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 id="what-next" className="!text-white">{title}</h2>
          <p className="mt-4 text-lg text-ivory-sand">{lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={whatsappLink(message)} variant="gold" external>{label}</LinkButton>
            <LinkButton href={contact.phoneHref} variant="outline-light" arrow={false}>Call {contact.phone}</LinkButton>
          </div>
        </div>
        <ol className="space-y-4">
          {s.map((t, i) => (
            <li key={t} className="flex items-center gap-5 rounded-card bg-navy-mid/70 p-4">
              <span className="font-display text-4xl text-gold" aria-hidden="true">{i + 1}</span>
              <span className="text-[17px]">{t}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="section" aria-labelledby="question-cta">
      <div className="container-x">
        <div className="rounded-card bg-navy px-6 py-14 text-center text-white sm:px-14">
          <h2 id="question-cta" className="!text-white">Have a question?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ivory-sand">You do not need to understand the whole process before contacting us. Ask us. We will explain.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <LinkButton href={whatsappLink()} variant="gold" external>WhatsApp Us</LinkButton>
            <LinkButton href={contact.phoneHref} variant="outline-light" arrow={false}>Call Us</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactCard({ icon, title, value, action, href }: { icon: string; title: string; value: ReactNode; action: string; href: string }) {
  return (
    <div className="card flex flex-col p-6">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-white"><Icon name={icon} /></span>
      <h3 className="mt-5 !text-xl">{title}</h3>
      <p className="mt-2 flex-1 break-words text-navy/80">{value}</p>
      <div className="mt-5"><LinkButton href={href} variant="primary" external={href.startsWith("http")}>{action}</LinkButton></div>
    </div>
  );
}

/** "Who can help me?" row: phone, WhatsApp, email. */
export function ContactRow({ message }: { message?: string }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <ContactCard icon="Phone" title="Call" value={contact.phone} action="Call now" href={contact.phoneHref} />
      <ContactCard icon="MessageCircle" title="WhatsApp" value={contact.phone} action="Chat with us" href={whatsappLink(message)} />
      <ContactCard icon="Mail" title="Email" value={contact.email} action="Send email" href={contact.emailHref} />
    </div>
  );
}

/** Numbered list of steps in a grid. */
export function NumberedSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2">
      {steps.map((s, i) => (
        <li key={s} className="card flex items-center gap-4 p-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy font-display text-lg text-white">{i + 1}</span>
          <span className="font-medium">{s}</span>
        </li>
      ))}
    </ol>
  );
}
