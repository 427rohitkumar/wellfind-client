import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Users,
  Compass,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CalendarCheck,
  Award,
  RefreshCw,
  Sparkles,
  GraduationCap,
  FileCheck,
  MessageSquare,
  ClipboardList,
  Layers,
  MapPin,
  TrendingUp,
  XCircle,
  Clock,
  HeartHandshake,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppCTA } from "@/components/inquiry/WhatsAppCTA";
import teachersHeroImg from "@/public/theachers-group-img.png";
import progressMeetingImg from "@/public/Student-Progress-Meeting.png";

export const metadata: Metadata = {
  title: "About Wellfind Academic | Managed One-to-One Home Education in Patna",
  description:
    "Wellfind Academic provides managed one-to-one home education for students from UKG to Class 10 in Patna. The right teacher, structured learning, and progress you can see.",
  alternates: {
    canonical: `${siteConfig.url}/about/`,
  },
  openGraph: {
    title: "About Wellfind Academic | Managed One-to-One Home Education in Patna",
    description:
      "Teachers deliver the education, but Wellfind maintains the quality. Learn about our structured approach to home tuition in Patna.",
    url: `${siteConfig.url}/about/`,
  },
};

// ============================================================================
// DATA DEFINITIONS
// ============================================================================

const APPROACH_STEPS = [
  {
    step: "01",
    name: "Understand",
    title: "Comprehensive Student Assessment",
    description:
      "We begin by understanding your child's class, school syllabus (CBSE, ICSE, or State Board), subject challenges, learning pace, preferred timing, and family preferences.",
    tag: "Needs Analysis",
    icon: Compass,
    accent: "bg-[#E1EFFF] text-[#1A6FC4] border-[#BDDCFF]",
  },
  {
    step: "02",
    name: "Match",
    title: "Suitable Teacher Selection",
    description:
      "We identify a suitable teacher from our verified network based on verified academic background, subject expertise, grade specialization, and locality proximity in Patna.",
    tag: "Curated Matching",
    icon: Users,
    accent: "bg-[#D7F6F1] text-[#00897B] border-[#A8ECE0]",
  },
  {
    step: "03",
    name: "Plan",
    title: "Structured Learning Framework",
    description:
      "We coordinate baseline learning goals and a structured teaching roadmap aligned directly with your child's school calendar, textbook units, and upcoming exam cycles.",
    tag: "Syllabus Roadmap",
    icon: CalendarCheck,
    accent: "bg-[#E1EFFF] text-[#1A6FC4] border-[#BDDCFF]",
  },
  {
    step: "04",
    name: "Teach",
    title: "Dedicated One-to-One Home Sessions",
    description:
      "The teacher delivers attentive, one-to-one instruction at your residence, creating a safe, focused environment where the student can ask questions without hesitation.",
    tag: "In-Home Guidance",
    icon: BookOpen,
    accent: "bg-[#D7F6F1] text-[#00897B] border-[#A8ECE0]",
  },
  {
    step: "05",
    name: "Track",
    title: "Attendance & Learning Visibility",
    description:
      "We maintain session attendance logs and track topics covered, giving parents clear, understandable updates on concepts completed and areas that need extra reinforcement.",
    tag: "Progress Visibility",
    icon: ClipboardList,
    accent: "bg-[#E1EFFF] text-[#1A6FC4] border-[#BDDCFF]",
  },
  {
    step: "06",
    name: "Improve",
    title: "Feedback Review & Ongoing Support",
    description:
      "We regularly review parent feedback. If learning needs change or an academic fit is unsuitable, we coordinate adjustments or a teacher replacement where policy permits.",
    tag: "Continuous Care",
    icon: RefreshCw,
    accent: "bg-[#D7F6F1] text-[#00897B] border-[#A8ECE0]",
  },
];

const SERVICE_PRINCIPLES = [
  {
    icon: Target,
    title: "Suitable Teacher Selection",
    description:
      "Not an open, unvetted directory. Each teacher is hand-selected based on student grade level, subject requirements, and learning demeanor.",
  },
  {
    icon: GraduationCap,
    title: "Academic Qualification & Subject Fit",
    description:
      "We review degrees and subject competence, matching teachers who genuinely understand CBSE, ICSE, and Bihar Board curricula.",
  },
  {
    icon: Layers,
    title: "Structured Learning Coordination",
    description:
      "Home tuition is coordinated to complement school homework, revision cycles, and unit exams rather than operating in disconnected isolation.",
  },
  {
    icon: Clock,
    title: "Regular Attendance Tracking",
    description:
      "Session logs help parents and teachers maintain mutual punctuality and accountability without awkward parental policing.",
  },
  {
    icon: ShieldCheck,
    title: "Teaching Quality Monitoring",
    description:
      "Periodic reviews to ensure consistent teaching discipline, conceptual clarity, and respectful student-teacher rapport.",
  },
  {
    icon: MessageSquare,
    title: "Parent Feedback & Communication",
    description:
      "A structured, professional communication channel where parents can share observations or concerns without personal confrontation.",
  },
  {
    icon: TrendingUp,
    title: "Student Progress Updates",
    description:
      "Understandable visibility into chapters completed, concept grasp, and daily practice habits without inflated claims.",
  },
  {
    icon: RefreshCw,
    title: "Teacher Replacement Coordination",
    description:
      "Active team assistance to re-evaluate and coordinate a replacement if a teacher's schedule, pace, or fit proves unsuitable.",
  },
];

const TEACHER_STANDARDS = [
  {
    title: "Profile & Qualification Review",
    description:
      "Verified educational credentials, academic transcripts, identity verification, and past home teaching background.",
    icon: FileCheck,
  },
  {
    title: "Subject & Class Level Suitability",
    description:
      "Educators are aligned with their specific mastery—foundational literacy for UKG, general subjects for primary, or specialized Math and Science for secondary.",
    icon: BookOpen,
  },
  {
    title: "Professional Teaching Expectations",
    description:
      "Punctuality, syllabus discipline, patient demeanor, and zero tolerance for casual absenteeism or mobile distractions during class.",
    icon: Award,
  },
  {
    title: "Attendance & Scheduling Discipline",
    description:
      "Clear adherence to agreed weekly time slots, with prompt advance notice for any unavoidable rescheduling.",
    icon: CalendarCheck,
  },
  {
    title: "Transparent Parent Communication",
    description:
      "Respectful, constructive verbal briefings on what was covered in class and specific home practice assigned.",
    icon: MessageSquare,
  },
  {
    title: "Quality Feedback & Coordination",
    description:
      "Teachers are supported as valued educational partners with regular feedback, guidance, and ongoing coordination from Wellfind.",
    icon: HeartHandshake,
  },
];

const STUDENT_STAGES = [
  {
    level: "Pre-Primary",
    classRange: "UKG",
    focus: "Foundational Curiosity & Early Habits",
    description:
      "Building early phonics, number sense, pencil grip, listening discipline, and gentle study habit formation in a stress-free home setting.",
    subjects: ["English Phonics", "Early Math", "Environmental Basics", "Hindi Varnamala"],
    accent: "border-[#35D0BA]/50 bg-[#F0FCF9]",
  },
  {
    level: "Primary School",
    classRange: "Classes 1 to 5",
    focus: "Core Concept Clarity & Daily Discipline",
    description:
      "Establishing strong foundational basics in Mathematics, Science, and Languages, ensuring daily school homework is understood rather than memorized.",
    subjects: ["Mathematics", "General Science", "English Grammar", "Social Studies", "Hindi"],
    accent: "border-[#60A5FA]/40 bg-[#F4F8FF]",
  },
  {
    level: "Middle School",
    classRange: "Classes 6 to 8",
    focus: "Analytical Thinking & Subject Depth",
    description:
      "Navigating the transition from general studies to deeper individual subjects, problem-solving techniques, and independent study habits.",
    subjects: ["Algebra & Geometry", "Physics / Chemistry / Biology", "Social Sciences", "Grammar"],
    accent: "border-[#F59E0B]/40 bg-[#FFFDF5]",
  },
  {
    level: "Secondary School",
    classRange: "Classes 9 & 10",
    focus: "Curriculum Rigor & Board Preparation",
    description:
      "Concept-focused preparation for CBSE, ICSE, and State Board exams with structured NCERT practice, formula reinforcement, and revision planning.",
    subjects: ["Board Mathematics", "Comprehensive Science", "Social Science", "Language Papers"],
    accent: "border-[#A78BFA]/40 bg-[#FAF7FF]",
  },
];

const PATNA_LOCALITIES = [
  "Boring Road",
  "Kankarbagh",
  "Rajendra Nagar",
  "Bailey Road",
  "Patliputra",
  "Danapur",
  "Kadamkuan",
  "Khagaul",
  "Phulwari Sharif",
  "Rajpull",
];

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function AboutPage() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <div className="flex flex-col bg-white">
      {/* ================================================================== */}
      {/* SECTION 1: HERO / INTRODUCTION */}
      {/* ================================================================== */}
      <section className="relative bg-white overflow-hidden border-b border-[#D7E2EE]">
        {/* Subtle mint/blue ambient wash behind the hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_65%_80%_at_78%_45%,#E6F7F4_0%,rgba(230,247,244,0.4)_50%,transparent_100%)]"
        />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-4 sm:pt-6 pb-10 sm:pb-14 lg:pb-16">
          {/* Breadcrumb */}
          <Breadcrumbs items={[{ label: "About Us" }]} className="!py-0 mb-4 sm:mb-6" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Core Positioning, Headline, Copy, CTAs */}
            <div className="lg:col-span-7 space-y-5">
              {/* Central Brand Badge */}
              <div className="inline-flex items-center">
                <Badge variant="subtle" size="md" className="font-semibold text-xs tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-[#0F6F63] mr-1.5" />
                  One-to-One Education, Managed by Wellfind
                </Badge>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101D36] tracking-tight leading-[1.14]">
                More Than a Tutor. <br className="hidden sm:inline" />
                <span className="text-[#00897B]">A Better-Managed</span> Learning Journey.
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#53647D] leading-relaxed max-w-2xl font-normal">
                Wellfind Academic provides managed one-to-one home education for students from
                UKG to Class 10. We help families find suitable teachers and coordinate the learning
                journey through structured academic support, regular communication, and progress tracking.
              </p>

              {/* Key Brand Statement Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#EAF0F8] border border-[#D7E2EE] flex items-start gap-3.5 max-w-2xl">
                <div className="w-9 h-9 rounded-xl bg-white text-[#00897B] flex items-center justify-center shrink-0 shadow-xs border border-[#D7E2EE]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs uppercase tracking-wider font-bold text-[#0F6F63]">
                    The Wellfind Promise
                  </p>
                  <p className="text-sm sm:text-[15px] font-semibold text-[#101D36] leading-snug">
                    “Teachers deliver the education, but Wellfind maintains the quality.”
                  </p>
                  <p className="text-xs text-[#53647D]">
                    The right teacher, structured learning, and progress you can see.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/contact/#inquire"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#008272] hover:bg-[#007364] active:bg-[#006356] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008272] focus-visible:ring-offset-2"
                >
                  <span>Find My Child’s Teacher</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#approach"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F2F7FA] text-[#101D36] font-semibold text-sm sm:text-base border border-[#D7E2EE] shadow-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00897B]"
                >
                  <span>Explore Our Approach</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#53647D]">
                <span className="flex items-center gap-1.5 font-medium text-[#101D36]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00897B]" /> UKG to Class 10
                </span>
                <span className="flex items-center gap-1.5 font-medium text-[#101D36]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00897B]" /> CBSE · ICSE · State Board
                </span>
                <span className="flex items-center gap-1.5 font-medium text-[#101D36]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00897B]" /> Across Residential Patna
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden border border-[#D7E2EE] shadow-lg bg-white p-2">
                  <Image
                    src={teachersHeroImg}
                    alt="Wellfind Academic qualified home education teachers"
                    priority
                    className="w-full h-auto rounded-2xl object-cover select-none"
                  />
                  <div className="p-4 bg-gradient-to-t from-[#101D36] to-[#1E3154] text-white rounded-xl mt-2 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#35D0BA]">
                        Network Standards
                      </p>
                      <p className="text-sm font-bold mt-0.5">Verified Subject Specialists</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium border border-white/20">
                      Patna, Bihar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECTION 2: WHO WE ARE */}
      {/* ================================================================== */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-[#D7E2EE]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
            <Badge variant="subtle" size="md">
              <Users className="w-3.5 h-3.5 text-[#0F6F63] mr-1.5" />
              Who We Are
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101D36] tracking-tight">
              Education That Goes Beyond Finding a Teacher
            </h2>

            <p className="text-sm sm:text-base text-[#53647D] leading-relaxed">
              Choosing a tutor is only the beginning. Finding a phone number from an unverified
              classifieds site or a street poster leaves parents completely on their own. Wellfind
              was founded to transform unmanaged home tuition into a structured, accountable, and
              quality-guided learning experience.
            </p>
          </div>

          {/* Comparison Cards: Directory vs Managed Education */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* The Unmanaged Tutor Directory */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#E11D48] block">
                    The Traditional Approach
                  </span>
                  <h3 className="text-xl font-bold text-[#101D36] mt-0.5">
                    Basic Tutor Directories
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#FFE4E6] text-[#E11D48] flex items-center justify-center font-bold">
                  <XCircle className="w-5 h-5" />
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-[#53647D]">
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>
                    <strong>Just a list of phone numbers:</strong> Parents must filter, interview, and negotiate without academic verification.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>
                    <strong>No syllabus planning:</strong> Classes often turn into ad-hoc homework completion rather than building concept mastery.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero attendance discipline:</strong> Casual cancellations, unpredictable timings, and no session logging.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>
                    <strong>No ongoing support:</strong> If the tutor is unsuitable, the platform offers no help and parents start all over again.
                  </span>
                </li>
              </ul>
            </div>

            {/* The Wellfind Managed Education Model */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#35D0BA] shadow-md space-y-5 relative">
              <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#00897B] text-white text-xs font-bold tracking-wide uppercase shadow-xs">
                The Managed Difference
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#00897B] block">
                    The Wellfind Standard
                  </span>
                  <h3 className="text-xl font-bold text-[#101D36] mt-0.5">
                    Managed One-to-One Education
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#D7F6F1] text-[#00897B] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-[#344054]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00897B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Suitability-first selection:</strong> Teachers are vetted for subject expertise, grade level mastery, and verified background.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00897B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Curriculum-aligned planning:</strong> Home sessions are structured to align directly with school exams and revision roadmaps.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00897B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Logged attendance &amp; regularity:</strong> Consistent scheduling with transparent class logging for parent peace of mind.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00897B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Coordinated parent support:</strong> Dedicated coordination to review feedback and manage replacements when needs evolve.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECTION 3: OUR APPROACH */}
      {/* ================================================================== */}
      <section id="approach" className="py-14 sm:py-20 bg-white border-b border-[#D7E2EE] scroll-mt-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
            <Badge variant="subtle" size="md">
              <Layers className="w-3.5 h-3.5 text-[#0F6F63] mr-1.5" />
              Our 6-Stage Framework
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101D36] tracking-tight">
              The Right Teacher Is Only the Beginning
            </h2>

            <p className="text-sm sm:text-base text-[#53647D] leading-relaxed">
              Meaningful academic growth requires consistency, thoughtful structure, and continuous support.
              Here is how Wellfind coordinates every stage of your child&apos;s home learning journey.
            </p>
          </div>

          {/* 6-Stage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {APPROACH_STEPS.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.step}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-[#D7E2EE] hover:border-[#35D0BA] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-[#8A9BB1] tracking-tight">
                        {step.step}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${step.accent}`}
                      >
                        <StepIcon className="w-5 h-5" strokeWidth={2.2} />
                      </div>
                    </div>

                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#EAF0F8] text-[#101D36] text-[11px] font-bold uppercase tracking-wider mb-2">
                        {step.tag}
                      </span>
                      <h3 className="text-lg font-bold text-[#101D36] leading-snug">
                        {step.name} — {step.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#53647D] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F1F5F9] flex items-center text-xs font-semibold text-[#00897B]">
                    <span>Stage {step.step} in Action</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECTION 4: WHAT MAKES WELLFIND DIFFERENT */}
      {/* ================================================================== */}
      <section className="py-14 sm:py-20 bg-[#F4F8FB] border-b border-[#D7E2EE]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
            <Badge variant="subtle" size="md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0F6F63] mr-1.5" />
              Service Principles
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101D36] tracking-tight">
              A Managed Learning Experience, Not Just a Tutor Search
            </h2>

            <p className="text-sm sm:text-base text-[#53647D] leading-relaxed">
              We manage the operational and academic details behind the scenes so that parents and
              teachers can focus completely on meaningful learning at home.
            </p>
          </div>

          {/* 8 Principles Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {SERVICE_PRINCIPLES.map((principle) => {
              const PrincipleIcon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="p-6 rounded-2xl bg-white border border-[#D7E2EE] hover:border-[#35D0BA] shadow-xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-[#D7F6F1] text-[#00897B] flex items-center justify-center border border-[#35D0BA]/30">
                      <PrincipleIcon className="w-5 h-5" strokeWidth={2.2} />
                    </div>

                    <h3 className="text-base font-bold text-[#101D36] leading-snug">
                      {principle.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#53647D] leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Operational Integrity Disclaimer */}
          <div className="max-w-4xl mx-auto mt-10 p-4 rounded-xl bg-white border border-[#D7E2EE] text-center">
            <p className="text-xs text-[#53647D] leading-relaxed">
              <strong className="text-[#101D36]">Our Commitment to Honesty:</strong> Service features such as attendance tracking and replacement coordination are actively managed by our operations team in line with current service coverage in Patna. We never publish fabricated counts, fake ratings, or unachievable outcome guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECTION 5: OUR TEACHER QUALITY STANDARDS */}
      {/* ================================================================== */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#D7E2EE]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading and Context */}
            <div className="lg:col-span-5 space-y-5">
              <Badge variant="subtle" size="md">
                <Award className="w-3.5 h-3.5 text-[#0F6F63] mr-1.5" />
                Teacher Network Standards
              </Badge>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101D36] tracking-tight">
                A Professional Network Built Around Learning
              </h2>

              <p className="text-sm sm:text-base text-[#53647D] leading-relaxed">
                At Wellfind Academic, we do not view educators as casual gig workers. We partner with sincere, qualified teachers and treat them as professional partners in a quality-managed network.
              </p>

              <div className="p-4 rounded-2xl bg-[#F0FCF9] border border-[#35D0BA]/30 space-y-2">
                <h3 className="text-sm font-bold text-[#0F6F63] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Mutual Professional Respect
                </h3>
                <p className="text-xs text-[#344054] leading-relaxed">
                  When teachers receive fair treatment, clear expectations, and administrative coordination, students receive far better, more consistent guidance in return.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/join-as-teacher"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#00897B] hover:text-[#007364] hover:underline"
                >
                  <span>Are you an educator in Patna? Learn about joining our network</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: 6 Quality Expectations */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {TEACHER_STANDARDS.map((standard) => {
                  const StandardIcon = standard.icon;
                  return (
                    <div
                      key={standard.title}
                      className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#D7E2EE] space-y-2"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white text-[#1A6FC4] flex items-center justify-center shadow-xs border border-[#D7E2EE]">
                        <StandardIcon className="w-4.5 h-4.5" />
                      </div>
                      <h4 className="text-sm font-bold text-[#101D36]">
                        {standard.title}
                      </h4>
                      <p className="text-xs text-[#53647D] leading-relaxed">
                        {standard.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECTION 6: PROGRESS PARENTS CAN UNDERSTAND */}
      {/* ================================================================== */}
      <section className="py-14 sm:py-20 bg-[#EAF0F8] border-b border-[#D7E2EE]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Visual Scene */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden border border-[#D7E2EE] shadow-md bg-white p-2">
                <Image
                  src={progressMeetingImg}
                  alt="Teacher reviewing student learning updates with mother and child"
                  className="w-full h-auto rounded-2xl object-cover select-none"
                />
                <div className="p-3.5 bg-white text-center">
                  <p className="text-xs font-semibold text-[#101D36]">
                    Constructive Parent-Teacher Dialogue
                  </p>
                  <p className="text-[11px] text-[#53647D] mt-0.5">
                    Clear session logs and concept visibility without unnecessary pressure
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Explanatory Copy & Academic Ethics */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <Badge variant="subtle" size="md">
                <TrendingUp className="w-3.5 h-3.5 text-[#0F6F63] mr-1.5" />
                Learning Visibility
              </Badge>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101D36] tracking-tight">
                Clear Communication. <br className="hidden sm:inline" />
                Better Learning Visibility.
              </h2>

              <p className="text-sm sm:text-base text-[#53647D] leading-relaxed">
                Parents shouldn&apos;t have to wonder what happened during tuition hours. We help
                bridge the communication gap between families and educators with regular attendance
                records, syllabus chapter updates, and constructive feedback loops.
              </p>

              {/* 3 Visibility Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                <div className="p-4 rounded-xl bg-white border border-[#D7E2EE] space-y-1">
                  <span className="text-xs font-bold text-[#00897B] block">Pillar 1</span>
                  <h4 className="text-sm font-bold text-[#101D36]">Session Records</h4>
                  <p className="text-xs text-[#53647D] leading-relaxed">
                    Accountability for days held and hours completed.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#D7E2EE] space-y-1">
                  <span className="text-xs font-bold text-[#00897B] block">Pillar 2</span>
                  <h4 className="text-sm font-bold text-[#101D36]">Topic Coverage</h4>
                  <p className="text-xs text-[#53647D] leading-relaxed">
                    Clarity on chapters completed and revision needs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#D7E2EE] space-y-1">
                  <span className="text-xs font-bold text-[#00897B] block">Pillar 3</span>
                  <h4 className="text-sm font-bold text-[#101D36]">Direct Feedback</h4>
                  <p className="text-xs text-[#53647D] leading-relaxed">
                    Honest, ongoing reviews of daily study habits.
                  </p>
                </div>
              </div>

              {/* Ethical Warning / No Mark Guarantees */}
              <div className="p-4 rounded-2xl bg-white border-l-4 border-l-[#00897B] border border-[#D7E2EE] space-y-1">
                <p className="text-xs font-bold text-[#101D36]">
                  Our Policy on Marks &amp; Outcomes:
                </p>
                <p className="text-xs text-[#53647D] leading-relaxed">
                  We strictly refrain from making speculative promises about specific exam percentages or miraculous score jumps. Academic confidence is built patiently through consistent practice, concept mastery, and regular encouragement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECTION 7: WHO WE SERVE */}
      {/* ================================================================== */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#D7E2EE]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
            <Badge variant="subtle" size="md">
              <BookOpen className="w-3.5 h-3.5 text-[#0F6F63] mr-1.5" />
              Classes &amp; Curricula
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101D36] tracking-tight">
              One-to-One Home Education from UKG to Class 10
            </h2>

            <p className="text-sm sm:text-base text-[#53647D] leading-relaxed">
              Every stage of schooling has unique cognitive and academic milestones. Wellfind coordinates tailored home tuition suited to your child&apos;s developmental level and school curriculum.
            </p>
          </div>

          {/* 4 Academic Stages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {STUDENT_STAGES.map((stage) => (
              <div
                key={stage.classRange}
                className={`p-6 rounded-3xl border ${stage.accent} shadow-xs flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#53647D]">
                      {stage.level}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white text-xs font-black text-[#101D36] shadow-2xs border border-[#D7E2EE]">
                      {stage.classRange}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#101D36] leading-snug">
                    {stage.focus}
                  </h3>

                  <p className="text-xs text-[#53647D] leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/5">
                  <p className="text-[11px] font-bold text-[#101D36] uppercase tracking-wider mb-2">
                    Key Subjects:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.subjects.map((subj) => (
                      <span
                        key={subj}
                        className="px-2 py-0.5 rounded bg-white/80 text-[11px] font-medium text-[#344054] border border-black/5"
                      >
                        {subj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Patna Localities Coverage Banner */}
          <div className="mt-12 max-w-5xl mx-auto p-6 rounded-3xl bg-[#F8FAFC] border border-[#D7E2EE]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-sm font-bold text-[#101D36]">
                <MapPin className="w-4.5 h-4.5 text-[#00897B]" />
                <span>Our Active Service Coverage in Patna</span>
              </div>
              <span className="text-xs text-[#53647D]">
                Hyperlocal matching to minimize teacher commute delays
              </span>
            </div>

            <div className="pt-4 flex flex-wrap gap-2 sm:gap-2.5">
              {PATNA_LOCALITIES.map((loc) => (
                <span
                  key={loc}
                  className="px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#101D36] border border-[#D7E2EE] shadow-2xs"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECTION 8: PARENT SUPPORT & TEACHER REPLACEMENT */}
      {/* ================================================================== */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-[#D7E2EE]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#D7E2EE] p-6 sm:p-10 shadow-sm space-y-8">
            <div className="space-y-3">
              <Badge variant="subtle" size="md">
                <HeartHandshake className="w-3.5 h-3.5 text-[#0F6F63] mr-1.5" />
                Continuity &amp; Care
              </Badge>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101D36] tracking-tight">
                When Needs Change, Support Should Continue
              </h2>

              <p className="text-sm sm:text-base text-[#53647D] leading-relaxed">
                Finding a home tutor should never feel like a permanent, risky gamble. Children grow, schedules change, and sometimes a particular teaching pace does not click with a child&apos;s learning temperament.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#E1EFFF] text-[#1A6FC4] flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-sm font-bold text-[#101D36]">
                  Objective Fit Review
                </h3>
                <p className="text-xs text-[#53647D] leading-relaxed">
                  Wellfind coordinates communication directly so parents never have to engage in awkward confrontations with teachers.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#D7F6F1] text-[#00897B] flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-sm font-bold text-[#101D36]">
                  Constructive Adjustments
                </h3>
                <p className="text-xs text-[#53647D] leading-relaxed">
                  We first review whether pacing, homework load, or explanation style can be tuned to better match your child.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#E1EFFF] text-[#1A6FC4] flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-sm font-bold text-[#101D36]">
                  Replacement Coordination
                </h3>
                <p className="text-xs text-[#53647D] leading-relaxed">
                  When a mismatch cannot be resolved, we actively coordinate finding an alternative teacher where service policy permits.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#EAF0F8] border border-[#D7E2EE] text-xs text-[#53647D] leading-relaxed">
              <strong className="text-[#101D36]">Responsible Coordination Note:</strong> Replacement timelines depend on available teacher profiles, locality, and preferred schedule slots in Patna. We coordinate re-matching responsibly rather than promising instantaneous or unlimited guarantees.
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECTION 9: CLOSING CTA */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#101D36] via-[#152545] to-[#1E3154] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
            {/* Ambient decorative glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#00897B]/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#35D0BA]/15 blur-3xl"
            />

            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#35D0BA] text-xs font-bold uppercase tracking-wider border border-white/15">
                <Sparkles className="w-3.5 h-3.5" />
                Begin With Wellfind
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15]">
                Start Your Child’s One-to-One Learning Journey
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Tell us about your child&apos;s academic needs, preferred schedule, and learning goals. Wellfind Academic will help you explore a suitable teacher and the next steps.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/#inquire"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#00897B] hover:bg-[#007364] active:bg-[#006356] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0BA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101D36]"
                >
                  <span>Find My Child’s Teacher</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </Link>

                <WhatsAppCTA
                  variant="whatsapp"
                  size="lg"
                  customMessage="Hello Wellfind Academic, I would like to explore a suitable home tutor for my child."
                  label="Enquire on WhatsApp"
                  className="rounded-xl"
                />
              </div>

              {/* Trust Tagline */}
              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
                <span>Managed One-to-One Home Education</span>
                <span>·</span>
                <span>UKG to Class 10 (CBSE, ICSE, State Boards)</span>
                <span>·</span>
                <span>Across Residential Patna</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
