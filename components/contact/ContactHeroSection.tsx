import React from "react";
import Image from "next/image";
import { MessageCircle, Users, Zap, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import contactHeroImg from "@/public/contact-page-image.png";

const BENEFIT_ITEMS = [
  {
    icon: Users,
    title: "Personalized",
    subtitle: "Tutor Matching",
    circleBg: "bg-[#E1EFFF]",
    iconColor: "text-[#1A6FC4]",
  },
  {
    icon: Zap,
    title: "Quick Response",
    subtitle: "Within 24–48 Hours",
    circleBg: "bg-[#D7F6F1]",
    iconColor: "text-[#00897B]",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Verified",
    subtitle: "Home Tutors",
    circleBg: "bg-[#E1EFFF]",
    iconColor: "text-[#1A6FC4]",
  },
];

export function ContactHeroSection() {
  return (
    <section className="relative bg-white overflow-hidden border-b border-[#D7E2EE]">
      {/* Subtle light mint gradient glow on the right side behind illustration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_80%_at_78%_55%,#E6F7F4_0%,rgba(230,247,244,0.45)_55%,transparent_100%)]"
      />

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-3 sm:pt-5 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-8 xl:gap-x-12 items-end">
          {/* Left Column: Breadcrumb, Badge, Heading, Description, 3 Benefits */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center pb-5 sm:pb-7 lg:pb-8">
            {/* Breadcrumb */}
            <Breadcrumbs
              items={[{ label: "Contact & Inquiries" }]}
              className="!py-0 mb-3 sm:mb-3.5"
            />

            {/* Mint Badge */}
            <div className="flex items-center">
              <Badge
                variant="subtle"
                size="md"
                className="font-semibold text-xs tracking-wide"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#0F6F63] mr-1.5" />
                Direct Parent Inquiries
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="mt-3 sm:mt-3.5 text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-black text-[#101D36] tracking-tight leading-[1.18]">
              Contact Wellfind Academic
            </h1>

            {/* Description */}
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-[15px] lg:text-base text-[#53647D] leading-relaxed max-w-[560px]">
              Looking for a suitable home tutor for your child in Patna? Share
              your requirements below, and our team will get in touch with you.
            </p>

            {/* Three Benefit Items */}
            <div className="mt-5 sm:mt-6 flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 lg:gap-8 pt-1">
              {BENEFIT_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${item.circleBg} ${item.iconColor} flex items-center justify-center shrink-0`}
                      aria-hidden="true"
                    >
                      <IconComponent className="w-5 h-5" strokeWidth={2.2} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-bold text-[#101D36] leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[11px] sm:text-xs text-[#53647D] leading-tight mt-0.5 whitespace-nowrap">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Illustration */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end items-end self-end">
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[560px] xl:max-w-[600px]">
              <Image
                src={contactHeroImg}
                alt="Find the right tutor for your child with Wellfind Academic"
                priority
                className="w-full h-auto object-contain object-bottom select-none pointer-events-none max-h-[280px] sm:max-h-[320px] lg:max-h-[340px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

