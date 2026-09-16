"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface WhyTeamsChooseProps {
  onBookDemo: () => void;
}

export function WhyTeamsChoose({ onBookDemo }: WhyTeamsChooseProps) {
  const pillars = [
    {
      title: "Flexible by design",
      description:
        "Configure fields, workflows, and reports to match how your operation runs. No rigid templates. Asset Master adapts to you.",
    },
    {
      title: "Easy enough for everyone",
      description:
        "Field teams, IT, finance, and operations can all use it without training. If you can use a smartphone, you’re ready.",
    },
    {
      title: "Visibility that’s actually useful",
      description:
        "Every asset’s location, assignment, condition, and history. Across every team and location, in real time.",
    },
    {
      title: "Finally done with spreadsheets",
      description:
        "Replace manual tracking and version confusion with one system that scales as your organization grows.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[var(--surface)] border-t border-[var(--border-custom)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 text-center lg:text-left">
            <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)]">
              Why Teams Choose Asset Master
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight">
              Built for the field. <span className="text-[var(--brand-primary)]">Ready for anything.</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[var(--foreground-muted)] leading-relaxed">
              Replace the spreadsheets and manual processes your team has outgrown. Configure Asset Master your way and prove operational accountability whenever it counts.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <Button
                variant="primary"
                size="lg"
                href="/demo"
                className="w-full sm:w-auto text-xs shadow-[var(--shadow-glow)]"
              >
                <span>Book a Demo</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#demo"
                className="w-full sm:w-auto text-xs"
              >
                Talk to Sales
              </Button>
            </div>

            <div className="pt-2 text-[10px] sm:text-xs font-bold text-[var(--brand-emerald)]">
              Asset management becomes proactive - not reactive.
            </div>
          </div>

          {/* Right Column: 4 Checkmark Cards with clean rounded-xl */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg sm:rounded-xl border border-[var(--border-custom)] bg-white p-4 sm:p-5 lg:p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:border-[var(--brand-primary)]/40 transition-all duration-200 group"
              >
                <div className="flex items-start gap-2 sm:gap-2.5 mb-2 sm:mb-2.5">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--brand-emerald)] shrink-0 mt-0.5" />
                  <h3 className="text-sm sm:text-base font-extrabold text-[var(--foreground)] group-hover:text-[var(--brand-primary)] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed pl-6 sm:pl-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyTeamsChoose;
