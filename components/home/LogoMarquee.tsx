"use client";

import React from "react";
import Image from "next/image";

export function LogoMarquee() {
  const logos = [
    { name: "Amazon", src: "/images/Amazon_logo.svg.webp", width: 95, height: 26, h: "22px" },
    { name: "Walmart", src: "/images/Walmart_logo_(2008).svg.webp", width: 100, height: 26, h: "22px" },
    { name: "Costco", src: "/images/Costco-Logo.wine.svg", width: 95, height: 26, h: "24px" },
    { name: "DHL", src: "/images/DHL-Logo.wine.svg", width: 90, height: 26, h: "24px" },
    { name: "FedEx", src: "/images/FedEx_Express.webp", width: 80, height: 24, h: "20px" },
    { name: "UPS", src: "/images/United_Parcel_Service-Logo.wine.svg", width: 60, height: 28, h: "28px" },
    { name: "USPS", src: "/images/USPS_-_Color_Logo.svg", width: 85, height: 24, h: "20px" },
    { name: "DPD", src: "/images/DPD_id9sTo-S4f_0.svg", width: 75, height: 24, h: "22px" },
    { name: "eBay", src: "/images/EBay_logo.svg", width: 75, height: 26, h: "22px" },
    { name: "Valeo", src: "/images/Valeo_Logo.webp", width: 85, height: 26, h: "24px" },
    { name: "Wayfair", src: "/images/Wayfair_ida2qwHiJY_0.svg", width: 90, height: 24, h: "22px" },
    { name: "Alibaba", src: "/images/brandbird-alibaba-logotype.svg", width: 90, height: 24, h: "20px" },
    { name: "H&M", src: "/images/H&M-Logo.wine.svg", width: 75, height: 26, h: "24px" },
  ];

  return (
    <div className="py-8 bg-white border-y border-[var(--border-subtle)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--foreground-muted)]">
          Trusted by operations & facility leaders across 10,000+ organizations
        </p>
      </div>

      {/* Infinite Smooth Marquee Row */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]">
        <div className="flex w-max items-center gap-12 sm:gap-16 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-200 cursor-pointer"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                style={{ height: logo.h, width: "auto" }}
                className="max-w-[120px] object-contain select-none"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}

export default LogoMarquee;
