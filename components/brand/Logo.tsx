import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoIcon from "./icon-logo-wellfind-blue-tranparent.png";

interface LogoProps {
  variant?: "full" | "symbol";
  theme?: "light" | "dark";
  className?: string;
  symbolSize?: number;
}

export function LogoSymbol({
  size = 40,
  className = "",
}: {
  size?: number;
  theme?: "light" | "dark";
  className?: string;
}) {
  const width = Math.round(size * (logoIcon.width / logoIcon.height));

  return (
    <Image
      src={logoIcon}
      alt="Wellfind Academic Logo"
      width={width}
      height={size}
      className={`shrink-0 object-contain ${className}`}
      priority
    />
  );
}

export function Logo({
  variant = "full",
  theme = "light",
  className = "",
  symbolSize = 40,
}: LogoProps) {
  const isDark = theme === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0BA] rounded-md transition-opacity hover:opacity-95 ${className}`}
      aria-label="Wellfind Academic - Back to homepage"
    >
      <LogoSymbol size={symbolSize} theme={theme} />
      {variant === "full" && (
        <div className="flex flex-col">
          <span className="flex items-center font-bold tracking-tight text-xl leading-none">
            <span className={isDark ? "text-white" : "text-[#101D36]"}>
              Wellfind
            </span>
            <span className="ml-1 text-[#35D0BA]">Academic</span>
          </span>
          <span
            className={`text-[10px] uppercase font-semibold tracking-wider mt-1 ${isDark ? "text-[#94A3B8]" : "text-[#53647D]"
              }`}
          >
            Find tutor for brighter future.
          </span>
        </div>
      )}
    </Link>
  );
}
