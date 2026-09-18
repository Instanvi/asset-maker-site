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
import { useTranslations } from "next-intl";
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
  const t = useTranslations("products.maintenance.page");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"workorders" | "preventative">("workorders");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([
    {
      id: t("hero.cockpit.workOrders.items.item1.id"),
      title: t("hero.cockpit.workOrders.items.item1.title"),
      asset: t("hero.cockpit.workOrders.items.item1.asset"),
      assetTag: t("hero.cockpit.workOrders.items.item1.assetTag"),
      priority: "High",
      status: "In Progress",
      assignedTo: t("hero.cockpit.workOrders.items.item1.assignedTo"),
      dueDate: t("hero.cockpit.workOrders.items.item1.dueDate"),
      estimatedCost: t("hero.cockpit.workOrders.items.item1.estimatedCost"),
    },
    {
      id: t("hero.cockpit.workOrders.items.item2.id"),
      title: t("hero.cockpit.workOrders.items.item2.title"),
      asset: t("hero.cockpit.workOrders.items.item2.asset"),
      assetTag: t("hero.cockpit.workOrders.items.item2.assetTag"),
      priority: "Medium",
      status: "Open",
      assignedTo: t("hero.cockpit.workOrders.items.item2.assignedTo"),
      dueDate: t("hero.cockpit.workOrders.items.item2.dueDate"),
      estimatedCost: t("hero.cockpit.workOrders.items.item2.estimatedCost"),
    },
    {
      id: t("hero.cockpit.workOrders.items.item3.id"),
      title: t("hero.cockpit.workOrders.items.item3.title"),
      asset: t("hero.cockpit.workOrders.items.item3.asset"),
      assetTag: t("hero.cockpit.workOrders.items.item3.assetTag"),
      priority: "High",
      status: "Completed",
      assignedTo: t("hero.cockpit.workOrders.items.item3.assignedTo"),
      dueDate: t("hero.cockpit.workOrders.items.item3.dueDate"),
      estimatedCost: t("hero.cockpit.workOrders.items.item3.estimatedCost"),
    },
  ]);

  const toggleOrderStatus = (id: string) => {
    setWorkOrders((prev) =>
      prev.map((order) => {
        if (order.id === id) {
          const nextStatus =
            order.status === t("hero.cockpit.workOrders.labels.statusOpen")
              ? (t("hero.cockpit.workOrders.labels.statusInProgress") as any)
              : order.status === t("hero.cockpit.workOrders.labels.statusInProgress")
              ? (t("hero.cockpit.workOrders.labels.statusCompleted") as any)
              : (t("hero.cockpit.workOrders.labels.statusOpen") as any);
          return { ...order, status: nextStatus };
        }
        return order;
      })
    );
  };

  const faqs = [
    {
      q: t("faq.questions.q1.question"),
      a: t("faq.questions.q1.answer"),
    },
    {
      q: t("faq.questions.q2.question"),
      a: t("faq.questions.q2.answer"),
    },
    {
      q: t("faq.questions.q3.question"),
      a: t("faq.questions.q3.answer"),
    },
    {
      q: t("faq.questions.q4.question"),
      a: t("faq.questions.q4.answer"),
    },
    {
      q: t("faq.questions.q5.question"),
      a: t("faq.questions.q5.answer"),
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
                    <span>{t("hero.cta.bookDemo")}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    href="/demo"
                    className="w-full sm:w-auto text-base"
                  >
                    <span>{t("hero.cta.explorePlatform")}</span>
                  </Button>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[var(--foreground-muted)] font-medium">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[var(--brand-emerald)]" />
                    <span>{t("hero.trustBadges.autoTrigger")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{t("hero.trustBadges.partsSync")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{t("hero.trustBadges.downtime")}</span>
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
                      <span>{t("hero.cockpit.tabs.workorders")}</span>
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
                      <span>{t("hero.cockpit.tabs.preventative")}</span>
                    </button>
                  </div>

                  {/* TAB 1: WORK ORDERS */}
                  {activeTab === "workorders" && (
                    <div className="space-y-3 animate-in fade-in-0 duration-150">
                      <div className="flex items-center justify-between text-xs pb-1">
                        <span className="font-bold text-[var(--foreground)]">{t("hero.cockpit.workOrders.title")}</span>
                        <span className="text-[11px] font-mono text-[var(--brand-primary)]">{t("hero.cockpit.workOrders.clickStatus")}</span>
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
                              <span>{t("hero.cockpit.workOrders.labels.tech")} <strong>{order.assignedTo.split(" ")[0]}</strong></span>
                              <span>{t("hero.cockpit.workOrders.labels.due")} {order.dueDate}</span>
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
                          <span className="font-bold text-[var(--foreground)]">{t("hero.cockpit.preventative.schedule1.title")}</span>
                          <span className="text-[10px] font-bold text-[var(--brand-emerald)] uppercase">{t("hero.cockpit.preventative.schedule1.status")}</span>
                        </div>
                        <p className="text-[11px] text-[var(--foreground-muted)]">
                          {t("hero.cockpit.preventative.schedule1.description")}
                        </p>
                        <div className="flex items-center justify-between pt-2 border-t border-[var(--border-subtle)] text-[11px] text-[var(--foreground-subtle)]">
                          <span>{t("hero.cockpit.preventative.schedule1.nextDispatch")}</span>
                          <span>{t("hero.cockpit.preventative.schedule1.scope")}</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-lg bg-[var(--surface)] border border-[var(--border-custom)] space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[var(--foreground)]">{t("hero.cockpit.preventative.schedule2.title")}</span>
                          <span className="text-[10px] font-bold text-[var(--brand-emerald)] uppercase">{t("hero.cockpit.preventative.schedule2.status")}</span>
                        </div>
                        <p className="text-[11px] text-[var(--foreground-muted)]">
                          {t("hero.cockpit.preventative.schedule2.description")}
                        </p>
                        <div className="flex items-center justify-between pt-2 border-t border-[var(--border-subtle)] text-[11px] text-[var(--foreground-subtle)]">
                          <span>{t("hero.cockpit.preventative.schedule2.nextDispatch")}</span>
                          <span>{t("hero.cockpit.preventative.schedule2.scope")}</span>
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
                {t("capabilities.badge")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                {t("capabilities.title")} <span className="text-[var(--brand-primary)]">{t("capabilities.titleHighlight")}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.schedules.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.schedules.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.dispatch.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.dispatch.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.inventory.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.inventory.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Activity className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.analytics.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.analytics.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <DollarSign className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.tco.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.tco.description")}
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{t("capabilities.items.vendor.title")}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {t("capabilities.items.vendor.description")}
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
                <span>{t("cta.bookDemo")}</span>
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
