"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Warehouse,
  Truck,
  QrCode,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Layers,
  ChevronDown,
  MapPin,
  Clock,
  Wrench,
  Activity,
  Boxes,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";
import { cn } from "@/lib/utils";

export default function WarehousingLogisticsPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedDock, setSelectedDock] = useState<"dockA" | "dockB">("dockA");

  const warehouseEquipment = {
    dockA: [
      { id: "AM-FLK-102", name: "Crown C-5 5,000lb LPG Forklift", location: "Outbound Dock #3", operator: "Johnathan Brooks", status: "Operational", battery: "92%" },
      { id: "AM-SCN-441", name: "Zebra TC58 Android RF Barcode Scanner", location: "Picking Bay #12", operator: "Shift 1 Picking Team", status: "In Use", battery: "78%" },
      { id: "AM-PLT-889", name: "Toyota Electric Walkie Pallet Jack", location: "Receiving Bay #1", operator: "Carlos Gomez", status: "Inspected", battery: "100%" },
    ],
    dockB: [
      { id: "AM-FLK-205", name: "Hyster J40XNT 3-Wheel Electric Forklift", location: "Cold Storage Bay", operator: "Night Shift Crew", status: "Operational", battery: "84%" },
      { id: "AM-SCN-509", name: "Honeywell Granit 1990i Ultra-Rugged Scanner", location: "Bulk Storage B", operator: "Inventory Auditor", status: "In Use", battery: "95%" },
      { id: "AM-WRP-003", name: "Lantech Q-300 Automatic Stretch Wrapper", location: "End-of-Line Staging", operator: "Packaging Station", status: "PM Due in 3d", battery: "Hardwired" },
    ],
  };

  const faqs = [
    {
      q: "How does Asset Master help distribution centers track mobile RF scanners and battery packs?",
      a: "Warehouse staff scan their employee badge and device QR tag at the start and end of their shift. Unreturned or misplaced barcode scanners and battery packs are immediately flagged to shift supervisors.",
    },
    {
      q: "Can we track forklift OSHA inspections and battery charging cycles?",
      a: "Yes. Forklift operators perform digital OSHA pre-shift walkaround inspections directly on mobile. Maintenance teams track battery water levels, runtime hours, and hydraulic maintenance intervals automatically.",
    },
    {
      q: "Does Asset Master support multi-facility distribution networks?",
      a: "Yes. Multi-site logistics networks can manage thousands of assets across regional fulfillment centers, cross-docks, and delivery hubs with centralized global roll-up reporting.",
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
                  Built for Distribution Centers & Logistics Hubs
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                  Forklifts, Scanners & Docks. <span className="text-[var(--brand-primary)]">Always Tracked.</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Stop losing expensive RF barcode scanners and track forklift fleet maintenance across distribution docks. Automate shift handovers, OSHA inspections, and facility equipment uptime.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Button
                    variant="primary"
                    size="xl"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full sm:w-auto text-base shadow-[var(--shadow-glow)]"
                  >
                    <span>Book a Logistics Demo</span>
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
                    <span>RF Scanner Shift Check-Out</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>Forklift OSHA Inspections</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Warehouse className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>Dock & Bay Asset Tracking</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Warehouse Dock Cockpit */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2">
                      <Warehouse className="h-4 w-4 text-[var(--brand-primary)]" />
                      <span className="text-xs font-bold text-[var(--foreground)]">
                        Distribution Dock Asset Roster
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-[var(--surface)] p-1 rounded-lg border border-[var(--border-custom)]">
                      <button
                        type="button"
                        onClick={() => setSelectedDock("dockA")}
                        className={cn(
                          "px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer select-none",
                          selectedDock === "dockA"
                            ? "bg-white text-[var(--brand-primary)] shadow-2xs border border-[var(--border-custom)]"
                            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                        )}
                      >
                        Outbound Hub
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedDock("dockB")}
                        className={cn(
                          "px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer select-none",
                          selectedDock === "dockB"
                            ? "bg-white text-[var(--brand-primary)] shadow-2xs border border-[var(--border-custom)]"
                            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                        )}
                      >
                        Inbound Dock
                      </button>
                    </div>
                  </div>

                  {/* Asset List */}
                  <div className="space-y-2.5">
                    {warehouseEquipment[selectedDock].map((item) => (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] hover:bg-white transition-all text-xs space-y-1.5"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="font-bold text-[var(--foreground)]">{item.name}</div>
                            <div className="text-[11px] font-mono text-[var(--foreground-subtle)]">
                              TAG: {item.id} &bull; Operator: <strong className="text-[var(--foreground)]">{item.operator}</strong>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border border-[var(--brand-emerald)]/20 shrink-0">
                            {item.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[var(--foreground-muted)] pt-1 border-t border-[var(--border-subtle)]">
                          <span>Bay: {item.location}</span>
                          <span>Battery / Power: <strong>{item.battery}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-[var(--foreground-muted)]">
                      Instant barcode scan to issue or return gear
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setIsDemoModalOpen(true)}
                      className="text-xs"
                    >
                      <span>Simulate Shift Checkout</span>
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
                Logistics Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                Keep warehouse operations <span className="text-[var(--brand-primary)]">moving without interruption.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <QrCode className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">RF Scanner Shift Check-Out</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Fast shift check-in and check-out for Zebra and Honeywell RF guns. Eliminate lost handheld terminals and dead battery bottlenecks.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Truck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Forklift Fleet Maintenance (CMMS)</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Automate preventative maintenance schedules for electric and LPG forklifts, reach trucks, and order pickers based on operating hours.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">OSHA Pre-Operation Checklists</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Drivers complete mobile safety walkarounds before operating heavy machinery. Flag hydraulic leaks, horn defects, or tire damage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. LOGISTICS CASE STUDY & VISUAL SHOWCASE ─── */}
        <section className="py-20 bg-white border-t border-[var(--border-custom)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] p-8 sm:p-10 lg:p-12 shadow-[var(--shadow-card)]">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] text-xs font-bold border border-[var(--brand-emerald)]/20">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Logistics Case Study &bull; SwiftHub Distribution</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                    "We eliminated scanner loss across 3 distribution hubs and reduced forklift downtime by 38%."
                  </h3>

                  <p className="text-base text-[var(--foreground-muted)] leading-relaxed">
                    "With 400+ picking staff across three shifts, barcode scanners and battery cradles used to vanish weekly. Shift check-outs on Asset Master created instant worker accountability and automated forklift runtime service."
                  </p>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[var(--brand-primary)]">
                      <Image
                        src="/images/avatar-5.jpg"
                        alt="Jackson Hayes"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)]">Jackson Hayes</div>
                      <div className="text-xs text-[var(--foreground-muted)]">Regional VP of Supply Chain & Fulfillment</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative h-72 w-full rounded-xl overflow-hidden border border-[var(--border-custom)] shadow-md group">
                    <Image
                      src="/images/shipment.jpg"
                      alt="Distribution dock and freight logistics"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white text-xs font-bold">
                        Dock asset tracking and multi-facility freight intelligence
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
                Warehousing FAQ
              </p>
              <h2 className="text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                Frequently Asked Questions for Logistics Directors
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
              Ready to take control of your warehouse and dock equipment?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Schedule a personalized walkthrough of the Asset Master logistics suite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="xl"
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto text-base"
              >
                <span>Book a Logistics Demo</span>
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
