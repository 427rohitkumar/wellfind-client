import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  UserRoundCheck,
} from "lucide-react";

const journey = [
  {
    number: "01",
    title: "Share your profile",
    description: "Tell us what you teach and where you teach.",
    icon: ClipboardList,
    color: "#35D0BA",
  },
  {
    number: "02",
    title: "Profile review",
    description: "We understand your class, subject and experience fit.",
    icon: UserRoundCheck,
    color: "#5C8FE8",
  },
  {
    number: "03",
    title: "Relevant enquiries",
    description: "Receive suitable home-tuition requirements when available.",
    icon: BookOpenCheck,
    color: "#F2B84B",
  },
];

export interface TeacherNetworkPreviewSectionProps {
  badge?: string;
  heading?: React.ReactNode;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function TeacherNetworkPreviewSection({
  badge = "For teachers & home tutors",
  heading,
  description = "Wellfind Academic also works with teachers who want to connect their experience with suitable student requirements across Patna.",
  ctaText = "Apply as a Home Tutor",
  ctaHref = "/join-as-teacher",
}: TeacherNetworkPreviewSectionProps = {}) {
  return (
    <section
      id="teacher-network-preview"
      aria-label="Wellfind Academic teacher network"
      className="relative overflow-hidden border-b border-[#D7E2EE] bg-white py-14 sm:py-18 lg:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-8 h-56 w-56 rounded-full bg-[#35D0BA]/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#5C8FE8]/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="max-w-md">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D7E2EE] bg-[#F4F8FC] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#53647D]">
              <GraduationCap className="h-3.5 w-3.5 text-[#35D0BA]" />
              {badge}
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#101D36] sm:text-4xl">
              {heading ?? (
                <>
                  Are you a teacher? <span className="text-[#0F9F8C]">Get matched with home-tuition enquiries.</span>
                </>
              )}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#53647D] sm:text-base">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Class fit", "Subject fit", "Locality fit"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-[#B9E9E1] bg-[#F3FCFA] px-3 py-1.5 text-xs font-bold text-[#0F6F63]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#35D0BA]" />
                  {item}
                </span>
              ))}
            </div>

            <Link
              href={ctaHref}
              className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#35D0BA] px-6 py-4 text-base font-black text-[#101D36] shadow-lg shadow-[#35D0BA]/30 transition-all hover:-translate-y-0.5 hover:bg-[#2BC1AB] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101D36] focus-visible:ring-offset-2 sm:w-auto"
            >
              {ctaText}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.75} />
            </Link>
            <p className="mt-3 text-xs font-semibold text-[#53647D]">
              This is for teachers. Parents looking for a tutor can use &ldquo;Find a Tutor&rdquo; at the top of the page.
            </p>
          </div>

          <div className="relative rounded-[28px] border border-[#D7E2EE] bg-[#F4F8FC] p-4 shadow-sm sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[#0F6F63]">How it works for teachers</span>
              <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-[#53647D] shadow-sm">3 simple steps</span>
            </div>

            <ol className="relative space-y-3">
              <span
                aria-hidden="true"
                className="absolute bottom-10 left-[29px] top-10 w-0.5 border-l-2 border-dashed border-[#B9E9E1] sm:left-[33px]"
              />
              {journey.map((step) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.number}
                    className="relative flex items-center gap-4 rounded-2xl border border-white bg-white p-4 shadow-sm sm:p-5"
                  >
                    <div
                      className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl sm:h-14 sm:w-14"
                      style={{ backgroundColor: `${step.color}26`, color: step.color }}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2.1} />
                      <span
                        className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white text-[10px] font-black text-white"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.number.replace(/^0/, "")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[#101D36]">{step.title}</h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-[#53647D]">{step.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <Link
              href={ctaHref}
              className="group mt-4 flex items-center justify-between gap-3 rounded-2xl bg-[#101D36] px-5 py-4 text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#1E3154] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0BA] focus-visible:ring-offset-2"
            >
              <span>
                <span className="block text-sm font-black">Ready to start? Begin with step 1</span>
                <span className="mt-0.5 block text-xs text-slate-300">Share your profile and we take it from there.</span>
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#35D0BA] text-[#101D36] transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-5 w-5" strokeWidth={2.75} />
              </span>
            </Link>

            <p className="mt-3 text-center text-[11px] font-semibold text-[#8A9EB8]">
              Teacher applications and details are handled separately from the parent enquiry journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
