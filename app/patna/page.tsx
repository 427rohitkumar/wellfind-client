import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getLocality } from "@/data/localities";
import { LocalityLandingPage } from "@/components/locality/LocalityLandingPage";

export const instant = false;

export async function generateMetadata(): Promise<Metadata> {
  const data = getLocality("patna");

  if (!data) {
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
          url: siteConfig.ogImage,
          width: 1741,
          height: 908,
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

export default function PatnaMainPage() {
  const data = getLocality("patna");

  if (!data) {
    notFound();
  }

  return <LocalityLandingPage data={data} />;
}

