"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  QrCode,
  Box,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Search,
  Filter,
  UserCheck,
  Sliders,
  Smartphone,
  Layers,
  ChevronRight,
  Sparkles,
  Lock,
  Tag,
  Clock,
  ChevronDown,
  Building,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";
import { cn } from "@/lib/utils";

export default function AssetTrackingPage() {
  const t = useTranslations("products.assetTracking.page");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"registry" | "scanner">("registry");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "it" | "fleet" | "tools">("all");
  const [isScanning, setIsScanning] = useState(false);
  const [scannedAssetTag, setScannedAssetTag] = useState("AM-TAG-88219");
  const [scanCount, setScanCount] = useState(412);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const demoAssets = [
    {
      id: "AM-IT-88421",
      name: t("hero.cockpit.demoAssets.macbook.name"),
      category: "it",
      custodian: t("hero.cockpit.demoAssets.macbook.custodian"),
      location: t("hero.cockpit.demoAssets.macbook.location"),
      status: t("hero.cockpit.demoAssets.macbook.status"),
      bookValue: t("hero.cockpit.demoAssets.macbook.bookValue"),
      warranty: t("hero.cockpit.demoAssets.macbook.warranty"),
    },
    {
      id: "AM-EQ-90142",
      name: t("hero.cockpit.demoAssets.excavator.name"),
      category: "fleet",
      custodian: t("hero.cockpit.demoAssets.excavator.custodian"),
      location: t("hero.cockpit.demoAssets.excavator.location"),
      status: t("hero.cockpit.demoAssets.excavator.status"),
      bookValue: t("hero.cockpit.demoAssets.excavator.bookValue"),
      warranty: t("hero.cockpit.demoAssets.excavator.warranty"),
    },
    {
      id: "AM-TL-30419",
      name: t("hero.cockpit.demoAssets.hammer.name"),
      category: "tools",
      custodian: t("hero.cockpit.demoAssets.hammer.custodian"),
      location: t("hero.cockpit.demoAssets.hammer.location"),
      status: t("hero.cockpit.demoAssets.hammer.status"),
      bookValue: t("hero.cockpit.demoAssets.hammer.bookValue"),
      warranty: t("hero.cockpit.demoAssets.hammer.warranty"),
    },
  ];

  const filteredAssets = demoAssets.filter((asset) => {
    const matchesCategory = selectedCategory === "all" || asset.category === selectedCategory;
    const matchesSearch =
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.custodian.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanCount((prev) => prev + 1);
      const tags = ["AM-EQ-90142", "AM-TL-30419", "AM-IT-88421", "AM-MED-77192"];
      setScannedAssetTag(tags[Math.floor(Math.random() * tags.length)]);
    }, 700);
  };

  const faqs = [
    {
      q: t("faq.questions.q1.question"),
      a: t("faq.questions.q1.answer"),
    },
    {
      q: t("faq.questions.q2.question"),
      a: t("faq.questions.q2.answer"),
    },
    {
      q: t("faq.questions.q3.question"),
      a: t("faq.questions.q3.answer"),
    },
    {
      q: t("faq.questions.q4.question"),
      a: t("faq.questions.q4.answer"),
    },
    {
      q: t("faq.questions.q5.question"),
      a: t("faq.questions.q5.answer"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[var(--foreground)]">
      <Header onBookDemo={() => setIsDemoModalOpen(true)} />

      <main className="flex-1">
        <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden hero-gradient-canvas border-b border-[var(--border-subtle)]">
          <div className="hero-mesh-glow" />
          <div className="hero-grid-pattern" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column Copy */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--brand-primary)]">
                  {t("hero.badge")}
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                  {t("hero.title")} <span className="text-[var(--brand-primary)]">{t("hero.titleHighlight")}</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  {t("hero.description")}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Button
                    variant="primary"
                    size="xl"
                    href="/demo"
                    className="w-full sm:w-auto text-base shadow-[var(--shadow-glow)]"
                  >
                    <span>{t("hero.cta.bookDemo")}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[var(--foreground-muted)] font-medium">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[var(--brand-emerald)]" />
                    <span>{t("hero.trustBadges.instantScan")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{t("hero.trustBadges.offlineSync")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{t("hero.trustBadges.latency")}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Interactive Asset Tracking Simulator */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] space-y-4">
                  {/* Mode Tabs */}
                  <div className="flex items-center justify-between gap-2 p-1 rounded-lg bg-[var(--surface-raised)] border border-[var(--border-custom)]">
                    <button
                      type="button"
                      onClick={() => setActiveTab("registry")}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-bold transition-all cursor-pointer select-none",
                        activeTab === "registry"
                          ? "bg-white text-[var(--brand-primary)] shadow-xs border border-[var(--border-custom)]"
                          : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                      )}
                    >
                      <Box className="h-3.5 w-3.5" />
                      <span>{t("hero.cockpit.tabs.registry")}</span>
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
                      <span>{t("hero.cockpit.tabs.scanner")}</span>
                    </button>
                  </div>

                  {/* TAB 1: REGISTRY VIEW */}
                  {activeTab === "registry" && (
                    <div className="space-y-3.5 animate-in fade-in-0 duration-150">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                        <div className="relative w-full sm:w-64">
                          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-[var(--foreground-subtle)]" />
                          <input
                            type="text"
                            placeholder={t("hero.cockpit.searchPlaceholder")}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)]"
                          />
                        </div>

                        <div className="flex items-center gap-1 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                          {(
                            [
                              { id: "all", label: t("hero.cockpit.categories.all") },
                              { id: "it", label: t("hero.cockpit.categories.it") },
                              { id: "fleet", label: t("hero.cockpit.categories.fleet") },
                              { id: "tools", label: t("hero.cockpit.categories.tools") },
                            ] as const
                          ).map((cat) => (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => setSelectedCategory(cat.id)}
                              className={cn(
                                "px-2 py-1 rounded text-xs font-bold transition-all border cursor-pointer shrink-0",
                                selectedCategory === cat.id
                                  ? "bg-[var(--brand-primary-light)] text-[var(--brand-primary)] border-[var(--brand-primary)]/40"
                                  : "bg-[var(--surface)] text-[var(--foreground-muted)] border-[var(--border-custom)] hover:bg-white"
                              )}
                            >
                              {cat.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Records Table */}
                      <div className="rounded-lg border border-[var(--border-custom)] overflow-hidden text-xs divide-y divide-[var(--border-subtle)]">
                        {filteredAssets.map((asset) => (
                          <div key={asset.id} className="p-3 bg-white hover:bg-[var(--surface)] transition-colors">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <div className="font-bold text-[var(--foreground)]">{asset.name}</div>
                                <div className="text-[11px] font-mono text-[var(--foreground-subtle)]">
                                  {asset.id} &bull; Custodian: <strong className="text-[var(--foreground)]">{asset.custodian}</strong>
                                </div>
                              </div>
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border border-[var(--brand-emerald)]/20 shrink-0">
                                {asset.status}
                              </span>
                            </div>
                            <div className="mt-2 flex items-center justify-between text-[11px] text-[var(--foreground-muted)] pt-2 border-t border-[var(--border-subtle)]">
                              <span>{t("hero.cockpit.locationLabel")} {asset.location}</span>
                              <span className="font-bold text-[var(--foreground)]">{asset.bookValue}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 2: SCANNER VIEW */}
                  {activeTab === "scanner" && (
                    <div className="space-y-3.5 animate-in fade-in-0 duration-150">
                      <div className="relative rounded-lg bg-slate-950 p-6 text-white text-center overflow-hidden border border-slate-800">
                        {isScanning && (
                          <div className="absolute left-0 right-0 h-0.5 bg-cyan-400 scanner-laser shadow-[0_0_12px_#38bdf8] z-20" />
                        )}

                        <div className="relative z-10 my-2 mx-auto w-44 h-28 border-2 border-dashed border-cyan-400/80 rounded-lg flex flex-col items-center justify-center p-2 bg-slate-900/50">
                          <QrCode className="h-10 w-10 text-cyan-400 mb-1" />
                          <span className="text-[11px] font-mono text-cyan-300">
                            {isScanning ? t("hero.cockpit.scanner.readingTag") : scannedAssetTag}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-400 px-2 pt-2 border-t border-slate-800">
                          <span>{t("hero.cockpit.scanner.latency")}</span>
                          <span>{t("hero.cockpit.scanner.buffer", { count: scanCount })}</span>
                          <span className="text-emerald-400 font-bold">{t("hero.cockpit.scanner.gpsTagged")}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-[var(--foreground-muted)]">
                          {t("hero.cockpit.scanner.engineDescription")}
                        </span>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={handleSimulateScan}
                          className="text-xs"
                        >
                          <RefreshCw className={cn("h-3.5 w-3.5", isScanning && "animate-spin")} />
                          <span>{t("hero.cockpit.scanner.simulateScan")}</span>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. CORE CAPABILITIES ─── */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2.5">
                {t("capabilities.badge")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                {t("capabilities.title")} <span className="text-[var(--brand-primary)]">{t("capabilities.titleHighlight")}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.mobileScanning.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.mobileScanning.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.custody.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.custody.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.gpsTracking.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.gpsTracking.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Tag className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.tagGenerator.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.tagGenerator.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.auditHistory.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.auditHistory.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.customFields.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.customFields.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. HOW IT WORKS WORKFLOW ─── */}
        <section className="py-20 bg-[var(--surface)] border-t border-[var(--border-custom)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2.5">
                {t("workflow.badge")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                {t("workflow.title")} <span className="text-[var(--brand-primary)]">{t("workflow.titleHighlight")}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-white border border-[var(--border-custom)] space-y-3">
                <span className="text-3xl font-extrabold text-[var(--brand-primary)]">{t("workflow.steps.step1.number")}</span>
                <h4 className="text-lg font-bold text-[var(--foreground)]">{t("workflow.steps.step1.title")}</h4>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("workflow.steps.step1.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[var(--border-custom)] space-y-3">
                <span className="text-3xl font-extrabold text-[var(--brand-primary)]">{t("workflow.steps.step2.number")}</span>
                <h4 className="text-lg font-bold text-[var(--foreground)]">{t("workflow.steps.step2.title")}</h4>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("workflow.steps.step2.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[var(--border-custom)] space-y-3">
                <span className="text-3xl font-extrabold text-[var(--brand-primary)]">{t("workflow.steps.step3.number")}</span>
                <h4 className="text-lg font-bold text-[var(--foreground)]">{t("workflow.steps.step3.title")}</h4>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("workflow.steps.step3.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. FAQ ACCORDION ─── */}
        <section className="py-20 bg-white border-t border-[var(--border-custom)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2.5">
                {t("faq.badge")}
              </p>
              <h2 className="text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                {t("faq.title")}
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-[var(--foreground)] select-none cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-[var(--foreground-subtle)] transition-transform",
                          isOpen && "rotate-180 text-[var(--brand-primary)]"
                        )}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-sm text-[var(--foreground-muted)] leading-relaxed border-t border-[var(--border-subtle)] bg-white animate-in fade-in-0 duration-150">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 5. CTA BANNER ─── */}
        <section className="py-16 bg-[var(--surface-dark)] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t("cta.title")}
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="xl"
                href="/demo"
                className="w-full sm:w-auto text-base"
              >
                <span>{t("cta.bookDemo")}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
