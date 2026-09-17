"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";

export function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface-dark)] text-white border-t border-[var(--surface-dark-border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-6">
            <Link href="/" className="inline-block">
              <span className="font-extrabold text-white text-2xl tracking-tight">
                Asset<span className="text-[var(--brand-primary)]">Master</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t('footer.tagline')}
            </p>
            <div className="pt-2 flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
              <span>{t('footer.location')}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/products/asset-tracking" className="hover:text-white transition-colors">{t('products.assetTracking.title')}</Link></li>
              <li><Link href="/products/maintenance-cmms" className="hover:text-white transition-colors">{t('products.maintenance.title')}</Link></li>
              <li><Link href="/products/inspections-audit" className="hover:text-white transition-colors">{t('products.inspections.title')}</Link></li>
              <li><Link href="/products/it-asset-management" className="hover:text-white transition-colors">{t('products.itAssetManagement.title')}</Link></li>
              <li><Link href="/products/integrations-api" className="hover:text-white transition-colors">{t('products.integrations.title')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">{t('footer.industries')}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/industries/construction" className="hover:text-white transition-colors">{t('industries.construction.title')}</Link></li>
              <li><Link href="/industries/it-facilities" className="hover:text-white transition-colors">{t('industries.itFacilities.title')}</Link></li>
              <li><Link href="/industries/education" className="hover:text-white transition-colors">{t('industries.education.title')}</Link></li>
              <li><Link href="/industries/healthcare" className="hover:text-white transition-colors">{t('industries.healthcare.title')}</Link></li>
              <li><Link href="/industries/warehousing-logistics" className="hover:text-white transition-colors">{t('industries.warehousing.title')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">{t('nav.howItWorks')}</Link></li>
              <li><Link href="/demo" className="hover:text-white transition-colors">{t('common.bookDemo')}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t('common.contact')}</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--surface-dark-border)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t('footer.copyright', { year: currentYear })}</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">{t('common.contact')}</Link>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">{t('footer.privacy')}</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
