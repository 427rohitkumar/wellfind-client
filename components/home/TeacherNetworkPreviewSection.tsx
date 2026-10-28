import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ClipboardList,
  MapPin,
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

export function TeacherNetworkPreviewSection() {
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
              <MapPin className="h-3.5 w-3.5 text-[#35D0BA]" />
              For home tutors
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#101D36] sm:text-4xl">
              A better way to find the right <span className="text-[#0F9F8C]">home-tuition enquiry.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#53647D] sm:text-base">
              Wellfind Academic also works with teachers who want to connect their experience with suitable student requirements across Patna.
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
              href="/join-as-teacher/"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#101D36] px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#1E3154] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0BA] focus-visible:ring-offset-2"
            >
              Join as a Home Tutor
              <ArrowRight className="h-4 w-4 text-[#35D0BA]" strokeWidth={2.5} />
            </Link>
          </div>

          <div className="relative rounded-[28px] border border-[#D7E2EE] bg-[#F4F8FC] p-4 shadow-sm sm:p-6">
            <div aria-hidden="true" className="absolute left-6 right-6 top-[83px] hidden border-t-2 border-dashed border-[#B9E9E1] sm:block" />
            <div className="relative grid gap-3 sm:grid-cols-3 sm:gap-5">
              {journey.map((step, index) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={step.number}>
                    <div className="relative rounded-2xl border border-white bg-white p-4 shadow-sm sm:min-h-[190px] sm:p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ backgroundColor: `${step.color}20`, color: step.color }}>
                          <Icon className="h-5 w-5" strokeWidth={2.1} />
                        </div>
                        <span className="text-[11px] font-black tracking-wider text-[#8A9EB8]">{step.number}</span>
                      </div>
                      <h3 className="mt-5 text-sm font-extrabold text-[#101D36]">{step.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#53647D]">{step.description}</p>
                    </div>
                    {index < journey.length - 1 && <ArrowRight aria-hidden="true" className="mx-auto hidden h-5 w-5 self-center text-[#35D0BA] sm:block" strokeWidth={2.5} />}
                  </React.Fragment>
                );
              })}
            </div>
            <p className="mt-4 text-center text-[11px] font-semibold text-[#8A9EB8]">
              Teacher applications and details are handled separately from the parent enquiry journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
