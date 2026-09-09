"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onBookDemo: () => void;
}

export function MobileDrawer({ isOpen, onClose, onBookDemo }: MobileDrawerProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-custom)]">
          <Link href="/" onClick={onClose} className="flex items-center gap-1.5">
            <span className="font-extrabold text-[var(--foreground)] text-xl tracking-tight">
              Asset<span className="text-[var(--brand-primary)]">Master</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--foreground-muted)] hover:bg-[var(--surface-raised)]"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Accordion Links */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
          {/* Products Accordion */}
          <div className="border-b border-[var(--border-subtle)] pb-2">
            <button
              type="button"
              onClick={() => toggleSection("products")}
              className="w-full flex items-center justify-between py-2.5 text-sm font-bold text-[var(--foreground)]"
            >
              <span>Products</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-[var(--foreground-subtle)] transition-transform duration-200",
                  expandedSection === "products" && "rotate-180 text-[var(--brand-primary)]"
                )}
              />
            </button>
            {expandedSection === "products" && (
              <div className="pl-3 pr-1 pb-3 space-y-2.5 text-xs animate-in fade-in-0 duration-150">
                <div className="text-[10px] font-extrabold uppercase text-[var(--foreground-subtle)] tracking-wider">
                  Public Sector Solutions
                </div>
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Local Government
                </Link>
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Public Works
                </Link>
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Fire & Rescue
                </Link>
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Law Enforcement
                </Link>

                <div className="pt-2 text-[10px] font-extrabold uppercase text-[var(--foreground-subtle)] tracking-wider">
                  Education Solutions
                </div>
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  K-12 School Districts
                </Link>
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Higher Education & Labs
                </Link>

                <div className="pt-2 text-[10px] font-extrabold uppercase text-[var(--foreground-subtle)] tracking-wider">
                  Core Platform
                </div>
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Asset Intelligence Platform
                </Link>
                <Link href="/#demo" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  UrsaAI Intelligence
                </Link>
                <Link href="/#systems" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Integrations & API
                </Link>
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Barcode Tags & RFID
                </Link>
              </div>
            )}
          </div>

          {/* Solutions Accordion */}
          <div className="border-b border-[var(--border-subtle)] pb-2">
            <button
              type="button"
              onClick={() => toggleSection("solutions")}
              className="w-full flex items-center justify-between py-2.5 text-sm font-bold text-[var(--foreground)]"
            >
              <span>Solutions</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-[var(--foreground-subtle)] transition-transform duration-200",
                  expandedSection === "solutions" && "rotate-180 text-[var(--brand-primary)]"
                )}
              />
            </button>
            {expandedSection === "solutions" && (
              <div className="pl-3 pr-1 pb-3 space-y-2 text-xs animate-in fade-in-0 duration-150">
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Asset Management & Tracking
                </Link>
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Inventory & Consumables
                </Link>
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  IT Asset Management (ITAM)
                </Link>
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Fixed Asset Accounting
                </Link>
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Maintenance Management (CMMS)
                </Link>
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Facilities Management
                </Link>
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Tool & Tool-Crib Tracking
                </Link>
                <Link href="/#products" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Mobile Field Audits
                </Link>
              </div>
            )}
          </div>

          {/* Who We Help Accordion */}
          <div className="border-b border-[var(--border-subtle)] pb-2">
            <button
              type="button"
              onClick={() => toggleSection("whoWeHelp")}
              className="w-full flex items-center justify-between py-2.5 text-sm font-bold text-[var(--foreground)]"
            >
              <span>Who We Help</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-[var(--foreground-subtle)] transition-transform duration-200",
                  expandedSection === "whoWeHelp" && "rotate-180 text-[var(--brand-primary)]"
                )}
              />
            </button>
            {expandedSection === "whoWeHelp" && (
              <div className="pl-3 pr-1 pb-3 space-y-2 text-xs animate-in fade-in-0 duration-150">
                <Link href="/#industries" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Municipal Government
                </Link>
                <Link href="/#industries" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  K-12 & Higher Education
                </Link>
                <Link href="/#industries" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Healthcare & Biomedical
                </Link>
                <Link href="/#industries" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Construction & Contractors
                </Link>
                <Link href="/#industries" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Manufacturing Plants
                </Link>
                <Link href="/#industries" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Energy & Utilities
                </Link>
                <Link href="/#industries" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Warehousing & Supply Chain
                </Link>
                <Link href="/#industries" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  MSPs & Nonprofits
                </Link>
              </div>
            )}
          </div>

          {/* Resources Accordion */}
          <div className="border-b border-[var(--border-subtle)] pb-2">
            <button
              type="button"
              onClick={() => toggleSection("resources")}
              className="w-full flex items-center justify-between py-2.5 text-sm font-bold text-[var(--foreground)]"
            >
              <span>Resources</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-[var(--foreground-subtle)] transition-transform duration-200",
                  expandedSection === "resources" && "rotate-180 text-[var(--brand-primary)]"
                )}
              />
            </button>
            {expandedSection === "resources" && (
              <div className="pl-3 pr-1 pb-3 space-y-2 text-xs animate-in fade-in-0 duration-150">
                <Link href="/#why-asset-intelligence" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Asset Intelligence Blog
                </Link>
                <Link href="/#case-studies" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Customer Case Studies
                </Link>
                <Link href="/#roi-calculator" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Interactive ROI Calculator
                </Link>
                <Link href="/#faq" onClick={onClose} className="block font-semibold text-[var(--foreground)] hover:text-[var(--brand-primary)]">
                  Frequently Asked Questions (FAQ)
                </Link>
              </div>
            )}
          </div>

          {/* Direct Links */}
          <div className="border-b border-[var(--border-subtle)] py-1.5">
            <Link
              href="/#systems"
              onClick={onClose}
              className="block py-1.5 text-sm font-bold text-[var(--foreground)] hover:text-[var(--brand-primary)]"
            >
              Enterprise
            </Link>
          </div>
          <div className="border-b border-[var(--border-subtle)] py-1.5">
            <Link
              href="/#roi-calculator"
              onClick={onClose}
              className="block py-1.5 text-sm font-bold text-[var(--foreground)] hover:text-[var(--brand-primary)]"
            >
              Pricing
            </Link>
          </div>
        </div>

        {/* Drawer Actions */}
        <div className="p-5 border-t border-[var(--border-custom)] bg-[var(--surface)] space-y-2">
          <Button
            variant="emerald"
            className="w-full justify-center text-xs"
            size="lg"
            onClick={() => {
              onClose();
              onBookDemo();
            }}
          >
            Try for Free
          </Button>
          <Button
            variant="primary"
            className="w-full justify-center text-xs"
            size="lg"
            onClick={() => {
              onClose();
              onBookDemo();
            }}
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MobileDrawer;
