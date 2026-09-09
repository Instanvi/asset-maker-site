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
    <section className="py-20 lg:py-28 bg-[var(--surface)] border-t border-[var(--border-custom)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)]">
              Why Teams Choose Asset Master
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight">
              Built for the field. <span className="text-[var(--brand-primary)]">Ready for anything.</span>
            </h2>

            <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
              Replace the spreadsheets and manual processes your team has outgrown. Configure Asset Master your way and prove operational accountability whenever it counts.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={onBookDemo}
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

            <div className="pt-2 text-xs font-bold text-[var(--brand-emerald)]">
              Asset management becomes proactive — not reactive.
            </div>
          </div>

          {/* Right Column: 4 Checkmark Cards with clean rounded-xl */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:border-[var(--brand-primary)]/40 transition-all duration-200 group"
              >
                <div className="flex items-start gap-2.5 mb-2.5">
                  <CheckCircle2 className="h-5 w-5 text-[var(--brand-emerald)] shrink-0 mt-0.5" />
                  <h3 className="text-base font-extrabold text-[var(--foreground)] group-hover:text-[var(--brand-primary)] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed pl-7">
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
