import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Icon } from "@/components/Icon";
import { Checklist, InfoCallout, LinkButton, PageHero, StepCard, WarningBox, WhatNext } from "@/components/ui";
import { JourneyProgress } from "@/components/JourneyProgress";
import { airportSteps, getGuide, guides } from "@/lib/guides";
import { whatsappLink } from "@/lib/contact";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() { return guides.map((g) => ({ slug: g.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug);
  if (!g) return {};
  return pageMeta(`${g.title} | Kenkos`, g.short, `/guides/${g.slug}`);
}

export default function Page({ params }: { params: { slug: string } }) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();
  const i = guides.findIndex((g) => g.slug === guide.slug);
  const prev = guides[i - 1]; const next = guides[i + 1];
  const isAirport = guide.slug === "airport";
  const msg = `Hello Kenkos, I need help with: ${guide.title}.`;
  const cta = guide.slug === "medical" ? "I Need Help With Medical" : "Ask Kenkos";

  return (
    <>
      <PageHero title={isAirport ? "First time flying?" : guide.title} text={guide.subtitle} image={guide.image} imagePos={guide.imagePos}
        crumbs={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: guide.title }]}>
        <LinkButton href={whatsappLink(msg)} variant="gold" external>{cta}</LinkButton>
      </PageHero>

      <div className="container-x -mt-8 relative z-10"><JourneyProgress stage={guide.stage} /></div>

      <section className="section pb-8">
        <div className="container-x">
          <div className="mb-6"><InfoCallout title="Please remember">{guide.notice}</InfoCallout></div>

          {isAirport ? (
            <ol className="grid gap-5 md:grid-cols-2">
              {airportSteps.map((s, n) => (
                <li key={s.title}>
                  <details className="group card h-full p-5">
                    <summary className="flex min-h-[64px] cursor-pointer list-none items-center gap-4">
                      <span className="font-display text-4xl text-gold-deep" aria-hidden="true">{String(n + 1).padStart(2, "0")}</span>
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy text-white"><Icon name={s.icon} /></span>
                      <span className="flex-1"><span className="block text-xs text-navy/60">Step {n + 1}</span><span className="block font-display text-xl">{s.title}</span></span>
                      <span className="text-sm font-medium text-navy/70 group-open:hidden">Tap to see</span>
                    </summary>
                    <p className="mt-3 border-t border-navy/10 pt-4 text-[16px] text-navy/85">{s.text}</p>
                  </details>
                </li>
              ))}
            </ol>
          ) : (
            guide.sections.map((s, n) => (
              <StepCard key={s.heading} n={n + 1} title={s.heading} id={`s${n + 1}`}>
                {s.body?.map((p) => <p key={p}>{p}</p>)}
                {s.list && <div className="mb-4 max-w-[68ch]"><Checklist items={s.list} /></div>}
                {s.callout && (s.callout.kind === "warn" ? <WarningBox>{s.callout.text}</WarningBox> : <InfoCallout>{s.callout.text}</InfoCallout>)}
              </StepCard>
            ))
          )}
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-navy/15 pt-8">
          {prev ? <Link href={`/guides/${prev.slug}`} className="btn-outline"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back: {prev.title}</Link> : <span />}
          {next ? <Link href={`/guides/${next.slug}`} className="btn-primary">Next step: {next.title} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link> : <LinkButton href="/how-it-works">See the full journey</LinkButton>}
        </div>
      </section>

      <WhatNext message={msg} label={cta} lead="Not sure what this means? Ask us." steps={["Read this guide.", "Write down your questions.", "Contact Kenkos.", "Our team explains your next step."]} />
    </>
  );
}
