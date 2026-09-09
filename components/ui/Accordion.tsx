"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemContextValue {
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItemContext = React.createContext<AccordionItemContextValue | undefined>(undefined);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
}

export function Accordion({ className, children, ...props }: AccordionProps) {
  return (
    <div className={cn("space-y-3 w-full", className)} {...props}>
      {children}
    </div>
  );
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  defaultOpen?: boolean;
}

export function AccordionItem({
  defaultOpen = false,
  className,
  children,
  ...props
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <AccordionItemContext.Provider value={{ isOpen, onToggle: () => setIsOpen(!isOpen) }}>
      <div
        className={cn(
          "rounded-2xl border border-[var(--border-custom)] bg-white overflow-hidden transition-all duration-200 shadow-xs",
          isOpen && "border-[var(--brand-primary)]/40 shadow-[var(--shadow-soft)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const context = React.useContext(AccordionItemContext);
  if (!context) throw new Error("AccordionTrigger must be used within AccordionItem");

  return (
    <button
      type="button"
      onClick={context.onToggle}
      className={cn(
        "flex w-full items-center justify-between p-5 text-left font-bold text-base text-[var(--foreground)] hover:text-[var(--brand-primary)] transition-colors cursor-pointer select-none",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn(
          "h-5 w-5 text-[var(--foreground-subtle)] shrink-0 transition-transform duration-200",
          context.isOpen && "rotate-180 text-[var(--brand-primary)]"
        )}
      />
    </button>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const context = React.useContext(AccordionItemContext);
  if (!context) throw new Error("AccordionContent must be used within AccordionItem");

  if (!context.isOpen) return null;

  return (
    <div
      className={cn(
        "px-5 pb-5 pt-0 text-sm text-[var(--foreground-muted)] leading-relaxed animate-in fade-in-50 duration-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
