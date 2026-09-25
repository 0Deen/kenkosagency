import { PageHero, Checklist, WarningBox, WhatNext, ContactRow } from "@/components/ui";
import { contact } from "@/lib/contact";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Stay Safe | Kenkos", "How to avoid job and travel scams: verify contacts, get everything in writing, keep receipts and never pay a random personal number.", "/safety");

export default function Page() {
  return (
    <>
      <PageHero title="Stay safe. Know who you are dealing with." text="Most people are honest, but scams exist. These simple checks protect you." crumbs={[{ label: "Home", href: "/" }, { label: "Safety" }]} />
      <section className="section"><div className="container-x grid gap-12 lg:grid-cols-2">
        <div><h2>Before making any payment</h2><div className="mt-6"><Checklist items={["Confirm the company contact", "Confirm the opportunity", "Request written information", "Understand what you are paying for", "Keep receipts", "Read contracts", "Avoid unofficial individuals", "Ask questions if something is unclear"]} /></div></div>
        <div className="space-y-6">
          <div className="rounded-card bg-navy p-7 text-white"><h2 className="!text-2xl !text-white sm:!text-3xl">Never send money to a random personal number because someone claims to represent Kenkos.</h2></div>
          <WarningBox title="Verify using our official contacts">Phone or WhatsApp: {contact.phone}<br />Email: {contact.email}<br />and the contact details on this website.</WarningBox>
          <WarningBox title="Also check">Ask any agency for its licence and check it with the relevant Kenyan authority, such as the National Employment Authority. Never hand your original passport to an unofficial person.{contact.licenceNumber ? ` Kenkos licence: ${contact.licenceNumber}.` : ""}</WarningBox>
        </div>
      </div></section>
      <section className="section pt-0"><div className="container-x"><h2 className="mb-8">Unsure about a message? Ask us.</h2><ContactRow message="Hello Kenkos, I want to verify a message I received." /></div></section>
      <WhatNext lead="Not sure if something is genuine?" steps={["Stop before you pay.", "Ask for the details in writing.", "Contact Kenkos on the official number.", "We help you understand the next step."]} />
    </>
  );
}
