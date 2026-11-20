"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/*
  "More than a clipboard" — Paste's second section, in Clipra's own words.
  One wide Mac app-frame with a real grid of clip cards, then three plain
  rows underneath. No carousel, no identical cards.
*/

const CLIPS = [
  { kind: "Link", source: "Safari", title: "Project inspiration", detail: "linear.app/projects", bg: "bg-[#EAF2FF]", accent: "#0066FF", mark: "↗" },
  { kind: "Colour", source: "Figma", title: "Primary blue", detail: "#0066FF", bg: "bg-[#0066FF]", accent: "#FFFFFF", mark: "#0066FF" },
  { kind: "Code", source: "VS Code", title: "Quick snippet", detail: "const dedupe = ...", bg: "bg-[#1D1D1F]", accent: "#FFFFFF", mark: "{ }" },
  { kind: "Note", source: "Notes", title: "Meeting notes", detail: "Ideas for the next launch", bg: "bg-[#FFF4D6]", accent: "#1D1D1F", mark: "“ ”" },
  { kind: "Image", source: "Photos", title: "Mood board", detail: "Saved from Safari", bg: "bg-[#E6F7F4]", accent: "#007A6E", mark: "▦" },
  { kind: "Link", source: "Mail", title: "Invoice link", detail: "receipts.example.com", bg: "bg-[#FDECEA]", accent: "#C0392B", mark: "↗" },
  { kind: "Code", source: "Terminal", title: "Deploy command", detail: "npm run build", bg: "bg-[#1D1D1F]", accent: "#FFFFFF", mark: "$_" },
  { kind: "Note", source: "Slack", title: "Launch checklist", detail: "Review on Friday", bg: "bg-[#EAF2FF]", accent: "#0066FF", mark: "✓" },
];

const ROWS = [
  {
    title: "Nothing you copy is ever lost",
    text: "Everything you copy is saved, with no limit on Pro. An hour ago or a year ago, it is still there.",
  },
  {
    title: "Find it by what it is, not when you copied it",
    text: "Filter history by type, source app, or date. A colour from Figma and a link from Safari do not belong in the same pile.",
  },
  {
    title: "Keep the pieces you reuse within reach",
    text: "Pinboards hold the links, colours and snippets you come back to, so a good copy does not disappear under the next one.",
  },
];

export default function MoreThanClipboard() {
  const [page, setPage] = useState(0);
  const perPage = 4;
  const pages = Math.ceil(CLIPS.length / perPage);
  const visible = CLIPS.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="section band-mist" aria-label="More than a clipboard">
      <div className="wrap">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
            More than a clipboard
          </h2>
          <p className="lede mx-auto mt-5">
            Clipra keeps everything you copy — links, colours, code, notes and images — and keeps
            it organised, so the next paste is the one you meant.
          </p>
        </div>

        <div className="app-frame max-w-[1024px] mx-auto">
          <div className="app-frame-bar">
            <span className="traffic-lights" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="font-semibold text-[#1D1D1F]">Clipra — All clips</span>
            <span className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage((page - 1 + pages) % pages)}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/60 backdrop-blur-md border border-white/60 text-[#1D1D1F] hover:bg-white/80 transition-colors"
                aria-label="Show previous clips"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setPage((page + 1) % pages)}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/60 backdrop-blur-md border border-white/60 text-[#1D1D1F] hover:bg-white/80 transition-colors"
                aria-label="Show more clips"
              >
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </span>
          </div>
          <div className="p-5 sm:p-6 bg-white/40 backdrop-blur-md">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {visible.map((clip) => (
                <article key={clip.title} className="rounded-[20px] border border-white/60 overflow-hidden glass-1 !shadow-[0_8px_28px_rgba(13,38,76,0.08)]">
                  <div
                    className={`h-[104px] grid place-items-center text-[22px] font-semibold ${clip.bg}`}
                    style={{ color: clip.accent }}
                    aria-hidden="true"
                  >
                    {clip.mark}
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between text-[11px] text-[#6E6E73]">
                      <span className="font-medium text-[#1D1D1F]">{clip.kind}</span>
                      <span>{clip.source}</span>
                    </div>
                    <p className="text-[13px] font-semibold text-[#1D1D1F] mt-1.5">{clip.title}</p>
                    <p className="text-[12px] text-[#6E6E73] truncate">{clip.detail}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="flex justify-center gap-1.5 mt-5" aria-hidden="true">
              {Array.from({ length: pages }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === page ? "w-6 bg-[#0066FF]" : "w-1.5 bg-black/15"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1024px] mx-auto mt-14 grid gap-10 md:grid-cols-3">
          {ROWS.map((row) => (
            <div key={row.title}>
              <h3 className="text-[19px] font-semibold text-[#1D1D1F] mb-2">{row.title}</h3>
              <p className="text-[15px] leading-relaxed text-[#6E6E73]">{row.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
