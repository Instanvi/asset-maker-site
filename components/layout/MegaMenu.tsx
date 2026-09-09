"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MegaMenuItem {
  title: string;
  description?: string;
  href: string;
  icon?: React.ReactNode;
}

export interface MegaMenuGroup {
  heading?: string;
  items: MegaMenuItem[];
}

export interface MegaMenuTab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  groups?: MegaMenuGroup[];
  items?: MegaMenuItem[];
}

export interface MegaMenuProps {
  label: string;
  href?: string;
  tabs?: MegaMenuTab[];
  directItems?: MegaMenuItem[];
  directGroups?: MegaMenuGroup[];
  featured?: {
    title: string;
    description: string;
    href: string;
    ctaText?: string;
  };
}

export function MegaMenu({
  label,
  href,
  tabs,
  directItems,
  directGroups,
  featured,
}: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTabId, setActiveTabId] = useState<string>(
    tabs && tabs.length > 0 ? tabs[0].id : ""
  );
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const hasDropdown =
    (tabs && tabs.length > 0) ||
    (directItems && directItems.length > 0) ||
    (directGroups && directGroups.length > 0);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 180);
  };

  if (!hasDropdown && href) {
    return (
      <Link
        href={href}
        className="px-3.5 py-2 text-sm font-semibold text-[var(--foreground-muted)] hover:text-[var(--brand-primary)] transition-colors rounded-md flex items-center gap-1 cursor-pointer"
      >
        {label}
      </Link>
    );
  }

  const activeTab = tabs?.find((t) => t.id === activeTabId) || tabs?.[0];

  // Resolve groups to display
  let groupsToRender: MegaMenuGroup[] = [];
  if (activeTab) {
    if (activeTab.groups && activeTab.groups.length > 0) {
      groupsToRender = activeTab.groups;
    } else if (activeTab.items && activeTab.items.length > 0) {
      groupsToRender = [{ items: activeTab.items }];
    }
  } else if (directGroups && directGroups.length > 0) {
    groupsToRender = directGroups;
  } else if (directItems && directItems.length > 0) {
    groupsToRender = [{ items: directItems }];
  }

  const totalItems = groupsToRender.reduce(
    (acc, group) => acc + group.items.length,
    0
  );

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={cn(
          "flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-[var(--foreground-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--surface-raised)] transition-all rounded-md cursor-pointer select-none",
          isOpen && "text-[var(--brand-primary)] font-bold bg-[var(--surface-raised)]"
        )}
      >
        <span>{label}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-[var(--foreground-subtle)] transition-transform duration-200",
            isOpen && "rotate-180 text-[var(--brand-primary)]"
          )}
        />
      </button>

      {isOpen && (
        <div
          className={cn(
            "fixed left-1/2 -translate-x-1/2 top-[68px] z-50 bg-white border border-[var(--border-custom)] rounded-xl shadow-[var(--shadow-card)] overflow-hidden animate-in fade-in-0 zoom-in-98 duration-150",
            tabs && tabs.length > 1
              ? "w-[min(1060px,calc(100vw-2rem))]"
              : "w-[min(800px,calc(100vw-2rem))]"
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex max-h-[82vh]">
            {/* Left Tabs (if multi-tab) */}
            {tabs && tabs.length > 1 && (
              <div className="w-60 bg-[var(--surface)] border-r border-[var(--border-custom)] p-3 space-y-1 shrink-0 overflow-y-auto">
                <div className="px-3 py-1 text-[10px] font-extrabold text-[var(--foreground-subtle)] uppercase tracking-wider mb-1">
                  Categories
                </div>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onMouseEnter={() => setActiveTabId(tab.id)}
                    onClick={() => setActiveTabId(tab.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg text-left transition-all cursor-pointer group",
                      activeTabId === tab.id
                        ? "bg-white text-[var(--brand-primary)] shadow-xs border border-[var(--border-custom)] font-bold"
                        : "text-[var(--foreground-muted)] hover:bg-white/70 hover:text-[var(--foreground)]"
                    )}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {tab.icon && (
                        <span
                          className={cn(
                            "shrink-0 transition-colors",
                            activeTabId === tab.id
                              ? "text-[var(--brand-primary)]"
                              : "text-[var(--foreground-subtle)] group-hover:text-[var(--brand-primary)]"
                          )}
                        >
                          {tab.icon}
                        </span>
                      )}
                      <span className="truncate">{tab.label}</span>
                    </div>
                    <span
                      className={cn(
                        "text-xs transition-transform opacity-60 group-hover:opacity-100",
                        activeTabId === tab.id
                          ? "text-[var(--brand-primary)] translate-x-0.5 opacity-100 font-bold"
                          : "text-[var(--foreground-subtle)]"
                      )}
                    >
                      ›
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Content Groups & Items Grid */}
            <div className="flex-1 p-5 overflow-y-auto">
              <div className="space-y-5">
                {groupsToRender.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-2.5">
                    {group.heading && (
                      <div className="text-[11px] font-extrabold text-[var(--foreground-subtle)] uppercase tracking-wider pb-1 border-b border-[var(--border-subtle)]">
                        {group.heading}
                      </div>
                    )}
                    <div
                      className={cn(
                        "grid gap-2",
                        group.items.length > 3 || totalItems > 4
                          ? "grid-cols-1 sm:grid-cols-2"
                          : "grid-cols-1"
                      )}
                    >
                      {group.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="group flex items-start gap-2.5 p-2 rounded-lg hover:bg-[var(--surface)] border border-transparent hover:border-[var(--border-custom)] transition-all duration-150"
                        >
                          {item.icon && (
                            <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-colors shrink-0 mt-0.5">
                              {item.icon}
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-bold text-[var(--foreground)] group-hover:text-[var(--brand-primary)] transition-colors leading-tight mb-0.5">
                              {item.title}
                            </div>
                            {item.description && (
                              <p className="text-[11px] text-[var(--foreground-muted)] leading-relaxed line-clamp-2">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quick-Action Bar */}
              <div className="mt-5 pt-3.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--foreground-muted)]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Sparkles className="h-3.5 w-3.5 text-[var(--brand-primary)]" />
                  Turn everyday asset activity into audit-ready intelligence.
                </span>
                <Link
                  href="/#demo"
                  onClick={() => setIsOpen(false)}
                  className="font-bold text-[var(--brand-primary)] hover:underline flex items-center gap-1"
                >
                  Request a guided walkthrough <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Featured Card (Optional) */}
            {featured && (
              <div className="w-64 bg-[var(--surface-dark)] p-5 text-white flex flex-col justify-between shrink-0 border-l border-[var(--surface-dark-border)]">
                <div>
                  <h4 className="text-sm font-bold text-white mb-2 leading-tight">
                    {featured.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {featured.description}
                  </p>
                </div>
                <Link
                  href={featured.href}
                  onClick={() => setIsOpen(false)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--brand-primary-light)] hover:text-white transition-colors"
                >
                  {featured.ctaText || "Learn more"} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MegaMenu;
