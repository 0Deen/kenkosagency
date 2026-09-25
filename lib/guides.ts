export type GuideSection = {
  heading: string;
  body?: string[];
  list?: string[];
  callout?: { kind: "info" | "warn"; text: string };
};

export type Guide = {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  image?: string;
  imagePos?: string;
  stage: number; // index in journeyStages
  short: string;
  notice: string;
  sections: GuideSection[];
};

export const airportSteps = [
  { title: "Arrive at the airport", icon: "MapPin", text: "Arrive early. Many airlines ask you to arrive about three hours before an international flight. Check your ticket for the exact advice." },
  { title: "Find your airline", icon: "Search", text: "Look at the big screens for your flight number. They show which check-in desks your airline is using." },
  { title: "Check in", icon: "Ticket", text: "Show your passport and ticket at the desk. The staff give you a boarding pass. This paper or phone screen shows your seat and gate." },
  { title: "Drop baggage", icon: "Luggage", text: "Large bags are weighed and sent to the plane. You receive a small tag for each bag. Keep it until you collect your bags." },
  { title: "Security check", icon: "ShieldCheck", text: "Put your hand luggage, phone and belt in the tray. You walk through a scanner. This keeps everyone safe." },
  { title: "Immigration", icon: "Stamp", text: "An officer checks your passport and visa and may ask a few simple questions. Answer calmly and truthfully." },
  { title: "Find your gate", icon: "PlaneTakeoff", text: "Your boarding pass shows a gate number. Follow the signs. Check the screens because gates can change." },
  { title: "Board the plane", icon: "DoorOpen", text: "Listen for your flight to be called. Show your boarding pass and passport, then find your seat." },
  { title: "Fly", icon: "Plane", text: "Follow the crew's instructions. Keep your passport and papers in your hand luggage. Ask the crew if you need help." },
  { title: "Arrive", icon: "PlaneLanding", text: "When the plane stops, collect your hand luggage. Follow signs for Arrivals or Immigration." },
  { title: "Immigration at your destination", icon: "Fingerprint", text: "Show your passport and visa. You may give fingerprints or a photo. Officers may ask why you are visiting or working there." },
  { title: "Collect baggage", icon: "Boxes", text: "Look at the screen for your flight's belt number. Match your bag tag to your bag." },
  { title: "Meet your arranged contact", icon: "Handshake", text: "If pickup was arranged, look for the person or sign agreed with you. If you cannot find them, use the contact number you were given." },
];

export const guides: Guide[] = [
  {
    slug: "medical", title: "Medical Guide", subtitle: "Don't worry if you have never done this before. We will explain what you need to know.",
    icon: "Stethoscope", image: "/images/medical.jpg", imagePos: "50% 30%", stage: 2,
    short: "What a medical examination is, what to carry and what happens next.",
    notice: "Medical requirements differ by country and purpose. Follow the instructions given for your specific application.",
    sections: [
      { heading: "What is a medical?", body: ["A medical is a health check done at an approved medical centre. A trained medical team looks at your health and records the result.", "It is not a test you can pass by studying. It is a check to see that you are fit for the work and meet the rules of the country."] },
      { heading: "Why is it required?", body: ["Many countries and employers ask for a medical before they give a work visa. It is one of the official requirements, like a passport."] },
      { heading: "Where do I go?", body: ["We tell you which medical centre to visit, on which day, and how to get there. Do not go to a random clinic unless we tell you, because the result may not be accepted."] },
      { heading: "What should I carry?", list: ["Your passport and national ID", "Any letter or form we give you", "Passport photographs if asked", "Your phone, charged", "Money for transport and any fees we have explained to you"], callout: { kind: "info", text: "Here's what you need. The exact list can be different for your application, so always confirm your details with our team." } },
      { heading: "What happens when I arrive?", body: ["You show your documents at the front desk and your details are recorded. You may wait for your turn. Staff will call your name and tell you what to do next."] },
      { heading: "What tests may be required?", body: ["The medical process may include examinations and tests required for the relevant destination or employment process. Tests can include things like a general examination and samples taken by the medical team."], callout: { kind: "info", text: "The exact tests depend on the destination and applicable requirements. Nobody can tell you the exact list before the country confirms it." } },
      { heading: "How long can it take?", body: ["Some people finish the same day. Results can take longer. We do not promise an exact time because it depends on the medical centre and the country."] },
      { heading: "What happens after?", body: ["Results are processed according to the relevant requirements. We tell you the next step. If more information is needed, you follow the instructions provided."] },
      { heading: "What if I am asked to repeat a test?", body: ["This can happen for many reasons. It does not always mean something is wrong. Stay calm, ask what is needed, and tell our team so we can guide you."] },
      { heading: "What should I avoid?", list: ["Do not give your original documents to unofficial people", "Do not pay anyone you cannot verify", "Do not hide health information the medical team asks about", "Do not miss your appointment without telling us"] },
      { heading: "Who should I contact?", body: ["Call or WhatsApp Kenkos. No question is too small."] },
    ],
  },
  {
    slug: "visa", title: "Visa Guide", subtitle: "A visa can sound complicated. Here it is in simple words.",
    icon: "Stamp", stage: 3, short: "What a visa is, who decides, and what approval does and does not mean.",
    notice: "Kenkos can provide guidance and assistance, but visa decisions are made by the relevant authorities.",
    sections: [
      { heading: "What is a visa?", body: ["A visa is official permission to enter or stay in a country for a particular purpose and period, subject to the applicable rules. It is usually a stamp, a sticker or an electronic document linked to your passport."] },
      { heading: "Why do I need one?", body: ["Each country decides who may enter, work or study there. Without the right visa, an airline may refuse to let you board, or officers may refuse entry."] },
      { heading: "What documents may be needed?", list: ["Valid passport", "Passport photographs", "Employment or invitation documents", "Medical results where required", "Good conduct certificate where required", "Application forms and any fees the authority asks for"], callout: { kind: "info", text: "Your exact requirements may be different. Always confirm your details with our team." } },
      { heading: "Who decides?", body: ["The embassy, visa centre or immigration authority of the country decides. Kenkos and your employer cannot decide for them."] },
      { heading: "How long can it take?", body: ["It can take days or weeks. It depends on the country, the visa type and how busy the authority is. We will not promise a date."] },
      { heading: "What happens at an appointment?", body: ["Some applications need you to visit a visa centre. Someone checks your documents and may take your fingerprints and photo. Arrive early and carry originals if asked."] },
      { heading: "What happens after submission?", body: ["Your application is sent for processing. You wait. We keep in touch and tell you if anything is needed."] },
      { heading: "What if the authority asks for more documents?", body: ["This is common. Send exactly what is asked as soon as you can. Tell our team so we can guide you."] },
      { heading: "What does visa approval mean?", body: ["It means the authority has agreed that you may enter or stay for the stated purpose and period, following its rules."] },
      { heading: "What visa approval does NOT mean", list: ["It does not mean you can do any job you like", "It does not always mean you can stay longer than the dates shown", "It does not remove the need to follow the country's laws", "It is not a promise of any particular salary or working condition"] },
    ],
  },
  {
    slug: "passport", title: "Passport Guide", subtitle: "Your passport is the most important travel document you have.",
    icon: "BookOpen", stage: 0, short: "What a passport is, how to keep it safe and when to check the expiry date.",
    notice: "Never surrender your original documents to unofficial people.",
    sections: [
      { heading: "What is a passport?", body: ["A passport is an official document from your government that proves who you are and which country you belong to. You need it to travel between countries."] },
      { heading: "Why do I need one?", body: ["Airlines, visa offices and immigration officers all ask to see it. Without a valid passport you cannot travel abroad."] },
      { heading: "How to keep it safe", list: ["Keep it in a safe, dry place", "Take a clear photo of the main page and keep it on your phone", "Do not lend it or leave it with anyone you do not know", "Do not write or stick anything in it"] },
      { heading: "When should I check the expiry date?", body: ["Check today. Many countries ask that your passport is valid for a certain time after you arrive. If yours is close to expiring, renew it early."] },
      { heading: "What happens if it expires?", body: ["You cannot travel until you renew it. Renewing takes time, so do it before you apply for a visa."] },
      { heading: "Protect yourself", callout: { kind: "warn", text: "Never surrender your original documents to unofficial people. If someone asks to keep your passport, ask why, ask for it in writing and call Kenkos on +254 702 925 132 to check." } },
    ],
  },
  {
    slug: "good-conduct", title: "Good Conduct Guide", subtitle: "A short guide to one common document.",
    icon: "BadgeCheck", stage: 1, short: "What a certificate of good conduct is and why some employers ask for it.",
    notice: "Requirements can change depending on the employer, job and destination.",
    sections: [
      { heading: "What is it?", body: ["A Certificate of Good Conduct is an official document that shows whether you have a criminal record in Kenya. It is issued by the relevant Kenyan authority."] },
      { heading: "Why do some employers and destinations require it?", body: ["Some jobs, such as care, security and work in homes, need employers to trust the person. Some countries also ask for it as part of the visa process."] },
      { heading: "How does it fit into the application process?", body: ["It is usually collected when you prepare your documents, before the visa step. We tell you when it is needed and how to apply."] },
      { heading: "How long does it take?", body: ["We do not give exact times because they can change. Apply as soon as we tell you it is needed."] },
      { heading: "Ask us", body: ["Not sure whether you need one? Ask us. Your exact requirements depend on your job and destination."] },
    ],
  },
  {
    slug: "flight", title: "Flight Guide", subtitle: "How to read your ticket without stress.",
    icon: "Plane", image: undefined, stage: 4, short: "How to read a ticket, what a layover is, and what a boarding pass shows.",
    notice: "Always check your ticket details and confirm them with our team before you travel.",
    sections: [
      { heading: "How to read a ticket", body: ["Your ticket or itinerary shows your name, flight numbers, dates, times and airports. Check that your name matches your passport exactly."] },
      { heading: "Departure airport", body: ["This is where your journey starts, for example Jomo Kenyatta International Airport in Nairobi. Check the terminal too."] },
      { heading: "Arrival airport", body: ["This is where you land. Sometimes it is not the city where you will live."] },
      { heading: "Flight number", body: ["A code with letters and numbers, for example XX 123. Look for it on airport screens."] },
      { heading: "Boarding time", body: ["The time you must be at the gate. It is earlier than the take-off time. Gates close before take-off, so do not be late."] },
      { heading: "Baggage", body: ["Your ticket shows how many bags and how many kilograms you may carry. Extra weight can cost money at the airport."] },
      { heading: "Transit and layover", body: ["Some trips have two flights. A transit or layover is the wait between them. Follow signs for Transfers and keep your boarding pass ready.", "Ask us in advance if you will need a transit visa."] },
      { heading: "Boarding pass", body: ["This is given at check-in. It shows your seat, gate and boarding time. Keep it until you have left the plane."] },
      { heading: "Immigration", body: ["Officers check that you may enter the country. Have your passport, visa and any papers ready."] },
    ],
  },
  {
    slug: "airport", title: "Airport Guide", subtitle: "Don't worry. We'll walk you through it.",
    icon: "PlaneTakeoff", stage: 5, short: "First time flying? Follow 13 simple steps from arriving to meeting your contact.",
    notice: "Airport processes can differ by airport and airline. Follow staff instructions and ask if you are unsure.",
    sections: [],
  },
  {
    slug: "relocation", title: "Relocation Guide", subtitle: "Moving to a new country is more than buying a ticket.",
    icon: "MapPin", stage: 6, short: "Before leaving, your first day, your first week and staying safe.",
    notice: "The exact arrangements depend on the employer, destination and agreed service.",
    sections: [
      { heading: "Before leaving", list: ["Finish medical, visa and contract steps", "Read your contract and keep a copy", "Tell your family your flight details", "Pack using the pre-departure checklist"] },
      { heading: "During travel", list: ["Keep passport and visa in your hand luggage", "Keep your phone charged", "Follow the airport steps in the Airport Guide"] },
      { heading: "First day", list: ["Meet your pickup or contact", "Go to your accommodation", "Tell your family you arrived safely", "Rest and ask questions about the next day"] },
      { heading: "First week", list: ["Learn the address of your workplace and home", "Find out how to get transport", "Meet your supervisor and learn your schedule", "Save important phone numbers"] },
      { heading: "Accommodation and transport", body: ["Ask before you travel: where will I live, who is in the same place, and how will I get to work? Get the answers in writing where possible."] },
      { heading: "Workplace and communication", body: ["Learn to say greetings and simple words in the local language. Keep in touch with your family using your phone. Ask how to get a local SIM card."] },
      { heading: "Money", body: ["Keep track of your salary and any deductions in your contract. Know how you will be paid. Keep receipts."] },
      { heading: "Cultural differences", body: ["Customs, dress and daily habits may be different. Ask questions and respect the local rules and religion. Learning early avoids problems."] },
      { heading: "Documents", body: ["Keep copies of your passport, visa and contract. Keep the originals safe."] },
      { heading: "Safety and emergency contacts", list: ["Save the Kenya embassy or high commission number for your country if there is one", "Save Kenkos: +254 702 925 132", "Save your employer's number and address", "Know the local emergency number"], callout: { kind: "warn", text: "Never give your money or documents to a person you cannot verify. Ask us if you are unsure." } },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
