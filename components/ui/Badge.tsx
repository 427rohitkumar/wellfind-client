import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "subtle" | "outline";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "subtle",
  size = "md",
  className = "",
}: BadgeProps) {
  const baseStyles = "inline-flex items-center font-medium rounded-full";
  
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
  };

  const variantStyles = {
    subtle: "bg-[#D7F6F1] text-[#0A4D45] border border-[#35D0BA]/40",
    primary: "bg-[#101D36] text-white",
    accent: "bg-[#35D0BA] text-[#101D36] font-semibold",
    outline: "bg-white text-[#344054] border border-[#53647D]/30",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
