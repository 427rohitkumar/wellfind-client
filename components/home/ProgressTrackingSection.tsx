"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

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
        {/* DESKTOP / TABLET INFOGRAPHIC COMPOSITION (lg & md) */}
        {/* ======================================================== */}
        <div
          className={`relative max-w-5xl mx-auto pt-10 sm:pt-14 lg:pt-16 pb-8 transition-all duration-700 delay-150 ease-out ${
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
          <div className="relative mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[36px] overflow-hidden shadow-2xl border-4 sm:border-8 border-white/95 bg-[#EAF0F8]">
            <Image
              src="/Student-Progress-Meeting.png"
              alt="Teacher reviewing personalized Student Progress Report with mother and child"
              width={1672}
              height={941}
              priority
              className="w-full h-auto object-cover select-none pointer-events-none"
            />
            {/* Subtle bottom vignette to blend naturally */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#101D36]/15 via-transparent to-transparent pointer-events-none"
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
