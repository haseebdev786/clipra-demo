"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Apple, Menu, X, Command } from "lucide-react";

interface NavbarProps {
  onOpenShortcuts?: () => void;
}

export default function Navbar({ onOpenShortcuts }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto max-w-[720px] mx-auto rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#080C16]/85 backdrop-blur-2xl border border-white/12 shadow-[0_12px_40px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.12)]"
            : "bg-[#090E1A]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]"
        }`}
      >
        <div className="flex items-center justify-between px-3.5 py-1.5 sm:px-4 sm:py-2">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform active:scale-95"
            aria-label="Clipra Home"
          >
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00E5BE] p-[2px] shadow-[0_0_14px_rgba(0,229,190,0.45)]">
              <div className="w-full h-full bg-[#05070D] rounded-[6px] grid grid-cols-2 gap-[2px] p-[3px]">
                <span className="bg-[#0066FF] rounded-[1.5px]" />
                <span className="bg-[#00E5BE] rounded-[1.5px]" />
                <span className="bg-[#10F296] rounded-[1.5px]" />
                <span className="bg-white rounded-[1.5px]" />
              </div>
            </div>
            <span className="font-extrabold text-sm tracking-tight text-white group-hover:text-[#00E5BE] transition-colors">
              clipra
            </span>
          </Link>

          {/* Desktop Nav Links (Clean 4 Links) */}
          <nav
            className="hidden md:flex items-center gap-1 text-[13px] font-medium text-slate-300"
            aria-label="Main navigation"
          >
            <a
              href="/features"
              className="px-3 py-1 rounded-full hover:text-white hover:bg-white/5 transition-colors"
            >
              Features
            </a>
            <a
              href="/use-cases"
              className="px-3 py-1 rounded-full hover:text-white hover:bg-white/5 transition-colors"
            >
              Use cases
            </a>
            <a
              href="/pricing"
              className="px-3 py-1 rounded-full hover:text-white hover:bg-white/5 transition-colors"
            >
              Pricing
            </a>
            <Link
              href="/updates"
              className="px-3 py-1 rounded-full hover:text-white hover:bg-white/5 transition-colors"
            >
              Roadmap
            </Link>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenShortcuts}
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00E5BE]/40 rounded-full transition-all shadow-sm"
              title="Keyboard Shortcuts (⌘K)"
            >
              <Command className="w-3 h-3 text-[#00E5BE]" />
              <span>K</span>
            </button>

            <a
              href="/pricing"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#1A75FF] hover:to-[#0066FF] border border-white/20 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(0,102,255,0.45)] hover:shadow-[0_0_30px_rgba(0,102,255,0.7)] active:scale-95"
            >
              <Apple className="w-3.5 h-3.5 fill-current" />
              <span>See plans</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-300 hover:text-white rounded-full bg-white/5 border border-white/10"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 pt-2 border-t border-white/10 flex flex-col gap-2 text-sm text-slate-300">
            <a
              href="/features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Features
            </a>
            <a
              href="/use-cases"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Use cases
            </a>
            <a
              href="/features#transformer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Text Transformer
            </a>
            <a
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Pricing
            </a>
            <Link
              href="/updates"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Roadmap
            </Link>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShortcuts?.();
              }}
              className="py-1.5 px-3 text-left rounded-lg hover:bg-white/5 text-[#00E5BE] font-mono text-xs flex items-center justify-between"
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
