import type { Metadata } from "next";
import { getSection, type SectionSlug } from "@/lib/sections";

export function sectionMetadata(slug: SectionSlug): Metadata {
  const s = getSection(slug);
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/${slug}` },
    openGraph: { title: `${s.title} · Sambhav Gupta`, description: s.description, url: `/${slug}` },
  };
}
