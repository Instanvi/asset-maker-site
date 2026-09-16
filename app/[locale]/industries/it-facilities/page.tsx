"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Building,
  Laptop,
  Lock,
  Wrench,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  UserCheck,
  ChevronDown,
  Layers,
  Thermometer,
  Zap,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";
import { cn } from "@/lib/utils";

export default function ItFacilitiesIndustryPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"it" | "facilities">("it");

  const itDevices = [
    { id: "AM-MAC-991", name: "Apple MacBook Pro 16\" M3", custodian: "Sarah Jenkins", dept: "Engineering", status: "MDM Synced", encryption: "FileVault Active" },
    { id: "AM-DSK-410", name: "Dell UltraSharp 32\" 4K Monitor", custodian: "Design Studio A", dept: "Product Design", status: "Assigned", encryption: "Asset Tagged" },
    { id: "AM-SRV-102", name: "Dell PowerEdge R750 Server", custodian: "Server Room 2", dept: "Infrastructure", status: "Operational", encryption: "Encrypted" },
  ];

  const facilityAssets = [
    { id: "AM-HVAC-01", name: "Trane Rooftop HVAC Unit #4", custodian: "Facilities Team", dept: "HQ Building", status: "Filter Due (5d)", encryption: "Quarterly CMMS" },
    { id: "AM-UPS-201", name: "APC Symmetra 16kVA Backup UPS", custodian: "Datacenter", dept: "Electrical", status: "Battery 98%", encryption: "Calibrated" },
    { id: "AM-GEN-002", name: "Cummins 250kW Emergency Generator", custodian: "Building Ops", dept: "Facilities", status: "Monthly Test Passed", encryption: "Compliant" },
  ];

  const faqs = [
    {
      q: "How does Asset Master bridge IT asset management and facilities operations?",
      a: "Asset Master gives both IT and Facilities teams a unified single pane of glass. IT manages laptops, monitors, software licenses, and MDM posture, while Facilities manages HVAC, backup power, security systems, and preventative maintenance schedules.",
    },
    {
      q: "Can we track remote worker equipment and automate retrieval during departures?",
      a: "Yes. Asset Master tracks hardware bundles assigned to remote employees and provides automated offboarding checklists with pre-paid return shipping label generation.",
    },
    {
      q: "How does the system support SOC 2 and ISO 27001 facilities audits?",
      a: "Asset Master maintains immutable logs of physical access hardware, server room assets, maintenance schedules, and device encryption compliance required by compliance auditors.",
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
                  Unified Endpoint & Building Operations
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                  From Staff Laptops to <span className="text-[var(--brand-primary)]">Facility Systems.</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Track employee laptops, monitors, software licenses, and building mechanical systems in one unified ledger. Eliminate lost hardware during offboarding and automate building maintenance schedules.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Button
                    variant="primary"
                    size="xl"
                    href="/demo"
                    className="w-full sm:w-auto text-base shadow-[var(--shadow-glow)]"
                  >
                    <span>Book an IT & Facilities Demo</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[var(--foreground-muted)] font-medium">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[var(--brand-emerald)]" />
                    <span>Jamf & Intune Auto-Sync</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>HVAC & Mechanical CMMS</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>SOC 2 Type II Certified</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive IT & Facilities Cockpit */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] space-y-4">
                  {/* Selector Tabs */}
                  <div className="flex items-center justify-between gap-2 p-1 rounded-lg bg-[var(--surface-raised)] border border-[var(--border-custom)]">
                    <button
                      type="button"
                      onClick={() => setActiveTab("it")}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-bold transition-all cursor-pointer select-none",
                        activeTab === "it"
                          ? "bg-white text-[var(--brand-primary)] shadow-xs border border-[var(--border-custom)]"
                          : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                      )}
                    >
                      <Laptop className="h-3.5 w-3.5" />
                      <span>IT Hardware Fleet</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("facilities")}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-bold transition-all cursor-pointer select-none",
                        activeTab === "facilities"
                          ? "bg-white text-[var(--brand-primary)] shadow-xs border border-[var(--border-custom)]"
                          : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                      )}
                    >
                      <Building className="h-3.5 w-3.5" />
                      <span>Facility Mechanicals</span>
                    </button>
                  </div>

                  {/* List View */}
                  <div className="space-y-2.5">
                    {(activeTab === "it" ? itDevices : facilityAssets).map((item) => (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] hover:bg-white transition-all text-xs space-y-1.5"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="font-bold text-[var(--foreground)]">{item.name}</div>
                            <div className="text-[11px] font-mono text-[var(--foreground-subtle)]">
                              {item.id} &bull; {item.custodian} ({item.dept})
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border border-[var(--brand-emerald)]/20 shrink-0">
                            {item.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[var(--foreground-muted)] pt-1 border-t border-[var(--border-subtle)]">
                          <span>Security: <strong>{item.encryption}</strong></span>
                          <span className="text-[var(--brand-primary)] font-semibold">Active Record</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-[var(--foreground-muted)]">
                      Real-time sync with Jamf, Intune & building CMMS
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      href="/demo"
                      className="text-xs"
                    >
                      <span>Simulate Handover</span>
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
                Key IT & Facilities Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                Complete control over physical <span className="text-[var(--brand-primary)]">workplaces and hardware.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Laptop className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Automated MDM Synchronization</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Real-time two-way synchronization with Microsoft Intune and Jamf Pro. Automatically pulls device serials, OS patches, and FileVault disk encryption.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Staff Onboarding & Offboarding</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Assign device bundles to new hires with digital signatures. Run automated recovery checklists and pre-paid return labels when employees leave.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Building className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">HVAC & Mechanical Maintenance</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Schedule preventative filter changes, generator load tests, and elevator inspections with automated recurring work orders.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">SOC 2 & ISO 27001 Readiness</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Export complete tamper-proof chain of custody records and device encryption proof for annual security compliance audits.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Helpdesk Ticketing Integrations</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Connect with Jira Service Management, ServiceNow, and Zendesk. Helpdesk technicians view full device history inside support tickets.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Hardware Depreciation & E-Waste</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Calculate straight-line 3-year IT depreciation. Log certified electronic waste disposal and data erasure certificates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. ENTERPRISE CASE STUDY & VISUAL SHOWCASE ─── */}
        <section className="py-20 bg-white border-t border-[var(--border-custom)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] p-8 sm:p-10 lg:p-12 shadow-[var(--shadow-card)]">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] text-xs font-bold border border-[var(--brand-emerald)]/20">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Global Tech Case Study &bull; CloudScale Networks</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                    "We automated 1,400+ remote employee device handoffs and passed our SOC 2 Type II audit with zero findings."
                  </h3>

                  <p className="text-base text-[var(--foreground-muted)] leading-relaxed">
                    "Asset Master eliminated the disconnect between our Jamf MDM data and physical hardware storage. When remote engineers depart, pre-paid return kits are dispatched automatically and laptop custody records stay immutable."
                  </p>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[var(--brand-primary)]">
                      <Image
                        src="/images/avatar-2.jpg"
                        alt="Elena Rostova"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)]">Elena Rostova</div>
                      <div className="text-xs text-[var(--foreground-muted)]">Head of Global IT & Workplace Operations</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative h-72 w-full rounded-xl overflow-hidden border border-[var(--border-custom)] shadow-md group">
                    <Image
                      src="/images/personOffice.jpg"
                      alt="Modern IT and workplace facility management"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white text-xs font-bold">
                        Unified endpoint security and building operations ledger
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
                IT & Facilities FAQ
              </p>
              <h2 className="text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                Frequently Asked Questions
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

        <section className="py-16 bg-[var(--surface-dark)] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to unify your IT hardware and building facilities?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Schedule a personalized walkthrough of the Asset Master platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="xl"
                href="/demo"
                className="w-full sm:w-auto text-base"
              >
                <span>Book a Live Demo</span>
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
