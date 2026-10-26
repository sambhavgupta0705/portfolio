import type { MetadataRoute } from "next";
import { site } from "@/content/links";
import { sections } from "@/lib/sections";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, priority: 1 },
    ...sections.map((s) => ({ url: `${site.url}/${s.slug}`, lastModified: now, priority: 0.7 })),
  ];
}
