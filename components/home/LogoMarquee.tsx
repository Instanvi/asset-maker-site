"use client";

import React from "react";

const logos = [
  { name: "DHL", src: "/images/DHL-Logo.wine.svg" },
  { name: "FedEx", src: "/images/FedEx_Express.webp" },
  { name: "UPS", src: "/images/United_Parcel_Service-Logo.wine.svg" },
  { name: "USPS", src: "/images/USPS_-_Color_Logo.svg" },
  { name: "DPD", src: "/images/DPD_id9sTo-S4f_0.svg" },
  { name: "Valeo", src: "/images/Valeo_Logo.webp" },
];

export function LogoMarquee() {
  return (
    <div className="py-8 bg-white border-y border-[var(--border-subtle)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--foreground-muted)]">
          Trusted by operations & fleet teams
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]">
        <div className="flex w-max items-center gap-12 sm:gap-16 marquee-track hover:[animation-play-state:paused]">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex h-6 items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-200 cursor-pointer"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full w-auto max-w-[120px] object-contain select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 35s linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-33.3334%);
          }
        }
      `}</style>
    </div>
  );
}

export default LogoMarquee;