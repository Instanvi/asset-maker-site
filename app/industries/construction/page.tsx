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
  RefreshCw,
  QrCode,
  Layers,
  ChevronDown,
  AlertTriangle,
  Clock,
  UserCheck,
  DollarSign,
  Activity,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";
import { cn } from "@/lib/utils";

export default function ConstructionIndustryPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedJobsite, setSelectedJobsite] = useState<"siteA" | "siteB">("siteA");

  const jobsiteAssets = {
    siteA: [
      { id: "AM-CAT-320", name: "CAT 320 Hydraulic Excavator", category: "Heavy Fleet", custodian: "Marcus Vance", status: "Operational", value: "$185,000" },
      { id: "AM-GEN-881", name: "Generac 50kW Mobile Generator", category: "Power & Site", custodian: "Crew #2 (Electrical)", status: "In Use", value: "$28,400" },
      { id: "AM-HLT-091", name: "Hilti TE 3000-AVR Breaker", category: "Demolition Tool", custodian: "Dave Martinez", status: "Checked Out", value: "$3,200" },
    ],
    siteB: [
      { id: "AM-JLG-660", name: "JLG 660SJ Telescopic Boom Lift", category: "Aerial Lift", custodian: "Apex Steel Erectors", status: "Inspected", value: "$94,000" },
      { id: "AM-WKR-104", name: "Wacker Neuson DPU6555 Compactor", category: "Earthmoving", custodian: "Paving Division", status: "In Use", value: "$14,500" },
      { id: "AM-TRB-402", name: "Trimble R12i GNSS GPS Rover", category: "Surveying", custodian: "Civil Engineering", status: "Checked Out", value: "$26,800" },
    ],
  };

  const faqs = [
    {
      q: "How does Asset Master prevent tool hoarding and lost equipment on jobsites?",
      a: "Workers scan QR or barcode tags with their smartphones in under 3 seconds to check out tools. Superintendents and crib managers have real-time visibility into who holds every hammer drill, generator, and laser level across all active project sites.",
    },
    {
      q: "Can we track equipment movement and GPS location between different jobsites?",
      a: "Yes. Every scan records precise GPS coordinates. When heavy machinery or tool trailers move between sites, the system automatically logs transfer timestamps and updates the site inventory ledger.",
    },
    {
      q: "How do pre-shift OSHA heavy equipment inspections work?",
      a: "Equipment operators scan the machine's QR code on their phone before starting work to complete mandatory OSHA pre-shift walkaround checklists, snap condition photos, and flag hydraulic or brake defects immediately.",
    },
    {
      q: "Can subcontractors and temporary crews be assigned tools?",
      a: "Yes. You can assign temporary custody to subcontractor foremen, collect electronic sign-off signatures on mobile, and run automated return audits before project handover.",
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
              <span>Industries</span>
              <span>/</span>
              <span className="text-[var(--brand-primary)] font-bold">Construction & Field Crews</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column Copy */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--brand-primary)]">
                  Built for General Contractors & Field Crews
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                  Jobsite Asset Tracking. <span className="text-[var(--brand-primary)]">Zero Tool Loss.</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Stop losing expensive tools and heavy equipment across jobsites. Scan QR codes on any phone to check gear in or out, track transfers between job sites, and automate daily OSHA pre-shift inspections.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Button
                    variant="primary"
                    size="xl"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full sm:w-auto text-base shadow-[var(--shadow-glow)]"
                  >
                    <span>Book a Construction Demo</span>
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
                    <span>Tool Crib & Jobsite Check-Out</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>OSHA Safety Checklists</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>GPS Transfer Logs</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Jobsite Telemetry Cockpit */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2">
                      <HardHat className="h-4 w-4 text-[var(--brand-primary)]" />
                      <span className="text-xs font-bold text-[var(--foreground)]">
                        Active Jobsite Equipment Dispatch
                      </span>
                    </div>

                    {/* Jobsite Selector Switcher */}
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
                        Austin Site #4
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
                        Dallas Tower 2
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
                              TAG: {asset.id} &bull; Custody: <strong className="text-[var(--foreground)]">{asset.custodian}</strong>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border border-[var(--brand-emerald)]/20 shrink-0">
                            {asset.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[var(--foreground-muted)] pt-1 border-t border-[var(--border-subtle)]">
                          <span>Class: {asset.category}</span>
                          <span className="font-bold text-[var(--foreground)]">{asset.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-[var(--foreground-muted)]">
                      Instant mobile check-out & transfer logging
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setIsDemoModalOpen(true)}
                      className="text-xs"
                    >
                      <UserCheck className="h-3.5 w-3.5" />
                      <span>Simulate Site Transfer</span>
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
                Construction Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                Built tough for the field. <span className="text-[var(--brand-primary)]">Loved by project managers.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Tool Crib & Trailer Check-Out</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Fast QR code scanning at the tool crib. Assign equipment to individuals, crews, or subcontractors with automated return deadlines.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Inter-Jobsite Transfer Audits</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Track equipment shipments between projects. Origin superintendents sign off on release and receiving superintendents confirm delivery on mobile.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">OSHA Pre-Shift Inspections</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Mandatory pre-operation safety walkaround checklists for cranes, forklifts, and excavators. Flag safety defects before machines start.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Truck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Heavy Fleet Maintenance (CMMS)</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Schedule preventative engine service by runtime hours or calendar days. Dispatch field mechanics and track fluid changes and tire wear.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <DollarSign className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Job Costing & Allocation</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Accurately allocate equipment depreciation, rental costs, and repair expenses to specific client job numbers and cost codes.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Anodized Metal Barcode Tags</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Deploy ultra-durable anodized aluminum asset tags engineered to withstand mud, concrete dust, UV exposure, and heavy jobsite wear.
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
                    <span>Contractor Case Study &bull; Austin Commercial</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                    "We recovered over $185,000 in lost tooling across 14 simultaneous job sites in our first 6 months."
                  </h3>

                  <p className="text-base text-[var(--foreground-muted)] leading-relaxed">
                    "Before Asset Master, tool hoarding in work trucks was rampant. Now every foreman scans QR tags when tools change hands. There's complete accountability, and pre-shift OSHA inspections are 100% compliant."
                  </p>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[var(--brand-primary)]">
                      <Image
                        src="/images/avatar-1.jpg"
                        alt="Marcus Vance"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)]">Marcus Vance</div>
                      <div className="text-xs text-[var(--foreground-muted)]">Vice President of Equipment Operations, Apex Build Group</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative h-72 w-full rounded-xl overflow-hidden border border-[var(--border-custom)] shadow-md group">
                    <Image
                      src="/images/Barcodescanner.jpeg"
                      alt="Rugged jobsite barcode scanning"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white text-xs font-bold">
                        Ultra-rugged mobile scanning in concrete, mud, and dust
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
                Construction FAQ
              </p>
              <h2 className="text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                Frequently Asked Questions for Contractors
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
              Ready to eliminate tool loss and streamline your jobsites?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Schedule a personalized walkthrough of the Asset Master construction suite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="xl"
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto text-base"
              >
                <span>Book a Construction Demo</span>
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
