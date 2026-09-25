import { PageHero, ContactCard } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { contact, whatsappLink } from "@/lib/contact";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Contact Kenkos | Nairobi", "Call, WhatsApp, email or visit Kenkos at the Rattansi Educational Trust Building, Nairobi.", "/contact");

export default function Page({ searchParams }: { searchParams: { topic?: string } }) {
  return (
    <>
      <PageHero title="Talk to the Kenkos team" text="Tell us what you need. You do not need to know all the details. Our team can help you understand the next step." crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <section className="section pb-8"><div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <ContactCard icon="Phone" title="Phone" value={contact.phone} action="Call now" href={contact.phoneHref} />
        <ContactCard icon="MessageCircle" title="WhatsApp" value={contact.phone} action="Chat with us" href={whatsappLink()} />
        <ContactCard icon="Mail" title="Email" value={contact.email} action="Send email" href={contact.emailHref} />
        <ContactCard icon="MapPin" title="Office" value={<>{contact.addressLines[0]}<br />{contact.addressLines[1]}</>} action="Get directions" href={contact.mapLink} />
      </div></section>
      <section className="section"><div className="container-x grid gap-10 lg:grid-cols-2">
        <div><h2 className="mb-6">Send us a question</h2><ContactForm defaultTopic={searchParams.topic ?? ""} /></div>
        <div id="office" className="scroll-mt-28"><h2 className="mb-6">Our office</h2>
          <div className="overflow-hidden rounded-card shadow-card"><iframe title="Map to the Kenkos office, Rattansi Educational Trust Building, Nairobi" src={contact.mapEmbed} className="h-[380px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div>
      </div></section>
    </>
  );
}
