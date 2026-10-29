import React from "react";
import { siteConfig } from "@/config/site";
import { LocalityData } from "@/data/localities";
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

export interface LocalityLandingPageProps {
  data: LocalityData;
}

export function LocalityLandingPage({ data }: LocalityLandingPageProps) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.seoTitle,
    serviceType: data.serviceName,
    description: data.seoDescription,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: data.name,
    },
    url: data.canonicalUrl,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqsSection.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* SECTION 1: HERO */}
      <HeroSection
        title={
          <>
            {data.hero.headlineLine1}{" "}
            <span className="text-[#35D0BA]">{data.hero.headlineHighlight1}</span>.{" "}
            <br />
            {data.hero.headlineLine2}{" "}
            <span className="text-[#35D0BA]">{data.hero.headlineHighlight2}</span>.
          </>
        }
        description={data.hero.description}
        ctaText={data.hero.ctaText}
        ctaHref={data.hero.ctaHref}
        secondaryCtaText={data.hero.secondaryCtaText}
        secondaryCtaHref={data.hero.secondaryCtaHref}
        locality={data.name}
      />

      {/* SECTION 2: HOW IT WORKS */}
      <HowItWorksProcess
        eyebrow={data.howItWorks.eyebrow}
        headingPrefix={data.howItWorks.headingPrefix}
        headingHighlight={data.howItWorks.headingHighlight}
        steps={data.howItWorks.steps}
      />

      {/* SECTION 3: MANAGED ONE-TO-ONE EDUCATION MODEL */}
      <ManagedLearningJourneySection
        eyebrow={data.managedModel.eyebrow}
        heading={
          <>
            {data.managedModel.heading}{" "}
            <span className="text-[#0F9F8C]">
              {data.managedModel.headingHighlight}
            </span>
          </>
        }
        description={data.managedModel.description}
      />

      {/* SECTION 4: TRUST METRICS */}
      <TrustMetricsSection />

      {/* SECTION 5: PATNA LOCATIONS */}
      <PatnaLocationsSection
        badge={data.locationsSection.badge}
        heading={
          <>
            {data.locationsSection.headingPrefix}{" "}
            <span className="text-[#35D0BA]">
              {data.locationsSection.headingHighlight}
            </span>
          </>
        }
        description={data.locationsSection.description}
      />

      {/* SECTION 6: PROGRESS TRACKING */}
      <ProgressTrackingSection
        eyebrow={data.progressTracking.eyebrow}
        titleLine1={data.progressTracking.titleLine1}
        titleLine2={data.progressTracking.titleLine2}
      />

      {/* SECTION 7: TEACHERS & 100% REPLACEMENT GUARANTEE */}
      <TeachersSection
        badge={data.teachersSection.badge}
        heading={
          <>
            <span className="text-[#1469D8]">
              {data.teachersSection.headingHighlight}
            </span>{" "}
            {data.teachersSection.heading}
          </>
        }
        description={data.teachersSection.description}
      />

      {/* SECTION 8: TEACHER PROFILE REVIEW JOURNEY */}
      <TeacherProfileReviewSection
        badge={data.teacherEvaluation.badge}
        heading={
          <>
            {data.teacherEvaluation.heading}{" "}
            <span className="text-[#0F9F8C]">
              {data.teacherEvaluation.headingHighlight}
            </span>
          </>
        }
        description={data.teacherEvaluation.description}
      />

      {/* SECTION 9: SECONDARY TEACHER NETWORK PREVIEW */}
      <TeacherNetworkPreviewSection
        badge={data.teacherNetwork.badge}
        heading={
          <>
            {data.teacherNetwork.headingPrefix}{" "}
            <span className="text-[#0F9F8C]">
              {data.teacherNetwork.headingHighlight}
            </span>
          </>
        }
        description={data.teacherNetwork.description}
        ctaText={data.teacherNetwork.ctaText}
        ctaHref={data.teacherNetwork.ctaHref}
      />

      {/* SECTION 10: FAQS */}
      <section className="py-16 md:py-24 bg-white border-b border-[#D7E2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={data.faqsSection.eyebrow}
            title={data.faqsSection.title}
            description={data.faqsSection.description}
          />

          <Accordion items={data.faqsSection.faqs} />

          <div className="mt-10 p-5 rounded-xl bg-[#EAF0F8] border border-[#D7E2EE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[#344054] text-center sm:text-left">
              <span className="font-semibold text-[#101D36] block">
                Have a specific question not listed here?
              </span>
              <span>Speak directly with our team or send your inquiry.</span>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <WhatsAppCTA
                size="sm"
                variant="accent"
                label="Ask on WhatsApp"
                customMessage={`Hello Wellfind Academic, I have a question regarding home tuition in ${data.name}.`}
              />
              <Button variant="secondary" size="sm" href="/contact/">
                Contact Form
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL INQUIRY CTA & EMBEDDED FORM */}
      <section
        className="py-16 md:py-24 bg-gradient-to-b from-[#EAF0F8] to-white"
        id="inquire"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge variant="subtle" size="md" className="mb-3">
              {data.inquirySection.badge}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101D36] tracking-tight">
              {data.inquirySection.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#53647D] max-w-xl mx-auto">
              {data.inquirySection.description}
            </p>
          </div>

          <InquiryForm initialLocality={data.inquirySection.initialLocality} />
        </div>
      </section>
    </div>
  );
}
