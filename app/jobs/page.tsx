import { PageHero, SectionHeading, WhatNext, InfoCallout } from "@/components/ui";
import { JobCard } from "@/components/cards";
import { jobs, availabilityNote } from "@/lib/jobs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Jobs Abroad | Kenkos", "Explore overseas job types, what each job means, typical requirements and how the process works.", "/jobs");

export default function Page() {
  return (
    <>
      <PageHero title="What job are you looking for?" text="Tap a job to read what it means, what you may need and how the process works." crumbs={[{ label: "Home", href: "/" }, { label: "Jobs" }]} />
      <section className="section">
        <div className="container-x">
          <InfoCallout title="Please read">{availabilityNote} A job is not guaranteed because you make an enquiry.</InfoCallout>
          <SectionHeading className="mt-12" title="Job types" />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
            {jobs.map((j) => <JobCard key={j.slug} job={j} />)}
          </div>
        </div>
      </section>
      <WhatNext />
    </>
  );
}
