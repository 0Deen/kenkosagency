import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Checklist, ContactRow, InfoCallout, LinkButton, NumberedSteps, PageHero, WarningBox, WhatNext } from "@/components/ui";
import { GuideCard } from "@/components/cards";
import { availabilityNote, baseDocuments, getJob, jobNotes, jobs } from "@/lib/jobs";
import { commonProcess } from "@/lib/journey";
import { guides } from "@/lib/guides";
import { whatsappLink } from "@/lib/contact";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() { return jobs.map((j) => ({ slug: j.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const j = getJob(params.slug);
  if (!j) return {};
  return pageMeta(`${j.title} Jobs Abroad | Kenkos`, `${j.short} Learn what the job means, typical requirements, documents and the process.`, `/jobs/${j.slug}`);
}

export default function Page({ params }: { params: { slug: string } }) {
  const job = getJob(params.slug);
  if (!job) notFound();
  const msg = `Hello Kenkos, I am interested in ${job.title} jobs abroad.`;
  const facts = [
    { label: "Job title", value: job.title },
    { label: "Country", value: "Depends on approved opportunities" },
    { label: "Sector", value: job.sector },
    { label: "Who it may suit", value: job.suits[0] },
  ];
  return (
    <>
      <PageHero title={`${job.title} jobs abroad`} text={job.short} image={job.image} imagePos={job.imagePos}
        crumbs={[{ label: "Home", href: "/" }, { label: "Jobs", href: "/jobs" }, { label: job.title }]}>
        <LinkButton href={whatsappLink(msg)} variant="gold" external>WhatsApp Kenkos</LinkButton>
        <LinkButton href="/how-it-works" variant="outline-light">How it works</LinkButton>
      </PageHero>

      <section className="container-x -mt-8 relative z-10">
        <dl className="card grid gap-px overflow-hidden bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (<div key={f.label} className="bg-white p-5"><dt className="text-sm text-navy/60">{f.label}</dt><dd className="mt-1 font-medium">{f.value}</dd></div>))}
        </dl>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div><h2>What is this job?</h2><p className="mt-5 max-w-[60ch] text-[17px]">{job.what}</p>
            <div className="mt-6"><InfoCallout title="Availability">{availabilityNote}</InfoCallout></div></div>
          <div><h2>What may you do?</h2><p className="mb-5 mt-3 text-navy/70">Examples only. Your real duties are written in your employment contract.</p><Checklist items={job.involves} /></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2>Who can apply?</h2>
            <p className="mb-5 mt-3 text-navy/70">These are typical requirements. Not every employer is the same.</p>
            <Checklist items={job.requirements} />
            <h3 className="mb-4 mt-8">Who it may suit</h3>
            <Checklist items={job.suits} />
          </div>
          <div>
            <h2>Documents you may need</h2>
            <p className="mb-5 mt-3 text-navy/70">Keep every document safe. Ask us if you are unsure.</p>
            <Checklist items={[...baseDocuments, ...(job.extraDocs ?? [])]} />
            <p className="mt-5 text-sm text-navy/70"><Link href="/guides/passport" className="underline underline-offset-4">Passport guide</Link> &middot; <Link href="/guides/good-conduct" className="underline underline-offset-4">Good conduct guide</Link></p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <h2>How the process works</h2>
          <p className="mb-8 mt-3 max-w-2xl text-navy/70">Here&apos;s what happens next, from your first message to your arrival.</p>
          <NumberedSteps steps={commonProcess} />
          <div className="mt-10"><WarningBox title="Important">
            <ul className="list-disc space-y-1 pl-5">{jobNotes.map((n) => <li key={n}>{n}</li>)}</ul>
          </WarningBox></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <h2>Want to understand the steps?</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["medical", "visa", "airport"].map((s) => <GuideCard key={s} guide={guides.find((g) => g.slug === s)!} />)}
          </div>
          <p className="mt-8"><Link href="/countries" className="inline-flex items-center gap-2 font-medium underline decoration-gold decoration-2 underline-offset-8"><Icon name="Globe" className="h-4 w-4" /> See which countries we work with</Link></p>
        </div>
      </section>

      <section className="section"><div className="container-x"><h2>Need help?</h2><p className="mb-8 mt-3 text-navy/70">Ask us if you are unsure.</p><ContactRow message={msg} /></div></section>

      <WhatNext label="Talk to Kenkos" message={msg} />
    </>
  );
}
