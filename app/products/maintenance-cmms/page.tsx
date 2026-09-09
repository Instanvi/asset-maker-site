"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Wrench,
  Calendar,
  AlertTriangle,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Plus,
  Layers,
  ChevronDown,
  DollarSign,
  Activity,
  SlidersHorizontal,
  Truck,
  FileText,
  UserCheck,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";
import { cn } from "@/lib/utils";

interface WorkOrder {
  id: string;
  title: string;
  asset: string;
  assetTag: string;
  priority: "High" | "Medium" | "Low";
  status: "Open" | "In Progress" | "Completed";
  assignedTo: string;
  dueDate: string;
  estimatedCost: string;
}

export default function MaintenanceCmmsPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"workorders" | "preventative">("workorders");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([
    {
      id: "WO-2026-904",
      title: "500-Hour Hydraulic Oil & Filter Replacement",
      asset: "CAT 320 Hydraulic Excavator",
      assetTag: "AM-EQ-90142",
      priority: "High",
      status: "In Progress",
      assignedTo: "Dave Martinez (Chief Mechanic)",
      dueDate: "Tomorrow, 5:00 PM",
      estimatedCost: "$420.00",
    },
    {
      id: "WO-2026-881",
      title: "Quarterly Biomedical Transducer Recalibration",
      asset: "Siemens Acuson Ultrasound Scanner",
      assetTag: "AM-MED-4091",
      priority: "Medium",
      status: "Open",
      assignedTo: "BioMed Field Engineering",
      dueDate: "In 4 Days",
      estimatedCost: "$850.00",
    },
    {
      id: "WO-2026-792",
      title: "Emergency Belt Replacement & Motor Inspection",
      asset: "Warehouse Conveyor Line #2",
      assetTag: "AM-FAC-1102",
      priority: "High",
      status: "Completed",
      assignedTo: "Marcus Vance",
      dueDate: "Yesterday",
      estimatedCost: "$1,250.00",
    },
  ]);

  const toggleOrderStatus = (id: string) => {
    setWorkOrders((prev) =>
      prev.map((order) => {
        if (order.id === id) {
          const nextStatus =
            order.status === "Open"
              ? "In Progress"
              : order.status === "In Progress"
              ? "Completed"
              : "Open";
          return { ...order, status: nextStatus };
        }
        return order;
      })
    );
  };

  const faqs = [
    {
      q: "What is CMMS and why do asset-heavy teams need it?",
      a: "A Computerized Maintenance Management System (CMMS) centralizes maintenance schedules, work orders, service histories, and technician assignments. It helps organizations prevent costly unplanned downtime, extend equipment lifespan, and prove safety compliance.",
    },
    {
      q: "Can preventative maintenance schedules trigger automatically?",
      a: "Yes. Asset Master supports both calendar-based triggers (e.g. every 90 days) and meter/usage-based triggers (e.g. every 500 operating hours or 10,000 miles). Work orders are automatically created and dispatched to technicians.",
    },
    {
      q: "Can field technicians update work orders from their mobile phones?",
      a: "Yes. Technicians can scan the asset's QR code on-site, view service manuals, log parts used, attach photos of completed repairs, capture supervisor signatures, and close tickets directly on mobile.",
    },
    {
      q: "How does Asset Master track spare parts and replacement inventory?",
      a: "Every work order allows technicians to deduct spare parts from inventory. Minimum threshold alerts automatically notify purchasing when critical replacement items run low.",
    },
    {
      q: "Can we track total cost of ownership (TCO) and maintenance ROI?",
      a: "Yes. Asset Master logs all labor hours, parts costs, and vendor invoices against the master asset record, giving you an exact real-time TCO and residual book value.",
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
              <span className="text-[var(--brand-primary)] font-bold">Maintenance (CMMS)</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column Copy */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--brand-primary)]">
                  Preventative Maintenance & CMMS Platform
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                  Stop Breakdowns Before They Happen. <span className="text-[var(--brand-primary)]">Automate CMMS.</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Schedule preventative service, dispatch mobile work orders, track spare parts, and capture full repair histories. Cut equipment downtime by up to 38% with automated maintenance workflows.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Button
                    variant="primary"
                    size="xl"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full sm:w-auto text-base shadow-[var(--shadow-glow)]"
                  >
                    <span>Book a CMMS Demo</span>
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
                    <span>Auto-Triggered Work Orders</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>Spare Parts Inventory Sync</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>-38% Equipment Downtime</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Work Order & CMMS Studio */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] space-y-4">
                  {/* Selector Tabs */}
                  <div className="flex items-center justify-between gap-2 p-1 rounded-lg bg-[var(--surface-raised)] border border-[var(--border-custom)]">
                    <button
                      type="button"
                      onClick={() => setActiveTab("workorders")}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-bold transition-all cursor-pointer select-none",
                        activeTab === "workorders"
                          ? "bg-white text-[var(--brand-primary)] shadow-xs border border-[var(--border-custom)]"
                          : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                      )}
                    >
                      <Wrench className="h-3.5 w-3.5" />
                      <span>Live Work Orders</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("preventative")}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-bold transition-all cursor-pointer select-none",
                        activeTab === "preventative"
                          ? "bg-white text-[var(--brand-primary)] shadow-xs border border-[var(--border-custom)]"
                          : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                      )}
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Preventative Schedules</span>
                    </button>
                  </div>

                  {/* TAB 1: WORK ORDERS */}
                  {activeTab === "workorders" && (
                    <div className="space-y-3 animate-in fade-in-0 duration-150">
                      <div className="flex items-center justify-between text-xs pb-1">
                        <span className="font-bold text-[var(--foreground)]">Active Work Order Queue</span>
                        <span className="text-[11px] font-mono text-[var(--brand-primary)]">Click status to cycle</span>
                      </div>

                      <div className="space-y-2.5">
                        {workOrders.map((order) => (
                          <div
                            key={order.id}
                            className="p-3.5 rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] hover:bg-white transition-all text-xs space-y-2"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <div className="font-bold text-[var(--foreground)]">{order.title}</div>
                                <div className="text-[11px] text-[var(--foreground-muted)] font-mono">
                                  {order.id} &bull; {order.asset} ({order.assetTag})
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => toggleOrderStatus(order.id)}
                                className={cn(
                                  "px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider cursor-pointer border select-none shrink-0 transition-all",
                                  order.status === "Completed"
                                    ? "bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border-[var(--brand-emerald)]/30"
                                    : order.status === "In Progress"
                                    ? "bg-blue-50 text-[var(--brand-primary)] border-[var(--brand-primary)]/30"
                                    : "bg-amber-50 text-amber-700 border-amber-200"
                                )}
                              >
                                {order.status}
                              </button>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-[var(--border-subtle)] text-[11px] text-[var(--foreground-muted)]">
                              <span>Tech: <strong>{order.assignedTo.split(" ")[0]}</strong></span>
                              <span>Due: {order.dueDate}</span>
                              <span className="font-bold text-[var(--foreground)]">{order.estimatedCost}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 2: PREVENTATIVE SCHEDULES */}
                  {activeTab === "preventative" && (
                    <div className="space-y-3.5 animate-in fade-in-0 duration-150 text-xs">
                      <div className="p-3.5 rounded-lg bg-[var(--surface)] border border-[var(--border-custom)] space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[var(--foreground)]">Heavy Fleet 90-Day Inspection</span>
                          <span className="text-[10px] font-bold text-[var(--brand-emerald)] uppercase">Active Rule</span>
                        </div>
                        <p className="text-[11px] text-[var(--foreground-muted)]">
                          Trigger every 90 calendar days or 500 runtime hours. Auto-generates work order for certified mechanic.
                        </p>
                        <div className="flex items-center justify-between pt-2 border-t border-[var(--border-subtle)] text-[11px] text-[var(--foreground-subtle)]">
                          <span>Next Dispatch: Nov 15, 2026</span>
                          <span>Scope: 14 Excavators & Cranes</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-lg bg-[var(--surface)] border border-[var(--border-custom)] space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[var(--foreground)]">Biomedical Calibration Routine</span>
                          <span className="text-[10px] font-bold text-[var(--brand-emerald)] uppercase">Active Rule</span>
                        </div>
                        <p className="text-[11px] text-[var(--foreground-muted)]">
                          Annual hospital calibration check compliant with Joint Commission standards.
                        </p>
                        <div className="flex items-center justify-between pt-2 border-t border-[var(--border-subtle)] text-[11px] text-[var(--foreground-subtle)]">
                          <span>Next Dispatch: Dec 01, 2026</span>
                          <span>Scope: 82 Diagnostic Devices</span>
                        </div>
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
                CMMS Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                Built to keep critical machinery <span className="text-[var(--brand-primary)]">running at peak efficiency.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Automated Service Schedules</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Set recurring calendar or usage-based maintenance triggers. Prevent missed oil changes, calibration dates, and safety checks.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Mobile Work Order Dispatch</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Dispatch tickets directly to technicians' mobile apps. Technicians log hours, attach photos of repairs, and close tickets on site.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Spare Parts Inventory</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Track spare parts used per repair. Set low-stock alerts and maintain automatic replenishment reorder points.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Activity className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Downtime & MTTR Analytics</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Measure Mean Time to Repair (MTTR) and Mean Time Between Failures (MTBF). Identify problematic equipment before major failures occur.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <DollarSign className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Total Cost of Ownership (TCO)</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Calculate cumulative repair costs vs. replacement value. Make informed data-backed decisions on when to repair or retire assets.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Vendor & Warranty Management</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Track third-party service provider contracts, SLAs, and warranty terms. Avoid paying out-of-pocket for warranty-covered repairs.
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
                Maintenance FAQ
              </p>
              <h2 className="text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                Frequently Asked Questions about CMMS
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
              Ready to automate your maintenance and eliminate downtime?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Schedule a personalized walkthrough of the Asset Master CMMS platform today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="xl"
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto text-base"
              >
                <span>Schedule a 1-on-1 Demo</span>
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
