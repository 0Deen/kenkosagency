import { PageHero } from "@/components/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Terms | Kenkos", "Terms of use for the Kenkos information website.", "/terms");

export default function Page() {
  return (
    <>
      <PageHero title="Terms of use" crumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <section className="section"><div className="container-x prose-simple text-[17px]">
        <p><strong>Draft for review.</strong> Have this text checked by a legal adviser before you rely on it.</p>
        <h2 className="mb-4 mt-8 !text-2xl">Information only</h2><p>This website gives general information. It is not a job offer, a visa approval or a guarantee of any outcome.</p>
        <h2 className="mb-4 mt-8 !text-2xl">Requirements can change</h2><p>Employer, visa, medical and travel requirements change often. Always confirm your details with our team.</p>
        <h2 className="mb-4 mt-8 !text-2xl">Decisions</h2><p>Employers make hiring decisions. Governments and embassies make visa decisions.</p>
        <h2 className="mb-4 mt-8 !text-2xl">Payments</h2><p>Only pay after you understand what the payment is for, and get a receipt. Verify payment instructions with our official contacts.</p>
      </div></section>
    </>
  );
}
