import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Icon } from "@/components/Icon";
import {
  Checklist,
  ContactRow,
  InfoCallout,
  PageHero,
  LinkButton,
  WarningBox,
  WhatNext,
} from "@/components/ui";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  countries,
  countryNotice,
  getCountry,
} from "@/lib/countries";
import { baseDocuments } from "@/lib/jobs";
import { whatsappLink } from "@/lib/contact";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const c = getCountry(params.slug);

  if (!c) return {};

  return pageMeta(
    `Work & Travel in ${c.name} | Kenkos`,
    `How working and travelling in ${c.name} usually works: documents, medical, visa, flight, arrival and safety information.`,
    `/countries/${c.slug}`
  );
}

/* =========================================================
   COUNTRY IMAGES
   ---------------------------------------------------------
   Each country gets its own image from /public/images.
   Images are NOT reused between country mappings.
========================================================= */

const countryImages: Record<
  string,
  {
    src: string;
    alt: string;
    position?: string;
  }
> = {
  bahrain: {
    src: "/images/bahrain.png",
    alt: "Bahrain",
    position: "center",
  },

  qatar: {
    src: "/images/qatar.png",
    alt: "Qatar",
    position: "center",
  },

  kuwait: {
    src: "/images/thekuwait.png",
    alt: "Kuwait",
    position: "center",
  },

  jordan: {
    src: "/images/jordan.png",
    alt: "Jordan",
    position: "center",
  },

  uae: {
    src: "/images/uae.png",
    alt: "United Arab Emirates",
    position: "center",
  },

  dubai: {
    src: "/images/dubai.png",
    alt: "Dubai",
    position: "center",
  },

  doha: {
    src: "/images/dohadoha.png",
    alt: "Doha",
    position: "center",
  },
};

/* =========================================================
   FALLBACK IMAGE
   ---------------------------------------------------------
   Used only if a country exists in countries.ts but does
   not yet have a dedicated image mapping above.
========================================================= */

const fallbackCountryImage = {
  src: "/images/office.jpg",
  alt: "Kenkos office",
  position: "center",
};

const selectedSteps = [
  {
    label: "Application",
    href: "/how-it-works#application",
    icon: "FileText",
  },
  {
    label: "Selection",
    href: "/how-it-works#interview",
    icon: "Users",
  },
  {
    label: "Documents",
    href: "/how-it-works#documents",
    icon: "ClipboardCheck",
  },
  {
    label: "Medical",
    href: "/guides/medical",
    icon: "Stethoscope",
  },
  {
    label: "Visa",
    href: "/guides/visa",
    icon: "Stamp",
  },
  {
    label: "Flight",
    href: "/guides/flight",
    icon: "Plane",
  },
  {
    label: "Pre-departure",
    href: "/pre-departure",
    icon: "Luggage",
  },
  {
    label: "Travel",
    href: "/guides/airport",
    icon: "PlaneTakeoff",
  },
  {
    label: "Arrival",
    href: "/guides/relocation",
    icon: "MapPin",
  },
];

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const c = getCountry(params.slug);

  if (!c) notFound();

  const msg = `Hello Kenkos, I would like to know about ${c.name}.`;

  const facts = [
    ["Country", c.name],
    ["Capital", c.capital],
    ["Main language", c.language],
    ["Currency", c.currency],
  ];

  const faqs = [
    {
      q: `Can you guarantee a job in ${c.name}?`,
      a: "No. We do not guarantee jobs. Employers make the final hiring decision, and opportunities depend on current demand.",
    },
    {
      q: `Who approves a visa for ${c.name}?`,
      a: "The relevant authorities of the country decide. We provide guidance and assistance only.",
    },
    {
      q: "What should I do before I pay anyone?",
      a: "Read our Safety page and Fees page, ask what you are paying for, get it in writing, and verify with our official number.",
    },
  ];

  const blocks = [
    {
      icon: "Route",
      title: "General process",
      text: `Your journey to ${c.name} follows the same broad steps: talk to us, review an opportunity, application, selection, documents, medical, visa, flight, pre-departure, travel and arrival. Exact steps depend on the employer and the job.`,
    },
    {
      icon: "FileText",
      title: "Typical documents",
      text: "Usually a passport, national ID, photographs, CV and certificates where relevant, plus employer and visa documents. Your exact list is confirmed by our team.",
    },
    {
      icon: "Stethoscope",
      title: "Medical stage",
      text: `If a medical is required for ${c.name}, we explain where to go, what to carry and what to expect. The exact tests depend on the destination and applicable requirements.`,
    },
    {
      icon: "Stamp",
      title: "Visa stage",
      text: `A visa is official permission to enter or stay in ${c.name}. The authorities decide. We help you prepare and understand the process. We cannot promise approval.`,
    },
    {
      icon: "Plane",
      title: "Travel stage",
      text: "When travel is confirmed, we help coordinate your flight and explain the ticket, baggage and airport steps.",
    },
    {
      icon: "MapPin",
      title: "Arrival",
      text: "What happens when you land depends on the employer and the arrangement, for example pickup, accommodation and orientation. Ask us before you travel.",
    },
  ];

  /*
   * Select the dedicated image for this country.
   * The slug comes from /lib/countries.
   */
  const countryImage =
    countryImages[c.slug] ?? fallbackCountryImage;

  return (
    <>
      <PageHero
        title={`Work & travel in ${c.name}`}
        text="Here is how the journey usually works, in simple words."
        image={countryImage.src}
        imagePos={countryImage.position}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Countries", href: "/countries" },
          { label: c.name },
        ]}
      >
        <LinkButton
          href={whatsappLink(msg)}
          variant="gold"
          external
        >
          Ask About {c.name}
        </LinkButton>
      </PageHero>

      <section className="container-x -mt-8 relative z-10">
        <dl className="card grid gap-px overflow-hidden bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([l, v]) => (
            <div
              key={l}
              className="bg-white p-5"
            >
              <dt className="text-sm text-navy/60">
                {l}
              </dt>

              <dd className="mt-1 font-medium">
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section">
        <div className="container-x space-y-10">
          <InfoCallout title="Please remember">
            {countryNotice}
          </InfoCallout>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2>
                Jobs people often ask about
              </h2>

              <p className="mb-5 mt-3 text-navy/70">
                General information only. This is not a list of current vacancies.
              </p>

              <Checklist items={c.categories} />

              <p className="mt-5 text-sm">
                <Link
                  href="/jobs"
                  className="underline underline-offset-4"
                >
                  See all job types
                </Link>
              </p>
            </div>

            <div>
              <h2>
                Good to know
              </h2>

              <p className="mb-5 mt-3 text-navy/70">
                Learn these before you decide.
              </p>

              <Checklist items={c.goodToKnow} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <h2>
            What happens if you are selected?
          </h2>

          <p className="mb-8 mt-3 text-navy/70">
            Tap any step to read more.
          </p>

          <ol className="grid gap-3 sm:grid-cols-3 lg:grid-cols-9">
            {selectedSteps.map((s, i) => (
              <li
                key={s.label}
                className="relative"
              >
                <Link
                  href={s.href}
                  className="flex h-full flex-col items-center gap-2 rounded-card border border-navy/15 p-4 text-center hover:border-navy hover:bg-ivory"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-navy text-white">
                    <Icon
                      name={s.icon}
                      className="h-5 w-5"
                    />
                  </span>

                  <span className="text-xs text-navy/60">
                    Step {i + 1}
                  </span>

                  <span className="text-[14px] font-medium">
                    {s.label}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blocks.map((b) => (
              <div
                key={b.title}
                className="card p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-navy text-white">
                  <Icon name={b.icon} />
                </span>

                <h3 className="mt-4 !text-xl">
                  {b.title}
                </h3>

                <p className="mt-2 text-[15px] text-navy/80">
                  {b.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <WarningBox title="Safety information">
              Never send money to a personal number. Never give your original passport to unofficial people. Verify everything with +254 702 925 132.{" "}
              <Link
                href="/safety"
                className="underline"
              >
                Read more
              </Link>
              .
            </WarningBox>

            <InfoCallout title="What depends on the employer?">
              Salary, working hours, duties, accommodation, contract terms and requirements all depend on the employer and the job. Ask for them in writing.
            </InfoCallout>
          </div>

          <div className="mt-6">
            <h3 className="mb-3 !text-lg">
              Documents you may need
            </h3>

            <Checklist items={baseDocuments} />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <h2 className="mb-8">
            Questions about {c.name}
          </h2>

          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <h2>
            Contact Kenkos
          </h2>

          <p className="mb-8 mt-3 text-navy/70">
            Ask us what is available for {c.name} right now.
          </p>

          <ContactRow message={msg} />
        </div>
      </section>

      <WhatNext
        label={`Ask About ${c.name}`}
        message={msg}
      />
    </>
  );
}