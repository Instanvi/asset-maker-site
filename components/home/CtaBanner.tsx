"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

interface CtaBannerProps {
  onBookDemo: () => void;
}

export function CtaBanner({ onBookDemo }: CtaBannerProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[var(--surface-dark)] text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[200px] sm:h-[300px] bg-[var(--brand-primary)]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-5">
        <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary-light)] mb-2">
          Ready to See it in Action?
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight text-white">
          See everything. Know everything. <span className="text-[var(--brand-primary-light)]">Prove everything.</span>
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          No guesswork. No spreadsheets. No scrambling when audits happen. Configure Asset Master in minutes and scale across all locations.
        </p>

        <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5">
          <Button
            variant="primary"
            size="xl"
            href="/demo"
            className="w-full sm:w-auto text-sm sm:text-base shadow-[var(--shadow-glow)]"
          >
            <span>Book a Demo</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Button>
          <Button
            variant="outline"
            size="xl"
            href="/contact"
            className="w-full sm:w-auto text-sm sm:text-base"
          >
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
