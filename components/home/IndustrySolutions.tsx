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
  MapPin,
  Clock,
  Laptop,
  Building,
  QrCode,
  Truck,
  Activity,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface IndustrySolutionsProps {
  onBookDemo: () => void;
}

export function IndustrySolutions({ onBookDemo }: IndustrySolutionsProps) {
  const [activeTab, setActiveTab] = useState<string>("construction");

  const industriesData = {
    construction: {
      id: "construction",
      title: "Construction & Field Crews",
      tagline: "Jobsite Tool Crib & Heavy Fleet Control",
      badge: "Zero Tool Hoarding & Lost Equipment",
      description:
        "Assign power tools and survey gear to field crews with mobile QR scans. Track inter-jobsite transfers and enforce OSHA daily equipment safety walkarounds.",
      href: "/industries/construction",
      image: "/images/Barcodescanner.jpeg",
      icon: <HardHat className="h-5 w-5" />,
      features: [
        "Mobile QR & Barcode Tool Crib Check-out",
        "Inter-Jobsite Transfer Audits with GPS sign-off",
        "Mandatory OSHA Heavy Equipment Pre-Shift Checklists",
        "Anodized Aluminum Asset Tags for extreme weather",
      ],
      mockupData: {
        title: "Austin Site #4 - Heavy Equipment Ledger",
        stat: "34 Active Assets on Site",
        items: [
          { name: "CAT 320 Hydraulic Excavator", tag: "AM-CAT-320", status: "Operational", custodian: "Marcus Vance", value: "$185,000" },
          { name: "Generac 50kW Mobile Generator", tag: "AM-GEN-881", status: "In Use", custodian: "Crew #2 (Electrical)", value: "$28,400" },
          { name: "Hilti TE 3000-AVR Breaker", tag: "AM-HLT-091", status: "Checked Out", custodian: "Dave Martinez", value: "$3,200" },
        ],
      },
    },
    it: {
      id: "it",
      title: "IT & Facilities Management",
      tagline: "Unified Hardware Fleet & Building Operations",
      badge: "Jamf / Intune Two-Way Sync",
      description:
        "Manage remote employee laptop assignments, automated offboarding retrievals, server room racks, and HVAC mechanical CMMS maintenance.",
      href: "/industries/it-facilities",
      image: "/images/personOffice.jpg",
      icon: <Box className="h-5 w-5" />,
      features: [
        "Real-time Jamf Pro & Microsoft Intune sync",
        "Remote employee offboarding with prepaid return labels",
        "HVAC, elevator & backup generator CMMS work orders",
        "SOC 2 Type II & ISO 27001 chain-of-custody logs",
      ],
      mockupData: {
        title: "Enterprise IT & Datacenter Fleet",
        stat: "1,420 Enrolled Endpoints",
        items: [
          { name: "Apple MacBook Pro 16\" M3 Max", tag: "AM-MAC-991", status: "MDM Synced", custodian: "Sarah Jenkins (Eng)", value: "FileVault Active" },
          { name: "Dell PowerEdge R750 Server", tag: "AM-SRV-102", status: "Operational", custodian: "Server Room 2", value: "Encrypted" },
          { name: "Trane Rooftop HVAC Unit #4", tag: "AM-HVAC-01", status: "Filter Due (5d)", custodian: "Facilities Team", value: "Quarterly CMMS" },
        ],
      },
    },
    education: {
      id: "education",
      title: "K-12 & Higher Education",
      tagline: "High-Speed 1:1 Student Deployments",
      badge: "100% Title I & Grant Audit Ready",
      description:
        "Distribute thousands of student Chromebooks and iPads in hours. Track STEM science lab sensors, manage repair fines, and pass federal grant audits.",
      href: "/industries/education",
      image: "/images/consulting-team.jpg",
      icon: <GraduationCap className="h-5 w-5" />,
      features: [
        "Rapid 1:1 Student Chromebook rollouts & returns",
        "Google Workspace & Clever SIS sync",
        "STEM lab 3D printers, VR headsets & microscopes",
        "Damage fee logging & parent signature tracking",
      ],
      mockupData: {
        title: "Campus Device Deployment Hub",
        stat: "1,840/1,850 Laptops Issued",
        items: [
          { name: "Lenovo 300e Touch Chromebook", tag: "SCH-K12-8819", status: "Assigned", custodian: "Liam O'Connor (Gr 9)", value: "Good Condition" },
          { name: "Dell Chromebook 3110 2-in-1", tag: "SCH-K12-9901", status: "Assigned", custodian: "Emma Watson (Gr 11)", value: "Pristine" },
          { name: "Vernier LabQuest 3 STEM Kit", tag: "SCH-STEM-401", status: "In Lab", custodian: "AP Physics Lab 2", value: "Calibrated" },
        ],
      },
    },
    healthcare: {
      id: "healthcare",
      title: "Healthcare & Biomedical",
      tagline: "Mobile Clinical Equipment Locator",
      badge: "Joint Commission & FDA Ready",
      description:
        "Locate portable ultrasound, telemetry monitors, and infusion pumps in seconds across hospital wings. Automate biomedical preventative calibrations.",
      href: "/industries/healthcare",
      image: "/images/complaince.jpg",
      icon: <Stethoscope className="h-5 w-5" />,
      features: [
        "Instant room & wing locator for clinical staff",
        "Automated biomedical calibration & electrical safety logs",
        "Joint Commission (JCAHO) & FDA survey readiness",
        "Cleanroom sterilization & surgical tray tracking",
      ],
      mockupData: {
        title: "Cardiology & ICU Biomedical Ledger",
        stat: "100% Calibrations Verified",
        items: [
          { name: "Siemens Acuson Ultrasound System", tag: "AM-MED-4091", status: "Calibrated & Ready", custodian: "Suite 210 (Cardio)", value: "Valid to 2028" },
          { name: "Hamilton-C6 Mechanical Ventilator", tag: "AM-MED-9912", status: "In Active Use", custodian: "ICU Bed #4", value: "Certified" },
          { name: "Zoll X Series Defibrillator", tag: "AM-MED-5501", status: "Emergency Standby", custodian: "Trauma Bay 1", value: "Self-Test Passed" },
        ],
      },
    },
    logistics: {
      id: "logistics",
      title: "Warehousing & Logistics",
      tagline: "Distribution Dock & Fleet Asset Management",
      badge: "Zero Lost Handheld Scanners",
      description:
        "Prevent lost Zebra/Honeywell barcode scanners with shift check-ins. Automate forklift fleet CMMS, battery cycles, and OSHA dock inspections.",
      href: "/industries/warehousing-logistics",
      image: "/images/shipment.jpg",
      icon: <Warehouse className="h-5 w-5" />,
      features: [
        "Shift check-in/check-out for RF barcode guns",
        "Forklift runtime hour tracking & preventative maintenance",
        "Daily OSHA pre-operation operator walkarounds",
        "Multi-hub & regional cross-dock inventory visibility",
      ],
      mockupData: {
        title: "Outbound Hub #3 Logistics Asset Roster",
        stat: "48 Scanners Checked Out",
        items: [
          { name: "Crown C-5 5,000lb LPG Forklift", tag: "AM-FLK-102", status: "Operational", custodian: "Johnathan Brooks", value: "Battery 92%" },
          { name: "Zebra TC58 Android RF Scanner", tag: "AM-SCN-441", status: "In Use", custodian: "Shift 1 Picking Team", value: "Battery 78%" },
          { name: "Toyota Electric Pallet Jack", tag: "AM-PLT-889", status: "Inspected", custodian: "Receiving Bay #1", value: "100% Ready" },
        ],
      },
    },
  };

  const currentInd = industriesData[activeTab as keyof typeof industriesData] || industriesData.construction;

  return (
    <section id="industries" className="py-16 sm:py-20 lg:py-28 bg-white border-t border-[var(--border-custom)] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2 sm:mb-2.5">
            Built for Your Industry
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight">
            Tailored for your sector. <span className="text-[var(--brand-primary)]">Zero compromise.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[var(--foreground-muted)] leading-relaxed">
            Every sector manages physical equipment with distinct regulatory and operational rules. Discover our specialized industry workflows.
          </p>
        </div>

        {/* ─── Interactive Industry Tab Bar ─── */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 sm:pb-4 pt-1 no-scrollbar mb-8 sm:mb-10">
          {Object.values(industriesData).map((ind) => {
            const isSelected = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setActiveTab(ind.id)}
                className={cn(
                  "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-bold text-[11px] sm:text-xs lg:text-sm whitespace-nowrap transition-all cursor-pointer select-none border",
                  isSelected
                    ? "bg-[var(--surface-dark)] text-white border-[var(--surface-dark)] shadow-md scale-[1.02]"
                    : "bg-[var(--surface)] text-[var(--foreground-muted)] border-[var(--border-custom)] hover:text-[var(--foreground)] hover:bg-white"
                )}
              >
                <span className={cn("shrink-0 scale-90 sm:scale-100", isSelected ? "text-[var(--brand-primary)]" : "text-[var(--foreground-subtle)]")}>
                  {ind.icon}
                </span>
                <span className="hidden xs:inline">{ind.title.split(" ")[0]}</span>
                <span className="xs:hidden">{ind.title.split(" ")[0].slice(0, 5)}.</span>
              </button>
            );
          })}
        </div>

        {/* ─── Active Tab Content Showcase ─── */}
        <div className="rounded-lg sm:rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] p-4 sm:p-6 lg:p-8 xl:p-10 shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Left Column: Sector Details & CTAs */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-md bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] text-[10px] sm:text-xs font-bold border border-[var(--brand-emerald)]/20">
                <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span>{currentInd.badge}</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight">
                  {currentInd.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[var(--brand-primary)] mt-1">
                  {currentInd.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                {currentInd.description}
              </p>

              {/* Capability Checklist */}
              <div className="space-y-2 sm:space-y-2.5 pt-2">
                {currentInd.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold text-[var(--foreground)]">
                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--brand-emerald)] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <Link
                  href={currentInd.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-md bg-[var(--brand-primary)] text-white text-xs sm:text-sm font-bold shadow-[var(--shadow-glow)] hover:opacity-95 transition-opacity"
                >
                  <span className="hidden xs:inline">Explore {currentInd.title}</span>
                  <span className="xs:hidden">Explore Industry</span>
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Link>
                <Button
                  variant="outline"
                  size="default"
                  href="/demo"
                  className="w-full sm:w-auto text-xs sm:text-sm"
                >
                  <span>Book Live Walkthrough</span>
                </Button>
              </div>
            </div>

            {/* Right Column: Live Mockup & Telemetry Card */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-[var(--brand-primary-light)] text-[var(--brand-primary)]">
                      {currentInd.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--foreground)]">
                        {currentInd.mockupData.title}
                      </div>
                      <div className="text-[11px] text-[var(--foreground-muted)]">
                        Real-time live synchronization
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[var(--brand-emerald)] bg-[var(--brand-emerald-light)] px-2 py-0.5 rounded border border-[var(--brand-emerald)]/20">
                    {currentInd.mockupData.stat}
                  </span>
                </div>

                {/* Items in Roster */}
                <div className="space-y-2">
                  {currentInd.mockupData.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] hover:bg-white transition-all text-xs space-y-1"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-bold text-[var(--foreground)]">{item.name}</div>
                          <div className="text-[11px] font-mono text-[var(--foreground-subtle)]">
                            TAG: {item.tag} &bull; Custody: <strong className="text-[var(--foreground)]">{item.custodian}</strong>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border border-[var(--brand-emerald)]/20 shrink-0">
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[var(--foreground-muted)] pt-1 border-t border-[var(--border-subtle)]">
                        <span>Details: {item.value}</span>
                        <span className="text-[var(--brand-primary)] font-semibold">Active Tag</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom preview banner with visual asset */}
                <div className="relative h-28 w-full rounded-lg overflow-hidden border border-[var(--border-custom)] group">
                  <Image
                    src={currentInd.image}
                    alt={currentInd.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex items-end p-3">
                    <div className="text-white text-xs font-bold flex items-center justify-between w-full">
                      <span>Field-proven across 12,000+ organizations</span>
                      <Link href={currentInd.href} className="inline-flex items-center gap-1 text-[var(--brand-primary-light)] hover:underline">
                        <span>Deep Dive</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom Navigation to All Industry Pages ─── */}
        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-primary)] hover:underline"
          >
            <span>View All Industry Solutions & Compliance Frameworks</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default IndustrySolutions;

