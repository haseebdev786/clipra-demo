"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface TransformTab {
  key: string;
  label: string;
  before: string;
  after: string;
  savings: string;
}

const TRANSFORMS: TransformTab[] = [
  {
    key: "utm",
    label: "🧹 Strip UTM & Tracking",
    before:
      "https://linear.app/features/roadmaps?utm_source=twitter&utm_medium=cpc&utm_campaign=launch2026&fbclid=IwAR098XyZa",
    after: "https://linear.app/features/roadmaps",
    savings: "Stripped 79 tracking characters",
  },
  {
    key: "json",
    label: "📦 JSON Prettify / Minify",
    before: `{"id":"clip_01","type":"color","value":"#00E5BE","created":1735689600}`,
    after: `{
  "id": "clip_01",
  "type": "color",
  "value": "#00E5BE",
  "created": 1735689600
}`,
    savings: "Formatted 4 JSON keys across 6 lines",
  },
  {
    key: "case",
    label: "🔤 Title Case / UPPERCASE",
    before: "the clipboard that organizes itself — clipra for macos",
    after: "The Clipboard That Organizes Itself — Clipra For MacOS",
    savings: "Applied Title Case to 9 words",
  },
  {
    key: "plain",
    label: "📄 Remove Formatting",
    before: "**Bold text**, ~~strikethrough~~, `inline code`, and [link](https://clipra.app)",
    after: "Bold text, strikethrough, inline code, and link",
    savings: "Removed Markdown formatting — plain text ready to paste",
  },
  {
    key: "base64",
    label: "🔒 Base64 Encode",
    before: "sk-proj-xK9mLQR2vT8nWoP5jHcEzFaAbBdCdEfGhIjKlMnOpQrStUvWxYz",
    after: "c2stcHJvai14SzltTFFSMnZUOG5Xb1A1akhj...(encoded)",
    savings: "Base64 encoded — safe for HTTP headers & env vars",
  },
  {
    key: "slug",
    label: "⚡ URL Slugify",
    before: "Clipra — The Clipboard That Organizes Itself | macOS 26",
    after: "clipra-the-clipboard-that-organizes-itself-macos-26",
    savings: "Converted to URL-safe slug (50 chars)",
  },
];

export default function TextTransformer() {
  const [active, setActive] = useState("utm");
  const [copied, setCopied] = useState(false);
  const tab = TRANSFORMS.find((t) => t.key === active)!;

  const handleCopy = () => {
    navigator.clipboard.writeText(tab.after).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="transformer"
      className="relative py-24 bg-[#080C16]/40 z-10"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00E5BE] mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="4 7 4 4 20 4 20 7" />
              <line x1="9" y1="20" x2="15" y2="20" />
              <line x1="12" y1="4" x2="12" y2="20" />
            </svg>
            Unique Differentiator #2
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            Copy once.{" "}
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00E5BE] to-[#10F296] bg-clip-text text-transparent">
              Paste anything.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Paste stores raw text only. With Clipra, a single shortcut (
            <kbd className="kbd">⌥Enter</kbd>) transforms your copied text on the fly.
            Clean tracking params, prettify messy JSON, convert cases, or strip styling without
            opening another tool.
          </p>
        </div>

        {/* Lab */}
        <div className="bg-[#090E1B] border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] reveal-on-scroll stagger-2">
          {/* Tabs */}
          <div className="flex items-center gap-2 px-4 md:px-6 py-4 bg-[#0E1526]/60 border-b border-white/8 overflow-x-auto">
            {TRANSFORMS.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                  active === t.key
                    ? "bg-[#0066FF]/22 border border-[#0066FF] text-white shadow-[0_0_18px_rgba(0,102,255,0.35)] -translate-y-0.5"
                    : "bg-white/4 border border-transparent text-slate-400 hover:text-white hover:bg-white/8"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Editor */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/8">
            {/* Before */}
            <div className="p-6 md:p-7 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  <span>Original Copied String</span>
                  <span className="text-red-400">● Dirty Input</span>
                </div>
                <pre className="font-mono text-sm text-slate-300 whitespace-pre-wrap break-all leading-relaxed">
                  {tab.before}
                </pre>
              </div>
              <div className="mt-4 text-xs text-slate-500">Source: Browser Copy</div>
            </div>

            {/* After */}
            <div className="p-6 md:p-7 flex flex-col justify-between min-h-[220px] bg-[#0066FF]/5">
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  <span>Clipra Instant Transformation</span>
                  <span className="text-[#10F296]">● Clean Output</span>
                </div>
                <pre className="font-mono text-sm text-[#00E5BE] font-semibold whitespace-pre-wrap break-all leading-relaxed">
                  {tab.after}
                </pre>
              </div>

              <div className="flex items-center justify-between gap-3 flex-wrap mt-4 pt-4 border-t border-white/6">
                <span className="text-xs text-slate-400">{tab.savings}</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-gradient-to-r from-[#00E5BE] to-[#10F296] hover:from-[#38F8D4] hover:to-[#44FBB0] transition-all shadow-[0_0_20px_rgba(0,229,190,0.35)] active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Clean Text</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
