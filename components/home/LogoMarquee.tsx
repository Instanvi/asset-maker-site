"use client";

import React from "react";
import { useTranslations } from "next-intl";

const logos = [
  { src: "/images/Amazon_logo.svg.webp", alt: "Amazon", h: "30px" },
  { src: "/images/brandbird-alibaba-logotype.svg", alt: "Alibaba", h: "28px" },
  { src: "/images/EBay_logo.svg", alt: "eBay", h: "30px" },
  { src: "/images/aliexpress-logo-5a8f.webp", alt: "AliExpress", h: "100px" },
  { src: "/images/DPD_id9sTo-S4f_0.svg", alt: "DPD", h: "30px" },
  { src: "/images/United_Parcel_Service-Logo.wine.svg", alt: "UPS", h: "70px" },
  { src: "/images/DHL-Logo.wine.svg", alt: "DHL", h: "100px" },
  { src: "/images/FedEx_Express.webp", alt: "FedEx", h: "30px" },
  { src: "/images/Valeo_Logo.webp", alt: "Valeo", h: "50px" },
];

export function LogoMarquee() {
  const t = useTranslations();

  return (
    <div className="py-6 sm:py-8 bg-white border-y border-[var(--border-subtle)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4 sm:mb-5 text-center">
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--foreground-muted)]">
          {t('home.logoMarquee.trustedBy')}
        </p>
      </div>

      <div className="group flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* First copy */}
        <div className="flex items-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8">
          {logos.map((logo) => (
            <div
              key={`a-${logo.alt}`}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: `calc(${logo.h} * 0.7)`, width: "auto" }}
                className="object-contain sm:hidden"
              />
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: logo.h, width: "auto" }}
                className="object-contain hidden sm:block"
              />
            </div>
          ))}
        </div>

        {/* Second copy */}
        <div className="flex items-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8" aria-hidden="true">
          {logos.map((logo) => (
            <div
              key={`b-${logo.alt}`}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: `calc(${logo.h} * 0.7)`, width: "auto" }}
                className="object-contain sm:hidden"
              />
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: logo.h, width: "auto" }}
                className="object-contain hidden sm:block"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}

export default LogoMarquee;