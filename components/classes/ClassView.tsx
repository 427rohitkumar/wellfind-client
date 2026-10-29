import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  GraduationCap,
  HelpCircle,
  MapPin,
  Sparkles,
  Target,
} from "lucide-react";
import type { ClassData } from "@/content/classes";
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

      <section className="relative overflow-hidden bg-[#101D36] text-white">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#35D0BA]/15 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-[#35D0BA]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6 sm:pb-20 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="mb-10 [&_*]:text-white/70" />

          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="max-w-3xl">
              <Badge
                variant="subtle"
                size="md"
                className="border-white/20 bg-white/10 text-[#D7F6F1]"
              >
                <GraduationCap className="mr-1.5 h-4 w-4 text-[#35D0BA]" />
                {data.stage} · Patna home tuition
              </Badge>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {data.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                {data.summary}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="accent"
                  size="lg"
                  href="#inquire"
                  className="w-full sm:w-auto"
                >
                  Find a Tutor for {data.name}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <WhatsAppCTA
                  size="lg"
                  variant="secondary"
                  className="w-full border-white/20 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
                  customMessage={`Hello Wellfind Academic, I am looking for a home tutor for ${data.name} in Patna.`}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              <HeroStat label="Learning stage" value={data.stage} />
              <HeroStat label="Subjects covered" value={`${data.keySubjects.length}+`} />
              <HeroStat label="Personalised support" value="1-to-1" />
              <HeroStat label="Service area" value="Patna" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#D7E2EE] bg-[#EAF0F8] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="A clear learning plan"
            title={`Support designed for ${data.name}`}
            description="Every session is shaped around your child's current syllabus, confidence, and learning goals."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              icon={<Target className="h-5 w-5" />}
              title="Curriculum focus"
              content={data.curriculumFocus}
            />
            <InfoCard
              icon={<Sparkles className="h-5 w-5" />}
              title="Teaching approach"
              content={data.teachingApproach}
            />
            <InfoCard
              icon={<BookOpen className="h-5 w-5" />}
              title="Core subjects"
              content={`${data.keySubjects.length} subject areas covered`}
              list={data.keySubjects}
            />
            <InfoCard
              icon={<HelpCircle className="h-5 w-5" />}
              title="Parent concerns"
              content="Practical support for common learning hurdles"
              list={data.parentConcernsAddressed}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[#D7E2EE] bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,.9fr)] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Progress you can see"
              title="Learning outcomes that build confidence"
              description={`What a focused ${data.name} learning plan can help your child practise consistently.`}
              align="left"
            />
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {data.learningOutcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex gap-3 rounded-xl border border-[#D7E2EE] bg-[#F8FAFC] p-4 text-sm leading-6 text-[#344054]"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#35D0BA]" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="self-start border-[#101D36] bg-[#101D36] p-6 text-white shadow-md sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#35D0BA]">
              Why families choose home tuition
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight">
              A tutor who adapts to your child
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              One-to-one attention gives your child room to ask questions,
              practise at the right pace, and prepare for school assessments
              without unnecessary pressure.
            </p>
            <Button
              variant="accent"
              href="#inquire"
              className="mt-7 w-full"
            >
              Discuss your requirements
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Card>
        </div>
      </section>

      <section className="border-b border-[#D7E2EE] bg-[#EAF0F8] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Coverage"
            title={`Find ${data.name} tutors across Patna`}
            description="We connect families with nearby tutors across our active Patna service zones."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
            {siteConfig.serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={area.href}
                className="group flex flex-col items-center justify-center rounded-xl border border-[#D7E2EE] bg-white p-4 text-center transition-all hover:-translate-y-0.5 hover:border-[#35D0BA] hover:shadow-md"
              >
                <MapPin className="mb-1.5 h-4 w-4 text-[#35D0BA]" />
                <span className="text-sm font-bold text-[#101D36] group-hover:text-[#0F6F63]">
                  {area.name}
                </span>
                <span className="mt-0.5 text-[10px] text-[#53647D]">
                  View tutors
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#D7E2EE] bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Common questions"
            title={`${data.name} home tuition FAQs`}
            description={`Answers to questions parents frequently ask about ${data.name} tutoring.`}
          />
          <Accordion items={data.faqs} />
        </div>
      </section>

      <section className="bg-[#EAF0F8] py-12 sm:py-16" aria-labelledby="explore-classes">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0F6F63]">
                Explore classes
              </p>
              <h2 id="explore-classes" className="mt-2 text-2xl font-bold text-[#101D36]">
                Find support for every academic stage
              </h2>
            </div>
            <Link
              href="/classes/"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F6F63] hover:text-[#101D36]"
            >
              View all classes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-11">
            {siteConfig.classes.map((cls) => (
              <Link
                key={cls.slug}
                href={cls.href}
                aria-current={cls.slug === data.slug ? "page" : undefined}
                className={`rounded-lg px-2 py-3 text-center text-xs font-bold transition-colors ${
                  cls.slug === data.slug
                    ? "bg-[#101D36] text-white"
                    : "bg-white text-[#344054] hover:bg-[#D7F6F1] hover:text-[#101D36]"
                }`}
              >
                {cls.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16" id="inquire">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <InquiryForm initialClass={data.name} />
        </div>
      </section>
    </div>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
      <p className="text-xs text-white/55">{label}</p>
      <p className="mt-1 text-sm font-bold text-white">{value}</p>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  content,
  list,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  list?: string[];
}) {
  return (
    <Card className="h-full p-5 transition-shadow hover:shadow-md">
      <div className="flex items-center gap-2.5 text-[#0F6F63]">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D7F6F1]">
          {icon}
        </span>
        <h3 className="font-bold text-[#101D36]">{title}</h3>
      </div>
      <p className="mt-4 text-sm leading-6 text-[#53647D]">{content}</p>
      {list ? (
        <ul className="mt-4 space-y-2 border-t border-[#D7E2EE] pt-4">
          {list.map((item) => (
            <li key={item} className="flex gap-2 text-xs leading-5 text-[#344054]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#35D0BA]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
}
