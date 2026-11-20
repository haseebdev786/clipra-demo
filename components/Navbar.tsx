"use client";

import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-3 left-0 right-0 z-50">
      <div className="wrap">
        <div
          className={`rounded-full border backdrop-blur-2xl transition-all duration-500 ${
            scrolled
              ? "bg-white/70 border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_16px_40px_rgba(13,38,76,0.16),0_4px_12px_rgba(13,38,76,0.08)]"
              : "bg-white/55 border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_30px_rgba(13,38,76,0.1),0_2px_8px_rgba(13,38,76,0.05)]"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-4 sm:px-5">
            <Link href="/" className="flex items-center gap-2" aria-label="Clipra Home">
              <span
                className="w-7 h-7 rounded-lg bg-[#0066FF] grid grid-cols-2 gap-[2px] p-[3px] shadow-[0_4px_12px_rgba(0,102,255,0.4)]"
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
                  className="px-3 py-3 rounded-full hover:text-[#0066FF] hover:bg-white/50 transition-colors"
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
                className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#1D1D1F] rounded-full hover:bg-white/60"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            className="md:hidden mt-2 rounded-[28px] bg-white/70 backdrop-blur-2xl border border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_20px_50px_rgba(13,38,76,0.16)] px-4 py-3 flex flex-col text-[16px] text-[#1D1D1F]"
            aria-label="Mobile navigation"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-2 rounded-2xl hover:bg-white/60"
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
              className="py-3 px-2 text-left rounded-2xl hover:bg-white/60 text-[#0066FF] text-sm flex items-center justify-between"
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
