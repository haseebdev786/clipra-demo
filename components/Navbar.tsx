"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Command } from "lucide-react";

interface NavbarProps {
  onOpenShortcuts?: () => void;
}

const LINKS = [
  { label: "Features", href: "/features" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Roadmap", href: "/updates" },
];

export default function Navbar({ onOpenShortcuts }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12">
          <Link href="/" className="flex items-center gap-2" aria-label="Clipra Home">
            <span
              className="w-6 h-6 rounded-md bg-[#0071E3] grid grid-cols-2 gap-[2px] p-[3px]"
              aria-hidden="true"
            >
              <span className="bg-white/90 rounded-[1px]" />
              <span className="bg-white/60 rounded-[1px]" />
              <span className="bg-white/60 rounded-[1px]" />
              <span className="bg-white rounded-[1px]" />
            </span>
            <span className="font-semibold text-[17px] tracking-tight text-[#1D1D1F]">
              Clipra
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-1 text-xs text-[#1D1D1F]"
            aria-label="Main navigation"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-md hover:text-[#0071E3] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenShortcuts}
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono font-medium text-[#6E6E73] bg-black/[0.04] hover:bg-black/[0.07] border border-black/10 rounded-full transition-colors"
              title="Keyboard Shortcuts (⌘K)"
            >
              <Command className="w-3 h-3" />
              <span>K</span>
            </button>

            <a
              href="/pricing"
              className="inline-flex items-center px-3.5 py-1.5 text-xs font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] rounded-full transition-colors"
            >
              Download free
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#1D1D1F] rounded-md hover:bg-black/[0.05]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-1 border-t border-black/5 flex flex-col gap-1 text-sm text-[#1D1D1F]">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 rounded-lg hover:bg-black/[0.04]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/features#transformer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 rounded-lg hover:bg-black/[0.04]"
            >
              Text Transformer
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShortcuts?.();
              }}
              className="py-2 px-2 text-left rounded-lg hover:bg-black/[0.04] text-[#0071E3] font-mono text-xs flex items-center justify-between"
            >
              <span>Keyboard Shortcuts</span>
              <span>⌘K</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
