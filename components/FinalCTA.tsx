"use client";

import Link from "next/link";
import { Apple } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-24 z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div
          className="relative text-center px-8 md:px-16 py-20 rounded-[28px] overflow-hidden reveal-on-scroll"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03))",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.14), 0 24px 60px rgba(0,0,0,0.55)",
          }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-5">
            Coming soon
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F1F5F9] leading-tight mb-5">
            One clipboard for your Mac, iPhone, and iPad.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto leading-relaxed mb-10">
            Clipra is in development for Mac, iPhone and iPad. Explore the plans and see what we are building.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-medium text-white bg-[#0066FF] hover:bg-[#2E82FF] rounded-xl transition-all shadow-sm hover:shadow-sm active:scale-95"
            >
              <Apple className="w-5 h-5 fill-current" />
              <span>See planned pricing</span>
            </a>
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-[#F1F5F9] bg-white/[0.06] hover:bg-white/[0.06] border border-white/10 hover:border-white/10 rounded-xl transition-all"
            >
              <span>Read Product Roadmap ↗</span>
            </Link>
          </div>

          <div className="text-xs text-[#94A3B8]">
            Planned for macOS and iOS — the app is in development.
          </div>
        </div>
      </div>
    </section>
  );
}
