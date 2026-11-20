"use client";

import { useState } from "react";
import { Search } from "lucide-react";

/*
  Group 1 of /features: clipboard history and Power Search.
  A live fragment — search and filter a small sample history by type, app, date.
  Search is by type/app/date only (the brief has no OCR).
*/

const SAMPLES = [
  { type: "Code", app: "VS Code", date: "Today", text: "const dedupe = [...new Set(items)];" },
  { type: "Colour", app: "Figma", date: "Today", text: "#0066FF — Primary blue" },
  { type: "Link", app: "Safari", date: "Yesterday", text: "linear.app/projects" },
  { type: "Note", app: "Notes", date: "Yesterday", text: "Launch checklist for Friday" },
  { type: "Code", app: "Terminal", date: "Last week", text: "npm run build" },
  { type: "Link", app: "Mail", date: "Last week", text: "receipts.example.com" },
];

const FILTERS = ["All", "Code", "Colour", "Link", "Note"];

export default function HistorySearch() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const visible = SAMPLES.filter(
    (s) =>
      (filter === "All" || s.type === filter) &&
      `${s.type} ${s.app} ${s.date} ${s.text}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="history" className="section band-mist">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="kicker">Clipboard history and search</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
            Nothing you copy is ever lost.
          </h2>
          <p className="lede mt-5">
            Everything you copy is saved, with no limit on Pro. An hour ago or a year ago, it is
            still there — and Power Search finds it by type, source app, or date.
          </p>
          <p className="text-[15px] leading-relaxed text-[#6E6E73] mt-4">
            Unlimited history, pinboards for the pieces you reuse, and a 30-day trash are all
            planned for the first release.
          </p>
        </div>

        <div className="app-frame">
          <div className="app-frame-bar">
            <span className="traffic-lights" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="font-semibold text-[#1D1D1F]">Clipra — History</span>
            <span className="text-[#6E6E73]">⌘F</span>
          </div>
          <div className="p-5 bg-white">
            <label className="flex items-center gap-2 px-3.5 py-3 rounded-xl bg-[#F5F5F7] border border-black/[0.07] text-sm">
              <Search className="w-4 h-4 text-[#6E6E73] flex-shrink-0" aria-hidden="true" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search your history"
                className="bg-transparent outline-none w-full text-[#1D1D1F] placeholder:text-[#86868B]"
                aria-label="Search your history"
              />
            </label>
            <div className="flex flex-wrap gap-2 mt-4" role="group" aria-label="Filter by type">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`min-h-[36px] px-3.5 rounded-full text-xs font-medium transition-colors ${
                    filter === f
                      ? "bg-[#0066FF] text-white"
                      : "bg-black/[0.04] border border-black/10 text-[#424245] hover:bg-black/[0.07]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <ul className="mt-4 divide-y divide-black/[0.06]">
              {visible.map((s) => (
                <li key={s.text} className="py-3 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#1D1D1F] truncate">{s.text}</p>
                    <p className="text-xs text-[#6E6E73] mt-0.5">
                      {s.type} · {s.app}
                    </p>
                  </div>
                  <span className="text-xs text-[#6E6E73] flex-shrink-0">{s.date}</span>
                </li>
              ))}
              {visible.length === 0 && (
                <li className="py-6 text-sm text-[#6E6E73]">
                  No copies match that search. Try another word or type.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
