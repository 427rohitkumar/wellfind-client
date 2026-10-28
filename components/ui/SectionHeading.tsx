import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl mb-12 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div className={`mb-3 ${isCenter ? "flex justify-center" : ""}`}>
          <Badge variant="subtle" size="md">
            {eyebrow}
          </Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#101D36]">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-base sm:text-lg text-[#53647D] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
