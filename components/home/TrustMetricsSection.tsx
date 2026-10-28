"use client";

import React, { useState, useEffect, useRef } from "react";

interface TrustMetric {
  id: string;
  numberValue: number;
  suffix: string;
  title: string;
}

const trustMetricsData: TrustMetric[] = [
  {
    id: "verified-teachers",
    numberValue: 20000,
    suffix: "+",
    title: "Verified Teachers",
  },
  {
    id: "active-students",
    numberValue: 10000,
    suffix: "+",
    title: "Active Students",
  },
  {
    id: "areas-in-patna",
    numberValue: 10,
    suffix: "+",
    title: "Areas in Patna",
  },
  {
    id: "teaching-experience",
    numberValue: 5,
    suffix: "+ Years",
    title: "Average Teaching Experience",
  },
];

function MetricCard({
  metric,
  startAnimation,
}: {
  metric: TrustMetric;
  startAnimation: boolean;
}) {
  const [count, setCount] = useState<number>(metric.numberValue);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!startAnimation || hasAnimatedRef.current) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      hasAnimatedRef.current = true;
      return;
    }

    hasAnimatedRef.current = true;
    let startTimestamp: number | null = null;
    let rafId: number | null = null;
    const duration = 1200;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * metric.numberValue);

      setCount(current);

      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      } else {
        setCount(metric.numberValue);
      }
    };

    rafId = window.requestAnimationFrame(step);

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [startAnimation, metric.numberValue]);

  const formattedNumber = count.toLocaleString();

  return (
    <div className="flex flex-col items-center justify-center text-center p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D7E2EE] shadow-xs hover:shadow-md hover:border-[#35D0BA]/50 transition-all duration-300 h-full group">
      <div className="text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-[42px] font-black text-[#101D36] tracking-tight leading-none mb-2 sm:mb-2.5 flex items-baseline justify-center">
        <span>{formattedNumber}</span>
        <span className="text-[#35D0BA]">{metric.suffix}</span>
      </div>
      <h3 className="text-xs sm:text-sm md:text-base font-semibold text-[#53647D] tracking-tight">
        {metric.title}
      </h3>
    </div>
  );
}

export function TrustMetricsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="trust-metrics"
      className="py-10 sm:py-12 md:py-16 bg-[#EAF0F8] border-b border-[#D7E2EE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 min-[340px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 xl:gap-8 items-stretch">
          {trustMetricsData.map((metric) => (
            <MetricCard
              key={metric.id}
              metric={metric}
              startAnimation={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
