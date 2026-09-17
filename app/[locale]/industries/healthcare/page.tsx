"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope,
  Activity,
  Heart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  QrCode,
  Layers,
  ChevronDown,
  MapPin,
  Clock,
  Lock,
  Calendar,
  AlertTriangle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";
import { cn } from "@/lib/utils";

export default function HealthcareIndustryPage() {
  const t = useTranslations("industries.healthcare.page");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedWing, setSelectedWing] = useState<"icu" | "cardio" | "er">("cardio");

  const bioMedDevices = {
    cardio: [
      { id: "AM-MED-4091", name: t("hero.cockpit.assets.ultrasound"), room: t("hero.cockpit.rooms.cardioSuite"), calDate: t("hero.cockpit.calDates.nov2028"), status: t("hero.cockpit.status.calibratedReady") },
      { id: "AM-MED-1049", name: t("hero.cockpit.assets.ecg"), room: t("hero.cockpit.rooms.examRoom"), calDate: t("hero.cockpit.calDates.jan2027"), status: t("hero.cockpit.status.inUse") },
      { id: "AM-MED-8802", name: t("hero.cockpit.assets.monitor"), room: t("hero.cockpit.rooms.recovery"), calDate: t("hero.cockpit.calDates.aug2027"), status: t("hero.cockpit.status.available") },
    ],
    icu: [
      { id: "AM-MED-9912", name: t("hero.cockpit.assets.ventilator"), room: t("hero.cockpit.rooms.icuBed"), calDate: t("hero.cockpit.calDates.jun2027"), status: t("hero.cockpit.status.activeUse") },
      { id: "AM-MED-3301", name: t("hero.cockpit.assets.infusion"), room: t("hero.cockpit.rooms.icuBed"), calDate: t("hero.cockpit.calDates.sep2027"), status: t("hero.cockpit.status.activeUse") },
      { id: "AM-MED-7719", name: t("hero.cockpit.assets.ventilatorSystem"), room: t("hero.cockpit.rooms.cleanroom"), calDate: t("hero.cockpit.calDates.dec2027"), status: t("hero.cockpit.status.sterilized") },
    ],
    er: [
      { id: "AM-MED-5501", name: t("hero.cockpit.assets.defibrillator"), room: t("hero.cockpit.rooms.traumaBay"), calDate: t("hero.cockpit.calDates.dailyTest"), status: t("hero.cockpit.status.emergencyStandby") },
      { id: "AM-MED-2204", name: t("hero.cockpit.assets.ultrasoundPortable"), room: t("hero.cockpit.rooms.triage"), calDate: t("hero.cockpit.calDates.may2027"), status: t("hero.cockpit.status.inUse") },
      { id: "AM-MED-6610", name: t("hero.cockpit.assets.cot"), room: t("hero.cockpit.rooms.ambulance"), calDate: t("hero.cockpit.calDates.certified2026"), status: t("hero.cockpit.status.operational") },
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
                  <Button
                    variant="outline"
                    size="xl"
                    href="/demo"
                    className="w-full sm:w-auto text-base"
                  >
                    <span>{t("hero.cta.explorePlatform")}</span>
                  </Button>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[var(--foreground-muted)] font-medium">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[var(--brand-emerald)]" />
                    <span>{t("hero.badges.jcaho")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{t("hero.badges.calibrations")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{t("hero.badges.locator")}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Hospital Wing BioMed Cockpit */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2">
                      <Stethoscope className="h-4 w-4 text-[var(--brand-primary)]" />
                      <span className="text-xs font-bold text-[var(--foreground)]">
                        {t("hero.cockpit.title")}
                      </span>
                    </div>

                    {/* Wing Selector */}
                    <div className="flex items-center gap-1 bg-[var(--surface)] p-1 rounded-lg border border-[var(--border-custom)]">
                      <button
                        type="button"
                        onClick={() => setSelectedWing("cardio")}
                        className={cn(
                          "px-2 py-1 rounded text-xs font-bold transition-all cursor-pointer select-none",
                          selectedWing === "cardio"
                            ? "bg-white text-[var(--brand-primary)] shadow-2xs border border-[var(--border-custom)]"
                            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                        )}
                      >
                        {t("hero.cockpit.wings.cardiology")}
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedWing("icu")}
                        className={cn(
                          "px-2 py-1 rounded text-xs font-bold transition-all cursor-pointer select-none",
                          selectedWing === "icu"
                            ? "bg-white text-[var(--brand-primary)] shadow-2xs border border-[var(--border-custom)]"
                            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                        )}
                      >
                        {t("hero.cockpit.wings.icu")}
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedWing("er")}
                        className={cn(
                          "px-2 py-1 rounded text-xs font-bold transition-all cursor-pointer select-none",
                          selectedWing === "er"
                            ? "bg-white text-[var(--brand-primary)] shadow-2xs border border-[var(--border-custom)]"
                            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                        )}
                      >
                        {t("hero.cockpit.wings.emergency")}
                      </button>
                    </div>
                  </div>

                  {/* Device List */}
                  <div className="space-y-2.5">
                    {bioMedDevices[selectedWing].map((device) => (
                      <div
                        key={device.id}
                        className="p-3.5 rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] hover:bg-white transition-all text-xs space-y-1.5"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="font-bold text-[var(--foreground)]">{device.name}</div>
                            <div className="text-[11px] font-mono text-[var(--foreground-subtle)]">
                              {t("hero.cockpit.tag")} {device.id} &bull; {t("hero.cockpit.location")} <strong className="text-[var(--foreground)]">{device.room}</strong>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border border-[var(--brand-emerald)]/20 shrink-0">
                            {device.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[var(--foreground-muted)] pt-1 border-t border-[var(--border-subtle)]">
                          <span>{t("hero.cockpit.calibration")} <strong>{device.calDate}</strong></span>
                          <span className="text-[var(--brand-primary)] font-semibold">{t("hero.cockpit.jcahoVerified")}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-[var(--foreground-muted)]">
                      {t("hero.cockpit.instantScan")}
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      href="/demo"
                      className="text-xs"
                    >
                      <span>{t("hero.cockpit.locateEquipment")}</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. SECTOR CAPABILITIES ─── */}
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
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.mobileLocator.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.mobileLocator.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.biomedMaintenance.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.biomedMaintenance.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.audits.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.audits.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. HOSPITAL CASE STUDY & VISUAL SHOWCASE ─── */}
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
                    "{t("caseStudy.quote")}"
                  </h3>

                  <p className="text-base text-[var(--foreground-muted)] leading-relaxed">
                    "{t("caseStudy.testimonial")}"
                  </p>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[var(--brand-primary)]">
                      <Image
                        src="/images/avatar-4.jpg"
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
                      src="/images/complaince.jpg"
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
