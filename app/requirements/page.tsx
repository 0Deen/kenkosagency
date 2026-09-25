import { PageHero, WhatNext } from "@/components/ui";
import { RequirementsSelector } from "@/components/RequirementsSelector";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("What Do I Need? | Kenkos", "Choose work abroad, tourist, student, relocation or business travel to see a simple document checklist.", "/requirements");

export default function Page() {
  return (
    <>
      <PageHero title="What do I need?" text="Choose what you are planning. We will show a simple checklist." crumbs={[{ label: "Home", href: "/" }, { label: "What Do I Need?" }]} />
      <section className="section"><div className="container-x"><RequirementsSelector /></div></section>
      <WhatNext lead="Want us to check your list?" steps={["Choose your plan above.", "Collect the documents you have.", "Contact Kenkos.", "Our team tells you what is missing."]} />
    </>
  );
}
