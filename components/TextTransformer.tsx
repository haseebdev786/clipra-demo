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
    <section id="transformer" className="section band-mist">
      <div className="wrap">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <p className="kicker">Text Transformer</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
            Copy once. Paste anything.
          </h2>
          <p className="lede mx-auto mt-5">
            Paste keeps text as copied. With Clipra, a single shortcut (
            <kbd className="kbd">⌥Enter</kbd>) transforms your copied text before you paste it.
            Clean tracking params, prettify messy JSON, convert cases, or strip styling without
            opening another tool.
          </p>
        </div>

        <div className="light-card max-w-[1024px] mx-auto overflow-hidden reveal-on-scroll">
          <div
            className="flex items-center gap-2 px-4 md:px-6 py-4 bg-[#F5F5F7] border-b border-black/[0.07] overflow-x-auto"
            role="tablist"
            aria-label="Text transformations"
          >
            {TRANSFORMS.map((t) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={active === t.key}
                onClick={() => setActive(t.key)}
                className={`flex-shrink-0 min-h-[44px] px-4 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  active === t.key
                    ? "bg-[#0066FF] text-white"
                    : "bg-white border border-black/10 text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-7 flex flex-col justify-between min-h-[220px] border-b md:border-b-0 md:border-r border-black/[0.07]">
              <div>
                <p className="text-xs font-semibold text-[#6E6E73] mb-3">Original copied string</p>
                <pre className="font-mono text-sm text-[#424245] whitespace-pre-wrap break-all leading-relaxed">
                  {tab.before}
                </pre>
              </div>
              <p className="mt-4 text-xs text-[#6E6E73]">Source: Browser Copy</p>
            </div>

            <div className="p-6 md:p-7 flex flex-col justify-between min-h-[220px] bg-[#0066FF]/[0.04]">
              <div>
                <p className="text-xs font-semibold text-[#6E6E73] mb-3">After transformation</p>
                <pre className="font-mono text-sm text-[#0066FF] font-semibold whitespace-pre-wrap break-all leading-relaxed">
                  {tab.after}
                </pre>
              </div>

              <div className="flex items-center justify-between gap-3 flex-wrap mt-4 pt-4 border-t border-black/[0.07]">
                <span className="text-xs text-[#6E6E73]">{tab.savings}</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn btn-primary !min-h-[40px] !py-2.5 !px-4 !text-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy clean text</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-[#6E6E73] mt-8">
          All 11 transforms run on your device. Planned for v1.0.
        </p>
      </div>
    </section>
  );
}
