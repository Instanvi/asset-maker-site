"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import LogoMarquee from "@/components/home/LogoMarquee";
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
      {/* Sticky Header with Products & Solutions Mega Menus */}
      <Header onBookDemo={handleOpenDemoModal} />

      <main className="flex-1">
        {/* 1. Hero Section with Live Simulated Scanner Mockup */}
        <HeroSection onBookDemo={handleOpenDemoModal} />

        {/* 2. Global Compliance & Scale Stats */}
        <StatsBar />

        {/* 3. Enterprise Client & Sponsor Logo Marquee */}
        <LogoMarquee />

        {/* 4. Why Asset Intelligence: 4 Verbs, Total Accountability */}
        <WhyAssetIntelligence onBookDemo={handleOpenDemoModal} />

        {/* 5. Intelligence in Action: 6 Core Workflows Grid */}
        <IntelligenceInAction onBookDemo={handleOpenDemoModal} />

        {/* 6. Built for Your Industry: 6 Sector Deep Dives */}
        <IndustrySolutions onBookDemo={handleOpenDemoModal} />

        {/* 7. One System of Record: 7 Interactive Steps from 01 to 07 */}
        <SystemOfRecord onBookDemo={handleOpenDemoModal} />

        {/* 8. Customer Story: Saint Francis University Case Study */}
        <CustomerStory onBookDemo={handleOpenDemoModal} />

        {/* 9. Interactive ROI & Labor Savings Calculator */}
        <RoiCalculator onBookDemo={handleOpenDemoModal} />

        {/* 10. Why Teams Choose Asset Master: 4 Field Ready Pillars */}
        <WhyTeamsChoose onBookDemo={handleOpenDemoModal} />

        {/* 11. Final Conversion Call-To-Action Banner */}
        <CtaBanner onBookDemo={handleOpenDemoModal} />
      </main>

      {/* Enterprise Multi-Column Footer */}
      <Footer />

      {/* Global Interactive Demo Booking Modal */}
      <BookDemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
      />
    </div>
  );
}
