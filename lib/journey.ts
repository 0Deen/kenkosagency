// The 10-step journey shown on /how-it-works, the home page and guide pages.
export type JourneyStep = {
  n: number;
  id: string;
  title: string;
  short: string;
  icon: string;
  phase: 1 | 2 | 3 | 4;
  guide?: string;
};

export const journeySteps: JourneyStep[] = [
  { n: 1, id: "talk", title: "Talk to us", short: "Tell us the work you want and where.", icon: "MessageCircle", phase: 1 },
  { n: 2, id: "review", title: "Opportunity review", short: "We check if a suitable opportunity exists.", icon: "Search", phase: 1 },
  { n: 3, id: "application", title: "Application", short: "We explain the job and requirements first.", icon: "FileText", phase: 1 },
  { n: 4, id: "interview", title: "Interview or selection", short: "Some employers want to meet you first.", icon: "Users", phase: 1 },
  { n: 5, id: "documents", title: "Documents", short: "Prepare your papers with a checklist.", icon: "ClipboardCheck", phase: 2, guide: "/guides/passport" },
  { n: 6, id: "medical", title: "Medical", short: "A health check where required.", icon: "Stethoscope", phase: 2, guide: "/guides/medical" },
  { n: 7, id: "visa", title: "Visa", short: "Official permission to enter and work.", icon: "Stamp", phase: 3, guide: "/guides/visa" },
  { n: 8, id: "flight", title: "Flight", short: "Your ticket and travel details.", icon: "Plane", phase: 3, guide: "/guides/flight" },
  { n: 9, id: "pre-departure", title: "Pre-departure", short: "Pack, check and get ready to leave.", icon: "Luggage", phase: 4, guide: "/pre-departure" },
  { n: 10, id: "arrival", title: "Arrival", short: "What happens when you land.", icon: "MapPin", phase: 4, guide: "/guides/relocation" },
];

export const phases = [
  { n: 1, title: "Talk and match", text: "Tell us your plans. We check what is available and explain it in plain words.", progress: 0 },
  { n: 2, title: "Get ready", text: "Prepare your documents and complete the medical check where required.", progress: 33 },
  { n: 3, title: "Visa and flight", text: "Visa preparation, official processing and your travel booking.", progress: 66 },
  { n: 4, title: "Travel and arrive", text: "Pre-departure checks, the airport, and your first days in the new country.", progress: 100 },
];

// "Where am I?" indicator used on guide pages
export const journeyStages = ["Enquiry", "Job", "Medical", "Visa", "Flight", "Departure", "Arrival"];

export const commonProcess = [
  "Enquiry",
  "Profile review",
  "Opportunity matching",
  "Employer selection or interview",
  "Documentation",
  "Medical",
  "Visa processing",
  "Travel preparation",
  "Flight",
  "Departure",
  "Arrival",
];

export const documentChecklist = [
  { id: "passport", label: "Passport", help: "Must be valid. Check the expiry date early." },
  { id: "id", label: "National ID", help: "Your Kenyan national ID card." },
  { id: "conduct", label: "Certificate of Good Conduct", help: "Only where required for your job or country." },
  { id: "cv", label: "CV", help: "A short summary of your work and skills." },
  { id: "photos", label: "Passport photographs", help: "Ask us for the size and background colour needed." },
  { id: "education", label: "Education certificates", help: "Where relevant to the job." },
  { id: "experience", label: "Experience documents", help: "Letters or references from past work, where relevant." },
  { id: "medical", label: "Medical documents", help: "Given or collected during the medical step." },
  { id: "other", label: "Other destination documents", help: "Your exact list depends on the employer and country." },
];

export const predepartureChecklist = [
  { id: "d-passport", label: "Passport", help: "Keep it in your hand luggage." },
  { id: "d-visa", label: "Visa", help: "Print a copy and keep a photo on your phone." },
  { id: "d-ticket", label: "Ticket", help: "Check name, date and airport." },
  { id: "d-employment", label: "Employment documents", help: "Contract and employer contact details." },
  { id: "d-emergency", label: "Emergency contacts", help: "Write them on paper too." },
  { id: "d-phone", label: "Phone", help: "Charge it and carry a charger." },
  { id: "d-money", label: "Money", help: "Carry a small amount for the first day." },
  { id: "d-address", label: "Important addresses", help: "Your workplace or pickup address." },
  { id: "d-luggage", label: "Luggage", help: "Check the weight allowed on your ticket." },
  { id: "d-medication", label: "Required medication", help: "Carry it in its original packaging." },
  { id: "d-clothes", label: "Appropriate clothing", help: "Ask us about the weather and local dress." },
  { id: "d-info", label: "Destination information", help: "Read the country page and relocation guide." },
];
