"use client";

const Check = () => (
  <span className="text-[#0066FF] font-bold inline-flex items-center gap-1.5">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  </span>
);

const Cross = () => <span className="text-[#94A3B8]">—</span>;

const ROWS = [
  {
    feature: "Annual Subscription Price",
    clipra: <span className="text-[#0066FF] text-base">$14.99 / year (planned)</span>,
    paste: "$29.99 / year",
    macos: "Included in macOS",
  },
  {
    feature: "Lifetime License Option",
    clipra: <><Check /> $49.99 Once</>,
    paste: "$99.99 Once",
    macos: <Cross />,
  },
  {
    feature: "Smart Auto-Sort Rules",
    clipra: <><Check /> Planned for v1.0</>,
    paste: "Not built (125 requests)",
    macos: <Cross />,
  },
  {
    feature: "Text Transformer (11 tools)",
    clipra: <><Check /> Planned for v1.0</>,
    paste: "Raw text only",
    macos: <Cross />,
  },
  {
    feature: "Clipboard History Limit",
    clipra: <><Check /> Unlimited (Pro, planned)</>,
    paste: <><Check /> Unlimited</>,
    macos: "✕ 7 days only",
  },
  {
    feature: "iPhone & iPad Sync",
    clipra: <><Check /> Private iCloud (planned)</>,
    paste: <><Check /> Private iCloud</>,
    macos: "✕ Mac only",
  },
  {
    feature: "iOS Keyboard Extension",
    clipra: <><Check /> Custom keyboard (planned)</>,
    paste: <><Check /> Custom Keyboard</>,
    macos: <Cross />,
  },
  {
    feature: "Offline JSON Export / Import",
    clipra: <><Check /> Planned for v1.0</>,
    paste: "No export (161 requests)",
    macos: <Cross />,
  },
  {
    feature: "Biometric Security",
    clipra: <><Check /> Face ID & Touch ID, iPhone & iPad (planned)</>,
    paste: "No Face ID lock",
    macos: <Cross />,
  },
  {
    feature: "Server Privacy",
    clipra: <><Check /> No Clipra servers (CloudKit, planned)</>,
    paste: <><Check /> User iCloud</>,
    macos: <><Check /> Local</>,
  },
];

export default function ComparisonTable() {
  return (
    <section id="comparison" className="relative py-24 z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-4">
            How it compares
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F1F5F9] mb-5 leading-tight">
            How Clipra compares to Paste and macOS
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Apple added a 7-day clipboard to macOS Tahoe Spotlight. Paste charges $29.99/year. Clipra is planned at $14.99/year.
          </p>
        </div>

        <div className="reveal-on-scroll stagger-2 rounded-3xl bg-[#0B0D14] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <table className="w-full border-collapse text-left">
            <thead className="hidden md:table-header-group">
              <tr>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#94A3B8] bg-[#0A0A0F] w-[32%]">
                  Feature / Capability
                </th>
                <th className="px-6 py-4 text-sm font-extrabold text-[#F1F5F9] bg-[#0066FF]/12 border-t-2 border-[#0066FF] w-[26%]">
                  Clipra
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#94A3B8] bg-[#0A0A0F] w-[21%]">
                  Paste (Competitor)
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#94A3B8] bg-[#0A0A0F] w-[21%]">
                  macOS Tahoe Spotlight
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {ROWS.map((row, i) => (
                <tr key={i} className="block border-b border-white/10 last:border-b-0 md:table-row md:border-b-0 md:border-t md:border-white/10">
                  <th scope="row" className="block px-5 pt-5 pb-3 text-left text-sm font-bold text-[#F1F5F9] md:table-cell md:px-6 md:py-4">{row.feature}</th>
                  <td className="flex items-start justify-between gap-4 bg-[#0066FF]/6 px-5 py-3 text-sm font-semibold text-[#F1F5F9] md:table-cell md:px-6 md:py-4"><span className="shrink-0 text-xs font-bold uppercase tracking-wide text-[#0066FF] md:hidden">Clipra (Ours)</span><span className="text-right md:text-left">{row.clipra}</span></td>
                  <td className="flex items-start justify-between gap-4 px-5 py-3 text-sm text-[#94A3B8] md:table-cell md:px-6 md:py-4"><span className="shrink-0 text-xs font-bold uppercase tracking-wide md:hidden">Paste</span><span className="text-right md:text-left">{row.paste}</span></td>
                  <td className="flex items-start justify-between gap-4 px-5 pt-3 pb-5 text-sm text-[#94A3B8] md:table-cell md:px-6 md:py-4"><span className="shrink-0 text-xs font-bold uppercase tracking-wide md:hidden">macOS Tahoe</span><span className="text-right md:text-left">{row.macos}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-xs text-[#94A3B8] mt-6">
          Clipra features are planned for v1.0. Paste prices are from the product brief.
        </p>
      </div>
    </section>
  );
}
