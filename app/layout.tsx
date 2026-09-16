// Root layout — intentionally bare.
// The middleware automatically redirects any request
// at "/" to the locale-prefixed path (e.g. /en).
// The actual <html> shell lives in app/[locale]/layout.tsx.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
