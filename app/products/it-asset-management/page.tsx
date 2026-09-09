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
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedCustodianIdx, setSelectedCustodianIdx] = useState(0);

  const custodians: CustodianRecord[] = [
    {
      id: "EMP-1049",
      name: "Sarah Jenkins",
      role: "Lead Platform Engineer",
      dept: "Engineering",
      device: "MacBook Pro 16\" (M3 Max)",
      serial: "C02GF798MD6T",
      mdmStatus: "Jamf Pro Synced",
      encryption: "FileVault 2 Active",
      osPatch: "macOS 15.3 (Compliant)",
      licenses: ["Figma Enterprise", "GitHub Copilot", "Slack Business+", "JetBrains All Products"],
    },
    {
      id: "EMP-2081",
      name: "Marcus Vance",
      role: "Field Operations Director",
      dept: "Operations",
      device: "Lenovo ThinkPad X1 Carbon Gen 12",
      serial: "PF-388102A-LEN",
      mdmStatus: "Microsoft Intune Enrolled",
      encryption: "BitLocker AES-256 Active",
      osPatch: "Windows 11 Enterprise (Compliant)",
      licenses: ["Microsoft 365 E5", "Procore Field", "Autodesk Build", "Zoom Pro"],
    },
  ];

  const current = custodians[selectedCustodianIdx];

  const faqs = [
    {
      q: "How does Asset Master integrate with Mobile Device Management (MDM) tools?",
      a: "Asset Master natively connects with Microsoft Intune, Jamf Pro, Google Workspace MDM, and Kandji via automated APIs. Hardware specs, OS versions, disk encryption status, and serial numbers synchronize automatically without manual data entry.",
    },
    {
      q: "How does Asset Master streamline employee onboarding and offboarding?",
      a: "When a new hire starts, IT assigns device bundles with a single scan and collects digital handover signatures. During offboarding, Asset Master auto-generates return packing labels and provides a complete checklist of all assigned laptops, monitors, keys, and software licenses.",
    },
    {
      q: "Can we track software licenses and SaaS seat usage alongside hardware?",
      a: "Yes. You can manage software licenses (Figma, GitHub, Adobe, Microsoft 365) and tie them directly to individual users and devices, eliminating expensive ghost license subscriptions.",
    },
    {
      q: "Does Asset Master support SOC 2 and ISO 27001 IT compliance audits?",
      a: "Yes. Asset Master provides continuous audit readiness by logging 100% of device handoffs, MDM encryption compliance, remote wipe readiness, and certified disposal certificates.",
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
              <span className="text-[var(--brand-primary)] font-bold">IT Asset Management (ITAM)</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column Copy */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--brand-primary)]">
                  Enterprise IT Asset Management (ITAM)
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                  Hardware, MDM & Licenses. <span className="text-[var(--brand-primary)]">Unified ITAM.</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Connect Jamf, Intune, and your employee directory into one central ITAM cockpit. Manage hardware checkouts, software licenses, remote worker returns, and SOC 2 security compliance.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Button
                    variant="primary"
                    size="xl"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full sm:w-auto text-base shadow-[var(--shadow-glow)]"
                  >
                    <span>Book an ITAM Demo</span>
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
                    <span>Jamf & Intune Auto-Sync</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>Automated Offboarding Checklists</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>SOC 2 Type II Certified</span>
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
                          SERIAL: {current.serial}
                        </span>
                        <h4 className="text-base font-bold text-[var(--foreground)] mt-0.5">
                          {current.device}
                        </h4>
                        <p className="text-xs text-[var(--foreground-muted)]">
                          Assigned to {current.name} &bull; {current.role}
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
                          <span>Disk Encryption</span>
                        </div>
                        <div className="text-xs font-bold text-[var(--foreground)] mt-0.5">
                          {current.encryption}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-md bg-white border border-[var(--border-custom)]">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[var(--foreground-subtle)]">
                          <CheckCircle2 className="h-3 w-3 text-[var(--brand-primary)]" />
                          <span>OS Patch Posture</span>
                        </div>
                        <div className="text-xs font-bold text-[var(--foreground)] mt-0.5">
                          {current.osPatch}
                        </div>
                      </div>

                      <div className="col-span-2 sm:col-span-1 p-2.5 rounded-md bg-white border border-[var(--border-custom)]">
                        <div className="text-[10px] font-bold uppercase text-[var(--foreground-subtle)]">
                          Handover Signature
                        </div>
                        <div className="text-xs font-bold text-[var(--brand-emerald)] mt-0.5 flex items-center gap-1">
                          <Check className="h-3.5 w-3.5" />
                          Verified on File
                        </div>
                      </div>
                    </div>

                    {/* Active Software Licenses */}
                    <div className="pt-2 border-t border-[var(--border-subtle)]">
                      <div className="text-[10px] font-bold uppercase text-[var(--foreground-subtle)] mb-1.5">
                        Active Software License Entitlements
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
                      Instant remote check-in and auto-provisioning
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setIsDemoModalOpen(true)}
                      className="text-xs"
                    >
                      <span>Simulate IT Offboarding</span>
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
                ITAM Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                Complete hardware & software lifecycle <span className="text-[var(--brand-primary)]">in one system.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Laptop className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">MDM Auto-Sync</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Direct two-way synchronization with Microsoft Intune, Jamf Pro, and Kandji. Hardware specs, serial numbers, and OS versions update automatically.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Key className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Software License Management</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Track SaaS licenses, seats, renewal deadlines, and license keys. Reclaim unused seats during offboarding to cut wasteful software spend.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Automated Offboarding & Returns</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Prevent lost laptops during employee departures. Generate return shipping labels and track recovery across distributed and remote teams.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Security & Encryption Verification</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Verify FileVault and BitLocker encryption status on all assigned machines. Prove compliance effortlessly for SOC 2, HIPAA, and ISO 27001.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Server className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Depreciation & Asset Retirement</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Automate straight-line and MACRS depreciation for IT hardware. Track end-of-life replacement schedules and certified e-waste disposal.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">IT Service Desk Integration</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Connect with Jira Service Management, Zendesk, and ServiceNow. Technicians can view asset custody directly inside support tickets.
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
                ITAM FAQ
              </p>
              <h2 className="text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                Frequently Asked Questions about IT Asset Management
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
              Ready to unify your IT hardware and software management?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Schedule a personalized demo of the Asset Master ITAM suite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="xl"
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto text-base"
              >
                <span>Book an ITAM Demo</span>
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
