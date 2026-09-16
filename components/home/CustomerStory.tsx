"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Building,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";

interface CustomerStoryProps {
  onBookDemo: () => void;
}

export function CustomerStory({ onBookDemo }: CustomerStoryProps) {
  const stories = [
    {
      institution: "Saint Francis University",
      headline: "St. Francis got a much-needed update to their financial reports",
      quote:
        "With the implementation and the customizable fields, we were able to basically match things into Asset Master out of our current data we were used to managing.",
      author: "Tom Kendziora",
      role: "Assistant Controller",
      metrics: [
        { label: "Audit Prep Time", value: "-85%" },
        { label: "Campus Assets Tracked", value: "14,500+" },
        { label: "Financial Reporting", value: "100% Real-Time" },
      ],
    },
    {
      institution: "Apex Infrastructure Group",
      headline: "Apex eliminated lost jobsite equipment across 42 active project sites",
      quote:
        "Field workers scan tools directly with their phones before leaving the site. We recovered over $340,000 in heavy tools in our first six months alone.",
      author: "Derrick Hayes",
      role: "Director of Field Operations",
      metrics: [
        { label: "Equipment Loss Rate", value: "0.2%" },
        { label: "Tool Checkout Speed", value: "< 5 secs" },
        { label: "Annual Capital Saved", value: "$340,000+" },
      ],
    },
    {
      institution: "Merit Health Systems",
      headline: "Merit passed state biomedical audits with zero non-compliance citations",
      quote:
        "When state inspectors arrive, we hand them full calibration histories and inspection logs in two clicks. There is no scrambling or searching files.",
      author: "Elena Rostova",
      role: "VP of Clinical Engineering",
      metrics: [
        { label: "Regulatory Citations", value: "0" },
        { label: "Biomed Devices Managed", value: "8,200+" },
        { label: "Inspection Accuracy", value: "99.9%" },
      ],
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const current = stories[currentIdx];

  return (
    <section id="case-studies" className="py-16 sm:py-20 lg:py-28 bg-white border-t border-[var(--border-custom)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
          <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2 sm:mb-2.5">
            Customer Story
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
            Real results from teams that <span className="text-[var(--brand-primary)]">couldn't afford guesswork.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[var(--foreground-muted)] leading-relaxed">
            See how organizations moved from scattered records and reactive audits to complete asset intelligence.
          </p>
        </div>

        {/* Featured Story Card with clean rounded-xl */}
        <div className="rounded-lg sm:rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] p-4 sm:p-6 lg:p-10 shadow-[var(--shadow-card)] relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
            {/* Story Content */}
            <div className="lg:col-span-8 space-y-3 sm:space-y-4 lg:space-y-5">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="p-1.5 sm:p-2 rounded-md bg-white border border-[var(--border-custom)] text-[var(--brand-primary)] shadow-2xs">
                  <Building className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--foreground-muted)]">
                  {current.institution}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold text-[var(--foreground)] leading-tight tracking-tight">
                &ldquo;{current.headline}&rdquo;
              </h3>

              <blockquote className="text-sm sm:text-base lg:text-lg text-[var(--foreground-muted)] italic leading-relaxed border-l-4 border-[var(--brand-primary)] pl-3 sm:pl-4 py-1">
                {current.quote}
              </blockquote>

              <div className="pt-1 sm:pt-2">
                <div className="font-bold text-sm sm:text-base text-[var(--foreground)]">
                  {current.author}
                </div>
                <div className="text-[10px] sm:text-xs text-[var(--foreground-muted)]">
                  {current.role}, {current.institution}
                </div>
              </div>
            </div>

            {/* Metrics Column */}
            <div className="lg:col-span-4 bg-white rounded-lg border border-[var(--border-custom)] p-4 sm:p-5 space-y-3 sm:space-y-3.5 shadow-2xs">
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--foreground-subtle)] pb-2 border-b border-[var(--border-subtle)]">
                Verified Impact
              </div>
              {current.metrics.map((metric, mIdx) => (
                <div key={mIdx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--brand-primary)]">
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-[var(--foreground-muted)]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-5 sm:mt-6 lg:mt-7 pt-4 sm:pt-5 border-t border-[var(--border-custom)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <Button
              variant="outline"
              href="/demo"
              size="sm"
              className="text-xs font-bold w-full sm:w-auto"
            >
              <span>Read Full Success Story</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>

            <div className="flex items-center justify-center gap-3">
              <span className="text-[10px] sm:text-xs font-semibold text-[var(--foreground-muted)]">
                {currentIdx + 1} of {stories.length}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                className="p-1.5 sm:p-2 rounded-lg bg-white border border-[var(--border-custom)] text-[var(--foreground)] hover:bg-[var(--surface-raised)] hover:border-[var(--brand-primary)] transition-all cursor-pointer shadow-2xs"
                aria-label="Previous story"
              >
                <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-1.5 sm:p-2 rounded-lg bg-white border border-[var(--border-custom)] text-[var(--foreground)] hover:bg-[var(--surface-raised)] hover:border-[var(--brand-primary)] transition-all cursor-pointer shadow-2xs"
                aria-label="Next story"
              >
                <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerStory;
