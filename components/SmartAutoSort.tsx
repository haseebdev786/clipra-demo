"use client";

import { useState } from "react";

const SIM_DATA: Record<
  string,
  { source: string; detect: string; rule: string; board: string; desc: string }
> = {
  color: {
    source: "#0066FF",
    detect: "Detected: Hex 6-digit Color Code",
    rule: "Rule: Design Tokens & Palette",
    board: "Pinboard: Brand Colors",
    desc: 'Regex matched <code class="font-mono text-[#0066FF]">/#([0-9a-f]{6})/i</code>. Extracted RGB (0, 102, 255) and generated quick-copy swatch.',
  },
  url: {
    source: "https://linear.app/features?utm_source=twitter&utm_campaign=launch2025&fbclid=IwAR0xyz",
    detect: "Detected: URL with UTM Tracking Parameters",
    rule: "Rule: Clean URL Auto-Strip",
    board: "Pinboard: Clean Links",
    desc: 'Regex stripped all <code class="font-mono text-[#0066FF]">utm_*</code> and <code class="font-mono text-[#0066FF]">fbclid</code> params. Clean URL saved to Links pinboard.',
  },
  code: {
    source: "func sortClips(_ clips: [ClipItem]) -> [ClipItem] { clips.sorted { $0.date > $1.date } }",
    detect: "Detected: Swift Function Signature",
    rule: "Rule: Code Language Classifier",
    board: "Pinboard: Code Snippets",
    desc: 'NaturalLanguage + regex matched Swift syntax (<code class="font-mono text-[#0066FF]">func</code>, type annotations). Auto-tagged as Swift and routed to Dev board.',
  },
  email: {
    source: "alex.chen@figma.com",
    detect: "Detected: Email Address Pattern",
    rule: "Rule: Contacts & Email Auto-Tag",
    board: "Pinboard: Contacts",
    desc: 'RFC-5322 email regex matched. Contact auto-labelled with domain hint (<code class="font-mono text-[#0066FF]">figma.com</code>) and saved to Contacts pinboard.',
  },
  json: {
    source: `{"id":"clip_01","type":"color","value":"#0066FF","created":1735689600}`,
    detect: "Detected: Valid JSON Payload",
    rule: "Rule: Structured Data Classifier",
    board: "Pinboard: JSON / API Data",
    desc: 'JSON.parse validation passed. Auto-routed to Structured Data board with one-click prettify transform available via <code class="font-mono text-[#0066FF]">⌥Enter</code>.',
  },
};

export default function SmartAutoSort() {
  const [active, setActive] = useState<string>("color");
  const data = SIM_DATA[active];

  const triggers = [
    { key: "color", label: "Hex / RGB Color" },
    { key: "url", label: "Tracking URL" },
    { key: "code", label: "Swift / JS Code" },
    { key: "email", label: "Email Contact" },
    { key: "json", label: "JSON Payload" },
  ];

  return (
    <section id="smart-sort" className="section">
      <div className="wrap">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <p className="kicker">Smart Auto-Sort</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
            The clipboard that organises itself.
          </h2>
          <p className="lede mx-auto mt-5">
            Clipra is designed to recognise links, colours, snippets and more, then file them in
            the right pinboard. You will also be able to create your own rules.
          </p>
        </div>

        <div className="light-card max-w-[1024px] mx-auto p-6 md:p-9 reveal-on-scroll">
          <div className="flex items-start justify-between flex-wrap gap-4 pb-5 mb-6 border-b border-black/[0.07]">
            <div>
              <p className="text-base font-semibold text-[#1D1D1F] mb-1">
                Try it — pick a sample copy
              </p>
              <p className="text-sm text-[#6E6E73]">Pick a sample to see where it would be filed.</p>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Sample copies">
              {triggers.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActive(t.key)}
                  aria-pressed={active === t.key}
                  className={`min-h-[44px] px-4 rounded-full text-sm font-medium transition-colors ${
                    active === t.key
                      ? "bg-[#0066FF] text-white"
                      : "bg-white/55 backdrop-blur border border-white/60 text-[#424245] hover:bg-white/80 hover:border-white/80 hover:text-[#1D1D1F]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_60px_1.2fr] items-center gap-5">
            <div className="glass-1 p-6 min-h-[200px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-medium text-[#6E6E73] mb-3">
                  <span>Step 1: Copied to system clipboard</span>
                  <span className="kbd">⌘C</span>
                </div>
                <div className="font-mono text-sm text-[#1D1D1F] bg-white/70 backdrop-blur rounded-xl p-4 border border-white/60 min-h-[80px] flex items-center break-all">
                  {data.source}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 text-xs text-[#6E6E73]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" aria-hidden="true" />
                <span>{data.detect}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center text-[#0066FF] text-xl" aria-hidden="true">
              →
            </div>

            <div className="glass-1 p-6">
              <span className="inline-flex items-center gap-1.5 bg-[#0066FF]/10 text-[#0066FF] text-xs font-semibold px-2.5 py-1 rounded-md mb-3">
                {data.rule}
              </span>
              <p className="text-lg font-semibold text-[#1D1D1F] mb-2">{data.board}</p>
              <p
                className="text-sm text-[#6E6E73] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.desc }}
              />
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-black/[0.07] text-xs">
                <span className="text-[#6E6E73]">Status:</span>
                <span className="text-[#0066FF] font-medium">Planned for v1.0 — runs on your device</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
