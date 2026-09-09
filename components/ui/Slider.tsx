"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}

export function Slider({
  value,
  min,
  max,
  step = 1,
  onChange,
  className,
  ...props
}: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={cn("relative flex items-center select-none touch-none w-full", className)}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2.5 bg-[var(--surface-raised)] rounded-full appearance-none cursor-pointer accent-[var(--brand-primary)] focus:outline-none"
        style={{
          background: `linear-gradient(to right, var(--brand-primary) 0%, var(--brand-primary) ${percentage}%, var(--surface-raised) ${percentage}%, var(--surface-raised) 100%)`,
        }}
        {...props}
      />
    </div>
  );
}

export default Slider;
