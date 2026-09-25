import { PageHero } from "@/components/ui";
import { contact } from "@/lib/contact";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Privacy Policy | Kenkos", "How Kenkos handles the information you send us.", "/privacy");

export default function Page() {
  return (
    <>
      <PageHero title="Privacy Policy" crumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />
      <section className="section"><div className="container-x prose-simple text-[17px]">
        <p><strong>Draft for review.</strong> Have this text checked by a legal adviser before you rely on it.</p>
        <h2 className="mb-4 mt-8 !text-2xl">What we collect</h2><p>When you contact us we receive the details you choose to share, such as your name, phone number, email and message.</p>
        <h2 className="mb-4 mt-8 !text-2xl">How we use it</h2><p>We use your details only to reply to you and to explain our services. We do not sell your information.</p>
        <h2 className="mb-4 mt-8 !text-2xl">Your documents</h2><p>Do not send passport or ID copies through the website form. We will tell you how to share documents safely when needed.</p>
        <h2 className="mb-4 mt-8 !text-2xl">Contact</h2><p>Questions about your information: {contact.email} or {contact.phone}.</p>
      </div></section>
    </>
  );
}
