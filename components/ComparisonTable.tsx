"use client";

const Check = () => (
  <span className="text-[#00E5BE] font-bold inline-flex items-center gap-1.5">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  </span>
);

const Cross = () => <span className="text-slate-600">—</span>;

const ROWS = [
  {
    feature: "Annual Subscription Price",
    clipra: <span className="text-[#00E5BE] text-base">$14.99 / year (50% Off)</span>,
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
    clipra: <><Check /> Built-in (Unique)</>,
    paste: "✕ Not Built (125 requests)",
    macos: <Cross />,
  },
  {
    feature: "Text Transformer (10 tools)",
    clipra: <><Check /> Built-in (Unique)</>,
    paste: "✕ Raw text only",
    macos: <Cross />,
  },
  {
    feature: "Clipboard History Limit",
    clipra: <><Check /> Unlimited</>,
    paste: <><Check /> Unlimited</>,
    macos: "✕ 7 days only",
  },
  {
    feature: "iPhone & iPad Sync",
    clipra: <><Check /> Private iCloud</>,
    paste: <><Check /> Private iCloud</>,
    macos: "✕ Mac only",
  },
  {
    feature: "iOS Keyboard Extension",
    clipra: <><Check /> Custom Keyboard</>,
    paste: <><Check /> Custom Keyboard</>,
    macos: <Cross />,
  },
  {
    feature: "Offline JSON Export / Import",
    clipra: <><Check /> Yes (161 requests)</>,
    paste: "✕ No Export",
    macos: <Cross />,
  },
  {
    feature: "Biometric Security",
    clipra: <><Check /> Touch ID & Face ID</>,
    paste: "✕ No Face ID lock",
    macos: <Cross />,
  },
  {
    feature: "Server Privacy",
    clipra: <><Check /> 0 Servers (CloudKit)</>,
    paste: <><Check /> User iCloud</>,
    macos: <><Check /> Local</>,
  },
];

export default function ComparisonTable() {
  return (
    <section id="comparison" className="relative py-24 bg-[#080C16]/40 z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00E5BE] mb-4">
            The Honest Breakdown
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            How Clipra compares to{" "}
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00E5BE] to-[#10F296] bg-clip-text text-transparent">
              Paste & macOS
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Apple added a 7-day clipboard to macOS Tahoe Spotlight. Paste charges $29.99/year. Here
            is why Clipra is the clear winner for professionals.
          </p>
        </div>

        <div className="reveal-on-scroll stagger-2 rounded-3xl bg-[#090E1B] border border-white/10 overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)]">
          <table className="w-full border-collapse text-left">
            <thead className="hidden md:table-header-group">
              <tr>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-400 bg-[#0E1526]/50 w-[32%]">
                  Feature / Capability
                </th>
                <th className="px-6 py-4 text-sm font-extrabold text-white bg-[#0066FF]/12 border-t-2 border-[#00E5BE] w-[26%]">
                  ✦ Clipra (Ours)
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-400 bg-[#0E1526]/50 w-[21%]">
                  Paste (Competitor)
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-400 bg-[#0E1526]/50 w-[21%]">
                  macOS Tahoe Spotlight
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {ROWS.map((row, i) => (
                <tr key={i} className="block border-b border-white/10 last:border-b-0 md:table-row md:border-b-0 md:border-t md:border-white/6">
                  <th scope="row" className="block px-5 pt-5 pb-3 text-left text-sm font-bold text-white md:table-cell md:px-6 md:py-4">{row.feature}</th>
                  <td className="flex items-start justify-between gap-4 bg-[#0066FF]/6 px-5 py-3 text-sm font-semibold text-white md:table-cell md:px-6 md:py-4"><span className="shrink-0 text-xs font-bold uppercase tracking-wide text-[#00E5BE] md:hidden">Clipra (Ours)</span><span className="text-right md:text-left">{row.clipra}</span></td>
                  <td className="flex items-start justify-between gap-4 px-5 py-3 text-sm text-slate-400 md:table-cell md:px-6 md:py-4"><span className="shrink-0 text-xs font-bold uppercase tracking-wide md:hidden">Paste</span><span className="text-right md:text-left">{row.paste}</span></td>
                  <td className="flex items-start justify-between gap-4 px-5 pt-3 pb-5 text-sm text-slate-400 md:table-cell md:px-6 md:py-4"><span className="shrink-0 text-xs font-bold uppercase tracking-wide md:hidden">macOS Tahoe</span><span className="text-right md:text-left">{row.macos}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
