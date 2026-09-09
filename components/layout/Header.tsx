"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  ChevronDown,
  Sparkles,
  Laptop,
  Box,
  ClipboardCheck,
  Wrench,
  Truck,
  QrCode,
  FileText,
  Building2,
  Building,
  Factory,
  Stethoscope,
  GraduationCap,
  HardHat,
  HeartHandshake,
  ShieldCheck,
  Flame,
  ShieldAlert,
  PackageCheck,
  Landmark,
  Smartphone,
  Hammer,
  Gauge,
  Cog,
  FileSpreadsheet,
  Warehouse,
  Zap,
  Calculator,
  Layers,
  Tag,
  Video,
} from "lucide-react";
import Button from "@/components/ui/Button";
import MobileDrawer from "./MobileDrawer";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onBookDemo?: () => void;
}

interface MenuItem {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

interface MenuColumn {
  heading: string;
  items: MenuItem[];
}

export function Header({ onBookDemo }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuKey: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveMenu(menuKey);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const handleDemoClick = () => {
    setActiveMenu(null);
    if (onBookDemo) {
      onBookDemo();
    } else {
      const el = document.getElementById("demo");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ─── 1. Products Menu Columns ─── */
  const productsColumns: MenuColumn[] = [
    {
      heading: "Public Sector Solutions",
      items: [
        {
          title: "Local Government",
          description: "Manage assets across municipal departments and facilities.",
          href: "/#products",
          icon: <Building2 className="h-4 w-4" />,
        },
        {
          title: "Public Works",
          description: "Track road equipment, utility trucks, and field gear.",
          href: "/#products",
          icon: <Truck className="h-4 w-4" />,
        },
        {
          title: "Fire & Rescue",
          description: "Keep apparatus, turnouts, and safety tools mission-ready.",
          href: "/#products",
          icon: <Flame className="h-4 w-4" />,
        },
        {
          title: "Law Enforcement",
          description: "Chain of custody tracking for firearms, cameras, and gear.",
          href: "/#products",
          icon: <ShieldAlert className="h-4 w-4" />,
        },
      ],
    },
    {
      heading: "Education Solutions",
      items: [
        {
          title: "K-12 School Districts",
          description: "1:1 student device distribution, AV carts, and campus audits.",
          href: "/#products",
          icon: <GraduationCap className="h-4 w-4" />,
        },
        {
          title: "Higher Education & Labs",
          description: "Departmental asset checkout, research labs, and dorm gear.",
          href: "/#products",
          icon: <Landmark className="h-4 w-4" />,
        },
      ],
    },
    {
      heading: "Core Intelligence Platform",
      items: [
        {
          title: "Asset Intelligence Platform",
          description: "Six connected jobs. One complete, unified asset record.",
          href: "/#products",
          icon: <Box className="h-4 w-4" />,
        },
        {
          title: "UrsaAI Intelligence",
          description: "Turn field photos and logs into automatic condition grading.",
          href: "/#demo",
          icon: <Sparkles className="h-4 w-4" />,
        },
        {
          title: "Integrations & API",
          description: "Connect Asset Master with your MDM, ERP, and finance systems.",
          href: "/#systems",
          icon: <Layers className="h-4 w-4" />,
        },
        {
          title: "Barcode Tags & RFID",
          description: "Durable metal tags, QR codes, and high-speed scanner apps.",
          href: "/#products",
          icon: <Tag className="h-4 w-4" />,
        },
      ],
    },
  ];

  /* ─── 2. Solutions Menu Columns ─── */
  const solutionsColumns: MenuColumn[] = [
    {
      heading: "Visibility & Control",
      items: [
        {
          title: "Asset Management & Tracking",
          description: "Real-time location, ownership, and history for all assets.",
          href: "/#products",
          icon: <Box className="h-4 w-4" />,
        },
        {
          title: "Inventory & Consumables",
          description: "Track stock levels, reorder points, and spare part bins.",
          href: "/#products",
          icon: <PackageCheck className="h-4 w-4" />,
        },
        {
          title: "IT Asset Management (ITAM)",
          description: "Hardware inventory, software licenses, and device assignments.",
          href: "/#products",
          icon: <Laptop className="h-4 w-4" />,
        },
        {
          title: "Fixed Asset Accounting",
          description: "Automated straight-line depreciation and tax audit schedules.",
          href: "/#products",
          icon: <Landmark className="h-4 w-4" />,
        },
      ],
    },
    {
      heading: "Maintenance & Field Operations",
      items: [
        {
          title: "Maintenance Management (CMMS)",
          description: "Preventative schedules and work order dispatching.",
          href: "/#products",
          icon: <Wrench className="h-4 w-4" />,
        },
        {
          title: "Facilities Management",
          description: "Manage physical sites, HVAC, electrical, and shared fixtures.",
          href: "/#products",
          icon: <Building className="h-4 w-4" />,
        },
        {
          title: "Tool & Tool-Crib Tracking",
          description: "Eliminate jobsite loss with real-time phone scanning checkouts.",
          href: "/#products",
          icon: <Hammer className="h-4 w-4" />,
        },
        {
          title: "Mobile Field Audits",
          description: "Conduct rapid visual audits with any iOS or Android smartphone.",
          href: "/#products",
          icon: <Smartphone className="h-4 w-4" />,
        },
      ],
    },
    {
      heading: "Compliance & Lifecycle",
      items: [
        {
          title: "Asset Inspections & Checklists",
          description: "Digital checklists, condition grading, and required photos.",
          href: "/#products",
          icon: <ClipboardCheck className="h-4 w-4" />,
        },
        {
          title: "Calibration Management",
          description: "Ensure test instruments and biomedical tools meet tolerances.",
          href: "/#products",
          icon: <Gauge className="h-4 w-4" />,
        },
        {
          title: "Full Lifecycle Planning",
          description: "Plan capital assets from acquisition through salvage & disposal.",
          href: "/#products",
          icon: <Cog className="h-4 w-4" />,
        },
        {
          title: "Audit & Compliance Reporting",
          description: "Generate tamper-proof audit trails in seconds for regulators.",
          href: "/#products",
          icon: <ShieldCheck className="h-4 w-4" />,
        },
      ],
    },
  ];

  /* ─── 3. Who We Help Menu Columns ─── */
  const whoWeHelpColumns: MenuColumn[] = [
    {
      heading: "Public & Healthcare",
      items: [
        {
          title: "Municipal Government",
          description: "Full operational accountability across public departments.",
          href: "/#industries",
          icon: <Building2 className="h-4 w-4" />,
        },
        {
          title: "K-12 & Higher Education",
          description: "Campuses, 1:1 student laptops, audiovisual, and labs.",
          href: "/#industries",
          icon: <GraduationCap className="h-4 w-4" />,
        },
        {
          title: "Healthcare & Biomedical",
          description: "Medical equipment tracking and strict FDA/Joint Commission logs.",
          href: "/#industries",
          icon: <Stethoscope className="h-4 w-4" />,
        },
      ],
    },
    {
      heading: "Industrial & Contracting",
      items: [
        {
          title: "Construction & Contractors",
          description: "Jobsite tools, heavy machinery, and equipment checkouts.",
          href: "/#industries",
          icon: <HardHat className="h-4 w-4" />,
        },
        {
          title: "Manufacturing Plants",
          description: "Line maintenance, machine spares, and calibration logs.",
          href: "/#industries",
          icon: <Factory className="h-4 w-4" />,
        },
        {
          title: "Energy & Utilities",
          description: "Substations, pipelines, pump valves, and field tooling.",
          href: "/#industries",
          icon: <Zap className="h-4 w-4" />,
        },
      ],
    },
    {
      heading: "Logistics & Services",
      items: [
        {
          title: "Warehousing & Supply Chain",
          description: "Forklifts, scanners, bin locations, and inventory docks.",
          href: "/#industries",
          icon: <Warehouse className="h-4 w-4" />,
        },
        {
          title: "Transportation & Fleet",
          description: "Vehicles, rolling stock, aviation GSE, and port machinery.",
          href: "/#industries",
          icon: <Truck className="h-4 w-4" />,
        },
        {
          title: "MSPs & Nonprofits",
          description: "Multi-client IT management and transparent donor audits.",
          href: "/#industries",
          icon: <HeartHandshake className="h-4 w-4" />,
        },
      ],
    },
  ];

  /* ─── 4. Resources Menu Columns ─── */
  const resourcesColumns: MenuColumn[] = [
    {
      heading: "Learn & Explore",
      items: [
        {
          title: "Asset Intelligence Blog",
          description: "Best practices, compliance updates, and operational insights.",
          href: "/#why-asset-intelligence",
          icon: <FileText className="h-4 w-4" />,
        },
        {
          title: "White Papers & Playbooks",
          description: "In-depth guides on moving beyond fragile spreadsheets.",
          href: "/#why-asset-intelligence",
          icon: <FileSpreadsheet className="h-4 w-4" />,
        },
        {
          title: "Live & On-Demand Webinars",
          description: "Product walkthroughs and expert compliance sessions.",
          href: "/#demo",
          icon: <Video className="h-4 w-4" />,
        },
      ],
    },
    {
      heading: "Proof & Results",
      items: [
        {
          title: "Customer Case Studies",
          description: "See how organizations save thousands of reconciliation hours.",
          href: "/#case-studies",
          icon: <Building2 className="h-4 w-4" />,
        },
        {
          title: "Customer Success Stories",
          description: "Verified customer ROI metrics and operational outcomes.",
          href: "/#case-studies",
          icon: <Sparkles className="h-4 w-4" />,
        },
        {
          title: "Certified Partner Ecosystem",
          description: "Barcode scanners, RFID tags, and technology integrations.",
          href: "/#systems",
          icon: <Layers className="h-4 w-4" />,
        },
      ],
    },
    {
      heading: "Tools & Support",
      items: [
        {
          title: "Interactive ROI Calculator",
          description: "Calculate your team's projected annual time & cost savings.",
          href: "/#roi-calculator",
          icon: <Calculator className="h-4 w-4" />,
        },
        {
          title: "Compare Asset Master",
          description: "See how Asset Master compares to spreadsheets and legacy tools.",
          href: "/#systems",
          icon: <ClipboardCheck className="h-4 w-4" />,
        },
        {
          title: "FAQ & Video Guides",
          description: "Step-by-step videos and answers to frequent questions.",
          href: "/#faq",
          icon: <QrCode className="h-4 w-4" />,
        },
      ],
    },
  ];

  const activeColumns =
    activeMenu === "products"
      ? productsColumns
      : activeMenu === "solutions"
      ? solutionsColumns
      : activeMenu === "whoWeHelp"
      ? whoWeHelpColumns
      : activeMenu === "resources"
      ? resourcesColumns
      : null;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[var(--border-custom)] h-[var(--header-height,72px)] flex items-center transition-all"
        onMouseLeave={handleMouseLeave}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0" onClick={() => setActiveMenu(null)}>
            <span className="font-extrabold text-[var(--foreground)] text-2xl tracking-tight">
              Asset<span className="text-[var(--brand-primary)]">Master</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            <button
              type="button"
              onMouseEnter={() => handleMouseEnter("products")}
              onClick={() => setActiveMenu(activeMenu === "products" ? null : "products")}
              className={cn(
                "flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-[var(--foreground-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--surface-raised)] transition-all rounded-md cursor-pointer select-none",
                activeMenu === "products" && "text-[var(--brand-primary)] font-bold bg-[var(--surface-raised)]"
              )}
            >
              <span>Products</span>
              <ChevronDown className={cn("h-4 w-4 text-[var(--foreground-subtle)] transition-transform", activeMenu === "products" && "rotate-180 text-[var(--brand-primary)]")} />
            </button>

            <button
              type="button"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onClick={() => setActiveMenu(activeMenu === "solutions" ? null : "solutions")}
              className={cn(
                "flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-[var(--foreground-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--surface-raised)] transition-all rounded-md cursor-pointer select-none",
                activeMenu === "solutions" && "text-[var(--brand-primary)] font-bold bg-[var(--surface-raised)]"
              )}
            >
              <span>Solutions</span>
              <ChevronDown className={cn("h-4 w-4 text-[var(--foreground-subtle)] transition-transform", activeMenu === "solutions" && "rotate-180 text-[var(--brand-primary)]")} />
            </button>

            <button
              type="button"
              onMouseEnter={() => handleMouseEnter("whoWeHelp")}
              onClick={() => setActiveMenu(activeMenu === "whoWeHelp" ? null : "whoWeHelp")}
              className={cn(
                "flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-[var(--foreground-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--surface-raised)] transition-all rounded-md cursor-pointer select-none",
                activeMenu === "whoWeHelp" && "text-[var(--brand-primary)] font-bold bg-[var(--surface-raised)]"
              )}
            >
              <span>Who We Help</span>
              <ChevronDown className={cn("h-4 w-4 text-[var(--foreground-subtle)] transition-transform", activeMenu === "whoWeHelp" && "rotate-180 text-[var(--brand-primary)]")} />
            </button>

            <button
              type="button"
              onMouseEnter={() => handleMouseEnter("resources")}
              onClick={() => setActiveMenu(activeMenu === "resources" ? null : "resources")}
              className={cn(
                "flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-[var(--foreground-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--surface-raised)] transition-all rounded-md cursor-pointer select-none",
                activeMenu === "resources" && "text-[var(--brand-primary)] font-bold bg-[var(--surface-raised)]"
              )}
            >
              <span>Resources</span>
              <ChevronDown className={cn("h-4 w-4 text-[var(--foreground-subtle)] transition-transform", activeMenu === "resources" && "rotate-180 text-[var(--brand-primary)]")} />
            </button>

            <Link
              href="/#systems"
              onClick={() => setActiveMenu(null)}
              className="px-3.5 py-2 text-sm font-semibold text-[var(--foreground-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--surface-raised)] transition-all rounded-md"
            >
              Enterprise
            </Link>
            <Link
              href="/#roi-calculator"
              onClick={() => setActiveMenu(null)}
              className="px-3.5 py-2 text-sm font-semibold text-[var(--foreground-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--surface-raised)] transition-all rounded-md"
            >
              Pricing
            </Link>
          </nav>

          {/* Right Header Actions (Without Phone Number) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button
              variant="emerald"
              size="sm"
              onClick={handleDemoClick}
              className="font-bold text-xs"
            >
              Try for Free
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleDemoClick}
              className="font-bold text-xs shadow-[var(--shadow-glow)]"
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <Button
              variant="primary"
              size="sm"
              onClick={handleDemoClick}
              className="text-xs px-3"
            >
              Book Demo
            </Button>
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className="p-2 rounded-lg text-[var(--foreground)] hover:bg-[var(--surface-raised)] border border-[var(--border-custom)] cursor-pointer"
              aria-label="Open mobile menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ─── FULL-WIDTH SIMPLIFIED MEGA MENU PANEL ─── */}
        {activeMenu && activeColumns && (
          <div
            className="fixed top-[var(--header-height,72px)] left-0 right-0 w-full bg-white border-b border-[var(--border-custom)] shadow-xl z-40 animate-in fade-in-0 slide-in-from-top-1 duration-150"
            onMouseEnter={() => {
              if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-7">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {activeColumns.map((col, cIdx) => (
                  <div key={cIdx} className="space-y-3">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--foreground-subtle)] pb-2 border-b border-[var(--border-subtle)]">
                      {col.heading}
                    </div>

                    <div className="space-y-1">
                      {col.items.map((item, iIdx) => (
                        <Link
                          key={iIdx}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-[var(--surface)] border border-transparent hover:border-[var(--border-custom)] transition-all duration-150"
                        >
                          <div className="p-2 rounded-md bg-[var(--surface-raised)] text-[var(--foreground)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-colors shrink-0 mt-0.5">
                            {item.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-bold text-[var(--foreground)] group-hover:text-[var(--brand-primary)] transition-colors leading-tight mb-0.5">
                              {item.title}
                            </div>
                            <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onBookDemo={handleDemoClick}
      />
    </>
  );
}

export default Header;
