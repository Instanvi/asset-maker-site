"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import WhyAssetIntelligence from "@/components/home/WhyAssetIntelligence";
import IntelligenceInAction from "@/components/home/IntelligenceInAction";
import IndustrySolutions from "@/components/home/IndustrySolutions";
import SystemOfRecord from "@/components/home/SystemOfRecord";
import CustomerStory from "@/components/home/CustomerStory";
import RoiCalculator from "@/components/home/RoiCalculator";
import WhyTeamsChoose from "@/components/home/WhyTeamsChoose";
import CtaBanner from "@/components/home/CtaBanner";
import BookDemoModal from "@/components/home/BookDemoModal";

export default function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[var(--foreground)]">
      <Header onBookDemo={handleOpenDemoModal} />

      <main className="flex-1">
        <HeroSection onBookDemo={handleOpenDemoModal} />
        <StatsBar />
        <WhyAssetIntelligence onBookDemo={handleOpenDemoModal} />
        <IntelligenceInAction onBookDemo={handleOpenDemoModal} />
        <IndustrySolutions onBookDemo={handleOpenDemoModal} />
        <SystemOfRecord onBookDemo={handleOpenDemoModal} />
        <CustomerStory onBookDemo={handleOpenDemoModal} />
        <RoiCalculator onBookDemo={handleOpenDemoModal} />
        <WhyTeamsChoose onBookDemo={handleOpenDemoModal} />
        <CtaBanner onBookDemo={handleOpenDemoModal} />
      </main>
      <Footer />
      <BookDemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
      />
    </div>
  );
}
