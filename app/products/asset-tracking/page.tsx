"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  QrCode,
  Box,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Search,
  Filter,
  UserCheck,
  Sliders,
  Smartphone,
  Layers,
  ChevronRight,
  Sparkles,
  Lock,
  Tag,
  Clock,
  ChevronDown,
  Building,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/home/BookDemoModal";
import { cn } from "@/lib/utils";

export default function AssetTrackingPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"registry" | "scanner">("registry");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "it" | "fleet" | "tools">("all");
  const [isScanning, setIsScanning] = useState(false);
  const [scannedAssetTag, setScannedAssetTag] = useState("AM-TAG-88219");
  const [scanCount, setScanCount] = useState(412);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const demoAssets = [
    {
      id: "AM-IT-88421",
      name: "Apple MacBook Pro 16\" M3 Max",
      category: "it",
      custodian: "Sarah Jenkins (Lead Dev)",
      location: "San Francisco HQ • Floor 4",
      status: "In Use",
      bookValue: "$3,850.00",
      warranty: "Dec 2027",
    },
    {
      id: "AM-EQ-90142",
      name: "CAT 320 Hydraulic Excavator",
      category: "fleet",
      custodian: "Marcus Vance (Jobsite #4)",
      location: "Austin Site B • Sector 2",
      status: "Operational",
      bookValue: "$185,000.00",
      warranty: "Aug 2029",
    },
    {
      id: "AM-TL-30419",
      name: "Hilti TE 60-ATC Rotary Hammer",
      category: "tools",
      custodian: "Dave Martinez (Crew 3)",
      location: "Tool Crib #1 • Bay 4",
      status: "Checked Out",
      bookValue: "$1,420.00",
      warranty: "Mar 2026",
    },
  ];

  const filteredAssets = demoAssets.filter((asset) => {
    const matchesCategory = selectedCategory === "all" || asset.category === selectedCategory;
    const matchesSearch =
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.custodian.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanCount((prev) => prev + 1);
      const tags = ["AM-EQ-90142", "AM-TL-30419", "AM-IT-88421", "AM-MED-77192"];
      setScannedAssetTag(tags[Math.floor(Math.random() * tags.length)]);
    }, 700);
  };

  const faqs = [
    {
      q: "Can we scan assets using our existing employee smartphones?",
      a: "Yes. Asset Master transforms any standard iOS or Android smartphone into an enterprise-grade barcode and QR scanner using the device camera. No proprietary or expensive handheld hardware is required.",
    },
    {
      q: "What types of asset tags does Asset Master support?",
      a: "Asset Master natively supports 1D barcodes (Code 128, UPC, Code 39), 2D QR codes, DataMatrix, and UHF RFID tags. You can print tags using your existing office printers or order durable anodized aluminum tags directly through our platform.",
    },
    {
      q: "Does asset tracking work when workers are offline in remote areas?",
      a: "Yes. Our mobile application includes full offline functionality. Field crews can scan tags, run audits, and update custody without internet access. All records automatically sync to the cloud the moment connectivity is restored.",
    },
    {
      q: "How does check-in and check-out tracking work?",
      a: "Workers scan the asset's QR code or barcode tag, select the recipient or jobsite, and capture an optional electronic signature. Chain-of-custody timestamps and GPS coordinates are logged instantaneously.",
    },
    {
      q: "Can we import our existing asset spreadsheets?",
      a: "Yes. Our bulk CSV and Excel importer allows you to migrate thousands of assets, custom fields, historical values, and department mappings in under 15 minutes.",
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
                  Enterprise Physical & Digital Tracking
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                  Total Asset Visibility. <span className="text-[var(--brand-primary)]">Scanned in Seconds.</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Turn any smartphone into an enterprise scanner. Track physical equipment, tools, IT hardware, and fleet gear with tamper-proof chain of custody, GPS timestamps, and zero spreadsheets.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Button
                    variant="primary"
                    size="xl"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full sm:w-auto text-base shadow-[var(--shadow-glow)]"
                  >
                    <span>Book a Live Demo</span>
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
                    <span>Instant Smartphone Camera Scan</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>Full Offline Sync</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>&lt; 85ms Tag Read Latency</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Interactive Asset Tracking Simulator */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-[var(--border-custom)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] space-y-4">
                  {/* Mode Tabs */}
                  <div className="flex items-center justify-between gap-2 p-1 rounded-lg bg-[var(--surface-raised)] border border-[var(--border-custom)]">
                    <button
                      type="button"
                      onClick={() => setActiveTab("registry")}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-bold transition-all cursor-pointer select-none",
                        activeTab === "registry"
                          ? "bg-white text-[var(--brand-primary)] shadow-xs border border-[var(--border-custom)]"
                          : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                      )}
                    >
                      <Box className="h-3.5 w-3.5" />
                      <span>Live Asset Registry</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("scanner")}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-bold transition-all cursor-pointer select-none",
                        activeTab === "scanner"
                          ? "bg-white text-[var(--brand-primary)] shadow-xs border border-[var(--border-custom)]"
                          : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                      )}
                    >
                      <QrCode className="h-3.5 w-3.5" />
                      <span>Mobile Scanner Viewfinder</span>
                    </button>
                  </div>

                  {/* TAB 1: REGISTRY VIEW */}
                  {activeTab === "registry" && (
                    <div className="space-y-3.5 animate-in fade-in-0 duration-150">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                        <div className="relative w-full sm:w-64">
                          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-[var(--foreground-subtle)]" />
                          <input
                            type="text"
                            placeholder="Search by tag, name, user..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)]"
                          />
                        </div>

                        <div className="flex items-center gap-1 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                          {(
                            [
                              { id: "all", label: "All" },
                              { id: "it", label: "IT" },
                              { id: "fleet", label: "Fleet" },
                              { id: "tools", label: "Tools" },
                            ] as const
                          ).map((cat) => (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => setSelectedCategory(cat.id)}
                              className={cn(
                                "px-2 py-1 rounded text-xs font-bold transition-all border cursor-pointer shrink-0",
                                selectedCategory === cat.id
                                  ? "bg-[var(--brand-primary-light)] text-[var(--brand-primary)] border-[var(--brand-primary)]/40"
                                  : "bg-[var(--surface)] text-[var(--foreground-muted)] border-[var(--border-custom)] hover:bg-white"
                              )}
                            >
                              {cat.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Records Table */}
                      <div className="rounded-lg border border-[var(--border-custom)] overflow-hidden text-xs divide-y divide-[var(--border-subtle)]">
                        {filteredAssets.map((asset) => (
                          <div key={asset.id} className="p-3 bg-white hover:bg-[var(--surface)] transition-colors">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <div className="font-bold text-[var(--foreground)]">{asset.name}</div>
                                <div className="text-[11px] font-mono text-[var(--foreground-subtle)]">
                                  {asset.id} &bull; Custodian: <strong className="text-[var(--foreground)]">{asset.custodian}</strong>
                                </div>
                              </div>
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border border-[var(--brand-emerald)]/20 shrink-0">
                                {asset.status}
                              </span>
                            </div>
                            <div className="mt-2 flex items-center justify-between text-[11px] text-[var(--foreground-muted)] pt-2 border-t border-[var(--border-subtle)]">
                              <span>Location: {asset.location}</span>
                              <span className="font-bold text-[var(--foreground)]">{asset.bookValue}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 2: SCANNER VIEW */}
                  {activeTab === "scanner" && (
                    <div className="space-y-3.5 animate-in fade-in-0 duration-150">
                      <div className="relative rounded-lg bg-slate-950 p-6 text-white text-center overflow-hidden border border-slate-800">
                        {isScanning && (
                          <div className="absolute left-0 right-0 h-0.5 bg-cyan-400 scanner-laser shadow-[0_0_12px_#38bdf8] z-20" />
                        )}

                        <div className="relative z-10 my-2 mx-auto w-44 h-28 border-2 border-dashed border-cyan-400/80 rounded-lg flex flex-col items-center justify-center p-2 bg-slate-900/50">
                          <QrCode className="h-10 w-10 text-cyan-400 mb-1" />
                          <span className="text-[11px] font-mono text-cyan-300">
                            {isScanning ? "READING TAG..." : scannedAssetTag}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-400 px-2 pt-2 border-t border-slate-800">
                          <span>Latency: &lt; 75ms</span>
                          <span>Buffer: {scanCount} Scanned</span>
                          <span className="text-emerald-400 font-bold">GPS Geotagged</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-[var(--foreground-muted)]">
                          Continuous 1D/2D Barcode & QR recognition engine
                        </span>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={handleSimulateScan}
                          className="text-xs"
                        >
                          <RefreshCw className={cn("h-3.5 w-3.5", isScanning && "animate-spin")} />
                          <span>Simulate Mobile Scan</span>
                        </Button>
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
                Core Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                Everything you need to eliminate <span className="text-[var(--brand-primary)]">ghost assets and loss.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Mobile Barcode & QR Scanning</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Turn iOS and Android devices into high-speed scanners. Support for continuous batch scanning, Code 128, DataMatrix, and durable metal tags.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Check-In & Check-Out Custody</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Know exactly who has every tool, vehicle, and laptop. Capture e-signatures and timestamps for full chain-of-custody accountability.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">GPS & Geofenced Locations</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Every scan automatically logs precise GPS coordinates. Set geofenced alert perimeters around job sites, warehouses, and campuses.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Tag className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Custom Asset Tag Generator</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Generate and print custom branded barcode and QR labels on standard Zebra, Avery, or Dymo label stock in seconds.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Audit-Ready History Log</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Every change, transfer, repair, and inspection creates an immutable audit record. Complete proof ready for finance and regulators.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Unlimited Custom Fields</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Structure your registry around your specific business. Add custom dropdowns, serial numbers, warranty dates, and photo attachments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. HOW IT WORKS WORKFLOW ─── */}
        <section className="py-20 bg-[var(--surface)] border-t border-[var(--border-custom)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2.5">
                Implementation Workflow
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                From unboxing to full operational deployment in <span className="text-[var(--brand-primary)]">three steps.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-white border border-[var(--border-custom)] space-y-3">
                <span className="text-3xl font-extrabold text-[var(--brand-primary)]">01</span>
                <h4 className="text-lg font-bold text-[var(--foreground)]">Tag & Register</h4>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Affix durable QR or barcode tags to your assets and import your existing spreadsheets or scan to create records in under 30 seconds.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[var(--border-custom)] space-y-3">
                <span className="text-3xl font-extrabold text-[var(--brand-primary)]">02</span>
                <h4 className="text-lg font-bold text-[var(--foreground)]">Scan & Assign in Field</h4>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Equip crews with the mobile app. Check items out to workers, transfer gear between job sites, and log condition updates on the go.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[var(--border-custom)] space-y-3">
                <span className="text-3xl font-extrabold text-[var(--brand-primary)]">03</span>
                <h4 className="text-lg font-bold text-[var(--foreground)]">Reconcile & Audit</h4>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Run physical inventory audits in minutes. Generate 100% reconciled reports for executive leadership and external compliance auditors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. FAQ ACCORDION ─── */}
        <section className="py-20 bg-white border-t border-[var(--border-custom)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--brand-primary)] mb-2.5">
                Got Questions?
              </p>
              <h2 className="text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                Frequently Asked Questions about Asset Tracking
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] overflow-hidden transition-colors"
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
                      <div className="px-4 pb-4 pt-1 text-sm text-[var(--foreground-muted)] leading-relaxed border-t border-[var(--border-subtle)] bg-white animate-in fade-in-0 duration-150">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 5. CTA BANNER ─── */}
        <section className="py-16 bg-[var(--surface-dark)] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to take total control of your physical assets?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Join thousands of organizations worldwide that eliminate spreadsheets and streamline audits with Asset Master.
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
              <Button
                variant="outline"
                size="xl"
                onClick={() => setIsDemoModalOpen(true)}>
                <span>Start Free Trial</span>
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
