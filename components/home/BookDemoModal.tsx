"use client";

import React, { useState } from "react";
import { Mail, User, Building, CheckCircle, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
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

  const handleModalClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleModalClose}
      title={submitted ? "" : t('home.bookDemoModal.title')}
      description={
        submitted
          ? ""
          : t('home.bookDemoModal.description')
      }
    >
      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="mx-auto h-12 w-12 rounded-full bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] flex items-center justify-center">
            <CheckCircle className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-[var(--foreground)]">
            {t('home.bookDemoModal.form.success.title')}
          </h3>
          <p className="text-sm text-[var(--foreground-muted)]">
            {t('home.bookDemoModal.form.success.message', { email: formData.email })}
          </p>
          <Button variant="primary" size="sm" onClick={handleModalClose} className="mt-2">
            {t('home.bookDemoModal.form.success.done')}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-[var(--foreground)] mb-1">
              {t('home.bookDemoModal.form.fullName')}
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
              {t('home.bookDemoModal.form.workEmail')}
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
              {t('home.bookDemoModal.form.company')}
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
                {t('home.bookDemoModal.form.industry')}
              </label>
              <Select
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              >
                <option value="it">{t('home.bookDemoModal.form.industries.it')}</option>
                <option value="construction">{t('home.bookDemoModal.form.industries.construction')}</option>
                <option value="healthcare">{t('home.bookDemoModal.form.industries.healthcare')}</option>
                <option value="education">{t('home.bookDemoModal.form.industries.education')}</option>
                <option value="manufacturing">{t('home.bookDemoModal.form.industries.manufacturing')}</option>
                <option value="government">{t('home.bookDemoModal.form.industries.government')}</option>
              </Select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--foreground)] mb-1">
                {t('home.bookDemoModal.form.assetsVolume')}
              </label>
              <Select
                value={formData.assetsCount}
                onChange={(e) => setFormData({ ...formData, assetsCount: e.target.value })}
              >
                <option value="50-500">{t('home.bookDemoModal.form.volumes.small')}</option>
                <option value="500-2500">{t('home.bookDemoModal.form.volumes.medium')}</option>
                <option value="2500-10000">{t('home.bookDemoModal.form.volumes.large')}</option>
                <option value="10000+">{t('home.bookDemoModal.form.volumes.enterprise')}</option>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full justify-center text-sm font-bold shadow-[var(--shadow-glow)] mt-4"
          >
            <span>{t('home.bookDemoModal.form.submit')}</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
      )}
    </Modal>
  );
}

export default BookDemoModal;
