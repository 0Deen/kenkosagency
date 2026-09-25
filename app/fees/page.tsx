import { PageHero, Checklist, WhatNext, LinkButton } from "@/components/ui";
import { whatsappLink } from "@/lib/contact";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Fees & Costs | Kenkos", "Costs vary by destination, job, employer, visa, medical and travel. Learn what to ask before you pay.", "/fees");

export default function Page() {
  return (
    <>
      <PageHero title="Fees and costs" text="We do not list prices on this page because costs depend on your situation. Ask us and get every cost in writing." crumbs={[{ label: "Home", href: "/" }, { label: "Fees" }]} />
      <section className="section"><div className="container-x grid gap-12 lg:grid-cols-2">
        <div><h2>Costs can vary by</h2><div className="mt-6"><Checklist items={["Destination", "Job", "Employer", "Visa type", "Medical requirements", "Documentation", "Travel", "Other services"]} /></div></div>
        <div><h2>Before you pay</h2><p className="mb-5 mt-3 text-navy/70">Ask these six questions every time.</p><Checklist items={["What am I paying for?", "Is the fee written down?", "Who is receiving the payment?", "Do I have a receipt?", "What happens after payment?", "Can I verify the payment instructions?"]} />
          <div className="mt-8"><LinkButton href={whatsappLink("Hello Kenkos, I want to ask about costs before I pay.")} external>Ask Kenkos Before You Pay</LinkButton></div></div>
      </div></section>
      <WhatNext lead="Want to know your costs?" steps={["Tell us your plan.", "We explain which costs may apply.", "You get the details in writing.", "You decide if you want to continue."]} />
    </>
  );
}
