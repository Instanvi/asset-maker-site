"use client";

import React, { useState } from "react";
import { Calculator, Sparkles, TrendingUp, Clock, ArrowRight } from "lucide-react";
import Slider from "@/components/ui/Slider";
import Button from "@/components/ui/Button";

interface RoiCalculatorProps {
  onBookDemo: () => void;
}

export function RoiCalculator({ onBookDemo }: RoiCalculatorProps) {
  const [assetCount, setAssetCount] = useState(2500);
  const [auditHoursPerWeek, setAuditHoursPerWeek] = useState(14);
  const hourlyRate = 48; // Standard operational/IT burdened rate

  // Formula calculations
  const hoursSavedPerYear = Math.round(auditHoursPerWeek * 50 * 0.75); // 75% efficiency gain
  const laborSavings = hoursSavedPerYear * hourlyRate;
  const lostAssetPrevention = Math.round(assetCount * 0.04 * 850); // 4% loss prevented @ $850 avg asset
  const totalAnnualSavings = laborSavings + lostAssetPrevention;
  const projectedRoi = Math.round((totalAnnualSavings / Math.max(assetCount * 6, 4000)) * 100);

  return (
    <section id="roi-calculator" className="py-20 lg:py-28 bg-white border-t border-[var(--border-custom)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2.5">
            Interactive ROI Calculator
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
            See your projected <span className="text-[var(--brand-primary)]">time & capital savings.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
            Calculate how much your organization saves by replacing manual spreadsheets and reactive audits with automated asset intelligence.
          </p>
        </div>

        {/* Calculator Grid with clean rounded-xl */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-[var(--surface)] border border-[var(--border-custom)] rounded-xl p-6 sm:p-8 shadow-[var(--shadow-card)]">
          {/* Sliders Input Column */}
          <div className="lg:col-span-6 space-y-7">
            {/* Slider 1: Total Assets */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-[var(--foreground)]">
                  Total Assets Tracked
                </label>
                <span className="text-lg font-extrabold text-[var(--brand-primary)] font-mono">
                  {assetCount.toLocaleString()} units
                </span>
              </div>
              <Slider
                min={100}
                max={25000}
                step={100}
                value={assetCount}
                onChange={setAssetCount}
              />
              <div className="flex justify-between text-[11px] text-[var(--foreground-subtle)]">
                <span>100</span>
                <span>10,000</span>
                <span>25,000+</span>
              </div>
            </div>

            {/* Slider 2: Weekly Audit Hours */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-[var(--foreground)]">
                  Weekly Hours Spent Auditing & Searching
                </label>
                <span className="text-lg font-extrabold text-[var(--brand-primary)] font-mono">
                  {auditHoursPerWeek} hrs/week
                </span>
              </div>
              <Slider
                min={2}
                max={40}
                step={1}
                value={auditHoursPerWeek}
                onChange={setAuditHoursPerWeek}
              />
              <div className="flex justify-between text-[11px] text-[var(--foreground-subtle)]">
                <span>2 hrs</span>
                <span>20 hrs</span>
                <span>40 hrs/wk</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-white border border-[var(--border-custom)] text-xs text-[var(--foreground-muted)] space-y-1">
              <div className="font-bold text-[var(--foreground)] flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[var(--brand-emerald)]" />
                Benchmark Calculation Assumptions
              </div>
              <p>
                Based on verified customer data: 75% reduction in reconciliation hours, 4% average loss prevention rate, and standard $48/hr operational burdened labor.
              </p>
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-6 bg-white rounded-lg border-2 border-[var(--brand-primary)]/40 p-5 sm:p-7 shadow-[var(--shadow-soft)] space-y-5">
            <div className="flex items-center justify-between pb-3.5 border-b border-[var(--border-subtle)]">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--foreground-subtle)]">
                  Projected Annual Value
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--brand-primary)] tracking-tight">
                  ${totalAnnualSavings.toLocaleString()}
                  <span className="text-xs font-normal text-[var(--foreground-muted)] ml-1">/ year</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-emerald)]">
                  Est. ROI
                </span>
                <div className="text-2xl font-extrabold text-[var(--brand-emerald)]">
                  {projectedRoi}%
                </div>
              </div>
            </div>

            {/* Metric Breakdown Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-1.5 text-xs text-[var(--foreground-muted)] mb-1">
                  <Clock className="h-3.5 w-3.5 text-[var(--brand-primary)]" />
                  <span>Labor Hours Saved</span>
                </div>
                <div className="text-lg font-bold text-[var(--foreground)]">
                  {hoursSavedPerYear.toLocaleString()} hrs
                </div>
                <div className="text-[11px] text-[var(--brand-emerald)] font-semibold mt-0.5">
                  ${laborSavings.toLocaleString()} saved
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-1.5 text-xs text-[var(--foreground-muted)] mb-1">
                  <TrendingUp className="h-3.5 w-3.5 text-[var(--brand-emerald)]" />
                  <span>Lost Asset Prevention</span>
                </div>
                <div className="text-lg font-bold text-[var(--foreground)]">
                  ${lostAssetPrevention.toLocaleString()}
                </div>
                <div className="text-[11px] text-[var(--foreground-muted)] font-semibold mt-0.5">
                  Avoided replacements
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={onBookDemo}
              className="w-full justify-center text-sm shadow-[var(--shadow-glow)]"
            >
              <span>Get Full Customized ROI Report</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoiCalculator;
