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
import { useTranslations } from "next-intl";
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
  const t = useTranslations("products.integrationsApi.page");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "erp" | "mdm" | "itsm" | "sso">("all");
  const [isTestingWebhook, setIsTestingWebhook] = useState(false);
  const [webhookSent, setWebhookSent] = useState(false);

  const integrations: IntegrationItem[] = [
    {
      id: "intune",
      name: t("integrationDirectory.items.intune.name"),
      category: "mdm",
      description: t("integrationDirectory.items.intune.description"),
      status: "Connected",
      syncFrequency: t("integrationDirectory.items.intune.syncFrequency"),
    },
    {
      id: "jamf",
      name: t("integrationDirectory.items.jamf.name"),
      category: "mdm",
      description: t("integrationDirectory.items.jamf.description"),
      status: "Connected",
      syncFrequency: t("integrationDirectory.items.jamf.syncFrequency"),
    },
    {
      id: "sap",
      name: t("integrationDirectory.items.sap.name"),
      category: "erp",
      description: t("integrationDirectory.items.sap.description"),
      status: "Connected",
      syncFrequency: t("integrationDirectory.items.sap.syncFrequency"),
    },
    {
      id: "jira",
      name: t("integrationDirectory.items.jira.name"),
      category: "itsm",
      description: t("integrationDirectory.items.jira.description"),
      status: "Connected",
      syncFrequency: t("integrationDirectory.items.jira.syncFrequency"),
    },
    {
      id: "okta",
      name: t("integrationDirectory.items.okta.name"),
      category: "sso",
      description: t("integrationDirectory.items.okta.description"),
      status: "Connected",
      syncFrequency: t("integrationDirectory.items.okta.syncFrequency"),
    },
    {
      id: "servicenow",
      name: t("integrationDirectory.items.servicenow.name"),
      category: "itsm",
      description: t("integrationDirectory.items.servicenow.description"),
      status: "Available",
      syncFrequency: t("integrationDirectory.items.servicenow.syncFrequency"),
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
      q: t("faq.items.0.q"),
      a: t("faq.items.0.a"),
    },
    {
      q: t("faq.items.1.q"),
      a: t("faq.items.1.a"),
    },
    {
      q: t("faq.items.2.q"),
      a: t("faq.items.2.a"),
    },
    {
      q: t("faq.items.3.q"),
      a: t("faq.items.3.a"),
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
                  {t("hero.badge")}
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                  {t("hero.title")} <span className="text-[var(--brand-primary)]">{t("hero.titleHighlight")}</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  {t("hero.description")}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Button
                    variant="primary"
                    size="xl"
                    href="/demo"
                    className="w-full sm:w-auto text-base shadow-[var(--shadow-glow)]"
                  >
                    <span>{t("hero.cta.primary")}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    href="/demo"
                    className="w-full sm:w-auto text-base"
                  >
                    <span>{t("hero.cta.secondary")}</span>
                  </Button>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[var(--foreground-muted)] font-medium">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[var(--brand-emerald)]" />
                    <span>{t("hero.trustBadges.webhooks")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{t("hero.trustBadges.saml")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Code className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{t("hero.trustBadges.openapi")}</span>
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
                        {t("hero.apiStudio.title")}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[var(--brand-emerald)] font-bold">
                      {t("hero.apiStudio.status")}
                    </span>
                  </div>

                  {/* Simulated JSON Payload */}
                  <div className="p-3.5 rounded-lg bg-slate-950 text-slate-200 font-mono text-xs space-y-1 overflow-x-auto border border-slate-800">
                    <div className="text-slate-500">{t("hero.apiStudio.comment")}</div>
                    <div className="text-cyan-400">&#123;</div>
                    <div className="pl-4 text-emerald-400">"event": <span className="text-amber-300">"{t("hero.apiStudio.fields.event")}"</span>,</div>
                    <div className="pl-4 text-emerald-400">"asset_tag": <span className="text-amber-300">"{t("hero.apiStudio.fields.assetTag")}"</span>,</div>
                    <div className="pl-4 text-emerald-400">"previous_custodian": <span className="text-amber-300">"{t("hero.apiStudio.fields.previousCustodian")}"</span>,</div>
                    <div className="pl-4 text-emerald-400">"new_custodian": <span className="text-amber-300">"{t("hero.apiStudio.fields.newCustodian")}"</span>,</div>
                    <div className="pl-4 text-emerald-400">"gps_coordinates": <span className="text-amber-300">"{t("hero.apiStudio.fields.gpsCoordinates")}"</span>,</div>
                    <div className="pl-4 text-emerald-400">"verified_hash": <span className="text-amber-300">"{t("hero.apiStudio.fields.verifiedHash")}"</span></div>
                    <div className="text-cyan-400">&#125;</div>
                  </div>

                  {webhookSent && (
                    <div className="p-2.5 rounded-md bg-[var(--brand-emerald-light)] border border-[var(--brand-emerald)]/30 text-xs font-bold text-[var(--brand-emerald)] text-center animate-in fade-in-0 duration-150">
                      {t("hero.apiStudio.successMessage")}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-[var(--foreground-muted)]">
                      {t("hero.apiStudio.deliveryNote")}
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleTestWebhook}
                      className="text-xs"
                    >
                      <RefreshCw className={cn("h-3.5 w-3.5", isTestingWebhook && "animate-spin")} />
                      <span>{t("hero.apiStudio.testButton")}</span>
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
                {t("integrationDirectory.badge")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                {t("integrationDirectory.title")} <span className="text-[var(--brand-primary)]">{t("integrationDirectory.titleHighlight")}</span>
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
              {(
                [
                  { id: "all", label: t("integrationDirectory.categories.all") },
                  { id: "mdm", label: t("integrationDirectory.categories.mdm") },
                  { id: "erp", label: t("integrationDirectory.categories.erp") },
                  { id: "itsm", label: t("integrationDirectory.categories.itsm") },
                  { id: "sso", label: t("integrationDirectory.categories.sso") },
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
                      {item.status === "Connected" ? t("integrationDirectory.status.connected") : t("integrationDirectory.status.available")}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--foreground)]">{item.name}</h3>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] text-[var(--foreground-subtle)] font-mono">
                    {t("integrationDirectory.syncModeLabel")} {item.syncFrequency}
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
                {t("faq.badge")}
              </p>
              <h2 className="text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                {t("faq.title")}
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
              {t("cta.title")}
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="xl"
                href="/demo"
                className="w-full sm:w-auto text-base"
              >
                <span>{t("cta.button")}</span>
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
