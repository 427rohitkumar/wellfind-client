import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generalFaqs } from "@/content/faqs";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { WhatsAppCTA } from "@/components/inquiry/WhatsAppCTA";
import { HowItWorksProcess } from "@/components/home/HowItWorksProcess";
import { ManagedLearningJourneySection } from "@/components/home/ManagedLearningJourneySection";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustMetricsSection } from "@/components/home/TrustMetricsSection";
import { ProgressTrackingSection } from "@/components/home/ProgressTrackingSection";
import { PatnaLocationsSection } from "@/components/home/PatnaLocationsSection";
import { TeachersSection } from "@/components/home/TeachersSection";
import { TeacherProfileReviewSection } from "@/components/home/TeacherProfileReviewSection";
import { TeacherNetworkPreviewSection } from "@/components/home/TeacherNetworkPreviewSection";

export const metadata: Metadata = {
  title: {
    absolute: "Wellfind Academic | Managed One-to-One Education",
  },
  description:
    "Find the right teacher for your child with Wellfind Academic. Quality-managed one-to-one home education for UKG to Class 10 in Patna, with structured learning and progress coordination.",
  keywords: [
    "home tuition in Patna",
    "home tutor in Patna",
    "one-to-one education",
    "UKG to Class 10 tuition",
    "managed home education",
    "Wellfind Academic",
  ],
  alternates: {
    canonical: "https://www.wellfindacademic.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.wellfindacademic.com/",
    title: "Wellfind Academic | Managed One-to-One Education",
    description:
      "Quality-managed one-to-one home education for UKG to Class 10 in Patna. The right teacher, structured learning, and progress you can see.",
    siteName: "Wellfind Academic",
    images: [
      {
        url: "https://www.wellfindacademic.com/OG-Image.png",
        width: 1741,
        height: 908,
        alt: "Wellfind Academic — managed one-to-one education for children from UKG to Class 10.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellfind Academic | Managed One-to-One Education",
    description:
      "Quality-managed one-to-one home education for UKG to Class 10 in Patna. The right teacher, structured learning, and progress you can see.",
    images: ["https://www.wellfindacademic.com/OG-Image.png"],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* SECTION 1: HERO (Pixel-Perfect Figma Reference Implementation) */}
      <HeroSection />

      {/* SECTION 2: HOW IT WORKS (Visual 4-Step Student & Parent Journey) */}
      <HowItWorksProcess />

      {/* SECTION 3: MANAGED ONE-TO-ONE EDUCATION MODEL */}
      <ManagedLearningJourneySection />

      {/* SECTION 4: TRUST METRICS (Key Credibility Figures) */}
      <TrustMetricsSection />

      {/* SECTION 5: PATNA LOCATIONS (Wellfind Teachers Active Across Patna) */}
      <PatnaLocationsSection />

      {/* SECTION 6: PROGRESS TRACKING (Academic Growth & Infographic Cards) */}
      <ProgressTrackingSection />

      {/* SECTION 6: TEACHERS & 100% REPLACEMENT GUARANTEE */}
      <TeachersSection />

      {/* SECTION 7: TEACHER PROFILE REVIEW JOURNEY */}
      <TeacherProfileReviewSection />

      {/* SECTION 8: SECONDARY TEACHER NETWORK PREVIEW */}
      <TeacherNetworkPreviewSection />

      {/* SECTION 9: FAQS */}
      <section className="py-16 md:py-24 bg-white border-b border-[#D7E2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            description="Clear answers to common questions parents ask about our home tuition matching in Patna."
          />

          <Accordion items={generalFaqs} />

          <div className="mt-10 p-5 rounded-xl bg-[#EAF0F8] border border-[#D7E2EE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[#344054] text-center sm:text-left">
              <span className="font-semibold text-[#101D36] block">
                Have a specific question not listed here?
              </span>
              <span>Speak directly with our team or send your inquiry.</span>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <WhatsAppCTA size="sm" variant="accent" label="Ask on WhatsApp" />
              <Button variant="secondary" size="sm" href="/contact/">
                Contact Form
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL INQUIRY CTA & EMBEDDED FORM */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#EAF0F8] to-white" id="inquire">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge variant="subtle" size="md" className="mb-3">
              Get Started Today
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101D36] tracking-tight">
              Looking for a Suitable Home Tutor?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#53647D] max-w-xl mx-auto">
              Share your requirements with Wellfind Academic. We will review
              teacher availability in your Patna locality and connect with you.
            </p>
          </div>

          <InquiryForm />
        </div>
      </section>
    </div>
  );
}
