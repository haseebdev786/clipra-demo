"use client";

import Link from "next/link";

interface FooterProps {
  onOpenShortcuts?: () => void;
}

export default function Footer({ onOpenShortcuts }: FooterProps) {
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-10 bg-[#0B0D14] z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand Col */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#0066FF] p-[2px] shadow-sm">
                <div className="w-full h-full bg-[#0B0D14] rounded-[5px] grid grid-cols-2 gap-[2px] p-[3px]">
                  <span className="bg-[#0066FF] rounded-[1px]" />
                  <span className="bg-[#0066FF] rounded-[1px]" />
                  <span className="bg-[#0066FF] rounded-[1px]" />
                  <span className="bg-white/[0.06] rounded-[1px]" />
                </div>
              </div>
              <span className="font-extrabold text-base tracking-tight text-[#F1F5F9]">clipra</span>
            </Link>
            <p className="text-sm text-[#94A3B8] max-w-[280px] mb-4 leading-relaxed">
              The clipboard that organises itself. Built for Mac, iPhone and iPad. Clipra is in development.
            </p>
            <div className="text-xs text-[#94A3B8]">
              Concept & Architecture by AR Swift Private Limited.
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-5">
              Product
            </div>
            <ul className="flex flex-col gap-3 text-sm text-[#94A3B8]">
              {[
                { label: "Capabilities", href: "/features" },
                { label: "Smart Auto-Sort", href: "/features#smart-sort" },
                { label: "Text Transformer", href: "/features#transformer" },
                { label: "Clipra vs Paste", href: "/#comparison" },
                { label: "Pricing Tiers", href: "/pricing" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-[#0066FF] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-5">
              Resources
            </div>
            <ul className="flex flex-col gap-3 text-sm text-[#94A3B8]">
              <li>
                <Link href="/updates" className="hover:text-[#0066FF] transition-colors">
                  Product Updates & Roadmap
                </Link>
              </li>
              <li>
                <span className="text-[#94A3B8]">Privacy &amp; CloudKit — FAQ</span>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenShortcuts}
                  className="hover:text-[#0066FF] transition-colors text-left"
                >
                  Keyboard Shortcuts (⌘K)
                </button>
              </li>
              <li>
                <Link href="/updates#architecture" className="hover:text-[#0066FF] transition-colors">
                  Swift Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-5">
              Platforms
            </div>
            <ul className="flex flex-col gap-3 text-sm text-[#94A3B8]">
              {[
                "macOS Menu Bar App",
                "iOS Keyboard Extension",
                "iPadOS Split View",
                "Dynamic Island Widget",
              ].map((p) => (
                <li key={p}>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-7 flex items-center justify-between flex-wrap gap-4 text-xs text-[#94A3B8]">
          <div>© 2026 Clipra • AR Swift Private Limited. All rights reserved.</div>
          <div className="flex gap-5">
            <span>Privacy Policy (coming soon)</span>
            <span>Terms of Service (coming soon)</span>
            <Link href="/updates" className="hover:text-[#0066FF] transition-colors">
              Changelog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
