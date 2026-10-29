"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  UsersRound,
  ChartNoAxesCombined,
  FlaskConical,
  Globe,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

type AcademicTabId = "ukg" | "primary" | "middle" | "secondary";

interface SubjectItem {
  name: string;
  description: string;
  iconType: "book" | "math" | "flask" | "hindi" | "globe";
  accent: "blue" | "mint" | "orange" | "purple" | "pink";
  href: string;
}

interface AcademicLevelContent {
  id: AcademicTabId;
  tabTitle: string;
  tabSubtitle: string;
  tabIcon: React.ElementType;
  heading: string;
  description: string;
  ageAppropriateText: string;
  subjects: SubjectItem[];
}

const ACADEMIC_LEVELS: AcademicLevelContent[] = [
  {
    id: "ukg",
    tabTitle: "UKG",
    tabSubtitle: "Pre-Primary",
    tabIcon: GraduationCap,
    heading: "UKG – Key Learning Areas",
    description:
      "Build a strong foundation with fun and engaging learning in essential subjects.",
    ageAppropriateText:
      "Concepts designed to match the learning pace and understanding of UKG students.",
    subjects: [
      {
        name: "English",
        description: "Phonics, vocabulary, reading and writing basics.",
        iconType: "book",
        accent: "blue",
        href: "/classes/ukg/",
      },
      {
        name: "Mathematics",
        description: "Numbers, counting, shapes and basic math concepts.",
        iconType: "math",
        accent: "mint",
        href: "/classes/ukg/",
      },
      {
        name: "Science",
        description: "Explore the world with simple and fun concepts.",
        iconType: "flask",
        accent: "orange",
        href: "/classes/ukg/",
      },
      {
        name: "Hindi",
        description: "Varnamala, words, reading and writing practice.",
        iconType: "hindi",
        accent: "purple",
        href: "/classes/ukg/",
      },
      {
        name: "Environmental Studies",
        description: "Learn about our surroundings, nature and everyday life.",
        iconType: "globe",
        accent: "pink",
        href: "/classes/ukg/",
      },
    ],
  },
  {
    id: "primary",
    tabTitle: "Class 1 to 5",
    tabSubtitle: "Primary School",
    tabIcon: UsersRound,
    heading: "Classes 1 to 5 – Key Subjects",
    description:
      "Developing core literacy, numeracy, and environmental awareness with structured guidance.",
    ageAppropriateText:
      "Structured guidance tailored to primary school curricula across CBSE, ICSE, and State Boards.",
    subjects: [
      {
        name: "English",
        description: "Grammar, reading comprehension, writing skills and vocabulary.",
        iconType: "book",
        accent: "blue",
        href: "/classes/class-1/",
      },
      {
        name: "Mathematics",
        description: "Arithmetic, basic geometry, mental math, and word problems.",
        iconType: "math",
        accent: "mint",
        href: "/classes/class-1/",
      },
      {
        name: "Science",
        description: "Foundational science, living world, matter, and observations.",
        iconType: "flask",
        accent: "orange",
        href: "/classes/class-1/",
      },
      {
        name: "Hindi",
        description: "Grammar, Vyakaran, Sahitya, and fluent reading habits.",
        iconType: "hindi",
        accent: "purple",
        href: "/classes/class-1/",
      },
      {
        name: "Environmental Studies",
        description: "Social environment, nature conservation, and community life.",
        iconType: "globe",
        accent: "pink",
        href: "/classes/class-1/",
      },
    ],
  },
  {
    id: "middle",
    tabTitle: "Class 6 to 8",
    tabSubtitle: "Middle School",
    tabIcon: BookOpen,
    heading: "Classes 6 to 8 – Academic Subjects",
    description:
      "Strengthening subject-specific disciplines and transition to advanced problem solving.",
    ageAppropriateText:
      "Conceptual depth designed for middle schoolers navigating distinct science and math branches.",
    subjects: [
      {
        name: "Mathematics",
        description: "Algebra, integers, fractions, geometry, and linear equations.",
        iconType: "math",
        accent: "mint",
        href: "/classes/class-6/",
      },
      {
        name: "Science",
        description: "Introduction to Physics, Chemistry, and Biology disciplines.",
        iconType: "flask",
        accent: "orange",
        href: "/classes/class-6/",
      },
      {
        name: "English",
        description: "Advanced grammar, creative writing, prose, and literature.",
        iconType: "book",
        accent: "blue",
        href: "/classes/class-6/",
      },
      {
        name: "Social Science",
        description: "History, Civics, Geography, and society developments.",
        iconType: "globe",
        accent: "pink",
        href: "/classes/class-6/",
      },
      {
        name: "Hindi / Sanskrit",
        description: "Advanced Vyakaran, textbook comprehension, and expression.",
        iconType: "hindi",
        accent: "purple",
        href: "/classes/class-6/",
      },
    ],
  },
  {
    id: "secondary",
    tabTitle: "Class 9 to 10",
    tabSubtitle: "Secondary School",
    tabIcon: ChartNoAxesCombined,
    heading: "Classes 9 & 10 – Board Curriculum",
    description:
      "Rigorous concept clarity, exemplar problem solving, and board exam preparation.",
    ageAppropriateText:
      "Board-oriented preparation covering syllabus mastery, doubt clearance, and previous papers.",
    subjects: [
      {
        name: "Mathematics",
        description: "Quadratic equations, trigonometry, statistics, and coordinate geometry.",
        iconType: "math",
        accent: "mint",
        href: "/classes/class-9/",
      },
      {
        name: "Science (PCB)",
        description: "Rigorous Physics formulas, Chemistry reactions, and Biology diagrams.",
        iconType: "flask",
        accent: "orange",
        href: "/classes/class-9/",
      },
      {
        name: "English Language",
        description: "Literature analysis, essay writing, formal letters, and grammar.",
        iconType: "book",
        accent: "blue",
        href: "/classes/class-9/",
      },
      {
        name: "Social Science",
        description: "Modern world history, democratic politics, economics, and maps.",
        iconType: "globe",
        accent: "pink",
        href: "/classes/class-9/",
      },
      {
        name: "Hindi Course A/B",
        description: "Board syllabus coverage, Nibandh, Patra Lekhan, and Vyakaran.",
        iconType: "hindi",
        accent: "purple",
        href: "/classes/class-9/",
      },
    ],
  },
];

// Custom 4-symbol Math Icon matching reference (+ - × ÷)
function MathSymbolsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Plus */}
      <line x1="4" y1="7" x2="10" y2="7" />
      <line x1="7" y1="4" x2="7" y2="10" />
      {/* Minus */}
      <line x1="14" y1="7" x2="20" y2="7" />
      {/* Multiply */}
      <line x1="5" y1="15" x2="9" y2="19" />
      <line x1="9" y1="15" x2="5" y2="19" />
      {/* Divide */}
      <line x1="14" y1="17" x2="20" y2="17" />
      <circle cx="17" cy="14" r="0.8" fill="currentColor" />
      <circle cx="17" cy="20" r="0.8" fill="currentColor" />
    </svg>
  );
}

// Render icon with specific styling based on iconType
function RenderSubjectIcon({
  iconType,
  className,
}: {
  iconType: SubjectItem["iconType"];
  className?: string;
}) {
  switch (iconType) {
    case "book":
      return <BookOpen className={className} strokeWidth={2.2} />;
    case "math":
      return <MathSymbolsIcon className={className} />;
    case "flask":
      return <FlaskConical className={className} strokeWidth={2.2} />;
    case "hindi":
      return (
        <span
          className={`font-black leading-none select-none text-[17px] sm:text-[19px] ${className}`}
          aria-label="Hindi"
        >
          अ
        </span>
      );
    case "globe":
      return <Globe className={className} strokeWidth={2.2} />;
    default:
      return <BookOpen className={className} strokeWidth={2.2} />;
  }
}

// Color theme helper
function getAccentStyles(accent: SubjectItem["accent"]) {
  switch (accent) {
    case "blue":
      return {
        iconBg: "bg-[#E1EFFF]",
        iconColor: "text-[#1A6FC4]",
        arrowBg: "bg-[#E8F3FF]",
        arrowColor: "text-[#1A6FC4]",
      };
    case "mint":
      return {
        iconBg: "bg-[#D7F6F1]",
        iconColor: "text-[#00897B]",
        arrowBg: "bg-[#D7F6F1]",
        arrowColor: "text-[#00897B]",
      };
    case "orange":
      return {
        iconBg: "bg-[#FFEFE2]",
        iconColor: "text-[#C76200]",
        arrowBg: "bg-[#FFEFE2]",
        arrowColor: "text-[#C76200]",
      };
    case "purple":
      return {
        iconBg: "bg-[#F1EDFE]",
        iconColor: "text-[#6C47C8]",
        arrowBg: "bg-[#F1EDFE]",
        arrowColor: "text-[#6C47C8]",
      };
    case "pink":
      return {
        iconBg: "bg-[#FFEBF0]",
        iconColor: "text-[#D83A6F]",
        arrowBg: "bg-[#FFEBF0]",
        arrowColor: "text-[#D83A6F]",
      };
  }
}

export function SubjectsWeCoverSection() {
  const [activeTab, setActiveTab] = useState<AcademicTabId>("ukg");

  const currentLevel =
    ACADEMIC_LEVELS.find((l) => l.id === activeTab) || ACADEMIC_LEVELS[0];

  return (
    <section
      id="subjects"
      className="relative w-full bg-white border-b border-[#D7E2EE] py-14 sm:py-18 lg:py-20 scroll-mt-20"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* ======================================================== */}
        {/* 1. SECTION HEADER */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D7F6F1] border border-[#35D0BA]/40 text-[#0F6F63] font-bold text-xs uppercase tracking-wider mb-3.5 sm:mb-4 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-[#00897B]" strokeWidth={2.4} />
            <span>WHAT YOUR CHILD CAN LEARN</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#101D36] tracking-tight leading-[1.16]">
            Subjects We Cover
          </h2>

          {/* Description */}
          <p className="mt-3 text-base sm:text-lg text-[#53647D] max-w-2xl leading-relaxed">
            Comprehensive learning support across all major subjects, tailored to your child’s class level.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 2. ACADEMIC-LEVEL SELECTOR TABS (4 horizontal tabs) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mt-10 sm:mt-12">
          {ACADEMIC_LEVELS.map((level) => {
            const isActive = activeTab === level.id;
            const Icon = level.tabIcon;
            return (
              <button
                key={level.id}
                type="button"
                onClick={() => setActiveTab(level.id)}
                className={`relative flex items-center gap-3 sm:gap-3.5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00897B] ${
                  isActive
                    ? "bg-[#EBF8F6] border-[#CEEFEA] border-b-2 border-b-[#00897B] shadow-2xs"
                    : "bg-white border-[#E2E8F0] hover:bg-[#F9FBFC] hover:border-[#CBD5E1]"
                }`}
                aria-selected={isActive}
                role="tab"
              >
                {/* Icon Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isActive
                      ? "bg-[#D7F6F1] text-[#00897B]"
                      : "bg-[#F0F5FA] text-[#53647D]"
                  }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={2.2} />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <div className="text-sm sm:text-base font-bold text-[#101D36] truncate leading-tight">
                    {level.tabTitle}
                  </div>
                  <div
                    className={`text-xs mt-0.5 truncate leading-snug ${
                      isActive
                        ? "text-[#00897B] font-semibold"
                        : "text-[#53647D]"
                    }`}
                  >
                    {level.tabSubtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* 3. DYNAMIC SUBJECT CONTENT PANEL (Pale-mint Container) */}
        {/* ======================================================== */}
        <div className="bg-[#EBF8F6] border border-[#CEEFEA] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 xl:p-8 mt-5 sm:mt-6 transition-all duration-300">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-7 xl:gap-8 items-stretch">
            {/* LEFT COLUMN: Headings + 5 Subject Cards */}
            <div className="flex-1 min-w-0 flex flex-col justify-between">
              {/* Heading & Subtitle */}
              <div className="mb-4 sm:mb-5">
                <h3 className="text-xl sm:text-2xl font-black text-[#101D36] tracking-tight">
                  {currentLevel.heading}
                </h3>
                <p className="text-xs sm:text-sm text-[#53647D] mt-1 leading-relaxed">
                  {currentLevel.description}
                </p>
              </div>

              {/* Five Subject Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5 xl:gap-4">
                {currentLevel.subjects.map((subject) => {
                  const styles = getAccentStyles(subject.accent);
                  return (
                    <Link
                      key={subject.name}
                      href={subject.href}
                      className="group bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-[#E0EFEA] hover:border-[#35D0BA]/60 hover:shadow-2xs transition-all duration-200 flex flex-col justify-between h-[180px] sm:h-[195px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00897B]"
                    >
                      {/* Top: Icon + Title + Description */}
                      <div>
                        {/* Circular Pastel Icon Container */}
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 mb-2.5 sm:mb-3 ${styles.iconBg} ${styles.iconColor}`}
                        >
                          <RenderSubjectIcon
                            iconType={subject.iconType}
                            className="w-4.5 h-4.5"
                          />
                        </div>

                        {/* Title */}
                        <h4 className="text-sm sm:text-base font-bold text-[#101D36] leading-tight group-hover:text-[#00897B] transition-colors">
                          {subject.name}
                        </h4>

                        {/* Description */}
                        <p className="text-[11px] sm:text-xs text-[#53647D] leading-snug mt-1.5 line-clamp-3">
                          {subject.description}
                        </p>
                      </div>

                      {/* Bottom-right: Circular Arrow Button */}
                      <div
                        className={`w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full flex items-center justify-center self-end mt-2 shrink-0 ${styles.arrowBg} ${styles.arrowColor} transition-transform duration-200 group-hover:scale-105 group-hover:translate-x-0.5`}
                        aria-hidden="true"
                      >
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.3]" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: Information Panel with Decorative Illustration */}
            <div className="w-full lg:w-[270px] xl:w-[300px] shrink-0 border-t lg:border-t-0 lg:border-l border-[#D5EBE6] pt-5 lg:pt-0 lg:pl-6 xl:pl-7 flex flex-col justify-between">
              {/* White Information Card */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-4.5 border border-[#E0EFEA] shadow-2xs flex items-start gap-3 sm:gap-3.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFF8E7] flex items-center justify-center shrink-0">
                  <Lightbulb
                    className="w-5 h-5 text-[#E69B00] fill-[#FFD868]"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#101D36] leading-tight">
                    Age-Appropriate Learning
                  </h4>
                  <p className="text-xs text-[#53647D] mt-1 leading-snug">
                    {currentLevel.ageAppropriateText}
                  </p>
                </div>
              </div>

              {/* Decorative Illustration: Stacked Books, Stationery, and Plant */}
              <div className="mt-4 sm:mt-5 flex items-center justify-center">
                <Image
                  src="/books-plant-stationery.png"
                  alt="Age-appropriate learning materials: books and stationery"
                  width={245}
                  height={122}
                  className="w-full h-auto object-contain max-w-[240px] select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
