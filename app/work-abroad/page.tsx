import Image from "next/image";
import Link from "next/link";

import {
  PageHero,
  SectionHeading,
  Checklist,
  LinkButton,
  WhatNext,
  WarningBox,
} from "@/components/ui";

import { JobCard, CountryCard } from "@/components/cards";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Icon } from "@/components/Icon";

import { industries } from "@/lib/industries";
import { jobs, availabilityNote } from "@/lib/jobs";
import { countries } from "@/lib/countries";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Work Abroad | Kenkos",
  "Understand how working abroad works: job types, countries, requirements, medical, visa, flight and arrival, explained in simple English.",
  "/work-abroad"
);

const explore = [
  "Countries",
  "Job types",
  "Requirements",
  "Application steps",
  "Medical preparation",
  "Documentation",
  "Visa support",
  "Flight arrangements",
  "Pre-departure preparation",
  "Relocation",
];

/* =========================================================
   PAGE IMAGES
   Each image is used once in this page.
   Leading image: office.jpg
========================================================= */

const industryImages = [
  "/images/restaurant.jpg",
  "/images/engineering.png",
  "/images/electrician.png",
  "/images/construction.png",
  "/images/healthcare.png",
  "/images/manufacturing.png",
  "/images/oil.png",
  "/images/warehouse.jpg",
  "/images/logistics.png",
  "/images/agriculture.png",
];

const jobImages = [
  "/images/hospitality.png",
  "/images/housekeeping.jpg",
  "/images/caregiver.jpg",
  "/images/domesticworker.png",
  "/images/driver.png",
  "/images/driving.png",
  "/images/cleaning.png",
  "/images/retail.png",
  "/images/security.jpg",
  "/images/medical.jpg",
  "/images/oil.png"
];

const countryImages = [
  "/images/bahrain.png",
  "/images/qatar.png",
  "/images/thekuwait.png",
  "/images/dubai.png",
  "/images/jordan.png",
  "/images/uae.png",
  "/images/qaatar.png",
  "/images/dohadoha.png",
  "/images/dohaqatar.png",
  "/images/kuwait01.png",
  "/images/kuwait02.png",
  "/images/construction.png"
];

const journeyImages = [
  "/images/beauty.jpg",
  "/images/beauty.png",
  "/images/factories.png",
  "/images/electrician.jpg",
  "/images/security.png",
  "/images/caregiver.png",
  "/images/restaurant.png",
  "/images/brand-poster.jpg",
];

/* =========================================================
   WORK ABROAD PAGE
========================================================= */

export default function Page() {
  return (
    <>
      {/* =================================================
          LEADING IMAGE
          office.jpg is used first and only once
      ================================================= */}

      <PageHero
        title="Work abroad with clear guidance"
        text="Looking for a job abroad can be confusing. We make the process easier to understand."
        image="/images/office.jpg"
        imagePos="50% 25%"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Work Abroad" },
        ]}
      >
        <LinkButton href="/how-it-works" variant="gold">
          See How Working Abroad Works
        </LinkButton>
      </PageHero>

      {/* =================================================
          EXPLORE + JOB AREAS
      ================================================= */}

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2>You can explore</h2>

            <div className="mt-6">
              <Checklist items={explore} />
            </div>
          </div>

          <div>
            <h2>Job areas</h2>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {industries.map((i, index) => (
                <li
                  key={i.slug}
                  className="card relative flex items-center gap-3 overflow-hidden p-4"
                >
                  <Image
                    src={
                      industryImages[index % industryImages.length]
                    }
                    alt={i.name}
                    width={72}
                    height={72}
                    className="h-14 w-14 shrink-0 rounded-xl object-cover"
                  />

                  <Icon
                    name={i.icon}
                    className="h-5 w-5 shrink-0 text-gold-deep"
                  />

                  {i.name}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <WarningBox title="Please remember">
                {availabilityNote}
              </WarningBox>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          JOBS
      ================================================= */}

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading title="What job are you looking for?" />

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
            {jobs.map((j, index) => (
              <div
                key={j.slug}
                className="relative overflow-hidden rounded-[28px]"
              >
                <Image
                  src={jobImages[index % jobImages.length]}
                  alt=""
                  width={600}
                  height={700}
                  className="absolute inset-0 h-full w-full object-cover opacity-0"
                />

                <JobCard
                  key={j.slug}
                  job={{
                    ...j,
                    image:
                      jobImages[index % jobImages.length],
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          COUNTRIES
      ================================================= */}

      <section className="section">
        <div className="container-x">
          <SectionHeading title="Where can you go?" />

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {countries.map((c, index) => (
              <div
                key={c.slug}
                className="relative overflow-hidden rounded-[28px]"
              >
                <Image
                  src={
                    countryImages[index % countryImages.length]
                  }
                  alt=""
                  width={600}
                  height={800}
                  className="absolute inset-0 h-full w-full object-cover opacity-0"
                />

                <CountryCard
                  key={c.slug}
                  country={{
                    ...c,
                    image:
                      countryImages[
                        index % countryImages.length
                      ],
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          JOURNEY
      ================================================= */}

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            title="The journey, step by step"
            text="Tap any number to read that step."
          />

          <div className="mt-8">
            <ProcessTimeline />
          </div>

          {/* Additional unique visual images only.
              No existing words have been removed or changed. */}

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {journeyImages.map((image, index) => (
              <div
                key={image}
                className="relative aspect-[4/3] overflow-hidden rounded-[24px]"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 25vw, 50vw"
                />
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm">
            New to this? Start with{" "}
            <Link
              href="/requirements"
              className="underline underline-offset-4"
            >
              What do I need?
            </Link>
          </p>
        </div>
      </section>

      <WhatNext message="Hello Kenkos, I would like to work abroad." />
    </>
  );
}