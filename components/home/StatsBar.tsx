"use client";

import React from "react";

export function StatsBar() {
  const stats = [
    { value: "50M+", label: "Assets Tracked Worldwide" },
    { value: "10,000+", label: "Organizations Served Since 2012" },
    { value: "90,000+", label: "Users Managing Assets Daily" },
    { value: "4,000", label: "Hours Saved Annually" },
    { value: "800%", label: "Time Savings ROI" },
    { value: "67+", label: "Countries Using Asset Master" },
  ];

  return (
    <section className="border-y border-[var(--border-custom)] bg-[var(--surface)] py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--brand-primary)] mb-2">
            Global Compliance & Scale
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--foreground)] tracking-tight leading-snug">
            Trusted by thousands of organizations managing millions of assets worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl bg-white border border-[var(--border-custom)] shadow-2xs flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] hover:border-[var(--brand-primary)]/40 group min-h-[90px] sm:min-h-[100px]"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--brand-primary)] group-hover:scale-105 transition-transform duration-200 tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs font-semibold text-[var(--foreground-muted)] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
