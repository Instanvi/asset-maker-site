"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Clock,
  HeadphonesIcon,
  Globe,
  FileQuestion,
  Sparkles,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const subjects = [
    t("form.subjects.general"),
    t("form.subjects.sales"),
    t("form.subjects.technical"),
    t("form.subjects.partnership"),
    t("form.subjects.feedback"),
    t("form.subjects.other"),
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[var(--foreground)]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 lg:pt-28 pb-16 lg:pb-24 overflow-hidden hero-gradient-canvas border-b border-[var(--border-subtle)]">
          <div className="hero-mesh-glow" />
          <div className="hero-grid-pattern" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6 text-center lg:text-left">

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                  {t("hero.title")}{" "}
                  <span className="text-[var(--brand-primary)]">{t("hero.titleHighlight")}</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  {t("hero.description")}
                </p>

                {/* Contact Methods */}
                <div className="pt-4 space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-[var(--border-custom)]">
                    <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)] mb-1">
                        {t("hero.contactMethods.email.title")}
                      </div>
                      <a
                        href={`mailto:${t("hero.contactMethods.email.address")}`}
                        className="text-sm text-[var(--brand-primary)] hover:underline"
                      >
                        {t("hero.contactMethods.email.address")}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-[var(--border-custom)]">
                    <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)] mb-1">
                        {t("hero.contactMethods.phone.title")}
                      </div>
                      <a
                        href={`tel:${t("hero.contactMethods.phone.number")}`}
                        className="text-sm text-[var(--brand-primary)] hover:underline"
                      >
                        {t("hero.contactMethods.phone.number")}
                      </a>
                      <div className="text-xs text-[var(--foreground-subtle)] mt-0.5">
                        {t("hero.contactMethods.phone.hours")}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-[var(--border-custom)]">
                    <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)] mb-1">
                        {t("hero.contactMethods.visit.title")}
                      </div>
                      <p className="text-sm text-[var(--foreground-muted)]">
                        {t("hero.contactMethods.visit.location")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time Badge */}
                <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[var(--foreground-muted)] font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-[var(--brand-emerald)]" />
                    <span>{t("hero.badges.responseTime")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>{t("hero.badges.secure")}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-1">
                {!isSubmitted ? (
                  <div className="rounded-xl border border-[var(--border-custom)] bg-white p-6 sm:p-8 shadow-[var(--shadow-card)]">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                        {t("form.title")}
                      </h2>
                      <p className="text-sm text-[var(--foreground-muted)]">
                        {t("form.description")}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          {t("form.fullName")} {t("form.required")}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                          placeholder={t("form.fullNamePlaceholder")}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          {t("form.email")} {t("form.required")}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                          placeholder={t("form.emailPlaceholder")}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          {t("form.phone")}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                          placeholder={t("form.phonePlaceholder")}
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          {t("form.company")}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                          placeholder={t("form.companyPlaceholder")}
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          {t("form.subject")} {t("form.required")}
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                        >
                          <option value="">{t("form.subjectPlaceholder")}</option>
                          {subjects.map((subj) => (
                            <option key={subj} value={subj}>
                              {subj}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          {t("form.message")} {t("form.required")}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all resize-none"
                          placeholder={t("form.messagePlaceholder")}
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <Clock className="h-4 w-4 animate-spin" />
                            <span>{t("form.sending")}</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            <span>{t("form.send")}</span>
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-center text-[var(--foreground-muted)] pt-2">
                        {t("form.privacy")}{" "}
                        <a href="/privacy" className="text-[var(--brand-primary)] hover:underline">
                          {t("form.privacyLink")}
                        </a>
                        .
                      </p>
                    </form>
                  </div>
                ) : (
                  <div className="rounded-xl border border-[var(--border-custom)] bg-white p-8 shadow-[var(--shadow-card)] text-center space-y-6 animate-in fade-in-0 duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)]">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                        {t("success.title")}
                      </h3>
                      <p className="text-base text-[var(--foreground-muted)]">
                        {t("success.description")}
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] text-left space-y-2">
                      <div className="text-sm font-bold text-[var(--foreground)]">
                        {t("success.nextSteps.title")}
                      </div>
                      <div className="space-y-1.5 text-sm text-[var(--foreground-muted)]">
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-[var(--brand-primary)]">1.</span>
                          <span>{t("success.nextSteps.step1")}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-[var(--brand-primary)]">2.</span>
                          <span>{t("success.nextSteps.step2")}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-[var(--brand-primary)]">3.</span>
                          <span>{t("success.nextSteps.step3")}</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => (window.location.href = "/")}
                      className="w-full"
                    >
                      <span>{t("success.returnHome")}</span>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Support Options Section */}
        <section className="py-20 bg-[var(--surface)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                {t("support.title")}{" "}
                <span className="text-[var(--brand-primary)]">{t("support.titleHighlight")}</span>
              </h2>
              <p className="mt-4 text-base text-[var(--foreground-muted)] leading-relaxed">
                {t("support.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-white space-y-4">
                <div className="p-3 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <HeadphonesIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                    {t("support.technical.title")}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-4">
                    {t("support.technical.description")}
                  </p>
                  <a
                    href={`mailto:${t("support.technical.email")}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
                  >
                    <span>{t("support.technical.email")}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-white space-y-4">
                <div className="p-3 rounded-lg bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] w-fit">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                    {t("support.sales.title")}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-4">
                    {t("support.sales.description")}
                  </p>
                  <a
                    href={`mailto:${t("support.sales.email")}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-emerald)] hover:underline"
                  >
                    <span>{t("support.sales.email")}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-white space-y-4">
                <div className="p-3 rounded-lg bg-cyan-50 text-cyan-600 w-fit">
                  <FileQuestion className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                    {t("support.docs.title")}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-4">
                    {t("support.docs.description")}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:underline"
                  >
                    <span>{t("support.docs.link")}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white border-t border-[var(--border-custom)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                {t("faq.title")}
              </h2>
              <p className="mt-4 text-base text-[var(--foreground-muted)]">
                {t("faq.description")}
              </p>
            </div>

            <div className="space-y-4">
              {[
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
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] p-5"
                >
                  <div className="font-bold text-sm text-[var(--foreground)] mb-2">
                    {faq.q}
                  </div>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
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
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full sm:w-auto text-base"
              >
                <Mail className="h-4 w-4" />
                <span>{t("cta.sendMessage")}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => (window.location.href = "/demo")}
                className="w-full"
              >
                <span>{t("cta.scheduleDemo")}</span>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
