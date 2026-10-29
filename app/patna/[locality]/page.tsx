import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import {
  getLocality,
  getActiveSubLocalitySlugs,
} from "@/data/localities";
import { LocalityLandingPage } from "@/components/locality/LocalityLandingPage";

interface SubLocalityPageProps {
  params: Promise<{
    locality: string;
  }>;
}

export const instant = false;

export function generateStaticParams() {
  return getActiveSubLocalitySlugs().map((slug) => ({
    locality: slug,
  }));
}

export async function generateMetadata({
  params,
}: SubLocalityPageProps): Promise<Metadata> {
  const { locality: slug } = await params;
  const data = getLocality(slug);

  if (!data || slug === "patna") {
    return {};
  }

  return {
    title: {
      absolute: data.seoTitle,
    },
    description: data.seoDescription,
    keywords: data.keywords,
    alternates: {
      canonical: data.canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: data.canonicalUrl,
      title: data.seoTitle,
      description: data.seoDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${data.seoTitle} — ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.seoTitle,
      description: data.seoDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function SubLocalityPage({
  params,
}: SubLocalityPageProps) {
  const { locality: slug } = await params;
  const data = getLocality(slug);

  // If data does not exist or if accessing /patna/patna, return 404
  if (!data || slug === "patna") {
    notFound();
  }

  return <LocalityLandingPage data={data} />;
}

