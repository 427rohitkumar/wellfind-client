import React from "react";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  CheckCircle,
  HelpCircle,
  Target,
  Sparkles,
} from "lucide-react";
import { ClassData } from "@/content/classes";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { WhatsAppCTA } from "@/components/inquiry/WhatsAppCTA";

interface ClassViewProps {
  data: ClassData;
}

export function ClassView({ data }: ClassViewProps) {
  const canonicalUrl = `${siteConfig.url}/classes/${data.slug}/`;

  const breadcrumbs = [
    { label: "Classes", href: "/classes/" },
    { label: data.name },
  ];

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `Home Tuition for ${data.name} in Patna`,
    description: data.summary,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: canonicalUrl,
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      {/* TOP HEADER & BREADCRUMBS */}
      <section className="bg-white border-b border-[#D7E2EE] pt-6 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="subtle" size="md">
                <GraduationCap className="w-3.5 h-3.5 text-[#35D0BA] mr-1" />
                {data.stage} Level • Patna Home Tuition
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101D36] leading-[1.15]">
              {data.h1}
            </h1>

            <p className="text-lg sm:text-xl text-[#344054] font-medium leading-relaxed">
              {data.summary}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button variant="accent" size="md" href="#inquire">
                Find a Tutor for {data.name}
              </Button>
              <WhatsAppCTA
                size="md"
                variant="secondary"
                customMessage={`Hello Wellfind Academic, I am looking for a home tutor for ${data.name} in Patna.`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM HIGHLIGHTS & LEARNING OUTCOMES */}
      <section className="py-12 sm:py-16 bg-[#EAF0F8] border-b border-[#D7E2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Academic Focus & Outcomes */}
            <div className="lg:col-span-7 space-y-6">
              <Card className="p-6 sm:p-8 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#101D36] flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#35D0BA]" />
                  <span>Curriculum &amp; Syllabus Focus</span>
                </h2>
                <p className="text-[#344054] text-sm sm:text-base leading-relaxed">
                  {data.curriculumFocus}
                </p>

                <div className="pt-2">
                  <h3 className="text-base font-semibold text-[#101D36] mb-2">
                    Teaching Approach for this Stage
                  </h3>
                  <p className="text-[#53647D] text-sm leading-relaxed">
                    {data.teachingApproach}
                  </p>
                </div>
              </Card>

              {/* Expected Learning Outcomes */}
              <Card className="p-6 sm:p-8 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#101D36] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#35D0BA]" />
                  <span>Targeted Learning Outcomes</span>
                </h2>
                <ul className="space-y-3 text-sm text-[#344054]">
                  {data.learningOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#35D0BA] shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Right Column: Key Subjects & Parent Concerns */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#101D36] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#35D0BA]" />
                  <span>Core Subjects Covered</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#344054]">
                  {data.keySubjects.map((subject) => (
                    <li key={subject} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#35D0BA]"></span>
                      <span>{subject}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#101D36] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#35D0BA]" />
                  <span>Parent Concerns We Address</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#344054]">
                  {data.parentConcernsAddressed.map((concern, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#35D0BA] font-bold">•</span>
                      <span>{concern}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Other Classes Links */}
              <Card className="p-6 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#53647D]">
                  Explore Other Classes
                </h3>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {siteConfig.classes.map((cls) => (
                    <Link
                      key={cls.slug}
                      href={cls.href}
                      className={`p-2 rounded text-center font-medium transition-colors ${
                        cls.slug === data.slug
                          ? "bg-[#101D36] text-white"
                          : "bg-[#EAF0F8] text-[#344054] hover:bg-[#D7F6F1] hover:text-[#101D36]"
                      }`}
                    >
                      {cls.label}
                    </Link>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE LOCALITIES WHERE THIS CLASS IS AVAILABLE */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#D7E2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Coverage"
            title={`Where in Patna Can We Arrange ${data.name} Tutors?`}
            description="We connect families with nearby tutors across our active Patna service zones."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {siteConfig.serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={area.href}
                className="group p-3.5 rounded-xl border border-[#D7E2EE] bg-[#EAF0F8]/50 hover:bg-white hover:border-[#35D0BA] hover:shadow-xs transition-all text-center flex flex-col justify-center items-center"
              >
                <span className="font-bold text-[#101D36] group-hover:text-[#0F6F63] transition-colors text-sm">
                  {area.name}
                </span>
                <span className="text-[10px] text-[#53647D] mt-0.5">
                  View Tutors
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLASS-SPECIFIC FAQS */}
      <section className="py-12 sm:py-16 bg-[#EAF0F8] border-b border-[#D7E2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Common Questions"
            title={`FAQs: ${data.name} Home Tuition in Patna`}
            description={`Answers to questions parents frequently ask regarding ${data.name} tutoring.`}
          />

          <Accordion items={data.faqs} />
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="py-12 sm:py-16 bg-white" id="inquire">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm initialClass={data.name} />
        </div>
      </section>
    </div>
  );
}
