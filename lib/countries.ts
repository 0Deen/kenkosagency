export type Country = {
  slug: string;
  name: string;
  code: string;
  region: "Gulf" | "Middle East" | "Europe";
  capital: string;
  language: string;
  currency: string;
  tone: "navy" | "mid" | "deep" | "slate";

  // Country photo
  image: string;
  imagePos?: string;

  categories: string[];
  goodToKnow: string[];
};

export const countryNotice =
  "We do not promise jobs or visa approval, and we do not list current vacancies on this page. Ask our team what is available now.";

const gulfKnow = [
  "Laws, dress rules and customs can be different from Kenya. Learn the basics before you travel.",
  "Your contract, your employer and the type of visa decide your rights and duties.",
  "Keep your own passport safe and do not hand it to unofficial people.",
];

const euKnow = [
  "European work permits usually depend on a confirmed employer and strict document checks.",
  "Rules for who can work, and for how long, can change. Always confirm the latest rules.",
  "Languages and living costs differ. Ask what support is included before you decide.",
];

export const countries: Country[] = [
  {
    slug: "uae",
    name: "United Arab Emirates",
    code: "AE",
    region: "Gulf",
    capital: "Abu Dhabi",
    language: "Arabic (English widely used)",
    currency: "UAE dirham",
    tone: "navy",
    image: "/images/uae.png",
    imagePos: "50% 50%",
    categories: [
      "Hospitality",
      "Domestic and household",
      "Security",
      "Delivery and driving",
      "Cleaning",
      "Technical",
    ],
    goodToKnow: gulfKnow,
  },

  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    code: "SA",
    region: "Gulf",
    capital: "Riyadh",
    language: "Arabic",
    currency: "Saudi riyal",
    tone: "mid",
    image: "/images/saudi.png",
    imagePos: "50% 50%",
    categories: [
      "Domestic and household",
      "Care and support",
      "Driving",
      "Hospitality",
      "Technical",
      "Construction",
    ],
    goodToKnow: gulfKnow,
  },

  {
    slug: "qatar",
    name: "Qatar",
    code: "QA",
    region: "Gulf",
    capital: "Doha",
    language: "Arabic (English widely used)",
    currency: "Qatari riyal",
    tone: "deep",
    image: "/images/qatar.png",
    imagePos: "50% 50%",
    categories: [
      "Hospitality",
      "Security",
      "Cleaning",
      "Domestic and household",
      "Construction",
    ],
    goodToKnow: gulfKnow,
  },

  {
    slug: "oman",
    name: "Oman",
    code: "OM",
    region: "Gulf",
    capital: "Muscat",
    language: "Arabic",
    currency: "Omani rial",
    tone: "slate",
    image: "/images/oman.png",
    imagePos: "50% 50%",
    categories: [
      "Domestic and household",
      "Hospitality",
      "Construction",
      "Agriculture",
    ],
    goodToKnow: gulfKnow,
  },

  {
    slug: "kuwait",
    name: "Kuwait",
    code: "KW",
    region: "Gulf",
    capital: "Kuwait City",
    language: "Arabic",
    currency: "Kuwaiti dinar",
    tone: "mid",
    image: "/images/kuwait.png",
    imagePos: "50% 50%",
    categories: [
      "Domestic and household",
      "Cleaning",
      "Driving",
      "Hospitality",
    ],
    goodToKnow: gulfKnow,
  },

  {
    slug: "bahrain",
    name: "Bahrain",
    code: "BH",
    region: "Gulf",
    capital: "Manama",
    language: "Arabic (English widely used)",
    currency: "Bahraini dinar",
    tone: "navy",
    image: "/images/bahrain.png",
    imagePos: "50% 50%",
    categories: [
      "Hospitality",
      "Domestic and household",
      "Cleaning",
      "Technical",
    ],
    goodToKnow: gulfKnow,
  },

  {
    slug: "jordan",
    name: "Jordan",
    code: "JO",
    region: "Middle East",
    capital: "Amman",
    language: "Arabic",
    currency: "Jordanian dinar",
    tone: "deep",
    image: "/images/jordan.png",
    imagePos: "50% 50%",
    categories: [
      "Manufacturing",
      "Hospitality",
      "Domestic and household",
    ],
    goodToKnow: [
      "Rules for foreign workers differ by sector. Confirm them for your job.",
      ...gulfKnow.slice(1),
    ],
  },

  {
    slug: "turkey",
    name: "Turkey",
    code: "TR",
    region: "Middle East",
    capital: "Ankara",
    language: "Turkish",
    currency: "Turkish lira",
    tone: "slate",
    image: "/images/turkey.png",
    imagePos: "50% 50%",
    categories: [
      "Hospitality",
      "Manufacturing",
      "Domestic and household",
    ],
    goodToKnow: [
      "Turkish is the main working language, so ask what language support you will have.",
      ...gulfKnow.slice(1),
    ],
  },

  {
    slug: "luxembourg",
    name: "Luxembourg",
    code: "LU",
    region: "Europe",
    capital: "Luxembourg City",
    language: "Luxembourgish, French and German",
    currency: "Euro",
    tone: "navy",
    image: "/images/luxembourg.png",
    imagePos: "50% 50%",
    categories: [
      "Only where approved opportunities exist",
    ],
    goodToKnow: euKnow,
  },

  {
    slug: "poland",
    name: "Poland",
    code: "PL",
    region: "Europe",
    capital: "Warsaw",
    language: "Polish",
    currency: "Polish złoty",
    tone: "mid",
    image: "/images/poland.png",
    imagePos: "50% 50%",
    categories: [
      "Manufacturing",
      "Agriculture",
      "Only where approved opportunities exist",
    ],
    goodToKnow: euKnow,
  },

  {
    slug: "greece",
    name: "Greece",
    code: "GR",
    region: "Europe",
    capital: "Athens",
    language: "Greek",
    currency: "Euro",
    tone: "deep",
    image: "/images/greece.png",
    imagePos: "50% 50%",
    categories: [
      "Agriculture",
      "Hospitality",
      "Only where approved opportunities exist",
    ],
    goodToKnow: euKnow,
  },
];

export const getCountry = (slug: string) =>
  countries.find((c) => c.slug === slug);