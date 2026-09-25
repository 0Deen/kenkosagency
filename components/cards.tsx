import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";

import type { Job } from "@/lib/jobs";
import type { Country } from "@/lib/countries";
import type { Guide } from "@/lib/guides";
import type { Service } from "@/lib/services";

const toneClass = {
  navy: "from-navy to-navy-deep",
  mid: "from-navy-mid to-navy",
  deep: "from-navy-deep to-[#0F1725]",
  slate: "from-[#3B4B68] to-navy-mid",
} as const;

const Chip = () => (
  <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-navy transition-transform group-hover:translate-x-1">
    <ArrowRight
      className="h-4 w-4"
      aria-hidden="true"
    />
  </span>
);

/* =========================================================
   JOB CARD
   ========================================================= */

export function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/jobs/${job.slug}`}
      className="group relative block aspect-[3/4] overflow-hidden rounded-card bg-navy shadow-card"
    >
      {job.image ? (
        <Image
          src={job.image}
          alt={job.title}
          fill
          sizes="(min-width:1024px) 280px, (min-width:640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          style={{
            objectPosition: job.imagePos,
          }}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-navy-mid to-navy-deep text-gold/40">
          <Icon
            name={job.icon}
            className="h-24 w-24"
            strokeWidth={1}
          />
        </div>
      )}

      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/25 to-transparent"
        aria-hidden="true"
      />

      <span className="absolute left-3 top-3 rounded-md bg-white px-2.5 py-1 text-xs font-medium text-navy">
        {job.sector}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <h3 className="!text-lg !text-white sm:!text-xl">
          {job.title}
        </h3>

        <p className="mt-1 line-clamp-2 text-[13px] text-white/80">
          {job.short}
        </p>

        <div className="mt-3 flex items-center justify-between text-sm font-medium">
          <span>See requirements</span>
          <Chip />
        </div>
      </div>
    </Link>
  );
}

/* =========================================================
   COUNTRY CARD
   ========================================================= */

export function CountryCard({
  country,
}: {
  country: Country;
}) {
  return (
    <Link
      href={`/countries/${country.slug}`}
      className={`group relative block aspect-[3/4] overflow-hidden rounded-card bg-gradient-to-br ${toneClass[country.tone]} text-white shadow-card`}
    >
      {/* COUNTRY IMAGE */}
      <Image
        src={country.image}
        alt={country.name}
        fill
        sizes="(min-width:1024px) 280px, (min-width:640px) 33vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        style={{
          objectPosition: country.imagePos,
        }}
      />

      {/* DARK PHOTO OVERLAY */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/35 to-navy-deep/5"
        aria-hidden="true"
      />

      {/* EXTRA DARKNESS FOR READABILITY */}
      <div
        className="absolute inset-0 bg-navy/10 transition-colors duration-300 group-hover:bg-navy/0"
        aria-hidden="true"
      />

      {/* COUNTRY CODE */}
      <span
        aria-hidden="true"
        className="absolute -right-2 top-10 select-none font-display text-[9rem] leading-none text-white/10"
      >
        {country.code}
      </span>

      {/* REGION */}
      <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1 text-xs font-medium text-navy">
        <Icon
          name="MapPin"
          className="h-3.5 w-3.5"
        />
        {country.region}
      </span>

      {/* COUNTRY INFORMATION */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="!text-xl !text-white sm:!text-2xl">
          {country.name}
        </h3>

        <p className="mt-1 text-[13px] text-white/80">
          Capital: {country.capital}
        </p>

        <div className="mt-3 flex items-center justify-between text-sm font-medium">
          <span>Explore</span>
          <Chip />
        </div>
      </div>
    </Link>
  );
}

/* =========================================================
   GUIDE CARD
   ========================================================= */

export function GuideCard({
  guide,
}: {
  guide: Guide;
}) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group card flex gap-4 p-5 transition-shadow hover:shadow-lg"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy text-white">
        <Icon name={guide.icon} />
      </span>

      <div className="min-w-0">
        <h3 className="!text-xl">
          {guide.title}
        </h3>

        <p className="mt-1 text-[15px] text-navy/75">
          {guide.short}
        </p>

        <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-navy">
          Read the guide
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}

/* =========================================================
   SERVICE CARD
   ========================================================= */

export function ServiceCard({
  service,
}: {
  service: Service;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group card flex flex-col p-6 transition-shadow hover:shadow-lg"
    >
      <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-white">
        <Icon name={service.icon} />
      </span>

      <h3 className="mt-5 !text-2xl">
        {service.title}
      </h3>

      <p className="mt-2 flex-1 text-[15px] text-navy/75">
        {service.short}
      </p>

      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}