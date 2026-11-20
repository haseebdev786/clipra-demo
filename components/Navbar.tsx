"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Command } from "lucide-react";

interface NavbarProps {
  onOpenShortcuts?: () => void;
}

const LINKS = [
  { label: "Use Cases", href: "/use-cases" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Updates", href: "/updates" },
  { label: "For Teams", href: "/for-teams" },
];

export default function Navbar({ onOpenShortcuts }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/[0.06]">
      <div className="wrap">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" aria-label="Clipra Home">
            <span
              className="w-7 h-7 rounded-lg bg-[#0066FF] grid grid-cols-2 gap-[2px] p-[3px]"
              aria-hidden="true"
            >
              <span className="bg-white rounded-[1px]" />
              <span className="bg-white/70 rounded-[1px]" />
              <span className="bg-white/70 rounded-[1px]" />
              <span className="bg-white/40 rounded-[1px]" />
            </span>
            <span className="font-semibold text-[19px] tracking-tight text-[#1D1D1F]">
              Clipra
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-1 text-[15px] text-[#1D1D1F]"
            aria-label="Main navigation"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-3 rounded-lg hover:text-[#0066FF] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenShortcuts}
              className="hidden sm:inline-flex items-center gap-1.5 min-h-[44px] px-3 text-[13px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] rounded-full transition-colors"
              title="Keyboard Shortcuts (⌘K)"
              aria-label="Keyboard shortcuts"
            >
              <Command className="w-4 h-4" aria-hidden="true" />
              <span className="font-mono">⌘K</span>
            </button>

            <a href="/pricing" className="btn btn-primary !min-h-[40px] !py-2.5 !px-5 !text-sm">
              Try for free
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#1D1D1F] rounded-lg hover:bg-black/[0.05]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            className="md:hidden pb-4 pt-1 border-t border-black/[0.06] flex flex-col text-[16px] text-[#1D1D1F]"
            aria-label="Mobile navigation"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-2 rounded-lg hover:bg-black/[0.04]"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShortcuts?.();
              }}
              className="py-3 px-2 text-left rounded-lg hover:bg-black/[0.04] text-[#0066FF] text-sm flex items-center justify-between"
            >
              <span>Keyboard Shortcuts</span>
              <span className="font-mono">⌘K</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
