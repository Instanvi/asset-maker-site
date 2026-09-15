"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Globe,
  Lock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Code,
  Zap,
  ChevronDown,
  Server,
  Database,
  SlidersHorizontal,
  Key,
  Check,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";
import { cn } from "@/lib/utils";

interface IntegrationItem {
  id: string;
  name: string;
  category: "erp" | "mdm" | "itsm" | "sso";
  description: string;
  status: "Connected" | "Available";
  syncFrequency: string;
}

export default function IntegrationsApiPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "erp" | "mdm" | "itsm" | "sso">("all");
  const [isTestingWebhook, setIsTestingWebhook] = useState(false);
  const [webhookSent, setWebhookSent] = useState(false);

  const integrations: IntegrationItem[] = [
    {
      id: "intune",
      name: "Microsoft Intune",
      category: "mdm",
      description: "Auto-sync hardware specs, BitLocker encryption posture, and OS patches.",
      status: "Connected",
      syncFrequency: "Real-Time Webhook",
    },
    {
      id: "jamf",
      name: "Jamf Pro",
      category: "mdm",
      description: "Two-way macOS and iOS fleet inventory sync with FileVault status.",
      status: "Connected",
      syncFrequency: "Real-Time Webhook",
    },
    {
      id: "sap",
      name: "SAP S/4HANA",
      category: "erp",
      description: "Post depreciation ledger entries and capital asset reconciliations.",
      status: "Connected",
      syncFrequency: "Daily Batch Sync",
    },
    {
      id: "jira",
      name: "Jira Service Management",
      category: "itsm",
      description: "View asset custody and service history directly inside IT helpdesk tickets.",
      status: "Connected",
      syncFrequency: "Instant API Link",
    },
    {
      id: "okta",
      name: "Okta SSO & SCIM",
      category: "sso",
      description: "Automate employee user provisioning and role-based access controls.",
      status: "Connected",
      syncFrequency: "SCIM Push",
    },
    {
      id: "servicenow",
      name: "ServiceNow ITSM",
      category: "itsm",
      description: "Sync CMDB asset records and automate incident management workflows.",
      status: "Available",
      syncFrequency: "REST API Connector",
    },
  ];

  const filteredIntegrations =
    selectedCategory === "all"
      ? integrations
      : integrations.filter((i) => i.category === selectedCategory);

  const handleTestWebhook = () => {
    setIsTestingWebhook(true);
    setWebhookSent(false);
    setTimeout(() => {
      setIsTestingWebhook(false);
      setWebhookSent(true);
      setTimeout(() => setWebhookSent(false), 4000);
    }, 800);
  };

  const faqs = [
    {
      q: "Does Asset Master provide a documented public REST API?",
      a: "Yes. Asset Master offers a fully documented REST API with granular API key scopes, rate limiting protection, and OpenAPI / Swagger specifications. You can create, read, update, and delete assets, work orders, inspections, and users programmatically.",
    },
    {
      q: "What webhooks are available?",
      a: "Asset Master supports real-time HTTPS webhooks for key system events including: Asset Created, Custody Transferred, Inspection Defect Flagged, Warranty Expiring, and Work Order Completed.",
    },
    {
      q: "Can we connect our internal ERP systems like NetSuite or SAP?",
      a: "Yes. We offer pre-built connectors and custom webhook integration templates for major ERP platforms to synchronize fixed asset depreciation, purchase values, and general ledger journal entries.",
    },
    {
      q: "Is Single Sign-On (SSO) supported?",
      a: "Yes. We support SAML 2.0, OpenID Connect (OIDC), and SCIM automated user provisioning with Okta, Microsoft Entra ID (Azure AD), Google Workspace, and OneLogin.",
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
                  Enterprise Ecosystem & Developer API
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                  Connected Operations. <span className="text-[var(--brand-primary)]">Open REST API.</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Connect Asset Master seamlessly into your ERP, MDM, IT helpdesk, and SSO identity providers. Automate data sync with real-time webhooks and a developer-friendly REST API.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Button
                    variant="primary"
                    size="xl"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full sm:w-auto text-base shadow-[var(--shadow-glow)]"
                  >
                    <span>Explore Integrations</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full sm:w-auto text-base"
                  >
                    <span>View API Documentation</span>
                  </Button>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[var(--foreground-muted)] font-medium">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[var(--brand-emerald)]" />
                    <span>Real-Time HTTPS Webhooks</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>SAML 2.0 & SCIM Provisioning</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Code className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>OpenAPI / Swagger Specs</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive API & Webhook Studio */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-[var(--brand-primary)]" />
                      <span className="text-xs font-bold text-[var(--foreground)]">
                        REST API & Webhook Dispatcher
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[var(--brand-emerald)] font-bold">
                      200 OK • Latency: 42ms
                    </span>
                  </div>

                  {/* Simulated JSON Payload */}
                  <div className="p-3.5 rounded-lg bg-slate-950 text-slate-200 font-mono text-xs space-y-1 overflow-x-auto border border-slate-800">
                    <div className="text-slate-500">// POST /api/v1/webhooks/asset.transfer</div>
                    <div className="text-cyan-400">&#123;</div>
                    <div className="pl-4 text-emerald-400">"event": <span className="text-amber-300">"asset.custody_transferred"</span>,</div>
                    <div className="pl-4 text-emerald-400">"asset_tag": <span className="text-amber-300">"AM-EQ-90142"</span>,</div>
                    <div className="pl-4 text-emerald-400">"previous_custodian": <span className="text-amber-300">"Marcus Vance"</span>,</div>
                    <div className="pl-4 text-emerald-400">"new_custodian": <span className="text-amber-300">"Dave Martinez"</span>,</div>
                    <div className="pl-4 text-emerald-400">"gps_coordinates": <span className="text-amber-300">"32.7767° N, 96.7970° W"</span>,</div>
                    <div className="pl-4 text-emerald-400">"verified_hash": <span className="text-amber-300">"0x8F92...B31A"</span></div>
                    <div className="text-cyan-400">&#125;</div>
                  </div>

                  {webhookSent && (
                    <div className="p-2.5 rounded-md bg-[var(--brand-emerald-light)] border border-[var(--brand-emerald)]/30 text-xs font-bold text-[var(--brand-emerald)] text-center animate-in fade-in-0 duration-150">
                      Webhook event dispatched successfully to 5 subscribed endpoints!
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-[var(--foreground-muted)]">
                      Instant delivery to Zapier, Jira, SAP & Slack
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleTestWebhook}
                      className="text-xs"
                    >
                      <RefreshCw className={cn("h-3.5 w-3.5", isTestingWebhook && "animate-spin")} />
                      <span>Test Webhook Dispatch</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. INTEGRATION DIRECTORY ─── */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2.5">
                Ecosystem Directory
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                Pre-built connectors for your <span className="text-[var(--brand-primary)]">entire tech stack.</span>
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
              {(
                [
                  { id: "all", label: "All Integrations" },
                  { id: "mdm", label: "MDM & Endpoint" },
                  { id: "erp", label: "ERP & Finance" },
                  { id: "itsm", label: "IT Helpdesk & ITSM" },
                  { id: "sso", label: "Identity & SSO" },
                ] as const
              ).map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer select-none",
                    selectedCategory === cat.id
                      ? "bg-[var(--brand-primary-light)] text-[var(--brand-primary)] border-[var(--brand-primary)]/40 shadow-xs"
                      : "bg-[var(--surface)] text-[var(--foreground-muted)] border-[var(--border-custom)] hover:bg-white"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {filteredIntegrations.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3 hover:border-[var(--brand-primary)] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                      <Layers className="h-5 w-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border border-[var(--brand-emerald)]/20">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--foreground)]">{item.name}</h3>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] text-[var(--foreground-subtle)] font-mono">
                    Sync Mode: {item.syncFrequency}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. FAQ ACCORDION ─── */}
        <section className="py-20 bg-[var(--surface)] border-t border-[var(--border-custom)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2.5">
                API & Integrations FAQ
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

        {/* ─── 4. CTA BANNER ─── */}
        <section className="py-16 bg-[var(--surface-dark)] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to connect Asset Master with your existing software stack?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Our solutions engineering team will help you configure custom webhooks, ERP connectors, and SSO.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="xl"
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto text-base"
              >
                <span>Book an Architecture Walkthrough</span>
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
