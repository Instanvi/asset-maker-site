"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  QrCode,
  Sparkles,
  CheckCircle2,
  Clock,
  UserCheck,
  ArrowRight,
  RefreshCw,
  Laptop,
  Truck,
  Activity,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  onBookDemo: () => void;
}

interface DemoAsset {
  id: string;
  name: string;
  tag: string;
  category: string;
  custodian: string;
  location: string;
  status: "Assigned" | "In Maintenance" | "Available" | "Inspected";
  conditionScore: number;
  conditionGrade: string;
  lastAudit: string;
  serialNumber: string;
  icon: React.ReactNode;
}

export function HeroSection({ onBookDemo }: HeroSectionProps) {
  const assets: DemoAsset[] = [
    {
      id: "1",
      name: "Apple MacBook Pro M3 Max",
      tag: "AM-IT-88421",
      category: "IT Asset Management",
      custodian: "Sarah Jenkins (Engineering)",
      location: "San Francisco HQ &bull; Floor 4",
      status: "Assigned",
      conditionScore: 99,
      conditionGrade: "Pristine",
      lastAudit: "Today, 10:14 AM (UrsaAI)",
      serialNumber: "SN-C02GF798MD6T",
      icon: <Laptop className="h-5 w-5" />,
    },
    {
      id: "2",
      name: "CAT 320 Hydraulic Excavator",
      tag: "AM-EQ-90142",
      category: "Heavy Machinery & Fleet",
      custodian: "Marcus Vance (Jobsite #4)",
      location: "Sector B &bull; Austin TX",
      status: "Inspected",
      conditionScore: 94,
      conditionGrade: "Operational",
      lastAudit: "Yesterday, 3:45 PM",
      serialNumber: "SN-CAT-HEX-2024-99A",
      icon: <Truck className="h-5 w-5" />,
    },
    {
      id: "3",
      name: "Siemens Acuson Ultrasound",
      tag: "AM-MED-4091",
      category: "Healthcare & Biomedical",
      custodian: "Dr. Rachel Chen (Cardiology)",
      location: "Building C &bull; Suite 210",
      status: "Available",
      conditionScore: 100,
      conditionGrade: "Calibrated & Compliant",
      lastAudit: "2 hrs ago (Verified)",
      serialNumber: "SN-SIE-US-88102-MED",
      icon: <Activity className="h-5 w-5" />,
    },
  ];

  const [selectedAssetIndex, setSelectedAssetIndex] = useState(0);
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const currentAsset = assets[selectedAssetIndex];

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setSelectedAssetIndex((prev) => (prev + 1) % assets.length);
    }, 600);
  };

  return (
    <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 overflow-hidden bg-white bg-grid-subtle">
      {/* Subtle Ambient Radial Glows */}
      <div className="ambient-hero-glow absolute inset-0 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Value Proposition & Actions */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Clean Eyebrow without badge border/pill */}
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--brand-primary)]">
              Voted #1 Asset Intelligence Platform
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
              It Tracks. It Inspects.{" "}
              <span className="text-[var(--brand-primary)]">It Audits.</span>{" "}
              You Stay Compliant.
            </h1>

            {/* Subhead with 16px body base standard */}
            <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Complete operational accountability, in one platform. Track assets, automate inspections, and prove compliance without chasing spreadsheets.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Button
                variant="primary"
                size="xl"
                onClick={onBookDemo}
                className="w-full sm:w-auto text-base shadow-[var(--shadow-glow)]"
              >
                <span>Book a Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="xl"
                href="#why-asset-intelligence"
                className="w-full sm:w-auto text-base"
              >
                Explore Platform
              </Button>
            </div>

            {/* Compliance Marks */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[var(--foreground-muted)] font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[var(--brand-emerald)]" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                <span>ISO 27001 Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                <span>256-Bit SSL Encrypted</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Asset Intelligence Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Asset Selector Tabs above Card */}
              <div className="flex items-center gap-1.5 mb-2.5 overflow-x-auto pb-1 no-scrollbar">
                {assets.map((asset, idx) => (
                  <button
                    key={asset.id}
                    type="button"
                    onClick={() => setSelectedAssetIndex(idx)}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer select-none",
                      selectedAssetIndex === idx
                        ? "bg-white text-[var(--brand-primary)] border-[var(--brand-primary)] shadow-xs"
                        : "bg-white/70 text-[var(--foreground-muted)] border-[var(--border-custom)] hover:bg-white hover:text-[var(--foreground)]"
                    )}
                  >
                    <span className="scale-75">{asset.icon}</span>
                    <span className="truncate max-w-[110px]">{asset.name.split(" ")[0]} {asset.name.split(" ")[1]}</span>
                  </button>
                ))}
              </div>

              {/* Interactive Card Container with clean rounded-xl */}
              <div className="relative rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] overflow-hidden">
                {/* Simulated Laser Scanner Bar */}
                {isScanning && (
                  <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent scanner-laser z-30 shadow-[0_0_15px_#3b82f6]" />
                )}

                {/* Card Header Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)]">
                      {currentAsset.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--foreground)] font-mono">
                        {currentAsset.tag}
                      </div>
                      <div className="text-[11px] text-[var(--foreground-muted)]">
                        {currentAsset.category}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleSimulateScan}
                    type="button"
                    title="Simulate Mobile Barcode Scan"
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-[var(--surface-raised)] hover:bg-[var(--surface-muted)] text-[var(--brand-primary)] text-xs font-bold transition-colors cursor-pointer border border-[var(--border-custom)]"
                  >
                    <RefreshCw className={cn("h-3.5 w-3.5", isScanning && "animate-spin")} />
                    <span>Scan Next</span>
                  </button>
                </div>

                {/* Asset Details */}
                <div className="py-3.5 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-[var(--foreground)] tracking-tight">
                      {currentAsset.name}
                    </h3>
                  </div>

                  {/* Simulated Barcode Stripe Graphic */}
                  <div className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] flex items-center justify-between px-3">
                    <div className="flex items-center gap-2">
                      <QrCode className="h-5 w-5 text-[var(--foreground)]" />
                      <div className="text-[10px] font-mono text-[var(--foreground-muted)]">
                        {currentAsset.serialNumber}
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[var(--brand-primary)] uppercase tracking-wider">
                      2D Matrix Synced
                    </span>
                  </div>

                  {/* Grid Metrics */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)]">
                      <div className="text-[10px] font-bold text-[var(--foreground-subtle)] uppercase tracking-wider mb-0.5">
                        Current Custodian
                      </div>
                      <div className="text-xs font-bold text-[var(--foreground)] truncate">
                        {isCheckedOut ? "Checked Out (Field)" : currentAsset.custodian}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)]">
                      <div className="text-[10px] font-bold text-[var(--foreground-subtle)] uppercase tracking-wider mb-0.5">
                        Assigned Location
                      </div>
                      <div
                        className="text-xs font-bold text-[var(--foreground)] truncate"
                        dangerouslySetInnerHTML={{ __html: currentAsset.location }}
                      />
                    </div>
                  </div>

                  {/* Intelligence Condition & AI Audit Bar */}
                  <div className="p-3 rounded-lg bg-[var(--brand-emerald-light)]/60 border border-[var(--brand-emerald)]/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[var(--brand-emerald)] shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-[var(--brand-emerald)]">
                          UrsaAI Condition Grade: {currentAsset.conditionGrade}
                        </div>
                        <div className="text-[11px] text-[var(--foreground-muted)]">
                          Score: {currentAsset.conditionScore}/100 &bull; Audit Verified
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timestamp */}
                  <div className="flex items-center justify-between text-[11px] text-[var(--foreground-muted)] px-0.5">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-[var(--foreground-subtle)]" />
                      Last Verified: {currentAsset.lastAudit}
                    </span>
                    <span className="font-bold text-[var(--brand-primary)]">
                      GPS Tagged
                    </span>
                  </div>
                </div>

                {/* Interactive Action Footer */}
                <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center gap-2">
                  <Button
                    variant={isCheckedOut ? "outline" : "emerald"}
                    size="sm"
                    className="flex-1 text-xs"
                    onClick={() => setIsCheckedOut(!isCheckedOut)}
                  >
                    <UserCheck className="h-3.5 w-3.5" />
                    <span>{isCheckedOut ? "Return to Pool" : "Check Out Asset"}</span>
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="flex-1 text-xs"
                    onClick={onBookDemo}
                  >
                    <QrCode className="h-3.5 w-3.5" />
                    <span>Inspect Record</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
