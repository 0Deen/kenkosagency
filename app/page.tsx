"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import Link from "next/link";



import {

  ArrowRight,

  Plane,

  MapPin,

  Phone,

  Mail,

  MessageCircle,

  Globe2,

  ShieldCheck,

  Route,

  Languages,

} from "lucide-react";



import {

  Checklist,

  LinkButton,

  WhatNext,

} from "@/components/ui";



import {

  JobCard,

  CountryCard,

  GuideCard,

} from "@/components/cards";



import { StairSteps } from "@/components/StairSteps";

import { ServiceRing } from "@/components/ServiceRing";

import { FAQAccordion } from "@/components/FAQAccordion";



import { contact, whatsappLink } from "@/lib/contact";

import { jobs, availabilityNote } from "@/lib/jobs";

import { countries } from "@/lib/countries";

import { guides } from "@/lib/guides";

import { faqs } from "@/lib/faqs";





/* =========================================================

   HOMEPAGE DATA

========================================================= */



const helpCards = [

  {

    title: "Work Abroad",

    eyebrow: "OVERSEAS OPPORTUNITIES",

    text:

      "Explore available jobs, countries, requirements and the steps from application to travel.",

    button: "Explore Jobs",

    href: "/work-abroad",



    // UNIQUE IMAGE

    img: "/images/hospitality.png",



    position: "center",

  },



  {

    title: "Travel With Us",

    eyebrow: "TRAVEL SERVICES",

    text:

      "Need a flight, visa guidance or help preparing for your next journey?",

    button: "Explore Travel",

    href: "/services/travel",



    // UNIQUE IMAGE

    img: "/images/brand-poster.jpg",



    position: "center",

  },



  {

    title: "Ready To Move",

    eyebrow: "RELOCATION",

    text:

      "Already have a job or visa? Get practical help before leaving Kenya.",

    button: "Prepare To Travel",

    href: "/pre-departure",



    // UNIQUE IMAGE

    img: "/images/driving.png",



    position: "70% center",

  },



  {

    title: "Logistics",

    eyebrow: "LOGISTICS SUPPORT",

    text:

      "Need help moving goods, people or coordinating logistics?",

    button: "Explore Logistics",

    href: "/services/logistics",



    // UNIQUE IMAGE

    img: "/images/logistics.png",



    position: "center",

  },

];





const features = [

  {

    icon: Languages,

    title: "Plain English",

    text: "Every step explained in simple words.",

  },



  {

    icon: Route,

    title: "Step-by-step guides",

    text: "Know what happens next, always.",

  },



  {

    icon: ShieldCheck,

    title: "Verify before you pay",

    text: "Clear safety advice at every stage.",

  },



  {

    icon: MessageCircle,

    title: "Talk to a person",

    text: "Call, WhatsApp or visit our office.",

  },

];





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

   HERO

   IMPORTANT:

   No header/navbar here.

   Your layout already provides it.

========================================================= */



function HeroSection() {
  const slides = [
    {
      number: "01",
      label: "CAREERS • WORK ABROAD",
      kicker: "OVERSEAS OPPORTUNITIES",
      title: (
        <>
          BUILD YOUR
          <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            DREAM ABROAD.
          </span>
        </>
      ),
      text:
        "We connect you with verified overseas job opportunities and guide you through the journey from your first application to the day you are ready to travel.",
      button: "Find Opportunities",
      href: "/work-abroad",
      image: "/images/hospitality.png",
      imageAlt: "Kenkos overseas work and travel team",
    },
    {
      number: "02",
      label: "VISA • APPLICATION SUPPORT",
      kicker: "VISA APPLICATION ASSISTANCE",
      title: (
        <>
          GET
          <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            VISA READY.
          </span>
        </>
      ),
      text:
        "We assist you with your visa application process, helping you understand the documents, requirements and next steps before you submit.",
      button: "Get Visa Assistance",
      href: "/services/travel",
      image: "/images/brand-poster.jpg",
      imageAlt: "Kenkos visa and travel assistance",
    },
    {
      number: "03",
      label: "TRAVEL • RELOCATION",
      kicker: "TRAVEL & RELOCATION",
      title: (
        <>
          BUILD YOUR
          <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            FUTURE ABROAD.
          </span>
        </>
      ),
      text:
        "From flights and travel planning to relocation preparation, we help you understand what to arrange before leaving Kenya.",
      button: "Plan My Travel",
      href: "/services/travel",
      image: "/images/driving.png",
      imageAlt: "Kenkos travel and relocation support",
    },
    {
      number: "04",
      label: "LOGISTICS • MOVING",
      kicker: "LOGISTICS SUPPORT",
      title: (
        <>
          MOVING
          <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            SOMETHING?
          </span>
        </>
      ),
      text:
        "Need to move goods, coordinate transport or organise logistics? Tell us what needs to move and we will help you plan the next step.",
      button: "Explore Logistics",
      href: "/services/logistics",
      image: "/images/logistics.png",
      imageAlt: "Kenkos logistics support",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const current = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  return (
    <section className="relative overflow-hidden bg-[#050916] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="container-x relative z-10 py-4 sm:py-6 lg:py-8">
        <div
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#050916] shadow-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {/* Background image for the active slide */}
          <div
            key={`background-${current.number}`}
            className="absolute inset-0 animate-[heroImage_900ms_ease-out]"
          >
            <Image
              src={current.image}
              alt=""
              fill
              priority={activeSlide === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050916]/95 via-[#050916]/75 to-[#050916]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050916]/95 via-[#050916]/15 to-[#050916]/10" />
          </div>

          {/* Top identity bar */}
          <div className="relative z-20 flex items-center justify-between px-5 pt-5 sm:px-8 sm:pt-7 lg:px-10">
            <div className="inline-flex max-w-[88%] items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2.5 backdrop-blur-xl">
              <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white sm:text-[10px]">
                KENKOS
              </span>
              <span className="text-white/30">•</span>
              <span className="truncate text-[9px] uppercase tracking-[0.14em] text-white/75 sm:text-[10px] sm:tracking-[0.18em]">
                TRAVEL • CAREERS • LOGISTICS
              </span>
            </div>

            <div className="hidden items-center gap-2 text-white/70 sm:flex">
              <span className="text-xs font-semibold tracking-[0.2em]">
                {current.number}
              </span>
              <span className="h-px w-8 bg-white/30" />
              <span className="text-xs tracking-[0.2em]">04</span>
            </div>
          </div>

          {/* Main combined layout: information + image */}
          <div className="relative z-10 grid min-h-[680px] items-end lg:min-h-[720px] lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            {/* Information */}
            <div className="relative z-20 px-5 pb-7 pt-20 sm:px-8 sm:pb-9 lg:px-12 lg:py-16 xl:px-16">
              <div
                key={`content-${current.number}`}
                className="max-w-3xl animate-[heroContent_700ms_ease-out]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-px w-12 bg-cyan-400" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    {current.kicker}
                  </span>
                </div>

                <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-xl">
                  {current.label}
                </div>

                <h1 className="font-display text-[3.25rem] font-medium uppercase leading-[0.86] tracking-[-0.055em] text-white sm:text-[4.7rem] md:text-[5.6rem] lg:text-[5.8rem] xl:text-[6.4rem]">
                  {current.title}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
                  {current.text}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    href={current.href}
                    className="group inline-flex items-center gap-3 rounded-full bg-cyan-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/30 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400"
                  >
                    {current.button}
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-slate-950 transition duration-300 group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-full border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-slate-950"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Visual side: main image + all-image navigation */}
            <div className="relative z-20 px-5 pb-6 sm:px-8 sm:pb-8 lg:px-6 lg:pb-12 lg:pt-24 xl:px-10">
              <div className="relative mx-auto max-w-[620px]">
                {/* Decorative frame */}
                <div className="absolute -inset-3 rounded-[34px] border border-white/15 bg-white/5 backdrop-blur-sm" />

                {/* Main image */}
                <div
                  key={`visual-${current.number}`}
                  className="relative aspect-[1.12] overflow-hidden rounded-[30px] border border-white/15 shadow-2xl animate-[heroImage_900ms_ease-out]"
                >
                  <Image
                    src={current.image}
                    alt={current.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 48vw, 92vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                        YOUR JOURNEY STARTS HERE
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                        Work • Travel • Relocate • Move
                      </p>
                    </div>

                    <div className="hidden rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/80 backdrop-blur-xl sm:block">
                      {current.number} / 04
                    </div>
                  </div>
                </div>

                {/* All four images remain visible as a visual rail */}
                <div className="mt-4 grid grid-cols-4 gap-2.5">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.number}
                      type="button"
                      aria-label={`Show ${slide.kicker}`}
                      aria-current={activeSlide === index ? "true" : undefined}
                      onClick={() => setActiveSlide(index)}
                      className={`group relative aspect-[1.25] overflow-hidden rounded-2xl border transition duration-300 ${
                        activeSlide === index
                          ? "border-cyan-400 ring-2 ring-cyan-400/30"
                          : "border-white/15 opacity-75 hover:border-white/40 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt=""
                        fill
                        sizes="140px"
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/5" />
                      <span className="absolute bottom-1.5 left-1.5 rounded-full bg-black/50 px-2 py-1 text-[8px] font-semibold text-white backdrop-blur">
                        {slide.number}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom controls */}
          <div className="relative z-30 mx-5 flex items-center justify-between border-t border-white/15 py-4 sm:mx-8 lg:mx-12">
            <div className="flex items-center gap-1">
              {slides.map((slide, index) => (
                <button
                  key={slide.number}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={activeSlide === index ? "true" : undefined}
                  onClick={() => setActiveSlide(index)}
                  className="group px-1.5 py-2"
                >
                  <span
                    className={`block h-1 rounded-full transition-all duration-500 ${
                      activeSlide === index
                        ? "w-12 bg-cyan-400"
                        : "w-5 bg-white/30 group-hover:bg-white/60"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-950 transition duration-300 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroContent {
          0% {
            opacity: 0;
            transform: translate3d(45px, 0, 0) scale(0.985);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @keyframes heroImage {
          0% {
            opacity: 0;
            transform: scale(1.055);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.animate-\[heroContent_700ms_ease-out\]),
          :global(.animate-\[heroImage_900ms_ease-out\]) {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}


function ContactStrip() {

  return (

    <section className="relative z-30 -mt-8 pb-8">



      <div className="container-x">



        <div

          className="

            grid

            overflow-hidden

            rounded-[28px]

            border

            border-slate-100

            bg-white

            p-2

            shadow-[0_25px_70px_rgba(15,23,42,0.14)]

            sm:grid-cols-2

            lg:grid-cols-5

          "

        >



          {/* Phone */}



          <a

            href={contact.phoneHref}

            className="

              group

              flex

              items-center

              gap-3

              rounded-2xl

              px-4

              py-4

              transition

              hover:bg-cyan-50

            "

          >



            <span

              className="

                grid

                h-11

                w-11

                shrink-0

                place-items-center

                rounded-full

                bg-cyan-50

                text-cyan-600

                transition

                group-hover:bg-cyan-600

                group-hover:text-white

              "

            >

              <Phone className="h-5 w-5" />

            </span>



            <span>



              <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">

                Call us

              </span>



              <span className="block text-sm font-semibold text-slate-900">

                {contact.phone}

              </span>



            </span>



          </a>





          {/* WhatsApp */}



          <a

            href={whatsappLink()}

            target="_blank"

            rel="noopener noreferrer"

            className="

              group

              flex

              items-center

              gap-3

              rounded-2xl

              px-4

              py-4

              transition

              hover:bg-cyan-50

            "

          >



            <span

              className="

                grid

                h-11

                w-11

                shrink-0

                place-items-center

                rounded-full

                bg-cyan-50

                text-cyan-600

                transition

                group-hover:bg-cyan-600

                group-hover:text-white

              "

            >

              <MessageCircle className="h-5 w-5" />

            </span>



            <span>



              <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">

                WhatsApp

              </span>



              <span className="block text-sm font-semibold text-slate-900">

                Chat with our team

              </span>



            </span>



          </a>





          {/* Email */}



          <a

            href={contact.emailHref}

            className="

              group

              flex

              items-center

              gap-3

              rounded-2xl

              px-4

              py-4

              transition

              hover:bg-cyan-50

            "

          >



            <span

              className="

                grid

                h-11

                w-11

                shrink-0

                place-items-center

                rounded-full

                bg-cyan-50

                text-cyan-600

                transition

                group-hover:bg-cyan-600

                group-hover:text-white

              "

            >

              <Mail className="h-5 w-5" />

            </span>



            <span>



              <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">

                Email

              </span>



              <span className="block text-sm font-semibold text-slate-900">

                Send a message

              </span>



            </span>



          </a>





          {/* Office */}



          <Link

            href="/contact#office"

            className="

              group

              flex

              items-center

              gap-3

              rounded-2xl

              px-4

              py-4

              transition

              hover:bg-cyan-50

            "

          >



            <span

              className="

                grid

                h-11

                w-11

                shrink-0

                place-items-center

                rounded-full

                bg-cyan-50

                text-cyan-600

                transition

                group-hover:bg-cyan-600

                group-hover:text-white

              "

            >

              <MapPin className="h-5 w-5" />

            </span>



            <span>



              <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">

                Office

              </span>



              <span className="block text-sm font-semibold text-slate-900">

                Nairobi, Kenya

              </span>



            </span>



          </Link>





          {/* CTA */}



          <Link

            href="/contact"

            className="

              m-1

              flex

              items-center

              justify-center

              rounded-2xl

              bg-[#172033]

              px-7

              py-4

              text-sm

              font-semibold

              text-white

              transition

              hover:bg-cyan-600

            "

          >

            Talk To Us

          </Link>



        </div>



      </div>



    </section>

  );

}





/* =========================================================

   FEATURES

========================================================= */



function FeaturesSection() {

  return (

    <section className="bg-white py-14 sm:py-20">



      <div className="container-x">



        <div

          className="

            grid

            overflow-hidden

            rounded-[32px]

            border

            border-slate-100

            bg-slate-50

            sm:grid-cols-2

            lg:grid-cols-4

          "

        >



          {features.map((feature, index) => {



            const FeatureIcon = feature.icon;



            return (

              <div

                key={feature.title}

                className={`

                  flex

                  gap-4

                  p-6

                  sm:p-7

                  ${

                    index !== features.length - 1

                      ? "border-slate-200 lg:border-r"

                      : ""

                  }

                `}

              >



                <div

                  className="

                    grid

                    h-12

                    w-12

                    shrink-0

                    place-items-center

                    rounded-2xl

                    bg-white

                    text-cyan-600

                    shadow-sm

                  "

                >

                  <FeatureIcon className="h-6 w-6" />

                </div>



                <div>



                  <h3 className="text-base font-semibold text-slate-950">

                    {feature.title}

                  </h3>



                  <p className="mt-1 text-sm leading-6 text-slate-500">

                    {feature.text}

                  </p>



                </div>



              </div>

            );

          })}



        </div>



      </div>



    </section>

  );

}





/* =========================================================

   MAIN CHOICES

========================================================= */



function HelpSection() {

  return (

    <section

      className="bg-[#f5fbfd] py-20 sm:py-28"

      aria-labelledby="help-heading"

    >



      <div className="container-x">



        <div className="max-w-2xl">



          <span

            className="

              text-xs

              font-semibold

              uppercase

              tracking-[0.25em]

              text-cyan-600

            "

          >

            Explore Kenkos

          </span>



          <h2

            id="help-heading"

            className="

              mt-3

              font-display

              text-4xl

              font-medium

              tracking-[-0.04em]

              text-slate-950

              sm:text-6xl

            "

          >

            Where are you



            <span className="block text-cyan-600">

              headed?

            </span>



          </h2>



          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">

            Choose what you need and we will show you what happens next.

          </p>



        </div>





        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">



          {helpCards.map((card, index) => (



            <Link

              key={card.title}

              href={card.href}

              className={`

                group

                relative

                overflow-hidden

                rounded-[30px]

                bg-slate-900

                shadow-[0_20px_50px_rgba(15,23,42,0.12)]

                ${

                  index === 1

                    ? "lg:translate-y-10"

                    : ""

                }

                ${

                  index === 3

                    ? "lg:translate-y-5"

                    : ""

                }

              `}

            >



              <div className="relative aspect-[0.78]">



                <Image

                  src={card.img}

                  alt=""

                  fill

                  sizes="

                    (min-width:1024px) 280px,

                    (min-width:640px) 45vw,

                    90vw

                  "

                  className="

                    object-cover

                    transition

                    duration-700

                    group-hover:scale-110

                  "

                  style={{

                    objectPosition: card.position,

                  }}

                />





                <div

                  className="

                    absolute

                    inset-0

                    bg-gradient-to-t

                    from-slate-950

                    via-slate-950/30

                    to-transparent

                  "

                />





                <div

                  className="

                    absolute

                    left-5

                    top-5

                    rounded-full

                    bg-white/90

                    px-3

                    py-1.5

                    text-[9px]

                    font-semibold

                    tracking-[0.16em]

                    text-slate-900

                    backdrop-blur

                  "

                >

                  {card.eyebrow}

                </div>





                <div className="absolute inset-x-0 bottom-0 p-6 text-white">



                  <h3 className="text-2xl font-semibold">

                    {card.title}

                  </h3>



                  <p className="mt-2 text-sm leading-6 text-white/80">

                    {card.text}

                  </p>



                  <span

                    className="

                      mt-5

                      inline-flex

                      items-center

                      gap-3

                      rounded-full

                      bg-white

                      py-1

                      pl-4

                      pr-1

                      text-xs

                      font-semibold

                      text-slate-950

                    "

                  >



                    {card.button}



                    <span

                      className="

                        grid

                        h-8

                        w-8

                        place-items-center

                        rounded-full

                        bg-cyan-600

                        text-white

                      "

                    >

                      <ArrowRight className="h-4 w-4" />

                    </span>



                  </span>



                </div>



              </div>



            </Link>



          ))}



        </div>



      </div>



    </section>

  );

}





/* =========================================================

   BIG STATEMENT

========================================================= */



function TravelStatement() {

  return (

    <section

      className="

        relative

        overflow-hidden

        bg-[#172033]

        py-24

        text-white

        sm:py-32

      "

    >



      {/* UNIQUE IMAGE - not office.jpg again */}



      <Image

        src="/images/uae.png"

        alt=""

        fill

        sizes="100vw"

        className="object-cover opacity-25"

      />



      <div

        className="

          absolute

          inset-0

          bg-gradient-to-r

          from-[#172033]

          via-[#172033]/90

          to-cyan-950/60

        "

      />





      <div className="container-x relative z-10">



        <div className="max-w-4xl">



          <div

            className="

              inline-flex

              items-center

              gap-3

              rounded-full

              border

              border-white/20

              bg-white/10

              px-4

              py-2

              text-xs

              font-semibold

              backdrop-blur

            "

          >



            <span

              className="

                grid

                h-6

                w-6

                place-items-center

                rounded-full

                bg-cyan-500

              "

            >

              <Plane className="h-3.5 w-3.5" />

            </span>



            YOUR NEXT CHAPTER STARTS WITH ONE STEP



          </div>





          <h2

            className="

              mt-7

              font-display

              text-5xl

              font-medium

              uppercase

              leading-[0.9]

              tracking-[-0.05em]

              sm:text-7xl

              lg:text-[6.5rem]

            "

          >



            Go Further.



            <span className="block text-cyan-400">

              Go With Kenkos.

            </span>



          </h2>





          <p

            className="

              mt-7

              max-w-2xl

              text-lg

              leading-8

              text-white/75

              sm:text-xl

            "

          >

            You do not need to know everything before contacting us.

            Tell us what you want to do and our team will guide you

            through the next step.

          </p>





          <div className="mt-9 flex flex-wrap gap-3">



            <Link

              href="/work-abroad"

              className="

                rounded-full

                bg-white

                px-6

                py-3.5

                text-sm

                font-semibold

                text-slate-950

                transition

                hover:bg-cyan-400

              "

            >

              I Want a Job Abroad

            </Link>



            <Link

              href="/services/travel"

              className="

                rounded-full

                border

                border-white/30

                bg-white/10

                px-6

                py-3.5

                text-sm

                font-semibold

                text-white

                backdrop-blur

                transition

                hover:bg-white

                hover:text-slate-950

              "

            >

              I Want to Travel

            </Link>



            <a

              href={whatsappLink(

                "Hello Kenkos, I need help. I am not sure where to start."

              )}

              target="_blank"

              rel="noopener noreferrer"

              className="

                rounded-full

                bg-cyan-500

                px-6

                py-3.5

                text-sm

                font-semibold

                text-white

                transition

                hover:bg-cyan-400

              "

            >

              I Need Help

            </a>



          </div>



        </div>



      </div>



    </section>

  );

}





/* =========================================================

   WORK ABROAD

========================================================= */



function WorkAbroadSection() {

  return (

    <section

      className="bg-white py-20 sm:py-28"

      aria-labelledby="work-heading"

    >



      <div className="container-x">



        <div

          className="

            grid

            items-center

            gap-12

            lg:grid-cols-[1fr_0.9fr]

          "

        >



          <div>



            <span

              className="

                text-xs

                font-semibold

                uppercase

                tracking-[0.25em]

                text-cyan-600

              "

            >

              International Opportunities

            </span>





            <h2

              id="work-heading"

              className="

                mt-4

                max-w-xl

                font-display

                text-4xl

                font-medium

                uppercase

                leading-[0.95]

                tracking-[-0.045em]

                text-slate-950

                sm:text-6xl

              "

            >



              Work abroad



              <span className="block text-cyan-600">

                with clarity.

              </span>



            </h2>





            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">

              Looking for a job abroad can be confusing. We make the

              process easier to understand.

            </p>





            <div className="mt-8 grid gap-3 sm:grid-cols-2">



              <Checklist items={explore.slice(0, 5)} />



              <Checklist items={explore.slice(5)} />



            </div>





            <div className="mt-9">



              <LinkButton

                href="/how-it-works"

                className="rounded-full"

              >

                See How Working Abroad Works

              </LinkButton>



            </div>



          </div>





          <div className="relative mx-auto w-full max-w-[520px]">



            <div

              className="

                absolute

                -inset-5

                rounded-[45%]

                bg-cyan-100

                blur-2xl

              "

            />





            <div

              className="

                relative

                aspect-[0.9]

                overflow-hidden

                rounded-[48%_52%_48%_52%/45%_45%_55%_55%]

                border-[8px]

                border-white

                shadow-[0_30px_70px_rgba(15,23,42,0.18)]

              "

            >



              {/* UNIQUE IMAGE */}



              <Image

                src="/images/caregiver.png"

                alt="Care worker helping an older man"

                fill

                className="object-cover"

                sizes="520px"

              />



            </div>





            <div

              className="

                absolute

                bottom-6

                left-[-10px]

                rounded-2xl

                bg-white

                px-5

                py-4

                shadow-xl

              "

            >



              <p

                className="

                  text-[9px]

                  font-semibold

                  uppercase

                  tracking-[0.2em]

                  text-cyan-600

                "

              >

                Step by step

              </p>



              <p className="mt-1 text-sm font-semibold text-slate-950">

                From application to travel

              </p>



            </div>



          </div>



        </div>



      </div>



    </section>

  );

}





/* =========================================================

   JOURNEY

========================================================= */



function JourneySection() {

  return (

    <section

      className="bg-[#f5fbfd] py-20 sm:py-28"

      aria-labelledby="journey-heading"

    >



      <div className="container-x">



        <div

          className="

            flex

            flex-wrap

            items-end

            justify-between

            gap-6

          "

        >



          <div>



            <span

              className="

                text-xs

                font-semibold

                uppercase

                tracking-[0.25em]

                text-cyan-600

              "

            >

              The Process

            </span>





            <h2

              id="journey-heading"

              className="

                mt-3

                font-display

                text-4xl

                font-medium

                tracking-[-0.04em]

                text-slate-950

                sm:text-6xl

              "

            >



              Your journey



              <span className="block text-cyan-600">

                in four steps.

              </span>



            </h2>





            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">

              From your first message to your first day abroad.

            </p>



          </div>





          <LinkButton

            href="/how-it-works"

            variant="outline"

          >

            See all 10 steps

          </LinkButton>



        </div>





        <div

          className="

            mt-12

            rounded-[32px]

            border

            border-white

            bg-white

            p-5

            shadow-sm

            sm:p-8

          "

        >

          <StairSteps />

        </div>



      </div>



    </section>

  );

}





/* =========================================================

   JOBS

========================================================= */



function JobsSection() {

  return (

    <section

      className="bg-white py-20 sm:py-28"

      aria-labelledby="jobs-heading"

    >



      <div className="container-x">



        <div

          className="

            flex

            flex-wrap

            items-end

            justify-between

            gap-6

          "

        >



          <div>



            <span

              className="

                text-xs

                font-semibold

                uppercase

                tracking-[0.25em]

                text-cyan-600

              "

            >

              Opportunities

            </span>





            <h2

              id="jobs-heading"

              className="

                mt-3

                font-display

                text-4xl

                font-medium

                tracking-[-0.04em]

                text-slate-950

                sm:text-6xl

              "

            >



              What job are



              <span className="block text-cyan-600">

                you looking for?

              </span>



            </h2>





            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">

              Tap a job to read what it means, what you may need and

              how the process works. {availabilityNote}

            </p>



          </div>



        </div>





        <div

          className="

            mt-12

            grid

            grid-cols-2

            gap-4

            sm:grid-cols-3

            lg:grid-cols-5

          "

        >



          {jobs.map((job) => (

            <JobCard

              key={job.slug}

              job={job}

            />

          ))}



        </div>



      </div>



    </section>

  );

}





/* =========================================================

   COUNTRIES

========================================================= */



function CountriesSection() {

  return (

    <section

      className="bg-[#f5fbfd] py-20 sm:py-28"

      aria-labelledby="countries-heading"

    >



      <div className="container-x">



        <div

          className="

            flex

            flex-wrap

            items-end

            justify-between

            gap-6

          "

        >



          <div>



            <span

              className="

                text-xs

                font-semibold

                uppercase

                tracking-[0.25em]

                text-cyan-600

              "

            >

              Destinations

            </span>





            <h2

              id="countries-heading"

              className="

                mt-3

                font-display

                text-4xl

                font-medium

                tracking-[-0.04em]

                text-slate-950

                sm:text-6xl

              "

            >



              Where can



              <span className="text-cyan-600">

                {" "}you go?

              </span>



            </h2>





            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">

              Choose a country to see how working and travelling

              there usually works.

            </p>



          </div>





          <LinkButton

            href="/countries"

            variant="outline"

          >

            View all countries

          </LinkButton>



        </div>





        <div

          className="

            mt-12

            grid

            grid-cols-2

            gap-4

            sm:grid-cols-3

            lg:grid-cols-4

          "

        >



          {countries.map((country) => (

            <CountryCard

              key={country.slug}

              country={country}

            />

          ))}





          <Link

            href="/countries#other"

            className="

              group

              flex

              aspect-[3/4]

              flex-col

              justify-end

              rounded-[28px]

              border-2

              border-dashed

              border-cyan-200

              bg-white

              p-5

              transition

              hover:border-cyan-500

              hover:bg-cyan-50

            "

          >



            <Globe2 className="h-10 w-10 text-cyan-600" />



            <h3 className="mt-4 text-xl font-semibold text-slate-950">

              Other destinations

            </h3>



            <p className="mt-2 text-sm leading-6 text-slate-500">

              Where approved opportunities or services are available.

            </p>



            <span

              className="

                mt-5

                grid

                h-10

                w-10

                place-items-center

                rounded-full

                bg-slate-950

                text-white

                transition

                group-hover:bg-cyan-600

              "

            >

              <ArrowRight className="h-4 w-4" />

            </span>



          </Link>



        </div>



      </div>



    </section>

  );

}





/* =========================================================

   SERVICES

========================================================= */



function ServicesSection() {

  return (

    <section

      className="bg-white py-20 sm:py-28"

      aria-labelledby="services-heading"

    >



      <div className="container-x">



        <div className="text-center">



          <span

            className="

              text-xs

              font-semibold

              uppercase

              tracking-[0.25em]

              text-cyan-600

            "

          >

            One Team

          </span>





          <h2

            id="services-heading"

            className="

              mt-3

              font-display

              text-4xl

              font-medium

              tracking-[-0.04em]

              text-slate-950

              sm:text-6xl

            "

          >



            Everything



            <span className="text-cyan-600">

              {" "}in one place.

            </span>



          </h2>





          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">

            Jobs, travel, visas, flights, relocation and logistics,

            explained by one team.

          </p>



        </div>





        <div

          className="

            mt-12

            rounded-[36px]

            bg-[#f5fbfd]

            p-5

            sm:p-10

          "

        >

          <ServiceRing />

        </div>



      </div>



    </section>

  );

}





/* =========================================================

   GUIDES

========================================================= */



function GuidesSection() {

  return (

    <section

      className="bg-[#f5fbfd] py-20 sm:py-28"

      aria-labelledby="guides-heading"

    >



      <div className="container-x">



        <div>



          <span

            className="

              text-xs

              font-semibold

              uppercase

              tracking-[0.25em]

              text-cyan-600

            "

          >

            Helpful Information

          </span>





          <h2

            id="guides-heading"

            className="

              mt-3

              font-display

              text-4xl

              font-medium

              tracking-[-0.04em]

              text-slate-950

              sm:text-6xl

            "

          >



            First time?



            <span className="block text-cyan-600">

              Start here.

            </span>



          </h2>





          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">

            Short, visual guides for the parts people worry about most.

          </p>



        </div>





        <div className="mt-12 grid gap-5 md:grid-cols-2">



          {["medical", "visa", "airport", "passport"].map((slug) => {



            const guide = guides.find(

              (item) => item.slug === slug

            );



            if (!guide) return null;



            return (

              <GuideCard

                key={slug}

                guide={guide}

              />

            );

          })}



        </div>



      </div>



    </section>

  );

}





/* =========================================================

   SAFETY

========================================================= */



function SafetySection() {

  return (

    <section

      className="bg-white py-20 sm:py-28"

      aria-labelledby="safety-heading"

    >



      <div className="container-x">



        <div

          className="

            relative

            overflow-hidden

            rounded-[36px]

            bg-[#172033]

            px-7

            py-12

            text-white

            sm:px-12

            sm:py-16

          "

        >



          <div

            className="

              absolute

              -right-24

              -top-24

              h-[400px]

              w-[400px]

              rounded-full

              border

              border-cyan-400/20

            "

          />



          <div

            className="

              absolute

              -right-10

              -top-10

              h-[260px]

              w-[260px]

              rounded-full

              border

              border-cyan-400/20

            "

          />





          <Plane

            className="

              absolute

              right-10

              top-10

              hidden

              h-20

              w-20

              rotate-[-15deg]

              text-cyan-400/60

              md:block

            "

          />





          <div className="relative z-10 max-w-2xl">



            <span

              className="

                inline-flex

                rounded-full

                bg-cyan-500/10

                px-4

                py-2

                text-xs

                font-semibold

                uppercase

                tracking-[0.2em]

                text-cyan-300

              "

            >

              Important

            </span>





            <h2

              id="safety-heading"

              className="

                mt-5

                font-display

                text-4xl

                font-medium

                tracking-[-0.04em]

                text-white

                sm:text-5xl

              "

            >



              Verify before



              <span className="block text-cyan-400">

                you pay.

              </span>



            </h2>





            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">

              Never send money to a random personal number because

              someone claims to represent Kenkos. Check with our

              official number first.

            </p>





            <div className="mt-8">



              <Link

                href="/safety"

                className="

                  inline-flex

                  rounded-full

                  bg-white

                  px-6

                  py-3.5

                  text-sm

                  font-semibold

                  text-slate-950

                  transition

                  hover:bg-cyan-400

                "

              >

                Read How To Stay Safe

              </Link>



            </div>



          </div>



        </div>



      </div>



    </section>

  );

}





/* =========================================================

   FAQ

========================================================= */



function FAQSection() {

  return (

    <section

      className="bg-[#f5fbfd] py-20 sm:py-28"

      aria-labelledby="faq-heading"

    >



      <div className="container-x">



        <div className="max-w-2xl">



          <span

            className="

              text-xs

              font-semibold

              uppercase

              tracking-[0.25em]

              text-cyan-600

            "

          >

            FAQ

          </span>





          <h2

            id="faq-heading"

            className="

              mt-3

              font-display

              text-4xl

              font-medium

              tracking-[-0.04em]

              text-slate-950

              sm:text-6xl

            "

          >



            Questions people



            <span className="block text-cyan-600">

              ask us.

            </span>



          </h2>



        </div>





        <div

          className="

            mt-10

            rounded-[30px]

            bg-white

            p-5

            shadow-sm

            sm:p-8

          "

        >



          <FAQAccordion

            items={faqs.slice(0, 6)}

          />



        </div>





        <div className="mt-8">



          <LinkButton

            href="/faq"

            variant="outline"

          >

            See all questions

          </LinkButton>



        </div>



      </div>



    </section>

  );

}





/* =========================================================

   HOMEPAGE

========================================================= */



export default function Home() {

  return (

    <>



      {/* ================================================

          HERO



          Navbar already exists in layout.tsx.

      ================================================= */}



      <HeroSection />





      {/* ================================================

          CONTACT

      ================================================= */}



      <ContactStrip />





      {/* ================================================

          TRUST

      ================================================= */}



      <FeaturesSection />





      {/* ================================================

          MAIN OPTIONS

      ================================================= */}



      <HelpSection />





      {/* ================================================

          BIG BRAND STATEMENT

      ================================================= */}



      <TravelStatement />





      {/* ================================================

          WORK ABROAD

      ================================================= */}



      <WorkAbroadSection />





      {/* ================================================

          JOURNEY

      ================================================= */}



      <JourneySection />





      {/* ================================================

          JOBS

      ================================================= */}



      <JobsSection />





      {/* ================================================

          COUNTRIES

      ================================================= */}



      <CountriesSection />





      {/* ================================================

          SERVICES

      ================================================= */}



      <ServicesSection />





      {/* ================================================

          GUIDES

      ================================================= */}



      <GuidesSection />





      {/* ================================================

          SAFETY

      ================================================= */}



      <SafetySection />





      {/* ================================================

          FAQ

      ================================================= */}



      <FAQSection />





      {/* -------================================================

          EXISTING NEXT-STEP COMPONENT

      ================================================= */}



      <WhatNext />



    </>

  );

}