import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { classesData } from "@/content/classes";
import { getActiveSubLocalitySlugs } from "@/data/localities";
import {
  SEO_CLASS_PAGES,
  SEO_LOCALITIES,
  getSeoClassPath,
  getSeoLocalityPath,
} from "@/data/seo-locations";

// Bump when page content meaningfully changes. A fixed date is more honest for
// crawlers than "now", which would flag every URL as modified on every request.
const LAST_UPDATED = new Date("2026-11-21");

// URLs are emitted WITHOUT a trailing slash: proxy.ts 308-redirects trailing-slash
// URLs, and canonical tags use the same slash-less form.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticEntries: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/patna`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/classes`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/join-as-teacher`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/terms-and-conditions`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/delete-account`, changeFrequency: "yearly", priority: 0.3 },
  ];
  const staticPages: MetadataRoute.Sitemap = staticEntries.map((entry) => ({
    ...entry,
    lastModified: LAST_UPDATED,
  }));

  // Programmatic locality pages: /home-tutor-in-[locality]-patna
  const seoLocalityPages: MetadataRoute.Sitemap = SEO_LOCALITIES.map((item) => ({
    url: `${baseUrl}${getSeoLocalityPath(item.slug)}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Programmatic board/class pages: /[slug]-home-tutor-patna
  const seoClassPages: MetadataRoute.Sitemap = SEO_CLASS_PAGES.map((item) => ({
    url: `${baseUrl}${getSeoClassPath(item.slug)}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Existing sub-locality hubs: /patna/[locality]
  const activeLocalityPages: MetadataRoute.Sitemap = getActiveSubLocalitySlugs().map(
    (slug) => ({
      url: `${baseUrl}/patna/${slug}`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  // Individual class pages: /classes/[slug]
  const classPages: MetadataRoute.Sitemap = Object.keys(classesData).map((slug) => ({
    url: `${baseUrl}/classes/${slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...seoLocalityPages,
    ...seoClassPages,
    ...activeLocalityPages,
    ...classPages,
  ];
}
