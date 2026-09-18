"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Laptop,
  Lock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Layers,
  ChevronDown,
  UserCheck,
  Smartphone,
  Check,
  Server,
  Key,
  FileText,
  Clock,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface CustodianRecord {
  id: string;
  name: string;
  role: string;
  dept: string;
  device: string;
  serial: string;
  mdmStatus: string;
  encryption: string;
  osPatch: string;
  licenses: string[];
}

export default function ItAssetManagementPage() {
  const t = useTranslations("products.itAssetManagement.page");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedCustodianIdx, setSelectedCustodianIdx] = useState(0);

  const custodians: CustodianRecord[] = [
    {
      id: t("hero.cockpit.employees.sarah.id"),
      name: t("hero.cockpit.employees.sarah.name"),
      role: t("hero.cockpit.employees.sarah.role"),
      dept: t("hero.cockpit.employees.sarah.dept"),
      device: t("hero.cockpit.employees.sarah.device"),
      serial: t("hero.cockpit.employees.sarah.serial"),
      mdmStatus: t("hero.cockpit.employees.sarah.mdmStatus"),
      encryption: t("hero.cockpit.employees.sarah.encryption"),
      osPatch: t("hero.cockpit.employees.sarah.osPatch"),
      licenses: [
        t("hero.cockpit.employees.sarah.licenses.figma"),
        t("hero.cockpit.employees.sarah.licenses.github"),
        t("hero.cockpit.employees.sarah.licenses.slack"),
        t("hero.cockpit.employees.sarah.licenses.jetbrains"),
      ],
    },
    {
      id: t("hero.cockpit.employees.marcus.id"),
      name: t("hero.cockpit.employees.marcus.name"),
      role: t("hero.cockpit.employees.marcus.role"),
      dept: t("hero.cockpit.employees.marcus.dept"),
      device: t("hero.cockpit.employees.marcus.device"),
      serial: t("hero.cockpit.employees.marcus.serial"),
      mdmStatus: t("hero.cockpit.employees.marcus.mdmStatus"),
      encryption: t("hero.cockpit.employees.marcus.encryption"),
      osPatch: t("hero.cockpit.employees.marcus.osPatch"),
      licenses: [
        t("hero.cockpit.employees.marcus.licenses.microsoft365"),
        t("hero.cockpit.employees.marcus.licenses.procore"),
        t("hero.cockpit.employees.marcus.licenses.autodesk"),
        t("hero.cockpit.employees.marcus.licenses.zoom"),
      ],
    },
  ];

  const current = custodians[selectedCustodianIdx];

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
                    <span>{t("hero.trustBadges.mdmSync")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{t("hero.trustBadges.offboarding")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{t("hero.trustBadges.soc2")}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive ITAM Custody Studio */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] space-y-4">
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
                          {t("hero.cockpit.labels.serial")} {current.serial}
                        </span>
                        <h4 className="text-base font-bold text-[var(--foreground)] mt-0.5">
                          {current.device}
                        </h4>
                        <p className="text-xs text-[var(--foreground-muted)]">
                          {t("hero.cockpit.labels.assignedTo")} {current.name} &bull; {current.role}
                        </p>
                      </div>
                      <span className="px-2 py-1 rounded text-xs font-bold bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border border-[var(--brand-emerald)]/20 shrink-0">
                        {current.mdmStatus}
                      </span>
                    </div>

                    {/* Security & MDM Status Indicators */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      <div className="p-2.5 rounded-md bg-white border border-[var(--border-custom)]">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[var(--foreground-subtle)]">
                          <Lock className="h-3 w-3 text-[var(--brand-emerald)]" />
                          <span>{t("hero.cockpit.labels.diskEncryption")}</span>
                        </div>
                        <div className="text-xs font-bold text-[var(--foreground)] mt-0.5">
                          {current.encryption}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-md bg-white border border-[var(--border-custom)]">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[var(--foreground-subtle)]">
                          <CheckCircle2 className="h-3 w-3 text-[var(--brand-primary)]" />
                          <span>{t("hero.cockpit.labels.osPatchPosture")}</span>
                        </div>
                        <div className="text-xs font-bold text-[var(--foreground)] mt-0.5">
                          {current.osPatch}
                        </div>
                      </div>

                      <div className="col-span-2 sm:col-span-1 p-2.5 rounded-md bg-white border border-[var(--border-custom)]">
                        <div className="text-[10px] font-bold uppercase text-[var(--foreground-subtle)]">
                          {t("hero.cockpit.labels.handoverSignature")}
                        </div>
                        <div className="text-xs font-bold text-[var(--brand-emerald)] mt-0.5 flex items-center gap-1">
                          <Check className="h-3.5 w-3.5" />
                          {t("hero.cockpit.labels.verifiedOnFile")}
                        </div>
                      </div>
                    </div>

                    {/* Active Software Licenses */}
                    <div className="pt-2 border-t border-[var(--border-subtle)]">
                      <div className="text-[10px] font-bold uppercase text-[var(--foreground-subtle)] mb-1.5">
                        {t("hero.cockpit.labels.activeSoftwareLicenses")}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {current.licenses.map((lic, lIdx) => (
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

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-[var(--foreground-muted)]">
                      {t("hero.cockpit.labels.instantCheckIn")}
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      href="/demo"
                      className="text-xs"
                    >
                      <span>{t("hero.cockpit.labels.simulateOffboarding")}</span>
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
                  <Laptop className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.mdmSync.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.mdmSync.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Key className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.licenses.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.licenses.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.offboarding.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.offboarding.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.security.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.security.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Server className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.depreciation.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.depreciation.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.serviceDesk.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.serviceDesk.description")}
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
