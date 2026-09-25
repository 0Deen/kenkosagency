import { PageHero, SectionHeading, WhatNext, InfoCallout } from "@/components/ui";
import { CountryCard } from "@/components/cards";
import { countries, countryNotice } from "@/lib/countries";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Countries | Kenkos", "See how working and travelling works in the UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain, Jordan, Turkey, Luxembourg, Poland and Greece.", "/countries");

export default function Page() {
  return (
    <>
      <PageHero title="Where can you go?" text="Choose a country to see how the process usually works there, from application to arrival." crumbs={[{ label: "Home", href: "/" }, { label: "Countries" }]} />
      <section className="section">
        <div className="container-x">
          <InfoCallout title="Please read">{countryNotice}</InfoCallout>
          {(["Gulf", "Middle East", "Europe"] as const).map((r) => (
            <div key={r} className="mt-14">
              <SectionHeading title={r === "Gulf" ? "Gulf countries" : r === "Middle East" ? "Other Middle East" : "Europe"} />
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
                {countries.filter((c) => c.region === r).map((c) => <CountryCard key={c.slug} country={c} />)}
              </div>
            </div>
          ))}
          <div id="other" className="mt-14 rounded-card border border-dashed border-navy/40 p-6 sm:p-8">
            <h2 className="!text-3xl">Other destinations</h2>
            <p className="mt-3 max-w-2xl text-[17px]">We can also help with other destinations where approved opportunities or services are available. Ask our team about the country you have in mind.</p>
          </div>
        </div>
      </section>
      <WhatNext title="What happens next?" lead="Ready to explore a country?" steps={["Choose your country.", "Read how the process works there.", "Contact Kenkos.", "Our team tells you what is available now."]} />
    </>
  );
}
