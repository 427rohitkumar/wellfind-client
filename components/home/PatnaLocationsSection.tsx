"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MapPin, Check } from "lucide-react";
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
          <div className="order-2 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2 lg:self-center relative flex flex-col items-center justify-center">
            {/* Map Video Container */}
            <div className="relative w-full max-w-[720px] lg:max-w-none flex items-center justify-center">
              <div className="relative w-full group">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-auto object-cover select-none pointer-events-none transform group-hover:scale-[1.02] transition-transform duration-700 mask-[radial-gradient(circle_at_center,#ffffff_0%,#ffffff_35%,transparent_100%)] -webkit-mask-[radial-gradient(circle_at_center,#ffffff_0%,#ffffff_35%,transparent_100%)]"
                >
                  <source src="/Patna-location.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Soft edge fade into #EAF0F8 background - no sharp corners */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_#EAF0F8/100%_90%)]"
                />
              </div>

              {/* Floating Bottom-Right Information Card (Desktop floating, responsive stack on small screens) */}
              <div className="hidden sm:flex absolute right-2 md:right-4 lg:right-2 xl:right-6 bottom-0 sm:bottom-2 lg:bottom-1 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 lg:p-4.5 border border-[#D7E2EE] shadow-lg max-w-[260px] lg:max-w-[280px] z-20 items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D7F6F1] flex items-center justify-center shrink-0 border border-[#35D0BA]/30 text-[#0E7A6C]">
                  <MapPin className="w-5 h-5 text-[#35D0BA]" strokeWidth={2.3} />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black leading-tight">
                    <span className="text-[#35D0BA]">10+ Areas</span>{" "}
                    <span className="text-[#101D36]">in Patna</span>
                  </div>
                  <p className="mt-1 text-xs text-[#53647D] leading-snug font-medium">
                    And we are expanding to more locations soon.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile-friendly Bottom Information Card (shown below the map on screens < sm) */}
            <div className="sm:hidden mt-3.5 w-full bg-white rounded-2xl p-4 border border-[#D7E2EE] shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D7F6F1] flex items-center justify-center shrink-0 border border-[#35D0BA]/30 text-[#0E7A6C]">
                <MapPin className="w-5 h-5 text-[#35D0BA]" strokeWidth={2.3} />
              </div>
              <div>
                <div className="text-base font-black leading-tight">
                  <span className="text-[#35D0BA]">10+ Areas</span>{" "}
                  <span className="text-[#101D36]">in Patna</span>
                </div>
                <p className="mt-0.5 text-xs text-[#53647D] leading-snug font-medium">
                  And we are expanding to more locations soon.
                </p>
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

            {/* 10 Unique Locations in a 2-Column Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {activeLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/patna/${loc.slug}`}
                  aria-label={`Home tuition in ${loc.name}, Patna`}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#F4F8FC] border border-[#E1EAF2] hover:border-[#35D0BA]/60 hover:bg-[#EDF6F8] hover:shadow-2xs transition-all duration-200 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0BA]"
                >
                  <div className="w-5 h-5 rounded-full bg-[#35D0BA] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <Check className="w-3 h-3 text-[#101D36] stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#101D36] truncate group-hover:text-[#0F6F63] transition-colors">
                    {loc.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
