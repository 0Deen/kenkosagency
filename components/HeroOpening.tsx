"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  FileCheck2,
  Plane,
  PackageCheck,
} from "lucide-react";

const slides = [
  {
    number: "01",
    eyebrow: "CAREERS • WORK ABROAD",
    title: (
      <>
        Your next
        <span> opportunity</span>
        <br />
        could be abroad.
      </>
    ),
    description:
      "We connect you with overseas job opportunities and guide you through the journey from application to travel.",
    button: "Explore Jobs",
    href: "/work-abroad",
    image: "/images/office.jpg",
    icon: BriefcaseBusiness,
    accent: "CAREERS",
  },

  {
    number: "02",
    eyebrow: "VISA • APPLICATION SUPPORT",
    title: (
      <>
        We'll help you
        <span> get ready</span>
        <br />
        for your visa.
      </>
    ),
    description:
      "From documents to the application process, we'll help you understand what you need and what comes next.",
    button: "Get Visa Help",
    href: "/services/travel",
    image: "/images/brand-poster.jpg",
    icon: FileCheck2,
    accent: "VISA SUPPORT",
  },

  {
    number: "03",
    eyebrow: "TRAVEL • RELOCATION",
    title: (
      <>
        Planning to
        <span> travel?</span>
        <br />
        Let's make it easier.
      </>
    ),
    description:
      "Get practical support with travel arrangements, relocation and the important steps before you leave.",
    button: "Plan My Travel",
    href: "/services/travel",
    image: "/images/driving.png",
    icon: Plane,
    accent: "TRAVEL",
  },

  {
    number: "04",
    eyebrow: "LOGISTICS • MOVING",
    title: (
      <>
        Moving something
        <span> across borders?</span>
      </>
    ),
    description:
      "We help coordinate logistics so your goods and journey can move with less stress.",
    button: "Explore Logistics",
    href: "/services/logistics",
    image: "/images/logistics.png",
    icon: PackageCheck,
    accent: "LOGISTICS",
  },
];

export function HeroOpening() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActive((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [paused]);

  const slide = slides[active];
  const Icon = slide.icon;

  return (
    <section
      className="relative overflow-hidden bg-[#050916]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="container-x relative z-10 py-5 sm:py-7 lg:py-8">
        <div className="relative min-h-[620px] overflow-hidden rounded-[34px] border border-white/10 bg-slate-950 shadow-[0_35px_100px_rgba(0,0,0,0.25)] sm:min-h-[680px] lg:min-h-[720px]">
          
          {/* IMAGE */}
          <div className="absolute inset-0">
            <Image
              key={slide.image}
              src={slide.image}
              alt={slide.accent}
              fill
              priority
              sizes="100vw"
              className="object-cover transition-all duration-1000 ease-out"
            />

            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#050916]/95 via-[#050916]/70 to-[#050916]/20" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050916]/90 via-transparent to-[#050916]/10" />
          </div>

          {/* TOP LABEL */}
          <div className="absolute left-6 right-6 top-6 z-20 flex items-center justify-between sm:left-10 sm:right-10 sm:top-10">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white sm:text-[10px]">
                KENKOS
              </span>

              <span className="text-white/40">•</span>

              <span className="text-[9px] uppercase tracking-[0.18em] text-white/70 sm:text-[10px]">
                {slide.accent}
              </span>
            </div>

            {/* SLIDE NUMBER */}
            <div className="hidden items-center gap-2 text-white/60 sm:flex">
              <span className="text-xs font-medium tracking-[0.2em]">
                {slide.number}
              </span>

              <span className="h-px w-8 bg-white/30" />

              <span className="text-xs tracking-[0.2em]">
                04
              </span>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="relative z-10 flex min-h-[620px] items-end sm:min-h-[680px] lg:min-h-[720px]">
            <div className="w-full px-6 pb-8 pt-32 sm:px-10 sm:pb-12 lg:px-16 lg:pb-16">
              
              <div
                key={slide.number}
                className="max-w-4xl animate-[heroIn_700ms_ease-out]"
              >
                {/* ICON + EYEBROW */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/30 bg-cyan-400/10 text-cyan-300 backdrop-blur">
                    <Icon className="h-4 w-4" />
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    {slide.eyebrow}
                  </span>
                </div>

                {/* HEADLINE */}
                <h1 className="max-w-4xl font-display text-[3.3rem] font-medium uppercase leading-[0.88] tracking-[-0.055em] text-white sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem]">
                  {slide.title}
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                  {slide.description}
                </p>

                {/* ACTIONS */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    href={slide.href}
                    className="group inline-flex items-center gap-3 rounded-full bg-cyan-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(6,182,212,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-400"
                  >
                    {slide.button}

                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-slate-950 transition group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-full border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-slate-950"
                  >
                    Talk To Us
                  </Link>
                </div>
              </div>

              {/* BOTTOM CONTROLS */}
              <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-5 sm:mt-12">
                
                {/* PROGRESS */}
                <div className="flex items-center gap-2">
                  {slides.map((item, index) => (
                    <button
                      key={item.number}
                      type="button"
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => setActive(index)}
                      className="group h-8"
                    >
                      <span
                        className={`block h-1 rounded-full transition-all duration-500 ${
                          active === index
                            ? "w-12 bg-cyan-400"
                            : "w-5 bg-white/30 group-hover:bg-white/60"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* ARROWS */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={previousSlide}
                    aria-label="Previous slide"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white hover:text-slate-950"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="grid h-11 w-11 place-items-center rounded-full bg-white text-slate-950 transition hover:bg-cyan-400"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* SIDE DECORATION */}
          <div className="pointer-events-none absolute bottom-20 right-8 hidden lg:block">
            <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
                Your journey starts here
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroIn {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}