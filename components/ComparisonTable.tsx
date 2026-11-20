"use client";

import { Check } from "lucide-react";

const ROWS = [
  {
    feature: "Annual subscription price",
    clipra: "$14.99 / year (planned)",
    paste: "$29.99 / year",
    macos: "Included in macOS",
    clipraCheck: false,
  },
  {
    feature: "Lifetime licence option",
    clipra: "$49.99 once",
    paste: "$99.99 once",
    macos: "—",
    clipraCheck: true,
  },
  {
    feature: "Smart Auto-Sort rules",
    clipra: "Planned for v1.0",
    paste: "Not built (125 requests)",
    macos: "—",
    clipraCheck: true,
  },
  {
    feature: "Text Transformer (11 tools)",
    clipra: "Planned for v1.0",
    paste: "Raw text only",
    macos: "—",
    clipraCheck: true,
  },
  {
    feature: "Clipboard history limit",
    clipra: "Unlimited (Pro, planned)",
    paste: "Unlimited",
    macos: "7 days only",
    clipraCheck: true,
  },
  {
    feature: "iPhone & iPad sync",
    clipra: "Private iCloud (planned)",
    paste: "Private iCloud",
    macos: "Mac only",
    clipraCheck: true,
  },
  {
    feature: "iOS keyboard extension",
    clipra: "Custom keyboard (planned)",
    paste: "Custom keyboard",
    macos: "—",
    clipraCheck: true,
  },
  {
    feature: "Offline JSON export / import",
    clipra: "Planned for v1.0",
    paste: "No export (161 requests)",
    macos: "—",
    clipraCheck: true,
  },
  {
    feature: "Biometric security",
    clipra: "Face ID & Touch ID, iPhone & iPad (planned)",
    paste: "No Face ID lock",
    macos: "—",
    clipraCheck: true,
  },
  {
    feature: "Server privacy",
    clipra: "No Clipra servers (CloudKit, planned)",
    paste: "User iCloud",
    macos: "Local",
    clipraCheck: true,
  },
];

export default function ComparisonTable() {
  return (
    <section id="comparison" className="section band-mist">
      <div className="wrap">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <p className="kicker">How it compares</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
            How Clipra compares to Paste and macOS
          </h2>
          <p className="lede mx-auto mt-5">
            Apple added a 7-day clipboard to macOS Tahoe Spotlight. Paste charges $29.99 a year.
            Clipra is planned at $14.99 a year.
          </p>
        </div>

        <div className="reveal-on-scroll rounded-[28px] glass-2 overflow-hidden max-w-[1024px] mx-auto">
          <table className="w-full border-collapse text-left">
            <thead className="hidden md:table-header-group">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-[#6E6E73] bg-white/40 w-[32%]">
                  Feature
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-[#1D1D1F] bg-[#0066FF]/[0.06] border-t-2 border-[#0066FF] w-[26%]">
                  Clipra
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-[#6E6E73] bg-white/40 w-[21%]">
                  Paste
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-[#6E6E73] bg-white/40 w-[21%]">
                  macOS Tahoe Spotlight
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {ROWS.map((row) => (
                <tr
                  key={row.feature}
                  className="block border-b border-black/[0.07] last:border-b-0 md:table-row md:border-b-0 md:border-t md:border-black/[0.07]"
                >
                  <th scope="row" className="block px-5 pt-5 pb-3 text-left text-sm font-semibold text-[#1D1D1F] md:table-cell md:px-6 md:py-4">
                    {row.feature}
                  </th>
                  <td className="flex items-start justify-between gap-4 bg-[#0066FF]/[0.04] px-5 py-3 text-sm font-medium text-[#1D1D1F] md:table-cell md:px-6 md:py-4">
                    <span className="shrink-0 text-xs font-semibold text-[#0066FF] md:hidden">Clipra</span>
                    <span className="flex items-center gap-1.5 text-right md:text-left">
                      {row.clipraCheck && <Check className="w-4 h-4 text-[#0066FF] flex-shrink-0" aria-hidden="true" />}
                      {row.clipra}
                    </span>
                  </td>
                  <td className="flex items-start justify-between gap-4 px-5 py-3 text-sm text-[#6E6E73] md:table-cell md:px-6 md:py-4">
                    <span className="shrink-0 text-xs font-semibold md:hidden">Paste</span>
                    <span className="text-right md:text-left">{row.paste}</span>
                  </td>
                  <td className="flex items-start justify-between gap-4 px-5 pt-3 pb-5 text-sm text-[#6E6E73] md:table-cell md:px-6 md:py-4">
                    <span className="shrink-0 text-xs font-semibold md:hidden">macOS Tahoe</span>
                    <span className="text-right md:text-left">{row.macos}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-xs text-[#6E6E73] mt-6">
          Clipra features are planned for v1.0. Paste prices are from the product brief.
        </p>
      </div>
    </section>
  );
}
