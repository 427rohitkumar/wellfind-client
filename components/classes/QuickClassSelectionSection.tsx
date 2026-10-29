import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";

interface ClassCardData {
  badge: string;
  badgeBg: string;
  badgeText: string;
  heading: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  footerLink: string;
  href: string;
  upperBg: string;
  arrowCircleBg: string;
  arrowIconColor: string;
  hoverBorder: string;
  footerHoverText: string;
}

const CLASS_CARDS: ClassCardData[] = [
  {
    badge: "Pre-Primary",
    badgeBg: "bg-[#C7F1EB]",
    badgeText: "text-[#0B7C6E]",
    heading: "UKG",
    description: "Foundational learning with phonics, early numbers and more.",
    image: "/UKG.png",
    imageWidth: 740,
    imageHeight: 532,
    footerLink: "View UKG Details",
    href: "/classes/ukg/",
    upperBg: "bg-[#E3F7F4]",
    arrowCircleBg: "bg-[#D7F6F4]",
    arrowIconColor: "text-[#00897B]",
    hoverBorder: "hover:border-[#00897B]/50",
    footerHoverText: "group-hover:text-[#00897B]",
  },
  {
    badge: "Primary School",
    badgeBg: "bg-[#CBE3FD]",
    badgeText: "text-[#1A6FC4]",
    heading: "Class 1 to 5",
    description: "Build strong basics in all key subjects.",
    image: "/class-1-to-5.png",
    imageWidth: 615,
    imageHeight: 527,
    footerLink: "View Classes 1 to 5",
    href: "/classes/class-1/",
    upperBg: "bg-[#E4F1FE]",
    arrowCircleBg: "bg-[#DCECFE]",
    arrowIconColor: "text-[#1A6FC4]",
    hoverBorder: "hover:border-[#1A6FC4]/50",
    footerHoverText: "group-hover:text-[#1A6FC4]",
  },
  {
    badge: "Middle School",
    badgeBg: "bg-[#FEDEC2]",
    badgeText: "text-[#C76200]",
    heading: "Class 6 to 8",
    description: "Strengthen concepts and develop problem solving skills.",
    image: "/class-6-to-8.png",
    imageWidth: 681,
    imageHeight: 502,
    footerLink: "View Classes 6 to 8",
    href: "/classes/class-6/",
    upperBg: "bg-[#FFF0E4]",
    arrowCircleBg: "bg-[#FFE8D6]",
    arrowIconColor: "text-[#C76200]",
    hoverBorder: "hover:border-[#C76200]/50",
    footerHoverText: "group-hover:text-[#C76200]",
  },
  {
    badge: "Secondary School",
    badgeBg: "bg-[#DFD5FC]",
    badgeText: "text-[#6C47C8]",
    heading: "Class 9 to 10",
    description: "Concept clarity and exam-focused support for better preparation.",
    image: "/class-9-10.png",
    imageWidth: 638,
    imageHeight: 499,
    footerLink: "View Classes 9 to 10",
    href: "/classes/class-9/",
    upperBg: "bg-[#F1EDFE]",
    arrowCircleBg: "bg-[#ECE4FE]",
    arrowIconColor: "text-[#6C47C8]",
    hoverBorder: "hover:border-[#6C47C8]/50",
    footerHoverText: "group-hover:text-[#6C47C8]",
  },
];

export function QuickClassSelectionSection() {
  return (
    <section
      id="stages"
      className="relative w-full bg-gradient-to-b from-[#F2F7FD] via-[#EEF5FC] to-[#EBF3FB] border-b border-[#D7E2EE] py-14 sm:py-18 lg:py-20 scroll-mt-20"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* ======================================================== */}
        {/* SECTION HEADER */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D7F6F1] border border-[#35D0BA]/40 text-[#0F6F63] font-bold text-xs uppercase tracking-wider mb-3.5 sm:mb-4 shadow-2xs">
            <GraduationCap className="w-3.5 h-3.5 text-[#00897B]" strokeWidth={2.4} />
            <span>CHOOSE A CLASS</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#101D36] tracking-tight leading-[1.16]">
            Find Tutors by Class
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-base sm:text-lg text-[#53647D] max-w-2xl leading-relaxed">
            Select your child’s class to explore syllabus details and find the right tutor.
          </p>
        </div>

        {/* ======================================================== */}
        {/* FOUR CLASS SELECTION CARDS */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-10 sm:mt-12">
          {CLASS_CARDS.map((card) => (
            <Link
              key={card.heading}
              href={card.href}
              aria-label={`${card.footerLink} — ${card.badge} ${card.heading}`}
              className={`group flex flex-col rounded-2xl sm:rounded-[22px] bg-white border border-[#DCE5EF] ${card.hoverBorder} shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00897B] focus-visible:ring-offset-2`}
            >
              {/* Upper Content Area */}
              <div
                className={`relative overflow-hidden p-5 sm:p-5.5 h-[200px] sm:h-[210px] lg:h-[215px] xl:h-[220px] ${card.upperBg} transition-colors flex flex-col justify-between`}
              >
                {/* Text Content (Left side, bounded to prevent overlapping image) */}
                <div className="relative z-10 max-w-[56%] sm:max-w-[54%] xl:max-w-[56%]">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase ${card.badgeBg} ${card.badgeText}`}
                  >
                    {card.badge}
                  </span>

                  <h3 className="text-2xl sm:text-[25px] font-black text-[#101D36] tracking-tight mt-2.5 leading-none">
                    {card.heading}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#53647D] leading-snug mt-2 line-clamp-3">
                    {card.description}
                  </p>
                </div>

                {/* Student Illustration (Right side, bottom-aligned) */}
                <div className="absolute right-0 bottom-0 w-[48%] sm:w-[47%] lg:w-[48%] h-[86%] sm:h-[88%] lg:h-[90%] pointer-events-none flex items-end justify-end">
                  <Image
                    src={card.image}
                    alt={card.heading}
                    width={card.imageWidth}
                    height={card.imageHeight}
                    className="w-auto h-full max-h-full object-contain object-bottom select-none transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Bottom Footer Area */}
              <div className="bg-white border-t border-[#E8EFF6] px-5 py-3.5 sm:py-4 flex items-center justify-between transition-colors">
                <span
                  className={`text-xs sm:text-sm font-bold text-[#101D36] ${card.footerHoverText} transition-colors`}
                >
                  {card.footerLink}
                </span>

                {/* Circular Arrow Button */}
                <div
                  className={`w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full ${card.arrowCircleBg} ${card.arrowIconColor} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200`}
                >
                  <ArrowRight className="w-4 h-4 stroke-[2.3] transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
