"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ClipboardCheck,
  CheckCircle2,
  AlertCircle,
  Camera,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  RefreshCw,
  Lock,
  Layers,
  ChevronDown,
  UserCheck,
  Smartphone,
  MapPin,
  Clock,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";
import { cn } from "@/lib/utils";

export default function InspectionsAuditPage() {
  const t = useTranslations("products.inspections.page");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const [checklistItems, setChecklistItems] = useState([
    { id: 1, title: t("hero.cockpit.checklist.item1"), passed: true },
    { id: 2, title: t("hero.cockpit.checklist.item2"), passed: true },
    { id: 3, title: t("hero.cockpit.checklist.item3"), passed: true },
    { id: 4, title: t("hero.cockpit.checklist.item4"), passed: false },
  ]);

  const toggleItem = (id: number) => {
    setChecklistItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, passed: !item.passed } : item))
    );
  };

  const passedCount = checklistItems.filter((i) => i.passed).length;

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
                    <span>{t("hero.trustBadges.compliance")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{t("hero.trustBadges.photos")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{t("hero.trustBadges.tamperProof")}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Digital Inspection Simulator */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                    <div>
                      <div className="text-xs font-bold text-[var(--foreground)]">
                        {t("hero.cockpit.protocol")}
                      </div>
                      <div className="text-[11px] text-[var(--foreground-muted)] font-mono">
                        {t("hero.cockpit.asset")}
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[var(--brand-emerald)]">
                      {t("hero.cockpit.passed", { count: passedCount, total: checklistItems.length })}
                    </span>
                  </div>

                  {/* Checklist Items */}
                  <div className="space-y-2.5">
                    {checklistItems.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className={cn(
                          "flex items-center justify-between p-3 rounded-lg border text-xs cursor-pointer transition-all select-none",
                          item.passed
                            ? "bg-[var(--brand-emerald-light)]/40 border-[var(--brand-emerald)]/30 text-[var(--foreground)]"
                            : "bg-rose-50/70 border-rose-200 text-rose-800"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          {item.passed ? (
                            <CheckCircle2 className="h-4 w-4 text-[var(--brand-emerald)] shrink-0" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-rose-500 shrink-0" />
                          )}
                          <span className="font-semibold">{item.title}</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider font-mono">
                          {item.passed ? t("hero.cockpit.statusPass") : t("hero.cockpit.statusFlag")}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Telemetry & E-Signature Strip */}
                  <div className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[11px] text-[var(--foreground-muted)]">
                      <span>{t("hero.cockpit.inspector")} <strong>{t("hero.cockpit.inspectorName")}</strong></span>
                      <span>{t("hero.cockpit.gps")}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-[var(--border-subtle)] text-[11px] text-[var(--foreground-subtle)] font-mono">
                      <span>{t("hero.cockpit.signature")}</span>
                      <span>{t("hero.cockpit.hash")}</span>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <span className="text-xs text-[var(--foreground-muted)]">
                      {t("hero.cockpit.clickToggle")}
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      href="/demo"
                      className="text-xs"
                    >
                      <span>{t("hero.cockpit.submitAudit")}</span>
                    </Button>
                  </div>
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
                  <ClipboardCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.protocolBuilder.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.protocolBuilder.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Camera className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.photoProof.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.photoProof.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.autoWorkOrders.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.autoWorkOrders.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.signatures.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.signatures.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.cryptoLedger.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.cryptoLedger.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <FileCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.pdfExport.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.pdfExport.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. FAQ ACCORDION ─── */}
        <section className="py-20 bg-[var(--surface)] border-t border-[var(--border-custom)]">
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
                    className="rounded-lg border border-[var(--border-custom)] bg-white overflow-hidden transition-colors"
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
                      <div className="px-4 pb-4 pt-1 text-sm text-[var(--foreground-muted)] leading-relaxed border-t border-[var(--border-subtle)] bg-[var(--surface)] animate-in fade-in-0 duration-150">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 4. CTA BANNER ─── */}
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
