"use client";

import { useState } from "react";
import { Check, Apple } from "lucide-react";

const FREE_FEATURES = [
  "Up to 50 clipboard items history",
  "2 Custom Pinboards",
  "All Keyboard Shortcuts (⌘⇧V)",
  "Basic Text Transformations",
];

const PRO_FEATURES = [
  "Unlimited clipboard history (No caps)",
  "Smart Auto-Sort Rules Engine",
  "All 11 Text Transformations",
  "Private iCloud Sync (Mac + iPhone + iPad)",
  "iOS Keyboard Extension & Dynamic Island",
  "Offline JSON Export & Biometric Lock",
];

const LIFETIME_FEATURES = [
  "Everything in Pro Unlimited",
  "All Future Major Versions Included",
  "No recurring subscription fees ever",
  "Future updates included",
];

export default function Pricing() {
  const [billing, setBilling] = useState<"annual" | "monthly">("annual");
  const proPrice = billing === "annual" ? "14.99" : "1.99";
  const proPeriod = billing === "annual" ? "/ year" : "/ month";

  return (
    <section id="pricing" className="relative py-24 z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-4">
            Simple, Fair Monetization
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F] mb-5 leading-tight">
            No expiry anxiety.{" "}
            <span className="">
              Upgrade when you&apos;re ready.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed mb-10">
            Clipra is in development. These are the planned launch prices and features, and may change before release.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center">
            <div className="bg-black/[0.04] p-1 rounded-full border border-black/10 flex">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  billing === "monthly"
                    ? "bg-[#0071E3] text-white shadow-sm"
                    : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                onClick={() => setBilling("annual")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  billing === "annual"
                    ? "bg-[#0071E3] text-white shadow-sm"
                    : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
              >
                Annual (Save 37%)
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
          {/* Free */}
          <div className="glass-card price-card p-9 flex flex-col justify-between reveal-on-scroll stagger-1">
            <div>
              <div className="text-lg font-bold text-[#1D1D1F] mb-1">Free Tier</div>
              <div className="text-sm text-[#6E6E73] mb-5">
                Genuinely usable. Perfect for getting started.
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-bold text-[#1D1D1F]">$</span>
                <span className="text-5xl font-extrabold tracking-tight text-[#1D1D1F] leading-none">0</span>
                <span className="text-sm text-[#6E6E73] ml-1">forever</span>
              </div>
              <ul className="space-y-3 text-sm text-[#6E6E73]">
                {FREE_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#0071E3] stroke-[3] flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="/updates"
              className="mt-8 w-full btn btn-glass justify-center text-sm font-semibold py-3"
            >
              Coming soon
            </a>
          </div>

          {/* Pro — Featured */}
          <div className="relative glass-card price-card featured p-9 flex flex-col justify-between border-[#0071E3]/30 reveal-on-scroll stagger-2">
            <div>
              <div className="text-lg font-bold text-[#1D1D1F] mb-1">Clipra Pro</div>
              <div className="text-sm text-[#6E6E73] mb-5">
                Full power across all your Mac, iPhone and iPad devices.
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-bold text-[#1D1D1F]">$</span>
                <span className="text-5xl font-extrabold tracking-tight text-[#1D1D1F] leading-none">
                  {proPrice}
                </span>
                <span className="text-sm text-[#6E6E73] ml-1">{proPeriod}</span>
              </div>
              <ul className="space-y-3 text-sm text-[#6E6E73]">
                {PRO_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#0071E3] stroke-[3] flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="/updates"
              className="mt-8 w-full btn btn-electric justify-center text-sm font-bold py-3"
            >
              Coming soon
            </a>
          </div>

          {/* Lifetime */}
          <div className="glass-card price-card p-9 flex flex-col justify-between reveal-on-scroll stagger-3">
            <div>
              <div className="text-lg font-bold text-[#1D1D1F] mb-1">Lifetime License</div>
              <div className="text-sm text-[#6E6E73] mb-5">
                Pay once. Own Clipra forever with all future updates.
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-bold text-[#1D1D1F]">$</span>
                <span className="text-5xl font-extrabold tracking-tight text-[#1D1D1F] leading-none">49.99</span>
                <span className="text-sm text-[#6E6E73] ml-1">one-time</span>
              </div>
              <ul className="space-y-3 text-sm text-[#6E6E73]">
                {LIFETIME_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#0071E3] stroke-[3] flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="/updates"
              className="mt-8 w-full btn btn-glass justify-center text-sm font-semibold py-3"
            >
              Coming soon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
