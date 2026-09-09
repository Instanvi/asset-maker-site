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
  Smartphone,
  ClipboardCheck,
  Eye,
  Camera,
  MapPin,
  TrendingUp,
  AlertCircle,
  FileCheck,
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
  bookValue: string;
  warrantyUntil: string;
  icon: React.ReactNode;
}

export function HeroSection({ onBookDemo }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<"dashboard" | "scanner" | "inspection">("dashboard");
  const [selectedAssetIndex, setSelectedAssetIndex] = useState(0);
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Power & Battery Health Check", passed: true },
    { id: 2, text: "Physical Casing & Screen Condition", passed: true },
    { id: 3, text: "Latest Security Firmware Installed", passed: true },
    { id: 4, text: "GPS Geofence Calibration", passed: false },
  ]);

  const assets: DemoAsset[] = [
    {
      id: "1",
      name: "Apple MacBook Pro 16\" M3 Max",
      tag: "AM-IT-88421",
      category: "IT Hardware & MDM",
      custodian: "Sarah Jenkins (Engineering)",
      location: "San Francisco HQ &bull; Floor 4",
      status: "Assigned",
      conditionScore: 98,
      conditionGrade: "Pristine",
      lastAudit: "Today, 10:14 AM",
      serialNumber: "SN-C02GF798MD6T",
      bookValue: "$3,850.00",
      warrantyUntil: "Dec 2027",
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
      bookValue: "$185,000.00",
      warrantyUntil: "Aug 2029",
      icon: <Truck className="h-5 w-5" />,
    },
    {
      id: "3",
      name: "Siemens Acuson Ultrasound Scanner",
      tag: "AM-MED-4091",
      category: "Biomedical & Healthcare",
      custodian: "Dr. Rachel Chen (Cardiology)",
      location: "Building C &bull; Suite 210",
      status: "Available",
      conditionScore: 100,
      conditionGrade: "Calibrated & Compliant",
      lastAudit: "2 hrs ago",
      serialNumber: "SN-SIE-US-88102-MED",
      bookValue: "$64,200.00",
      warrantyUntil: "Nov 2028",
      icon: <Activity className="h-5 w-5" />,
    },
  ];

  const currentAsset = assets[selectedAssetIndex];

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setSelectedAssetIndex((prev) => (prev + 1) % assets.length);
    }, 600);
  };

  const toggleChecklistItem = (id: number) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, passed: !item.passed } : item))
    );
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden hero-gradient-canvas border-b border-[var(--border-subtle)]">
      {/* Multi-Spectrum Ambient Mesh Lighting */}
      <div className="hero-mesh-glow" />

      {/* Precision Engineering Grid */}
      <div className="hero-grid-pattern" />

      {/* Precision Blueprint Coordinate Crosshairs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="absolute top-16 left-[7%] text-slate-400/50 font-mono text-[11px] font-bold">+</span>
        <span className="absolute top-24 right-[8%] text-slate-400/50 font-mono text-[11px] font-bold">+</span>
        <span className="absolute bottom-16 left-[10%] text-slate-400/40 font-mono text-[11px] font-bold">+</span>
        <span className="absolute bottom-12 right-[45%] text-slate-400/30 font-mono text-[11px] font-bold">+</span>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Clear, Punchy Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--brand-primary)]">
              Total Operational Accountability
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
              Go Beyond Tracking.{" "}
              <span className="text-[var(--brand-primary)]">
                Complete Asset Intelligence.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Track physical assets, automate digital field inspections, and prove compliance in seconds. Asset Master centralizes your lifecycle records, warranties, and tamper-proof custody without spreadsheets.
            </p>

            {/* CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Button
                variant="primary"
                size="xl"
                onClick={onBookDemo}
                className="w-full sm:w-auto text-base shadow-[var(--shadow-glow)]"
              >
                <span>Book a Live Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={onBookDemo}
                className="w-full sm:w-auto text-base"
              >
                <span>Try for Free</span>
              </Button>
            </div>

            {/* Trust Badges Strip */}
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
                <Clock className="h-4 w-4 text-[var(--brand-primary)]" />
                <span>Deploy in &lt; 15 Mins</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Interactive Platform Studio */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Simulator Studio Top View Selector Tabs */}
              <div className="flex items-center justify-between gap-1.5 mb-2.5 bg-[var(--surface-raised)] p-1 rounded-lg border border-[var(--border-custom)]">
                <button
                  type="button"
                  onClick={() => setActiveTab("dashboard")}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-bold transition-all cursor-pointer select-none",
                    activeTab === "dashboard"
                      ? "bg-white text-[var(--brand-primary)] shadow-xs border border-[var(--border-custom)]"
                      : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                  )}
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>Asset Hub</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("scanner")}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-bold transition-all cursor-pointer select-none",
                    activeTab === "scanner"
                      ? "bg-white text-[var(--brand-primary)] shadow-xs border border-[var(--border-custom)]"
                      : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                  )}
                >
                  <QrCode className="h-3.5 w-3.5" />
                  <span>Mobile Scanner</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("inspection")}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-bold transition-all cursor-pointer select-none",
                    activeTab === "inspection"
                      ? "bg-white text-[var(--brand-primary)] shadow-xs border border-[var(--border-custom)]"
                      : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                  )}
                >
                  <ClipboardCheck className="h-3.5 w-3.5" />
                  <span>Field Audit</span>
                </button>
              </div>

              {/* Main Interactive Container Card */}
              <div className="relative rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] overflow-hidden">
                {/* Asset Picker Pills */}
                <div className="flex items-center gap-1.5 mb-4 overflow-x-auto pb-1 no-scrollbar border-b border-[var(--border-subtle)] pb-3">
                  {assets.map((asset, idx) => (
                    <button
                      key={asset.id}
                      type="button"
                      onClick={() => setSelectedAssetIndex(idx)}
                      className={cn(
                        "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-bold transition-all border cursor-pointer select-none shrink-0",
                        selectedAssetIndex === idx
                          ? "bg-[var(--brand-primary-light)] text-[var(--brand-primary)] border-[var(--brand-primary)]/40 shadow-xs"
                          : "bg-[var(--surface)] text-[var(--foreground-muted)] border-[var(--border-custom)] hover:bg-white"
                      )}
                    >
                      <span className="scale-75">{asset.icon}</span>
                      <span>{asset.name.split(" ")[0]} {asset.name.split(" ")[1]}</span>
                    </button>
                  ))}
                </div>

                {/* ─── TAB 1: ASSET INTELLIGENCE HUB ─── */}
                {activeTab === "dashboard" && (
                  <div className="space-y-4 animate-in fade-in-0 duration-150">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-bold text-[var(--foreground-subtle)] font-mono">
                          {currentAsset.tag} &bull; {currentAsset.category}
                        </div>
                        <h3 className="text-lg font-bold text-[var(--foreground)] tracking-tight mt-0.5">
                          {currentAsset.name}
                        </h3>
                      </div>
                      <span className="text-xs font-bold px-2 py-1 rounded-md bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] shrink-0 border border-[var(--brand-emerald)]/20">
                        {isCheckedOut ? "Checked Out" : "Active & Verified"}
                      </span>
                    </div>

                    {/* Key Metric Blocks */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)]">
                        <div className="text-[10px] font-bold text-[var(--foreground-subtle)] uppercase tracking-wider">
                          Book Value
                        </div>
                        <div className="text-xs font-bold text-[var(--foreground)] mt-0.5">
                          {currentAsset.bookValue}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)]">
                        <div className="text-[10px] font-bold text-[var(--foreground-subtle)] uppercase tracking-wider">
                          Health Score
                        </div>
                        <div className="text-xs font-bold text-[var(--brand-emerald)] mt-0.5">
                          {currentAsset.conditionScore}% (A+)
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)]">
                        <div className="text-[10px] font-bold text-[var(--foreground-subtle)] uppercase tracking-wider">
                          Warranty
                        </div>
                        <div className="text-xs font-bold text-[var(--foreground)] mt-0.5">
                          {currentAsset.warrantyUntil}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)]">
                        <div className="text-[10px] font-bold text-[var(--foreground-subtle)] uppercase tracking-wider">
                          Custody
                        </div>
                        <div className="text-xs font-bold text-[var(--foreground)] mt-0.5 truncate">
                          {isCheckedOut ? "In Field" : currentAsset.custodian.split(" ")[0]}
                        </div>
                      </div>
                    </div>

                    {/* Location & Custodian Detailed Row */}
                    <div className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[var(--brand-primary)]" />
                        <span className="text-[var(--foreground-muted)]">
                          Assigned: <strong className="text-[var(--foreground)]">{currentAsset.location.replace("&bull;", "•")}</strong>
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[var(--foreground-subtle)]">
                        {currentAsset.serialNumber}
                      </span>
                    </div>

                    {/* Interactive Action Bar */}
                    <div className="pt-2 flex items-center gap-2">
                      <Button
                        variant={isCheckedOut ? "outline" : "emerald"}
                        size="sm"
                        className="flex-1 text-xs"
                        onClick={() => setIsCheckedOut(!isCheckedOut)}
                      >
                        <UserCheck className="h-3.5 w-3.5" />
                        <span>{isCheckedOut ? "Return to Inventory" : "Quick Check-Out"}</span>
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        className="flex-1 text-xs"
                        onClick={onBookDemo}
                      >
                        <FileCheck className="h-3.5 w-3.5" />
                        <span>Generate Audit Record</span>
                      </Button>
                    </div>
                  </div>
                )}

                {/* ─── TAB 2: MOBILE BARCODE SCANNER HUD ─── */}
                {activeTab === "scanner" && (
                  <div className="space-y-4 animate-in fade-in-0 duration-150">
                    <div className="relative rounded-lg bg-slate-950 p-6 text-white text-center overflow-hidden border border-slate-800">
                      {/* Laser scanner animation */}
                      {isScanning && (
                        <div className="absolute left-0 right-0 h-0.5 bg-cyan-400 scanner-laser shadow-[0_0_12px_#38bdf8] z-20" />
                      )}

                      {/* Viewfinder crosshairs */}
                      <div className="relative z-10 my-2 mx-auto w-40 h-28 border-2 border-dashed border-cyan-400/80 rounded-lg flex flex-col items-center justify-center p-2 bg-slate-900/50">
                        <QrCode className="h-10 w-10 text-cyan-400 mb-1" />
                        <span className="text-[10px] font-mono text-cyan-300">
                          {isScanning ? "READING TAG..." : currentAsset.tag}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 px-2 pt-2 border-t border-slate-800">
                        <span>Latency: &lt; 85ms</span>
                        <span>Camera: 4K 2D Matrix</span>
                        <span className="text-emerald-400 font-bold">GPS Tagged</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="text-xs text-[var(--foreground-muted)]">
                        Current Scan: <strong className="text-[var(--foreground)]">{currentAsset.name}</strong>
                      </div>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleSimulateScan}
                        className="text-xs"
                      >
                        <RefreshCw className={cn("h-3.5 w-3.5", isScanning && "animate-spin")} />
                        <span>Simulate Scan Next</span>
                      </Button>
                    </div>
                  </div>
                )}

                {/* ─── TAB 3: FIELD AUDIT & INSPECTION CHECKLIST ─── */}
                {activeTab === "inspection" && (
                  <div className="space-y-3.5 animate-in fade-in-0 duration-150">
                    <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                      <div>
                        <span className="text-xs font-bold text-[var(--foreground)]">
                          Digital Inspection Protocol #8491
                        </span>
                        <p className="text-[11px] text-[var(--foreground-muted)]">
                          Inspector: Dave Martinez &bull; {currentAsset.name}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-[var(--brand-emerald)]">
                        {checklist.filter((c) => c.passed).length}/{checklist.length} Passed
                      </span>
                    </div>

                    <div className="space-y-2">
                      {checklist.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => toggleChecklistItem(item.id)}
                          className={cn(
                            "flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer transition-all select-none",
                            item.passed
                              ? "bg-[var(--brand-emerald-light)]/50 border-[var(--brand-emerald)]/30 text-[var(--foreground)]"
                              : "bg-rose-50/70 border-rose-200 text-rose-800"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            {item.passed ? (
                              <CheckCircle2 className="h-4 w-4 text-[var(--brand-emerald)] shrink-0" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-rose-500 shrink-0" />
                            )}
                            <span className="font-semibold">{item.text}</span>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider font-mono">
                            {item.passed ? "Pass" : "Flag"}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs text-[var(--foreground-muted)]">
                      <span className="flex items-center gap-1 text-[var(--brand-emerald)] font-bold">
                        <Sparkles className="h-3.5 w-3.5" />
                        UrsaAI Auto-Grader Ready
                      </span>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={onBookDemo}
                        className="text-xs"
                      >
                        Submit Inspection
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
