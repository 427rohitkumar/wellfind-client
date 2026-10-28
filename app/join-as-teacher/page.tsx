import React from "react";
import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ClipboardList,
  MapPin,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { TeacherApplicationForm } from "@/components/teacher/TeacherApplicationForm";

export const metadata: Metadata = {
  title: "Join as a Home Tutor in Patna | Wellfind Academic",
  description:
    "Share your teaching profile with Wellfind Academic and connect with suitable home-tuition requirements across Patna when available.",
  alternates: {
    canonical: `${siteConfig.url}/join-as-teacher/`,
  },
  openGraph: {
    title: "Join as a Home Tutor in Patna | Wellfind Academic",
    description:
      "Join the Wellfind Academic teacher network for suitable home-tuition opportunities across Patna.",
    url: `${siteConfig.url}/join-as-teacher/`,
  },
};

const teacherSteps = [
  {
    number: "01",
    title: "Share your profile",
    description: "Tell us about your qualification, subjects, experience and preferred localities.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "We review the fit",
    description: "We discuss your class, subject, travel and availability fit before sharing details.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Receive relevant enquiries",
    description: "When a suitable requirement is available, we coordinate the next conversation.",
    icon: BookOpenCheck,
  },
];

const teacherBenefits = [
  { title: "Local enquiries", description: "Focus on home-tuition requirements within a practical travel radius.", icon: MapPin },
  { title: "Better subject fit", description: "Share the classes and subjects you are comfortable teaching.", icon: BookOpenCheck },
  { title: "Flexible availability", description: "Tell us the time windows that work with your schedule.", icon: UserRoundCheck },
  { title: "Clear introduction", description: "Parents and teachers discuss the fit before regular classes begin.", icon: CheckCircle2 },
];

export default function JoinAsTeacherPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-[#D7E2EE] bg-[#101D36] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#35D0BA]/15 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-[#5C8FE8]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-5 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <Breadcrumbs items={[{ label: "For Teachers" }]} className="mb-8 text-slate-300" />
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <Badge variant="subtle" size="md" className="border-[#35D0BA]/40 bg-[#1B2B47] text-[#B9F3E9]">
                <UserRoundCheck className="mr-1 h-3.5 w-3.5 text-[#35D0BA]" />
                Teacher partner network
              </Badge>
              <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-[58px]">
                Turn your teaching experience into the <span className="text-[#35D0BA]">right home-tuition opportunity.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Share your profile with Wellfind Academic. We review your teaching fit and coordinate with you when a relevant student requirement is available in Patna.
              </p>
              <a href="#teacher-application" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#35D0BA] px-5 py-3 text-sm font-bold text-[#101D36] shadow-sm transition-colors hover:bg-[#2BBFA9]">
                Apply as a home tutor <ArrowDown className="h-4 w-4" />
              </a>
              <p className="mt-3 text-xs text-slate-400">Profile review first. Suitable enquiry when available.</p>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div aria-hidden="true" className="absolute left-8 right-8 top-1/2 hidden border-t-2 border-dashed border-[#35D0BA]/40 sm:block" />
              <div className="relative grid gap-3 sm:grid-cols-3 sm:gap-4">
                {teacherSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.number} className="relative rounded-3xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur-sm sm:min-h-[210px] sm:p-5">
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#35D0BA]/15 text-[#35D0BA]"><Icon className="h-5 w-5" /></div>
                        <span className="text-xs font-black tracking-wider text-slate-400">{step.number}</span>
                      </div>
                      <h2 className="mt-6 text-sm font-extrabold text-white">{step.title}</h2>
                      <p className="mt-2 text-xs leading-relaxed text-slate-300">{step.description}</p>
                      {index < teacherSteps.length - 1 && <ArrowRight aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-[#35D0BA] sm:block" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#D7E2EE] bg-[#F4F8FC] py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[#0F9F8C]">Why teachers work with us</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#101D36] sm:text-4xl">Your profile. Your fit. Your area.</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#53647D] sm:text-base">You tell us where your teaching works best. We use that context while reviewing suitable requirements.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teacherBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="rounded-2xl border border-[#D7E2EE] bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D7F6F1] text-[#0F6F63]"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 text-base font-extrabold text-[#101D36]">{benefit.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#53647D]">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="teacher-application" className="scroll-mt-20 bg-[#EAF0F8] py-14 sm:py-18 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-8">
          <div className="lg:pt-8">
            <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[#0F9F8C]">Start your profile</span>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#101D36] sm:text-4xl">Tell us how you teach.</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#53647D] sm:text-base">
              This is a teacher-side enquiry. It helps us understand your strengths, preferred classes and practical travel area before we coordinate any introduction.
            </p>
            <div className="mt-7 space-y-3">
              {["UKG to Class 10 requirements", "Patna and surrounding localities", "Parent introduction before regular classes"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-semibold text-[#344054]"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#35D0BA]" />{item}</div>
              ))}
            </div>
          </div>
          <TeacherApplicationForm />
        </div>
      </section>
    </div>
  );
}
