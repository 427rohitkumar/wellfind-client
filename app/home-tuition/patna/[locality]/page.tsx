import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locationsData } from "@/content/locations";
import { LocalityView } from "@/components/locality/LocalityView";
import { siteConfig } from "@/config/site";

const validSubLocalities = [
  "kankarbagh",
  "danapur",
  "boring-road",
  "raja-bazar",
  "hartali-mor",
];

export function generateStaticParams() {
  return validSubLocalities.map((slug) => ({
    locality: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locality: string }>;
}): Promise<Metadata> {
  const { locality: slug } = await params;
  const data = locationsData[slug];
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/home-tuition/patna/${slug}/`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${siteConfig.url}/home-tuition/patna/${slug}/`,
    },
  };
}

export default async function SubLocalityPage({
  params,
}: {
  params: Promise<{ locality: string }>;
}) {
  const { locality: slug } = await params;
  const data = locationsData[slug];

  if (!data || slug === "patna") {
    notFound();
  }

  return <LocalityView data={data} />;
}

