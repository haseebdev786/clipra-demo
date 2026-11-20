"use client";

import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

/*
  Dark band: "Bring your clipboard into your AI tools".
  For Clipra this is Phase 2 (MCP / AI tool integration) — presented honestly
  as planned, never as shipped.
*/

const TOOLS = ["Claude", "Codex", "Cursor"];

export default function AIBand() {
  const [prompt, setPrompt] = useState(
    "Find the notes I copied today in Clipra. Draft a team update for the launch using them."
  );
  const [shared, setShared] = useState(false);

  return (
    <section className="section band-dark" aria-label="Clipra and AI tools">
      <div className="wrap">
        <div className="text-center max-w-2xl mx-auto">
          <p className="kicker">Planned for Phase 2</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Bring your clipboard into your AI tools
          </h2>
          <p className="lede mx-auto mt-5">
            Clipra will connect your clipboard history to Claude, Codex and Cursor, so they can
            use what you already copied as context. It runs on your Mac, and you choose what to
            share.
          </p>
        </div>

        <div className="glass-card max-w-2xl mx-auto mt-12 p-6 sm:p-7">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#2E82FF]" aria-hidden="true" />
            <span className="text-sm font-medium text-white">Ask with your clipboard as context</span>
          </div>
          <label className="sr-only" htmlFor="ai-prompt">
            Example prompt for an AI tool
          </label>
          <textarea
            id="ai-prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={3}
            className="w-full bg-white/[0.05] border border-white/10 rounded-2xl p-4 text-[15px] leading-relaxed text-white placeholder:text-[#64748B] outline-none focus:border-[#0066FF] transition-colors resize-none"
          />
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
            <div className="flex flex-wrap gap-2" role="group" aria-label="AI tools">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.07] border border-white/10 text-[#CBD5E1]"
                >
                  {tool}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setShared(true)}
              className="btn btn-primary !min-h-[44px]"
              aria-live="polite"
            >
              {shared ? "Planned — nothing was shared" : "Share with your AI tool"}
              {!shared && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
            </button>
          </div>
          {shared && (
            <p className="text-sm mt-4" style={{ color: "#94A3B8" }}>
              This is a concept preview. AI tool integration is planned for Phase 2, after the
              first release — nothing is connected yet.
            </p>
          )}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: "#94A3B8" }}>
          Phase 2 also includes AI clipboard suggestions and a local REST API.{" "}
          <a href="/updates" className="text-white underline underline-offset-4">
            See what comes after v1.0
          </a>
        </p>
      </div>
    </section>
  );
}
