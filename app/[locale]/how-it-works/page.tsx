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
import { useTranslations } from "next-intl";

export default function HowItWorksPage() {
  const t = useTranslations();
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
      title: t("howItWorks.setup.steps.step1.title"),
      description: t("howItWorks.setup.steps.step1.description"),
      icon: <Database className="h-5 w-5" />,
      time: t("howItWorks.setup.steps.step1.time"),
      features: [
        t("howItWorks.setup.steps.step1.features.bulkUpload"),
        t("howItWorks.setup.steps.step1.features.erpIntegration"),
        t("howItWorks.setup.steps.step1.features.manualEntry"),
        t("howItWorks.setup.steps.step1.features.duplicateDetection"),
      ],
    },
    {
      number: "2",
      title: t("howItWorks.setup.steps.step2.title"),
      description: t("howItWorks.setup.steps.step2.description"),
      icon: <QrCode className="h-5 w-5" />,
      time: t("howItWorks.setup.steps.step2.time"),
      features: [
        t("howItWorks.setup.steps.step2.features.printerSupport"),
        t("howItWorks.setup.steps.step2.features.durability"),
        t("howItWorks.setup.steps.step2.features.serialization"),
        t("howItWorks.setup.steps.step2.features.blockchain"),
      ],
    },
    {
      number: "3",
      title: t("howItWorks.setup.steps.step3.title"),
      description: t("howItWorks.setup.steps.step3.description"),
      icon: <Box className="h-5 w-5" />,
      time: t("howItWorks.setup.steps.step3.time"),
      features: [
        t("howItWorks.setup.steps.step3.features.adhesiveLabels"),
        t("howItWorks.setup.steps.step3.features.metalRivets"),
        t("howItWorks.setup.steps.step3.features.embeddedRfid"),
        t("howItWorks.setup.steps.step3.features.photoCapture"),
      ],
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════
  //  PHASE 2: DAILY USAGE & FIELD OPERATIONS
  // ═══════════════════════════════════════════════════════════════════════
  const usageWorkflows = [
    {
      id: "checkout",
      title: t("howItWorks.usage.workflows.checkout.title"),
      description: t("howItWorks.usage.workflows.checkout.description"),
      icon: <Users className="h-5 w-5" />,
      color: "emerald",
      steps: [
        t("howItWorks.usage.workflows.checkout.steps.step1"),
        t("howItWorks.usage.workflows.checkout.steps.step2"),
        t("howItWorks.usage.workflows.checkout.steps.step3"),
        t("howItWorks.usage.workflows.checkout.steps.step4"),
      ],
    },
    {
      id: "inspection",
      title: t("howItWorks.usage.workflows.inspection.title"),
      description: t("howItWorks.usage.workflows.inspection.description"),
      icon: <ClipboardCheck className="h-5 w-5" />,
      color: "primary",
      steps: [
        t("howItWorks.usage.workflows.inspection.steps.step1"),
        t("howItWorks.usage.workflows.inspection.steps.step2"),
        t("howItWorks.usage.workflows.inspection.steps.step3"),
        t("howItWorks.usage.workflows.inspection.steps.step4"),
      ],
    },
    {
      id: "location",
      title: t("howItWorks.usage.workflows.location.title"),
      description: t("howItWorks.usage.workflows.location.description"),
      icon: <MapPin className="h-5 w-5" />,
      color: "cyan",
      steps: [
        t("howItWorks.usage.workflows.location.steps.step1"),
        t("howItWorks.usage.workflows.location.steps.step2"),
        t("howItWorks.usage.workflows.location.steps.step3"),
        t("howItWorks.usage.workflows.location.steps.step4"),
      ],
    },
    {
      id: "maintenance",
      title: t("howItWorks.usage.workflows.maintenance.title"),
      description: t("howItWorks.usage.workflows.maintenance.description"),
      icon: <Settings className="h-5 w-5" />,
      color: "amber",
      steps: [
        t("howItWorks.usage.workflows.maintenance.steps.step1"),
        t("howItWorks.usage.workflows.maintenance.steps.step2"),
        t("howItWorks.usage.workflows.maintenance.steps.step3"),
        t("howItWorks.usage.workflows.maintenance.steps.step4"),
      ],
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════
  //  PHASE 3: BACKEND INTELLIGENCE & AUTOMATION
  // ═══════════════════════════════════════════════════════════════════════
  const intelligenceFeatures = [
    {
      id: "depreciation",
      title: t("howItWorks.intelligence.features.depreciation.title"),
      description: t("howItWorks.intelligence.features.depreciation.description"),
      icon: <TrendingUp className="h-6 w-6" />,
      benefits: [
        t("howItWorks.intelligence.features.depreciation.benefits.benefit1"),
        t("howItWorks.intelligence.features.depreciation.benefits.benefit2"),
        t("howItWorks.intelligence.features.depreciation.benefits.benefit3"),
        t("howItWorks.intelligence.features.depreciation.benefits.benefit4"),
      ],
    },
    {
      id: "compliance",
      title: t("howItWorks.intelligence.features.compliance.title"),
      description: t("howItWorks.intelligence.features.compliance.description"),
      icon: <Shield className="h-6 w-6" />,
      benefits: [
        t("howItWorks.intelligence.features.compliance.benefits.benefit1"),
        t("howItWorks.intelligence.features.compliance.benefits.benefit2"),
        t("howItWorks.intelligence.features.compliance.benefits.benefit3"),
        t("howItWorks.intelligence.features.compliance.benefits.benefit4"),
      ],
    },
    {
      id: "integrations",
      title: t("howItWorks.intelligence.features.integrations.title"),
      description: t("howItWorks.intelligence.features.integrations.description"),
      icon: <Workflow className="h-6 w-6" />,
      benefits: [
        t("howItWorks.intelligence.features.integrations.benefits.benefit1"),
        t("howItWorks.intelligence.features.integrations.benefits.benefit2"),
        t("howItWorks.intelligence.features.integrations.benefits.benefit3"),
        t("howItWorks.intelligence.features.integrations.benefits.benefit4"),
      ],
    },
    {
      id: "analytics",
      title: t("howItWorks.intelligence.features.analytics.title"),
      description: t("howItWorks.intelligence.features.analytics.description"),
      icon: <BarChart3 className="h-6 w-6" />,
      benefits: [
        t("howItWorks.intelligence.features.analytics.benefits.benefit1"),
        t("howItWorks.intelligence.features.analytics.benefits.benefit2"),
        t("howItWorks.intelligence.features.analytics.benefits.benefit3"),
        t("howItWorks.intelligence.features.analytics.benefits.benefit4"),
      ],
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════
  //  PHASES NAVIGATION
  // ═══════════════════════════════════════════════════════════════════════
  const phases = [
    {
      id: 0,
      label: t("howItWorks.phases.phase1.id"),
      tagline: t("howItWorks.phases.phase1.tagline"),
      icon: <Zap className="h-4 w-4" />,
    },
    {
      id: 1,
      label: t("howItWorks.phases.phase2.id"),
      tagline: t("howItWorks.phases.phase2.tagline"),
      icon: <Smartphone className="h-4 w-4" />,
    },
    {
      id: 2,
      label: t("howItWorks.phases.phase3.id"),
      tagline: t("howItWorks.phases.phase3.tagline"),
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
                {t("howItWorks.hero.badge")}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                {t("howItWorks.hero.title")}{" "}
                <span className="text-[var(--brand-primary)]">
                  {t("howItWorks.hero.titleHighlight")}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-3xl mx-auto leading-relaxed">
                {t("howItWorks.hero.description")}
              </p>

              {/* Quick Stats Bar */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="p-3 rounded-lg bg-white border border-[var(--border-custom)] text-center">
                  <div className="text-2xl font-extrabold text-[var(--brand-primary)]">
                    {t("howItWorks.hero.stats.setupTime")}
                  </div>
                  <div className="text-xs font-medium text-[var(--foreground-muted)] mt-1">
                    {t("howItWorks.hero.stats.setupTimeLabel")}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[var(--border-custom)] text-center">
                  <div className="text-2xl font-extrabold text-[var(--brand-primary)]">
                    {t("howItWorks.hero.stats.spreadsheets")}
                  </div>
                  <div className="text-xs font-medium text-[var(--foreground-muted)] mt-1">
                    {t("howItWorks.hero.stats.spreadsheetsLabel")}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[var(--border-custom)] text-center">
                  <div className="text-2xl font-extrabold text-[var(--brand-primary)]">
                    {t("howItWorks.hero.stats.auditReady")}
                  </div>
                  <div className="text-xs font-medium text-[var(--foreground-muted)] mt-1">
                    {t("howItWorks.hero.stats.auditReadyLabel")}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[var(--border-custom)] text-center">
                  <div className="text-2xl font-extrabold text-[var(--brand-primary)]">
                    {t("howItWorks.hero.stats.tracking")}
                  </div>
                  <div className="text-xs font-medium text-[var(--foreground-muted)] mt-1">
                    {t("howItWorks.hero.stats.trackingLabel")}
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
                  <span>{t("howItWorks.hero.cta.bookDemo")}</span>
                  <ArrowRight className="h-4 w-4" />
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
                  <span>{t("howItWorks.setup.badge")}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
                  {t("howItWorks.setup.title")}{" "}
                  <span className="text-[var(--brand-primary)]">{t("howItWorks.setup.titleHighlight")}</span>
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
                  {t("howItWorks.setup.description")}
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
                                {t("howItWorks.common.step")} {step.number}
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
                  <span className="text-lg font-bold">{t("howItWorks.setup.completionBadge.title")}</span>
                </div>
                <p className="text-sm text-emerald-700">
                  {t("howItWorks.setup.completionBadge.description")}
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
                  <span>{t("howItWorks.usage.badge")}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
                  {t("howItWorks.usage.title")}{" "}
                  <span className="text-[var(--brand-primary)]">{t("howItWorks.usage.titleHighlight")}</span>
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
                  {t("howItWorks.usage.description")}
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
                        {t("howItWorks.common.automatedWorkflow")}
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
                      <span>{t("howItWorks.usage.workflows.checkout.cta")}</span>
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
                  <span>{t("howItWorks.intelligence.badge")}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
                  {t("howItWorks.intelligence.title")}{" "}
                  <span className="text-[var(--brand-primary)]">{t("howItWorks.intelligence.titleHighlight")}</span>
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
                  {t("howItWorks.intelligence.description")}
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
                        {t("howItWorks.common.keyBenefits")}
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
                      <span>{t("howItWorks.intelligence.automation.badge")}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3">
                      {t("howItWorks.intelligence.automation.title")}
                    </h3>
                    <p className="text-base text-slate-300 leading-relaxed mb-6">
                      {t("howItWorks.intelligence.automation.description")}
                    </p>

                    <Button
                      variant="primary"
                      size="lg"
                      href="/demo"
                      className="w-full md:w-auto"
                    >
                      <span>{t("howItWorks.intelligence.automation.cta")}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {[
                      t("howItWorks.intelligence.automation.items.item1"),
                      t("howItWorks.intelligence.automation.items.item2"),
                      t("howItWorks.intelligence.automation.items.item3"),
                      t("howItWorks.intelligence.automation.items.item4"),
                      t("howItWorks.intelligence.automation.items.item5"),
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
                {t("howItWorks.summary.title")}{" "}
                <span className="text-[var(--brand-primary)]">{t("howItWorks.summary.titleHighlight")}</span>
              </h2>
              <p className="mt-4 text-lg text-[var(--foreground-muted)] leading-relaxed max-w-3xl mx-auto">
                {t("howItWorks.summary.description")}
              </p>
            </div>

            {/* Three Pillars Summary */}
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border-custom)] text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brand-primary-light)] text-[var(--brand-primary)] mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <div className="text-lg font-bold text-[var(--foreground)] mb-2">
                  {t("howItWorks.summary.pillars.setup.title")}
                </div>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {t("howItWorks.summary.pillars.setup.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border-custom)] text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] mb-4">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div className="text-lg font-bold text-[var(--foreground)] mb-2">
                  {t("howItWorks.summary.pillars.realTime.title")}
                </div>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {t("howItWorks.summary.pillars.realTime.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border-custom)] text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-50 text-cyan-600 mb-4">
                  <Cloud className="h-6 w-6" />
                </div>
                <div className="text-lg font-bold text-[var(--foreground)] mb-2">
                  {t("howItWorks.summary.pillars.intelligence.title")}
                </div>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {t("howItWorks.summary.pillars.intelligence.description")}
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
                <span>{t("howItWorks.summary.cta.bookDemo")}</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--foreground-muted)] font-medium">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[var(--brand-emerald)]" />
                <span>{t("howItWorks.summary.trustBadges.soc2")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                <span>{t("howItWorks.summary.trustBadges.iso27001")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--brand-primary)]" />
                <span>{t("howItWorks.summary.trustBadges.uptime")}</span>
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
