"use client";

import React from "react";
import {
  Laptop,
  Truck,
  Wrench,
  Smartphone,
  ShieldCheck,
  Building,
  ArrowRight,
} from "lucide-react";

interface IntelligenceInActionProps {
  onBookDemo: () => void;
}

export function IntelligenceInAction({ onBookDemo }: IntelligenceInActionProps) {
  const workflows = [
    {
      title: "IT Asset Tracking",
      description:
        "Every device tracked, assigned, and audited. No chasing emails. No digging through files.",
      icon: <Laptop className="h-5 w-5" />,
      accentColor: "text-blue-600 bg-blue-50 border-blue-200",
      linkText: "Explore IT tracking",
    },
    {
      title: "Equipment Tracking",
      description:
        "Location, condition, ownership, and maintenance history. All tied to each asset, in real time.",
      icon: <Truck className="h-5 w-5" />,
      accentColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      linkText: "Explore equipment tracking",
    },
    {
      title: "Maintenance & Inspections",
      description:
        "Every repair, inspection, calibration, and warranty lives with the asset. Not in a spreadsheet.",
      icon: <Wrench className="h-5 w-5" />,
      accentColor: "text-amber-600 bg-amber-50 border-amber-200",
      linkText: "See inspection workflows",
    },
    {
      title: "Field Operations",
      description:
        "Scan barcodes, update records, and complete inspections from your mobile device. No desk required.",
      icon: <Smartphone className="h-5 w-5" />,
      accentColor: "text-purple-600 bg-purple-50 border-purple-200",
      linkText: "Explore mobile tracking",
    },
    {
      title: "Audit Readiness",
      description:
        "When auditors ask, you answer in minutes. Full histories, documentation, and reports. Ready to go.",
      icon: <ShieldCheck className="h-5 w-5" />,
      accentColor: "text-cyan-600 bg-cyan-50 border-cyan-200",
      linkText: "Learn about audit readiness",
    },
    {
      title: "Facilities Management",
      description:
        "Every tool, fixture, vehicle, and shared asset across every location. Compliance status included.",
      icon: <Building className="h-5 w-5" />,
      accentColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
      linkText: "Explore facilities management",
    },
  ];

  return (
    <section id="products" className="py-20 lg:py-28 bg-[var(--surface)] border-t border-[var(--border-custom)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2.5">
            Intelligence in Action
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
            Every team. Every workflow. <span className="text-[var(--brand-primary)]">One source of truth.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
            Unify IT, operations, maintenance, and compliance into a single centralized system built for speed and audit readiness.
          </p>
        </div>

        {/* 6 Grid Cards with clean rounded-xl */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {workflows.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[var(--border-custom)] bg-white p-6 sm:p-7 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:border-[var(--brand-primary)]/40 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div>
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-lg border ${item.accentColor} transition-transform group-hover:scale-105 duration-200`}>
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-base text-[var(--foreground-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={onBookDemo}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--brand-primary)] group-hover:underline cursor-pointer"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntelligenceInAction;
