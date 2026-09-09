"use client";

import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  Eye,
  Camera,
  FileCheck,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface WhyAssetIntelligenceProps {
  onBookDemo: () => void;
}

export function WhyAssetIntelligence({ onBookDemo }: WhyAssetIntelligenceProps) {
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const pillars = [
    {
      verb: "Tracking",
      tagline: "Total Real-Time Visibility",
      icon: <Eye className="h-5 w-5" />,
      assetMasterText:
        "UrsaAI watches every scan, transfer, and check-out, then keeps the record current on its own. You always know where it is and who has it.",
      spreadsheetText:
        "A spreadsheet row that goes stale the moment someone forgets to update it.",
    },
    {
      verb: "Inspection",
      tagline: "Instant Field Condition Grading",
      icon: <Camera className="h-5 w-5" />,
      assetMasterText:
        "Snap a photo and UrsaAI reads it, grades the condition, fills the checklist, and flags damage before you finish the walk.",
      spreadsheetText:
        "Paper forms, emailed photos, and inspection logs living in someone’s inbox.",
    },
    {
      verb: "Audit",
      tagline: "Instant Chain of Custody",
      icon: <FileCheck className="h-5 w-5" />,
      assetMasterText:
        "UrsaAI assembles the full history, chain of custody, and documentation the moment you ask. Walk into any audit ready.",
      spreadsheetText:
        "Weeks of manual reconciliation across files, folders, and departments.",
    },
    {
      verb: "Compliance",
      tagline: "Proactive Risk Prevention",
      icon: <ShieldAlert className="h-5 w-5" />,
      assetMasterText:
        "UrsaAI watches certification dates and inspection status, flags what is slipping, and writes the report before anyone asks for proof.",
      spreadsheetText:
        "Reactive scrambling when regulators, insurers, or executives ask for proof.",
    },
  ];

  return (
    <section id="why-asset-intelligence" className="py-20 lg:py-28 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2.5">
            Why Asset Intelligence
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
            Four verbs. One platform. <span className="text-[var(--brand-primary)]">Total accountability.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
            Tracking tells you where things are. Asset Master tells you everything else: who had it, what happened to it, and whether you can prove it.
          </p>
        </div>

        {/* Comparison Container with clean rounded-xl */}
        <div className="bg-[var(--surface)] border border-[var(--border-custom)] rounded-xl p-5 sm:p-7 shadow-[var(--shadow-card)]">
          {/* Pillar Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pb-5 border-b border-[var(--border-custom)] mb-6">
            {pillars.map((pillar, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePillarIndex(idx)}
                className={cn(
                  "flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-lg text-sm font-bold transition-all cursor-pointer select-none",
                  activePillarIndex === idx
                    ? "bg-white text-[var(--brand-primary)] shadow-xs border border-[var(--border-custom)]"
                    : "text-[var(--foreground-muted)] hover:bg-white/60 hover:text-[var(--foreground)]"
                )}
              >
                <span className="shrink-0">{pillar.icon}</span>
                <span>{pillar.verb}</span>
              </button>
            ))}
          </div>

          {/* Side-by-Side Detailed Breakdown */}
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {/* Asset Master (Powered by UrsaAI) */}
            <div className="rounded-lg border-2 border-[var(--brand-primary)]/40 bg-white p-5 sm:p-6 shadow-[var(--shadow-soft)] relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)]">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-[var(--foreground)]">
                        Asset Master
                      </h4>
                      <span className="text-xs text-[var(--brand-primary)] font-semibold">
                        Powered by UrsaAI
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 mt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--foreground-subtle)]">
                    {pillars[activePillarIndex].verb} Capability
                  </div>
                  <p className="text-base font-semibold text-[var(--foreground)] leading-relaxed">
                    {pillars[activePillarIndex].assetMasterText}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[var(--border-subtle)] flex items-center gap-2 text-xs font-bold text-[var(--brand-emerald)]">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Zero manual spreadsheet upkeep required</span>
              </div>
            </div>

            {/* Spreadsheets & Siloed Tools */}
            <div className="rounded-lg border border-[var(--border-custom)] bg-slate-50/80 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-slate-200 text-slate-600">
                      <XCircle className="h-4 w-4 text-rose-500" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-[var(--foreground)]">
                        Spreadsheets & Siloed Tools
                      </h4>
                      <span className="text-xs text-[var(--foreground-subtle)] font-medium">
                        Manual Status Quo
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 mt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--foreground-subtle)]">
                    Traditional Pitfall
                  </div>
                  <p className="text-base text-[var(--foreground-muted)] leading-relaxed">
                    {pillars[activePillarIndex].spreadsheetText}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[var(--border-custom)] flex items-center gap-2 text-xs font-semibold text-rose-600">
                <XCircle className="h-4 w-4 shrink-0" />
                <span>Prone to human error, blind spots, and data drift</span>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-6 pt-5 border-t border-[var(--border-custom)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm font-medium text-[var(--foreground-muted)] text-center sm:text-left">
              Ready to replace fragile spreadsheets with complete asset intelligence?
            </span>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <Button
                variant="primary"
                onClick={onBookDemo}
                className="w-full sm:w-auto text-xs"
              >
                <span>Explore Asset Intelligence</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="outline"
                href="#case-studies"
                className="w-full sm:w-auto text-xs"
              >
                See Comparison
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyAssetIntelligence;
