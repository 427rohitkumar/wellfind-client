"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarCheck2,
  CheckCircle2,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const supportPoints = [
  {
    title: "Subject-fit teachers",
    description: "Teacher options aligned with class and subject needs.",
    icon: BookOpenCheck,
    color: "#7C5CE8",
  },
  {
    title: "Local teachers near you",
    description: "Practical locality and travel coordination.",
    icon: MapPin,
    color: "#0FAD8B",
  },
  {
    title: "Flexible schedule",
    description: "Classes planned around the child’s routine.",
    icon: CalendarCheck2,
    color: "#E56A8D",
  },
  {
    title: "Replacement support",
    description: "If the fit is not right, we coordinate a replacement.",
    icon: ShieldCheck,
    color: "#2D76D2",
  },
] as const;

function SupportCard({
  point,
}: {
  point: (typeof supportPoints)[number];
}) {
  const Icon = point.icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#D7E2EE] bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:p-5">
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1 opacity-70 transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: point.color }}
      />
      <div className="flex items-start gap-3.5">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
          style={{ backgroundColor: `${point.color}1A`, color: point.color }}
        >
          <Icon className="h-5 w-5" strokeWidth={2.1} />
        </div>
        <div>
          <h3 className="text-sm font-extrabold leading-tight text-[#101D36]">{point.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-[#53647D]">{point.description}</p>
        </div>
      </div>
    </div>
  );
}

const processSteps = [
  {
    title: "Share your concern",
    caption: "Tell us what is not working",
    icon: MessageCircle,
    color: "#0F9F8C",
    tint: "#D7F6F1",
  },
  {
    title: "Get a better fit",
    caption: "We coordinate another option",
    icon: CheckCircle2,
    color: "#1469D8",
    tint: "#E3EEFC",
  },
  {
    title: "Continue with confidence",
    caption: "Learning can move forward",
    icon: ShieldCheck,
    color: "#7C5CE8",
    tint: "#EEE9FC",
  },
] as const;

export interface TeachersSectionProps {
  badge?: string;
  heading?: React.ReactNode;
  description?: string;
}

export function TeachersSection({
  badge = "Wellfind Academic teacher support",
  heading,
  description = "Not satisfied? We'll help you find a better teacher fit.",
}: TeachersSectionProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = window.setTimeout(() => setIsVisible(true), 0);
      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="teacher-guarantee"
      className="relative overflow-hidden border-b border-[#D7E2EE] bg-gradient-to-b from-white via-[#F6F9FD] to-white py-14 sm:py-18 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#35D0BA]/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#5C8FE8]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden rounded-[28px] border border-[#D7E2EE] bg-white p-5 shadow-xl shadow-[#101D36]/5 transition-all duration-700 sm:rounded-[36px] sm:p-8 lg:p-10 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <div className="relative z-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#35D0BA]/35 bg-[#D7F6F1] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#0F6F63] sm:text-[11px]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#35D0BA]" />
              {badge}
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#101D36] sm:text-4xl lg:text-[52px]">
              {heading ?? (
                <>
                  <span className="text-[#1469D8]">100%</span> Teacher Replacement
                </>
              )}
            </h2>
            <p className="mt-2 text-base font-semibold text-[#53647D] sm:text-xl">
              {description}
            </p>
          </div>

          <div className="relative z-10 mt-8 grid items-center gap-5 lg:grid-cols-[0.82fr_1.55fr_0.82fr] lg:gap-7">
            <div className="order-2 grid gap-3 lg:order-1">
              <SupportCard point={supportPoints[0]} />
              <SupportCard point={supportPoints[1]} />
            </div>

            <div className="relative order-1 flex items-end justify-center lg:order-2">
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 h-[70%] w-[85%] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#D7F6F1] via-[#E3EEFC] to-transparent blur-2xl"
              />
              <Image
                src="/theachers-group-img.png"
                alt="Wellfind Academic teachers available for one-to-one home education"
                width={1964}
                height={785}
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="relative h-auto w-full max-w-[820px] object-contain transition-transform duration-500 hover:scale-[1.015]"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, #000 80%, transparent 100%)",
                  maskImage: "linear-gradient(to bottom, #000 80%, transparent 100%)",
                }}
              />
            </div>

            <div className="order-3 grid gap-3">
              <SupportCard point={supportPoints[2]} />
              <SupportCard point={supportPoints[3]} />
            </div>
          </div>

          <div className="relative z-10 mt-6 rounded-2xl border border-[#D7E2EE] bg-[#F8FAFC] p-4 sm:mt-8 sm:p-6">
            <div className="mb-4 text-center text-[10px] font-black uppercase tracking-[0.15em] text-[#53647D] sm:mb-5">
              Simple teacher replacement process
            </div>
            <ol className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={step.title}>
                    <li className="flex flex-1 items-center gap-3 rounded-xl border border-[#E4ECF5] bg-white p-3.5 shadow-sm sm:p-4">
                      <div
                        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: step.tint, color: step.color }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={2.1} />
                        <span
                          className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white text-[10px] font-black text-white"
                          style={{ backgroundColor: step.color }}
                        >
                          {i + 1}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-extrabold leading-tight text-[#101D36]">{step.title}</div>
                        <div className="mt-0.5 text-xs text-[#53647D]">{step.caption}</div>
                      </div>
                    </li>
                    {i < processSteps.length - 1 && (
                      <li
                        aria-hidden="true"
                        className="flex shrink-0 items-center justify-center text-[#1469D8]"
                      >
                        <ArrowRight className="h-5 w-5 rotate-90 sm:rotate-0" strokeWidth={2.5} />
                      </li>
                    )}
                  </React.Fragment>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
