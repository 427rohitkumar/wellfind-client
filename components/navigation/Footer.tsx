import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig, getWhatsAppUrl, getPhoneUrl } from "@/config/site";

export function Footer() {
  const currentYear = 2026;
  const whatsappUrl = getWhatsAppUrl();
  const phoneUrl = getPhoneUrl();

  return (
    <footer className="bg-[#101D36] text-slate-200 border-t border-[#1E3154]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="full" theme="dark" symbolSize={40} />
            <p className="text-[#35D0BA] text-sm italic font-medium pt-1">
              “{siteConfig.tagline}”
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Helping parents in Patna find suitable, qualified home tutors for UKG
              to Class 10 according to their child&apos;s specific class, subjects,
              locality, and schedule.
            </p>

            {/* Contact Status */}
            <div className="pt-2 space-y-2 text-xs sm:text-sm text-slate-300">
              {phoneUrl ? (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#35D0BA] shrink-0" />
                  <a
                    href={phoneUrl}
                    className="hover:text-white transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              ) : null}

              {whatsappUrl ? (
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#35D0BA] shrink-0" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp Inquiry Line
                  </a>
                </div>
              ) : null}

              {siteConfig.contact.email ? (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#35D0BA] shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              ) : null}

              <div className="flex items-start gap-2 pt-1 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-[#35D0BA] shrink-0 mt-0.5" />
                <span>
                  Primary Service Area: Patna, Bihar (Kankarbagh, Danapur, Boring
                  Road, Raja Bazar, Hartali Mor &amp; surrounding sectors)
                </span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#35D0BA] mb-3.5">
              Service Areas
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteConfig.serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={area.href}
                    className="text-slate-300 hover:text-[#35D0BA] transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#35D0BA] mb-3.5">
              Classes
            </h3>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs sm:text-sm">
              {siteConfig.classes.map((cls) => (
                <li key={cls.slug}>
                  <Link
                    href={cls.href}
                    className="text-slate-300 hover:text-[#35D0BA] transition-colors"
                  >
                    {cls.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Policies */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#35D0BA] mb-3.5">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/about/"
                  className="text-slate-300 hover:text-[#35D0BA] transition-colors"
                >
                  About Wellfind Academic
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  className="text-slate-300 hover:text-[#35D0BA] transition-colors"
                >
                  Find a Tutor / Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/join-as-teacher/"
                  className="text-slate-300 hover:text-[#35D0BA] transition-colors"
                >
                  Join as a Home Tutor
                </Link>
              </li>
              <li>
                <Link
                  href="/classes/"
                  className="text-slate-300 hover:text-[#35D0BA] transition-colors"
                >
                  All Supported Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/home-tuition/patna/"
                  className="text-slate-300 hover:text-[#35D0BA] transition-colors"
                >
                  Patna Tuition Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy/"
                  className="text-slate-300 hover:text-[#35D0BA] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1E3154] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy/"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/contact/"
              className="hover:text-white transition-colors"
            >
              Parent Inquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
