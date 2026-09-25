import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/contact";
import { jobs } from "@/lib/jobs";
import { countries } from "@/lib/countries";
import { guides } from "@/lib/guides";
import { services } from "@/lib/services";

const staticPaths = ["", "/about", "/services", "/work-abroad", "/jobs", "/countries", "/how-it-works", "/requirements", "/guides", "/pre-departure", "/safety", "/fees", "/faq", "/partnerships", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...services.map((s) => `/services/${s.slug}`),
    ...jobs.map((j) => `/jobs/${j.slug}`),
    ...countries.map((c) => `/countries/${c.slug}`),
    ...guides.map((g) => `/guides/${g.slug}`),
  ];
  return paths.map((p) => ({ url: `${siteUrl}${p}`, lastModified: new Date(), changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
