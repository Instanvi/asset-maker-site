"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

interface WhyTeamsChooseProps {
  onBookDemo: () => void;
}

export function WhyTeamsChoose({ onBookDemo }: WhyTeamsChooseProps) {
  const t = useTranslations();

  const pillars = [
    {
      title: t('home.whyTeams.pillars.flexible.title'),
      description: t('home.whyTeams.pillars.flexible.description'),
    },
    {
      title: t('home.whyTeams.pillars.easy.title'),
      description: t('home.whyTeams.pillars.easy.description'),
    },
    {
      title: t('home.whyTeams.pillars.visibility.title'),
      description: t('home.whyTeams.pillars.visibility.description'),
    },
    {
      title: t('home.whyTeams.pillars.noSpreadsheets.title'),
      description: t('home.whyTeams.pillars.noSpreadsheets.description'),
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[var(--surface)] border-t border-[var(--border-custom)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 text-center lg:text-left">
            <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)]">
              {t('home.whyTeams.badge')}
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight">
              {t('home.whyTeams.title')} <span className="text-[var(--brand-primary)]">{t('home.whyTeams.titleHighlight')}</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[var(--foreground-muted)] leading-relaxed">
              {t('home.whyTeams.description')}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <Button
                variant="primary"
                size="lg"
                href="/demo"
                className="w-full sm:w-auto text-xs shadow-[var(--shadow-glow)]"
              >
                <span>{t('common.bookDemo')}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#demo"
                className="w-full sm:w-auto text-xs"
              >
                {t('home.whyTeams.talkToSales')}
              </Button>
            </div>

            <div className="pt-2 text-[10px] sm:text-xs font-bold text-[var(--brand-emerald)]">
              {t('home.whyTeams.proactiveNotReactive')}
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
