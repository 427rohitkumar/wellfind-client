import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Privacy Policy | Wellfind Academic",
  description:
    "Read the Wellfind Academic Privacy Policy. Learn how we handle parent inquiry information responsibly, minimize data collection, and protect family privacy.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy/`,
  },
  openGraph: {
    title: "Privacy Policy | Wellfind Academic",
    description:
      "Learn how Wellfind Academic handles parent and student inquiry data responsibly.",
    url: `${siteConfig.url}/privacy-policy/`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* HEADER */}
      <section className="bg-white border-b border-[#D7E2EE] pt-6 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} className="mb-6" />

          <div className="max-w-4xl space-y-4">
            <Badge variant="subtle" size="md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#35D0BA] mr-1" />
              Transparent &amp; Parent-First
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101D36] leading-[1.15]">
              Privacy Policy
            </h1>

            <p className="text-base sm:text-lg text-[#344054] leading-relaxed">
              Last updated: October 2026. This Privacy Policy describes how
              Wellfind Academic collects, uses, and safeguards information
              submitted through our website.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 sm:py-16 bg-[#EAF0F8] border-b border-[#D7E2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6 sm:p-10 space-y-8 bg-white border-[#D7E2EE] text-[#344054] text-sm sm:text-base leading-relaxed">
            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#101D36]">
                1. Information We Collect
              </h2>
              <p>
                Wellfind Academic is a home-tuition discovery and teacher-matching
                platform. We believe in minimal, responsible data collection. When
                you submit an inquiry on our website, we collect only:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#53647D]">
                <li>Parent or guardian name.</li>
                <li>Contact phone number (for WhatsApp or voice communication).</li>
                <li>Student&apos;s academic grade (UKG to Class 10).</li>
                <li>Preferred locality or neighborhood in Patna.</li>
                <li>Subject(s) requiring academic support.</li>
                <li>Optional notes, preferred session days, or timing preferences.</li>
              </ul>
              <p className="text-xs sm:text-sm text-[#53647D] bg-[#EAF0F8] p-3 rounded-lg border border-[#D7E2EE]">
                <strong>Data Minimization Notice:</strong> At the initial inquiry
                stage, we intentionally do NOT collect full legal names of children,
                exact home door numbers, Aadhaar or government identity numbers, or
                financial details.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3 border-t border-[#D7E2EE] pt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#101D36]">
                2. How We Use Your Information
              </h2>
              <p>We use the details you provide exclusively to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#53647D]">
                <li>
                  Understand your academic requirements, curriculum board, and
                  locality.
                </li>
                <li>
                  Identify suitable home tutor profiles with relevant subject
                  proficiency and matching travel availability.
                </li>
                <li>
                  Contact you to discuss teacher options, coordinate introductory
                  sessions, and clarify schedules.
                </li>
                <li>Improve our service quality and local educational coverage.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3 border-t border-[#D7E2EE] pt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#101D36]">
                3. Consent &amp; Sharing with Prospective Teachers
              </h2>
              <p>
                We do not broadcast your contact number publicly. When a potential
                tutor match is identified, we first review the profile with you.
                Only upon your mutual consent do we facilitate direct contact
                between you and the tutor to arrange trial sessions.
              </p>
              <p>
                We never sell, rent, or trade parent or student data to commercial
                data brokers, third-party marketing companies, or unrelated
                telemarketing agencies.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3 border-t border-[#D7E2EE] pt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#101D36]">
                4. Analytics and Technical Tracking
              </h2>
              <p>
                Our website may utilize standard web analytics (such as Google
                Analytics 4) to monitor website traffic patterns, page views, and
                aggregate visitor trends across different Patna localities. These
                analytics tools collect non-personal device information, browser
                types, and referral sources.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3 border-t border-[#D7E2EE] pt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#101D36]">
                5. Data Security &amp; Storage
              </h2>
              <p>
                We take reasonable technical and administrative precautions to
                protect your inquiry information against unauthorized access,
                disclosure, or loss. Form transmissions use HTTPS encryption in
                transit.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3 border-t border-[#D7E2EE] pt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#101D36]">
                6. Your Privacy Rights
              </h2>
              <p>
                You may at any time request to review, update, or permanently delete
                your inquiry details from our records. To make such a request, please
                reach out through our{" "}
                <Link
                  href="/contact/"
                  className="text-[#101D36] underline font-medium hover:text-[#0F6F63]"
                >
                  Contact Page
                </Link>
                .
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
