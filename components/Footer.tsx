"use client";

import Link from "next/link";

interface FooterProps {
  onOpenShortcuts?: () => void;
}

export default function Footer({ onOpenShortcuts }: FooterProps) {
  return (
    <footer className="relative border-t border-white/8 pt-16 pb-10 bg-[#04060B] z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand Col */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00E5BE] p-[2px] shadow-[0_0_12px_rgba(0,229,190,0.4)]">
                <div className="w-full h-full bg-[#05070D] rounded-[5px] grid grid-cols-2 gap-[2px] p-[3px]">
                  <span className="bg-[#0066FF] rounded-[1px]" />
                  <span className="bg-[#00E5BE] rounded-[1px]" />
                  <span className="bg-[#10F296] rounded-[1px]" />
                  <span className="bg-white rounded-[1px]" />
                </div>
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">clipra</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-[280px] mb-4 leading-relaxed">
              The clipboard that organizes itself. Engineered with Swift, Apple CloudKit, and macOS
              Liquid Glass design.
            </p>
            <div className="text-xs text-slate-600">
              Concept & Architecture by AR Swift Private Limited.
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
              Product
            </div>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              {[
                { label: "Capabilities", href: "/features" },
                { label: "Smart Auto-Sort", href: "/features#smart-sort" },
                { label: "Text Transformer", href: "/features#transformer" },
                { label: "vs Paste App", href: "/features#comparison" },
                { label: "Pricing Tiers", href: "/pricing" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-[#00E5BE] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
              Resources
            </div>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <Link href="/updates" className="hover:text-[#00E5BE] transition-colors">
                  Product Updates & Roadmap
                </Link>
              </li>
              <li>
                <a href="/pricing#faq" className="hover:text-[#00E5BE] transition-colors">
                  Privacy & CloudKit
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenShortcuts}
                  className="hover:text-[#00E5BE] transition-colors text-left"
                >
                  Keyboard Shortcuts (⌘K)
                </button>
              </li>
              <li>
                <Link href="/updates#architecture" className="hover:text-[#00E5BE] transition-colors">
                  Swift Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
              Platforms
            </div>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
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
        <div className="border-t border-white/6 pt-7 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-500">
          <div>© 2026 Clipra • AR Swift Private Limited. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="/pricing#faq" className="hover:text-[#00E5BE] transition-colors">
              Privacy Policy
            </a>
            <a href="/pricing#faq" className="hover:text-[#00E5BE] transition-colors">
              Terms of Service
            </a>
            <Link href="/updates" className="hover:text-[#00E5BE] transition-colors">
              Changelog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
