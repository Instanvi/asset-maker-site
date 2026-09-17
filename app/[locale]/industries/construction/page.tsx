"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HardHat,
  Truck,
  Wrench,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Layers,
  ChevronDown,
  UserCheck,
  DollarSign,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";
import { cn } from "@/lib/utils";

export default function ConstructionIndustryPage() {
  const t = useTranslations("industries.construction.page");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedJobsite, setSelectedJobsite] = useState<"siteA" | "siteB">("siteA");

  const jobsiteAssets = {
    siteA: [
      { id: "AM-CAT-320", name: t("hero.cockpit.assets.catExcavator"), category: t("hero.cockpit.categories.heavyFleet"), custodian: t("hero.cockpit.custodians.marcus"), status: t("hero.cockpit.status.operational"), value: "$185,000" },
      { id: "AM-GEN-881", name: t("hero.cockpit.assets.generator"), category: t("hero.cockpit.categories.powerSite"), custodian: t("hero.cockpit.custodians.crew2"), status: t("hero.cockpit.status.inUse"), value: "$28,400" },
      { id: "AM-HLT-091", name: t("hero.cockpit.assets.breaker"), category: t("hero.cockpit.categories.demolition"), custodian: t("hero.cockpit.custodians.dave"), status: t("hero.cockpit.status.checkedOut"), value: "$3,200" },
    ],
    siteB: [
      { id: "AM-JLG-660", name: t("hero.cockpit.assets.boomLift"), category: t("hero.cockpit.categories.aerialLift"), custodian: t("hero.cockpit.custodians.apex"), status: t("hero.cockpit.status.inspected"), value: "$94,000" },
      { id: "AM-WKR-104", name: t("hero.cockpit.assets.compactor"), category: t("hero.cockpit.categories.earthmoving"), custodian: t("hero.cockpit.custodians.paving"), status: t("hero.cockpit.status.inUse"), value: "$14,500" },
      { id: "AM-TRB-402", name: t("hero.cockpit.assets.gpsRover"), category: t("hero.cockpit.categories.surveying"), custodian: t("hero.cockpit.custodians.civil"), status: t("hero.cockpit.status.checkedOut"), value: "$26,800" },
    ],
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
                    <span>{t("hero.badges.toolCrib")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{t("hero.badges.osha")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{t("hero.badges.gps")}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2">
                      <HardHat className="h-4 w-4 text-[var(--brand-primary)]" />
                      <span className="text-xs font-bold text-[var(--foreground)]">
                        {t("hero.cockpit.title")}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-[var(--surface)] p-1 rounded-lg border border-[var(--border-custom)]">
                      <button
                        type="button"
                        onClick={() => setSelectedJobsite("siteA")}
                        className={cn(
                          "px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer select-none",
                          selectedJobsite === "siteA"
                            ? "bg-white text-[var(--brand-primary)] shadow-2xs border border-[var(--border-custom)]"
                            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                        )}
                      >
                        {t("hero.cockpit.siteA")}
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedJobsite("siteB")}
                        className={cn(
                          "px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer select-none",
                          selectedJobsite === "siteB"
                            ? "bg-white text-[var(--brand-primary)] shadow-2xs border border-[var(--border-custom)]"
                            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                        )}
                      >
                        {t("hero.cockpit.siteB")}
                      </button>
                    </div>
                  </div>

                  {/* Asset Rows */}
                  <div className="space-y-2.5">
                    {jobsiteAssets[selectedJobsite].map((asset) => (
                      <div
                        key={asset.id}
                        className="p-3 rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] hover:bg-white transition-all text-xs space-y-1.5"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="font-bold text-[var(--foreground)]">{asset.name}</div>
                            <div className="text-[11px] font-mono text-[var(--foreground-subtle)]">
                              {t("hero.cockpit.tag")} {asset.id} &bull; {t("hero.cockpit.custody")} <strong className="text-[var(--foreground)]">{asset.custodian}</strong>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border border-[var(--brand-emerald)]/20 shrink-0">
                            {asset.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[var(--foreground-muted)] pt-1 border-t border-[var(--border-subtle)]">
                          <span>{t("hero.cockpit.class")} {asset.category}</span>
                          <span className="font-bold text-[var(--foreground)]">{asset.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-[var(--foreground-muted)]">
                      {t("hero.cockpit.instantCheckout")}
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      href="/demo"
                      className="text-xs"
                    >
                      <UserCheck className="h-3.5 w-3.5" />
                      <span>{t("hero.cockpit.simulateTransfer")}</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.toolCrib.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.toolCrib.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.interJobsite.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.interJobsite.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.osha.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.osha.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Truck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.heavyFleet.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.heavyFleet.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <DollarSign className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.jobCosting.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.jobCosting.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.barcodeTags.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.barcodeTags.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. FIELD CASE STUDY & VISUAL WORKFLOW ─── */}
        <section className="py-20 bg-white border-t border-[var(--border-custom)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] p-8 sm:p-10 lg:p-12 shadow-[var(--shadow-card)]">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] text-xs font-bold border border-[var(--brand-emerald)]/20">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>{t("caseStudy.badge")}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                    {t("caseStudy.quote")}
                  </h3>

                  <p className="text-base text-[var(--foreground-muted)] leading-relaxed">
                    {t("caseStudy.testimonial")}
                  </p>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[var(--brand-primary)]">
                      <Image
                        src="/images/avatar-1.jpg"
                        alt={t("caseStudy.author")}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)]">{t("caseStudy.author")}</div>
                      <div className="text-xs text-[var(--foreground-muted)]">{t("caseStudy.role")}</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative h-72 w-full rounded-xl overflow-hidden border border-[var(--border-custom)] shadow-md group">
                    <Image
                      src="/images/Barcodescanner.jpeg"
                      alt={t("caseStudy.imageAlt")}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white text-xs font-bold">
                        {t("caseStudy.imageCaption")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. FAQ ACCORDION ─── */}
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
