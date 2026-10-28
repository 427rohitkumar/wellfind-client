"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { useTutorEnquiryModal } from "./modal/TutorEnquiryModalContext";

interface CompactInquiryEntryProps {
  className?: string;
}

export function CompactInquiryEntry({
  className = "",
}: CompactInquiryEntryProps) {
  const { openModal } = useTutorEnquiryModal();
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedLocality, setSelectedLocality] = useState("");

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    openModal({
      initialClass: selectedClass,
      initialLocality: selectedLocality,
    });
  };

  return (
    <div
      className={`bg-white rounded-2xl p-4 sm:p-5 border border-[#D7E2EE] shadow-md ${className}`}
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-[#101D36] mb-3 flex items-center justify-between">
        <span>Find a Tutor for Your Child</span>
        <span className="text-[#53647D] font-normal">Patna &amp; Suburbs</span>
      </div>

      <form
        onSubmit={handleContinue}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center"
      >
        <div>
          <label htmlFor="compact-class" className="sr-only">
            Select Class
          </label>
          <select
            id="compact-class"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full px-3.5 py-3 rounded-lg border border-[#D7E2EE] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#35D0BA]/50 focus:border-[#35D0BA] text-[#344054]"
          >
            <option value="">Student&apos;s Class (UKG–10)</option>
            {siteConfig.classes.map((cls) => (
              <option key={cls.slug} value={cls.label}>
                {cls.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="compact-locality" className="sr-only">
            Select Locality
          </label>
          <select
            id="compact-locality"
            value={selectedLocality}
            onChange={(e) => setSelectedLocality(e.target.value)}
            className="w-full px-3.5 py-3 rounded-lg border border-[#D7E2EE] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#35D0BA]/50 focus:border-[#35D0BA] text-[#344054]"
          >
            <option value="">Preferred Area in Patna</option>
            {siteConfig.serviceAreas.map((area) => (
              <option key={area.slug} value={area.name}>
                {area.name}
              </option>
            ))}
            <option value="Other Patna Locality">Other Area</option>
          </select>
        </div>

        <div>
          <Button
            type="submit"
            variant="accent"
            size="md"
            className="w-full py-3 justify-center shadow-xs text-sm"
          >
            <span>Continue to Inquiry</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </form>
    </div>
  );
}
