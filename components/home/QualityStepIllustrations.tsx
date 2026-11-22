import React from "react";

/**
 * Small colour illustrations (not line icons) for the six quality checkpoints.
 * Drawn on a 64x64 grid with the Wellfind palette so they stay crisp at any size.
 */

const NAVY = "#101D36";
const NAVY_SOFT = "#26385F";
const TEAL = "#35D0BA";
const TEAL_DEEP = "#0F9F8C";
const TEAL_LIGHT = "#D7F6F1";
const BLUE = "#5C8FE8";
const BLUE_LIGHT = "#DCE8FB";
const AMBER = "#F5B84B";
const CORAL = "#F2765E";
const SKIN = "#F9D9B0";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
    >
      {children}
    </svg>
  );
}

/** 01 Requirement understood: clipboard with a magnifier. */
function RequirementArt() {
  return (
    <Frame>
      <rect x="12" y="10" width="32" height="42" rx="5" fill="#fff" stroke={NAVY} strokeWidth="2.5" />
      <rect x="22" y="6" width="12" height="8" rx="3" fill={TEAL} stroke={NAVY} strokeWidth="2.5" />
      <circle cx="21" cy="25" r="2.4" fill={TEAL} />
      <rect x="27" y="23.5" width="12" height="3" rx="1.5" fill={BLUE_LIGHT} />
      <circle cx="21" cy="34" r="2.4" fill={TEAL} />
      <rect x="27" y="32.5" width="9" height="3" rx="1.5" fill={BLUE_LIGHT} />
      <circle cx="21" cy="43" r="2.4" fill={AMBER} />
      <rect x="27" y="41.5" width="11" height="3" rx="1.5" fill={BLUE_LIGHT} />
      <path d="M50 51 L58 59" stroke={CORAL} strokeWidth="4.5" />
      <circle cx="44" cy="45" r="10" fill={TEAL_LIGHT} stroke={NAVY} strokeWidth="2.5" />
      <path d="M39.5 45.5 L43 49 L49 41.5" stroke={TEAL_DEEP} strokeWidth="2.8" />
    </Frame>
  );
}

/** 02 Assessment before we begin: test paper, pencil and a score badge. */
function AssessmentArt() {
  return (
    <Frame>
      <rect x="9" y="8" width="36" height="46" rx="5" fill="#fff" stroke={NAVY} strokeWidth="2.5" />
      <rect x="16" y="15" width="14" height="4" rx="2" fill={TEAL} />
      <circle cx="19" cy="28" r="3.2" fill={TEAL} />
      <path d="M17.5 28 L18.8 29.3 L21 26.8" stroke="#fff" strokeWidth="1.6" />
      <rect x="26" y="26.5" width="13" height="3" rx="1.5" fill={BLUE_LIGHT} />
      <circle cx="19" cy="38" r="3.2" fill={TEAL} />
      <path d="M17.5 38 L18.8 39.3 L21 36.8" stroke="#fff" strokeWidth="1.6" />
      <rect x="26" y="36.5" width="10" height="3" rx="1.5" fill={BLUE_LIGHT} />
      <circle cx="19" cy="47" r="3.2" fill="#fff" stroke={NAVY} strokeWidth="1.8" />
      <rect x="26" y="45.5" width="12" height="3" rx="1.5" fill={BLUE_LIGHT} />
      <g transform="rotate(35 50 40)">
        <rect x="46.5" y="22" width="7" height="26" rx="1.8" fill={AMBER} stroke={NAVY} strokeWidth="2" />
        <path d="M46.5 48 H53.5 L50 57 Z" fill={SKIN} stroke={NAVY} strokeWidth="2" />
        <rect x="46.5" y="22" width="7" height="5" rx="1.8" fill={CORAL} stroke={NAVY} strokeWidth="2" />
      </g>
      <circle cx="47" cy="14" r="9" fill={BLUE} stroke={NAVY} strokeWidth="2.5" />
      <text
        x="47"
        y="17.4"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="800"
        fill="#fff"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        A+
      </text>
    </Frame>
  );
}

/** 03 Right teacher, 2-day demo: teacher with a graduation cap and a "fit confirmed" badge. */
function TeacherArt() {
  return (
    <Frame>
      <path d="M12 58 C12 46 20 40 31 40 C42 40 50 46 50 58 Z" fill={BLUE} stroke={NAVY} strokeWidth="2.5" />
      <path d="M26 40 L31 47 L36 40" fill="#fff" stroke={NAVY} strokeWidth="2" />
      <circle cx="31" cy="27" r="10" fill={SKIN} stroke={NAVY} strokeWidth="2.5" />
      <path d="M22.5 20 L31 24 L39.5 20 L31 7 Z" fill="none" />
      <path d="M21 21 V26 C21 29 41 29 41 26 V21" fill={NAVY_SOFT} stroke={NAVY} strokeWidth="2" />
      <path d="M31 8 L53 16 L31 24 L9 16 Z" fill={NAVY} stroke={NAVY} strokeWidth="2" />
      <path d="M49 17.5 V27" stroke={AMBER} strokeWidth="2.2" />
      <circle cx="49" cy="29" r="2.4" fill={AMBER} />
      <circle cx="26.8" cy="31" r="1.3" fill={NAVY} stroke="none" />
      <circle cx="35.2" cy="31" r="1.3" fill={NAVY} stroke="none" />
      <path d="M28.5 35 C30 36.4 32 36.4 33.5 35" stroke={NAVY} strokeWidth="1.6" />
      <circle cx="50" cy="48" r="10" fill={TEAL} stroke="#fff" strokeWidth="3" />
      <path d="M45 48.5 L49 52.5 L55.5 44.5" stroke="#fff" strokeWidth="3.2" />
    </Frame>
  );
}

/** 04 Structured classes: planned calendar with a clock. */
function ScheduleArt() {
  return (
    <Frame>
      <rect x="7" y="12" width="42" height="42" rx="6" fill="#fff" stroke={NAVY} strokeWidth="2.5" />
      <path d="M7 24 V18 C7 14.7 9.7 12 13 12 H43 C46.3 12 49 14.7 49 18 V24 Z" fill={TEAL} stroke={NAVY} strokeWidth="2.5" />
      <path d="M18 7 V16 M38 7 V16" stroke={NAVY} strokeWidth="3" />
      <rect x="13" y="30" width="6" height="6" rx="1.6" fill={TEAL_DEEP} />
      <rect x="25" y="30" width="6" height="6" rx="1.6" fill={TEAL_DEEP} />
      <rect x="37" y="30" width="6" height="6" rx="1.6" fill={BLUE_LIGHT} />
      <rect x="13" y="41" width="6" height="6" rx="1.6" fill={TEAL_DEEP} />
      <rect x="25" y="41" width="6" height="6" rx="1.6" fill={BLUE_LIGHT} />
      <circle cx="46" cy="46" r="12" fill="#fff" stroke={NAVY} strokeWidth="2.5" />
      <circle cx="46" cy="46" r="8.4" fill={TEAL_LIGHT} />
      <path d="M46 40 V46 L50.5 49" stroke={CORAL} strokeWidth="2.6" />
    </Frame>
  );
}

/** 05 Weekly tests & practice: notebook, pencil and a star. */
function PracticeArt() {
  return (
    <Frame>
      <rect x="9" y="8" width="38" height="47" rx="5" fill="#fff" stroke={NAVY} strokeWidth="2.5" />
      <path d="M9 13 C9 10.2 11.2 8 14 8 H19 V55 H14 C11.2 55 9 52.8 9 50 Z" fill={BLUE} stroke={NAVY} strokeWidth="2.5" />
      <circle cx="14" cy="18" r="1.6" fill="#fff" stroke="none" />
      <circle cx="14" cy="31" r="1.6" fill="#fff" stroke="none" />
      <circle cx="14" cy="44" r="1.6" fill="#fff" stroke="none" />
      <path d="M25 21 L27.5 23.5 L32 18.5" stroke={TEAL_DEEP} strokeWidth="2.4" />
      <rect x="35" y="19.5" width="8" height="3" rx="1.5" fill={BLUE_LIGHT} />
      <path d="M25 33 L27.5 35.5 L32 30.5" stroke={TEAL_DEEP} strokeWidth="2.4" />
      <rect x="35" y="31.5" width="8" height="3" rx="1.5" fill={BLUE_LIGHT} />
      <circle cx="28" cy="45" r="2.6" fill="#fff" stroke={NAVY} strokeWidth="1.8" />
      <rect x="35" y="43.5" width="8" height="3" rx="1.5" fill={BLUE_LIGHT} />
      <g transform="rotate(38 51 42)">
        <rect x="47.5" y="25" width="7" height="24" rx="1.8" fill={CORAL} stroke={NAVY} strokeWidth="2" />
        <path d="M47.5 49 H54.5 L51 57 Z" fill={SKIN} stroke={NAVY} strokeWidth="2" />
      </g>
      <path
        d="M50 5 L52.6 10.8 L58.9 11.5 L54.2 15.7 L55.5 21.9 L50 18.8 L44.5 21.9 L45.8 15.7 L41.1 11.5 L47.4 10.8 Z"
        fill={AMBER}
        stroke={NAVY}
        strokeWidth="1.8"
      />
    </Frame>
  );
}

/** 06 Progress review & support: rising bar chart with a trend arrow. */
function ProgressArt() {
  return (
    <Frame>
      <rect x="7" y="10" width="50" height="46" rx="6" fill="#fff" stroke={NAVY} strokeWidth="2.5" />
      <path d="M14 48 H50" stroke={BLUE_LIGHT} strokeWidth="2" />
      <rect x="15" y="36" width="8" height="12" rx="1.8" fill={BLUE_LIGHT} stroke={NAVY} strokeWidth="1.8" />
      <rect x="28" y="28" width="8" height="20" rx="1.8" fill={BLUE} stroke={NAVY} strokeWidth="1.8" />
      <rect x="41" y="20" width="8" height="28" rx="1.8" fill={TEAL} stroke={NAVY} strokeWidth="1.8" />
      <path d="M13 31 L26 22 L35 26 L50 12" stroke={CORAL} strokeWidth="3.2" />
      <path d="M43 11.5 L52.5 9.5 L51 19 Z" fill={CORAL} stroke={CORAL} strokeWidth="1.5" />
      <circle cx="13" cy="31" r="2.2" fill="#fff" stroke={CORAL} strokeWidth="2" />
      <circle cx="26" cy="22" r="2.2" fill="#fff" stroke={CORAL} strokeWidth="2" />
      <circle cx="35" cy="26" r="2.2" fill="#fff" stroke={CORAL} strokeWidth="2" />
    </Frame>
  );
}

export type QualityStepArt =
  | "requirement"
  | "assessment"
  | "teacher"
  | "schedule"
  | "practice"
  | "progress";

const ART: Record<QualityStepArt, () => React.JSX.Element> = {
  requirement: RequirementArt,
  assessment: AssessmentArt,
  teacher: TeacherArt,
  schedule: ScheduleArt,
  practice: PracticeArt,
  progress: ProgressArt,
};

export function QualityStepIllustration({ art }: { art: QualityStepArt }) {
  const Art = ART[art];
  return <Art />;
}
