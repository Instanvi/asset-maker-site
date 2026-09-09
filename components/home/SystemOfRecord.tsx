"use client";

import React, { useState } from "react";
import {
  Box,
  Laptop,
  QrCode,
  ClipboardCheck,
  ShieldAlert,
  FileBarChart,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface SystemOfRecordProps {
  onBookDemo: () => void;
}

export function SystemOfRecord({ onBookDemo }: SystemOfRecordProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Asset Tracking",
      headline: "Capture every asset in one place",
      description:
        "Asset details, photos, serial numbers, locations, users, costs, and warranties. One searchable record.",
      linkText: "Explore asset tracking",
      icon: <Box className="h-5 w-5" />,
      mockup: {
        title: "Master Asset Registry",
        recordTag: "AM-AST-01048",
        status: "Active & Synced",
        metrics: [
          { label: "Purchase Value", value: "$4,850.00" },
          { label: "Book Value (Depreciated)", value: "$3,620.00" },
          { label: "Warranty Active Until", value: "Nov 2028" },
          { label: "Audit Classification", value: "Tier 1 Capital Asset" },
        ],
      },
    },
    {
      number: "02",
      title: "IT Asset Tracking",
      headline: "Know who has what, right now",
      description:
        "Assignments, checkouts, transfers, returns, and chain-of-custody history. No chasing. No digging.",
      linkText: "Explore IT asset tracking",
      icon: <Laptop className="h-5 w-5" />,
      mockup: {
        title: "IT Hardware & License Custody",
        recordTag: "AM-MAC-98210",
        status: "Assigned (Jane Doe)",
        metrics: [
          { label: "Assigned Department", value: "Product Engineering" },
          { label: "MDM Sync (Intune/Jamf)", value: "Encrypted & Compliant" },
          { label: "Software Licenses", value: "Figma, Slack, GitHub" },
          { label: "Handover E-Signature", value: "Verified on File" },
        ],
      },
    },
    {
      number: "03",
      title: "Mobile Asset Tracking",
      headline: "Update assets from anywhere",
      description:
        "Mobile barcode and QR scanning to capture movements, inspections, and updates in real time. Warehouse, office, or job site.",
      linkText: "Explore mobile asset tracking",
      icon: <QrCode className="h-5 w-5" />,
      mockup: {
        title: "High-Speed Mobile Scanner",
        recordTag: "AM-SCAN-LIVE",
        status: "Camera Scan Active",
        metrics: [
          { label: "Scan Mode", value: "Continuous 2D QR / Code128" },
          { label: "Offline Buffer", value: "148 records pending sync" },
          { label: "GPS Stamp", value: "32.7767° N, 96.7970° W" },
          { label: "Capture Latency", value: "< 120ms instant read" },
        ],
      },
    },
    {
      number: "04",
      title: "Inspection Management",
      headline: "Inspect and document in the field",
      description:
        "Run checklists, capture condition photos, collect signatures, and log results. All tied to the asset.",
      linkText: "See inspection workflows",
      icon: <ClipboardCheck className="h-5 w-5" />,
      mockup: {
        title: "Field Inspection Audit Protocol",
        recordTag: "AM-INSP-4491",
        status: "Passed 18/18 Checks",
        metrics: [
          { label: "Inspector", value: "Officer Dave Martinez" },
          { label: "Photo Evidence", value: "4 Geotagged Photos Attached" },
          { label: "Safety Rating", value: "100% OSHA Compliant" },
          { label: "Next Scheduled Run", value: "In 30 Days (Automated)" },
        ],
      },
    },
    {
      number: "05",
      title: "Asset Lifecycle Management",
      headline: "Track assets from deployment to retirement",
      description:
        "Follow each asset through deployment, maintenance, inspections, repairs, and disposal. The full lifecycle, always visible.",
      linkText: "See lifecycle management",
      icon: <ShieldAlert className="h-5 w-5" />,
      mockup: {
        title: "End-to-End Asset Lifecycle",
        recordTag: "AM-LIFE-7729",
        status: "Operational Year 3/7",
        metrics: [
          { label: "Acquisition Date", value: "Jan 15, 2023" },
          { label: "Total Maintenance Cost", value: "$412.50 (3 service tickets)" },
          { label: "Depreciation Method", value: "Straight-Line (7-Yr MACRS)" },
          { label: "Residual Value", value: "$1,820.00" },
        ],
      },
    },
    {
      number: "06",
      title: "Asset Reporting",
      headline: "Generate audit-ready reports in seconds",
      description:
        "Compliance, audit, maintenance, depreciation, and inventory reports. Generated without manual cleanup.",
      linkText: "Learn about asset reporting",
      icon: <FileBarChart className="h-5 w-5" />,
      mockup: {
        title: "Automated Compliance Report",
        recordTag: "AM-REP-2026-Q3",
        status: "100% Reconciled",
        metrics: [
          { label: "Total Assets in Scope", value: "12,490 Verified Units" },
          { label: "Missing / Unverified", value: "0 Units (100% Accounted)" },
          { label: "Export Formats", value: "PDF, CSV, Excel, ERP API" },
          { label: "Auditor Access Link", value: "Secure Read-Only Token" },
        ],
      },
    },
    {
      number: "07",
      title: "UrsaAI Intelligence",
      headline: "Let UrsaAI do the legwork",
      description:
        "UrsaAI finds what you need, flags what’s overdue, and surfaces answers from your data. No manual digging.",
      linkText: "Explore UrsaAI",
      icon: <Sparkles className="h-5 w-5" />,
      mockup: {
        title: "UrsaAI Intelligence Engine",
        recordTag: "URSA-AI-CORE",
        status: "Proactive Monitor Active",
        metrics: [
          { label: "Warranty Expiry Alert", value: "14 Servers Flagged for Renewal" },
          { label: "Predictive Maintenance", value: "Hydraulic Pump service due in 6d" },
          { label: "Photo Inspection", value: "AI auto-graded condition: 96%" },
          { label: "Audit Query Time", value: "Instant 0.04s natural lookup" },
        ],
      },
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="systems" className="py-20 lg:py-28 bg-[var(--surface)] border-t border-[var(--border-custom)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2.5">
            One System of Record
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
            From first record <span className="text-[var(--brand-primary)]">to final audit.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
            Turn everyday asset activity into decisions your team can act on.
          </p>
        </div>

        {/* Step Selector Ribbon with clean rounded-lg */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {steps.map((step, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={cn(
                "flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer border select-none",
                activeStep === idx
                  ? "bg-white text-[var(--brand-primary)] border-[var(--brand-primary)] shadow-xs"
                  : "bg-white/60 text-[var(--foreground-muted)] border-[var(--border-custom)] hover:bg-white hover:text-[var(--foreground)]"
              )}
            >
              <span className="text-[11px] font-extrabold text-[var(--foreground-subtle)]">
                {step.number}
              </span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Split Card with clean rounded-xl */}
        <div className="rounded-xl border border-[var(--border-custom)] bg-white p-6 sm:p-9 shadow-[var(--shadow-card)] grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Text & Details */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold text-[var(--brand-primary)]">
                {current.number}
              </span>
              <span className="text-xs font-bold text-[var(--foreground-muted)] uppercase tracking-wider">
                &bull; {current.title}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
              {current.headline}
            </h3>

            <p className="text-base text-[var(--foreground-muted)] leading-relaxed">
              {current.description}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Button
                variant="primary"
                onClick={onBookDemo}
                className="w-full sm:w-auto text-xs"
              >
                <span>{current.linkText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="outline"
                href="#demo"
                className="w-full sm:w-auto text-xs"
              >
                Schedule Live Demo
              </Button>
            </div>
          </div>

          {/* Right Live Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] p-5 shadow-2xs space-y-3.5">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-custom)]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-md bg-white border border-[var(--border-custom)] text-[var(--brand-primary)]">
                    {current.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--foreground)]">
                      {current.mockup.title}
                    </div>
                    <div className="text-[11px] text-[var(--foreground-muted)] font-mono">
                      {current.mockup.recordTag}
                    </div>
                  </div>
                </div>

                <span className="text-xs font-bold text-[var(--brand-emerald)]">
                  &bull; {current.mockup.status}
                </span>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {current.mockup.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3 rounded-md bg-white border border-[var(--border-custom)] shadow-2xs"
                  >
                    <div className="text-[10px] font-bold text-[var(--foreground-subtle)] uppercase tracking-wider mb-0.5">
                      {metric.label}
                    </div>
                    <div className="text-xs font-bold text-[var(--foreground)]">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-[var(--foreground-muted)] font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-[var(--brand-emerald)]" />
                  Tamper-Proof Audit Trail Active
                </span>
                <span className="text-[var(--brand-primary)] font-semibold">
                  Potta Enterprise Architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SystemOfRecord;
