"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = getWhatsAppUrl();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#101D36] border-b border-[#1E3154]/40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo (Dark mode for navy header) */}
          <div className="flex-shrink-0">
            <Logo variant="full" theme="dark" symbolSize={38} />
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-1 lg:space-x-1.5"
          >
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md text-xs lg:text-sm transition-colors ${
                    isActive
                      ? "text-white font-medium bg-[#1B2B47]"
                      : "text-slate-300 hover:text-white hover:bg-white/5 font-normal"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact/#inquire"
              data-open-tutor-modal="true"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-[#35D0BA] text-[#101D36] text-xs lg:text-sm font-bold hover:bg-[#2fc4af] transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0BA]"
            >
              <span>Find a Tutor</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0BA]"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-[#1E3154] bg-[#101D36] shadow-xl px-4 pt-3 pb-6 space-y-3"
        >
          <div className="flex flex-col space-y-1">
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#1E3154] text-[#35D0BA] font-semibold"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#1E3154] flex flex-col gap-2.5">
            <Button
              variant="accent"
              size="lg"
              href="/contact/#inquire"
              data-open-tutor-modal="true"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center"
            >
              <span>Find a Tutor</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
            {whatsappUrl && (
              <Button
                variant="outline"
                size="md"
                href={whatsappUrl}
                isExternal
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center text-[#35D0BA] border-[#35D0BA]/40"
              >
                <MessageCircle className="w-4 h-4 text-[#35D0BA]" />
                Enquire on WhatsApp
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
