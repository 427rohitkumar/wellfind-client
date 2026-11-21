import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd, buildBreadcrumbJsonLd } from "@/components/JsonLd";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd(
          items.map((item) => ({ name: item.label, path: item.href }))
        )}
      />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center text-xs sm:text-sm text-[#53647D] py-3 ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-[#101D36] transition-colors focus:outline-none focus-visible:underline"
            >
              <Home className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5 sm:gap-2">
                <ChevronRight
                  className="w-3.5 h-3.5 text-[#53647D]/60 shrink-0"
                  aria-hidden="true"
                />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#101D36] transition-colors focus:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="font-semibold text-[#101D36] truncate max-w-[200px] sm:max-w-none"
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
