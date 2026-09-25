import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { getService, services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  const path = s.slug === "partnerships" ? "/partnerships" : `/services/${s.slug}`;
  return pageMeta(`${s.title} | Kenkos`, s.short, path);
}

export default function Page({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();
  return <ServicePage service={s} />;
}
