"use client";

import { useState } from "react";

const SIM_DATA: Record<
  string,
  { source: string; detect: string; rule: string; board: string; desc: string }
> = {
  color: {
    source: "#00E5BE",
    detect: "Detected: Hex 6-digit Color Code",
    rule: "Rule: Design Tokens & Palette",
    board: "📁 Pinboard: Brand Colors",
    desc: 'Regex matched <code class="font-mono text-[#00E5BE]">/#([0-9a-f]{6})/i</code>. Extracted RGB (0, 229, 190) and generated quick-copy swatch.',
  },
  url: {
    source: "https://linear.app/features?utm_source=twitter&utm_campaign=launch2025&fbclid=IwAR0xyz",
    detect: "Detected: URL with UTM Tracking Parameters",
    rule: "Rule: Clean URL Auto-Strip",
    board: "📁 Pinboard: Clean Links",
    desc: 'Regex stripped all <code class="font-mono text-[#00E5BE]">utm_*</code> and <code class="font-mono text-[#00E5BE]">fbclid</code> params. Clean URL saved to Links pinboard.',
  },
  code: {
    source: "func sortClips(_ clips: [ClipItem]) -> [ClipItem] { clips.sorted { $0.date > $1.date } }",
    detect: "Detected: Swift Function Signature",
    rule: "Rule: Code Language Classifier",
    board: "📁 Pinboard: Code Snippets",
    desc: 'NaturalLanguage + regex matched Swift syntax (<code class="font-mono text-[#00E5BE]">func</code>, type annotations). Auto-tagged as Swift and routed to Dev board.',
  },
  email: {
    source: "alex.chen@figma.com",
    detect: "Detected: Email Address Pattern",
    rule: "Rule: Contacts & Email Auto-Tag",
    board: "📁 Pinboard: Contacts",
    desc: 'RFC-5322 email regex matched. Contact auto-labelled with domain hint (<code class="font-mono text-[#00E5BE]">figma.com</code>) and saved to Contacts pinboard.',
  },
  json: {
    source: `{"id":"clip_01","type":"color","value":"#00E5BE","created":1735689600}`,
    detect: "Detected: Valid JSON Payload",
    rule: "Rule: Structured Data Classifier",
    board: "📁 Pinboard: JSON / API Data",
    desc: 'JSON.parse validation passed. Auto-routed to Structured Data board with one-click prettify transform available via <code class="font-mono text-[#00E5BE]">⌥Enter</code>.',
  },
};

export default function SmartAutoSort() {
  const [active, setActive] = useState<string>("color");
  const data = SIM_DATA[active];

  const triggers = [
    { key: "color", label: "🎨 HEX / RGB Color" },
    { key: "url", label: "🔗 Tracking URL" },
    { key: "code", label: "⚡ Swift / JS Code" },
    { key: "email", label: "✉️ Email Contact" },
    { key: "json", label: "📦 JSON Payload" },
  ];

  return (
    <section id="smart-sort" className="relative py-24 z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00E5BE] mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Unique Differentiator #1
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            Paste stores everything.{" "}
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00E5BE] to-[#10F296] bg-clip-text text-transparent">
              Clipra organizes it automatically.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Clipra is designed to recognize links, colors, snippets and more, then route them to the right pinboard. You will also be able to create your own rules.
          </p>
        </div>

        {/* Simulator */}
        <div className="bg-[#090E1A] border border-white/10 rounded-3xl p-6 md:p-9 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] reveal-on-scroll stagger-2">
          {/* Sim Header */}
          <div className="flex items-start justify-between flex-wrap gap-4 pb-5 mb-6 border-b border-white/8">
            <div>
              <div className="text-base font-bold text-white mb-1">Live Rule Engine Simulator</div>
              <div className="text-sm text-slate-400">Click any sample copy item to see real-time routing logic:</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {triggers.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActive(t.key)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    active === t.key
                      ? "bg-[#00E5BE]/20 border border-[#00E5BE] text-white shadow-[0_0_20px_rgba(0,229,190,0.3)] -translate-y-0.5"
                      : "bg-white/5 border border-white/10 text-slate-300 hover:bg-[#00E5BE]/10 hover:border-[#00E5BE]/50 hover:text-white"
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
            <div className="bg-[#0E1526]/80 border border-white/10 rounded-xl p-6 min-h-[200px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-400 mb-3">
                  <span>Step 1: Copied to System Clipboard</span>
                  <span className="kbd">⌘C</span>
                </div>
                <div className="font-mono text-sm text-slate-200 bg-black/35 rounded-lg p-4 border border-white/6 min-h-[80px] flex items-center break-all">
                  {data.source}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5BE] animate-ping" />
                <span>{data.detect}</span>
              </div>
            </div>

            {/* Connector */}
            <div className="hidden md:flex flex-col items-center justify-center">
              <div className="relative w-full h-[3px] bg-white/8 rounded overflow-hidden">
                <div className="absolute top-0 left-[-50%] w-1/2 h-full bg-gradient-to-r from-transparent via-[#00E5BE] to-[#10F296] shadow-[0_0_14px_#00E5BE] animate-[laserTravel_2s_cubic-bezier(0.4,0,0.2,1)_infinite]" />
              </div>
              <span className="text-[#00E5BE] mt-1.5 text-lg animate-bounce">→</span>
            </div>

            {/* Result */}
            <div className="bg-gradient-to-b from-[#101828] to-[#0A101E] border border-[#00E5BE]/40 rounded-xl p-6 shadow-[0_0_35px_rgba(0,229,190,0.15)]">
              <div className="inline-flex items-center gap-1.5 bg-[#00E5BE]/15 text-[#00E5BE] text-xs font-bold px-2.5 py-1 rounded-md mb-3">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {data.rule}
              </div>
              <div className="text-lg font-bold text-white mb-2">{data.board}</div>
              <p
                className="text-sm text-slate-400 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.desc }}
              />
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/8 text-xs">
                <span className="text-slate-400">Execution Time:</span>
                <span className="text-[#10F296] font-bold font-mono">18ms (Zero Lag)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
