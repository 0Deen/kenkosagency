import Link from "next/link";
import { PageHero, WhatNext } from "@/components/ui";
import { DocumentChecklist } from "@/components/DocumentChecklist";
import { Icon } from "@/components/Icon";
import { airportSteps } from "@/lib/guides";
import { predepartureChecklist } from "@/lib/journey";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Before You Leave Kenya | Kenkos", "A pre-departure checklist and airport walkthrough for first-time travellers leaving Kenya for work or study.", "/pre-departure");

export default function Page() {
  return (
    <>
      <PageHero title="Before you leave Kenya" text="Already got a job or visa? Here is what to do before you fly." crumbs={[{ label: "Home", href: "/" }, { label: "Pre-departure" }]} />
      <section className="section"><div className="container-x grid gap-12 lg:grid-cols-2">
        <DocumentChecklist items={predepartureChecklist} title="Pre-departure checklist" />
        <div><h2>What happens at the airport</h2><p className="mb-6 mt-3 text-navy/70">Tap a step to read it.</p>
          <ol className="grid gap-3">{airportSteps.map((s, i) => (<li key={s.title}><Link href="/guides/airport" className="card flex items-center gap-4 p-3 hover:shadow-lg"><span className="font-display text-3xl text-gold-deep">{i + 1}</span><Icon name={s.icon} className="h-5 w-5" /><span className="font-medium">{s.title}</span></Link></li>))}</ol></div>
      </div></section>
      <WhatNext message="Hello Kenkos, I am getting ready to travel." lead="Ready to travel?" steps={["Complete the checklist.", "Read the Airport Guide.", "Confirm your details with Kenkos.", "Travel with confidence."]} />
    </>
  );
}
