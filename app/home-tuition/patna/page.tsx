import React from "react";
import type { Metadata } from "next";
import { locationsData } from "@/content/locations";
import { LocalityView } from "@/components/locality/LocalityView";
import { siteConfig } from "@/config/site";

const locality = locationsData.patna;

export const metadata: Metadata = {
  title: locality.metaTitle,
  description: locality.metaDescription,
  alternates: {
    canonical: `${siteConfig.url}/patna`,
  },
  openGraph: {
    title: locality.metaTitle,
    description: locality.metaDescription,
    url: `${siteConfig.url}/patna`,
  },
};

export default function PatnaPage() {
  return <LocalityView data={locality} />;
}
