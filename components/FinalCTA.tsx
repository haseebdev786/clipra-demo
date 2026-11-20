"use client";

import Link from "next/link";
import { Apple } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-24 z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div
          className="relative text-center px-8 md:px-16 py-20 rounded-3xl overflow-hidden border border-[#00E5BE]/30 shadow-[0_0_80px_rgba(0,102,255,0.25)] reveal-on-scroll"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(0,102,255,0.35) 0%, rgba(10,16,32,0.95) 70%)",
          }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#10F296] mb-5">
            Coming soon
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            Upgrade your clipboard to{" "}
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00E5BE] to-[#10F296] bg-clip-text text-transparent">
              liquid glass.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
            Clipra is in development for Mac, iPhone and iPad. Explore the plans and see what we are building.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-bold text-slate-900 bg-gradient-to-r from-[#00E5BE] to-[#10F296] hover:from-[#38F8D4] hover:to-[#44FBB0] rounded-xl transition-all shadow-[0_0_30px_rgba(0,229,190,0.4)] hover:shadow-[0_0_50px_rgba(16,242,150,0.7)] active:scale-95"
            >
              <Apple className="w-5 h-5 fill-current" />
              <span>Explore planned pricing</span>
            </a>
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all"
            >
              <span>Read Product Roadmap ↗</span>
            </Link>
          </div>

          <div className="text-xs text-slate-500">
            Requires macOS 26 Tahoe or later • iOS 26 companion app included
          </div>
        </div>
      </div>
    </section>
  );
}
