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
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";
import { cn } from "@/lib/utils";

export default function HealthcareIndustryPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedWing, setSelectedWing] = useState<"icu" | "cardio" | "er">("cardio");

  const bioMedDevices = {
    cardio: [
      { id: "AM-MED-4091", name: "Siemens Acuson Ultrasound System", room: "Suite 210 (Cardiology)", calDate: "Valid to Nov 2028", status: "Calibrated & Ready" },
      { id: "AM-MED-1049", name: "GE Healthcare MAC 5500 HD ECG", room: "Exam Room 4", calDate: "Valid to Jan 2027", status: "In Use" },
      { id: "AM-MED-8802", name: "Philips IntelliVue MX750 Monitor", room: "Recovery Bay 2", calDate: "Valid to Aug 2027", status: "Available" },
    ],
    icu: [
      { id: "AM-MED-9912", name: "Hamilton-C6 Mechanical Ventilator", room: "ICU Bed #4", calDate: "Valid to Jun 2027", status: "In Active Use" },
      { id: "AM-MED-3301", name: "Baxter Sigma Spectrum Infusion Pump", room: "ICU Bed #4", calDate: "Valid to Sep 2027", status: "In Active Use" },
      { id: "AM-MED-7719", name: "Medtronic PB980 Ventilator System", room: "Cleanroom Storage", calDate: "Valid to Dec 2027", status: "Sterilized & Staged" },
    ],
    er: [
      { id: "AM-MED-5501", name: "Zoll X Series Defibrillator / Monitor", room: "Trauma Bay 1", calDate: "Daily Self-Test Passed", status: "Emergency Standby" },
      { id: "AM-MED-2204", name: "Mindray DP-50 Portable Ultrasound", room: "Triage Station", calDate: "Valid to May 2027", status: "In Use" },
      { id: "AM-MED-6610", name: "Stryker Power-PRO XT Ambulance Cot", room: "Ambulance Bay", calDate: "Certified 2026", status: "Operational" },
    ],
  };

  const faqs = [
    {
      q: "How does Asset Master support Joint Commission (JCAHO) and FDA compliance?",
      a: "Asset Master maintains continuous, tamper-evident audit records of 100% of biomedical calibration logs, electrical safety checks, preventative maintenance tickets, and sterilization records ready for Joint Commission and FDA surveys.",
    },
    {
      q: "Can clinical staff find mobile equipment in seconds during emergencies?",
      a: "Yes. Clinical staff can search on any hospital tablet or phone to instantly see the real-time room location and availability status of mobile telemetry, infusion pumps, ultrasound units, and crash carts.",
    },
    {
      q: "How does preventative maintenance and calibration work for biomedical equipment?",
      a: "The system automates recurring calibration schedules based on manufacturer guidelines and regulatory standards. BioMed technicians log test results and digital certification stickers directly in the mobile app.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[var(--foreground)]">
      <Header onBookDemo={() => setIsDemoModalOpen(true)} />

      <main className="flex-1 pt-14 lg:pt-18">
        <section className="relative pb-16 lg:pb-24 overflow-hidden hero-gradient-canvas border-b border-[var(--border-subtle)]">
          <div className="hero-mesh-glow" />
          <div className="hero-grid-pattern" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column Copy */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--brand-primary)]">
                  Built for Hospitals & Healthcare Networks
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                  Find Life-Saving Equipment. <span className="text-[var(--brand-primary)]">Ensure Compliance.</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Track mobile medical devices, manage biomedical calibration cycles, and ensure 100% compliance with Joint Commission and FDA standards. Eliminate lost infusion pumps and frantic searches.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Button
                    variant="primary"
                    size="xl"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full sm:w-auto text-base shadow-[var(--shadow-glow)]"
                  >
                    <span>Book a Healthcare Demo</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full sm:w-auto text-base"
                  >
                    <span>Explore Platform</span>
                  </Button>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[var(--foreground-muted)] font-medium">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[var(--brand-emerald)]" />
                    <span>Joint Commission & FDA Ready</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>Automated BioMed Calibrations</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>Instant Wing & Room Locator</span>
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
                        Biomedical Device Status & Locator
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
                        Cardiology
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
                        ICU Wing
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
                        Emergency
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
                              TAG: {device.id} &bull; Location: <strong className="text-[var(--foreground)]">{device.room}</strong>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border border-[var(--brand-emerald)]/20 shrink-0">
                            {device.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[var(--foreground-muted)] pt-1 border-t border-[var(--border-subtle)]">
                          <span>Calibration: <strong>{device.calDate}</strong></span>
                          <span className="text-[var(--brand-primary)] font-semibold">JCAHO Verified</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-[var(--foreground-muted)]">
                      Instant mobile barcode scan for BioMed techs & nurses
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setIsDemoModalOpen(true)}
                      className="text-xs"
                    >
                      <span>Locate Equipment</span>
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
                Healthcare Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                Engineered for patient safety and <span className="text-[var(--brand-primary)]">uncompromised compliance.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Mobile Medical Asset Locator</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Locate infusion pumps, portable ultrasound systems, bladder scanners, and telemetry monitors in seconds across wings, floors, and rooms.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">BioMed Preventative Maintenance</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Automate recurring calibration cycles and electrical safety inspections. Never miss annual Joint Commission inspection deadlines.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Joint Commission & FDA Audits</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Export 100% compliant medical device history reports, maintenance logs, and certified technician signatures for state health authorities.
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
                    <span>Hospital Network Case Study &bull; St. Jude Regional Health</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                    "Search time for mobile infusion pumps dropped from 22 minutes to under 15 seconds across our 420-bed facility."
                  </h3>

                  <p className="text-base text-[var(--foreground-muted)] leading-relaxed">
                    "Asset Master revolutionized our biomedical clinical workflow. BioMed technicians log safety calibration tests directly into the system, and when Joint Commission auditors arrived, we exported 100% compliant logs in 2 clicks."
                  </p>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[var(--brand-primary)]">
                      <Image
                        src="/images/avatar-4.jpg"
                        alt="Dr. Danielle Morales"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)]">Dr. Danielle Morales, MD</div>
                      <div className="text-xs text-[var(--foreground-muted)]">Director of Clinical Engineering & BioMed Services</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative h-72 w-full rounded-xl overflow-hidden border border-[var(--border-custom)] shadow-md group">
                    <Image
                      src="/images/complaince.jpg"
                      alt="Healthcare compliance and clinical asset locator"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white text-xs font-bold">
                        Joint Commission and FDA biomedical calibration records
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
                Healthcare FAQ
              </p>
              <h2 className="text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                Frequently Asked Questions for Hospital Leaders
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
              Ready to elevate your hospital's biomedical asset management?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Schedule a personalized walkthrough of the Asset Master healthcare suite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="xl"
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto text-base"
              >
                <span>Book a Healthcare Demo</span>
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
