import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";

import "./globals.css";

import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageTransition } from "@/components/PageTransition";

import { contact, siteUrl } from "@/lib/contact";


/* =========================================================
   FONTS
========================================================= */

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});


/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Kenkos Recruitment & Logistics Centre | Travel, Jobs & Logistics in Kenya",
    template: "%s | Kenkos",
  },

  description:
    "Kenkos helps people and businesses in Kenya with overseas opportunities, travel, visa guidance, flights, relocation and logistics support.",

  applicationName: "Kenkos Recruitment & Logistics Centre",

  keywords: [
    "Kenkos",
    "Kenkos Recruitment",
    "jobs abroad Kenya",
    "overseas jobs Kenya",
    "travel Kenya",
    "visa support Kenya",
    "logistics Kenya",
    "recruitment Kenya",
  ],

  authors: [
    {
      name: "Kenkos Recruitment & Logistics Centre",
    },
  ],

  creator: "Kenkos Recruitment & Logistics Centre",

  publisher: "Kenkos Recruitment & Logistics Centre",

  openGraph: {
    siteName: "Kenkos Recruitment & Logistics Centre",
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    title:
      "Kenkos Recruitment & Logistics Centre | Travel, Jobs & Logistics in Kenya",
    description:
      "Overseas opportunities, travel, visa guidance, flights, relocation and logistics support.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kenkos Recruitment & Logistics Centre | Travel, Jobs & Logistics in Kenya",
    description:
      "Overseas opportunities, travel, visa guidance, flights, relocation and logistics support.",
  },

  robots: {
    index: true,
    follow: true,
  },
};


/* =========================================================
   VIEWPORT
========================================================= */

export const viewport: Viewport = {
  themeColor: "#172033",
  width: "device-width",
  initialScale: 1,
};


/* =========================================================
   STRUCTURED DATA
========================================================= */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",

  name: contact.company,

  url: siteUrl,

  telephone: contact.phone,

  email: contact.email,

  address: {
    "@type": "PostalAddress",
    streetAddress: "Rattansi Educational Trust Building",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },

  sameAs: contact.socials.map((social) => social.href),
};


/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
    >
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased transition-colors duration-300 dark:bg-[#0b0f17] dark:text-white/90">

        {/* Accessibility */}
        <a
          href="#main"
          className="
            sr-only
            focus:not-sr-only
            focus:fixed
            focus:left-3
            focus:top-3
            focus:z-[100]
            focus:rounded-full
            focus:bg-white
            focus:px-4
            focus:py-2
            focus:text-sm
            focus:font-semibold
            focus:text-slate-950
            focus:shadow-lg
          "
        >
          Skip to content
        </a>


        {/* =================================================
            APP SHELL

            Navbar renders the fixed, floating sidebar rail on
            desktop (md+) plus its own top bar / bottom tab bar
            on mobile. Everything else lives in a content column
            that reserves space for the collapsed rail so nothing
            is ever hidden underneath it.
        ================================================= */}

        <Navbar />

        <div className="md:pl-[100px]">

          <AnnouncementBar />

          {/* =================================================
              PAGE CONTENT

              Individual pages render here. PageTransition fades
              each route in on navigation, and the bottom padding
              keeps content clear of the mobile tab bar.
          ================================================= */}

          <main id="main" className="pb-24 md:pb-0">
            <PageTransition>{children}</PageTransition>
          </main>


          {/* =================================================
              GLOBAL FOOTER
          ================================================= */}

          <Footer />

        </div>

        <WhatsAppButton />


        {/* =================================================
            STRUCTURED DATA
        ================================================= */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

      </body>
    </html>
  );
}