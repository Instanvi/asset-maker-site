"use client";

import React, { useState } from "react";
import {
  Building2,
  Factory,
  Stethoscope,
  GraduationCap,
  HardHat,
  HeartHandshake,
  ArrowRight,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface IndustrySolutionsProps {
  onBookDemo: () => void;
}

export function IndustrySolutions({ onBookDemo }: IndustrySolutionsProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const industries = [
    {
      title: "Government & Public Sector",
      description:
        "Asset accountability, audit history, chain of custody, and department-level compliance for agencies that can’t afford gaps.",
      icon: <Building2 className="h-5 w-5" />,
      linkText: "Explore Public Sector",
      stats: "Strict Chain-of-Custody & CJIS Ready",
      colorBg: "from-blue-500/10 to-indigo-500/10 border-blue-200/80",
    },
    {
      title: "Manufacturing & Warehousing",
      description:
        "Equipment tracking, calibration records, and inspection workflows tied to every asset on every line.",
      icon: <Factory className="h-5 w-5" />,
      linkText: "Explore Manufacturing",
      stats: "Zero Production Line Downtime",
      colorBg: "from-emerald-500/10 to-teal-500/10 border-emerald-200/80",
    },
    {
      title: "Healthcare & Life Sciences",
      description:
        "Medical equipment tracking, maintenance documentation, and regulatory audit trails across every facility.",
      icon: <Stethoscope className="h-5 w-5" />,
      linkText: "Explore Healthcare",
      stats: "FDA, Joint Commission & HIPAA Compliant",
      colorBg: "from-cyan-500/10 to-blue-500/10 border-cyan-200/80",
    },
    {
      title: "Education & School Districts",
      description:
        "Device management, equipment checkouts, and campus-wide inventory audits. All in one place.",
      icon: <GraduationCap className="h-5 w-5" />,
      linkText: "Explore Education",
      stats: "1:1 Student Device & Lab Tracking",
      colorBg: "from-purple-500/10 to-indigo-500/10 border-purple-200/80",
    },
    {
      title: "Construction & Contracting",
      description:
        "Tools, equipment, and vehicles tracked from the field. Inspection and repair history always accessible.",
      icon: <HardHat className="h-5 w-5" />,
      linkText: "Explore Construction",
      stats: "GPS Jobsite Tool Crib Checkout",
      colorBg: "from-amber-500/10 to-orange-500/10 border-amber-200/80",
    },
    {
      title: "Nonprofit Organizations",
      description:
        "Replace spreadsheets with a simpler way to track equipment, donations, and supplies. With the audit trail donors and boards expect.",
      icon: <HeartHandshake className="h-5 w-5" />,
      linkText: "Explore Nonprofit",
      stats: "Donor Grant Audit & Tax Records",
      colorBg: "from-rose-500/10 to-pink-500/10 border-rose-200/80",
    },
  ];

  return (
    <section id="industries" className="py-20 lg:py-28 bg-white border-t border-[var(--border-custom)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2.5">
            Built for Your Industry
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
            Ahead of your requirements. <span className="text-[var(--brand-primary)]">Asset intelligence for every sector.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
            Tailored data fields, automated compliance workflows, and industry-specific inspection checklists out of the box.
          </p>
        </div>

        {/* 6 Industry Cards with clean rounded-xl */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              className={cn(
                "rounded-xl border border-[var(--border-custom)] bg-white p-6 sm:p-7 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5 relative overflow-hidden",
                activeIdx === idx && "border-[var(--brand-primary)]/40"
              )}
            >
              <div>
                <div className="mb-4 relative z-10">
                  <div className="inline-flex p-3 rounded-lg bg-[var(--surface-raised)] text-[var(--foreground)] border border-[var(--border-custom)] group-hover:bg-[var(--brand-primary)] group-hover:text-white group-hover:border-[var(--brand-primary)] transition-colors duration-200">
                    {ind.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                  {ind.title}
                </h3>
                <p className="text-base text-[var(--foreground-muted)] leading-relaxed mb-5">
                  {ind.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-[var(--border-subtle)] relative z-10 flex items-center justify-between">
                <span className="text-xs font-semibold text-[var(--brand-emerald)] flex items-center gap-1">
                  <Shield className="h-3.5 w-3.5" />
                  {ind.stats}
                </span>
                <button
                  type="button"
                  onClick={onBookDemo}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[var(--brand-primary)] group-hover:underline cursor-pointer"
                >
                  <span>{ind.linkText}</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustrySolutions;
