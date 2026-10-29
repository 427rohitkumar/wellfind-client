import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { classesData } from "@/content/classes";
import { getActiveSubLocalitySlugs } from "@/data/localities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  // Core Marketing Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/patna`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/classes/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/join-as-teacher/`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // Active Sub-Locality Landing Pages (e.g. /patna/boring-road, /patna/kankarbagh)
  const activeLocalityPages: MetadataRoute.Sitemap = getActiveSubLocalitySlugs().map(
    (slug) => ({
      url: `${baseUrl}/patna/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    })
  );

  // Class Pages
  const classPages: MetadataRoute.Sitemap = Object.keys(classesData).map(
    (slug) => ({
      url: `${baseUrl}/classes/${slug}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  return [
    ...staticPages,
    ...activeLocalityPages,
    ...classPages,
  ];
}
