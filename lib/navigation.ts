export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work Abroad", href: "/work-abroad" },
  { label: "Countries", href: "/countries" },
  { label: "Travel", href: "/services/travel" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/* =========================================================
   APP-SHELL SIDEBAR NAVIGATION

   Used by components/Navbar.tsx. Split into three groups to
   match the Menu / Settings / Group pattern of an app rail:

   - primaryNav: main destinations, shown with icon + label +
     an optional live count badge (e.g. open jobs, countries).
   - utilityNav: lighter-weight "settings"-style links.
   - quickLinks: the four colour-tagged shortcuts shown in the
     "Group" section, each routed straight to a service.
========================================================= */

export type NavBadge = "jobs" | "countries" | null;

export const primaryNav: { label: string; href: string; icon: string; badge?: NavBadge }[] = [
  { label: "Home", href: "/", icon: "Home" },
  { label: "Work Abroad", href: "/work-abroad", icon: "Briefcase" },
  { label: "Jobs", href: "/jobs", icon: "Handshake", badge: "jobs" },
  { label: "Countries", href: "/countries", icon: "Globe", badge: "countries" },
  { label: "Services", href: "/services", icon: "Route" },
  { label: "How It Works", href: "/how-it-works", icon: "MapPin" },
];

export const utilityNav: { label: string; href: string; icon: string }[] = [
  { label: "Guides", href: "/guides", icon: "BookOpen" },
  { label: "FAQ", href: "/faq", icon: "Info" },
  { label: "Contact", href: "/contact", icon: "Mail" },
];

export const quickLinks: { label: string; href: string; icon: string; tint: string }[] = [
  { label: "Work Abroad", href: "/work-abroad", icon: "Briefcase", tint: "bg-emerald-500/15 text-emerald-400" },
  { label: "Travel & Flights", href: "/services/travel", icon: "Plane", tint: "bg-sky-500/15 text-sky-400" },
  { label: "Visa Support", href: "/services/visa", icon: "Stamp", tint: "bg-amber-500/15 text-amber-400" },
  { label: "Relocation", href: "/services/relocation", icon: "Truck", tint: "bg-rose-500/15 text-rose-400" },
];

/* Mobile bottom tab bar — the 5 destinations people reach for most. */
export const mobileTabs: { label: string; href: string; icon: string }[] = [
  { label: "Home", href: "/", icon: "Home" },
  { label: "Jobs", href: "/jobs", icon: "Handshake" },
  { label: "Countries", href: "/countries", icon: "Globe" },
  { label: "Services", href: "/services", icon: "Route" },
  { label: "Contact", href: "/contact", icon: "Mail" },
];

export const footerGroups = [
  {
    title: "Services",
    links: [
      { label: "Work Abroad", href: "/work-abroad" },
      { label: "Travel", href: "/services/travel" },
      { label: "Visa Support", href: "/services/visa" },
      { label: "Flight Booking", href: "/services/flights" },
      { label: "Relocation", href: "/services/relocation" },
      { label: "Logistics", href: "/services/logistics" },
      { label: "Partnerships", href: "/partnerships" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Medical Guide", href: "/guides/medical" },
      { label: "Visa Guide", href: "/guides/visa" },
      { label: "Passport Guide", href: "/guides/passport" },
      { label: "Airport Guide", href: "/guides/airport" },
      { label: "What Do I Need?", href: "/requirements" },
      { label: "Before You Leave", href: "/pre-departure" },
    ],
  },
  {
    title: "Kenkos",
    links: [
      { label: "About", href: "/about" },
      { label: "Countries", href: "/countries" },
      { label: "Jobs", href: "/jobs" },
      { label: "Fees & Costs", href: "/fees" },
      { label: "Stay Safe", href: "/safety" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
