import React from "react";
import {
  ArrowLeftRight,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Palette,
  ShieldCheck,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  QualityStepIllustration,
  type QualityStepArt,
} from "./QualityStepIllustrations";

interface QualityStep {
  title: string;
  art: QualityStepArt;
}

/** What Wellfind does, step by step, to keep teaching quality high. */
const qualitySteps: QualityStep[] = [
  { title: "Requirement understood", art: "requirement" },
  { title: "Assessment before we begin", art: "assessment" },
  { title: "Right teacher, 2-day demo", art: "teacher" },
  { title: "Structured classes", art: "schedule" },
  { title: "Weekly tests & practice", art: "practice" },
  { title: "Progress review & support", art: "progress" },
];

const goals: { label: string; icon: LucideIcon }[] = [
  { label: "School studies", icon: BookOpen },
  { label: "Board exam preparation", icon: Target },
  { label: "Concept building", icon: Lightbulb },
  { label: "Creativity & skills", icon: Palette },
];

function FlowNode({
  icon: Icon,
  label,
  caption,
  highlight = false,
}: {
  icon: LucideIcon;
  label: string;
  caption: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={
          highlight
            ? "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#35D0BA] text-[#101D36] shadow-lg shadow-[#35D0BA]/20 sm:h-16 sm:w-16"
            : "flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white sm:h-12 sm:w-12"
        }
      >
        <Icon className={highlight ? "h-7 w-7" : "h-5 w-5"} strokeWidth={2} />
      </div>
      <span
        className={`mt-2.5 text-xs font-extrabold sm:text-sm ${
          highlight ? "text-[#35D0BA]" : "text-white"
        }`}
      >
        {label}
      </span>
      <span className="mt-0.5 text-[10px] leading-snug text-slate-400 sm:text-xs">
        {caption}
      </span>
    </div>
  );
}

export interface ManagedLearningJourneySectionProps {
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: string;
}

export function ManagedLearningJourneySection({
  eyebrow = "How we maintain quality",
  heading,
  description = "A good teacher is only half of it. Between your child and the teacher, Wellfind plans, tests, tracks and corrects, so the learning keeps moving in the right direction.",
}: ManagedLearningJourneySectionProps = {}) {
  return (
    <section className="relative overflow-hidden border-b border-[#D7E2EE] bg-[#F4F8FC] py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#35D0BA]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#5C8FE8]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#35D0BA]/40 bg-[#D7F6F1] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[#0F6F63]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#35D0BA]" />
            {eyebrow}
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#101D36] sm:text-4xl lg:text-[44px]">
            {heading ?? (
              <>
                Teachers deliver the education.{" "}
                <span className="text-[#0F9F8C]">We maintain the quality.</span>
              </>
            )}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#53647D] sm:text-base">
            {description}
          </p>
        </div>

        {/* Role band: where Wellfind sits */}
        <div className="mt-10 grid items-center gap-8 rounded-3xl bg-[#101D36] p-6 shadow-xl shadow-[#101D36]/10 sm:p-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12 lg:p-10">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#35D0BA]">
              Our role
            </span>
            <h3 className="mt-3 text-xl font-black leading-snug tracking-tight text-white sm:text-2xl">
              We sit between the teacher and your child, so quality never depends on luck.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              The teacher focuses on teaching. We take care of testing, tracking,
              feedback and course correction, from the first class to every
              progress report.
            </p>
          </div>

          <div className="grid grid-cols-[1fr_auto_1.2fr_auto_1fr] items-start gap-1.5 rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:gap-3 sm:p-6">
            <FlowNode icon={Users} label="Parent & child" caption="Share the need" />
            <ArrowLeftRight
              aria-hidden="true"
              className="mt-4 h-4 w-4 shrink-0 text-[#35D0BA] sm:mt-5"
            />
            <FlowNode
              icon={ShieldCheck}
              label="Wellfind"
              caption="Tests, tracking & feedback"
              highlight
            />
            <ArrowLeftRight
              aria-hidden="true"
              className="mt-4 h-4 w-4 shrink-0 text-[#35D0BA] sm:mt-5"
            />
            <FlowNode icon={GraduationCap} label="Teacher" caption="Delivers the classes" />
          </div>
        </div>

        {/* Quality checkpoints */}
        <div className="mt-12 text-center">
          <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[#0F9F8C]">
            Six quality checkpoints
          </span>
          <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-[#101D36] sm:text-2xl">
            What Wellfind does to keep every student on track
          </h3>
        </div>

        <ol className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {qualitySteps.map((step) => (
            <li
              key={step.title}
              className="group flex flex-col items-center rounded-2xl border border-[#D7E2EE] bg-white px-3 py-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#35D0BA]/50 hover:shadow-md sm:px-5 sm:py-7"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#E8FAF6] to-[#DCE8FB] p-3.5 shadow-inner transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28 sm:p-4">
                <QualityStepIllustration art={step.art} />
              </div>
              <h4 className="mt-4 text-sm font-extrabold leading-snug text-[#101D36] sm:text-base">
                {step.title}
              </h4>
            </li>
          ))}
        </ol>

        {/* Every goal */}
        <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-[#D7E2EE] bg-white p-5 shadow-sm sm:p-6 lg:flex-row lg:justify-between">
          <p className="text-center text-sm font-extrabold text-[#101D36] sm:text-base lg:shrink-0 lg:text-left">
            One quality system, for every learning goal
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2.5 lg:flex-nowrap">
            {goals.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EE] bg-[#F4F8FC] px-3.5 py-2 text-xs font-bold text-[#344054] sm:text-sm"
              >
                <Icon className="h-4 w-4 text-[#0F9F8C]" strokeWidth={2.2} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
