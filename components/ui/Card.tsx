import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className = "",
  hoverEffect = false,
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-[#D7E2EE] shadow-xs p-6 ${
        hoverEffect
          ? "transition-all duration-200 hover:shadow-md hover:border-[#35D0BA] hover:-translate-y-0.5"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
