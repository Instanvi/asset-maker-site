"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, QrCode, Wrench, ClipboardCheck, Laptop, Layers, HardHat, Box, GraduationCap, Stethoscope, Warehouse, LogIn } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onBookDemo: () => void;
}

export function MobileDrawer({ isOpen, onClose, onBookDemo }: MobileDrawerProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>("products");

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
              <div className="pl-2 pr-1 pb-3 space-y-2 text-xs animate-in fade-in-0 duration-150">
                <Link
                  href="/products/asset-tracking"
                  onClick={onClose}
                  className="flex items-center gap-2.5 p-2 rounded-md font-semibold text-[var(--foreground)] hover:bg-[var(--surface-raised)] hover:text-[var(--brand-primary)]"
                >
                  <QrCode className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
                  <div>
                    <div className="font-bold">Asset Tracking & Tags</div>
                    <div className="text-[11px] text-[var(--foreground-muted)] font-normal">QR & barcode scanning from any phone</div>
                  </div>
                </Link>

                <Link
                  href="/products/maintenance-cmms"
                  onClick={onClose}
                  className="flex items-center gap-2.5 p-2 rounded-md font-semibold text-[var(--foreground)] hover:bg-[var(--surface-raised)] hover:text-[var(--brand-primary)]"
                >
                  <Wrench className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
                  <div>
                    <div className="font-bold">Maintenance (CMMS)</div>
                    <div className="text-[11px] text-[var(--foreground-muted)] font-normal">Preventative schedules & work orders</div>
                  </div>
                </Link>

                <Link
                  href="/products/inspections-audit"
                  onClick={onClose}
                  className="flex items-center gap-2.5 p-2 rounded-md font-semibold text-[var(--foreground)] hover:bg-[var(--surface-raised)] hover:text-[var(--brand-primary)]"
                >
                  <ClipboardCheck className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
                  <div>
                    <div className="font-bold">Inspections & Audit Trail</div>
                    <div className="text-[11px] text-[var(--foreground-muted)] font-normal">Digital checklists & full history</div>
                  </div>
                </Link>

                <Link
                  href="/products/it-asset-management"
                  onClick={onClose}
                  className="flex items-center gap-2.5 p-2 rounded-md font-semibold text-[var(--foreground)] hover:bg-[var(--surface-raised)] hover:text-[var(--brand-primary)]"
                >
                  <Laptop className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
                  <div>
                    <div className="font-bold">IT Asset Management</div>
                    <div className="text-[11px] text-[var(--foreground-muted)] font-normal">Hardware, licenses & MDM sync</div>
                  </div>
                </Link>

                <Link
                  href="/products/integrations-api"
                  onClick={onClose}
                  className="flex items-center gap-2.5 p-2 rounded-md font-semibold text-[var(--foreground)] hover:bg-[var(--surface-raised)] hover:text-[var(--brand-primary)]"
                >
                  <Layers className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
                  <div>
                    <div className="font-bold">Integrations & API</div>
                    <div className="text-[11px] text-[var(--foreground-muted)] font-normal">Connect ERP, Jamf, Intune & Jira</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Industries Accordion */}
          <div className="border-b border-[var(--border-subtle)] pb-2">
            <button
              type="button"
              onClick={() => toggleSection("industries")}
              className="w-full flex items-center justify-between py-2.5 text-sm font-bold text-[var(--foreground)]"
            >
              <span>Industries</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-[var(--foreground-subtle)] transition-transform duration-200",
                  expandedSection === "industries" && "rotate-180 text-[var(--brand-primary)]"
                )}
              />
            </button>
            {expandedSection === "industries" && (
              <div className="pl-2 pr-1 pb-3 space-y-2 text-xs animate-in fade-in-0 duration-150">
                <Link
                  href="/industries/construction"
                  onClick={onClose}
                  className="flex items-center gap-2.5 p-2 rounded-md font-semibold text-[var(--foreground)] hover:bg-[var(--surface-raised)] hover:text-[var(--brand-primary)]"
                >
                  <HardHat className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
                  <div>
                    <div className="font-bold">Construction & Field Crews</div>
                    <div className="text-[11px] text-[var(--foreground-muted)] font-normal">Tools and heavy gear on jobsites</div>
                  </div>
                </Link>

                <Link
                  href="/industries/it-facilities"
                  onClick={onClose}
                  className="flex items-center gap-2.5 p-2 rounded-md font-semibold text-[var(--foreground)] hover:bg-[var(--surface-raised)] hover:text-[var(--brand-primary)]"
                >
                  <Box className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
                  <div>
                    <div className="font-bold">IT & Facilities</div>
                    <div className="text-[11px] text-[var(--foreground-muted)] font-normal">Assigned staff devices and gear</div>
                  </div>
                </Link>

                <Link
                  href="/industries/education"
                  onClick={onClose}
                  className="flex items-center gap-2.5 p-2 rounded-md font-semibold text-[var(--foreground)] hover:bg-[var(--surface-raised)] hover:text-[var(--brand-primary)]"
                >
                  <GraduationCap className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
                  <div>
                    <div className="font-bold">Education</div>
                    <div className="text-[11px] text-[var(--foreground-muted)] font-normal">Campus devices & lab equipment</div>
                  </div>
                </Link>

                <Link
                  href="/industries/healthcare"
                  onClick={onClose}
                  className="flex items-center gap-2.5 p-2 rounded-md font-semibold text-[var(--foreground)] hover:bg-[var(--surface-raised)] hover:text-[var(--brand-primary)]"
                >
                  <Stethoscope className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
                  <div>
                    <div className="font-bold">Healthcare</div>
                    <div className="text-[11px] text-[var(--foreground-muted)] font-normal">Findable biomedical equipment</div>
                  </div>
                </Link>

                <Link
                  href="/industries/warehousing-logistics"
                  onClick={onClose}
                  className="flex items-center gap-2.5 p-2 rounded-md font-semibold text-[var(--foreground)] hover:bg-[var(--surface-raised)] hover:text-[var(--brand-primary)]"
                >
                  <Warehouse className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
                  <div>
                    <div className="font-bold">Warehousing & Logistics</div>
                    <div className="text-[11px] text-[var(--foreground-muted)] font-normal">Forklifts, bins & dock tools</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Direct Section Links */}
          <div className="border-b border-[var(--border-subtle)] py-1.5">
            <Link
              href="/#how"
              onClick={onClose}
              className="block py-2 text-sm font-bold text-[var(--foreground)] hover:text-[var(--brand-primary)]"
            >
              How it Works
            </Link>
          </div>
          <div className="border-b border-[var(--border-subtle)] py-1.5">
            <Link
              href="/#roi"
              onClick={onClose}
              className="block py-2 text-sm font-bold text-[var(--foreground)] hover:text-[var(--brand-primary)]"
            >
              ROI Calculator
            </Link>
          </div>
          <div className="border-b border-[var(--border-subtle)] py-1.5">
            <Link
              href="/#proof"
              onClick={onClose}
              className="block py-2 text-sm font-bold text-[var(--foreground)] hover:text-[var(--brand-primary)]"
            >
              Customer Proof
            </Link>
          </div>
        </div>

        {/* Drawer Actions */}
        <div className="p-5 border-t border-[var(--border-custom)] bg-[var(--surface)] space-y-2">
          <Button
            variant="outline"
            className="w-full justify-center text-xs"
            size="lg"
            onClick={onClose}
          >
            <LogIn className="h-4 w-4" />
            Login
          </Button>
          <Button
            variant="dark"
            className="w-full justify-center text-xs"
            size="lg"
            href="/contact"
            onClick={onClose}
          >
            Contact Us
          </Button>
          <Button
            variant="primary"
            className="w-full justify-center text-xs"
            size="lg"
            href="/demo"
            onClick={onClose}
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MobileDrawer;
