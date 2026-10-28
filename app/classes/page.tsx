import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { siteConfig } from "@/config/site";
import { classesData } from "@/content/classes";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { WhatsAppCTA } from "@/components/inquiry/WhatsAppCTA";

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
  const classesList = Object.values(classesData);

  const stages = [
    {
      title: "Pre-Primary (UKG)",
      description:
        "Building gentle foundations in phonics, early number recognition, and handwriting routines.",
      classes: classesList.filter((c) => c.stage === "Pre-Primary"),
    },
    {
      title: "Primary School (Classes 1 to 5)",
      description:
        "Developing strong arithmetic skills, reading comprehension, disciplined homework habits, and all-subject support.",
      classes: classesList.filter((c) => c.stage === "Primary"),
    },
    {
      title: "Middle School (Classes 6 to 8)",
      description:
        "Navigating the transition to distinct Science and Math disciplines, linear equations, and analytical thinking.",
      classes: classesList.filter((c) => c.stage === "Middle School"),
    },
    {
      title: "Secondary School (Classes 9 & 10)",
      description:
        "Rigorous concept clarity, NCERT exemplar problem solving, previous years board papers, and exam time management.",
      classes: classesList.filter((c) => c.stage === "Secondary"),
    },
  ];

  return (
    <div className="flex flex-col">
      {/* HEADER */}
      <section className="bg-white border-b border-[#D7E2EE] pt-6 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Classes" }]} className="mb-6" />

          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="subtle" size="md">
                <GraduationCap className="w-3.5 h-3.5 text-[#35D0BA] mr-1" />
                Comprehensive Grade Coverage
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101D36] leading-[1.15]">
              Home Tuition for UKG to Class 10 in Patna
            </h1>

            <p className="text-lg sm:text-xl text-[#344054] font-medium leading-relaxed">
              Every student learns at a different pace. We connect parents with
              qualified home tutors matched to their child&apos;s specific grade
              curriculum, school board, and subject requirements.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button variant="accent" size="md" href="#inquire">
                Request a Tutor for Your Child
              </Button>
              <WhatsAppCTA
                size="md"
                variant="secondary"
                customMessage="Hello Wellfind Academic, I am looking for a home tutor for my child in Patna."
              />
            </div>
          </div>
        </div>
      </section>

      {/* STAGES BREAKDOWN */}
      <section className="py-12 sm:py-16 bg-[#EAF0F8] border-b border-[#D7E2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {stages.map((stage, idx) => (
            <div key={idx} className="space-y-4">
              <div className="border-b border-[#D7E2EE] pb-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#101D36]">
                  {stage.title}
                </h2>
                <p className="text-sm text-[#53647D] mt-1">
                  {stage.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {stage.classes.map((cls) => (
                  <Link
                    key={cls.slug}
                    href={`/classes/${cls.slug}/`}
                    className="group block"
                  >
                    <Card
                      hoverEffect
                      className="h-full flex flex-col justify-between p-6 border-[#D7E2EE] group-hover:border-[#35D0BA]"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-[#101D36] group-hover:text-[#0F6F63] transition-colors">
                            {cls.name}
                          </h3>
                          <Badge variant="subtle" size="sm">
                            {cls.stage}
                          </Badge>
                        </div>
                        <p className="text-xs text-[#53647D] line-clamp-3 leading-relaxed">
                          {cls.summary}
                        </p>

                        <div className="pt-2">
                          <span className="text-[11px] font-semibold text-[#53647D] uppercase tracking-wider block mb-1">
                            Key Subjects:
                          </span>
                          <div className="flex flex-wrap gap-1 text-[11px] text-[#344054]">
                            {cls.keySubjects.slice(0, 3).map((sub) => (
                              <span
                                key={sub}
                                className="px-2 py-0.5 rounded bg-[#EAF0F8] border border-[#D7E2EE]"
                              >
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#D7E2EE]/60 flex items-center justify-between text-xs font-semibold text-[#101D36] group-hover:text-[#0F6F63]">
                        <span>Detailed Syllabus &amp; Tutors</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INQUIRY SECTION */}
      <section className="py-12 sm:py-16 bg-white" id="inquire">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </div>
  );
}
