import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import {
  SEO_CITY,
  getAllSeoSlugs,
  getSeoClassPath,
  getSeoLocalityPath,
  parseSeoSlug,
  type ParsedSeoSlug,
} from "@/data/seo-locations";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";

/**
 * Internal route for the programmatic SEO landing pages. Public URLs are:
 *   /home-tutor-in-[locality]-patna   e.g. /home-tutor-in-boring-road-patna
 *   /[boardOrClass]-home-tutor-patna  e.g. /cbse-home-tutor-patna
 *
 * Next.js dynamic segments cannot mix literal text with a param, so next.config.ts
 * rewrites each known public slug to /seo/[slug], and parseSeoSlug() resolves the
 * data. The canonical always points at the public URL, never at /seo/....
 */
interface SeoPageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export function generateStaticParams() {
  return getAllSeoSlugs().map((slug) => ({ slug }));
}

function buildPageMeta(parsed: ParsedSeoSlug) {
  if (parsed.type === "locality") {
    const { name, slug } = parsed.data;
    return {
      title: `Home Tutor in ${name}, ${SEO_CITY} | Wellfind Academic`,
      description: `Find verified one-to-one home tutors in ${name}, ${SEO_CITY} for UKG to Class 10 (CBSE, ICSE, Bihar Board). Managed tutor matching, demo class and follow-up by Wellfind Academic.`,
      path: getSeoLocalityPath(slug),
    };
  }

  const { name, slug } = parsed.data;
  return {
    title: `${name} Home Tutor in ${SEO_CITY} | Wellfind Academic`,
    description: `Verified ${name} home tutors in ${SEO_CITY} for one-to-one learning at home. Wellfind Academic handles tutor matching, a demo class and ongoing follow-up.`,
    path: getSeoClassPath(slug),
  };
}

export async function generateMetadata({
  params,
}: SeoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSeoSlug(slug);
  if (!parsed) return {};

  const meta = buildPageMeta(parsed);
  const url = `${siteConfig.url}${meta.path}`;

  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical: meta.path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      title: meta.title,
      description: meta.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1741,
          height: 908,
          alt: `${meta.title} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function SeoPage({ params }: SeoPageProps) {
  const { slug } = await params;
  const parsed = parseSeoSlug(slug);
  if (!parsed) notFound();

  return parsed.type === "locality" ? (
    <SeoLandingPage type="locality" data={parsed.data} />
  ) : (
    <SeoLandingPage type="class" data={parsed.data} />
  );
}
