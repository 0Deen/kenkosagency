export type Offer = { title: string; text: string; icon: string };
export type Service = {
  slug: string;
  title: string;
  headline: string;
  icon: string;
  image?: string;
  imagePos?: string;
  short: string;
  what: string[];
  why: string[];
  need: string[];
  happens: string[];
  offers: Offer[];
  notice: string;
  nextLabel: string;
  ctaMessage: string;
};

// Edit the "offers" lists below to match exactly what Kenkos provides. Anything removed disappears from the site.
export const services: Service[] = [
  {
    slug: "recruitment", title: "Work Abroad", headline: "Work abroad with clear guidance", icon: "Briefcase", image: "/images/restaurant.jpg", imagePos: "50% 40%",
    short: "Find and understand international employment opportunities.",
    what: ["We help you understand overseas job opportunities, the countries involved and the steps from first chat to travel.", "We are a recruitment and logistics company. We connect people with approved opportunities where available and explain each step."],
    why: ["Looking for a job abroad can be confusing. You may not know what documents you need, what a work permit is or what happens next.", "We explain it in simple words so you can decide with confidence."],
    need: ["Passport", "National ID", "CV where required", "Certificates where relevant", "Any employer or visa documents when asked"],
    happens: ["You talk to us", "We check for suitable opportunities", "We explain the job and requirements", "If you decide to continue, we guide your documents, medical, visa and travel", "You travel and we explain what happens on arrival"],
    offers: [
      { title: "Job and country guidance", text: "Learn about job types and countries before you decide.", icon: "Globe" },
      { title: "Profile review", text: "We look at your skills and documents.", icon: "ClipboardCheck" },
      { title: "Opportunity matching", text: "We check available opportunities against employer requirements.", icon: "Search" },
      { title: "Process support", text: "We explain medical, visa and travel steps in plain words.", icon: "Route" },
    ],
    notice: "A job is not guaranteed because you make an enquiry. Availability depends on current employer demand and approved opportunities.",
    nextLabel: "Talk to Kenkos", ctaMessage: "Hello Kenkos, I would like to know about working abroad.",
  },
  {
    slug: "travel", title: "Travel", headline: "Travel with support you can understand", icon: "Plane", image: "/images/hero-traveler.jpg", imagePos: "20% 50%",
    short: "Flight booking and travel support.",
    what: ["Travel support means we help you plan a trip, understand the papers you need and prepare for the journey."],
    why: ["Travel rules change by country and airline. Getting it wrong can cost money or stop you from flying.", "We explain the steps so you feel ready."],
    need: ["Valid passport", "Visa where the country requires one", "Travel dates and destination", "Any invitation or booking documents"],
    happens: ["Tell us where and when you want to go", "We explain the documents and steps", "We help coordinate your flight options", "We guide you on what to do before and at the airport"],
    offers: [
      { title: "Flight booking", text: "Help coordinating suitable flight options.", icon: "Ticket" },
      { title: "Travel planning", text: "Plan dates, routes and what to prepare.", icon: "Route" },
      { title: "Airport guidance", text: "Know what happens from check-in to boarding.", icon: "PlaneTakeoff" },
      { title: "Hotel or accommodation coordination", text: "Where offered. Ask us what is available for your trip.", icon: "Hotel" },
      { title: "Travel documentation guidance", text: "Understand which papers you need.", icon: "FileText" },
      { title: "Pre-departure support", text: "A checklist for the days before you fly.", icon: "Luggage" },
      { title: "Relocation support", text: "Help if you are moving for work or study.", icon: "MapPin" },
    ],
    notice: "Travel requirements depend on your destination. Always confirm your details with our team.",
    nextLabel: "Travel With Us", ctaMessage: "Hello Kenkos, I would like help with travel.",
  },
  {
    slug: "visa", title: "Visa Support", headline: "Visa guidance in simple words", icon: "Stamp", image: undefined,
    short: "Guidance on documentation and visa procedures.",
    what: ["A visa is official permission to enter or stay in a country for a particular purpose and period, subject to the applicable rules.", "Our visa support means we help you prepare and understand the process."],
    why: ["Mistakes in visa forms and documents can cause delays. Clear preparation helps avoid avoidable problems."],
    need: ["Valid passport", "Passport photographs", "Supporting documents for your purpose (work, study or travel)", "Medical or good conduct documents where required"],
    happens: ["We explain which visa may apply", "We help you prepare the documents", "The application is submitted through the proper channel", "We help you understand any appointment", "The authority decides and we tell you the next step"],
    offers: [
      { title: "Work visa guidance", text: "Understand what a work visa needs.", icon: "Briefcase" },
      { title: "Tourist visa guidance", text: "For short visits and holidays.", icon: "Camera" },
      { title: "Student visa guidance", text: "For people going to study.", icon: "GraduationCap" },
      { title: "Visa renewal guidance", text: "Know when and how to renew.", icon: "Clock" },
      { title: "Documentation guidance", text: "A clear list of documents to prepare.", icon: "FileText" },
      { title: "Appointment assistance", text: "Help understanding and preparing for appointments where required.", icon: "Landmark" },
    ],
    notice: "We assist with preparation and guidance. Final decisions are made by the relevant authorities. We do not control embassy appointments or visa decisions.",
    nextLabel: "Ask About Visas", ctaMessage: "Hello Kenkos, I need visa guidance.",
  },
  {
    slug: "flights", title: "Flight Booking", headline: "Flights, explained", icon: "Ticket",
    short: "Coordinate suitable flight options for work, study, tourism and more.",
    what: ["We help clients coordinate suitable flight options for work, study, tourism, relocation and business travel."],
    why: ["Tickets can be confusing: baggage, transit, dates and names must all be right."],
    need: ["Passport details exactly as written in your passport", "Travel dates and destination", "Visa or approval where required"],
    happens: ["You tell us where you want to go", "We check flight options", "We explain the ticket, baggage and transit", "Once confirmed, we help you understand the itinerary"],
    offers: [
      { title: "One-way flights", text: "For moves and job travel.", icon: "PlaneTakeoff" },
      { title: "Return flights", text: "For trips where you come back.", icon: "PlaneLanding" },
      { title: "Connecting flights", text: "We explain transit and layovers.", icon: "Route" },
      { title: "Baggage information", text: "Know the weight and bags allowed.", icon: "Luggage" },
      { title: "Rescheduling where available", text: "Depends on the airline and ticket type.", icon: "Clock" },
    ],
    notice: "We do not promise the cheapest fare. Prices and rules depend on the airline and the date.",
    nextLabel: "Ask About a Flight", ctaMessage: "Hello Kenkos, I need help with a flight.",
  },
  {
    slug: "relocation", title: "Relocation", headline: "Moving abroad is more than buying a ticket", icon: "MapPin", image: "/images/hero-traveler.jpg", imagePos: "100% 50%",
    short: "Support with documents, flight, airport arrangements and arrival guidance.",
    what: ["Moving abroad means many things must be ready at the same time. We help coordinate the steps."],
    why: ["First-time travellers often do not know what to prepare. Good preparation makes the first days easier."],
    need: ["Job or visa documents", "Passport", "Flight details", "Emergency contacts"],
    happens: ["We review what you already have", "We help you complete what is missing", "We coordinate flight and airport steps", "We explain what to expect on arrival"],
    offers: [
      { title: "Documents", text: "Check your papers are in order.", icon: "FileText" },
      { title: "Flight", text: "Travel details explained.", icon: "Plane" },
      { title: "Airport arrangements", text: "Know what happens at each step.", icon: "PlaneTakeoff" },
      { title: "Accommodation where available", text: "Ask what applies to your job.", icon: "Hotel" },
      { title: "Destination guidance", text: "Learn about local rules and customs.", icon: "Globe" },
      { title: "Arrival support", text: "Understand who meets you and what to do.", icon: "Handshake" },
    ],
    notice: "The exact arrangements depend on the employer, destination and agreed service.",
    nextLabel: "Prepare to Travel", ctaMessage: "Hello Kenkos, I am ready to move and need guidance.",
  },
  {
    slug: "logistics", title: "Logistics", headline: "Move people. Move goods. Move business.", icon: "Truck", image: "/images/warehouse.jpg", imagePos: "50% 55%",
    short: "Transport, cargo, delivery and business logistics coordination.",
    what: ["Logistics means planning how people, goods and materials get from one place to another safely and on time."],
    why: ["Businesses and families sometimes need help coordinating transport, delivery or supply. We help with planning and coordination."],
    need: ["What needs to move", "Where from and where to", "Dates and quantities", "Contact details"],
    happens: ["You tell us what you need moved or coordinated", "We discuss options and explain them", "We confirm what we can arrange", "We coordinate and keep you updated"],
    offers: [
      { title: "Transportation", text: "Moving people or items.", icon: "Truck" },
      { title: "Cargo", text: "Goods moved by road, air or sea where arranged.", icon: "Boxes" },
      { title: "Delivery", text: "Packages and supplies.", icon: "Package" },
      { title: "Relocation", text: "Help with moving households or staff.", icon: "MapPin" },
      { title: "Supply coordination", text: "Planning regular supplies.", icon: "Route" },
      { title: "Procurement support", text: "Help sourcing what a business needs.", icon: "Search" },
      { title: "Business logistics", text: "Practical support for company needs.", icon: "Building2" },
    ],
    notice: "Tell us what you need and we will confirm what we can arrange. We do not list services we do not provide.",
    nextLabel: "Explore Logistics", ctaMessage: "Hello Kenkos, I need logistics support.",
  },
  {
    slug: "partnerships", title: "Partnerships", headline: "Let's work together", icon: "Handshake",
    short: "Work with employers, agencies, institutions and business partners.",
    what: ["We work with employers, recruitment agencies, training institutions, travel partners, logistics companies, international organisations and other businesses."],
    why: ["Good partnerships help people find real opportunities and move safely."],
    need: ["Your organisation's details", "What you are looking for", "Your contact person"],
    happens: ["You contact us", "We discuss needs and how we could work together", "We agree how to proceed in writing", "We keep communication clear"],
    offers: [
      { title: "Employers", text: "Candidate sourcing, screening and documentation coordination.", icon: "Building2" },
      { title: "Recruitment agencies", text: "Working together on opportunities.", icon: "Users" },
      { title: "Training institutions", text: "Preparing people for work.", icon: "GraduationCap" },
      { title: "Travel partners", text: "Flights and travel coordination.", icon: "Plane" },
      { title: "Logistics companies", text: "Moving goods and people.", icon: "Truck" },
      { title: "International organisations and business partners", text: "Discuss what fits.", icon: "Globe" },
    ],
    notice: "Every partnership is discussed and agreed in writing before work starts.",
    nextLabel: "Talk About a Partnership", ctaMessage: "Hello Kenkos, I would like to discuss a partnership.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
