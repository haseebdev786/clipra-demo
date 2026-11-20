"use client";

import Link from "next/link";
import { Apple } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-24 z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div
          className="relative text-center px-8 md:px-16 py-20 rounded-3xl overflow-hidden border border-[#0071E3]/30 shadow-sm reveal-on-scroll"
          style={{ background: "#F5F5F7" }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-5">
            Coming soon
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#1D1D1F] leading-tight mb-5">
            One clipboard for your Mac, iPhone, and iPad.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] max-w-xl mx-auto leading-relaxed mb-10">
            Clipra is in development for Mac, iPhone and iPad. Explore the plans and see what we are building.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] rounded-xl transition-all shadow-sm hover:shadow-sm active:scale-95"
            >
              <Apple className="w-5 h-5 fill-current" />
              <span>See planned pricing</span>
            </a>
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-[#1D1D1F] bg-black/[0.04] hover:bg-black/[0.04] border border-black/10 hover:border-black/10 rounded-xl transition-all"
            >
              <span>Read Product Roadmap ↗</span>
            </Link>
          </div>

          <div className="text-xs text-[#6E6E73]">
            Planned for macOS and iOS — the app is in development.
          </div>
        </div>
      </div>
    </section>
  );
}
