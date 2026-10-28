import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full bg-[#101D36] overflow-hidden min-h-[620px] h-[87dvh] max-h-[920px] lg:h-auto lg:min-h-[calc(100dvh-5rem)] lg:max-h-none flex flex-col justify-between pt-2 sm:pt-3 md:pt-4 pb-0 select-none">
      {/* =========================================================================
          DECORATIVE BACKGROUND ELEMENTS (Clouds, Grade Badge, Rocket, Goal Board)
          Proportioned for mobile (androidem-mode) and desktop (Desktop-1)
          ========================================================================= */}

      {/* Cloud 1 — Top Left */}
      <div
        aria-hidden="true"
        className="animate-cloud-1 pointer-events-none absolute left-[3%] sm:left-[6%] lg:left-[8%] top-[3%] sm:top-[5%] md:top-[8%] w-14 sm:w-20 md:w-28 lg:w-36 z-10"
      >
        <Image
          src="/cloude.png"
          alt=""
          width={220}
          height={73}
          className="w-full h-auto object-contain opacity-50"
        />
      </div>

      {/* Cloud 2 — Top Right */}
      <div
        aria-hidden="true"
        className="animate-cloud-2 pointer-events-none absolute right-[3%] sm:right-[5%] lg:right-[7%] top-[2%] sm:top-[4%] md:top-[6%] w-12 sm:w-18 md:w-24 lg:w-32 z-10"
      >
        <Image
          src="/cloude.png"
          alt=""
          width={200}
          height={67}
          className="w-full h-auto object-contain opacity-50"
        />
      </div>

      {/* Cloud 3 — Mid Right */}
      <div
        aria-hidden="true"
        className="animate-cloud-3 pointer-events-none absolute right-[3%] sm:right-[8%] lg:right-[12%] top-[12%] sm:top-[16%] md:top-[20%] w-16 sm:w-24 md:w-36 lg:w-48 z-10"
      >
        <Image
          src="/cloude.png"
          alt=""
          width={260}
          height={87}
          className="w-full h-auto object-contain opacity-50"
        />
      </div>

      {/* A+ Grade Badge (Positioned at upper-left beside text/buttons) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[3%] sm:left-[5%] md:left-[8%] lg:left-[10%] max-[450px]:top-[32%] top-[28%] sm:top-[30%] md:top-[32%] lg:top-[30%] w-16 sm:w-22 md:w-32 lg:w-40 xl:w-48 z-20 drop-shadow-sm opacity-50"
      >
        <Image
          src="/grade-rate.png"
          alt=""
          width={260}
          height={173}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* =========================================================================
          MAIN TEXT & CALL-TO-ACTION CONTENT (Centered)
          Under desktop (< lg): flex-1 + justify-center automatically and mathematically
          centers the text block in the upper screen space between header and circle.
          On desktop (lg): flex-initial + pt-3 preserves Figma Desktop-1 alignment.
          ========================================================================= */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center z-30 pt-4 pb-2 lg:flex-initial lg:justify-start lg:pt-3">
        {/* Main Heading — exact two lines from Figma with 'right' and 'future' highlighted in #35D0BA */}
        <h1 className="text-[32px] min-[500px]:text-[42px] min-[540px]:text-[45px] sm:text-[48px] md:text-[52px] lg:text-[56px] xl:text-[62px] font-black tracking-tight text-white leading-[1.14] sm:leading-[1.12]">
          The <span className="text-[#35D0BA]">right</span> tutor. <br />
          A brighter <span className="text-[#35D0BA]">future</span>.
        </h1>

        <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-300 sm:mt-5 sm:text-base md:text-lg">
          Wellfind Academic provides managed one-to-one home education for students from UKG to Class 10.
        </p>

        {/* CTA Buttons — side-by-side matching Figma */}
        <div className="mt-5 flex flex-row items-center justify-center gap-3 sm:mt-6 sm:gap-4 md:mt-7 z-30">
          <Link
            href="/contact/#inquire"
            data-open-tutor-modal="true"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#35D0BA] text-[#101D36] font-bold text-xs sm:text-sm md:text-base hover:bg-[#2fc4af] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0BA]"
          >
            <span>Find Your Tutor</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" strokeWidth={2.5} />
          </Link>
          <Link
            href="/classes/"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#111D37] border border-[#2D456E] text-white font-medium text-xs sm:text-sm md:text-base hover:bg-white/10 hover:border-slate-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Explore Classes</span>
          </Link>
        </div>
      </div>

      {/* =========================================================================
          CENTER ILLUSTRATION STAGE (Teal Circle, Teacher-Student, Bottom Strip, Flankers)
          - Phone / Under 950px view:
            * Larger character illustration (w-[390px] sm:w-[500px] md:w-[640px])
            * Larger teal circle (w-[92%])
            * Bottom white desk strip has increased height (h-24 sm:h-28)
            * Teacher & student are elevated (bottom-12 sm:bottom-14) resting on the desk
            * Teal circle is LOCKED directly behind the teacher & student (inside same wrapper)
            * Rocket and Goal Board sit flanking at upper circle level
          - Desktop mode:
            * Bottom white strip is thin (md:h-8 lg:h-10) matching Desktop - 1
            * Teacher & student rest directly at the bottom edge (md:bottom-0) with NO void
            * Teal circle stays centered behind the teacher & student
            * Rocket and Goal Board sit flanking at bottom desk level
          ========================================================================= */}
      <div className="relative w-full flex-shrink-0 flex flex-col justify-end items-center min-h-[340px] sm:min-h-[400px] md:min-h-[440px] lg:flex-1">
        {/* Bottom White Desk Strip:
            - Phone view: taller (h-24 sm:h-28) pure white desk surface
            - Desktop mode: thin (md:h-8 lg:h-10) matching Desktop - 1 */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 md:h-8 lg:h-10 bg-white z-20 pointer-events-none"
        />

        {/* Flanking Left: Rocket Launcher + Launch Cloud
            - Below 450px: top-16 to stay aligned with the lowered text/buttons
            - Phone view: positioned higher up on the left flank above the circle (top-8 sm:top-12)
            - Desktop mode: positioned down at bottom desk level (md:bottom-2 lg:bottom-3) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-3 sm:left-6 md:left-8 lg:left-14 xl:left-20 max-[450px]:top-16 top-8 sm:top-12 md:top-auto md:bottom-2 lg:bottom-3 w-16 sm:w-20 md:w-28 lg:w-36 xl:w-44 z-25 flex flex-col items-center opacity-50"
        >
          <div className="animate-rocket w-full">
            <Image
              src="/rocket-only-launcher.png"
              alt=""
              width={260}
              height={159}
              className="w-full h-auto object-contain drop-shadow-sm"
            />
          </div>
          <div className="animate-smoke w-full -mt-2 sm:-mt-3 md:-mt-4">
            <Image
              src="/Rocket-cloude-part.png"
              alt=""
              width={260}
              height={76}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Flanking Right: Goal Board
            - Below 450px: top-10 to stay aligned with the lowered text/buttons
            - Phone view: positioned higher up on the right flank above the circle (top-2 sm:top-6)
            - Desktop mode: positioned down at bottom desk level (md:bottom-2 lg:bottom-3) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-3 sm:right-6 md:right-8 lg:right-14 xl:right-20 max-[450px]:top-10 top-2 sm:top-6 md:top-auto md:bottom-2 lg:bottom-3 w-18 sm:w-24 md:w-36 lg:w-48 xl:w-56 z-25 drop-shadow-sm opacity-50"
        >
          <Image
            src="/goal-board.png"
            alt=""
            width={360}
            height={240}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Main Teacher & Student Illustration with Teal Circle Background
            LOCKED TOGETHER: Teal circle is an absolute child behind the character image.
            They can NEVER separate on any viewport height!
            - Under 950px: larger character wrapper and larger circle dome.
            - Phone view: elevated (bottom-12 sm:bottom-14) to rest cleanly on the taller white desk strip.
            - Desktop mode: rests right at the bottom edge (md:bottom-0) with zero gap underneath. */}
        <div className="relative bottom-12 sm:bottom-14 md:bottom-0 pointer-events-none w-[390px] sm:w-[500px] md:w-[640px] max-[950px]:w-[410px] max-[950px]:sm:w-[520px] max-[950px]:md:w-[660px] lg:w-[700px] xl:w-[780px] max-w-[95vw] flex justify-center">
          {/* Teal Circle Background — Locked directly behind the teacher & student */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 top-[82%] sm:top-[78%] md:top-[78%] lg:top-[58%] -translate-y-1/2 w-[76%] sm:w-[78%] md:w-[76%] max-[950px]:w-[76%] lg:w-[70%] xl:w-[72%] aspect-square rounded-full bg-[#35D0BA] z-10 pointer-events-none"
          />

          {/* Main Teacher and Student Image */}
          <Image
            src="/teacher-student-hero-image.png"
            alt="Wellfind Academic teacher tutoring a young student at home in Patna"
            width={820}
            height={495}
            priority
            className="relative z-30 w-full h-auto object-contain block"
          />
        </div>
      </div>
    </section>
  );
}
