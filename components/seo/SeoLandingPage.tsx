import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, MapPin, School } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generalFaqs } from "@/content/faqs";
import {
  SEO_CITY,
  SEO_CLASS_PAGES,
  SEO_LOCALITIES,
  getSeoClassPath,
  getSeoLocality,
  getSeoLocalityPath,
  type SeoClassPage,
  type SeoFaq,
  type SeoLocality,
} from "@/data/seo-locations";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { WhatsAppCTA } from "@/components/inquiry/WhatsAppCTA";
import {
  JsonLd,
  buildFaqJsonLd,
  buildServiceJsonLd,
} from "@/components/JsonLd";

export type SeoLandingPageProps =
  | { type: "locality"; data: SeoLocality }
  | { type: "class"; data: SeoClassPage };

const SHARED_FAQS: SeoFaq[] = generalFaqs.slice(0, 2);

const linkChip =
  "inline-flex items-center rounded-full border border-[#D7E2EE] bg-white px-3.5 py-1.5 text-sm font-medium text-[#101D36] transition-colors hover:border-[#35D0BA] hover:text-[#0F6F63] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0BA]";

const HOW_IT_WORKS: Array<[string, string]> = [
  ["Share requirements", "Class, subjects, location, timing and budget."],
  ["Assessment", "A short test to understand current level and gaps."],
  ["Tutor matching", "We shortlist suitable, verified tutors for you."],
  ["Demo and start", "A 2-day demo first, regular classes only if it fits."],
];

function classLinkLabel(slug: string): string {
  if (slug === "ukg") return "UKG";
  return slug.replace("class-", "Class ");
}

export function SeoLandingPage(props: SeoLandingPageProps) {
  const locality = props.type === "locality" ? props.data : null;
  const classPage = props.type === "class" ? props.data : null;

  const slug = props.data.slug;
  const name = props.data.name;
  const path = locality ? getSeoLocalityPath(slug) : getSeoClassPath(slug);

  const h1 = locality
    ? `Verified Home Tutors in ${name}, ${SEO_CITY} (UKG to Class 10)`
    : classPage?.kind === "board"
      ? `Verified ${name} Home Tutors in ${SEO_CITY} (UKG to Class 10)`
      : `Verified ${classPage?.h1 ?? name} in ${SEO_CITY}`;

  const breadcrumbLabel = locality ? `Home Tutor in ${name}` : `${name} Home Tutor`;
  const intro = locality ? locality.localIntro : (classPage?.intro ?? "");
  const faqs: SeoFaq[] = [
    ...(locality ? locality.localFaqs : (classPage?.faqs ?? [])),
    ...SHARED_FAQS,
  ];

  const areaName = locality ? `${name}, ${SEO_CITY}` : SEO_CITY;
  const whatsappMessage = locality
    ? `Hello Wellfind Academic, I am looking for a home tutor in ${name}, Patna.`
    : `Hello Wellfind Academic, I am looking for a ${name} home tutor in Patna.`;

  const initialLocality = locality?.formLocality ?? "";
  const initialClass = classPage?.formClass ?? "";

  const neighborLocalities = locality
    ? locality.neighbors
        .map((neighborSlug) => getSeoLocality(neighborSlug))
        .filter((item): item is SeoLocality => Boolean(item))
    : [];

  return (
    <div className="flex flex-col">
      <JsonLd
        data={[
          buildServiceJsonLd({
            name: h1,
            description: intro,
            path,
            areaName,
          }),
          buildFaqJsonLd(faqs),
        ]}
      />

      {/* HERO */}
      <section className="bg-[#101D36] text-white">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-4 sm:px-6 sm:pb-20 lg:px-8">
          <div className="[&_a]:text-slate-300 [&_a:hover]:text-white [&_li>span]:text-slate-100 [&_svg]:text-slate-400">
            <Breadcrumbs
              items={[
                { label: SEO_CITY, href: "/patna" },
                { label: breadcrumbLabel },
              ]}
            />
          </div>

          <div className="mt-4 max-w-3xl">
            <Badge variant="accent" size="md" className="mb-4">
              Managed One-to-One Home Tuition
            </Badge>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {h1}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
              {intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                variant="accent"
                size="lg"
                href="#inquire"
                data-open-tutor-modal="true"
                data-initial-locality={initialLocality || undefined}
                data-initial-class={initialClass || undefined}
              >
                <span>Find Your Tutor</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <WhatsAppCTA
                size="lg"
                variant="whatsapp"
                customMessage={whatsappMessage}
                trackingLocation="seo_landing_hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL RELEVANCE / CLASS FOCUS */}
      <section className="border-b border-[#D7E2EE] bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {locality ? (
            <>
              <SectionHeading
                eyebrow={`Around ${name}`}
                title={`Home tuition near ${name} landmarks and schools`}
                description={`We shortlist tutors who can reach homes around these ${name} reference points regularly.`}
              />
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="p-6">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[#101D36]">
                    <MapPin className="h-5 w-5 text-[#35D0BA]" aria-hidden="true" />
                    Nearby landmarks
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-[#344054]">
                    {locality.nearbyLandmarks.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#35D0BA]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[#101D36]">
                    <School className="h-5 w-5 text-[#35D0BA]" aria-hidden="true" />
                    Schools students attend nearby
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-[#344054]">
                    {locality.nearbySchools.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#35D0BA]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs leading-relaxed text-[#53647D]">
                    School names are listed only as local reference points.
                    Wellfind Academic is not affiliated with these schools.
                  </p>
                </Card>
              </div>

              <div className="mt-10">
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#101D36]">
                  <GraduationCap className="h-5 w-5 text-[#35D0BA]" aria-hidden="true" />
                  Classes and boards we cover in {name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {SEO_CLASS_PAGES.map((item) => (
                    <Link key={item.slug} href={getSeoClassPath(item.slug)} className={linkChip}>
                      {item.name} Home Tutor
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : (
            classPage && (
              <>
                <SectionHeading
                  eyebrow={classPage.kind === "board" ? "Board focus" : "Class focus"}
                  title={`How our ${name} tutors help in ${SEO_CITY}`}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {classPage.focusPoints.map((point) => (
                    <Card key={point} className="flex items-start gap-3 p-5">
                      <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-[#35D0BA]" aria-hidden="true" />
                      <p className="text-sm leading-relaxed text-[#344054]">{point}</p>
                    </Card>
                  ))}
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-bold text-[#101D36]">Class pages</h3>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {classPage.relatedClassSlugs.map((classSlug) => (
                      <Link key={classSlug} href={`/classes/${classSlug}`} className={linkChip}>
                        {classLinkLabel(classSlug)} tuition
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[#101D36]">
                    <MapPin className="h-5 w-5 text-[#35D0BA]" aria-hidden="true" />
                    Areas in Patna we cover
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {SEO_LOCALITIES.map((item) => (
                      <Link key={item.slug} href={getSeoLocalityPath(item.slug)} className={linkChip}>
                        Home Tutor in {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </section>

      {/* HOW IT WORKS (short, text-only) */}
      <section className="border-b border-[#D7E2EE] bg-[#F4F8FC] py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title={`Find the right tutor in ${locality ? name : SEO_CITY} in 4 steps`}
            className="mb-8"
          />
          <ol className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map(([title, text], index) => (
              <li key={title} className="rounded-2xl border border-[#D7E2EE] bg-white p-5">
                <span className="text-xs font-bold text-[#0F6F63]">STEP {index + 1}</span>
                <h3 className="mt-1 text-base font-bold text-[#101D36]">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#53647D]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-[#D7E2EE] bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Got questions?"
            title={
              locality
                ? `Home tuition in ${name}: frequently asked questions`
                : `${name} home tutors: frequently asked questions`
            }
          />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* NEIGHBOURING LOCALITIES */}
      {locality && neighborLocalities.length > 0 && (
        <section className="border-b border-[#D7E2EE] bg-[#F4F8FC] py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-[#101D36]">
              Home tutors in neighbouring Patna localities
            </h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {neighborLocalities.map((item) => (
                <Link key={item.slug} href={getSeoLocalityPath(item.slug)} className={linkChip}>
                  Home Tutor in {item.name}
                </Link>
              ))}
              <Link href="/patna" className={linkChip}>
                All Patna areas
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ENQUIRY FORM */}
      <section
        id="inquire"
        className="bg-gradient-to-b from-[#EAF0F8] to-white py-14 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <Badge variant="subtle" size="md" className="mb-3">
              Get started today
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#101D36] sm:text-4xl">
              {locality
                ? `Request a home tutor in ${name}`
                : `Request a ${name} home tutor in ${SEO_CITY}`}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-[#53647D] sm:text-lg">
              Share your requirements with {siteConfig.name}. We review tutor
              availability and get back to you.
            </p>
          </div>
          <InquiryForm
            initialLocality={initialLocality}
            initialClass={initialClass}
          />
        </div>
      </section>
    </div>
  );
}
