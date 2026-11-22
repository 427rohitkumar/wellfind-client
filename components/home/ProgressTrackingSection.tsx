"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  Check,
  ClipboardCheck,
  FileBarChart2,
  Gauge,
  GraduationCap,
  Home,
  MessageCircleQuestion,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* WHY ONE-TO-ONE: group class vs one-to-one, shown visually           */
/* ------------------------------------------------------------------ */
function AttentionMeter({ percent, tone }: { percent: number; tone: "muted" | "accent" }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
        <span className={tone === "accent" ? "text-slate-300" : "text-[#53647D]"}>
          Attention on your child
        </span>
        <span className={tone === "accent" ? "text-[#35D0BA]" : "text-[#53647D]"}>
          {tone === "accent" ? "100%" : "Shared"}
        </span>
      </div>
      <div
        className={`mt-2 h-3 w-full overflow-hidden rounded-full ${
          tone === "accent" ? "bg-white/10" : "bg-[#EAF0F8]"
        }`}
      >
        <div
          className={`h-full rounded-full ${
            tone === "accent" ? "bg-[#35D0BA]" : "bg-[#9FB1C8]"
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function OneToOneCompare() {
  const groupPoints = ["Fixed pace for everyone", "Doubts have to wait", "Same plan for all"];
  const onePoints = [
    { icon: Gauge, label: "Learns at own pace" },
    { icon: MessageCircleQuestion, label: "Doubts solved on the spot" },
    { icon: ClipboardCheck, label: "Plan made for your child" },
    { icon: Home, label: "Comfortable, at home" },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center">
        <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[#0F9F8C]">
          Why one-to-one matters
        </span>
        <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-[#101D36] sm:text-2xl">
          Every minute of the class is for your child
        </h3>
      </div>

      <div className="relative mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
        {/* Group class */}
        <div className="rounded-3xl border border-[#D7E2EE] bg-white p-6 sm:p-7">
          <div className="flex items-center gap-2 text-sm font-extrabold text-[#53647D]">
            <Users className="h-4 w-4" /> Group class
          </div>

          <div className="mt-5 flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAF0F8] text-[#53647D]">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="grid flex-1 grid-cols-9 gap-1.5" aria-hidden="true">
              {Array.from({ length: 27 }).map((_, i) => (
                <span
                  key={i}
                  className={`aspect-square rounded-full ${
                    i === 13 ? "bg-[#F2B84B]" : "bg-[#D7E2EE]"
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#53647D]">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#F2B84B]" />
            Your child, among many students
          </p>

          <div className="mt-5">
            <AttentionMeter percent={8} tone="muted" />
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {groupPoints.map((p) => (
              <li
                key={p}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#F4F8FC] px-3 py-1.5 text-xs font-semibold text-[#53647D]"
              >
                <X className="h-3.5 w-3.5 text-[#E5604D]" strokeWidth={3} />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* One-to-one */}
        <div className="relative overflow-hidden rounded-3xl bg-[#101D36] p-6 shadow-xl shadow-[#101D36]/10 sm:p-7">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#35D0BA]/15 blur-2xl"
          />
          <div className="relative">
            <div className="flex items-center gap-2 text-sm font-extrabold text-[#35D0BA]">
              <GraduationCap className="h-4 w-4" /> One-to-One with Wellfind
            </div>

            <div className="mt-5 flex items-center justify-center gap-3" aria-hidden="true">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div className="h-0.5 flex-1 rounded-full bg-gradient-to-r from-white/20 via-[#35D0BA] to-[#35D0BA]" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#35D0BA] text-[#101D36] shadow-lg shadow-[#35D0BA]/25">
                <BookOpen className="h-7 w-7" />
              </div>
            </div>

            <div className="mt-6">
              <AttentionMeter percent={100} tone="accent" />
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-2">
              {onePoints.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5 text-xs font-semibold text-white"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#35D0BA]" strokeWidth={2.2} />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* VS badge */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#F6F9FD] bg-[#FFBF1A] text-xs font-black text-[#101D36] md:flex"
        >
          VS
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TRACKING: daily -> weekly -> monthly                                */
/* ------------------------------------------------------------------ */
function TrackCard({
  label,
  color,
  icon: Icon,
  visual,
  chips,
  showArrow,
}: {
  label: string;
  color: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  visual: React.ReactNode;
  chips: string[];
  showArrow: boolean;
}) {
  return (
    <div className="relative">
      <div className="flex h-full flex-col rounded-3xl border border-[#D7E2EE] bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em]"
            style={{ backgroundColor: `${color}22`, color: "#101D36" }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
            {label}
          </span>
          <Icon className="h-5 w-5 text-[#9FB1C8]" strokeWidth={2} />
        </div>

        <div className="mt-5 flex min-h-[132px] items-center justify-center rounded-2xl bg-[#F4F8FC] p-4">
          {visual}
        </div>

        <ul className="mt-5 flex flex-wrap gap-2">
          {chips.map((c) => (
            <li
              key={c}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EE] px-3 py-1.5 text-xs font-bold text-[#344054]"
            >
              <Check className="h-3.5 w-3.5 text-[#0F9F8C]" strokeWidth={3} />
              {c}
            </li>
          ))}
        </ul>
      </div>

      {showArrow && (
        <div
          aria-hidden="true"
          className="absolute -right-[26px] top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#F6F9FD] bg-[#101D36] text-[#35D0BA] lg:flex"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={3} />
        </div>
      )}
    </div>
  );
}

function DailyVisual() {
  const days = ["M", "T", "W", "T", "F", "S"];
  return (
    <div className="flex w-full items-center justify-between gap-1.5">
      {days.map((d, i) => (
        <div key={i} className="flex flex-col items-center gap-1.5">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full text-white sm:h-9 sm:w-9 ${
              i < 5
                ? "bg-[#35D0BA]"
                : "border-2 border-dashed border-[#9FB1C8] bg-transparent text-[#9FB1C8]"
            }`}
          >
            {i < 5 ? <Check className="h-4 w-4" strokeWidth={3.5} /> : null}
          </span>
          <span className="text-[10px] font-bold text-[#53647D]">{d}</span>
        </div>
      ))}
    </div>
  );
}

function WeeklyVisual() {
  const bars = [
    { h: 38, label: "W1" },
    { h: 54, label: "W2" },
    { h: 68, label: "W3" },
    { h: 88, label: "W4" },
  ];
  return (
    <div className="relative flex h-[104px] w-full items-end justify-around gap-3 px-2">
      <TrendingUp
        aria-hidden="true"
        className="absolute right-1 top-0 h-5 w-5 text-[#0D52D6]"
        strokeWidth={2.5}
      />
      {bars.map((b, i) => (
        <div key={b.label} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
          <div
            className={`w-full max-w-[34px] rounded-t-lg ${
              i === bars.length - 1 ? "bg-[#0D52D6]" : "bg-[#0D52D6]/30"
            }`}
            style={{ height: `${b.h}%` }}
          />
          <span className="text-[10px] font-bold text-[#53647D]">{b.label}</span>
        </div>
      ))}
    </div>
  );
}

function MonthlyVisual() {
  const r = 34;
  const c = 2 * Math.PI * r;
  const subjects = [
    { name: "Maths", v: 90 },
    { name: "Science", v: 78 },
    { name: "English", v: 86 },
  ];
  return (
    <div className="flex w-full items-center gap-4">
      <div className="relative h-[84px] w-[84px] shrink-0">
        <svg viewBox="0 0 84 84" className="h-full w-full -rotate-90">
          <circle cx="42" cy="42" r={r} fill="none" stroke="#FFE9A8" strokeWidth="9" />
          <circle
            cx="42"
            cy="42"
            r={r}
            fill="none"
            stroke="#F2B84B"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={`${c * 0.85} ${c}`}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-base font-black text-[#101D36]">
          85%
        </span>
      </div>
      <div className="flex-1 space-y-2">
        {subjects.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between text-[10px] font-bold text-[#53647D]">
              <span>{s.name}</span>
              <span>{s.v}%</span>
            </div>
            <div className="mt-0.5 h-1.5 overflow-hidden rounded-full bg-[#FFE9A8]">
              <div className="h-full rounded-full bg-[#F2B84B]" style={{ width: `${s.v}%` }} />
            </div>
          </div>
        ))}
        <p className="pt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#9FB1C8]">
          Sample report
        </p>
      </div>
    </div>
  );
}

function TrackingTimeline() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="text-center">
        <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[#0F9F8C]">
          Tracked at every step
        </span>
        <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-[#101D36] sm:text-2xl">
          Daily. Weekly. Monthly. You always know.
        </h3>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3 lg:gap-12">
        <TrackCard
          label="Daily"
          color="#35D0BA"
          icon={CalendarCheck}
          visual={<DailyVisual />}
          chips={["Attendance", "Topic covered", "Homework"]}
          showArrow
        />
        <TrackCard
          label="Weekly"
          color="#0D52D6"
          icon={ClipboardCheck}
          visual={<WeeklyVisual />}
          chips={["Weekly test", "Practice", "Score trend"]}
          showArrow
        />
        <TrackCard
          label="Monthly"
          color="#FFBF1A"
          icon={FileBarChart2}
          visual={<MonthlyVisual />}
          chips={["Progress report", "Strengths", "Next steps"]}
          showArrow={false}
        />
      </div>
    </div>
  );
}

export interface ProgressTrackingSectionProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
}

export function ProgressTrackingSection({
  eyebrow = "Beyond Tuition",
  titleLine1 = "One-to-One Learning.",
  titleLine2 = "Progress You Can See.",
}: ProgressTrackingSectionProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const timer = window.setTimeout(() => setIsVisible(true), 0);
      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="progress-tracking"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-[#F6F9FD] to-white border-b border-[#D7E2EE] overflow-hidden select-none"
    >
      {/* ======================================================== */}
      {/* AMBIENT BACKGROUND GLOWS & ACADEMIC DOODLE WATERMARKS */}
      {/* ======================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-[5%] w-[450px] h-[450px] bg-[#35D0BA]/10 rounded-full blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-[5%] w-[500px] h-[500px] bg-[#0D52D6]/8 rounded-full blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-[#FFBF1A]/10 rounded-full blur-3xl -z-10"
      />

      {/* Graduation Cap Watermark (Top Right - Matching Reference) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-8 sm:top-12 right-4 sm:right-12 lg:right-20 w-24 sm:w-36 md:w-44 text-[#0D52D6]/10 -z-10"
      >
        <svg viewBox="0 0 200 160" fill="currentColor" className="w-full h-auto">
          <path d="M100 20 L190 65 L100 110 L10 65 Z" />
          <path
            d="M40 85 L40 125 C40 145 160 145 160 125 L160 85 L100 115 Z"
            fillOpacity="0.75"
          />
          <path
            d="M190 65 L190 130 C185 135 180 140 180 150 C180 155 185 160 190 160 C195 160 200 155 200 150 C200 140 195 135 190 130 Z"
            fillOpacity="0.6"
          />
        </svg>
      </div>

      {/* Open Book Watermark (Bottom Left - Matching Reference) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 sm:bottom-12 left-4 sm:left-12 lg:left-16 w-24 sm:w-36 md:w-44 text-[#35D0BA]/12 -z-10"
      >
        <svg viewBox="0 0 200 160" fill="none" stroke="currentColor" strokeWidth="6" className="w-full h-auto">
          <path d="M100 140 C70 120 30 120 15 130 L15 35 C30 25 70 25 100 45 C130 25 170 25 185 35 L185 130 C170 120 130 120 100 140 Z" />
          <line x1="100" y1="45" x2="100" y2="140" />
          <path d="M35 55 C55 48 80 50 95 60" strokeWidth="4" />
          <path d="M35 75 C55 68 80 70 95 80" strokeWidth="4" />
          <path d="M35 95 C55 88 80 90 95 100" strokeWidth="4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ======================================================== */}
        {/* SECTION HEADER WITH SPARKLES, ACCENT UNDERLINE & ROCKET */}
        {/* ======================================================== */}
        <div
          className={`relative text-center max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Sparkle Doodle Top Left */}
          <div
            aria-hidden="true"
            className="hidden sm:block absolute -top-5 left-[12%] lg:left-[16%] text-[#FFBF1A]"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M14 2L15.8 10.2L24 12L15.8 13.8L14 22L12.2 13.8L4 12L12.2 10.2L14 2Z"
                fill="currentColor"
              />
              <circle cx="23" cy="5" r="2" fill="currentColor" />
            </svg>
          </div>

          {/* Sparkle Doodle Top Right */}
          <div
            aria-hidden="true"
            className="hidden sm:block absolute -top-4 right-[12%] lg:right-[18%] text-[#FFBF1A]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="12" y1="2" x2="12" y2="8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <line x1="19" y1="5" x2="15" y2="9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <line x1="22" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          {/* Main Heading Container with Floating Rocket */}
          <div className="relative inline-block">
            <div className="mb-3 flex justify-center">
              <span className="inline-flex items-center rounded-full border border-[#35D0BA]/40 bg-[#D7F6F1] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[#0F6F63]">
                {eyebrow}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#101D36] tracking-tight leading-[1.15]">
              {titleLine1} <br />
              <span className="relative inline-block text-[#0D52D6] mt-1 sm:mt-1.5">
                {titleLine2}
                {/* Playful Yellow Organic Underline matching reference */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3.5 left-0 w-full h-3 sm:h-4 text-[#FFBF1A]"
                  viewBox="0 0 400 16"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 11C80 3 180 14 260 9C310 6 360 4 397 10"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Flying Rocket with Child (Top-Right beside the heading) */}
            <div
              aria-hidden="true"
              className="absolute -top-7 -right-10 sm:-top-10 sm:-right-14 md:-top-14 md:-right-20 lg:-top-16 lg:-right-24 w-16 sm:w-20 md:w-24 lg:w-28 pointer-events-none transform rotate-6 hover:rotate-12 transition-transform duration-300"
            >
              <Image
                src="/Rocket-with-child.png"
                alt="Student growth rocket"
                width={1319}
                height={1193}
                priority
                className="w-full h-auto object-contain drop-shadow-md select-none animate-pulse duration-1000"
              />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* VISUAL EXPLAINERS: why one-to-one, and how progress is tracked */}
        {/* ======================================================== */}
        <div
          className={`space-y-14 sm:space-y-16 transition-all duration-700 delay-100 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <OneToOneCompare />
          <TrackingTimeline />
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center sm:mt-20">
          <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[#0F9F8C]">
            Parents see it. Teachers act on it.
          </span>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP / TABLET INFOGRAPHIC COMPOSITION (lg & md) */}
        {/* ======================================================== */}
        <div
          className={`relative max-w-4xl mx-auto pt-10 sm:pt-14 lg:pt-16 pb-8 transition-all duration-700 delay-150 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* ---------------------------------------------------- */}
          {/* LEFT ANNOTATION ("Your Child's Progress. Tracked Every Step.") */}
          {/* Positioned clearly above the upper-left card */}
          {/* ---------------------------------------------------- */}
          <div className="hidden md:flex flex-col items-start absolute -top-4 sm:-top-6 lg:-top-8 left-0 lg:-left-4 xl:-left-10 z-30 pointer-events-none select-none max-w-[200px]">
            <p className="text-xs sm:text-sm font-extrabold text-[#101D36] tracking-tight leading-snug">
              Your Child&apos;s Progress. <br />
              <span className="relative inline-block mt-0.5">
                Tracked Every Step.
                <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-[#FFBF1A] rounded-full" />
              </span>
            </p>
            {/* Curved dashed arrow pointing down to Result-Oriented Learning Card */}
            <svg
              className="w-9 h-7 lg:w-11 lg:h-9 text-[#101D36]/60 mt-1 ml-4"
              viewBox="0 0 50 36"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 4 C 8 20, 36 12, 38 28"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="3 3"
                strokeLinecap="round"
              />
              <path d="M33 24 L38 29 L43 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* ---------------------------------------------------- */}
          {/* RIGHT ANNOTATION ("Not Just Learning. Real Academic Growth.") */}
          {/* Positioned clearly above the upper-right card */}
          {/* ---------------------------------------------------- */}
          <div className="hidden md:flex flex-col items-start absolute -top-4 sm:-top-6 lg:-top-8 right-0 lg:-right-4 xl:-right-10 z-30 pointer-events-none select-none max-w-[190px]">
            <p className="text-xs sm:text-sm font-extrabold text-[#101D36] tracking-tight leading-snug">
              Not Just Learning. <br />
              <span className="relative inline-block mt-0.5">
                Real Academic Growth.
                <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-[#FFBF1A] rounded-full" />
              </span>
            </p>
            {/* Curved dashed arrow pointing down to Weekly Progress */}
            <svg
              className="w-9 h-7 lg:w-11 lg:h-9 text-[#101D36]/60 mt-1 ml-4"
              viewBox="0 0 50 36"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 4 C 12 20, 36 14, 38 28"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="3 3"
                strokeLinecap="round"
              />
              <path d="M33 24 L38 29 L43 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* ---------------------------------------------------- */}
          {/* CENTRAL SCENE: Student-Progress-Meeting Image */}
          {/* ---------------------------------------------------- */}
          {/* Masked: the photo fades softly into the page instead of ending in a hard frame */}
          <div
            className="relative mx-auto w-[94%] select-none"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 74% 72% at 50% 50%, #000 58%, rgba(0,0,0,0.55) 78%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 74% 72% at 50% 50%, #000 58%, rgba(0,0,0,0.55) 78%, transparent 100%)",
            }}
          >
            <Image
              src="/Student-Progress-Meeting.png"
              alt="Teacher reviewing personalized Student Progress Report with mother and child"
              width={1672}
              height={941}
              priority
              className="w-full h-auto object-cover select-none pointer-events-none"
            />
          </div>

          {/* ---------------------------------------------------- */}
          {/* 4 REFINED, SCALED-DOWN FLOATING INFOGRAPHIC CARDS */}
          {/* ---------------------------------------------------- */}

          {/* 1. UPPER-LEFT: Result-Oriented Learning */}
          <div className="hidden md:block absolute top-6 sm:top-8 lg:top-10 -left-3 sm:-left-6 lg:-left-10 xl:-left-14 w-36 sm:w-44 md:w-52 lg:w-60 xl:w-[250px] z-20 transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer">
            <Image
              src="/Result-Oriented Learning-Growth.png"
              alt="Result-Oriented Learning infographic card"
              width={1774}
              height={887}
              className="w-full h-auto object-contain drop-shadow-lg"
            />
          </div>

          {/* 2. LOWER-LEFT: Monthly Report */}
          <div className="hidden md:block absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -left-3 sm:-left-6 lg:-left-10 xl:-left-14 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-[270px] z-20 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer">
            <Image
              src="/Monthly-Report-Progress.png"
              alt="Monthly Report 85% progress infographic card"
              width={1536}
              height={1024}
              className="w-full h-auto object-contain drop-shadow-lg"
            />
          </div>

          {/* 3. UPPER-RIGHT: Academic Growth / Weekly Progress */}
          <div className="hidden md:block absolute top-6 sm:top-8 lg:top-10 -right-3 sm:-right-5 lg:-right-8 xl:-right-12 w-32 sm:w-38 md:w-44 lg:w-50 xl:w-[220px] z-20 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer">
            <Image
              src="/Weekly-Progress-Card.png"
              alt="Weekly Progress trend chart card"
              width={1536}
              height={1024}
              className="w-full h-auto object-contain drop-shadow-lg"
            />
          </div>

          {/* 4. LOWER-RIGHT: Weekly Test & Assessments */}
          <div className="hidden md:block absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -right-3 sm:-right-6 lg:-right-8 xl:-right-12 w-36 sm:w-44 md:w-52 lg:w-60 xl:w-[250px] z-20 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer">
            <Image
              src="/Weekly-Assessments-Card.png"
              alt="Weekly Test and Assessments card"
              width={1536}
              height={1024}
              className="w-full h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE / SMALL SCREEN INFOGRAPHIC CARDS GRID (< md) */}
        {/* Clean, high-legibility layout that avoids covering the photo */}
        {/* ======================================================== */}
        <div className="md:hidden mt-8 space-y-6">
          {/* Mobile Supporting Notes */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6 text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D7F6F1] text-[#0F6F63] text-xs font-bold border border-[#35D0BA]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35D0BA]" />
              Your Child&apos;s Progress. Tracked Every Step.
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF0F8] text-[#0D52D6] text-xs font-bold border border-[#0D52D6]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D52D6]" />
              Not Just Learning. Real Academic Growth.
            </span>
          </div>

          {/* 2-Column Mobile Infographic Cards Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
            <div className="flex items-center justify-center p-1 bg-white rounded-2xl border border-[#D7E2EE] shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/Result-Oriented Learning-Growth.png"
                alt="Result-Oriented Learning"
                width={1774}
                height={887}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-1 bg-white rounded-2xl border border-[#D7E2EE] shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/Weekly-Progress-Card.png"
                alt="Weekly Progress"
                width={1536}
                height={1024}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-1 bg-white rounded-2xl border border-[#D7E2EE] shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/Monthly-Report-Progress.png"
                alt="Monthly Report Progress"
                width={1536}
                height={1024}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-1 bg-white rounded-2xl border border-[#D7E2EE] shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/Weekly-Assessments-Card.png"
                alt="Weekly Test & Assessments"
                width={1536}
                height={1024}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
