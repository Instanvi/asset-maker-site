"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HardHat,
  Box,
  GraduationCap,
  Stethoscope,
  Warehouse,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Clock,
  Sparkles,
  Users,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";
import { cn } from "@/lib/utils";

export default function IndustriesOverviewPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const industries = [
    {
      id: "construction",
      category: "field",
      title: "Construction & Field Crews",
      tagline: "Tool Cribs, Trailers & Heavy Equipment",
      description:
        "Stop tool hoarding across active project sites. Check gear in/out with mobile QR scans, track inter-site transfers, and enforce OSHA pre-shift walkarounds.",
      href: "/industries/construction",
      image: "/images/Barcodescanner.jpeg",
      icon: <HardHat className="h-6 w-6 text-[var(--brand-primary)]" />,
      kpi: "$140K+",
      kpiLabel: "Avg annual tool loss prevented",
      highlights: [
        "Mobile QR Tool Crib Check-Out",
        "Inter-Jobsite Transfer Audits with GPS",
        "Heavy Equipment OSHA Safety Checklists",
        "Anodized Metal Barcode Tags",
      ],
    },
    {
      id: "it",
      category: "enterprise",
      title: "IT & Facilities Management",
      tagline: "Endpoints, Mechanicals & SOC 2 Security",
      description:
        "Track remote employee laptops, Jamf/Intune MDM sync, office monitors, server racks, backup generators, and building HVAC preventative maintenance.",
      href: "/industries/it-facilities",
      image: "/images/personOffice.jpg",
      icon: <Box className="h-6 w-6 text-[var(--brand-primary)]" />,
      kpi: "100%",
      kpiLabel: "SOC 2 & ISO audit traceability",
      highlights: [
        "Jamf & Microsoft Intune Real-Time Sync",
        "Remote Offboarding Prepaid Return Labels",
        "HVAC, Power & Elevator CMMS Work Orders",
        "Hardware 3-Year Depreciation Ledger",
      ],
    },
    {
      id: "education",
      category: "public",
      title: "K-12 & Higher Education",
      tagline: "1:1 Chromebooks, iPads & STEM Labs",
      description:
        "Streamline mass fall device distribution to students, track robotics kits and science lab microscopes, collect repair fees, and pass federal grant audits.",
      href: "/industries/education",
      image: "/images/consulting-team.jpg",
      icon: <GraduationCap className="h-6 w-6 text-[var(--brand-primary)]" />,
      kpi: "1,200+",
      kpiLabel: "Student devices checked out/hr",
      highlights: [
        "High-Speed 1:1 Student Deployments",
        "Google Workspace & Clever SIS Sync",
        "Title I & E-Rate Grant Compliance",
        "Damage Incident & Fee Invoicing",
      ],
    },
    {
      id: "healthcare",
      category: "public",
      title: "Healthcare & Biomedical",
      tagline: "Mobile Clinical Assets & JCAHO Calibrations",
      badge: "Joint Commission Ready",
      description:
        "Locate portable ultrasound, ventilators, and infusion pumps in seconds across hospital floors. Automate biomedical calibrations and FDA electrical safety logs.",
      href: "/industries/healthcare",
      image: "/images/complaince.jpg",
      icon: <Stethoscope className="h-6 w-6 text-[var(--brand-primary)]" />,
      kpi: "< 15s",
      kpiLabel: "Avg emergency asset find time",
      highlights: [
        "Mobile Clinical Equipment Wing Locator",
        "BioMed Preventative Calibrations",
        "Joint Commission (JCAHO) Audit Trail",
        "Cleanroom Sterilization Tray Logs",
      ],
    },
    {
      id: "warehousing",
      category: "field",
      title: "Warehousing & Logistics",
      tagline: "RF Scanners, Forklift CMMS & Loading Bays",
      description:
        "Prevent lost Zebra/Honeywell barcode scanners with shift handovers. Track forklift runtime maintenance and log daily OSHA pre-operation inspections.",
      href: "/industries/warehousing-logistics",
      image: "/images/shipment.jpg",
      icon: <Warehouse className="h-6 w-6 text-[var(--brand-primary)]" />,
      kpi: "0%",
      kpiLabel: "Unreturned shift scanner loss",
      highlights: [
        "RF Barcode Gun Shift Check-Out",
        "Forklift Fleet Maintenance (CMMS)",
        "Loading Dock & Bay Location Tracking",
        "Multi-Facility Global Roll-Up Reports",
      ],
    },
  ];

  const filteredIndustries =
    selectedCategory === "all"
      ? industries
      : industries.filter((ind) => ind.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[var(--foreground)]">
      <Header onBookDemo={() => setIsDemoModalOpen(true)} />

      <main className="flex-1 pt-24 lg:pt-28">
        {/* ─── Hero Banner ─── */}
        <section className="relative pb-16 lg:pb-24 overflow-hidden hero-gradient-canvas border-b border-[var(--border-subtle)]">
          <div className="hero-mesh-glow" />
          <div className="hero-grid-pattern" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-3">
              Industry-Specific Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.1]">
              Engineered for Your Industry. <span className="text-[var(--brand-primary)]">Field-Ready.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
              Every industry manages physical assets differently. Discover tailored workflows built specifically for your sector's operational, compliance, and field demands.
            </p>

            {/* Quick Filter Tabs */}
            <div className="flex items-center justify-center gap-2 pt-8">
              {[
                { id: "all", label: "All Sectors" },
                { id: "field", label: "Field & Logistics" },
                { id: "enterprise", label: "Enterprise & IT" },
                { id: "public", label: "Healthcare & Education" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer select-none border",
                    selectedCategory === tab.id
                      ? "bg-[var(--surface-dark)] text-white border-[var(--surface-dark)] shadow-sm"
                      : "bg-white text-[var(--foreground-muted)] border-[var(--border-custom)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Industry Cards Grid with Visuals ─── */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredIndustries.map((ind) => (
                <div
                  key={ind.id}
                  className="rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] overflow-hidden flex flex-col justify-between hover:border-[var(--brand-primary)] hover:shadow-[var(--shadow-card)] transition-all group"
                >
                  {/* Visual Header Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100 border-b border-[var(--border-custom)]">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                      <div className="flex items-center justify-between w-full text-white">
                        <span className="text-xs font-bold tracking-wide uppercase">{ind.tagline}</span>
                        <div className="p-1.5 rounded bg-white/20 backdrop-blur-md text-white">
                          {ind.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-[var(--foreground)] tracking-tight group-hover:text-[var(--brand-primary)] transition-colors">
                          {ind.title}
                        </h3>
                      </div>

                      <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                        {ind.description}
                      </p>

                      {/* Key KPI Metric */}
                      <div className="p-3 rounded-lg bg-white border border-[var(--border-custom)] flex items-center justify-between">
                        <span className="text-xs font-medium text-[var(--foreground-muted)]">{ind.kpiLabel}</span>
                        <span className="text-sm font-extrabold text-[var(--brand-emerald)] font-mono">{ind.kpi}</span>
                      </div>

                      {/* Sector Highlights */}
                      <div className="pt-2 border-t border-[var(--border-subtle)] space-y-2">
                        {ind.highlights.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-[var(--foreground)]">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-emerald)] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]">
                      <Button
                        variant="primary"
                        href={ind.href}
                        className="w-full justify-center text-xs"
                      >
                        <span>Explore {ind.title.split(" ")[0]} Suite</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Conversion CTA ─── */}
        <section className="py-16 bg-[var(--surface-dark)] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Don't see your specific industry listed?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Asset Master's customizable fields, forms, and workflows adapt to any physical asset environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="xl"
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto text-base"
              >
                <span>Book a Custom Industry Walkthrough</span>
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

