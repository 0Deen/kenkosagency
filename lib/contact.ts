// Single source of truth for contact details. Edit here and the whole site updates.
export const contact = {
  company: "Kenkos Recruitment & Logistics Centre Limited",
  short: "Kenkos",
  phone: "+254 702 925 132",
  phoneHref: "tel:+254702925132",
  whatsappNumber: "254702925132",
  email: "kenkoscompany@gmail.com",
  emailHref: "mailto:kenkoscompany@gmail.com",
  addressLines: ["Rattansi Educational Trust Building", "Nairobi, Kenya"],
  // Google Maps embed (no API key needed). Replace with the exact embed link from Google Maps if you prefer.
  mapEmbed:
    "https://www.google.com/maps?q=Rattansi+Educational+Trust+Building,+Nairobi,+Kenya&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Rattansi+Educational+Trust+Building+Nairobi",
  // Add a licence / registration number here ONLY when it has been verified. It will then show on the Safety and About pages.
  licenceNumber: null as string | null,
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/Kenkostravelconsultancy/" },
    { name: "Instagram", href: "https://www.instagram.com/kenkostravelconsultancy/" },
    { name: "Threads", href: "https://www.threads.com/@kenn_kosgei" },
    { name: "Linktree", href: "https://linktr.ee/kenkosrecruitmentandlogistics" },
  ],
};

export function whatsappLink(message = "Hello Kenkos, I would like some help.") {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";
