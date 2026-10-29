import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { ClassesHeroSection } from "@/components/classes/ClassesHeroSection";
import { QuickClassSelectionSection } from "@/components/classes/QuickClassSelectionSection";
import { SubjectsWeCoverSection } from "@/components/classes/SubjectsWeCoverSection";

export const metadata: Metadata = {
  title: "Home Tuition by Class (UKG to Class 10) in Patna | Wellfind Academic",
  description:
    "Explore home tuition for UKG through Class 10 in Patna. Tailored curriculum support for CBSE, ICSE, and Bihar Board students across core subjects.",
  alternates: {
    canonical: `${siteConfig.url}/classes/`,
  },
  openGraph: {
    title: "Home Tuition by Class (UKG to Class 10) in Patna | Wellfind Academic",
    description:
      "Explore home tuition for UKG through Class 10 in Patna. Tailored curriculum support for CBSE, ICSE, and Bihar Board students.",
    url: `${siteConfig.url}/classes/`,
  },
};

export default function ClassesOverviewPage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION & FEATURE STRIP */}
      <ClassesHeroSection />

      {/* 2. QUICK CLASS SELECTION SECTION */}
      <QuickClassSelectionSection />

      {/* 3. SUBJECTS WE COVER SECTION */}
      <SubjectsWeCoverSection />

      {/* 4. TUTOR ENQUIRY FORM */}
      <section className="py-14 sm:py-18 lg:py-20 bg-white" id="inquire">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </div>
  );
}
