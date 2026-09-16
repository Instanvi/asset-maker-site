"use client";

import React, { useState } from "react";
import { Mail, User, Building, Phone, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

export function BookDemoSection() {
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
              <span>Book a Personalized Demo</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight">
              See how Asset Master <span className="text-[var(--brand-primary)]">transforms your operations.</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[var(--foreground-muted)] leading-relaxed">
              Get a 1-on-1 walkthrough customized to your industry workflows, asset volume, and compliance standards.
            </p>

            <ul className="space-y-2.5 sm:space-y-3 pt-2 text-xs sm:text-sm text-[var(--foreground)] font-medium">
              <li className="flex items-start gap-2 sm:gap-2.5">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--brand-emerald)] shrink-0 mt-0.5" />
                <span>Live demo tailored to your specific asset types and jobsite needs</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-2.5">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--brand-emerald)] shrink-0 mt-0.5" />
                <span>Learn how to import existing spreadsheets in under 15 minutes</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-2.5">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--brand-emerald)] shrink-0 mt-0.5" />
                <span>Explore mobile scanning and automated digital inspections in real time</span>
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
                    Demo Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--foreground-muted)] max-w-sm mx-auto">
                    An Asset Master product specialist will reach out to{" "}
                    <span className="font-bold text-[var(--foreground)]">{formData.email}</span> within 2 hours to confirm your session.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="mt-4"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] mb-1">
                    Request a Live Walkthrough
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[var(--foreground-muted)] mb-4">
                    No credit card required. Free 14-day full access included.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-[var(--foreground)] mb-1.5">
                        Full Name
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
                        Work Email
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
                      Company / Organization Name
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
                        Primary Industry
                      </label>
                      <Select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      >
                        <option value="it">IT & Technology</option>
                        <option value="construction">Construction & Field Ops</option>
                        <option value="healthcare">Healthcare & Biomedical</option>
                        <option value="education">Education (K-12 & Higher Ed)</option>
                        <option value="manufacturing">Manufacturing & Logistics</option>
                        <option value="government">Government & Public Sector</option>
                        <option value="nonprofit">Nonprofit & Other</option>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-[var(--foreground)] mb-1.5">
                        Estimated Assets Count
                      </label>
                      <Select
                        value={formData.assetsCount}
                        onChange={(e) => setFormData({ ...formData, assetsCount: e.target.value })}
                      >
                        <option value="50-500">50 - 500 assets</option>
                        <option value="500-2500">500 - 2,500 assets</option>
                        <option value="2500-10000">2,500 - 10,000 assets</option>
                        <option value="10000+">10,000+ enterprise assets</option>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center text-xs sm:text-sm font-bold shadow-[var(--shadow-glow)] mt-2"
                  >
                    <span>Schedule My Demo</span>
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
