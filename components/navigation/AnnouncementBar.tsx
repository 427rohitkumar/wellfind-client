"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  MessageCircleQuestion,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { useTutorEnquiryModal } from "@/components/inquiry/modal/TutorEnquiryModalContext";

const MESSAGES: { icon: LucideIcon; text: string }[] = [
  { icon: GraduationCap, text: "Board Exam 2027 Preparation" },
  { icon: BookOpen, text: "Class 10th & 12th" },
  { icon: UserCheck, text: "Subject-wise expert tutors" },
  { icon: MessageCircleQuestion, text: "Revision & doubt solving" },
  { icon: ClipboardCheck, text: "Exam practice" },
  { icon: ArrowRight, text: "Find a tutor now" },
];

/** Repeated so one group is always wider than the screen (keeps the loop seamless). */
const GROUP = [...MESSAGES, ...MESSAGES, ...MESSAGES];

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {GROUP.map(({ icon: Icon, text }, i) => (
        <li key={i} className="flex items-center whitespace-nowrap">
          <Icon className="mr-2 h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={2.5} aria-hidden="true" />
          <span>{text}</span>
          <span
            aria-hidden="true"
            className="mx-5 h-3.5 w-px bg-[#101D36]/30 sm:mx-8"
          />
        </li>
      ))}
    </ul>
  );
}

/**
 * Thin, endlessly scrolling campaign strip shown above the header on the landing page only.
 * The `id` lets globals.css reserve its height in the hero (see `--announcement-h`).
 */
export function AnnouncementBar() {
  const pathname = usePathname();
  const { openModal } = useTutorEnquiryModal();

  if (pathname !== "/") return null;

  return (
    <div id="announcement-bar" className="w-full bg-[#35D0BA] text-[#101D36]">
      <a
        href="/contact/#inquire"
        data-open-tutor-modal="true"
        onClick={(e) => {
          e.preventDefault();
          openModal();
        }}
        aria-label="Board Exam 2027 preparation with expert tutors. Find a tutor now."
        className="group block h-9 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#101D36]"
      >
        <div className="animate-marquee flex h-full w-max items-center text-xs font-semibold tracking-wide group-hover:[animation-play-state:paused] group-focus-visible:[animation-play-state:paused] sm:text-[13px]">
          <Group />
          <Group hidden />
        </div>
      </a>
    </div>
  );
}
