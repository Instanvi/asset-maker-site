import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asset Master | Intelligent Asset Tracking & Lifecycle Platform",
  description:
    "Complete operational accountability in one platform. Track assets, automate inspections, and prove compliance without chasing spreadsheets.",
  keywords:
    "asset management, asset tracking, IT asset tracking, ITAM, CMMS, barcode scanner, QR asset tracking, equipment tracking, inspection workflows, audit compliance",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${manrope.variable}`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans text-base antialiased selection:bg-blue-600/15 selection:text-blue-700">
        {children}
      </body>
    </html>
  );
}
