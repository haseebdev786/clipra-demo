"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const FREE_FEATURES = [
  "Last 50 clipboard items",
  "2 custom pinboards",
  "All keyboard shortcuts (⌘⇧V)",
  "Basic text transformations",
  "No iCloud sync",
];

const PRO_FEATURES = [
  "Unlimited clipboard history",
  "Smart Auto-Sort rules engine",
  "All 11 text transformations",
  "Private iCloud sync (Mac + iPhone + iPad)",
  "iOS keyboard extension & Dynamic Island",
  "Offline JSON export & biometric lock",
];

const LIFETIME_FEATURES = [
  "Everything in Pro",
  "All future major versions included",
  "No recurring subscription fees, ever",
  "Future updates included",
];

export default function Pricing() {
  const [billing, setBilling] = useState<"annual" | "monthly">("annual");
  const proPrice = billing === "annual" ? "14.99" : "1.99";
  const proPeriod = billing === "annual" ? "/ year" : "/ month";

  return (
    <section id="pricing" className="section bg-white">
      <div className="wrap">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <p className="kicker">Simple, fair pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
            No expiry anxiety. Upgrade when you&rsquo;re ready.
          </h2>
          <p className="lede mx-auto mt-5">
            Clipra is in development. These are the planned launch prices and features, and may
            change before release.
          </p>

          <div className="flex items-center justify-center mt-10">
            <div className="bg-black/[0.04] p-1 rounded-full border border-black/[0.07] flex" role="group" aria-label="Billing period">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                aria-pressed={billing === "monthly"}
                className={`min-h-[44px] px-5 rounded-full text-sm font-medium transition-colors ${
                  billing === "monthly" ? "bg-[#0066FF] text-white" : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
              >
                Monthly billing
              </button>
              <button
                type="button"
                onClick={() => setBilling("annual")}
                aria-pressed={billing === "annual"}
                className={`min-h-[44px] px-5 rounded-full text-sm font-medium transition-colors ${
                  billing === "annual" ? "bg-[#0066FF] text-white" : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
              >
                Annual (save 37%)
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          <div className="price-card p-8 flex flex-col justify-between reveal-on-scroll">
            <div>
              <p className="text-lg font-semibold text-[#1D1D1F] mb-1">Free</p>
              <p className="text-sm text-[#6E6E73] mb-5">Genuinely usable. Perfect for getting started.</p>
              <p className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-bold text-[#1D1D1F]">$</span>
                <span className="text-5xl font-bold tracking-tight text-[#1D1D1F] leading-none">0</span>
                <span className="text-sm text-[#6E6E73] ml-1">forever</span>
              </p>
              <ul className="space-y-3 text-sm text-[#424245]">
                {FREE_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="/updates" className="btn btn-outline w-full mt-8">
              Coming soon
            </a>
          </div>

          <div className="price-card featured p-8 flex flex-col justify-between reveal-on-scroll">
            <div>
              <p className="text-lg font-semibold text-[#1D1D1F] mb-1">Clipra Pro</p>
              <p className="text-sm text-[#6E6E73] mb-5">Full power across all your Mac, iPhone and iPad devices.</p>
              <p className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-bold text-[#1D1D1F]">$</span>
                <span className="text-5xl font-bold tracking-tight text-[#1D1D1F] leading-none">{proPrice}</span>
                <span className="text-sm text-[#6E6E73] ml-1">{proPeriod}</span>
              </p>
              <ul className="space-y-3 text-sm text-[#424245]">
                {PRO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="/updates" className="btn btn-primary w-full mt-8">
              Coming soon
            </a>
          </div>

          <div className="price-card p-8 flex flex-col justify-between reveal-on-scroll">
            <div>
              <p className="text-lg font-semibold text-[#1D1D1F] mb-1">Lifetime</p>
              <p className="text-sm text-[#6E6E73] mb-5">Pay once. Own Clipra forever with all future updates.</p>
              <p className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-bold text-[#1D1D1F]">$</span>
                <span className="text-5xl font-bold tracking-tight text-[#1D1D1F] leading-none">49.99</span>
                <span className="text-sm text-[#6E6E73] ml-1">one-time</span>
              </p>
              <ul className="space-y-3 text-sm text-[#424245]">
                {LIFETIME_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="/updates" className="btn btn-outline w-full mt-8">
              Coming soon
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-[#6E6E73] mt-10">
          Paste charges $29.99 a year. Clipra Pro is planned at $14.99 a year, and Lifetime at
          $49.99 once.
        </p>
      </div>
    </section>
  );
}
