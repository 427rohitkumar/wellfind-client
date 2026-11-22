"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Home, MapPin } from "lucide-react";
import { getActiveSubLocalities } from "@/data/localities";

export interface PatnaLocationsSectionProps {
  badge?: string;
  heading?: React.ReactNode;
  description?: string;
}

export function PatnaLocationsSection({
  badge = "IN PATNA",
  heading,
  description = "We are currently serving families in 10+ areas of Patna with verified and experienced home tutors.",
}: PatnaLocationsSectionProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const activeLocations = getActiveSubLocalities();

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
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="patna-locations"
      className="relative py-14 sm:py-18 lg:py-24 bg-[#EAF0F8] border-b border-[#D7E2EE] overflow-hidden"
    >
      {/* Subtle decorative background ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 w-[500px] h-[500px] bg-[#35D0BA]/10 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-6 gap-x-0 lg:gap-x-12 xl:gap-x-16 items-start lg:items-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* ======================================================== */}
          {/* 1. HEADER INFO (Order 1 on mobile, Col 1-5 Row 1 on desktop) */}
          {/* ======================================================== */}
          <div className="order-1 lg:col-span-5 lg:col-start-1 lg:row-start-1 flex flex-col justify-center">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-1.5 self-start px-3.5 py-1.5 rounded-full bg-[#D7F6F1] border border-[#35D0BA]/40 text-[#0F6F63] font-bold text-xs uppercase tracking-wider mb-3.5 sm:mb-4 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-[#35D0BA]" strokeWidth={2.5} />
              <span>{badge}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black text-[#101D36] tracking-tight leading-[1.16]">
              {heading ?? (
                <>
                  Wellfind Teachers <span className="text-[#35D0BA]">Active</span> Across Patna
                </>
              )}
            </h2>

            {/* Supporting Text */}
            <p className="mt-3.5 text-base sm:text-lg text-[#53647D] leading-relaxed">
              {description}
            </p>
          </div>

          {/* ======================================================== */}
          {/* 2. MAP VIDEO CONTAINER (Order 2 on mobile, Col 6-12 Row 1-2 on desktop) */}
          {/* ======================================================== */}
          <div className="order-2 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2 lg:self-center relative">
            {/* Soft colour blocks behind the frame give it depth */}
            <div aria-hidden="true" className="absolute -right-3 -top-3 h-full w-full rounded-[32px] bg-[#35D0BA]/20 sm:-right-4 sm:-top-4" />
            <div aria-hidden="true" className="absolute -bottom-3 -left-3 h-1/2 w-1/2 rounded-[32px] bg-[#5C8FE8]/15 sm:-bottom-4 sm:-left-4" />

            {/* Map window mockup */}
            <div className="relative overflow-hidden rounded-[28px] border border-[#D7E2EE] bg-white shadow-2xl shadow-[#101D36]/15">
              <div className="flex items-center justify-between gap-3 border-b border-[#E4ECF5] bg-white px-4 py-3 sm:px-5">
                <div className="flex items-center gap-3">
                  <div aria-hidden="true" className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F2765E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F5B84B]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#35D0BA]" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F4F8FC] px-3 py-1 text-[11px] font-bold text-[#344054] sm:text-xs">
                    <MapPin className="h-3.5 w-3.5 text-[#0F9F8C]" strokeWidth={2.4} />
                    Wellfind coverage &middot; Patna
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D7F6F1] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#0F6F63]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#35D0BA] opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0F9F8C]" />
                  </span>
                  Live
                </span>
              </div>

              <div className="group relative overflow-hidden">
                <video
                  aria-label="Animated map of Patna showing the localities where Wellfind Academic home tutors are active"
                  aria-describedby="patna-map-description"
                  poster="/patna-maps.png"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="aspect-[16/11] w-full select-none object-cover pointer-events-none transition-transform duration-700 scale-[1.04] group-hover:scale-[1.08]"
                >
                  <source src="/Patna-location.mp4" type="video/mp4" />
                  Your browser does not support the video tag. Wellfind Academic
                  home tutors are active across 10+ localities in Patna, Bihar.
                </video>
                <p id="patna-map-description" className="sr-only">
                  Map of Patna highlighting the areas where Wellfind Academic
                  provides verified one-to-one home tutors, including Boring
                  Road, Kankarbagh, Rajendra Nagar, Bailey Road, Patliputra,
                  Danapur, Kadamkuan, Khagaul, Phulwari Sharif and Rajapull.
                </p>

                {/* Gentle bottom shade so the info card stays readable (no white fade) */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#101D36]/45 to-transparent" />

                {/* Floating chips */}
                <div className="absolute left-3 top-3 hidden items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-[#101D36] shadow-lg backdrop-blur sm:inline-flex">
                  <BadgeCheck className="h-4 w-4 text-[#0F9F8C]" strokeWidth={2.4} />
                  Verified tutors
                </div>
                <div className="absolute right-3 top-3 hidden items-center gap-1.5 rounded-full bg-[#101D36]/90 px-3 py-1.5 text-[11px] font-bold text-white shadow-lg backdrop-blur sm:inline-flex">
                  <Home className="h-4 w-4 text-[#35D0BA]" strokeWidth={2.4} />
                  One-to-one at home
                </div>

                {/* Info card */}
                <div className="absolute bottom-3 left-3 flex max-w-[270px] items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl backdrop-blur sm:bottom-4 sm:left-4 sm:p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#35D0BA] to-[#0F9F8C] text-white shadow-md shadow-[#35D0BA]/30">
                    <MapPin className="h-5 w-5" strokeWidth={2.4} />
                  </div>
                  <div>
                    <div className="text-base font-black leading-tight sm:text-xl">
                      <span className="text-[#0F9F8C]">10+ Areas</span>{" "}
                      <span className="text-[#101D36]">in Patna</span>
                    </div>
                    <p className="mt-0.5 text-[11px] font-medium leading-snug text-[#53647D] sm:text-xs">
                      Expanding to more locations soon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 3. ACTIVE LOCATIONS CARD (Order 3 on mobile, Col 1-5 Row 2 on desktop) */}
          {/* ======================================================== */}
          <div className="order-3 lg:col-span-5 lg:col-start-1 lg:row-start-2 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-[#D7E2EE] shadow-sm">
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <h3 className="text-lg sm:text-xl font-bold text-[#101D36] tracking-tight">
                Our Active Locations
              </h3>
              <span className="text-[11px] font-semibold text-[#0F6F63] bg-[#D7F6F1] px-2.5 py-0.5 rounded-full border border-[#35D0BA]/30">
                10 Verified Hubs
              </span>
            </div>

            {/* Locations in a 2-column grid; each opens its locality page */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {activeLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/patna/${loc.slug}`}
                  aria-label={`Home tuition in ${loc.name}, Patna`}
                  className="group flex items-center gap-2.5 rounded-xl border border-[#E1EAF2] bg-[#F4F8FC] px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#35D0BA]/60 hover:bg-white hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0BA]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#D7F6F1] text-[#0F9F8C] transition-colors group-hover:bg-[#35D0BA] group-hover:text-[#101D36]">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-xs font-semibold text-[#101D36] transition-colors group-hover:text-[#0F6F63] sm:text-sm">
                    {loc.name}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[#9FB1C8] opacity-0 transition-all group-hover:text-[#0F9F8C] group-hover:opacity-100" strokeWidth={2.5} />
                </Link>
              ))}
            </div>
            <p className="mt-4 text-center text-[11px] font-semibold text-[#8A9EB8] sm:text-xs">
              Tap an area to see tutors available there.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
