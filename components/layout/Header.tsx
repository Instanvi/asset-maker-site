"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  ChevronDown,
  Box,
  Wrench,
  Truck,
  QrCode,
  ClipboardCheck,
  Layers,
  HardHat,
  Laptop,
  GraduationCap,
  Stethoscope,
  Warehouse,
  LogIn,
} from "lucide-react";
import Button from "@/components/ui/Button";
import MobileDrawer from "./MobileDrawer";
import { LanguageSwitcher } from "./LanguageSwitcher";
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

export function Header({ onBookDemo }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuKey: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveMenu(menuKey);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), 180);
  };

  const handleDemoClick = () => {
    setActiveMenu(null);
  };

  /* Product - what the platform actually does */
  const productItems: MenuItem[] = [
    {
      title: "Asset Tracking & Tags",
      description: "QR and barcode tags, scanned from any phone to check assets in or out.",
      href: "/products/asset-tracking",
      icon: <QrCode className="h-4 w-4" />,
    },
    {
      title: "Maintenance (CMMS)",
      description: "Preventative service schedules and work orders before things break down.",
      href: "/products/maintenance-cmms",
      icon: <Wrench className="h-4 w-4" />,
    },
    {
      title: "Inspections & Audit Trail",
      description: "Digital checklists and a full history for every asset action.",
      href: "/products/inspections-audit",
      icon: <ClipboardCheck className="h-4 w-4" />,
    },
    {
      title: "IT Asset Management",
      description: "Hardware inventory, software licenses, and device assignments.",
      href: "/products/it-asset-management",
      icon: <Laptop className="h-4 w-4" />,
    },
    {
      title: "Integrations & API",
      description: "Connect with the tools your team already uses.",
      href: "/products/integrations-api",
      icon: <Layers className="h-4 w-4" />,
    },
  ];

  /* Industries - matches the industries you actually built content for */
  const industryItems: MenuItem[] = [
    {
      title: "Construction & Field Crews",
      description: "Tools and equipment that move between sites daily.",
      href: "/industries/construction",
      icon: <HardHat className="h-4 w-4" />,
    },
    {
      title: "IT & Facilities",
      description: "Devices and gear assigned to staff, with a record of every handoff.",
      href: "/industries/it-facilities",
      icon: <Box className="h-4 w-4" />,
    },
    {
      title: "Education",
      description: "Devices and shared resources checked out across a campus.",
      href: "/industries/education",
      icon: <GraduationCap className="h-4 w-4" />,
    },
    {
      title: "Healthcare",
      description: "Mobile equipment that needs to be findable in seconds.",
      href: "/industries/healthcare",
      icon: <Stethoscope className="h-4 w-4" />,
    },
    {
      title: "Warehousing & Logistics",
      description: "Forklifts, scanners, bin locations, and inventory docks.",
      href: "/industries/warehousing-logistics",
      icon: <Warehouse className="h-4 w-4" />,
    },
  ];

  const activeItems =
    activeMenu === "product" ? productItems : activeMenu === "industries" ? industryItems : null;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[var(--border-custom)] h-[var(--header-height,72px)] flex items-center transition-all"
        onMouseLeave={handleMouseLeave}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group shrink-0" onClick={() => setActiveMenu(null)}>
            <span className="font-extrabold text-[var(--foreground)] text-2xl tracking-tight">
              Asset<span className="text-[var(--brand-primary)]">Master</span>
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            <button
              type="button"
              onMouseEnter={() => handleMouseEnter("product")}
              onClick={() => setActiveMenu(activeMenu === "product" ? null : "product")}
              className={cn(
                "flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-[var(--foreground-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--surface-raised)] transition-all rounded-md cursor-pointer select-none",
                activeMenu === "product" && "text-[var(--brand-primary)] font-bold bg-[var(--surface-raised)]"
              )}
            >
              <span className="text-base">Product</span>
              <ChevronDown className={cn("h-5 w-5 text-[var(--foreground-subtle)] transition-transform", activeMenu === "product" && "rotate-180 text-[var(--brand-primary)]")} />
            </button>

            <button
              type="button"
              onMouseEnter={() => handleMouseEnter("industries")}
              onClick={() => setActiveMenu(activeMenu === "industries" ? null : "industries")}
              className={cn(
                "flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-[var(--foreground-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--surface-raised)] transition-all rounded-md cursor-pointer select-none",
                activeMenu === "industries" && "text-[var(--brand-primary)] font-bold bg-[var(--surface-raised)]"
              )}
            >
              <span className="text-base">Industries</span>
              <ChevronDown className={cn("h-5 w-5 text-[var(--foreground-subtle)] transition-transform", activeMenu === "industries" && "rotate-180 text-[var(--brand-primary)]")} />
            </button>

            <Link
              href="/how-it-works"
              onClick={() => setActiveMenu(null)}
              className="px-3.5 py-2 text-base font-semibold text-[var(--foreground-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--surface-raised)] transition-all rounded-md"
            >
              How It Works
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <button
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--surface-raised)] transition-colors rounded-lg"
              aria-label="Login"
            >
              <LogIn className="h-5 w-5" />
              <span className="hidden xl:inline">Login</span>
            </button>
            <Button variant="dark" size="lg" className="font-bold text-base">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="primary" size="lg" className="font-bold text-base shadow-[var(--shadow-glow)]">
              <Link href="/demo">Book a Demo</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <button
              className="p-2 rounded-lg text-[var(--foreground-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--surface-raised)] transition-colors"
              aria-label="Login"
            >
              <LogIn className="h-5 w-5" />
            </button>
            <Button variant="primary" size="sm" className="text-base px-3">
              <Link href="/demo">Book Demo</Link>
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

        {activeMenu && activeItems && (
          <div
            className="fixed top-[var(--header-height,72px)] left-0 right-0 w-full bg-white border-b border-[var(--border-custom)] shadow-xl z-40 animate-in fade-in-0 slide-in-from-top-1 duration-150"
            onMouseEnter={() => {
              if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-7">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeItems.map((item, idx) => (
                  <Link
                    key={idx}
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
                      <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <MobileDrawer isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} onBookDemo={function (): void {
        throw new Error("Function not implemented.");
      } } />
    </>
  );
}

export default Header;