import { PageHero, CTASection } from "@/components/ui";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/lib/faqs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("FAQ | Kenkos", "Answers about working abroad, visas, medicals, costs, flights, relocation and staying safe.", "/faq");

export default function Page() {
  const ld = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <>
      <PageHero title="Frequently asked questions" text="No question is too small. Tap a question to read the answer." crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
      <section className="section pb-0"><div className="container-x"><FAQAccordion items={faqs} /></div></section>
      <CTASection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
