"use client";

import React, { useState } from "react";
import { Mail, User, Building, Phone, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

export function BookDemoSection() {
  const t = useTranslations();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    assetsCount: "500-2500",
    industry: "it",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="demo" className="py-16 sm:py-20 lg:py-28 bg-white border-t border-[var(--border-custom)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Intro Text */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[var(--brand-primary-light)] text-[var(--brand-primary)] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
              <span>{t('home.bookDemo.badge')}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight">
              {t('home.bookDemo.title')} <span className="text-[var(--brand-primary)]">{t('home.bookDemo.titleHighlight')}</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[var(--foreground-muted)] leading-relaxed">
              {t('home.bookDemo.description')}
            </p>

            <ul className="space-y-2.5 sm:space-y-3 pt-2 text-xs sm:text-sm text-[var(--foreground)] font-medium">
              <li className="flex items-start gap-2 sm:gap-2.5">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--brand-emerald)] shrink-0 mt-0.5" />
                <span>{t('home.bookDemo.benefits.tailored')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-2.5">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--brand-emerald)] shrink-0 mt-0.5" />
                <span>{t('home.bookDemo.benefits.import')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-2.5">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--brand-emerald)] shrink-0 mt-0.5" />
                <span>{t('home.bookDemo.benefits.explore')}</span>
              </li>
            </ul>
          </div>

          {/* Right Form Card with Input & Select */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl sm:rounded-3xl border border-[var(--border-custom)] bg-[var(--surface)] p-5 sm:p-8 lg:p-10 shadow-[var(--shadow-card)]">
              {submitted ? (
                <div className="py-8 sm:py-12 text-center space-y-3 sm:space-y-4">
                  <div className="mx-auto h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] flex items-center justify-center">
                    <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">
                    {t('home.bookDemo.form.success.title')}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--foreground-muted)] max-w-sm mx-auto">
                    {t('home.bookDemo.form.success.message', { email: formData.email })}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="mt-4"
                  >
                    {t('home.bookDemo.form.success.another')}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] mb-1">
                    {t('home.bookDemo.form.title')}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[var(--foreground-muted)] mb-4">
                    {t('home.bookDemo.form.noCard')}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-[var(--foreground)] mb-1.5">
                        {t('home.bookDemo.form.fullName')}
                      </label>
                      <Input
                        required
                        placeholder="Alex Morgan"
                        icon={<User className="h-4 w-4" />}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-[var(--foreground)] mb-1.5">
                        {t('home.bookDemo.form.workEmail')}
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="alex@company.com"
                        icon={<Mail className="h-4 w-4" />}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-[var(--foreground)] mb-1.5">
                      {t('home.bookDemo.form.company')}
                    </label>
                    <Input
                      required
                      placeholder="Acme Global Industries"
                      icon={<Building className="h-4 w-4" />}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-[var(--foreground)] mb-1.5">
                        {t('home.bookDemo.form.industry')}
                      </label>
                      <Select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      >
                        <option value="it">{t('home.bookDemo.form.industries.it')}</option>
                        <option value="construction">{t('home.bookDemo.form.industries.construction')}</option>
                        <option value="healthcare">{t('home.bookDemo.form.industries.healthcare')}</option>
                        <option value="education">{t('home.bookDemo.form.industries.education')}</option>
                        <option value="manufacturing">{t('home.bookDemo.form.industries.manufacturing')}</option>
                        <option value="government">{t('home.bookDemo.form.industries.government')}</option>
                        <option value="nonprofit">{t('home.bookDemo.form.industries.nonprofit')}</option>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-[var(--foreground)] mb-1.5">
                        {t('home.bookDemo.form.assetsCount')}
                      </label>
                      <Select
                        value={formData.assetsCount}
                        onChange={(e) => setFormData({ ...formData, assetsCount: e.target.value })}
                      >
                        <option value="50-500">{t('home.bookDemo.form.assetsCounts.small')}</option>
                        <option value="500-2500">{t('home.bookDemo.form.assetsCounts.medium')}</option>
                        <option value="2500-10000">{t('home.bookDemo.form.assetsCounts.large')}</option>
                        <option value="10000+">{t('home.bookDemo.form.assetsCounts.enterprise')}</option>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center text-xs sm:text-sm font-bold shadow-[var(--shadow-glow)] mt-2"
                  >
                    <span>{t('home.bookDemo.form.submit')}</span>
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDemoSection;
