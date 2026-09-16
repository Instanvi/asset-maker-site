"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Laptop,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  QrCode,
  Layers,
  ChevronDown,
  UserCheck,
  BookOpen,
  FlaskConical,
  Clock,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";
import { cn } from "@/lib/utils";

export default function EducationIndustryPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [studentAssets, setStudentAssets] = useState([
    { id: "CB-2026-104", name: "Lenovo 300e Chromebook Touch", student: "Liam O'Connor (Grade 9)", tag: "SCH-K12-8819", status: "Assigned", condition: "Good" },
    { id: "CB-2026-219", name: "Dell Chromebook 3110 2-in-1", student: "Emma Watson (Grade 11)", tag: "SCH-K12-9901", status: "Assigned", condition: "Pristine" },
    { id: "LB-2026-004", name: "Vernier LabQuest 3 STEM Sensor Kit", student: "AP Physics Lab 2", tag: "SCH-STEM-401", status: "In Lab", condition: "Calibrated" },
  ]);

  const faqs = [
    {
      q: "How does Asset Master handle 1:1 student device distribution at the start of the school year?",
      a: "Staff scan the student ID barcode and device QR tag in one continuous flow, issuing hundreds of laptops per hour. Parent responsibility forms and digital signatures are logged instantaneously.",
    },
    {
      q: "Can we track device damages, repairs, and insurance fees?",
      a: "Yes. When a student brings in a broken screen or charging port, tech staff scan the tag, log the defect, and generate a repair work order with optional fine or fee billing.",
    },
    {
      q: "Does Asset Master satisfy Title I, E-Rate, and federal grant compliance?",
      a: "Yes. The platform tracks funding source tags (e.g. Title I, ESSER, E-Rate) on every device, maintaining audit-ready historical records for state and federal education auditors.",
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
                  Built for School Districts & Universities
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                  1:1 Student Devices. <span className="text-[var(--brand-primary)]">Campus-Wide Control.</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Manage student Chromebooks, iPads, STEM lab equipment, and campus facilities. Streamline annual device rollouts, track student fee balances, and ensure 100% grant audit compliance.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Button
                    variant="primary"
                    size="xl"
                    href="/demo"
                    className="w-full sm:w-auto text-base shadow-[var(--shadow-glow)]"
                  >
                    <span>Book an Education Demo</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    href="/demo"
                    className="w-full sm:w-auto text-base"
                  >
                    <span>Explore Features</span>
                  </Button>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[var(--foreground-muted)] font-medium">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[var(--brand-emerald)]" />
                    <span>High-Speed Student 1:1 Rollouts</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>Google Workspace & Clever Sync</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>Title I & Grant Compliant</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Student Device Deployment Simulator */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-[var(--brand-primary)]" />
                      <span className="text-xs font-bold text-[var(--foreground)]">
                        Campus Device Deployment Station
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[var(--brand-emerald)]">
                      Fall Rollout: 1,840/1,850 Issued
                    </span>
                  </div>

                  {/* Device List */}
                  <div className="space-y-2.5">
                    {studentAssets.map((asset) => (
                      <div
                        key={asset.id}
                        className="p-3.5 rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] hover:bg-white transition-all text-xs space-y-1.5"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="font-bold text-[var(--foreground)]">{asset.name}</div>
                            <div className="text-[11px] font-mono text-[var(--foreground-subtle)]">
                              TAG: {asset.tag} &bull; Assigned to: <strong className="text-[var(--foreground)]">{asset.student}</strong>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border border-[var(--brand-emerald)]/20 shrink-0">
                            {asset.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[var(--foreground-muted)] pt-1 border-t border-[var(--border-subtle)]">
                          <span>Condition: <strong>{asset.condition}</strong></span>
                          <span className="text-[var(--brand-primary)] font-semibold">Ready for EOY Return</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-[var(--foreground-muted)]">
                      Instant barcode scan to issue or return device
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      href="/demo"
                      className="text-xs"
                    >
                      <span>Simulate Student Checkout</span>
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
                Education Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                Designed for K-12 school districts <span className="text-[var(--brand-primary)]">and university campuses.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Laptop className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">1:1 Student Device Deployments</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Fast barcode scanning at device pickup stations. Issue thousands of student laptops per day with automated email receipts and parent agreement signoffs.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <FlaskConical className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">STEM & Science Lab Tracking</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Track specialized lab microscopes, 3D printers, VR headsets, and robotics kits across classrooms, departments, and campus buildings.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Grant & Funding Source Audits</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Tag assets by grant fund (Title I, E-Rate, ESSER, Perkins). Generate 100% compliant physical reconciliation reports for state audit boards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. DISTRICT CASE STUDY & VISUAL SHOWCASE ─── */}
        <section className="py-20 bg-white border-t border-[var(--border-custom)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] p-8 sm:p-10 lg:p-12 shadow-[var(--shadow-card)]">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] text-xs font-bold border border-[var(--brand-emerald)]/20">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>K-12 District Case Study &bull; Oakridge Unified Schools</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                    "We distributed 6,800 Chromebooks in 3 days with zero missing laptops and 100% Title I grant reconciliation."
                  </h3>

                  <p className="text-base text-[var(--foreground-muted)] leading-relaxed">
                    "Asset Master streamlined our entire fall registration checkout. Tech assistants scanned student IDs and device barcodes in under 4 seconds per student. Parent agreements were signed digitally on tablet stations."
                  </p>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[var(--brand-primary)]">
                      <Image
                        src="/images/avatar-3.jpg"
                        alt="Dr. Arthur Vance"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)]">Dr. Arthur Vance</div>
                      <div className="text-xs text-[var(--foreground-muted)]">Chief Technology Officer, Oakridge Unified District</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative h-72 w-full rounded-xl overflow-hidden border border-[var(--border-custom)] shadow-md group">
                    <Image
                      src="/images/consulting-team.jpg"
                      alt="Education technology rollout team"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white text-xs font-bold">
                        1:1 student device logistics and Title I audit readiness
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
                Education FAQ
              </p>
              <h2 className="text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                Frequently Asked Questions for Educators & IT Directors
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
              Ready to streamline student device management across your district?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Schedule a personalized walkthrough of the Asset Master education suite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="xl"
                href="/demo"
                className="w-full sm:w-auto text-base"
              >
                <span>Book an Education Demo</span>
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
