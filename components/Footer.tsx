"use client";

import Link from "next/link";

interface FooterProps {
  onOpenShortcuts?: () => void;
}

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "Pricing", href: "/pricing" },
      { label: "For Teams", href: "/for-teams" },
      { label: "Updates", href: "/updates" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Roadmap", href: "/updates" },
      { label: "Smart Auto-Sort", href: "/features#smart-sort" },
      { label: "Text Transformer", href: "/features#transformer" },
      { label: "Questions", href: "/pricing#faq" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Clipra vs Paste", href: "/#comparison" },
      { label: "Clipra vs macOS", href: "/#comparison" },
      { label: "Planned pricing", href: "/pricing" },
    ],
  },
];

export default function Footer({ onOpenShortcuts }: FooterProps) {
  return (
    <footer className="band-dark relative pt-16 pb-10 overflow-hidden">
      <div aria-hidden="true" className="halo w-[480px] h-[240px] bg-[#0066FF]/15 -top-24 left-1/2 -translate-x-1/2" />
      <div className="wrap relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span
                className="w-7 h-7 rounded-lg bg-[#0066FF] grid grid-cols-2 gap-[2px] p-[3px]"
                aria-hidden="true"
              >
                <span className="bg-white rounded-[1px]" />
                <span className="bg-white/70 rounded-[1px]" />
                <span className="bg-white/70 rounded-[1px]" />
                <span className="bg-white/40 rounded-[1px]" />
              </span>
              <span className="font-semibold text-lg tracking-tight text-white">Clipra</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-[280px] mb-4" style={{ color: "#94A3B8" }}>
              The clipboard that organises itself. Built for Mac, iPhone and iPad. Clipra is in
              development.
            </p>
            <p className="text-xs" style={{ color: "#94A3B8" }}>
              Concept and architecture by AR Swift Private Limited.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white mb-5">{col.title}</p>
              <ul className="flex flex-col gap-3 text-sm" style={{ color: "#94A3B8" }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="border-t pt-7 flex items-center justify-between flex-wrap gap-4 text-xs"
          style={{ borderColor: "rgba(255,255,255,0.1)", color: "#94A3B8" }}
        >
          <p>© 2026 Clipra · AR Swift Private Limited. All rights reserved.</p>
          <div className="flex gap-5">
            <span>Privacy Policy (coming soon)</span>
            <span>Terms of Use (coming soon)</span>
            <button
              type="button"
              onClick={onOpenShortcuts}
              className="hover:text-white transition-colors"
            >
              Keyboard Shortcuts (⌘K)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
