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
    label: "Strip UTM & Tracking",
    before:
      "https://linear.app/features/roadmaps?utm_source=twitter&utm_medium=cpc&utm_campaign=launch2026&fbclid=IwAR098XyZa",
    after: "https://linear.app/features/roadmaps",
    savings: "Stripped 79 tracking characters",
  },
  {
    key: "json",
    label: "JSON Prettify / Minify",
    before: `{"id":"clip_01","type":"color","value":"#0066FF","created":1735689600}`,
    after: `{
  "id": "clip_01",
  "type": "color",
  "value": "#0066FF",
  "created": 1735689600
}`,
    savings: "Formatted 4 JSON keys across 6 lines",
  },
  {
    key: "case",
    label: "Title Case / UPPERCASE",
    before: "the clipboard that organizes itself — clipra for macos",
    after: "The Clipboard That Organizes Itself — Clipra For MacOS",
    savings: "Applied Title Case to 9 words",
  },
  {
    key: "plain",
    label: "Remove Formatting",
    before: "**Bold text**, ~~strikethrough~~, `inline code`, and [link](https://clipra.app)",
    after: "Bold text, strikethrough, inline code, and link",
    savings: "Removed Markdown formatting — plain text ready to paste",
  },
  {
    key: "base64",
    label: "Base64 Encode",
    before: "Hello, Clipra!",
    after: "SGVsbG8sIENsaXByYSE=",
    savings: "Encoded as Base64",
  },
  {
    key: "slug",
    label: "URL Encode / Decode",
    before: "Hello World! How are you?",
    after: "Hello%20World!%20How%20are%20you%3F",
    savings: "Encoded for use in a URL",
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
      className="relative py-24 z-10"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="4 7 4 4 20 4 20 7" />
              <line x1="9" y1="20" x2="15" y2="20" />
              <line x1="12" y1="4" x2="12" y2="20" />
            </svg>
            Text Transformer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F1F5F9] mb-5 leading-tight">
            Copy once.{" "}
            <span className="">
              Paste anything.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Paste keeps text as copied. With Clipra, a single shortcut (
            <kbd className="kbd">⌥Enter</kbd>) transforms your copied text before you paste it.
            Clean tracking params, prettify messy JSON, convert cases, or strip styling without
            opening another tool.
          </p>
        </div>

        {/* Lab */}
        <div className="bg-[#0B0D14] border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] reveal-on-scroll stagger-2">
          {/* Tabs */}
          <div className="flex items-center gap-2 px-4 md:px-6 py-4 bg-[#0A0A0F] border-b border-white/10 overflow-x-auto">
            {TRANSFORMS.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                  active === t.key
                    ? "bg-[#0066FF]/22 border border-[#0066FF] text-[#F1F5F9] shadow-sm -translate-y-0.5"
                    : "bg-white/[0.06] border border-transparent text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-white/[0.06]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Editor */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/10">
            {/* Before */}
            <div className="p-6 md:p-7 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-3">
                  <span>Original Copied String</span>
                  <span>Original</span>
                </div>
                <pre className="font-mono text-sm text-[#CBD5E1] whitespace-pre-wrap break-all leading-relaxed">
                  {tab.before}
                </pre>
              </div>
              <div className="mt-4 text-xs text-[#94A3B8]">Source: Browser Copy</div>
            </div>

            {/* After */}
            <div className="p-6 md:p-7 flex flex-col justify-between min-h-[220px] bg-[#0066FF]/5">
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-3">
                  <span>After transformation</span>
                  <span>Transformed</span>
                </div>
                <pre className="font-mono text-sm text-[#0066FF] font-semibold whitespace-pre-wrap break-all leading-relaxed">
                  {tab.after}
                </pre>
              </div>

              <div className="flex items-center justify-between gap-3 flex-wrap mt-4 pt-4 border-t border-white/10">
                <span className="text-xs text-[#94A3B8]">{tab.savings}</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-white bg-[#0066FF] hover:bg-[#2E82FF] transition-all shadow-sm active:scale-95"
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
