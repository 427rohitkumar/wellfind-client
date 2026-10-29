import React from "react";
import Link from "next/link";
import {
  MapPin,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Compass,
  ShieldCheck,
  Building,
} from "lucide-react";
import { LocalityData } from "@/content/locations";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { WhatsAppCTA } from "@/components/inquiry/WhatsAppCTA";

interface LocalityViewProps {
  data: LocalityData;
}

export function LocalityView({ data }: LocalityViewProps) {
  const isPatnaHub = data.slug === "patna";

  const breadcrumbs = isPatnaHub
    ? [{ label: "Home Tuition in Patna" }]
    : [
        { label: "Home Tuition", href: "/patna" },
        { label: data.name },
      ];

  const canonicalUrl = isPatnaHub
    ? `${siteConfig.url}/patna`
    : `${siteConfig.url}/patna/${data.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Home Tuition in ${data.name}, Patna`,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${data.name}, Patna, Bihar`,
    },
    description: data.metaDescription,
    url: canonicalUrl,
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* TOP HEADER & BREADCRUMBS */}
      <section className="bg-white border-b border-[#D7E2EE] pt-6 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="subtle" size="md">
                <MapPin className="w-3.5 h-3.5 text-[#35D0BA] mr-1" />
                {data.name}, Patna • Home Tuition
              </Badge>
              {data.administrativeNote && (
                <span className="text-xs text-[#53647D] italic">
                  (Satellite &amp; Suburban Area)
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101D36] leading-[1.15]">
              {data.h1}
            </h1>

            <p className="text-lg sm:text-xl text-[#344054] font-medium leading-relaxed">
              {data.tagline}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button variant="accent" size="md" href="#inquire">
                Request a Tutor in {data.name}
              </Button>
              <WhatsAppCTA
                size="md"
                variant="secondary"
                customMessage={`Hello Wellfind Academic, I am looking for a home tutor in ${data.name}, Patna.`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT & NEIGHBORHOOD OVERVIEW */}
      <section className="py-12 sm:py-16 bg-[#EAF0F8] border-b border-[#D7E2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Local Reality & Academic Insight */}
            <div className="lg:col-span-7 space-y-6">
              <Card className="p-6 sm:p-8 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#101D36] flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#35D0BA]" />
                  <span>Neighborhood Context &amp; Study Routine</span>
                </h2>
                <p className="text-[#344054] text-sm sm:text-base leading-relaxed">
                  {data.neighborhoodOverview}
                </p>

                {data.administrativeNote && (
                  <div className="p-3.5 rounded-lg bg-[#D7F6F1] border border-[#35D0BA]/30 text-xs text-[#0A4D45] leading-relaxed">
                    <strong>Geographic Information:</strong> {data.administrativeNote}
                  </div>
                )}

                <div className="pt-2">
                  <h3 className="text-base font-semibold text-[#101D36] mb-2">
                    Academic Environment &amp; School Demands
                  </h3>
                  <p className="text-[#53647D] text-sm leading-relaxed">
                    {data.localAcademicContext}
                  </p>
                </div>
              </Card>

              {/* Why Home Tuition in this Area */}
              <Card className="p-6 sm:p-8 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#101D36] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#35D0BA]" />
                  <span>Why Home Tuition Works Well in {data.name}</span>
                </h2>
                <ul className="space-y-3 text-sm text-[#344054]">
                  {data.whyHomeTuitionHere.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#35D0BA] shrink-0 mt-0.5" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Right Column: Key Localities, Subjects & Landmark Info */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#101D36] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#35D0BA]" />
                  <span>Colonies &amp; Sectors Covered</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.keyNeighborhoods.map((n) => (
                    <span
                      key={n}
                      className="px-2.5 py-1 rounded-md bg-[#EAF0F8] border border-[#D7E2EE] text-xs font-medium text-[#344054]"
                    >
                      {n}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#D7E2EE]">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#53647D] mb-2">
                    Key Landmarks Nearby
                  </h4>
                  <div className="flex flex-wrap gap-1.5 text-xs text-[#53647D]">
                    {data.nearbyLandmarks.map((lm) => (
                      <span
                        key={lm}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#EAF0F8] text-[#344054] text-[11px] border border-[#D7E2EE]"
                      >
                        <Building className="w-3 h-3 text-[#53647D]" />
                        {lm}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#101D36] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#35D0BA]" />
                  <span>Popular Subjects Requested</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#344054]">
                  {data.popularSubjects.map((sub) => (
                    <li key={sub} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#35D0BA]"></span>
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Related Locations Card */}
              <Card className="p-6 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#53647D]">
                  Other Service Areas in Patna
                </h3>
                <div className="flex flex-col gap-2 text-xs sm:text-sm">
                  {data.relatedLocalities.map((rel) => {
                    const relHref =
                      rel.slug === "patna" ? "/patna" : `/patna/${rel.slug}`;
                    return (
                      <Link
                        key={rel.slug}
                        href={relHref}
                        className="text-[#101D36] hover:text-[#0F6F63] font-medium flex items-center justify-between py-1 border-b border-[#D7E2EE] last:border-none"
                      >
                        <span>Home Tuition in {rel.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#53647D]" />
                      </Link>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORTED CLASSES GRID */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#D7E2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Curriculum Options"
            title={`Classes Available in ${data.name}`}
            description="We support students from UKG to Class 10 across CBSE, ICSE, and Bihar State Board schools."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {siteConfig.classes.map((cls) => (
              <Link
                key={cls.slug}
                href={cls.href}
                className="group p-3.5 rounded-xl border border-[#D7E2EE] bg-[#EAF0F8]/50 hover:bg-white hover:border-[#35D0BA] hover:shadow-xs transition-all text-center flex flex-col justify-center items-center"
              >
                <span className="font-bold text-[#101D36] group-hover:text-[#0F6F63] transition-colors text-base">
                  {cls.label}
                </span>
                <span className="text-[10px] text-[#53647D] capitalize mt-0.5">
                  {cls.category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL FAQS */}
      <section className="py-12 sm:py-16 bg-[#EAF0F8] border-b border-[#D7E2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Local Questions"
            title={`Frequently Asked Questions — ${data.name}`}
            description={`Helpful answers regarding home tuition arrangements in ${data.name}, Patna.`}
          />

          <Accordion items={data.faqs} />
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="py-12 sm:py-16 bg-white" id="inquire">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm initialLocality={data.name} />
        </div>
      </section>
    </div>
  );
}
