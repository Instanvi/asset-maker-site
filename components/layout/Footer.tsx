"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--surface-dark)] text-white border-t border-[var(--surface-dark-border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Grid: Brand Intro + 4 Navigation Columns matching Header Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand & Address Column */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-6">
            <Link href="/" className="inline-block">
              <span className="font-extrabold text-white text-2xl tracking-tight">
                Asset<span className="text-[var(--brand-primary)]">Master</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Complete operational accountability in one intelligent platform. Track assets, automate inspections, and prove compliance across any device.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
                <span>Douala, Cameroon</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[var(--brand-emerald)] shrink-0" />
                <span>SOC 2 Type II Certified &bull; ISO 27001 Compliant &bull; 256-Bit SSL</span>
              </div>
            </div>
          </div>

          {/* 1. Products Column (matches Header Products Tab) */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Products
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-body">
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Local Government
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Public Works
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Fire & Rescue
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Law Enforcement
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  K-12 School Districts
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Higher Education
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Asset Intelligence
                </Link>
              </li>
              <li>
                <Link href="/#demo" className="hover:text-white transition-colors">
                  UrsaAI Engine
                </Link>
              </li>
              <li>
                <Link href="/#systems" className="hover:text-white transition-colors">
                  Integrations & API
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Barcode & RFID Tags
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Solutions Column (matches Header Solutions Tab) */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-body">
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Asset Tracking
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  IT Asset Tracking (ITAM)
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Fixed Asset Accounting
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Maintenance (CMMS)
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Facilities Management
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Tool & Tool-Crib Tracking
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Mobile Field Auditing
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Asset Inspections
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Calibration Management
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Who We Help Column (matches Header Who We Help Tab) */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Who We Help
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-body">
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Municipal Government
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  K-12 & Universities
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Healthcare & Biomedical
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Construction & Field
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Manufacturing Plants
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Energy & Utilities
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Warehousing & Logistics
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Transportation & Fleet
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  MSPs & Nonprofits
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Resources Column (matches Header Resources Tab) */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-body">
              <li>
                <Link href="/#why-asset-intelligence" className="hover:text-white transition-colors">
                  Intelligence Blog
                </Link>
              </li>
              <li>
                <Link href="/#why-asset-intelligence" className="hover:text-white transition-colors">
                  White Papers & Guides
                </Link>
              </li>
              <li>
                <Link href="/#demo" className="hover:text-white transition-colors">
                  Live Webinars
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="hover:text-white transition-colors">
                  Customer Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/#systems" className="hover:text-white transition-colors">
                  Certified Partners
                </Link>
              </li>
              <li>
                <Link href="/#roi-calculator" className="hover:text-white transition-colors">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/#systems" className="hover:text-white transition-colors">
                  Compare Asset Master
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  FAQ & Video Tutorials
                </Link>
              </li>
              <li>
                <Link href="/#demo" className="hover:text-white transition-colors">
                  Book a Live Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[var(--surface-dark-border)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-body">
          <p>&copy; {new Date().getFullYear()} Asset Master. All rights reserved. Built for complete operational accountability.</p>
          <div className="flex items-center gap-6">
            <Link href="/#demo" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#demo" className="hover:text-slate-300 transition-colors">
              Terms of Use
            </Link>
            <Link href="/#demo" className="hover:text-slate-300 transition-colors">
              Security Overview
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
