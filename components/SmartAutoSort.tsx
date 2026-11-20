"use client";

import { useState } from "react";

const SIM_DATA: Record<
  string,
  { source: string; detect: string; rule: string; board: string; desc: string }
> = {
  color: {
    source: "#0071E3",
    detect: "Detected: Hex 6-digit Color Code",
    rule: "Rule: Design Tokens & Palette",
    board: "Pinboard: Brand Colors",
    desc: 'Regex matched <code class="font-mono text-[#0071E3]">/#([0-9a-f]{6})/i</code>. Extracted RGB (0, 229, 190) and generated quick-copy swatch.',
  },
  url: {
    source: "https://linear.app/features?utm_source=twitter&utm_campaign=launch2025&fbclid=IwAR0xyz",
    detect: "Detected: URL with UTM Tracking Parameters",
    rule: "Rule: Clean URL Auto-Strip",
    board: "Pinboard: Clean Links",
    desc: 'Regex stripped all <code class="font-mono text-[#0071E3]">utm_*</code> and <code class="font-mono text-[#0071E3]">fbclid</code> params. Clean URL saved to Links pinboard.',
  },
  code: {
    source: "func sortClips(_ clips: [ClipItem]) -> [ClipItem] { clips.sorted { $0.date > $1.date } }",
    detect: "Detected: Swift Function Signature",
    rule: "Rule: Code Language Classifier",
    board: "Pinboard: Code Snippets",
    desc: 'NaturalLanguage + regex matched Swift syntax (<code class="font-mono text-[#0071E3]">func</code>, type annotations). Auto-tagged as Swift and routed to Dev board.',
  },
  email: {
    source: "alex.chen@figma.com",
    detect: "Detected: Email Address Pattern",
    rule: "Rule: Contacts & Email Auto-Tag",
    board: "Pinboard: Contacts",
    desc: 'RFC-5322 email regex matched. Contact auto-labelled with domain hint (<code class="font-mono text-[#0071E3]">figma.com</code>) and saved to Contacts pinboard.',
  },
  json: {
    source: `{"id":"clip_01","type":"color","value":"#0071E3","created":1735689600}`,
    detect: "Detected: Valid JSON Payload",
    rule: "Rule: Structured Data Classifier",
    board: "Pinboard: JSON / API Data",
    desc: 'JSON.parse validation passed. Auto-routed to Structured Data board with one-click prettify transform available via <code class="font-mono text-[#0071E3]">⌥Enter</code>.',
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
    <section id="smart-sort" className="relative py-24 z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Smart Auto-Sort
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F] mb-5 leading-tight">
            The clipboard that organises itself.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
            Clipra is designed to recognise links, colours, snippets and more, then file them in the right pinboard. You will also be able to create your own rules.
          </p>
        </div>

        {/* Simulator */}
        <div className="bg-[#FFFFFF] border border-black/10 rounded-3xl p-6 md:p-9 shadow-[0_8px_30px_rgba(0,0,0,0.08)] reveal-on-scroll stagger-2">
          {/* Sim Header */}
          <div className="flex items-start justify-between flex-wrap gap-4 pb-5 mb-6 border-b border-black/10">
            <div>
              <div className="text-base font-bold text-[#1D1D1F] mb-1">Try it — pick a sample copy</div>
              <div className="text-sm text-[#6E6E73]">Pick a sample to see where it would be filed.</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {triggers.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActive(t.key)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    active === t.key
                      ? "bg-[#0071E3]/20 border border-[#0071E3] text-[#1D1D1F] shadow-sm -translate-y-0.5"
                      : "bg-black/[0.04] border border-black/10 text-[#424245] hover:bg-[#0071E3]/10 hover:border-[#0071E3]/30 hover:text-[#1D1D1F]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sim Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_60px_1.2fr] items-center gap-5">
            {/* Input */}
            <div className="bg-[#F5F5F7] border border-black/10 rounded-xl p-6 min-h-[200px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#6E6E73] mb-3">
                  <span>Step 1: Copied to System Clipboard</span>
                  <span className="kbd">⌘C</span>
                </div>
                <div className="font-mono text-sm text-[#1D1D1F] bg-black/[0.04] rounded-lg p-4 border border-black/10 min-h-[80px] flex items-center break-all">
                  {data.source}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 text-xs text-[#6E6E73]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3]" />
                <span>{data.detect}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center text-[#0071E3] text-xl" aria-hidden="true">→</div>

            {/* Result */}
            <div className="bg-white border border-black/10 rounded-xl p-6 shadow-sm">
              <div className="inline-flex items-center gap-1.5 bg-[#0071E3]/10 text-[#0071E3] text-xs font-bold px-2.5 py-1 rounded-md mb-3">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {data.rule}
              </div>
              <div className="text-lg font-bold text-[#1D1D1F] mb-2">{data.board}</div>
              <p
                className="text-sm text-[#6E6E73] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.desc }}
              />
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-black/10 text-xs">
                <span className="text-[#6E6E73]">Status:</span>
                <span className="text-[#0071E3] font-medium">Planned for v1.0 — runs on your device</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
