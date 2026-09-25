import Link from "next/link";
import { PageHero, StepCard, LinkButton, WarningBox, InfoCallout, Checklist, WhatNext } from "@/components/ui";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { DocumentChecklist } from "@/components/DocumentChecklist";
import { Icon } from "@/components/Icon";
import { airportSteps } from "@/lib/guides";
import { documentChecklist, predepartureChecklist, journeySteps } from "@/lib/journey";
import { whatsappLink } from "@/lib/contact";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("How to Work Abroad | Kenkos", "The full journey to working abroad in 10 simple steps: talk to us, documents, medical, visa, flight, pre-departure and arrival.", "/how-it-works");

const icon = (id: string) => journeySteps.find((s) => s.id === id)!.icon;

export default function Page() {
  return (
    <>
      <PageHero title="How to work abroad" text="The whole journey in 10 steps. You do not need to know anything first. We explain everything." crumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]}>
        <LinkButton href={whatsappLink("Hello Kenkos, I want to start a conversation about working abroad.")} variant="gold" external>Start a Conversation</LinkButton>
      </PageHero>
      <section className="section pb-4"><div className="container-x"><h2 className="mb-8">Your journey</h2><ProcessTimeline compact /></div></section>

      <section className="container-x pb-10">
        <StepCard n={1} id="talk" icon={icon("talk")} title="Talk to us">
          <p>Tell us what type of work you want and where you would like to go. We ask about your experience, skills, age where relevant, documents, preferred destination and job type.</p>
          <LinkButton href={whatsappLink("Hello Kenkos, I would like to start a conversation.")} external>Start a Conversation</LinkButton>
        </StepCard>
        <StepCard n={2} id="review" icon={icon("review")} title="Opportunity review">
          <p>Our team checks whether there is a suitable opportunity based on the available employer requirements.</p>
          <WarningBox>A job is not guaranteed simply because you make an enquiry.</WarningBox>
        </StepCard>
        <StepCard n={3} id="application" icon={icon("application")} title="Application">
          <p>If a suitable opportunity is available, we explain the position and requirements before you continue. You should see:</p>
          <Checklist items={["The job", "The country", "Employer requirements", "Salary where verified", "Benefits where verified", "Contract information where available"]} />
        </StepCard>
        <StepCard n={4} id="interview" icon={icon("interview")} title="Interview or selection">
          <p>Some employers want to interview you. It may be a physical interview, a video interview or a telephone interview. The employer makes the final hiring decision.</p>
        </StepCard>
        <StepCard n={5} id="documents" icon={icon("documents")} title="Documents">
          <p>Not sure what this means? Here is a checklist. Tap each item as you get it.</p>
          <DocumentChecklist items={documentChecklist} />
        </StepCard>
        <StepCard n={6} id="medical" icon={icon("medical")} title="Medical examination: what should you expect?">
          <p>If your job or destination requires a medical examination, we will explain where to go, what documents to carry and what to expect.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {[["Before medical", ["What to carry", "Where to go", "What time to arrive", "Identification that may be needed", "Documents that may be required"]],
              ["At the medical centre", ["Examinations and tests required for the destination or employment process may be done", "The exact tests depend on the destination and applicable requirements"]],
              ["After medical", ["Results are processed according to the relevant requirements", "If more information or testing is needed, follow the instructions provided"]]].map(([t, l]) => (
              <div key={t as string} className="card p-5"><h3 className="!text-xl">{t as string}</h3><ul className="mt-3 list-disc space-y-1 pl-5 text-[15px]">{(l as string[]).map((x) => <li key={x}>{x}</li>)}</ul></div>))}
          </div>
          <div className="flex flex-wrap gap-3"><LinkButton href="/guides/medical" variant="outline">Read the Medical Guide</LinkButton><LinkButton href={whatsappLink("Hello Kenkos, I need help with medical.")} external>I Need Help With Medical</LinkButton></div>
        </StepCard>
        <StepCard n={7} id="visa" icon={icon("visa")} title="Visa: what happens next?">
          <p>A visa is official permission to enter or stay in a country for a particular purpose and period, subject to the applicable rules.</p>
          <ol className="grid gap-3 sm:grid-cols-2">{["Required documents", "Application preparation", "Submission", "Appointments where required", "Embassy or authority processing", "Waiting period", "Decision"].map((s, i) => (<li key={s} className="card flex items-center gap-3 p-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-white">{i + 1}</span>{s}</li>))}</ol>
          <WarningBox>Kenkos can provide guidance and assistance, but visa decisions are made by the relevant authorities. We do not promise approval.</WarningBox>
          <LinkButton href="/guides/visa" variant="outline">Read the Visa Guide</LinkButton>
        </StepCard>
        <StepCard n={8} id="flight" icon={icon("flight")} title="Your flight">
          <p>Once travel arrangements are appropriate and confirmed, we can assist with flight coordination. Tap the sample below to see what a ticket shows.</p>
          <details className="group card max-w-xl overflow-hidden">
            <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between px-5 font-medium">Tap here to see an example <span className="rounded bg-gold px-2 py-0.5 text-xs text-navy-deep">SAMPLE</span></summary>
            <div className="border-t border-dashed border-navy/30 p-5 text-[15px]">
              <p className="mb-3 rounded bg-navy-soft px-2 py-1 text-xs font-semibold">SAMPLE ONLY: not a real ticket</p>
              <dl className="grid grid-cols-2 gap-3">
                {[["Passenger", "SAMPLE NAME"], ["Departure date", "DD MMM YYYY"], ["Airline", "Sample Airline"], ["Flight number", "XX 123"], ["Baggage", "e.g. 1 bag, 23 kg"], ["Departure airport", "Nairobi (NBO)"], ["Transit", "If any"], ["Arrival airport", "Destination airport"]].map(([k, v]) => (<div key={k}><dt className="text-xs text-navy/60">{k}</dt><dd className="font-medium">{v}</dd></div>))}
              </dl>
            </div>
          </details>
          <LinkButton href="/guides/flight" variant="outline">Read the Flight Guide</LinkButton>
        </StepCard>
        <StepCard n={9} id="pre-departure" icon={icon("pre-departure")} title="Before you leave Kenya">
          <p>Here&apos;s what you need before you go. Tap each item as you pack it.</p>
          <DocumentChecklist items={predepartureChecklist} title="Pre-departure checklist" />
          <h3 className="!text-2xl">We also explain what happens at the airport</h3>
          <ol className="grid gap-2 sm:grid-cols-2">{airportSteps.map((s, i) => (<li key={s.title}><Link href="/guides/airport" className="card flex items-center gap-3 p-3 hover:shadow-lg"><span className="font-display text-2xl text-gold-deep">{i + 1}</span><Icon name={s.icon} className="h-5 w-5" />{s.title}</Link></li>))}</ol>
        </StepCard>
        <StepCard n={10} id="arrival" icon={icon("arrival")} title="What happens when you arrive?">
          <p>Depending on the arrangement, there may be airport pickup, an employer representative, accommodation, workplace instructions, a local contact and orientation.</p>
          <InfoCallout>The exact arrangements depend on the employer, destination and agreed service.</InfoCallout>
          <LinkButton href="/guides/relocation" variant="outline">Read the Relocation Guide</LinkButton>
        </StepCard>
      </section>
      <WhatNext />
    </>
  );
}
