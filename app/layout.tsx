// Root layout — intentionally minimal.
// The middleware redirects "/" to the locale-prefixed path (e.g. /en).
// The actual <html> and <body> tags are in app/[locale]/layout.tsx.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
