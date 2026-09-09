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
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";
import { cn } from "@/lib/utils";

export default function InspectionsAuditPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const [checklistItems, setChecklistItems] = useState([
    { id: 1, title: "Emergency Stop & Interlock Safety Test", passed: true },
    { id: 2, title: "Hydraulic Line Pressure & O-Ring Seal Check", passed: true },
    { id: 3, title: "Latest Calibration Sensor Verification", passed: true },
    { id: 4, title: "Physical Chassis Damage & Geofence Beacon", passed: false },
  ]);

  const toggleItem = (id: number) => {
    setChecklistItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, passed: !item.passed } : item))
    );
  };

  const passedCount = checklistItems.filter((i) => i.passed).length;

  const faqs = [
    {
      q: "Can we build our own custom inspection checklist templates?",
      a: "Yes. Our drag-and-drop form builder lets you configure custom inspection protocols with pass/fail toggles, multiple-choice dropdowns, numeric sensor readings, mandatory photos, and required electronic signatures.",
    },
    {
      q: "What happens when an inspector flags a failed safety item?",
      a: "When a defect is flagged, Asset Master can automatically lock the asset's check-out permission, dispatch an emergency maintenance work order, and send an instant push notification to the safety supervisor.",
    },
    {
      q: "Are the inspection logs and signatures audit-proof?",
      a: "Yes. Every submitted inspection generates a tamper-evident record with an immutable timestamp, inspector ID, GPS geotag, and SHA-256 cryptographic verification hash compliant with ISO 27001 and SOC 2 Type II.",
    },
    {
      q: "Can field crews perform inspections without cellular signal?",
      a: "Yes. The mobile app stores checklist protocols locally. Inspectors can complete surveys, take photos, and sign off offline. Data syncs automatically once a network connection is detected.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[var(--foreground)]">
      <Header onBookDemo={() => setIsDemoModalOpen(true)} />

      <main className="flex-1 pt-24 lg:pt-28">
        {/* ─── 1. BREADCRUMB & HERO ─── */}
        <section className="relative pb-16 lg:pb-24 overflow-hidden hero-gradient-canvas border-b border-[var(--border-subtle)]">
          <div className="hero-mesh-glow" />
          <div className="hero-grid-pattern" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--foreground-muted)] mb-6">
              <Link href="/" className="hover:text-[var(--brand-primary)] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span>Products</span>
              <span>/</span>
              <span className="text-[var(--brand-primary)] font-bold">Inspections & Audit Trail</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column Copy */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--brand-primary)]">
                  Digital Field Checklists & Audit Compliance
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                  Paperless Field Audits. <span className="text-[var(--brand-primary)]">Guaranteed Proof.</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Replace paper clipboards with digital inspection protocols. Capture geotagged photos, collect verified e-signatures, and generate audit-ready compliance certificates in seconds.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Button
                    variant="primary"
                    size="xl"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full sm:w-auto text-base shadow-[var(--shadow-glow)]"
                  >
                    <span>Book an Inspection Demo</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full sm:w-auto text-base"
                  >
                    <span>Try for Free</span>
                  </Button>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[var(--foreground-muted)] font-medium">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[var(--brand-emerald)]" />
                    <span>OSHA & ISO 55001 Compliant</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>Geotagged Photo Proof</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>Tamper-Proof Audit Hash</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Digital Inspection Simulator */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                    <div>
                      <div className="text-xs font-bold text-[var(--foreground)]">
                        OSHA Field Protocol #8491
                      </div>
                      <div className="text-[11px] text-[var(--foreground-muted)] font-mono">
                        Asset: CAT 320 Hydraulic Excavator (AM-EQ-90142)
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[var(--brand-emerald)]">
                      {passedCount}/{checklistItems.length} Passed
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
                          {item.passed ? "Pass" : "Flag Defect"}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Telemetry & E-Signature Strip */}
                  <div className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[11px] text-[var(--foreground-muted)]">
                      <span>Inspector: <strong>Dave Martinez</strong></span>
                      <span>GPS: 32.7767° N, 96.7970° W</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-[var(--border-subtle)] text-[11px] text-[var(--foreground-subtle)] font-mono">
                      <span>SIGNATURE: Verified (E-Sign Token)</span>
                      <span>HASH: 0x9B21...7FA4</span>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <span className="text-xs text-[var(--foreground-muted)]">
                      Click items above to toggle Pass / Flag
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setIsDemoModalOpen(true)}
                      className="text-xs"
                    >
                      <span>Submit Audit Record</span>
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
                Inspection & Audit Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                Designed for field simplicity. <span className="text-[var(--brand-primary)]">Built for rigorous audits.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <ClipboardCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Custom Protocol Builder</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Design dynamic inspection protocols tailored to your industry. Add conditional logic, required photos, and numeric sensor limits.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Camera className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Mandatory Photo Proof</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Require inspectors to snap high-resolution photos of critical wear areas, fluid levels, and serial plates with tamper-proof geotags.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Auto-Triggered Corrective Work Orders</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  When an inspection check fails, Asset Master automatically generates a corrective maintenance ticket and locks the equipment.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Electronic Signatures</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Capture legally binding digital signatures on mobile screens from inspectors, site supervisors, and equipment operators.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Cryptographic Ledger</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  All audit logs are stored with cryptographic hashes. No records can be secretly modified or deleted after inspection completion.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <FileCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">1-Click PDF Audit Packs</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Export branded, professional audit compliance packets complete with checklist results, photos, timestamps, and certificates.
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
                Inspections FAQ
              </p>
              <h2 className="text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                Frequently Asked Questions about Digital Inspections
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
              Ready to eliminate paper clipboards and pass audits without stress?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Schedule a live inspection demonstration customized to your safety standards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="xl"
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto text-base"
              >
                <span>Book an Inspection Demo</span>
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
