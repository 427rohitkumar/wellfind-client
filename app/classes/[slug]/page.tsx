import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { classesData } from "@/content/classes";
import { ClassView } from "@/components/classes/ClassView";
import { siteConfig } from "@/config/site";

const validClassSlugs = [
  "ukg",
  "class-1",
  "class-2",
  "class-3",
  "class-4",
  "class-5",
  "class-6",
  "class-7",
  "class-8",
  "class-9",
  "class-10",
];

export function generateStaticParams() {
  return validClassSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = classesData[slug];
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/classes/${slug}/`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${siteConfig.url}/classes/${slug}/`,
    },
  };
}

export default async function SingleClassPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = classesData[slug];

  if (!data) {
    notFound();
  }

  return <ClassView data={data} />;
}

