import type { Metadata } from "next";
import { siteUrl } from "./contact";

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: `${siteUrl}${path}`, siteName: "Kenkos Recruitment & Logistics Centre", type: "website", locale: "en_KE" },
  };
}
