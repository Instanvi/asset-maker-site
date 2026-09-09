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
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Search,
  Filter,
  Download,
  Send,
  Lock,
  Smartphone,
  TrendingDown,
  Layers,
  Activity,
  MapPin,
  Clock,
  UserCheck,
  FileText,
  SlidersHorizontal,
  ChevronRight,
  Check,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface SystemOfRecordProps {
  onBookDemo: () => void;
}

export function SystemOfRecord({ onBookDemo }: SystemOfRecordProps) {
  const [activeStep, setActiveStep] = useState(0);

  // ─── STEP 01 STATE ───
  const [assetFilter, setAssetFilter] = useState<"all" | "it" | "heavy" | "biomed">("all");
  const [selectedRegistryIndex, setSelectedRegistryIndex] = useState(0);

  const registryAssets = [
    {
      id: "AM-AST-01048",
      name: "Apple MacBook Pro 16\" M3 Max",
      category: "it",
      categoryLabel: "IT Hardware",
      location: "San Francisco HQ • Floor 4",
      cost: "$3,850.00",
      bookValue: "$2,950.00",
      status: "In Service",
      custodian: "Sarah Jenkins",
      warranty: "Dec 2027",
    },
    {
      id: "AM-EQ-90142",
      name: "CAT 320 Hydraulic Excavator",
      category: "heavy",
      categoryLabel: "Heavy Equipment",
      location: "Jobsite 4 • Austin TX",
      cost: "$185,000.00",
      bookValue: "$132,200.00",
      status: "Inspected",
      custodian: "Marcus Vance",
      warranty: "Aug 2029",
    },
    {
      id: "AM-MED-4091",
      name: "Siemens Acuson Ultrasound Scanner",
      category: "biomed",
      categoryLabel: "Biomedical",
      location: "Building C • Suite 210",
      cost: "$64,200.00",
      bookValue: "$48,900.00",
      status: "Calibrated",
      custodian: "Dr. Rachel Chen",
      warranty: "Nov 2028",
    },
  ];

  const filteredRegistry =
    assetFilter === "all"
      ? registryAssets
      : registryAssets.filter((a) => a.category === assetFilter);

  // ─── STEP 02 STATE ───
  const [selectedCustodianIdx, setSelectedCustodianIdx] = useState(0);
  const custodians = [
    {
      name: "Sarah Jenkins",
      role: "Lead Platform Engineer",
      dept: "Engineering",
      device: "MacBook Pro 16\" (M3 Max)",
      serial: "C02GF798MD6T",
      mdmStatus: "Jamf Pro Synced",
      encryption: "FileVault 2 Active",
      osPatch: "macOS 15.3 (Compliant)",
      licenses: ["Figma Enterprise", "GitHub Copilot", "Slack Business+"],
    },
    {
      name: "Marcus Vance",
      role: "Field Site Supervisor",
      dept: "Operations",
      device: "Panasonic Toughbook 55",
      serial: "TB-55-88192A",
      mdmStatus: "Intune MDM Enrolled",
      encryption: "BitLocker AES-256",
      osPatch: "Win 11 Pro 23H2",
      licenses: ["Autodesk Build", "Procore Field", "Teams Enterprise"],
    },
  ];

  // ─── STEP 03 STATE ───
  const [scanMode, setScanMode] = useState<"qr" | "barcode" | "rfid">("qr");
  const [isScanningActive, setIsScanningActive] = useState(false);
  const [scannedCount, setScannedCount] = useState(148);

  const handleSimulateScan = () => {
    setIsScanningActive(true);
    setTimeout(() => {
      setIsScanningActive(false);
      setScannedCount((c) => c + 1);
    }, 700);
  };

  // ─── STEP 04 STATE ───
  const [inspectionItems, setInspectionItems] = useState([
    { id: 1, text: "Safety Interlocks & Emergency E-Stop", passed: true },
    { id: 2, text: "Hydraulic Fluid Levels & Seal Integrity", passed: true },
    { id: 3, text: "Latest Calibration Sensor Certification", passed: true },
    { id: 4, text: "Chassis Wear & GPS Geofence Beacon", passed: false },
  ]);

  const toggleInspection = (id: number) => {
    setInspectionItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, passed: !item.passed } : item))
    );
  };

  // ─── STEP 05 STATE ───
  const [deprecMethod, setDeprecMethod] = useState<"sln" | "macrs">("sln");

  // ─── STEP 06 STATE ───
  const [isExporting, setIsExporting] = useState(false);
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  const handleTriggerExport = (format: string) => {
    setIsExporting(true);
    setExportNotice(null);
    setTimeout(() => {
      setIsExporting(false);
      setExportNotice(`Audit Package (${format}) generated successfully.`);
      setTimeout(() => setExportNotice(null), 3500);
    }, 800);
  };

  // ─── STEP 07 STATE ───
  const [aiQuery, setAiQuery] = useState("Which assets are due for warranty renewal this quarter?");
  const [aiResponse, setAiResponse] = useState({
    title: "14 Assets Requiring Renewal Action",
    summary: "Identified 14 hardware units expiring in next 90 days. Estimated warranty coverage gap: $42,600.",
    confidence: "99.8%",
    recommendation: "Auto-generate batch PO quote with Dell & Apple Premier enterprise portals.",
  });

  const aiPrompts = [
    {
      q: "Which assets are due for warranty renewal this quarter?",
      title: "14 Assets Requiring Renewal Action",
      summary: "Identified 14 hardware units expiring in next 90 days. Estimated warranty coverage gap: $42,600.",
      confidence: "99.8%",
      rec: "Auto-generate batch PO quote with Dell & Apple Premier enterprise portals.",
    },
    {
      q: "Show missing or unverified equipment in Warehouse B",
      title: "Zero Discrepancies Found in Warehouse B",
      summary: "All 1,842 barcoded items reconciled via RFID gate sensors in past 48 hours. 100% audit-ready.",
      confidence: "100%",
      rec: "Log zero-variance audit signoff for ISO 27001 auditor.",
    },
    {
      q: "Forecast residual salvage value for retired fleet",
      title: "Estimated Residual Salvage: $284,500",
      summary: "32 heavy vehicles reaching Year 7 MACRS endpoint. Market value indexed against Ritchie Bros auctions.",
      confidence: "96.4%",
      rec: "Schedule certified recycling & decommission auction.",
    },
  ];

  const handleSelectAiPrompt = (item: (typeof aiPrompts)[0]) => {
    setAiQuery(item.q);
    setAiResponse({
      title: item.title,
      summary: item.summary,
      confidence: item.confidence,
      recommendation: item.rec,
    });
  };

  // ─── STEPS DEFINITION ───
  const steps = [
    {
      number: "01",
      title: "Asset Tracking",
      tagline: "Master Asset Registry",
      shortDesc: "Complete searchable identity, depreciation & warranty record.",
      icon: <Box className="h-4 w-4" />,
    },
    {
      number: "02",
      title: "IT Asset Tracking",
      tagline: "Fleet & MDM Custody",
      shortDesc: "Real-time user checkout, Jamf/Intune sync & license tracking.",
      icon: <Laptop className="h-4 w-4" />,
    },
    {
      number: "03",
      title: "Mobile Asset Tracking",
      tagline: "High-Speed Scanner HUD",
      shortDesc: "Offline-first 2D barcode, QR and UHF RFID scanning.",
      icon: <QrCode className="h-4 w-4" />,
    },
    {
      number: "04",
      title: "Inspection Management",
      tagline: "Digital Field Protocols",
      shortDesc: "Structured checklists, photo proofs & instant e-signatures.",
      icon: <ClipboardCheck className="h-4 w-4" />,
    },
    {
      number: "05",
      title: "Lifecycle Management",
      tagline: "Depreciation & Service",
      shortDesc: "From procurement to straight-line & MACRS retirement.",
      icon: <ShieldAlert className="h-4 w-4" />,
    },
    {
      number: "06",
      title: "Asset Reporting",
      tagline: "Audit-Ready Reconciliations",
      shortDesc: "One-click 100% reconciled reports for internal & external audits.",
      icon: <FileBarChart className="h-4 w-4" />,
    },
    {
      number: "07",
      title: "UrsaAI Intelligence",
      tagline: "Proactive AI Copilot",
      shortDesc: "Natural language queries, predictive maintenance & auto-grading.",
      icon: <Sparkles className="h-4 w-4" />,
    },
  ];

  return (
    <section id="systems" className="py-20 lg:py-28 bg-[var(--surface)] border-t border-[var(--border-custom)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2.5">
            One Unified Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
            The Single System of Record <span className="text-[var(--brand-primary)]">from First Tag to Final Audit.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
            Eliminate disconnected spreadsheets and siloed software. Asset Master connects physical identity, custody, lifecycle health, and regulatory compliance into one operational spine.
          </p>
        </div>

        {/* Dual-Column Interactive Architecture */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Vertical Step Pipeline (01 to 07) */}
          <div className="lg:col-span-4 space-y-2">
            <div className="flex items-center justify-between px-2 pb-2 text-xs font-bold text-[var(--foreground-muted)] uppercase tracking-wider border-b border-[var(--border-custom)]">
              <span>Operational Pipeline</span>
              <span>7 Modules</span>
            </div>

            <div className="space-y-1.5 pt-1">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={cn(
                      "w-full text-left p-3 rounded-lg border transition-all cursor-pointer flex items-start gap-3 select-none",
                      isActive
                        ? "bg-white border-[var(--brand-primary)] shadow-sm shadow-[var(--brand-primary-glow)] ring-1 ring-[var(--brand-primary)]/20"
                        : "bg-white/70 border-[var(--border-custom)] hover:bg-white hover:border-[var(--border-hover)]"
                    )}
                  >
                    <div
                      className={cn(
                        "p-2 rounded-md shrink-0 transition-colors",
                        isActive
                          ? "bg-[var(--brand-primary-light)] text-[var(--brand-primary)]"
                          : "bg-[var(--surface)] text-[var(--foreground-muted)]"
                      )}
                    >
                      {step.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={cn(
                            "text-xs font-mono font-bold",
                            isActive ? "text-[var(--brand-primary)]" : "text-[var(--foreground-subtle)]"
                          )}
                        >
                          {step.number}
                        </span>
                        <span
                          className={cn(
                            "text-[10px] font-bold uppercase tracking-wider",
                            isActive ? "text-[var(--brand-primary)]" : "text-[var(--foreground-subtle)]"
                          )}
                        >
                          {step.tagline}
                        </span>
                      </div>

                      <h4
                        className={cn(
                          "text-sm font-bold tracking-tight mt-0.5",
                          isActive ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"
                        )}
                      >
                        {step.title}
                      </h4>
                      <p className="text-xs text-[var(--foreground-subtle)] truncate mt-0.5 font-normal">
                        {step.shortDesc}
                      </p>
                    </div>

                    <ChevronRight
                      className={cn(
                        "h-4 w-4 shrink-0 self-center transition-transform",
                        isActive ? "text-[var(--brand-primary)] translate-x-0.5" : "text-transparent"
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-Fidelity Interactive Cockpit Canvas */}
          <div className="lg:col-span-8">
            <div className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-7 shadow-[var(--shadow-card)] relative overflow-hidden">
              {/* Studio Canvas Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-md bg-[var(--brand-primary-light)] text-[var(--brand-primary)]">
                    {steps[activeStep].icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[var(--brand-primary)]">
                        STEP {steps[activeStep].number}
                      </span>
                      <span className="text-xs font-bold text-[var(--foreground-subtle)]">•</span>
                      <span className="text-xs font-bold text-[var(--foreground-muted)] uppercase tracking-wider">
                        {steps[activeStep].tagline}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--foreground)] tracking-tight">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--brand-emerald)] bg-[var(--brand-emerald-light)] px-2.5 py-1 rounded-md border border-[var(--brand-emerald)]/20">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Live System Active
                  </span>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────
                  MODULE 01: ASSET TRACKING (MASTER REGISTRY)
                 ───────────────────────────────────────────────────────────── */}
              {activeStep === 0 && (
                <div className="space-y-4 animate-in fade-in-0 duration-150">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
                    {/* Category Filter Pills */}
                    <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
                      {(
                        [
                          { id: "all", label: "All Assets (12,490)" },
                          { id: "it", label: "IT Hardware" },
                          { id: "heavy", label: "Heavy Machinery" },
                          { id: "biomed", label: "Biomedical" },
                        ] as const
                      ).map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setAssetFilter(tab.id)}
                          className={cn(
                            "px-2.5 py-1 rounded-md text-xs font-bold transition-all border cursor-pointer select-none shrink-0",
                            assetFilter === tab.id
                              ? "bg-[var(--brand-primary-light)] text-[var(--brand-primary)] border-[var(--brand-primary)]/40"
                              : "bg-[var(--surface)] text-[var(--foreground-muted)] border-[var(--border-custom)] hover:bg-white"
                          )}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    <div className="text-xs font-mono text-[var(--foreground-subtle)] shrink-0">
                      Showing {filteredRegistry.length} live records
                    </div>
                  </div>

                  {/* Interactive Registry Table */}
                  <div className="rounded-lg border border-[var(--border-custom)] overflow-hidden">
                    <div className="bg-[var(--surface)] px-3.5 py-2 grid grid-cols-12 text-[10px] font-bold uppercase tracking-wider text-[var(--foreground-subtle)] border-b border-[var(--border-custom)]">
                      <div className="col-span-5 sm:col-span-4">Asset & Tag</div>
                      <div className="col-span-4 sm:col-span-3">Location & Custody</div>
                      <div className="hidden sm:block sm:col-span-3">Book Value</div>
                      <div className="col-span-3 sm:col-span-2 text-right">Status</div>
                    </div>

                    <div className="divide-y divide-[var(--border-subtle)] bg-white">
                      {filteredRegistry.map((item, idx) => (
                        <div
                          key={item.id}
                          onClick={() => setSelectedRegistryIndex(idx)}
                          className={cn(
                            "px-3.5 py-2.5 grid grid-cols-12 items-center text-xs transition-colors cursor-pointer select-none",
                            selectedRegistryIndex === idx
                              ? "bg-blue-50/50"
                              : "hover:bg-[var(--surface)]"
                          )}
                        >
                          <div className="col-span-5 sm:col-span-4 min-w-0 pr-2">
                            <div className="font-bold text-[var(--foreground)] truncate">
                              {item.name}
                            </div>
                            <div className="text-[11px] font-mono text-[var(--foreground-subtle)]">
                              {item.id}
                            </div>
                          </div>

                          <div className="col-span-4 sm:col-span-3 min-w-0 pr-2">
                            <div className="text-[var(--foreground)] truncate font-medium">
                              {item.custodian}
                            </div>
                            <div className="text-[11px] text-[var(--foreground-muted)] truncate">
                              {item.location.split("•")[0]}
                            </div>
                          </div>

                          <div className="hidden sm:block sm:col-span-3">
                            <div className="font-bold text-[var(--foreground)]">
                              {item.bookValue}
                            </div>
                            <div className="text-[10px] text-[var(--foreground-subtle)]">
                              Original: {item.cost}
                            </div>
                          </div>

                          <div className="col-span-3 sm:col-span-2 text-right">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border border-[var(--brand-emerald)]/20">
                              {item.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Selected Asset Telemetry Drawer Card */}
                  {filteredRegistry[selectedRegistryIndex] && (
                    <div className="p-3.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] grid sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-[var(--foreground-subtle)]">
                          Warranty Expiration
                        </span>
                        <div className="font-bold text-[var(--foreground)] mt-0.5">
                          {filteredRegistry[selectedRegistryIndex].warranty}
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-[var(--foreground-subtle)]">
                          Audit Classification
                        </span>
                        <div className="font-bold text-[var(--brand-primary)] mt-0.5">
                          Tier 1 Capital Asset
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-[var(--foreground-subtle)]">
                          Compliance Hash
                        </span>
                        <div className="font-mono text-[11px] text-[var(--foreground-muted)] mt-0.5">
                          0x8F92...B31A
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────────
                  MODULE 02: IT ASSET TRACKING (FLEET & MDM CUSTODY)
                 ───────────────────────────────────────────────────────────── */}
              {activeStep === 1 && (
                <div className="space-y-4 animate-in fade-in-0 duration-150">
                  {/* Custodian Selectors */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                    {custodians.map((c, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedCustodianIdx(idx)}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer select-none shrink-0 flex items-center gap-2",
                          selectedCustodianIdx === idx
                            ? "bg-[var(--brand-primary-light)] text-[var(--brand-primary)] border-[var(--brand-primary)]/40 shadow-xs"
                            : "bg-[var(--surface)] text-[var(--foreground-muted)] border-[var(--border-custom)] hover:bg-white"
                        )}
                      >
                        <UserCheck className="h-3.5 w-3.5" />
                        <span>{c.name} ({c.dept})</span>
                      </button>
                    ))}
                  </div>

                  {/* Custodian IT Card */}
                  <div className="p-4 rounded-lg bg-[var(--surface)] border border-[var(--border-custom)] space-y-3.5">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-bold text-[var(--foreground-subtle)] font-mono">
                          SERIAL: {custodians[selectedCustodianIdx].serial}
                        </span>
                        <h4 className="text-base font-bold text-[var(--foreground)] mt-0.5">
                          {custodians[selectedCustodianIdx].device}
                        </h4>
                        <p className="text-xs text-[var(--foreground-muted)]">
                          Assigned to {custodians[selectedCustodianIdx].name} &bull; {custodians[selectedCustodianIdx].role}
                        </p>
                      </div>
                      <span className="px-2 py-1 rounded text-xs font-bold bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border border-[var(--brand-emerald)]/20">
                        {custodians[selectedCustodianIdx].mdmStatus}
                      </span>
                    </div>

                    {/* Security & MDM Status Indicators */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      <div className="p-2.5 rounded-md bg-white border border-[var(--border-custom)]">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[var(--foreground-subtle)]">
                          <Lock className="h-3 w-3 text-[var(--brand-emerald)]" />
                          <span>Disk Encryption</span>
                        </div>
                        <div className="text-xs font-bold text-[var(--foreground)] mt-0.5">
                          {custodians[selectedCustodianIdx].encryption}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-md bg-white border border-[var(--border-custom)]">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[var(--foreground-subtle)]">
                          <CheckCircle2 className="h-3 w-3 text-[var(--brand-primary)]" />
                          <span>OS Patch Posture</span>
                        </div>
                        <div className="text-xs font-bold text-[var(--foreground)] mt-0.5">
                          {custodians[selectedCustodianIdx].osPatch}
                        </div>
                      </div>

                      <div className="col-span-2 sm:col-span-1 p-2.5 rounded-md bg-white border border-[var(--border-custom)]">
                        <div className="text-[10px] font-bold uppercase text-[var(--foreground-subtle)]">
                          Handover Signature
                        </div>
                        <div className="text-xs font-bold text-[var(--brand-emerald)] mt-0.5 flex items-center gap-1">
                          <Check className="h-3.5 w-3.5" />
                          Verified on File
                        </div>
                      </div>
                    </div>

                    {/* Active Software Licenses */}
                    <div className="pt-2 border-t border-[var(--border-subtle)]">
                      <div className="text-[10px] font-bold uppercase text-[var(--foreground-subtle)] mb-1.5">
                        Active Software License Entitlements
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {custodians[selectedCustodianIdx].licenses.map((lic, lIdx) => (
                          <span
                            key={lIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-medium bg-white text-[var(--foreground)] border border-[var(--border-custom)]"
                          >
                            {lic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────────
                  MODULE 03: MOBILE ASSET TRACKING (SCANNER HUD)
                 ───────────────────────────────────────────────────────────── */}
              {activeStep === 2 && (
                <div className="space-y-4 animate-in fade-in-0 duration-150">
                  {/* Mode Selector */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 bg-[var(--surface)] p-1 rounded-lg border border-[var(--border-custom)]">
                      {(
                        [
                          { id: "qr", label: "2D QR Code" },
                          { id: "barcode", label: "Code 128" },
                          { id: "rfid", label: "UHF RFID Tag" },
                        ] as const
                      ).map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setScanMode(m.id)}
                          className={cn(
                            "px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer select-none",
                            scanMode === m.id
                              ? "bg-white text-[var(--brand-primary)] shadow-2xs border border-[var(--border-custom)]"
                              : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                          )}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>

                    <span className="text-xs font-mono text-[var(--brand-emerald)] font-bold">
                      {scannedCount} Total Scanned
                    </span>
                  </div>

                  {/* Scanner HUD Viewfinder */}
                  <div className="relative rounded-lg bg-slate-950 p-6 text-white text-center overflow-hidden border border-slate-800">
                    {isScanningActive && (
                      <div className="absolute left-0 right-0 h-0.5 bg-cyan-400 scanner-laser shadow-[0_0_12px_#38bdf8] z-20" />
                    )}

                    <div className="relative z-10 my-2 mx-auto w-44 h-28 border-2 border-dashed border-cyan-400/80 rounded-lg flex flex-col items-center justify-center p-2 bg-slate-900/50">
                      <QrCode className="h-10 w-10 text-cyan-400 mb-1" />
                      <span className="text-[11px] font-mono text-cyan-300">
                        {isScanningActive ? "DECODING TAG..." : `AM-SCAN-TAG-#0${scannedCount}`}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 px-2 pt-2 border-t border-slate-800">
                      <span>Latency: &lt; 85ms</span>
                      <span>Offline Buffer: 148 Recs</span>
                      <span className="text-emerald-400 font-bold">GPS Geotagged</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="text-xs text-[var(--foreground-muted)]">
                      Instant capture with auto-upload when reconnected to network.
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleSimulateScan}
                      className="text-xs"
                    >
                      <RefreshCw className={cn("h-3.5 w-3.5", isScanningActive && "animate-spin")} />
                      <span>Trigger Test Scan</span>
                    </Button>
                  </div>
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────────
                  MODULE 04: INSPECTION MANAGEMENT (DIGITAL PROTOCOLS)
                 ───────────────────────────────────────────────────────────── */}
              {activeStep === 3 && (
                <div className="space-y-3.5 animate-in fade-in-0 duration-150">
                  <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                    <div>
                      <span className="text-xs font-bold text-[var(--foreground)]">
                        OSHA & ISO 55001 Digital Protocol #8491
                      </span>
                      <p className="text-[11px] text-[var(--foreground-muted)]">
                        Asset: CAT 320 Hydraulic Excavator (AM-EQ-90142)
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[var(--brand-emerald)]">
                      {inspectionItems.filter((c) => c.passed).length}/{inspectionItems.length} Checklist Passed
                    </span>
                  </div>

                  <div className="space-y-2">
                    {inspectionItems.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => toggleInspection(item.id)}
                        className={cn(
                          "flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer transition-all select-none",
                          item.passed
                            ? "bg-[var(--brand-emerald-light)]/50 border-[var(--brand-emerald)]/30 text-[var(--foreground)]"
                            : "bg-rose-50/70 border-rose-200 text-rose-800"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          {item.passed ? (
                            <CheckCircle2 className="h-4 w-4 text-[var(--brand-emerald)] shrink-0" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-rose-500 shrink-0" />
                          )}
                          <span className="font-semibold">{item.text}</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider font-mono">
                          {item.passed ? "Pass" : "Flag Defect"}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-[var(--brand-emerald)] font-bold">
                      <Sparkles className="h-3.5 w-3.5" />
                      UrsaAI Inspection Auto-Grader: 98% Compliance Score
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      GPS: 32.7767° N, 96.7970° W
                    </span>
                  </div>
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────────
                  MODULE 05: ASSET LIFECYCLE & DEPRECIATION
                 ───────────────────────────────────────────────────────────── */}
              {activeStep === 4 && (
                <div className="space-y-4 animate-in fade-in-0 duration-150">
                  {/* Method Toggle */}
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold text-[var(--foreground)]">
                      Depreciation Engine & Cost Schedule
                    </div>
                    <div className="flex items-center gap-1 bg-[var(--surface)] p-1 rounded-lg border border-[var(--border-custom)]">
                      <button
                        type="button"
                        onClick={() => setDeprecMethod("sln")}
                        className={cn(
                          "px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer select-none",
                          deprecMethod === "sln"
                            ? "bg-white text-[var(--brand-primary)] shadow-2xs border border-[var(--border-custom)]"
                            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                        )}
                      >
                        Straight-Line (SLN)
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeprecMethod("macrs")}
                        className={cn(
                          "px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer select-none",
                          deprecMethod === "macrs"
                            ? "bg-white text-[var(--brand-primary)] shadow-2xs border border-[var(--border-custom)]"
                            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                        )}
                      >
                        MACRS 7-Year
                      </button>
                    </div>
                  </div>

                  {/* 4-Stage Lifecycle Stepper */}
                  <div className="p-3.5 rounded-lg bg-[var(--surface)] border border-[var(--border-custom)]">
                    <div className="text-[10px] font-bold uppercase text-[var(--foreground-subtle)] mb-3">
                      Lifecycle Progression (Stage 3 of 4 Active)
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                      <div className="p-2 rounded-md bg-white border border-[var(--brand-emerald)]/30 text-[var(--brand-emerald)] font-bold">
                        1. Procurement (2023)
                      </div>
                      <div className="p-2 rounded-md bg-white border border-[var(--brand-emerald)]/30 text-[var(--brand-emerald)] font-bold">
                        2. Deployment
                      </div>
                      <div className="p-2 rounded-md bg-[var(--brand-primary-light)] border border-[var(--brand-primary)]/40 text-[var(--brand-primary)] font-bold">
                        3. Active Service
                      </div>
                      <div className="p-2 rounded-md bg-white border border-[var(--border-custom)] text-[var(--foreground-subtle)]">
                        4. Salvage (2030)
                      </div>
                    </div>
                  </div>

                  {/* Financial Breakdown Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-lg bg-white border border-[var(--border-custom)]">
                      <div className="text-[10px] font-bold uppercase text-[var(--foreground-subtle)]">
                        Original Acquisition
                      </div>
                      <div className="text-base font-bold text-[var(--foreground)] mt-0.5">
                        $185,000.00
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-white border border-[var(--border-custom)]">
                      <div className="text-[10px] font-bold uppercase text-[var(--foreground-subtle)]">
                        Accumulated Deprec.
                      </div>
                      <div className="text-base font-bold text-rose-600 mt-0.5">
                        {deprecMethod === "sln" ? "-$52,800.00" : "-$78,200.00"}
                      </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1 p-3 rounded-lg bg-white border border-[var(--border-custom)]">
                      <div className="text-[10px] font-bold uppercase text-[var(--foreground-subtle)]">
                        Current Residual Value
                      </div>
                      <div className="text-base font-bold text-[var(--brand-primary)] mt-0.5">
                        {deprecMethod === "sln" ? "$132,200.00" : "$106,800.00"}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────────
                  MODULE 06: ASSET REPORTING & COMPLIANCE
                 ───────────────────────────────────────────────────────────── */}
              {activeStep === 5 && (
                <div className="space-y-4 animate-in fade-in-0 duration-150">
                  {/* Reconciliation Banner */}
                  <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-emerald-900">
                        100% Audit-Ready Reconciliation Status
                      </span>
                      <p className="text-xs text-emerald-700 mt-0.5">
                        12,490 Verified Units &bull; 0 Ghost Assets &bull; Zero Reconcile Variance
                      </p>
                    </div>
                    <span className="text-base font-mono font-extrabold text-emerald-800">
                      100%
                    </span>
                  </div>

                  {/* Export Options */}
                  <div className="grid sm:grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleTriggerExport("Executive PDF")}
                      className="p-3 rounded-lg border border-[var(--border-custom)] bg-white hover:border-[var(--brand-primary)] text-left transition-all cursor-pointer select-none"
                    >
                      <FileText className="h-4 w-4 text-[var(--brand-primary)] mb-1" />
                      <div className="text-xs font-bold text-[var(--foreground)]">
                        Executive PDF Pack
                      </div>
                      <div className="text-[10px] text-[var(--foreground-subtle)]">
                        Board & CPA Ready
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleTriggerExport("CSV Reconciled Data")}
                      className="p-3 rounded-lg border border-[var(--border-custom)] bg-white hover:border-[var(--brand-primary)] text-left transition-all cursor-pointer select-none"
                    >
                      <Download className="h-4 w-4 text-[var(--brand-primary)] mb-1" />
                      <div className="text-xs font-bold text-[var(--foreground)]">
                        Full CSV Data Dump
                      </div>
                      <div className="text-[10px] text-[var(--foreground-subtle)]">
                        ERP & SAP Importer
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleTriggerExport("Secure Auditor Token")}
                      className="p-3 rounded-lg border border-[var(--border-custom)] bg-white hover:border-[var(--brand-primary)] text-left transition-all cursor-pointer select-none"
                    >
                      <Lock className="h-4 w-4 text-[var(--brand-primary)] mb-1" />
                      <div className="text-xs font-bold text-[var(--foreground)]">
                        Auditor Share Token
                      </div>
                      <div className="text-[10px] text-[var(--foreground-subtle)]">
                        Read-Only Secure Link
                      </div>
                    </button>
                  </div>

                  {exportNotice && (
                    <div className="p-2.5 rounded-md bg-[var(--brand-emerald-light)] border border-[var(--brand-emerald)]/30 text-xs font-bold text-[var(--brand-emerald)] text-center animate-in fade-in-0 duration-150">
                      {exportNotice}
                    </div>
                  )}
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────────
                  MODULE 07: URSAAI INTELLIGENCE COPILOT
                 ───────────────────────────────────────────────────────────── */}
              {activeStep === 6 && (
                <div className="space-y-3.5 animate-in fade-in-0 duration-150">
                  {/* Prompt Suggestions */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase text-[var(--foreground-subtle)]">
                      Suggested Natural Language Prompts
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {aiPrompts.map((p, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => handleSelectAiPrompt(p)}
                          className={cn(
                            "px-2.5 py-1 rounded-md text-xs font-semibold border transition-all cursor-pointer select-none text-left",
                            aiQuery === p.q
                              ? "bg-[var(--brand-primary-light)] text-[var(--brand-primary)] border-[var(--brand-primary)]/40"
                              : "bg-[var(--surface)] text-[var(--foreground-muted)] border-[var(--border-custom)] hover:bg-white"
                          )}
                        >
                          "{p.q}"
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* AI Response Card */}
                  <div className="p-4 rounded-lg bg-[var(--surface)] border border-[var(--border-custom)] space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--brand-primary)]">
                        <Sparkles className="h-4 w-4" />
                        <span>{aiResponse.title}</span>
                      </div>
                      <span className="text-[11px] font-mono text-[var(--brand-emerald)] font-bold">
                        Confidence: {aiResponse.confidence}
                      </span>
                    </div>

                    <p className="text-xs text-[var(--foreground)] leading-relaxed">
                      {aiResponse.summary}
                    </p>

                    <div className="p-2.5 rounded-md bg-white border border-[var(--border-subtle)] text-xs text-[var(--foreground-muted)]">
                      <strong className="text-[var(--foreground)]">Recommended Action: </strong>
                      {aiResponse.recommendation}
                    </div>
                  </div>
                </div>
              )}

              {/* Studio Canvas Bottom Action Footer */}
              <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-[var(--foreground-muted)]">
                  <ShieldCheck className="h-4 w-4 text-[var(--brand-emerald)]" />
                  <span>SOC 2 Type II certified &bull; Real-time cryptographic ledger</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={onBookDemo}
                    className="w-full sm:w-auto text-xs"
                  >
                    <span>Schedule Custom Walkthrough</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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

export default SystemOfRecord;
