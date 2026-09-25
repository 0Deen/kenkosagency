export type Job = {
  slug: string;
  title: string;
  sector: string;
  icon: string;
  image?: string;
  imagePos?: string;
  short: string;
  what: string;
  involves: string[];
  suits: string[];
  requirements: string[];
  extraDocs?: string[];
};

export const availabilityNote =
  "Availability depends on current employer demand and approved opportunities.";

export const jobNotes = [
  "Duties, salary, working hours, accommodation, contract terms and requirements depend on the employer and the destination.",
  "A job is not guaranteed because you make an enquiry.",
  "Always ask for the job details in writing and read your contract before you agree.",
];

export const baseDocuments = [
  "Passport",
  "National ID",
  "Good conduct certificate where required",
  "Medical documents",
  "Passport photographs",
  "CV where required",
  "Other employer or visa documents",
];

export const jobs: Job[] = [
  {
    slug: "housemaid", title: "Housemaid / Domestic Worker", sector: "Domestic & household", icon: "Home",
    image: "/images/housekeeping.jpg", imagePos: "50% 30%",
    short: "Household support and domestic work opportunities where available.",
    what: "A housemaid or domestic worker looks after a home. You help a family keep the house clean, tidy and running well. You usually work for one household.",
    involves: ["Cleaning the home", "Cooking or helping in the kitchen", "Laundry and ironing", "Helping around the home", "Other duties written in the employment contract"],
    suits: ["People who like keeping a home neat", "People who can follow instructions and work patiently", "People who are ready to live and work in a new culture"],
    requirements: ["Age and health requirements set by the employer and country", "Passport that is valid", "Willingness to follow the written contract", "Some employers ask for experience or references"],
  },
  {
    slug: "house-to-house", title: "House-to-House Work", sector: "Domestic & household", icon: "DoorOpen",
    image: "/images/housekeeping.jpg", imagePos: "20% 70%",
    short: "Jobs involving household visits and domestic support where available.",
    what: "House-to-house work means you visit different homes to do a set task, such as cleaning or home support, instead of living in one home.",
    involves: ["Visiting homes on a schedule", "Cleaning or tidying during each visit", "Home support tasks named by the employer", "Travelling between homes, usually with transport arranged by the employer"],
    suits: ["People who are organised and on time", "People comfortable meeting new people each day"],
    requirements: ["Requirements set by the employer and country", "Valid passport", "Clear understanding of working hours and transport in the contract"],
  },
  {
    slug: "caregiver", title: "Caregiver", sector: "Care & support", icon: "HeartHandshake",
    image: "/images/caregiver.jpg", imagePos: "50% 30%",
    short: "Care and support roles where qualifications and employer requirements match.",
    what: "A caregiver helps a person who needs support, such as an older person or someone recovering at home. The work needs patience, kindness and responsibility.",
    involves: ["Helping with daily routines", "Keeping the person safe and comfortable", "Preparing meals where required", "Following care instructions from the family or employer"],
    suits: ["People who are patient and caring", "People with care training or experience, where the employer asks for it"],
    requirements: ["Some roles ask for a certificate or proof of experience", "Health checks may be stricter for care work", "Good conduct certificate may be required"],
    extraDocs: ["Care or nursing certificates, where relevant"],
  },
  {
    slug: "delivery-rider", title: "Delivery Rider", sector: "Driving & delivery", icon: "Bike",
    short: "Delivery and rider opportunities where available.",
    what: "A delivery rider collects food or parcels and takes them to customers on a motorbike or bicycle, using a phone app or instructions from the employer.",
    involves: ["Collecting orders", "Delivering safely and on time", "Using a phone app for orders and maps", "Following road rules in the country"],
    suits: ["People who ride confidently", "People who know how to use a smartphone"],
    requirements: ["Riding experience", "A licence that the country accepts, or a local licence after arrival where allowed", "Employer requirements differ"],
    extraDocs: ["Riding or driving licence"],
  },
  {
    slug: "driver", title: "Driver", sector: "Driving & delivery", icon: "Car",
    short: "Driving roles subject to licence and employer requirements.",
    what: "A driver drives a car, van or other vehicle for a family, company or service. Some roles are private driving; others are delivery or transport.",
    involves: ["Driving safely to set places", "Keeping the vehicle clean and in order", "Following routes and schedules", "Following local traffic rules"],
    suits: ["Experienced, careful drivers"],
    requirements: ["A valid driving licence", "Proof of driving experience", "Some countries need a local licence, which may be arranged after arrival"],
    extraDocs: ["Driving licence"],
  },
  {
    slug: "barista", title: "Barista", sector: "Hospitality", icon: "Coffee",
    image: "/images/restaurant.jpg", imagePos: "50% 40%",
    short: "Hospitality opportunities.",
    what: "A barista makes and serves coffee and other drinks in a cafe, hotel or restaurant, and looks after customers.",
    involves: ["Preparing coffee and drinks", "Serving customers politely", "Keeping the counter and machines clean", "Handling orders and payments where required"],
    suits: ["People with cafe or coffee experience", "People who enjoy meeting customers"],
    requirements: ["Experience or barista training, where the employer asks for it", "Basic English is often helpful"],
    extraDocs: ["Training certificates, where relevant"],
  },
  {
    slug: "waiter", title: "Waiter / Waitress", sector: "Hospitality", icon: "UtensilsCrossed",
    image: "/images/restaurant.jpg", imagePos: "20% 50%",
    short: "Restaurants, hotels and hospitality.",
    what: "A waiter takes orders, serves food and drinks and makes sure guests are comfortable in a restaurant, hotel or event venue.",
    involves: ["Welcoming guests", "Taking orders and serving food", "Setting and clearing tables", "Working as part of a team"],
    suits: ["People who are friendly, neat and can work on their feet"],
    requirements: ["Experience is often preferred", "Basic English is often helpful", "Neat appearance and good manners"],
  },
  {
    slug: "kitchen-helper", title: "Kitchen Helper", sector: "Hospitality", icon: "ChefHat",
    image: "/images/restaurant.jpg", imagePos: "80% 50%",
    short: "Kitchen and food-service roles.",
    what: "A kitchen helper supports the cooks and chefs. You prepare ingredients, wash and clean, and keep the kitchen safe and tidy.",
    involves: ["Washing and chopping food", "Cleaning the kitchen and equipment", "Following food safety rules", "Supporting the cooking team"],
    suits: ["People who work well in a team", "People who follow hygiene rules carefully"],
    requirements: ["Medical and food-handling requirements may apply", "Experience may help but is not always asked"],
  },
  {
    slug: "cook", title: "Cook", sector: "Hospitality", icon: "ChefHat",
    image: "/images/restaurant.jpg", imagePos: "60% 60%",
    short: "Food preparation and kitchen positions.",
    what: "A cook prepares meals in a restaurant, hotel, canteen or private home. Some roles are for one type of food; others are general.",
    involves: ["Preparing and cooking meals", "Following recipes and food safety rules", "Managing time in a busy kitchen", "Keeping the cooking area clean"],
    suits: ["People with cooking experience or training"],
    requirements: ["Proof of experience or training, where asked", "Food-handling health checks may apply"],
    extraDocs: ["Cooking or catering certificates, where relevant"],
  },
  {
    slug: "technician", title: "Technician / Mechanic", sector: "Technical", icon: "Wrench",
    image: "/images/electrician.jpg", imagePos: "50% 40%",
    short: "Technical and maintenance roles.",
    what: "A technician or mechanic installs, checks and repairs equipment. This can be electrical work, vehicles, air conditioning, machines or building maintenance.",
    involves: ["Checking and repairing equipment", "Following safety rules and wearing safety gear", "Reading simple instructions or diagrams", "Recording work done"],
    suits: ["People with a trade certificate or hands-on experience"],
    requirements: ["Trade certificates or proof of experience", "Employers may test skills before selecting", "Some countries check qualifications officially"],
    extraDocs: ["Trade or technical certificates"],
  },
  {
    slug: "cleaner", title: "Cleaner", sector: "Cleaning & support", icon: "SprayCan",
    image: "/images/housekeeping.jpg", imagePos: "50% 80%",
    short: "Cleaning and support positions.",
    what: "A cleaner keeps places such as hotels, offices, shops and hospitals clean and safe for other people.",
    involves: ["Cleaning floors, rooms and surfaces", "Using cleaning tools and products safely", "Restocking supplies", "Following a work schedule"],
    suits: ["People who are reliable and pay attention to detail"],
    requirements: ["Experience may help but is not always asked", "Health and age requirements set by the employer and country"],
  },
  {
    slug: "construction", title: "Construction Worker", sector: "Construction", icon: "HardHat",
    short: "Construction and site-related opportunities.",
    what: "A construction worker helps build or repair buildings and roads. Roles include general labour and skilled trades like masonry or painting.",
    involves: ["Working on a building site", "Carrying and preparing materials", "Following site safety rules", "Skilled work such as masonry, painting or steel fixing where qualified"],
    suits: ["People who are physically fit and safety-minded"],
    requirements: ["Medical fitness", "Trade experience for skilled roles", "Safety training may be required by the employer"],
    extraDocs: ["Trade certificates, where relevant"],
  },
  {
    slug: "factory", title: "Factory Worker", sector: "Manufacturing", icon: "Factory",
    image: "/images/warehouse.jpg", imagePos: "50% 50%",
    short: "Manufacturing and production roles.",
    what: "A factory worker helps make, pack or move products in a production plant or warehouse.",
    involves: ["Working on a production line", "Packing and labelling products", "Moving goods safely", "Following shift times and safety rules"],
    suits: ["People who can do steady, repeated tasks carefully"],
    requirements: ["Health checks", "Willingness to work shifts", "Some roles need forklift or machine experience"],
  },
  {
    slug: "security", title: "Security", sector: "Security", icon: "Shield",
    image: "/images/security.jpg", imagePos: "50% 30%",
    short: "Security-related employment where applicable.",
    what: "A security officer protects people, buildings and property. You watch entrances, check visitors and report problems to a supervisor.",
    involves: ["Guarding an entrance or area", "Checking visitors and keeping records", "Patrolling and reporting", "Staying calm and polite in difficult moments"],
    suits: ["People who are alert, disciplined and honest"],
    requirements: ["Good conduct certificate is often required", "Some experience or training may be asked", "Age and fitness rules from the employer and country"],
    extraDocs: ["Security training certificates, where relevant"],
  },
  {
    slug: "farm", title: "Farm / Agriculture", sector: "Agriculture", icon: "Wheat",
    short: "Agricultural roles where available.",
    what: "Farm workers help plant, look after and harvest crops or look after animals on a farm or in a greenhouse.",
    involves: ["Planting, watering and harvesting", "Packing produce", "Looking after animals where the job includes it", "Working outdoors in different weather"],
    suits: ["People with farm experience or who are comfortable with outdoor work"],
    requirements: ["Physical fitness", "Farm experience may help", "Seasonal work may have set start and end dates"],
  },
];

export const getJob = (slug: string) => jobs.find((j) => j.slug === slug);
