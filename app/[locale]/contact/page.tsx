"use client";

import React, { useState } from "react";
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
    "General Inquiry",
    "Sales & Pricing",
    "Technical Support",
    "Partnership Opportunities",
    "Product Feedback",
    "Other",
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
                  Get in Touch{" "}
                  <span className="text-[var(--brand-primary)]">with Our Team</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Have questions about Asset Master? Our team is ready to help you understand how our platform can transform your asset tracking operations.
                </p>

                {/* Contact Methods */}
                <div className="pt-4 space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-[var(--border-custom)]">
                    <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)] mb-1">
                        Email Us
                      </div>
                      <a
                        href="mailto:support@assetmaster.com"
                        className="text-sm text-[var(--brand-primary)] hover:underline"
                      >
                        support@assetmaster.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-[var(--border-custom)]">
                    <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)] mb-1">
                        Call Us
                      </div>
                      <a
                        href="tel:+237652886798"
                        className="text-sm text-[var(--brand-primary)] hover:underline"
                      >
                        +237 652 88 67 98
                      </a>
                      <div className="text-xs text-[var(--foreground-subtle)] mt-0.5">
                        Mon-Fri, 9am-6pm WAT
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-[var(--border-custom)]">
                    <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)] mb-1">
                        Visit Us
                      </div>
                      <p className="text-sm text-[var(--foreground-muted)]">
                        Douala, Cameroon
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time Badge */}
                <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[var(--foreground-muted)] font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-[var(--brand-emerald)]" />
                    <span>&lt; 4 Hour Response Time</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>100% Secure Communication</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-1">
                {!isSubmitted ? (
                  <div className="rounded-xl border border-[var(--border-custom)] bg-white p-6 sm:p-8 shadow-[var(--shadow-card)]">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                        Send Us a Message
                      </h2>
                      <p className="text-sm text-[var(--foreground-muted)]">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                          placeholder="John Smith"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          Email Address *
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
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                          placeholder="+237 xxx xxx xxx (optional)"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                          placeholder="Acme Corporation (optional)"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-xs font-bold text-[var(--foreground)] mb-1.5">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all"
                        >
                          <option value="">Select a subject</option>
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
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border-custom)] bg-[var(--surface)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 transition-all resize-none"
                          placeholder="Tell us how we can help you..."
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
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            <span>Send Message</span>
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
                        Message Sent Successfully!
                      </h3>
                      <p className="text-base text-[var(--foreground-muted)]">
                        Thank you for reaching out to Asset Master. We've received your message and will respond within 24 hours.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] text-left space-y-2">
                      <div className="text-sm font-bold text-[var(--foreground)]">
                        What happens next?
                      </div>
                      <div className="space-y-1.5 text-sm text-[var(--foreground-muted)]">
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-[var(--brand-primary)]">1.</span>
                          <span>You'll receive a confirmation email immediately</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-[var(--brand-primary)]">2.</span>
                          <span>Our team will review your inquiry</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-[var(--brand-primary)]">3.</span>
                          <span>We'll respond within 24 hours with a solution</span>
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

        {/* Support Options Section */}
        <section className="py-20 bg-[var(--surface)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                Multiple Ways to{" "}
                <span className="text-[var(--brand-primary)]">Get Support</span>
              </h2>
              <p className="mt-4 text-base text-[var(--foreground-muted)] leading-relaxed">
                Choose the support channel that works best for you. We're committed to responding quickly and solving your challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[var(--border-custom)] bg-white space-y-4">
                <div className="p-3 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] w-fit">
                  <HeadphonesIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                    Technical Support
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-4">
                    24/7 technical assistance for urgent issues, bugs, and system downtime. Our engineering team responds within 2 hours.
                  </p>
                  <a
                    href="mailto:support@assetmaster.com"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
                  >
                    <span>support@assetmaster.com</span>
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
                    Sales Inquiries
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-4">
                    Speak with our sales team about pricing, enterprise plans, custom integrations, and volume discounts.
                  </p>
                  <a
                    href="mailto:sales@assetmaster.com"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-emerald)] hover:underline"
                  >
                    <span>sales@assetmaster.com</span>
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
                    Documentation & FAQs
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-4">
                    Browse our comprehensive knowledge base with setup guides, API docs, video tutorials, and troubleshooting tips.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:underline"
                  >
                    <span>Visit Help Center</span>
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
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-base text-[var(--foreground-muted)]">
                Quick answers to common questions about contacting our team.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What's your average response time?",
                  a: "We respond to all inquiries within 4 hours during business hours. Technical support tickets receive priority responses within 2 hours, and critical outages are addressed immediately.",
                },
                {
                  q: "Do you offer phone support?",
                  a: "Yes! Enterprise customers receive dedicated phone support. Contact our sales team to learn more about enterprise plans with phone and Slack support channels.",
                },
                {
                  q: "Can I schedule a call with your team?",
                  a: "Absolutely. Visit our demo page to schedule a 30-minute consultation with an Asset Master expert at your convenience.",
                },
                {
                  q: "Do you provide implementation assistance?",
                  a: "Yes. We offer white-glove onboarding, data migration, custom training sessions, and dedicated success managers for enterprise accounts.",
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
              Prefer to Talk? Let's Connect.
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Our team is standing by to answer your questions and help you get started with Asset Master.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="xl"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full sm:w-auto text-base"
              >
                <Mail className="h-4 w-4" />
                <span>Send Us a Message</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => (window.location.href = "/demo")}
                className="w-full"
              >
                <span>Schedule a Demo</span>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
