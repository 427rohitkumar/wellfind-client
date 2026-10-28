import React from "react";
import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "secondary" | "outline" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      className = "",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none cursor-pointer";

    const sizeStyles = {
      sm: "px-3.5 py-1.5 text-xs gap-1.5",
      md: "px-5 py-2.5 text-sm gap-2",
      lg: "px-6 py-3.5 text-base gap-2.5 font-semibold",
    };

    const variantStyles = {
      // Primary button: Deep Navy #101D36
      primary:
        "bg-[#101D36] text-white hover:bg-[#1E3154] active:bg-[#0A1324] focus-visible:ring-[#101D36] shadow-sm",
      // Accent button: Turquoise #35D0BA with dark #101D36 text as shown in mockup
      accent:
        "bg-[#35D0BA] text-[#101D36] font-semibold hover:bg-[#2BBFA9] active:bg-[#22A895] focus-visible:ring-[#35D0BA] shadow-sm",
      // Secondary: White with #101D36 text
      secondary:
        "bg-white text-[#101D36] border border-[#53647D]/30 hover:bg-[#EAF0F8] active:bg-[#D7E4F2] focus-visible:ring-[#101D36]",
      // Outline: transparent with #53647D border
      outline:
        "border border-[#53647D]/40 text-[#101D36] bg-transparent hover:bg-[#101D36]/5 active:bg-[#101D36]/10 focus-visible:ring-[#35D0BA]",
      // WhatsApp: #35D0BA with dark text or crisp contrast
      whatsapp:
        "bg-[#35D0BA] text-[#101D36] font-semibold hover:bg-[#2BBFA9] active:bg-[#22A895] focus-visible:ring-[#35D0BA] shadow-sm",
      // Ghost:
      ghost:
        "bg-transparent text-[#101D36] hover:bg-[#35D0BA]/15 active:bg-[#35D0BA]/25 focus-visible:ring-[#101D36]",
    };

    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    if (href) {
      if (isExternal) {
        return (
          <a
            {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          {...(props as unknown as Omit<React.ComponentPropsWithoutRef<typeof Link>, "href">)}
          href={href}
          className={combinedClassName}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
