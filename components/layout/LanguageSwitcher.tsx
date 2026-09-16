"use client";

import React from "react";
import "flag-icons/css/flag-icons.min.css";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "us" },
  // Add more languages here as needed
  // { code: "fr", name: "Français", flag: "fr" },
  // { code: "es", name: "Español", flag: "es" },
];

export function LanguageSwitcher() {
  // Currently showing English only
  const currentLanguage = languages[0];

  return (
    <button
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-[var(--foreground-muted)] hover:bg-[var(--background-subtle)] transition-colors"
      aria-label="Change language"
      disabled={languages.length <= 1}
    >
      <span className={`fi fi-${currentLanguage.flag} text-lg`}></span>
      <span className="hidden sm:inline-block text-xs uppercase">
        {currentLanguage.code}
      </span>
    </button>
  );
}

export default LanguageSwitcher;
