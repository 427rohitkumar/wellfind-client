"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppCTA } from "@/components/inquiry/WhatsAppCTA";

export interface ProcessStep {
  step: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  sparkDirection: "left" | "right";
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    image: "/step-1-requirment.png",
    alt: "Share your child's tutoring requirements - class, subjects, location and timing",
    title: "Your Requirements",
    description:
      "Share your child’s class, subjects, location, preferred timing and budget.",
    sparkDirection: "left",
  },
  {
    step: "02",
    image: "/step-2-test.png",
    alt: "Conducting diagnostic assessment test to identify learning gaps and focus areas",
    title: "Conducting Test",
    description:
      "A short assessment test to understand your child’s current learning level and improvement areas.",
    sparkDirection: "left",
  },
  {
    step: "03",
    image: "/step-3-teacher-maping.png",
    alt: "Shortlisting verified home tutors matched to academic requirements and personality",
    title: "Matching Teacher",
    description:
      "We identify and shortlist suitable teachers based on your requirements and the assessment results.",
    sparkDirection: "right",
  },
  {
    step: "04",
    image: "/step-4-demo-learning.png",
    alt: "2-Day demo trial classes with the tutor before regular home tuition starts",
    title: "Demo + Learning Start",
    description:
      "Take a 2-day demo with the teacher to ensure the right fit. If it works well, start regular learning.",
    sparkDirection: "right",
  },
];

function SparkDoodle({
  direction = "left",
  className = "",
}: {
  direction?: "left" | "right";
  className?: string;
}) {
  if (direction === "left") {
    return (
      <svg
        className={`w-5 h-5 text-[#00B29A] ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <line x1="20" y1="5" x2="14" y2="8" />
        <line x1="22" y1="12" x2="15" y2="12" />
        <line x1="20" y1="19" x2="14" y2="16" />
      </svg>
    );
  }
  return (
    <svg
      className={`w-5 h-5 text-[#00B29A] ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="4" y1="5" x2="10" y2="8" />
      <line x1="2" y1="12" x2="9" y2="12" />
      <line x1="4" y1="19" x2="10" y2="16" />
    </svg>
  );
}

function ProgressMarker({
  state,
  stepNumber,
  stepTitle,
  size = "md",
}: {
  state: "upcoming" | "active" | "completed";
  stepNumber: string;
  stepTitle: string;
  size?: "sm" | "md" | "responsive";
}) {
  const isCompleted = state === "completed";
  const isActive = state === "active";

  const sizeClasses =
    size === "sm"
      ? "w-6 h-6"
      : size === "responsive"
      ? "w-6 h-6 lg:w-8 lg:h-8"
      : "w-7 h-7 sm:w-8 sm:h-8";
  const iconSize =
    size === "sm" ? "w-3.5 h-3.5" : "w-3.5 h-3.5 lg:w-4 lg:h-4";

  return (
    <div
      role="status"
      aria-label={`Step ${stepNumber}: ${stepTitle} (${
        isCompleted ? "Completed" : isActive ? "In Progress" : "Upcoming"
      })`}
      className={`rounded-full flex items-center justify-center transition-all duration-300 ${sizeClasses} ${
        isCompleted
          ? "bg-[#00B29A] border-2 border-[#00B29A] text-white shadow-xs"
          : isActive
          ? "bg-white border-2 border-[#00B29A] ring-4 ring-[#00B29A]/20 text-[#00B29A] shadow-xs"
          : "bg-white border-2 border-[#CBD5E1] text-[#94A3B8]"
      }`}
    >
      {isCompleted ? (
        <Check className={`${iconSize} text-white`} strokeWidth={3} />
      ) : isActive ? (
        <div className="w-2.5 h-2.5 rounded-full bg-[#00B29A] animate-pulse" />
      ) : (
        <div className="w-2 h-2 rounded-full bg-[#CBD5E1]" />
      )}
    </div>
  );
}

function StepCard({
  step,
  index,
  state,
  isLast,
  showConnector = false,
}: {
  step: ProcessStep;
  index: number;
  state: "upcoming" | "active" | "completed";
  isLast: boolean;
  showConnector?: boolean;
}) {
  const isActive = state === "active";
  const isCompleted = state === "completed";

  return (
    <div className="relative flex flex-col group h-full flex-1">
      {/* Card wrapper */}
      <div
        className={`flex-1 flex flex-col rounded-3xl bg-white p-4 sm:p-5 transition-all duration-300 ${
          isActive
            ? "border border-[#00B29A] ring-2 ring-[#00B29A]/20 shadow-md shadow-[#00B29A]/10"
            : isCompleted
            ? "border border-[#A4E6DC] shadow-sm hover:shadow-md"
            : "border border-[#E2F0EC] shadow-sm hover:shadow-md hover:border-[#35D0BA]/50"
        }`}
      >
        {/* Illustration Container */}
        <div className="relative w-full aspect-[4/3] min-h-[190px] sm:min-h-[210px] rounded-2xl bg-[#F6FCFA] flex items-center justify-center p-3 overflow-hidden">
          {/* Step Number Circle */}
          <div className="absolute top-2.5 left-2.5 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00B29A] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-md shadow-[#00B29A]/30 border-2 border-white">
            {step.step}
          </div>

          {/* Spark Accent Doodle */}
          <div
            className={`absolute pointer-events-none ${
              step.sparkDirection === "left"
                ? "left-2 top-1/2 -translate-y-1/2"
                : "right-2 top-4"
            }`}
          >
            <SparkDoodle direction={step.sparkDirection} />
          </div>

          {/* 3D Character Illustration */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={step.image}
              alt={step.alt}
              width={480}
              height={360}
              className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              priority={index === 0}
            />
          </div>
        </div>

        {/* Step Title & Description in subtle tinted box */}
        <div className="mt-4 flex-1 flex flex-col justify-start rounded-2xl bg-[#F8FCFB] border border-[#E9F4F0] p-4 text-left">
          <h3 className="text-lg sm:text-xl font-bold text-[#101D36] tracking-tight mb-2">
            {step.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>

      {/* Desktop Connecting Arrow (lg+) */}
      {showConnector && !isLast && (
        <div
          aria-hidden="true"
          className="hidden lg:flex items-center justify-center absolute left-full top-[125px] xl:top-[135px] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none w-10 xl:w-12"
        >
          <div className="w-full border-t-2 border-dashed border-[#86DFC9]" />
          <div className="shrink-0 w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-[#00B29A] text-white flex items-center justify-center shadow-sm mx-0.5">
            <ArrowRight
              className="w-3.5 h-3.5 xl:w-4 xl:h-4"
              strokeWidth={2.5}
            />
          </div>
          <div className="w-full border-t-2 border-dashed border-[#86DFC9]" />
        </div>
      )}
    </div>
  );
}

export interface HowItWorksProcessProps {
  eyebrow?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  steps?: ProcessStep[];
}

export function HowItWorksProcess({
  eyebrow = "HOW IT WORKS",
  headingPrefix = "Find the Right Tutor in",
  headingHighlight = "4 Simple Steps",
  steps,
}: HowItWorksProcessProps = {}) {
  const activeSteps = steps || processSteps;
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const [progress, setProgress] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const lastIndex = Math.max(activeSteps.length - 1, 1);

  // Helper to get step state from current progress (0..1 across all steps)
  const getStepState = useCallback(
    (idx: number): "upcoming" | "active" | "completed" => {
      const position = idx / lastIndex;
      const next = (idx + 1) / lastIndex;
      if (idx === lastIndex) {
        if (progress >= 0.99) return "completed";
        return progress >= 0.95 ? "active" : "upcoming";
      }
      if (progress >= next - 0.005) return "completed";
      if (progress >= position - 0.0001) return "active";
      return "upcoming";
    },
    [progress, lastIndex]
  );

  // Fill fraction (0..1) of the connector segment that starts at step `idx`
  const getSegmentFill = (idx: number) =>
    Math.max(0, Math.min(1, progress * lastIndex - idx));

  // IntersectionObserver to only run scroll calculations when the section is near viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { rootMargin: "150px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Scroll calculation
  useEffect(() => {
    if (!isSectionVisible) return;

    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        if (!sectionRef.current) return;

        if (
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          setProgress(1);
          return;
        }

        const viewportHeight = window.innerHeight;

        const isMobile = window.innerWidth < 1024;
        const first = itemRefs.current[0];
        const last = itemRefs.current[activeSteps.length - 1];

        if (isMobile && first && last) {
          // Stacked layout: scroll-linked through the cards, card to card
          const focalY = viewportHeight * 0.38; // Eye reading focal level
          const firstTop = first.getBoundingClientRect().top;
          const lastTop = last.getBoundingClientRect().top;

          if (focalY <= firstTop) {
            setProgress(0);
          } else if (focalY >= lastTop) {
            setProgress(1);
          } else {
            let currentSegment = 0;
            let segmentFraction = 0;

            for (let i = 0; i < activeSteps.length - 1; i++) {
              const c1 = itemRefs.current[i];
              const c2 = itemRefs.current[i + 1];
              if (!c1 || !c2) continue;

              const c1Top = c1.getBoundingClientRect().top;
              const c2Top = c2.getBoundingClientRect().top;

              if (focalY >= c1Top && focalY < c2Top) {
                currentSegment = i;
                segmentFraction = (focalY - c1Top) / (c2Top - c1Top);
                break;
              }
            }

            const p = (currentSegment + segmentFraction) / (activeSteps.length - 1);
            setProgress(Math.max(0, Math.min(1, p)));
          }
        } else {
          // Row layout: progress fills as the 4-step row scrolls through the reading zone
          const listRect = listRef.current?.getBoundingClientRect();
          if (!listRect) return;

          const startY = viewportHeight * 0.65;
          const endY = viewportHeight * 0.10;
          const totalDistance = startY - endY;
          const currentScrolled = startY - listRect.top;

          const p = Math.max(0, Math.min(1, currentScrolled / totalDistance));
          setProgress(p);
        }
      });
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isSectionVisible, activeSteps.length]);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-16 md:py-24 bg-gradient-to-b from-white via-[#F7FCFA] to-white border-b border-[#D7E2EE] overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E0F7F3]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching user mockup */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E0F7F3] border border-[#A4E6DC] text-[#00A88F] font-bold text-xs uppercase tracking-wider mb-4 shadow-xs">
            {eyebrow}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight text-[#101D36] leading-tight">
            {headingPrefix} <br />
            <span className="relative inline-block text-[#00B29A] mt-1 sm:mt-1.5">
              {headingHighlight}
              {/* Cute 3 doodle rays matching mockup */}
              <svg
                className="absolute -top-3.5 -right-6 sm:-right-8 w-6 h-6 sm:w-7 sm:h-7 text-[#00B29A]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="5" y1="19" x2="2" y2="21" />
                <line x1="10" y1="13" x2="17" y2="7" />
                <line x1="12" y1="19" x2="19" y2="18" />
              </svg>
            </span>
          </h2>
        </div>

        {/* Single responsive list: vertical timeline below lg, horizontal 4-column row from lg */}
        <ol
          ref={listRef}
          aria-label="How it works: 4 simple steps"
          className="relative mx-auto max-w-xl lg:max-w-none grid grid-cols-1 lg:grid-cols-4 lg:gap-6 xl:gap-8 items-stretch list-none p-0"
        >
          {activeSteps.map((step, index) => {
            const state = getStepState(index);
            const isLast = index === activeSteps.length - 1;
            const fill = getSegmentFill(index);

            return (
              <li
                key={step.step}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`relative flex flex-col pl-11 sm:pl-16 lg:pl-0 lg:pt-14 ${
                  isLast ? "" : "pb-6 sm:pb-8 lg:pb-0"
                }`}
              >
                {/* Progress segment to the next step (vertical on mobile, horizontal on lg) */}
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-4 top-9 h-full w-1.5 -translate-x-1/2 overflow-hidden rounded-full bg-[#E2E8F0] sm:left-6 lg:left-1/2 lg:top-4 lg:h-1.5 lg:w-[calc(100%+1.5rem)] lg:-translate-y-1/2 lg:translate-x-0 xl:w-[calc(100%+2rem)]"
                  >
                    <div
                      className="w-full rounded-full bg-[#00B29A] transition-[height,width] duration-150 ease-out h-(--fill) lg:h-full lg:w-(--fill)"
                      style={{ "--fill": `${fill * 100}%` } as React.CSSProperties}
                    />
                  </div>
                )}

                {/* Step marker (left of card on mobile, centred above card on lg) */}
                <div className="absolute left-4 top-9 z-10 -translate-x-1/2 -translate-y-1/2 sm:left-6 lg:left-1/2 lg:top-4">
                  <ProgressMarker
                    state={state}
                    stepNumber={step.step}
                    stepTitle={step.title}
                    size="responsive"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <StepCard
                    step={step}
                    index={index}
                    state={state}
                    isLast={isLast}
                    showConnector={true}
                  />
                </div>
              </li>
            );
          })}
        </ol>

        {/* Action Button at bottom */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="accent"
            size="lg"
            href="/contact/#inquire"
            data-open-tutor-modal="true"
          >
            <span>Find Your Tutor</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
          <WhatsAppCTA
            size="lg"
            variant="outline"
            className="border-[#00B29A]/50 text-[#00A88F] hover:bg-[#00B29A]/10 font-semibold"
            customMessage="Hello Wellfind Academic, I would like to enquire about a home tutor for my child in Patna."
          />
        </div>
      </div>
    </section>
  );
}
