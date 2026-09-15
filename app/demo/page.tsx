"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import {
  Calendar,
  Clock,
  Video,
  CheckCircle2,
  ArrowRight,
  Users,
  Building,
  Mail,
  Phone,
  Globe,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  Award,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    companySize: "",
    industry: "",
    message: "",
    preferredTime: "",
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

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees",
  ];

  const industries = [
    "Construction",
    "Healthcare",
    "Education",
    "IT & Technology",
    "Manufacturing",
    "Warehousing & Logistics",
    "Government",
    "Other",
  ];

  const timeSlots = [
    "Morning (9am - 12pm)",
    "Afternoon (12pm - 3pm)",
    "Late Afternoon (3pm - 6pm)",
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
              {/* Left Column */}
              <div className="space-y-6 text-center lg:text-left">

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                  See Asset Master{" "}
                  <span className="text-[var(--brand-primary)]">in Action</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Book a live, personalized walkthrough with our asset management experts. We'll show you exactly how Asset Master solves your specific tracking challenges.
                </p>

                {/* What You'll See */}
                <div className="pt-4 space-y-3">
                  <div className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wide">
                    What You'll See in Your Demo:
                  </div>
                  <div className="space-y-2">
                    {[
                      "Live mobile barcode & QR scanning demonstration",
                      "Real-time custody transfer workflows",
                      "Automated depreciation & compliance reporting",
                      "Custom fields tailored to your industry",
                      "Integration with your existing systems",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-[var(--brand-emerald)] shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--foreground-muted)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Signals */}
                <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[var(--foreground-muted)] font-medium">
                  <div className="flex items-center gap-1.5">
                    <Video className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>30-Min Live Session</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield className="h-4 w-4 text-[var(--brand-emerald)]" />
                    <span>No Commitment Required</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span>4.9/5 Demo Rating</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-1">
                {!isSubmitted ? (
                  <div className="rounded-xl border border-[var(--border-custom)] bg-white p-6 sm:p-8 shadow-[var(--shadow-card)]">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                        Schedule Your Demo
                      </h2>
                      <p className="text-sm text-[var(--foreground-muted)]">
                        Fill out the form below and we'll be in touch within 24 hours to confirm your preferred time slot.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name Fields */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="firstName" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                            placeholder="Smith"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                          placeholder="john.smith@company.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      {/* Company & Job Title */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="company" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                            Company *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                            placeholder="Acme Corp"
                          />
                        </div>
                        <div>
                          <label htmlFor="jobTitle" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                            Job Title *
                          </label>
                          <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            required
                            value={formData.jobTitle}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                            placeholder="Facilities Manager"
                          />
                        </div>
                      </div>

                      {/* Company Size */}
                      <div>
                        <label htmlFor="companySize" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          Company Size *
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                        >
                          <option value="">Select company size</option>
                          {companySizes.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Industry */}
                      <div>
                        <label htmlFor="industry" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          Industry *
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          required
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                        >
                          <option value="">Select industry</option>
                          {industries.map((ind) => (
                            <option key={ind} value={ind}>
                              {ind}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Preferred Time */}
                      <div>
                        <label htmlFor="preferredTime" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          Preferred Demo Time
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                        >
                          <option value="">Select preferred time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          Tell Us About Your Asset Tracking Needs (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all resize-none"
                          placeholder="e.g., We need to track 500 construction tools across 10 job sites..."
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
                            <span>Scheduling Your Demo...</span>
                          </>
                        ) : (
                          <>
                            <Calendar className="h-4 w-4" />
                            <span>Book Your Demo</span>
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-center text-[var(--foreground-muted)] pt-2">
                        By submitting this form, you agree to our{" "}
                        <a href="/privacy" className="text-[var(--brand-primary)] hover:underline">
                          Privacy Policy
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
                        Demo Request Received!
                      </h3>
                      <p className="text-base text-[var(--foreground-muted)]">
                        Thank you for scheduling a demo with Asset Master. Our team will contact you within 24 hours to confirm your preferred time slot.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] text-left space-y-2">
                      <div className="text-sm font-bold text-[var(--foreground)]">
                        What happens next?
                      </div>
                      <div className="space-y-1.5 text-sm text-[var(--foreground-muted)]">
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-[var(--brand-primary)]">1.</span>
                          <span>You'll receive a confirmation email within 1 hour</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-[var(--brand-primary)]">2.</span>
                          <span>Our team will send you a calendar invite with Zoom link</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-[var(--brand-primary)]">3.</span>
                          <span>Join the demo at your scheduled time</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => (window.location.href = "/")}
                      className="w-full"
                    >
                      <span>Return to Home</span>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Schedule a Demo Section */}
        <section className="py-20 bg-[var(--surface)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                Why Schedule a{" "}
                <span className="text-[var(--brand-primary)]">Personalized Demo?</span>
              </h2>
              <p className="mt-4 text-base text-[var(--foreground-muted)] leading-relaxed">
                Generic product tours don't show you what matters. Our 1-on-1 demos are tailored to your specific industry, asset types, and operational challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-white space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">
                  Tailored to Your Industry
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Whether you're tracking construction equipment, IT hardware, or medical devices, we'll show you workflows designed for your specific use case.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-white space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">
                  See It Work Live
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Watch real-time barcode scanning, GPS tracking, and audit trail generation. No pre-recorded videos or mockups - just live demonstrations.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-white space-y-3">
                <div className="p-2.5 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">
                  ROI Calculation
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  We'll show you exactly how much time and money Asset Master saves based on your asset count, team size, and current tracking processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Success Stories */}
        <section className="py-20 bg-white border-t border-[var(--border-custom)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                Join 2,000+ Organizations{" "}
                <span className="text-[var(--brand-primary)]">Tracking Smarter</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  company: "Global Construction Inc.",
                  industry: "Construction",
                  result: "98% reduction in tool loss",
                  quote: "The demo showed us exactly how to track equipment across 50 job sites. Implementation was faster than promised.",
                },
                {
                  company: "Healthcare Systems Alliance",
                  industry: "Healthcare",
                  result: "100% audit compliance achieved",
                  quote: "Asset Master's audit trail feature eliminated our Joint Commission compliance headaches completely.",
                },
                {
                  company: "Tech Corp International",
                  industry: "IT & Technology",
                  result: "2,500 laptops tracked effortlessly",
                  quote: "The Microsoft Intune integration they showed in the demo was the game-changer we needed.",
                },
              ].map((story, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] space-y-4"
                >
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm text-[var(--foreground-muted)] italic leading-relaxed">
                    "{story.quote}"
                  </p>

                  <div className="pt-3 border-t border-[var(--border-subtle)]">
                    <div className="font-bold text-sm text-[var(--foreground)]">
                      {story.company}
                    </div>
                    <div className="text-xs text-[var(--foreground-subtle)]">
                      {story.industry}
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--brand-emerald)]">
                      <Award className="h-3.5 w-3.5" />
                      <span>{story.result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-[var(--surface-dark)] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to See Asset Master in Action?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Schedule your personalized demo today and discover why thousands of organizations trust Asset Master for physical asset tracking.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="xl"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full sm:w-auto text-base"
              >
                <Calendar className="h-4 w-4" />
                <span>Schedule Demo Now</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
