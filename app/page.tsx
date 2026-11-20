"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MoreThanClipboard from "@/components/MoreThanClipboard";
import SmartAutoSort from "@/components/SmartAutoSort";
import TextTransformer from "@/components/TextTransformer";
import AIBand from "@/components/AIBand";
import PrivacyFan from "@/components/PrivacyFan";
import Ecosystem from "@/components/Ecosystem";
import ComparisonTable from "@/components/ComparisonTable";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ShortcutsModal from "@/components/ShortcutsModal";

const WORKFLOWS = [
  {
    id: "dev",
    label: "Developers",
    title: "Code, commands, and the pieces you reuse.",
    text: "Snippets, terminal commands, and JSON you have already formatted. Keep them in a pinboard and find them by source app or date.",
    points: ["JSON prettify and minify", "Base64 encode and decode", "Paste Stack for Mac"],
    visual: "code" as const,
  },
  {
    id: "design",
    label: "Designers",
    title: "Colours, links, and references in one place.",
    text: "Hex values copied from Figma, component names, and asset links. Pinboards keep each project separate.",
    points: ["Colour values auto-sorted", "Links with tracking removed", "Pinboards per project"],
    visual: "colours" as const,
  },
  {
    id: "writers",
    label: "Writers",
    title: "Drafts and the words you come back to.",
    text: "Email templates, replies, and the sentences you rewrote three times. Keep the good version where you can find it again.",
    points: ["Email templates pinned", "Case and formatting tools", "History searchable by date"],
    visual: "email" as const,
  },
  {
    id: "teams",
    label: "Teams",
    title: "Project notes and handover details.",
    text: "References, links, and reusable copy for each client. Export history as JSON on Mac, and hide the clipboard during presentations.",
    points: ["JSON export on Mac", "Screen Share Hide planned", "30-day trash recovery"],
    visual: "pinboards" as const,
  },
];

function WorkflowVisual({ kind }: { kind: "code" | "colours" | "email" | "pinboards" }) {
  if (kind === "code") {
    return (
      <div className="rounded-2xl bg-[#0B0D14] border border-white/10 p-5 font-mono text-[13px] leading-relaxed text-[#F1F5F9]">
        <p><span className="text-[#2E82FF]">const</span> dedupe = (arr) =&gt; [...<span className="text-[#2E82FF]">new Set</span>(arr)];</p>
        <p className="text-[#94A3B8]">{"// sorted, tagged Swift, filed in Code Snippets"}</p>
        <p>npm run build <span className="text-[#94A3B8]"># 2m ago · Terminal</span></p>
        <p><span className="text-[#2E82FF]">{"{ \"status\":"}</span> <span className="text-[#00C4B4]">"ready"</span><span className="text-[#2E82FF]">{" }"}</span></p>
      </div>
    );
  }
  if (kind === "colours") {
    return (
      <div className="rounded-2xl bg-white/[0.05] border border-white/10 p-5">
        <div className="grid grid-cols-4 gap-2">
          {["#0066FF", "#1D1D1F", "#00C4B4", "#F5F5F7"].map((c) => (
            <div key={c} className="rounded-xl overflow-hidden border border-white/10">
              <div className="h-16" style={{ background: c }} />
              <p className="text-[11px] font-mono text-center py-2 text-white bg-[#0B0D14]">{c}</p>
            </div>
          ))}
        </div>
        <p className="text-xs mt-4" style={{ color: "#94A3B8" }}>Filed in: Brand Colors pinboard</p>
      </div>
    );
  }
  if (kind === "email") {
    return (
      <div className="rounded-2xl bg-white text-left p-5 border border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <p className="text-xs text-[#6E6E73]">To: Team</p>
        <p className="text-sm font-semibold text-[#1D1D1F] mt-1">Subject: Launch update</p>
        <p className="text-sm text-[#424245] leading-relaxed mt-3">
          Hi everyone — the launch notes are ready. The clipboard that organises itself is coming
          to Mac, iPhone and iPad.
        </p>
        <p className="text-xs text-[#6E6E73] mt-3">Saved from Mail · Email Templates pinboard</p>
      </div>
    );
  }
  return (
    <div className="rounded-2xl bg-white/[0.05] border border-white/10 p-5">
      {["Client launch", "Brand colors", "Campaign copy"].map((board, i) => (
        <div key={board} className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0">
          <span className="text-sm font-medium text-white">{board}</span>
          <span className="text-xs" style={{ color: "#94A3B8" }}>{[12, 8, 21][i]} clips</span>
        </div>
      ))}
      <p className="text-xs mt-4" style={{ color: "#94A3B8" }}>Pinboards keep each project separate.</p>
    </div>
  );
}

function WorkflowTabs() {
  const [active, setActive] = useState("dev");
  const current = WORKFLOWS.find((w) => w.id === active)!;
  return (
    <section aria-label="Clipra for different workflows" className="section band-dark">
      <div className="wrap">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="kicker">Built for how you work</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            A clipboard for the way you work.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Workflows">
          {WORKFLOWS.map((w) => (
            <button
              key={w.id}
              type="button"
              role="tab"
              aria-selected={active === w.id}
              onClick={() => setActive(w.id)}
              className={`min-h-[44px] px-5 rounded-full text-sm font-medium transition-colors ${
                active === w.id
                  ? "bg-white text-[#1D1D1F]"
                  : "bg-white/[0.07] text-[#CBD5E1] hover:bg-white/[0.12] border border-white/10"
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-[1024px] mx-auto">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{current.title}</h3>
            <p className="mt-4 leading-relaxed" style={{ color: "#94A3B8" }}>{current.text}</p>
            <ul className="flex flex-wrap gap-2 mt-6">
              {current.points.map((p) => (
                <li
                  key={p}
                  className="px-3 py-2 rounded-full text-xs font-medium bg-white/[0.07] border border-white/10 text-[#CBD5E1]"
                >
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <a href="/use-cases" className="text-white font-medium underline underline-offset-4">
                See all use cases
              </a>
            </p>
          </div>
          <WorkflowVisual kind={current.visual} />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [shortcutsOpen, setShortcutsOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setShortcutsOpen(true);
      }
      if (e.key === "Escape") setShortcutsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal-on-scroll");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <a
        className="fixed top-[-100px] left-4 z-[300] px-5 py-3 bg-white border border-black/10 rounded-lg focus:top-3 text-[#1D1D1F] text-sm font-medium shadow-lg"
        href="#main"
      >
        Skip to content
      </a>

      <Navbar onOpenShortcuts={() => setShortcutsOpen(true)} />

      <main id="main">
        <Hero />
        <MoreThanClipboard />
        <SmartAutoSort />
        <TextTransformer />
        <AIBand />
        <PrivacyFan />
        <Ecosystem />
        <WorkflowTabs />
        <ComparisonTable />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer onOpenShortcuts={() => setShortcutsOpen(true)} />
      <ShortcutsModal open={shortcutsOpen} onClose={() => setShortcutsOpen(false)} />
    </>
  );
}
