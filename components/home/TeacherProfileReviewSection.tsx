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

function ReviewStep({
  step,
  isLast,
}: {
  step: (typeof reviewSteps)[number];
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <li className="relative flex gap-4 lg:min-w-0 lg:flex-1 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
      <div className="relative z-10 flex w-12 shrink-0 justify-center lg:w-auto">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-white bg-white shadow-md lg:h-[74px] lg:w-[74px] lg:rounded-[24px] lg:border-4 lg:shadow-lg"
          style={{ color: step.accent, boxShadow: `0 8px 20px ${step.accent}30` }}
        >
          <div
            className="flex h-full w-full items-center justify-center rounded-2xl lg:h-12 lg:w-12"
            style={{ backgroundColor: `${step.accent}20`, color: step.accent }}
          >
            <Icon className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={2.1} />
          </div>
        </div>
        <span className="absolute -right-0.5 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#101D36] text-[9px] font-black text-white ring-2 ring-white lg:-right-2 lg:h-7 lg:w-7 lg:text-[10px] lg:shadow-sm">
          {step.number}
        </span>
      </div>

      <div className="min-w-0 flex-1 pb-7 lg:mt-5 lg:min-h-[88px] lg:flex-none lg:px-1 lg:pb-0">
        <div className="rounded-2xl border border-[#D7E2EE] bg-white p-4 shadow-sm lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
          <div className="flex items-center justify-between gap-3 lg:justify-center">
            <h3 className="text-sm font-extrabold text-[#101D36] lg:text-base lg:tracking-tight">
              {step.title}
            </h3>
            <Check
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-[#35D0BA] lg:hidden"
              strokeWidth={3}
            />
          </div>
          <p className="mt-1 text-xs leading-relaxed text-[#53647D] lg:mx-auto lg:mt-1.5 lg:max-w-[150px]">
            {step.description}
          </p>
        </div>
      </div>

      {!isLast && (
        <>
          <ArrowDown
            aria-hidden="true"
            className="absolute bottom-0 left-6 h-5 w-5 -translate-x-1/2 text-[#35D0BA] lg:hidden"
            strokeWidth={2.5}
          />
          <div
            aria-hidden="true"
            className="absolute left-[calc(50%+38px)] right-[calc(-50%+38px)] top-9 hidden items-center lg:flex"
          >
            <div className="h-px flex-1 border-t-2 border-dashed border-[#B9E9E1]" />
            <ArrowRight className="h-4 w-4 shrink-0 text-[#35D0BA]" strokeWidth={2.5} />
          </div>
        </>
      )}
    </li>
  );
}

export interface TeacherProfileReviewSectionProps {
  badge?: string;
  heading?: React.ReactNode;
  description?: string;
}

export function TeacherProfileReviewSection({
  badge = "Before we connect",
  heading,
  description = "A suitable match starts with the right checks. We look at the fit before sharing a teacher profile with a family.",
}: TeacherProfileReviewSectionProps = {}) {
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
            {badge}
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#101D36] sm:text-4xl lg:text-[44px]">
            {heading ?? (
              <>
                How We Review <span className="text-[#0F9F8C]">Teacher Profiles</span>
              </>
            )}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#53647D] sm:text-base">
            {description}
          </p>
        </div>

        <ol
          aria-label="How we review teacher profiles"
          className="mx-auto mt-10 max-w-xl list-none p-0 lg:mt-12 lg:flex lg:max-w-6xl lg:items-start"
        >
          {reviewSteps.map((step, index) => (
            <ReviewStep key={step.number} step={step} isLast={index === reviewSteps.length - 1} />
          ))}
        </ol>

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
