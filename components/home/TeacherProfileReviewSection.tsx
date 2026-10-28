import React from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpenCheck,
  BriefcaseBusiness,
  Check,
  GraduationCap,
  MapPin,
  MessageSquareQuote,
  ShieldCheck,
} from "lucide-react";

const reviewSteps = [
  {
    number: "01",
    title: "Qualification",
    shortTitle: "Academic qualification",
    description: "Education and credentials reviewed.",
    icon: GraduationCap,
    accent: "#35D0BA",
  },
  {
    number: "02",
    title: "Subject Fit",
    shortTitle: "Subject / class suitability",
    description: "The right subject and class level checked.",
    icon: BookOpenCheck,
    accent: "#5C8FE8",
  },
  {
    number: "03",
    title: "Locality Fit",
    shortTitle: "Locality and travel",
    description: "Travel distance and availability discussed.",
    icon: MapPin,
    accent: "#F2B84B",
  },
  {
    number: "04",
    title: "Experience",
    shortTitle: "Teaching experience",
    description: "Teaching background and approach discussed.",
    icon: BriefcaseBusiness,
    accent: "#B67BE8",
  },
  {
    number: "05",
    title: "Feedback",
    shortTitle: "Parent feedback",
    description: "Feedback after introduction helps us improve the fit.",
    icon: MessageSquareQuote,
    accent: "#F28B72",
  },
] as const;

function DesktopStep({
  step,
  isLast,
}: {
  step: (typeof reviewSteps)[number];
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <div className="relative flex min-w-0 flex-1 flex-col items-center text-center">
      <div className="relative z-10 flex h-[74px] w-[74px] items-center justify-center rounded-[24px] border-4 border-white bg-white shadow-lg" style={{ boxShadow: `0 10px 25px ${step.accent}30` }}>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: `${step.accent}20`, color: step.accent }}>
          <Icon className="h-6 w-6" strokeWidth={2.1} />
        </div>
        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#101D36] text-[10px] font-black text-white shadow-sm">
          {step.number}
        </span>
      </div>

      <div className="mt-5 min-h-[88px] px-1">
        <h3 className="text-base font-extrabold tracking-tight text-[#101D36]">{step.title}</h3>
        <p className="mx-auto mt-1.5 max-w-[150px] text-xs leading-relaxed text-[#53647D]">{step.description}</p>
      </div>

      {!isLast && (
        <div aria-hidden="true" className="absolute left-[calc(50%+38px)] right-[calc(-50%+38px)] top-9 flex items-center">
          <div className="h-px flex-1 border-t-2 border-dashed border-[#B9E9E1]" />
          <ArrowRight className="h-4 w-4 shrink-0 text-[#35D0BA]" strokeWidth={2.5} />
        </div>
      )}
    </div>
  );
}

function MobileStep({
  step,
  isLast,
}: {
  step: (typeof reviewSteps)[number];
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <div className="relative flex gap-4">
      <div className="relative z-10 flex w-12 shrink-0 justify-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-white bg-white shadow-md" style={{ color: step.accent, boxShadow: `0 7px 18px ${step.accent}30` }}>
          <Icon className="h-5 w-5" strokeWidth={2.1} />
        </div>
        <span className="absolute -right-1 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#101D36] text-[9px] font-black text-white ring-2 ring-white">
          {step.number}
        </span>
      </div>

      <div className="min-w-0 flex-1 pb-7">
        <div className="rounded-2xl border border-[#D7E2EE] bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-extrabold text-[#101D36]">{step.title}</h3>
            <Check className="h-4 w-4 shrink-0 text-[#35D0BA]" strokeWidth={3} />
          </div>
          <p className="mt-1 text-xs leading-relaxed text-[#53647D]">{step.description}</p>
        </div>
        {!isLast && <ArrowDown aria-hidden="true" className="absolute -bottom-0.5 left-[22px] h-5 w-5 -translate-x-1/2 text-[#35D0BA]" strokeWidth={2.5} />}
      </div>
    </div>
  );
}

export function TeacherProfileReviewSection() {
  return (
    <section
      id="teacher-profile-review"
      className="relative overflow-hidden border-b border-[#D7E2EE] bg-[#F4F8FC] py-16 sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-[#35D0BA]/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-[#5C8FE8]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#35D0BA]/35 bg-[#D7F6F1] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[#0F6F63]">
            <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.4} />
            Before we connect
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#101D36] sm:text-4xl lg:text-[44px]">
            How We Review <span className="text-[#0F9F8C]">Teacher Profiles</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#53647D] sm:text-base">
            A suitable match starts with the right checks. We look at the fit before sharing a teacher profile with a family.
          </p>
        </div>

        <div className="mx-auto mt-12 hidden max-w-6xl items-start lg:flex">
          {reviewSteps.map((step, index) => (
            <DesktopStep key={step.number} step={step} isLast={index === reviewSteps.length - 1} />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-xl lg:hidden">
          {reviewSteps.map((step, index) => (
            <MobileStep key={step.number} step={step} isLast={index === reviewSteps.length - 1} />
          ))}
        </div>

        <div className="mx-auto mt-9 flex max-w-3xl items-center gap-3 rounded-2xl border border-[#B9E9E1] bg-white px-4 py-3.5 shadow-sm sm:mt-12 sm:px-6">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D7F6F1] text-[#0F6F63]">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
          </div>
          <p className="text-xs leading-relaxed text-[#53647D] sm:text-sm">
            <strong className="text-[#101D36]">The goal is a practical fit:</strong> class, subject, location, availability and the family&apos;s experience all matter.
          </p>
        </div>
      </div>
    </section>
  );
}
