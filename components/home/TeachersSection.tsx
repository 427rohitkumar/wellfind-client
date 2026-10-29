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
    <div className="rounded-2xl border border-[#D7E2EE] bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${point.color}18`, color: point.color }}>
          <Icon className="h-5 w-5" strokeWidth={2.1} />
        </div>
        <div>
          <h3 className="text-sm font-extrabold leading-tight text-[#101D36]">{point.title}</h3>
          <p className="mt-1 text-[11px] leading-relaxed text-[#53647D]">{point.description}</p>
        </div>
      </div>
    </div>
  );
}

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

            <div className="order-1 flex items-end justify-center lg:order-2">
              <Image
                src="/theachers-group-img.png"
                alt="Wellfind Academic teachers available for one-to-one home education"
                width={1964}
                height={785}
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="h-auto w-full max-w-[820px] object-contain drop-shadow-[0_18px_20px_rgba(16,29,54,0.12)] transition-transform duration-500 hover:scale-[1.015]"
              />
            </div>

            <div className="order-3 grid gap-3">
              <SupportCard point={supportPoints[2]} />
              <SupportCard point={supportPoints[3]} />
            </div>
          </div>

          <div className="relative z-10 mt-5 rounded-2xl border border-[#D7E2EE] bg-[#F8FAFC] p-4 sm:mt-7 sm:p-5">
            <div className="mb-4 text-center text-[10px] font-black uppercase tracking-[0.15em] text-[#53647D] sm:text-left">Simple teacher replacement process</div>
            <div className="grid gap-3 sm:grid-cols-3 sm:items-center sm:gap-2">
              <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm sm:justify-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D7F6F1] text-[#0F6F63]"><MessageCircle className="h-4 w-4" /></div>
                <div><div className="text-xs font-extrabold text-[#101D36]">Share your concern</div><div className="text-[10px] text-[#53647D]">Tell us what is not working</div></div>
              </div>
              <div className="hidden items-center justify-center text-[#1469D8] sm:flex"><ArrowRight className="h-5 w-5" strokeWidth={2.5} /></div>
              <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm sm:justify-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F8] text-[#1469D8]"><CheckCircle2 className="h-4 w-4" /></div>
                <div><div className="text-xs font-extrabold text-[#101D36]">Get a better fit</div><div className="text-[10px] text-[#53647D]">We coordinate another option</div></div>
              </div>
              <div className="hidden items-center justify-center text-[#1469D8] sm:flex"><ArrowRight className="h-5 w-5" strokeWidth={2.5} /></div>
              <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm sm:justify-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF8F6] text-[#0F9F8C]"><ShieldCheck className="h-4 w-4" /></div>
                <div><div className="text-xs font-extrabold text-[#101D36]">Continue with confidence</div><div className="text-[10px] text-[#53647D]">Learning can move forward</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
