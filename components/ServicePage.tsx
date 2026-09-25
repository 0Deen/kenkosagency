import { Icon } from "./Icon";
import { Checklist, ContactRow, LinkButton, NumberedSteps, PageHero, SectionHeading, WarningBox, WhatNext } from "./ui";
import { whatsappLink } from "@/lib/contact";
import type { Service } from "@/lib/services";

/** Every service page follows the same What / Why / Need / Happens / Next / Who structure. */
export function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <PageHero title={service.headline} text={service.short} image={service.image} imagePos={service.imagePos}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]}>
        <LinkButton href={whatsappLink(service.ctaMessage)} variant="gold" external>{service.nextLabel}</LinkButton>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div><h2>What is it?</h2><div className="prose-simple mt-5 text-[17px]">{service.what.map((p) => <p key={p}>{p}</p>)}</div></div>
          <div><h2>Why do I need it?</h2><div className="prose-simple mt-5 text-[17px]">{service.why.map((p) => <p key={p}>{p}</p>)}</div></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading title="What we can help with" text="Ask us which of these apply to you." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.offers.map((o) => (
              <div key={o.title} className="rounded-card border border-navy/15 p-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-white"><Icon name={o.icon} /></span>
                <h3 className="mt-5 !text-xl">{o.title}</h3>
                <p className="mt-2 text-[15px] text-navy/75">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2>What do I need?</h2>
            <p className="mt-3 text-navy/70">Here&apos;s what you need. Your exact requirements may be different.</p>
            <div className="mt-6"><Checklist items={service.need} /></div>
          </div>
          <div>
            <h2>What happens?</h2>
            <p className="mt-3 mb-6 text-navy/70">Here&apos;s what happens, step by step.</p>
            <NumberedSteps steps={service.happens} />
          </div>
        </div>
        <div className="container-x mt-12"><WarningBox title="Please remember">{service.notice}</WarningBox></div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <h2>Who can help me?</h2>
          <p className="mb-8 mt-3 text-navy/70">Not sure what this means? Ask us. No question is too small.</p>
          <ContactRow message={service.ctaMessage} />
        </div>
      </section>

      <WhatNext label={service.nextLabel} message={service.ctaMessage} steps={["Read this page and note your questions.", "Contact Kenkos by WhatsApp, phone or email.", "Our team explains the next step.", "You decide if you want to continue."]} lead="Here's what to do now." />
    </>
  );
}
