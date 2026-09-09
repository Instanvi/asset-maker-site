"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  QrCode,
  Wrench,
  ClipboardCheck,
  Laptop,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Boxes,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";

export default function ProductsOverviewPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const productModules = [
    {
      title: "Asset Tracking & Barcode Tags",
      description: "Transform any smartphone into an enterprise scanner. Track physical equipment, tools, and fleet gear with tamper-proof chain of custody.",
      href: "/products/asset-tracking",
      icon: <QrCode className="h-6 w-6 text-[var(--brand-primary)]" />,
      features: ["Mobile Camera 1D/2D Scanning", "GPS Geotagging & Geofences", "Check-In / Check-Out Handover", "Custom QR & Barcode Tag Generator"],
    },
    {
      title: "Maintenance Management (CMMS)",
      description: "Prevent costly downtime with automated preventative maintenance schedules, mobile work orders, and spare parts inventory tracking.",
      href: "/products/maintenance-cmms",
      icon: <Wrench className="h-6 w-6 text-[var(--brand-primary)]" />,
      features: ["Calendar & Meter-Based Triggers", "Mobile Work Order Dispatch", "Downtime & MTTR Analytics", "Spare Parts Inventory Depletion"],
    },
    {
      title: "Inspections & Audit Trail",
      description: "Replace paper clipboards with digital inspection protocols. Capture geotagged photos, collect e-signatures, and generate audit-ready compliance certificates.",
      href: "/products/inspections-audit",
      icon: <ClipboardCheck className="h-6 w-6 text-[var(--brand-primary)]" />,
      features: ["Custom Protocol Form Builder", "Mandatory Geotagged Photo Proof", "Automated Defect Work Orders", "Cryptographic Audit Ledger"],
    },
    {
      title: "IT Asset Management (ITAM)",
      description: "Connect Jamf, Microsoft Intune, and your employee directory into one central ITAM cockpit for hardware, software licenses, and offboarding.",
      href: "/products/it-asset-management",
      icon: <Laptop className="h-6 w-6 text-[var(--brand-primary)]" />,
      features: ["Two-Way Jamf & Intune Sync", "Software License & SaaS Tracking", "Employee Device Offboarding", "SOC 2 & ISO 27001 Posture"],
    },
    {
      title: "Integrations & REST API",
      description: "Connect Asset Master seamlessly into your ERP (SAP, NetSuite), IT helpdesk (Jira, ServiceNow), and identity providers (Okta, Entra ID).",
      href: "/products/integrations-api",
      icon: <Layers className="h-6 w-6 text-[var(--brand-primary)]" />,
      features: ["Real-Time HTTPS Webhooks", "ERP General Ledger Sync", "Single Sign-On (SAML 2.0 & SCIM)", "Full OpenAPI / Swagger Specs"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[var(--foreground)]">
      <Header onBookDemo={() => setIsDemoModalOpen(true)} />

      <main className="flex-1 pt-24 lg:pt-28">
        {/* Header Hero */}
        <section className="relative pb-16 lg:pb-24 overflow-hidden hero-gradient-canvas border-b border-[var(--border-subtle)]">
          <div className="hero-mesh-glow" />
          <div className="hero-grid-pattern" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-3">
              Asset Master Product Suite
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.1]">
              Five Connected Products. <span className="text-[var(--brand-primary)]">One Unified Record.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
              Explore the specialized modules designed to track, inspect, maintain, and audit your entire asset ecosystem with zero spreadsheets.
            </p>
          </div>
        </section>

        {/* Product Cards Grid */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productModules.map((prod, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] p-6 sm:p-7 flex flex-col justify-between hover:border-[var(--brand-primary)] hover:shadow-[var(--shadow-card)] transition-all"
                >
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-white border border-[var(--border-custom)] w-fit shadow-xs">
                      {prod.icon}
                    </div>

                    <h3 className="text-xl font-bold text-[var(--foreground)] tracking-tight">
                      {prod.title}
                    </h3>

                    <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                      {prod.description}
                    </p>

                    <div className="pt-2 border-t border-[var(--border-subtle)] space-y-2">
                      {prod.features.map((feat, fIdx) => (
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
                      href={prod.href}
                      className="w-full justify-center text-xs"
                    >
                      <span>Explore {prod.title.split(" ")[0]}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conversion CTA */}
        <section className="py-16 bg-[var(--surface-dark)] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to see how our products work together?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Book a live walkthrough customized to your industry workflows and asset volume.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="xl"
                onClick={() => setIsDemoModalOpen(true)}
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
