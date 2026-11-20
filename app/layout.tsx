import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clipra — Everything you copy, on every device | Mac, iPhone & iPad",
  description:
    "Clipra is a clipboard manager in development for Mac, iPhone and iPad. Anything you copied, back in seconds — organised, searchable, and in sync.",
  other: {
    "page-type": "software",
    "site-kind": "software",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
