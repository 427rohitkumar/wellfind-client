import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  ChevronRight,
  Users,
  BookOpen,
  ArrowRight,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const FEATURE_ITEMS = [
  {
    icon: BookOpen,
    title: "UKG to Class 10",
    subtitle: "Class-wise learning support",
  },
  {
    icon: Users,
    title: "All Major Subjects",
    subtitle: "As per school curriculum",
  },
  {
    icon: MapPin,
    title: "In Patna",
    subtitle: "Find tutors in your area",
  },
  {
    icon: ShieldCheck,
    title: "Flexible Schedules",
    subtitle: "As per your convenience",
  },
];

export function ClassesHeroSection() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Classes",
        item: `${siteConfig.url}/classes/`,
      },
    ],
  };

  return (
    <>
      {/* Schema.org Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ======================================================== */}
      {/* 1. HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative bg-white overflow-hidden border-b border-[#E2E8F0]">
        {/* Subtle light mint gradient glow on the right side behind illustration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_65%_80%_at_78%_50%,#E3F7F3_0%,rgba(227,247,243,0.35)_55%,transparent_100%)]"
        />

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-4 sm:pt-6 pb-6 sm:pb-8 lg:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-8 xl:gap-x-12 items-center">
            {/* Left Column: Breadcrumb, Heading, Description, CTA Buttons */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center text-xs sm:text-sm text-[#53647D] mb-3 sm:mb-4"
              >
                <ol className="flex items-center gap-1.5 sm:gap-2">
                  <li>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1 text-[#53647D] hover:text-[#101D36] transition-colors focus:outline-none focus-visible:underline"
                    >
                      <Home className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="flex items-center gap-1.5 sm:gap-2">
                    <ChevronRight
                      className="w-3.5 h-3.5 text-[#8A9BB1] shrink-0"
                      aria-hidden="true"
                    />
                    <span
                      className="font-semibold text-[#53647D]"
                      aria-current="page"
                    >
                      Classes
                    </span>
                  </li>
                </ol>
              </nav>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-black text-[#101D36] tracking-tight leading-[1.14]">
                Home Tuition for UKG to <br className="hidden sm:inline" />
                Class 10 <span className="text-[#00897B]">in Patna</span>
              </h1>

              {/* Description */}
              <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-[18px] text-[#53647D] leading-relaxed max-w-[620px]">
                We help parents find suitable home tutors for their child based
                on class, subject, learning needs, location, and preferred
                schedule. Give your child the right support at every stage.
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                {/* Primary CTA */}
                <Link
                  href="#inquire"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#008272] hover:bg-[#007364] active:bg-[#006356] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008272] focus-visible:ring-offset-2"
                >
                  <Users className="w-4.5 h-4.5 shrink-0" strokeWidth={2.2} />
                  <span>Find a Tutor for Your Child</span>
                  <ArrowRight
                    className="w-4 h-4 shrink-0 ml-0.5"
                    strokeWidth={2.2}
                  />
                </Link>

                {/* Secondary CTA */}
                <Link
                  href="#stages"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F8FAFC] active:bg-[#F1F5F9] text-[#101D36] font-semibold text-sm sm:text-base border border-[#D7E2EE] shadow-2xs hover:border-[#CBD5E1] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101D36] focus-visible:ring-offset-2"
                >
                  <BookOpen
                    className="w-4.5 h-4.5 text-[#008272] shrink-0"
                    strokeWidth={2.2}
                  />
                  <span>Explore Classes</span>
                  <ArrowRight
                    className="w-4 h-4 text-[#101D36] shrink-0 ml-0.5"
                    strokeWidth={2.2}
                  />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Illustration */}
            <div className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[680px] lg:max-w-none flex items-center justify-center">
                <Image
                  src="/class-page-hero-section-image.png"
                  alt="Home tuition for UKG to Class 10 in Patna"
                  width={1644}
                  height={957}
                  priority
                  className="w-full h-auto object-contain max-h-[360px] sm:max-h-[420px] lg:max-h-[460px] xl:max-h-[500px] select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. FEATURE STRIP (Below Hero) */}
      {/* ======================================================== */}
      <section className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-5 sm:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-0">
            {FEATURE_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-3.5 py-1 px-2 sm:px-4 lg:px-6 ${
                    index % 2 === 0 ? "sm:border-r border-[#E2E8F0]" : ""
                  } ${
                    index < 3 ? "lg:border-r border-[#E2E8F0]" : "lg:border-r-0"
                  } ${index === 0 ? "lg:pl-0" : ""} ${
                    index === 3 ? "lg:pr-0" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-[#DDF7F2] flex items-center justify-center shrink-0">
                    <Icon
                      className="w-5 h-5 text-[#008272]"
                      strokeWidth={2.2}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#101D36] leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#53647D] mt-0.5 leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

