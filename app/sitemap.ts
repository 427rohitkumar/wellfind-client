import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { locationsData } from "@/content/locations";
import { classesData } from "@/content/classes";

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
      url: `${baseUrl}/home-tuition/patna/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
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

  // Locality Pages
  const localityPages: MetadataRoute.Sitemap = Object.keys(locationsData)
    .filter((slug) => slug !== "patna")
    .map((slug) => ({
      url: `${baseUrl}/home-tuition/patna/${slug}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    }));

  // Class Pages
  const classPages: MetadataRoute.Sitemap = Object.keys(classesData).map(
    (slug) => ({
      url: `${baseUrl}/classes/${slug}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  return [...staticPages, ...localityPages, ...classPages];
}
