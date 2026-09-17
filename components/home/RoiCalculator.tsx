"use client";

import React, { useState } from "react";
import { Calculator, Sparkles, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Slider from "@/components/ui/Slider";
import Button from "@/components/ui/Button";

interface RoiCalculatorProps {
  onBookDemo: () => void;
}

export function RoiCalculator({ onBookDemo }: RoiCalculatorProps) {
  const t = useTranslations();
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
    <section id="roi-calculator" className="py-16 sm:py-20 lg:py-28 bg-white border-t border-[var(--border-custom)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
          <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2 sm:mb-2.5">
            {t('home.roi.badge')}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
            {t('home.roi.title')} <span className="text-[var(--brand-primary)]">{t('home.roi.titleHighlight')}</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[var(--foreground-muted)] leading-relaxed">
            {t('home.roi.description')}
          </p>
        </div>

        {/* Calculator Grid with clean rounded-xl */}
        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center bg-[var(--surface)] border border-[var(--border-custom)] rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-[var(--shadow-card)]">
          {/* Sliders Input Column */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 lg:space-y-7">
            {/* Slider 1: Total Assets */}
            <div className="space-y-2 sm:space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <label className="text-xs sm:text-sm font-bold text-[var(--foreground)]">
                  {t('home.roi.totalAssets')}
                </label>
                <span className="text-base sm:text-lg font-extrabold text-[var(--brand-primary)] font-mono">
                  {assetCount.toLocaleString()}<span className="hidden xs:inline"> {t('home.roi.units')}</span>
                </span>
              </div>
              <Slider
                min={100}
                max={25000}
                step={100}
                value={assetCount}
                onChange={setAssetCount}
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-[var(--foreground-subtle)]">
                <span>100</span>
                <span>10,000</span>
                <span>25,000+</span>
              </div>
            </div>

            {/* Slider 2: Weekly Audit Hours */}
            <div className="space-y-2 sm:space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <label className="text-xs sm:text-sm font-bold text-[var(--foreground)]">
                  <span className="hidden sm:inline">{t('home.roi.weeklyHours')}</span>
                  <span className="sm:hidden">{t('home.roi.weeklyHoursShort')}</span>
                </label>
                <span className="text-base sm:text-lg font-extrabold text-[var(--brand-primary)] font-mono whitespace-nowrap">
                  {auditHoursPerWeek} <span className="hidden xs:inline">{t('home.roi.hrsWeek')}</span><span className="xs:hidden">{t('home.roi.hrs')}</span>
                </span>
              </div>
              <Slider
                min={2}
                max={40}
                step={1}
                value={auditHoursPerWeek}
                onChange={setAuditHoursPerWeek}
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-[var(--foreground-subtle)]">
                <span>2 hrs</span>
                <span>20 hrs</span>
                <span>40 hrs/wk</span>
              </div>
            </div>

            <div className="p-2.5 sm:p-3.5 rounded-lg bg-white border border-[var(--border-custom)] text-[10px] sm:text-xs text-[var(--foreground-muted)] space-y-1">
              <div className="font-bold text-[var(--foreground)] flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[var(--brand-emerald)] shrink-0" />
                <span>{t('home.roi.assumptions')}</span>
              </div>
              <p>
                {t('home.roi.assumptionsText')}
              </p>
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-6 bg-white rounded-lg border-2 border-[var(--brand-primary)]/40 p-4 sm:p-5 lg:p-7 shadow-[var(--shadow-soft)] space-y-4 sm:space-y-5">
            <div className="flex items-center justify-between pb-3 sm:pb-3.5 border-b border-[var(--border-subtle)] gap-2">
              <div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--foreground-subtle)]">
                  {t('home.roi.projectedValue')}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--brand-primary)] tracking-tight">
                  ${totalAnnualSavings.toLocaleString()}
                  <span className="text-[10px] sm:text-xs font-normal text-[var(--foreground-muted)] ml-1">{t('home.roi.perYear')}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--brand-emerald)]">
                  {t('home.roi.estRoi')}
                </span>
                <div className="text-xl sm:text-2xl font-extrabold text-[var(--brand-emerald)]">
                  {projectedRoi}%
                </div>
              </div>
            </div>

            {/* Metric Breakdown Cards */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <div className="p-2.5 sm:p-3.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-[var(--foreground-muted)] mb-1">
                  <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[var(--brand-primary)] shrink-0" />
                  <span className="line-clamp-1">{t('home.roi.laborHours')}</span>
                </div>
                <div className="text-base sm:text-lg font-bold text-[var(--foreground)]">
                  {hoursSavedPerYear.toLocaleString()} <span className="text-xs sm:text-sm">{t('home.roi.hrs')}</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-[var(--brand-emerald)] font-semibold mt-0.5">
                  ${laborSavings.toLocaleString()} {t('home.roi.saved')}
                </div>
              </div>

              <div className="p-2.5 sm:p-3.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-[var(--foreground-muted)] mb-1">
                  <TrendingUp className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[var(--brand-emerald)] shrink-0" />
                  <span className="line-clamp-1"><span className="hidden sm:inline">{t('home.roi.lostAssetPrevention')}</span><span className="sm:hidden">{t('home.roi.lostAssetPreventionShort')}</span></span>
                </div>
                <div className="text-base sm:text-lg font-bold text-[var(--foreground)]">
                  ${lostAssetPrevention.toLocaleString()}
                </div>
                <div className="text-[10px] sm:text-[11px] text-[var(--foreground-muted)] font-semibold mt-0.5">
                  <span className="hidden sm:inline">{t('home.roi.avoidedReplacements')}</span>
                  <span className="sm:hidden">{t('home.roi.avoided')}</span>
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              href="/demo"
              className="w-full justify-center text-xs sm:text-sm shadow-[var(--shadow-glow)]"
            >
              <span className="hidden sm:inline">{t('home.roi.getReport')}</span>
              <span className="sm:hidden">{t('home.roi.getReportShort')}</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoiCalculator;
