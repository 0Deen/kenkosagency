import { PageHero, FrameImage, Checklist, WhatNext } from "@/components/ui";
import { contact } from "@/lib/contact";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("About Kenkos | Recruitment & Logistics Centre", "Kenkos is a Kenyan travel, recruitment and logistics company helping people and businesses move safely and confidently.", "/about");

export default function Page() {
  return (
    <>
      <PageHero title="About Kenkos" text="Connecting people. Moving opportunities. Delivering solutions." crumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <section className="section"><div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="prose-simple text-[17px]">
          <h2 className="mb-5">Who we are</h2>
          <p>{contact.company} is a Kenyan travel, recruitment and logistics company. Our office is in the {contact.addressLines[0]}, Nairobi.</p>
          <p>We help people and businesses move safely and confidently between Kenya and the world.</p>
          <h2 className="mb-5 mt-10">Why we exist</h2>
          <p>Working abroad, travelling for the first time or moving goods can feel confusing. We exist to make a complicated journey easy to understand, and to help you know what happens next.</p>
          <h2 className="mb-5 mt-10">What we do</h2>
          <Checklist items={["Work abroad guidance", "Travel and flight support", "Visa guidance", "Pre-departure preparation", "Relocation support", "Logistics", "Partnerships with employers and organisations"]} />
          <h2 className="mb-5 mt-10">Who we serve</h2>
          <Checklist items={["Job seekers", "Travellers", "People relocating", "Employers and agencies", "Logistics customers"]} />
          {contact.licenceNumber && <p className="mt-8 font-medium">Registration / licence number: {contact.licenceNumber}</p>}
        </div>
        <FrameImage src="/images/office.jpg" alt="A Kenkos team member at the Nairobi office" pos="50% 15%" ratio="aspect-[4/5]" className="mx-auto w-full max-w-[400px]" />
      </div></section>
      <WhatNext lead="Want to know more about us?" message="Hello Kenkos, I would like to know more about your company." steps={["Read our Safety page.", "Visit our office or call us.", "Ask any question you have.", "Decide the next step in your own time."]} />
    </>
  );
}
