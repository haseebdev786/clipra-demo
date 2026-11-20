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
    <header className="fixed top-3 left-0 right-0 z-50 px-4 pointer-events-none">
      <div className="pointer-events-auto max-w-[1024px] mx-auto rounded-full bg-[#0B0D14]/70 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_16px_40px_rgba(0,0,0,0.5)] px-4 sm:px-5">
        <div className="flex items-center justify-between h-12">
          <Link href="/" className="flex items-center gap-2" aria-label="Clipra Home">
            <span
              className="w-6 h-6 rounded-md bg-[#0066FF] grid grid-cols-2 gap-[2px] p-[3px] shadow-[0_4px_14px_rgba(0,102,255,0.45)]"
              aria-hidden="true"
            >
              <span className="bg-white/90 rounded-[1px]" />
              <span className="bg-white/60 rounded-[1px]" />
              <span className="bg-white/60 rounded-[1px]" />
              <span className="bg-white rounded-[1px]" />
            </span>
            <span className="font-semibold text-[17px] tracking-tight text-[#F1F5F9]">
              Clipra
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-1 text-xs text-[#F1F5F9]"
            aria-label="Main navigation"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-md hover:text-[#0066FF] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenShortcuts}
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono font-medium text-[#94A3B8] bg-white/[0.06] hover:bg-white/[0.10] border border-white/10 rounded-full transition-colors"
              title="Keyboard Shortcuts (⌘K)"
            >
              <Command className="w-3 h-3" />
              <span>K</span>
            </button>

            <a
              href="/pricing"
              className="inline-flex items-center px-3.5 py-1.5 text-xs font-medium text-white bg-[#0066FF] hover:bg-[#2E82FF] rounded-full transition-colors shadow-[0_6px_18px_rgba(0,102,255,0.4)]"
            >
              Download free
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#F1F5F9] rounded-md hover:bg-white/[0.06]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-1 border-t border-white/10 flex flex-col gap-1 text-sm text-[#F1F5F9]">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 rounded-lg hover:bg-white/[0.06]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/features#transformer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 rounded-lg hover:bg-white/[0.06]"
            >
              Text Transformer
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShortcuts?.();
              }}
              className="py-2 px-2 text-left rounded-lg hover:bg-white/[0.06] text-[#0066FF] font-mono text-xs flex items-center justify-between"
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
