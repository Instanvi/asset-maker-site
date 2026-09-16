"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import {
  Box,
  QrCode,
  Smartphone,
  Cloud,
  Database,
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  FileCheck,
  TrendingUp,
  Layers,
  Lock,
  Globe,
  RefreshCw,
  AlertTriangle,
  Bell,
  MapPin,
  Camera,
  Scan,
  ClipboardCheck,
  BarChart3,
  Settings,
  Workflow,
  ChevronRight,
  CheckCircle,
  Circle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import BookDemoModal from "@/components/home/BookDemoModal";

export default function HowItWorksPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  // ═══════════════════════════════════════════════════════════════════════
  //  PHASE 1: SETUP & TAG GENERATION (< 15 Minutes)
  // ═══════════════════════════════════════════════════════════════════════
  const setupSteps = [
    {
      number: "1",
      title: "Import Your Asset List",
      description:
        "Drag & drop a CSV/Excel file, sync from your ERP (SAP, NetSuite, Intune), or manually add assets one by one. Asset Master instantly creates your master registry with all financial metadata.",
      icon: <Database className="h-5 w-5" />,
      time: "2-5 minutes",
      features: [
        "Bulk CSV upload with validation",
        "Direct ERP API integration",
        "Manual entry with autocomplete",
        "Duplicate detection & merging",
      ],
    },
    {
      number: "2",
      title: "Generate QR / Barcode Tags",
      description:
        "Click one button to print weatherproof asset labels (QR codes, Code 128 barcodes, or RFID tags). Each tag is cryptographically linked to your asset record with tamper-evident verification.",
      icon: <QrCode className="h-5 w-5" />,
      time: "5-10 minutes",
      features: [
        "Print on any label printer (Dymo, Brother, Zebra)",
        "UV-resistant & waterproof materials",
        "Serialized unique identifiers",
        "Embedded blockchain hash for authenticity",
      ],
    },
    {
      number: "3",
      title: "Affix Tags to Physical Assets",
      description:
        "Stick or mount the printed labels directly on your laptops, excavators, medical equipment, or tools. The tag becomes the permanent identity that connects the physical object to its digital twin.",
      icon: <Box className="h-5 w-5" />,
      time: "5-10 minutes",
      features: [
        "Adhesive labels for IT hardware",
        "Metal rivets for heavy machinery",
        "Embedded RFID for mobile equipment",
        "Photo capture during tagging for verification",
      ],
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════
  //  PHASE 2: DAILY USAGE & FIELD OPERATIONS
  // ═══════════════════════════════════════════════════════════════════════
  const usageWorkflows = [
    {
      id: "checkout",
      title: "Quick Check-Out & Custody Transfer",
      description:
        "Scan the asset tag with any smartphone or barcode scanner. Asset Master instantly logs the custodian change, GPS location, timestamp, and prompts for an e-signature confirmation. Zero paperwork.",
      icon: <Users className="h-5 w-5" />,
      color: "emerald",
      steps: [
        "Employee scans QR code with phone",
        "System verifies asset availability",
        "Custodian signs digitally on screen",
        "Audit trail updated in real-time",
      ],
    },
    {
      id: "inspection",
      title: "Mobile Field Inspections",
      description:
        "Technicians use the Asset Master mobile app to run digital checklists (OSHA, ISO 55001, custom protocols). Failed checks instantly flag defects, trigger work orders, and lock the asset from checkout until repaired.",
      icon: <ClipboardCheck className="h-5 w-5" />,
      color: "primary",
      steps: [
        "Scan asset to load inspection template",
        "Complete checklist with photo evidence",
        "System auto-scores compliance grade",
        "Defect alerts sent to maintenance team",
      ],
    },
    {
      id: "location",
      title: "Real-Time GPS Location Tracking",
      description:
        "Every scan captures the GPS coordinates. See where your excavators, trucks, or portable generators are located on a live map. Set geofence alerts to prevent unauthorized movement outside designated jobsites or campuses.",
      icon: <MapPin className="h-5 w-5" />,
      color: "cyan",
      steps: [
        "Automatic GPS tagging on every scan",
        "Historical movement trail visualization",
        "Geofence boundary alerts",
        "Last-known location always visible",
      ],
    },
    {
      id: "maintenance",
      title: "Automated Maintenance Scheduling",
      description:
        "Asset Master tracks service intervals, warranty expiration, and preventative maintenance due dates. The system auto-creates work orders in your CMMS (or its built-in work order module) and emails technicians 30 days before due dates.",
      icon: <Settings className="h-5 w-5" />,
      color: "amber",
      steps: [
        "Set maintenance intervals (days/hours/cycles)",
        "System monitors usage & triggers alerts",
        "Auto-create Jira/ServiceNow tickets",
        "Technician receives push notification",
      ],
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════
  //  PHASE 3: BACKEND INTELLIGENCE & AUTOMATION
  // ═══════════════════════════════════════════════════════════════════════
  const intelligenceFeatures = [
    {
      id: "depreciation",
      title: "Automated Financial Depreciation",
      description:
        "Asset Master calculates straight-line (SLN) and MACRS depreciation schedules in real-time. Every asset shows its current book value, accumulated depreciation, and salvage forecast. Export GL entries directly to your ERP.",
      icon: <TrendingUp className="h-6 w-6" />,
      benefits: [
        "Real-time book value calculations",
        "GAAP & IFRS compliant methods",
        "Automated journal entry generation",
        "Quarterly reconciliation reports",
      ],
    },
    {
      id: "compliance",
      title: "Tamper-Proof Audit Trail",
      description:
        "Every checkout, return, inspection, and status change is cryptographically signed and timestamped. Asset Master creates an immutable blockchain-style ledger that auditors can verify without trusting you.",
      icon: <Shield className="h-6 w-6" />,
      benefits: [
        "SHA-256 hashed transaction records",
        "Immutable append-only log",
        "Time-series forensic investigation",
        "One-click auditor access tokens",
      ],
    },
    {
      id: "integrations",
      title: "Enterprise Integrations & APIs",
      description:
        "Connect Asset Master to Microsoft Intune, Jamf Pro, SAP S/4HANA, NetSuite, Jira, ServiceNow, and 500+ apps via Zapier. Two-way sync keeps your asset data consistent across all systems without duplicate entry.",
      icon: <Workflow className="h-6 w-6" />,
      benefits: [
        "REST API with OAuth 2.0 security",
        "Webhook triggers for automation",
        "Pre-built connectors for ERP/MDM",
        "Custom integration via API docs",
      ],
    },
    {
      id: "analytics",
      title: "Predictive Analytics & Reporting",
      description:
        "Asset Master's AI engine predicts maintenance failures, identifies ghost assets, and forecasts replacement budgets. One-click reports show utilization rates, TCO analysis, and compliance dashboards for executives.",
      icon: <BarChart3 className="h-6 w-6" />,
      benefits: [
        "ML-powered failure prediction",
        "Underutilized asset detection",
        "Total cost of ownership (TCO) analysis",
        "Executive dashboard with KPIs",
      ],
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════
  //  PHASES NAVIGATION
  // ═══════════════════════════════════════════════════════════════════════
  const phases = [
    {
      id: 0,
      label: "Phase 1: Setup",
      tagline: "< 15 Minutes",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      id: 1,
      label: "Phase 2: Daily Operations",
      tagline: "Real-Time Tracking",
      icon: <Smartphone className="h-4 w-4" />,
    },
    {
      id: 2,
      label: "Phase 3: Intelligence",
      tagline: "Automation & Insights",
      icon: <Cloud className="h-4 w-4" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[var(--foreground)]">
      <Header onBookDemo={handleOpenDemoModal} />

      <main className="flex-1">
        <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden hero-gradient-canvas border-b border-[var(--border-subtle)]">
          <div className="hero-mesh-glow" />
          <div className="hero-grid-pattern" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--brand-primary)]">
                End-to-End Operational Blueprint
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                How Asset Master{" "}
                <span className="text-[var(--brand-primary)]">
                  Actually Works
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-3xl mx-auto leading-relaxed">
                From physical tag generation to real-time custody transfers to automated compliance reporting - here's the complete workflow that eliminates spreadsheets, ghost assets, and audit headaches.
              </p>

              {/* Quick Stats Bar */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="p-3 rounded-lg bg-white border border-[var(--border-custom)] text-center">
                  <div className="text-2xl font-extrabold text-[var(--brand-primary)]">
                    &lt; 15 min
                  </div>
                  <div className="text-xs font-medium text-[var(--foreground-muted)] mt-1">
                    Initial Setup Time
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[var(--border-custom)] text-center">
                  <div className="text-2xl font-extrabold text-[var(--brand-primary)]">
                    Zero
                  </div>
                  <div className="text-xs font-medium text-[var(--foreground-muted)] mt-1">
                    Spreadsheets Required
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[var(--border-custom)] text-center">
                  <div className="text-2xl font-extrabold text-[var(--brand-primary)]">
                    100%
                  </div>
                  <div className="text-xs font-medium text-[var(--foreground-muted)] mt-1">
                    Audit-Ready Records
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[var(--border-custom)] text-center">
                  <div className="text-2xl font-extrabold text-[var(--brand-primary)]">
                    Real-Time
                  </div>
                  <div className="text-xs font-medium text-[var(--foreground-muted)] mt-1">
                    Custody Tracking
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Button
                  variant="primary"
                  size="xl"
                  href="/demo"
                  className="w-full sm:w-auto text-base shadow-[var(--shadow-glow)]"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="dark"
                  size="xl"
                  href="/demo"
                  className="w-full sm:w-auto text-base"
                >
                  <span>Try It Free - No Credit Card</span>
                </Button>
              </div>
            </div>
          </div>
        </section>


        <section className="sticky top-[var(--header-height,72px)] z-40 bg-white/95 backdrop-blur-md border-b border-[var(--border-custom)] py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {phases.map((phase) => (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActivePhaseIndex(phase.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all border cursor-pointer select-none shrink-0",
                    activePhaseIndex === phase.id
                      ? "bg-[var(--brand-primary-light)] text-[var(--brand-primary)] border-[var(--brand-primary)]/40 shadow-xs"
                      : "bg-white text-[var(--foreground-muted)] border-[var(--border-custom)] hover:bg-[var(--surface)]"
                  )}
                >
                  <span className={cn("scale-90", activePhaseIndex === phase.id && "text-[var(--brand-primary)]")}>
                    {phase.icon}
                  </span>
                  <div className="text-left">
                    <div className="text-xs leading-tight">{phase.label}</div>
                    <div className="text-[10px] text-[var(--foreground-subtle)] font-normal">
                      {phase.tagline}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════
            PHASE 1: SETUP & TAG GENERATION
           ═════════════════════════════════════════════════════════════════ */}
        {activePhaseIndex === 0 && (
          <section className="py-20 lg:py-28 bg-[var(--surface)] animate-in fade-in-0 duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-primary-light)] text-[var(--brand-primary)] text-xs font-bold mb-4">
                  <Zap className="h-3.5 w-3.5" />
                  <span>Phase 1: Initial Setup</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
                  Get Operational in{" "}
                  <span className="text-[var(--brand-primary)]">Under 15 Minutes</span>
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
                  No software installation, no IT department delays, no complex training. Just three simple steps to tag every asset in your organization.
                </p>
              </div>

              {/* Setup Steps Visual Timeline */}
              <div className="space-y-8 relative">
                {/* Vertical Progress Line */}
                <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-[var(--border-custom)] hidden lg:block" />

                {setupSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative bg-white rounded-xl border border-[var(--border-custom)] p-6 lg:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-shadow"
                  >
                    {/* Progress Circle Icon */}
                    <div className="absolute -left-4 top-8 hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-[var(--brand-primary)] text-white font-bold text-sm border-4 border-white shadow-md z-10">
                      {step.number}
                    </div>

                    <div className="grid lg:grid-cols-12 gap-6 items-start">
                      {/* Left Column: Icon & Title */}
                      <div className="lg:col-span-4">
                        <div className="flex items-start gap-3 lg:gap-4">
                          <div className="p-3 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                            {step.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-mono font-bold text-[var(--brand-primary)]">
                                STEP {step.number}
                              </span>
                              <span className="text-xs font-bold text-[var(--foreground-subtle)]">•</span>
                              <span className="text-xs font-bold text-[var(--brand-emerald)]">
                                {step.time}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-[var(--foreground)] tracking-tight">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Description & Features */}
                      <div className="lg:col-span-8 space-y-4">
                        <p className="text-base text-[var(--foreground-muted)] leading-relaxed">
                          {step.description}
                        </p>

                        {/* Feature Checklist */}
                        <div className="grid sm:grid-cols-2 gap-2">
                          {step.features.map((feature, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-start gap-2 p-2 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] text-sm"
                            >
                              <CheckCircle className="h-4 w-4 text-[var(--brand-emerald)] shrink-0 mt-0.5" />
                              <span className="text-[var(--foreground)]">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Post-Setup Confidence Badge */}
              <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 text-center">
                <div className="flex items-center justify-center gap-2 text-emerald-800 mb-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-lg font-bold">You're Now Asset-Tracking Ready!</span>
                </div>
                <p className="text-sm text-emerald-700">
                  Your master asset registry is created, tags are generated, and your team can start scanning immediately. Zero training required.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ═════════════════════════════════════════════════════════════════
            PHASE 2: DAILY USAGE & FIELD OPERATIONS
           ═════════════════════════════════════════════════════════════════ */}
        {activePhaseIndex === 1 && (
          <section className="py-20 lg:py-28 bg-white animate-in fade-in-0 duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-primary-light)] text-[var(--brand-primary)] text-xs font-bold mb-4">
                  <Smartphone className="h-3.5 w-3.5" />
                  <span>Phase 2: Daily Field Operations</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
                  Real-Time Tracking{" "}
                  <span className="text-[var(--brand-primary)]">That Actually Works</span>
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
                  Every scan, checkout, and inspection is logged instantly. No manual data entry. No spreadsheet updates. Just scan the QR code and Asset Master does the rest.
                </p>
              </div>

              {/* Workflow Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {usageWorkflows.map((workflow) => (
                  <div
                    key={workflow.id}
                    className="group relative bg-white rounded-xl border border-[var(--border-custom)] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all"
                  >
                    {/* Workflow Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={cn(
                          "p-3 rounded-lg shrink-0",
                          workflow.color === "emerald" && "bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)]",
                          workflow.color === "primary" && "bg-[var(--brand-primary-light)] text-[var(--brand-primary)]",
                          workflow.color === "cyan" && "bg-cyan-50 text-cyan-600",
                          workflow.color === "amber" && "bg-amber-50 text-amber-600"
                        )}
                      >
                        {workflow.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">
                          {workflow.title}
                        </h3>
                        <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                          {workflow.description}
                        </p>
                      </div>
                    </div>

                    {/* Step-by-Step Flow */}
                    <div className="space-y-2 pt-4 border-t border-[var(--border-subtle)]">
                      <div className="text-xs font-bold uppercase tracking-wider text-[var(--foreground-subtle)] mb-2">
                        Automated Workflow
                      </div>
                      {workflow.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-sm">
                          <span className="text-xs font-mono font-bold text-[var(--brand-primary)] shrink-0 mt-0.5">
                            {sIdx + 1}.
                          </span>
                          <span className="text-[var(--foreground-muted)]">{step}</span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Demo CTA */}
                    <Button
                      variant="outline"
                      size="lg"
                      href="/demo"
                      className="mt-4 w-full"
                    >
                      <ArrowRight className="h-4 w-4" />
                      <span>See This Workflow in Action</span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═════════════════════════════════════════════════════════════════
            PHASE 3: BACKEND INTELLIGENCE & AUTOMATION
           ═════════════════════════════════════════════════════════════════ */}
        {activePhaseIndex === 2 && (
          <section className="py-20 lg:py-28 bg-[var(--surface)] animate-in fade-in-0 duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-primary-light)] text-[var(--brand-primary)] text-xs font-bold mb-4">
                  <Cloud className="h-3.5 w-3.5" />
                  <span>Phase 3: Intelligence & Automation</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
                  The System That{" "}
                  <span className="text-[var(--brand-primary)]">Thinks For You</span>
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
                  Asset Master runs 24/7 in the background, calculating depreciation, predicting failures, generating compliance reports, and syncing with your enterprise systems - without human intervention.
                </p>
              </div>

              {/* Intelligence Feature Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {intelligenceFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-white rounded-xl border border-[var(--border-custom)] overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-shadow"
                  >
                    {/* Card Header with Icon */}
                    <div className="p-6 bg-gradient-to-br from-[var(--surface)] to-white border-b border-[var(--border-subtle)]">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card Body with Benefits */}
                    <div className="p-6 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-[var(--foreground-subtle)]">
                        Key Benefits
                      </div>
                      {feature.benefits.map((benefit, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-3 p-3 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)]"
                        >
                          <CheckCircle2 className="h-5 w-5 text-[var(--brand-emerald)] shrink-0 mt-0.5" />
                          <span className="text-sm text-[var(--foreground)]">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Automation Highlight Box */}
              <div className="mt-12 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-primary)] rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--brand-emerald)] rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold mb-4">
                      <RefreshCw className="h-3 w-3" />
                      <span>Zero-Touch Operations</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3">
                      Set It Once. It Runs Forever.
                    </h3>
                    <p className="text-base text-slate-300 leading-relaxed mb-6">
                      Asset Master doesn't need daily management. Configure your workflows once, and the system handles depreciation calculations, warranty alerts, work order creation, ERP synchronization, and audit reports - automatically.
                    </p>

                    <Button
                      variant="primary"
                      size="lg"
                      href="/demo"
                      className="w-full md:w-auto"
                    >
                      <span>Schedule Automation Demo</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Nightly depreciation batch processing",
                      "Warranty expiration email alerts (30/60/90 days)",
                      "Automated Jira/ServiceNow ticket creation",
                      "Real-time ERP GL entry synchronization",
                      "Monthly compliance report generation",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                      >
                        <CheckCircle className="h-5 w-5 text-[var(--brand-emerald)] shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ═════════════════════════════════════════════════════════════════
            FINAL CTA: SUMMARY & CONVERSION
           ═════════════════════════════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-white border-t border-[var(--border-custom)]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
                That's How{" "}
                <span className="text-[var(--brand-primary)]">Asset Master Works.</span>
              </h2>
              <p className="mt-4 text-lg text-[var(--foreground-muted)] leading-relaxed max-w-3xl mx-auto">
                From tag generation to real-time tracking to automated compliance - the complete system that eliminates manual asset management forever.
              </p>
            </div>

            {/* Three Pillars Summary */}
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border-custom)] text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brand-primary-light)] text-[var(--brand-primary)] mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <div className="text-lg font-bold text-[var(--foreground)] mb-2">
                  Setup in Minutes
                </div>
                <p className="text-sm text-[var(--foreground-muted)]">
                  Import assets, print tags, and start tracking - all in under 15 minutes.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border-custom)] text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] mb-4">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div className="text-lg font-bold text-[var(--foreground)] mb-2">
                  Real-Time Field Ops
                </div>
                <p className="text-sm text-[var(--foreground-muted)]">
                  Scan QR codes with any phone. Instant custody transfers and inspections.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border-custom)] text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-50 text-cyan-600 mb-4">
                  <Cloud className="h-6 w-6" />
                </div>
                <div className="text-lg font-bold text-[var(--foreground)] mb-2">
                  Auto-Pilot Intelligence
                </div>
                <p className="text-sm text-[var(--foreground-muted)]">
                  Depreciation, alerts, reports, and ERP sync - all automated 24/7.
                </p>
              </div>
            </div>

            {/* Final CTA Buttons */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="xl"
                href="/demo"
                className="w-full sm:w-auto text-lg shadow-[var(--shadow-glow)]"
              >
                <span>Book a Live Walkthrough</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="dark"
                size="xl"
                href="/demo"
                className="w-full sm:w-auto text-lg"
              >
                <span>Start Free Trial - No Credit Card</span>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--foreground-muted)] font-medium">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[var(--brand-emerald)]" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                <span>ISO 27001 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--brand-primary)]" />
                <span>99.99% Uptime SLA</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <BookDemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
    </div>
  );
}
