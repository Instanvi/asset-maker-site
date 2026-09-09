"use client";

import React, { useState } from "react";
import { Mail, User, Building, CheckCircle, ArrowRight } from "lucide-react";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
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

  const handleModalClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleModalClose}
      title={submitted ? "" : "Book an Asset Master Demo"}
      description={
        submitted
          ? ""
          : "See how intelligent asset tracking and UrsaAI condition audits transform your team's compliance."
      }
    >
      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="mx-auto h-12 w-12 rounded-full bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] flex items-center justify-center">
            <CheckCircle className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-[var(--foreground)]">
            Demo Request Confirmed!
          </h3>
          <p className="text-sm text-[var(--foreground-muted)]">
            We will contact <span className="font-bold text-[var(--foreground)]">{formData.email}</span> with meeting details shortly.
          </p>
          <Button variant="primary" size="sm" onClick={handleModalClose} className="mt-2">
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-[var(--foreground)] mb-1">
              Full Name
            </label>
            <Input
              required
              placeholder="Sarah Connor"
              icon={<User className="h-4 w-4" />}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[var(--foreground)] mb-1">
              Work Email
            </label>
            <Input
              required
              type="email"
              placeholder="s.connor@enterprise.com"
              icon={<Mail className="h-4 w-4" />}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[var(--foreground)] mb-1">
              Company Name
            </label>
            <Input
              required
              placeholder="Apex Industries"
              icon={<Building className="h-4 w-4" />}
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[var(--foreground)] mb-1">
                Industry
              </label>
              <Select
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              >
                <option value="it">IT Hardware</option>
                <option value="construction">Construction</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="government">Government</option>
              </Select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--foreground)] mb-1">
                Assets Volume
              </label>
              <Select
                value={formData.assetsCount}
                onChange={(e) => setFormData({ ...formData, assetsCount: e.target.value })}
              >
                <option value="50-500">50 - 500</option>
                <option value="500-2500">500 - 2.5k</option>
                <option value="2500-10000">2.5k - 10k</option>
                <option value="10000+">10k+ units</option>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full justify-center text-sm font-bold shadow-[var(--shadow-glow)] mt-4"
          >
            <span>Confirm Demo Booking</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
      )}
    </Modal>
  );
}

export default BookDemoModal;
