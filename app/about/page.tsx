import React from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Target,
  HeartHandshake,
  Users,
  Compass,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { WhatsAppCTA } from "@/components/inquiry/WhatsAppCTA";

export const metadata: Metadata = {
  title: "About Wellfind Academic | Home Tuition Service in Patna",
  description:
    "Learn about Wellfind Academic, our teacher matching philosophy, and our parent-first mission to find suitable home tutors for students from UKG to Class 10 in Patna.",
  alternates: {
    canonical: `${siteConfig.url}/about/`,
  },
  openGraph: {
    title: "About Wellfind Academic | Home Tuition Service in Patna",
    description:
      "Learn about Wellfind Academic and our mission to help parents find suitable home tutors in Patna.",
    url: `${siteConfig.url}/about/`,
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* HEADER */}
      <section className="bg-white border-b border-[#D7E2EE] pt-6 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} className="mb-6" />

          <div className="max-w-4xl space-y-4">
            <Badge variant="subtle" size="md">
              <Users className="w-3.5 h-3.5 text-[#35D0BA] mr-1" />
              Our Mission &amp; Approach
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101D36] leading-[1.15]">
              About Wellfind Academic
            </h1>

            <p className="text-lg sm:text-xl text-[#344054] font-medium leading-relaxed">
              We help parents in Patna discover and connect with suitable,
              qualified home tutors for UKG to Class 10 students.
            </p>
          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY & STORY */}
      <section className="py-12 sm:py-16 bg-[#EAF0F8] border-b border-[#D7E2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <Card className="p-6 sm:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-[#101D36]">
                  Why Wellfind Academic Was Founded
                </h2>
                <p className="text-[#344054] text-sm sm:text-base leading-relaxed">
                  Every parent in Patna wants their child to receive sincere,
                  attentive academic guidance. Yet finding the right home tutor is
                  often frustrating. Word-of-mouth recommendations are scarce,
                  commercial coaching classes pack dozens of students into a single
                  room, and parents often struggle to find a teacher who can visit
                  their specific locality on time.
                </p>
                <p className="text-[#344054] text-sm sm:text-base leading-relaxed">
                  Wellfind Academic was created to simplify this discovery process.
                  Our philosophy is straightforward:{" "}
                  <strong className="text-[#101D36]">
                    “Apne Bachche Ke Liye, Sahi Teacher Chuniye.”
                  </strong>{" "}
                  We do not believe in one-size-fits-all tutoring. A young Class 1
                  child needs a gentle, patient teacher who builds study habits; a
                  Class 10 student preparing for board exams needs a sharp,
                  concept-focused subject mentor.
                </p>
              </Card>

              {/* Our Principles */}
              <Card className="p-6 sm:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-[#101D36]">
                  Our Operating Principles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#EAF0F8] border border-[#D7E2EE] space-y-1.5">
                    <div className="font-bold text-[#101D36] text-sm flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-[#35D0BA]" />
                      <span>Requirement-First Matching</span>
                    </div>
                    <p className="text-xs text-[#53647D] leading-relaxed">
                      We listen to your child&apos;s grade, board, subject challenges,
                      and timing before suggesting any teacher options.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#EAF0F8] border border-[#D7E2EE] space-y-1.5">
                    <div className="font-bold text-[#101D36] text-sm flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-[#35D0BA]" />
                      <span>Hyperlocal Proximity</span>
                    </div>
                    <p className="text-xs text-[#53647D] leading-relaxed">
                      Teachers must live or travel conveniently near your area to
                      prevent delays, cancellations, and commute fatigue.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#EAF0F8] border border-[#D7E2EE] space-y-1.5">
                    <div className="font-bold text-[#101D36] text-sm flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#35D0BA]" />
                      <span>Zero Exaggerated Claims</span>
                    </div>
                    <p className="text-xs text-[#53647D] leading-relaxed">
                      We never invent teacher counts, false reviews, or fake
                      guarantees. We only promise honest, diligent coordination.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#EAF0F8] border border-[#D7E2EE] space-y-1.5">
                    <div className="font-bold text-[#101D36] text-sm flex items-center gap-1.5">
                      <HeartHandshake className="w-4 h-4 text-[#35D0BA]" />
                      <span>Trial &amp; Comfort First</span>
                    </div>
                    <p className="text-xs text-[#53647D] leading-relaxed">
                      Parents always have the opportunity to arrange an
                      introductory class to observe the tutor before committing to a
                      monthly schedule.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column: Focus & Service Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#101D36]">
                  Who We Serve
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#344054]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35D0BA] mt-1.5"></span>
                    <span>
                      <strong>Classes:</strong> Pre-Primary (UKG) through Secondary
                      School (Class 10).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35D0BA] mt-1.5"></span>
                    <span>
                      <strong>Boards:</strong> CBSE, ICSE, and Bihar State Board.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35D0BA] mt-1.5"></span>
                    <span>
                      <strong>City:</strong> Patna, Bihar (Kankarbagh, Danapur,
                      Boring Road, Raja Bazar, Hartali Mor, and adjoining sectors).
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 space-y-4 bg-white">
                <h3 className="text-lg font-bold text-[#101D36]">
                  Ready to Discuss Your Child&apos;s Tuition?
                </h3>
                <p className="text-xs sm:text-sm text-[#53647D] leading-relaxed">
                  Submit an inquiry with your child&apos;s grade and locality. We
                  will reach out to understand your goals and identify suitable
                  teachers.
                </p>
                <div className="pt-2 flex flex-col gap-2.5">
                  <Button variant="accent" size="md" href="/contact/#inquire">
                    <span>Submit Tuition Inquiry</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                  <WhatsAppCTA
                    size="md"
                    variant="outline"
                    customMessage="Hello Wellfind Academic, I would like to learn more about finding a home tutor in Patna."
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
