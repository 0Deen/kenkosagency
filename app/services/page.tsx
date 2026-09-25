import { PageHero, SectionHeading, WhatNext } from "@/components/ui";
import { ServiceCard } from "@/components/cards";
import { ServiceRing } from "@/components/ServiceRing";
import { services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Our Services | Kenkos", "Overseas jobs, travel, visa guidance, flights, relocation, logistics and partnerships from Kenkos in Nairobi.", "/services");

export default function Page() {
  return (
    <>
      <PageHero title="What Kenkos can do for you" text="Work abroad, travel, visas, flights, relocation, logistics and partnerships. Pick a service to see what it means and what happens next." crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <section className="section"><div className="container-x"><ServiceRing /></div></section>
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading title="All services" text="Every service page explains: what it is, why you need it, what you need, what happens and what happens next." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <ServiceCard key={s.slug} service={{ ...s, slug: s.slug === "partnerships" ? "partnerships" : s.slug }} />)}
          </div>
        </div>
      </section>
      <WhatNext title="What happens next?" lead="Not sure which service you need?" steps={["Tell us what you want to do.", "We explain which service fits.", "We tell you the documents you need.", "You decide the next step."]} />
    </>
  );
}
