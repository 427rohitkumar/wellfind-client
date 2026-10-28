import React from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: AccordionItemProps[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  return (
    <div className={`divide-y divide-[#D7E2EE] border-y border-[#D7E2EE] ${className}`}>
      {items.map((item, index) => (
        <details
          key={index}
          className="group py-4 sm:py-5 transition-colors"
          open={item.defaultOpen}
        >
          <summary className="flex items-center justify-between cursor-pointer list-none text-left font-semibold text-base sm:text-lg text-[#101D36] hover:text-[#0F6F63] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0BA] rounded-sm py-1">
            <span className="pr-4">{item.question}</span>
            <span className="shrink-0 transition-transform duration-200 group-open:rotate-180 text-[#53647D] group-hover:text-[#101D36]">
              <ChevronDown className="w-5 h-5" aria-hidden="true" />
            </span>
          </summary>
          <div className="pt-3 pb-1 text-[#344054] leading-relaxed text-sm sm:text-base">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
