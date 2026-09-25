import { PageHero, WhatNext } from "@/components/ui";
import { GuideCard } from "@/components/cards";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { guides } from "@/lib/guides";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Guides | Kenkos", "Simple visual guides to medical checks, visas, passports, good conduct certificates, flights, airports and relocation.", "/guides");

export default function Page() {
  return (
    <>
      <PageHero title="Guides for first-time travellers" text="Short, friendly guides. Read them in any order, or follow your journey from start to finish." crumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
      <section className="section"><div className="container-x grid gap-5 md:grid-cols-2">{guides.map((g) => <GuideCard key={g.slug} guide={g} />)}</div></section>
      <section className="section bg-white"><div className="container-x"><h2 className="mb-8">Your journey</h2><ProcessTimeline /></div></section>
      <WhatNext title="What happens next?" lead="Read the guide that matches where you are." />
    </>
  );
}
