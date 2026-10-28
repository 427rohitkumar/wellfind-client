import React from "react";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

const journeySteps = [
  {
    number: "01",
    title: "Requirement understood",
    description: "We understand the child, class, subject and learning need.",
    icon: ClipboardList,
    color: "#35D0BA",
  },
  {
    number: "02",
    title: "Teacher assigned",
    description: "A suitable Wellfind-supported teacher is selected for the fit.",
    icon: UserRoundCheck,
    color: "#5C8FE8",
  },
  {
    number: "03",
    title: "Classes conducted",
    description: "The teacher delivers structured one-to-one learning at home.",
    icon: GraduationCap,
    color: "#F2B84B",
  },
  {
    number: "04",
    title: "Progress reviewed",
    description: "Attendance, feedback and academic progress stay visible.",
    icon: BarChart3,
    color: "#B67BE8",
  },
  {
    number: "05",
    title: "Support continues",
    description: "We coordinate feedback, improvement or a replacement when needed.",
    icon: RefreshCw,
    color: "#F28B72",
  },
] as const;

function JourneyStep({
  step,
  isLast,
}: {
  step: (typeof journeySteps)[number];
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <div className="relative flex gap-4 sm:gap-5">
      <div className="relative z-10 flex w-11 shrink-0 justify-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-white bg-white shadow-md" style={{ color: step.color, boxShadow: `0 8px 18px ${step.color}28` }}>
          <Icon className="h-5 w-5" strokeWidth={2.1} />
        </div>
        <span className="absolute -right-1 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#101D36] text-[9px] font-black text-white ring-2 ring-white">
          {step.number}
        </span>
      </div>

      <div className="min-w-0 flex-1 pb-6">
        <div className="rounded-2xl border border-[#D7E2EE] bg-white p-4 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-5 sm:p-5">
          <div>
            <h3 className="text-sm font-extrabold text-[#101D36] sm:text-base">{step.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-[#53647D]">{step.description}</p>
          </div>
          <CheckCircle2 className="mt-3 h-4 w-4 shrink-0 text-[#35D0BA] sm:mt-0" strokeWidth={2.5} />
        </div>
        {!isLast && <ArrowDown aria-hidden="true" className="absolute -bottom-0.5 left-[22px] h-5 w-5 -translate-x-1/2 text-[#35D0BA]" strokeWidth={2.5} />}
      </div>
    </div>
  );
}

export function ManagedLearningJourneySection() {
  return (
    <section className="relative overflow-hidden border-b border-[#D7E2EE] bg-[#F4F8FC] py-16 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#35D0BA]/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#5C8FE8]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#35D0BA]/40 bg-[#D7F6F1] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[#0F6F63]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#35D0BA]" />
            The Wellfind model
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#101D36] sm:text-4xl lg:text-[44px]">
            Teachers deliver the education. <span className="text-[#0F9F8C]">We maintain the quality.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#53647D] sm:text-base">
            One-to-one learning is not just about assigning a teacher. It is about keeping the child&apos;s learning journey coordinated from start to progress.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
          <div className="relative overflow-hidden rounded-[28px] bg-[#101D36] p-6 shadow-xl shadow-[#101D36]/10 sm:p-8 lg:sticky lg:top-28">
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#35D0BA]/20" />
            <div aria-hidden="true" className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#35D0BA]/10 blur-2xl" />
            <div className="relative">
              <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#35D0BA]">A managed learning loop</span>
              <h3 className="mt-5 text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">The teacher is supported by a system.</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">We keep quality, communication and continuity connected around every student.</p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-1 flex-col items-center text-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#35D0BA]/15 text-[#35D0BA]"><UserRoundCheck className="h-5 w-5" /></div>
                    <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Parent</span>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#35D0BA]" />
                  <div className="flex flex-1 flex-col items-center text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#35D0BA]/40 bg-[#35D0BA]/15 text-[#35D0BA] shadow-lg shadow-[#35D0BA]/10"><ShieldCheck className="h-7 w-7" /></div>
                    <span className="mt-2 text-[10px] font-black uppercase tracking-wider text-[#35D0BA]">Wellfind</span>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#35D0BA]" />
                  <div className="flex flex-1 flex-col items-center text-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5C8FE8]/15 text-[#8DB1FF]"><GraduationCap className="h-5 w-5" /></div>
                    <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Teacher</span>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-center gap-2 border-t border-white/10 pt-4 text-xs font-semibold text-slate-300"><MessageCircle className="h-4 w-4 text-[#35D0BA]" /> Feedback keeps the loop moving.</div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2 text-center sm:grid-cols-4">
                {[
                  ["Quality", "checked"],
                  ["Progress", "tracked"],
                  ["Service", "coordinated"],
                  ["Support", "ongoing"],
                ].map(([title, label]) => (
                  <div key={title} className="rounded-xl border border-white/10 bg-white/[0.05] px-2 py-3"><div className="text-xs font-extrabold text-white">{title}</div><div className="mt-0.5 text-[10px] text-slate-400">{label}</div></div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#D7E2EE] bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#D7E2EE] pb-5">
              <div><span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#0F9F8C]">From enquiry to continuity</span><h3 className="mt-1 text-xl font-extrabold tracking-tight text-[#101D36]">What happens under Wellfind</h3></div>
              <div className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-[#D7F6F1] text-[#0F6F63] sm:flex"><RefreshCw className="h-5 w-5" /></div>
            </div>
            <div>{journeySteps.map((step, index) => <JourneyStep key={step.number} step={step} isLast={index === journeySteps.length - 1} />)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
