"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ShortcutsModal from "@/components/ShortcutsModal";
import AmbientCanvas from "@/components/AmbientCanvas";

const FILTER_BUTTONS = [
  { key: "all", label: "All Roadmap Items" },
  { key: "core", label: "Core Architecture" },
  { key: "tools", label: "Power Tools" },
  { key: "privacy", label: "Privacy & CloudKit" },
  { key: "mobile", label: "iPhone & iPad" },
];

const TIMELINE_ITEMS = [
  {
    cat: "core",
    badge: "Planned for v1.0",
    badgeClass: "tag-teal",
    title: "Smart Auto-Sort",
    desc: "Rules will sort copied links, color codes, and code snippets into pinboards. Custom rules will let you organize by content or source app.",
    footer: "Target: macOS Menu Bar • iOS Keyboard Companion",
    footerColor: "text-[#00E5BE]",
  },
  {
    cat: "tools",
    badge: "Planned for v1.0",
    badgeClass: "tag-blue",
    title: "Text Transformer",
    desc: "Clean tracking parameters from links, format JSON, change letter case, encode or decode text, and remove formatting. Transformations are planned to run on your device.",
    footer: "Status: Planned for the first release",
    footerColor: "text-[#2E82FF]",
  },
  {
    cat: "privacy",
    badge: "Privacy",
    badgeClass: "tag-green",
    title: "Private iCloud sync",
    desc: "The planned design stores history locally and syncs through your private iCloud database. Clipboard content will not be stored on AR Swift servers.",
    footer: "Planned for Pro and Lifetime",
    footerColor: "text-[#10F296]",
  },
  {
    cat: "mobile",
    badge: "Mobile Ecosystem",
    badgeClass: "tag-teal",
    title: "iOS Custom Keyboard Extension & Dynamic Island",
    desc: "A custom keyboard will provide access to saved history in supported apps. A Share Sheet extension will let you save items on iPhone and iPad. Background clipboard capture is not part of the iOS plan.",
    footer: "Platform: iPhone • iPad • Dynamic Island Status",
    footerColor: "text-[#00E5BE]",
  },
  {
    cat: "tools",
    badge: "Backup & presentation tools",
    badgeClass: "tag-blue",
    title: "JSON backups & Screen Share Hide",
    desc: "Export and import history as JSON on Mac. Screen Share Hide is planned to keep the clipboard panel out of view during presentations and recordings.",
    footer: "Status: Planned for Mac",
    footerColor: "text-[#2E82FF]",
  },
];

const PHASE2_TAGS = [
  "Apple Intelligence Predictions",
  "Team & Shared Pinboards",
  "MCP / AI Tool Integration",
  "Local REST API",
  "iPad Split View Tailored Layout",
];

export default function UpdatesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [shortcutsOpen, setShortcutsOpen] = useState(false);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setShortcutsOpen(true);
      }
      if (event.key === "Escape") setShortcutsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const visible = TIMELINE_ITEMS.filter(
    (item) => activeFilter === "all" || item.cat === activeFilter
  );

  return (
    <>
      <AmbientCanvas />

      <Navbar onOpenShortcuts={() => setShortcutsOpen(true)} />

      {/* Hero */}
      <section className="relative pt-32 pb-12 border-b border-white/8 z-10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00E5BE] mb-4">
            <span>●</span>
            <span>The Clipra roadmap</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-5">
            Good things are{" "}
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00E5BE] to-[#10F296] bg-clip-text text-transparent">
              in motion.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-9">
            Clipra is in development. Here is what we are planning for the first release and
            exploring for later. Features may change as we test.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2.5">
            {FILTER_BUTTONS.map((btn) => (
              <button
                key={btn.key}
                type="button"
                onClick={() => setActiveFilter(btn.key)}
                aria-pressed={activeFilter === btn.key}
                className={`min-h-[44px] px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === btn.key
                    ? "bg-[#00E5BE]/15 border border-[#00E5BE] text-white shadow-[0_0_15px_rgba(0,229,190,0.2)]"
                    : "bg-white/4 border border-white/8 text-slate-400 hover:bg-[#00E5BE]/10 hover:border-[#00E5BE]/50 hover:text-white"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="architecture" className="relative py-16 pb-24 z-10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            {/* Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-[#0E1526]/70 border border-white/8 rounded-2xl p-6 backdrop-blur-xl">
                <div className="text-xs font-bold uppercase tracking-widest text-[#00E5BE] mb-2">
                  INSIDE THE BUILD
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Calm, intentional clipboard software.
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  We are building a clipboard manager for Mac, iPhone, and iPad, with automatic
                  organization, text tools, and private iCloud sync.
                </p>
                <div className="border-t border-white/8 pt-4 text-xs text-slate-400 space-y-1">
                  <div>
                    Current Phase:{" "}
                    <strong className="text-[#10F296]">In development</strong>
                  </div>
                  <div>SwiftUI + CloudKit Core</div>
                </div>
              </div>
            </aside>

            {/* Cards */}
            <div className="flex flex-col gap-7">
              {visible.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0E1526]/70 border border-white/8 rounded-2xl p-7 backdrop-blur-xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] hover:border-[#00E5BE]/40 hover:-translate-y-[3px] hover:shadow-[0_20px_45px_-10px_rgba(0,102,255,0.25)] transition-all duration-300"
                >
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-3 ${
                      item.badgeClass === "tag-teal"
                        ? "bg-[#00E5BE]/15 text-[#00E5BE] border border-[#00E5BE]/30"
                        : item.badgeClass === "tag-blue"
                        ? "bg-[#0066FF]/15 text-[#2E82FF] border border-[#0066FF]/30"
                        : "bg-[#10F296]/15 text-[#10F296] border border-[#10F296]/30"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <h2 className="text-xl font-bold text-white mb-2.5">{item.title}</h2>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                  <div className={`text-xs font-mono ${item.footerColor}`}>{item.footer}</div>
                </div>
              ))}

              {/* Phase 2 Box */}
              {(activeFilter === "all" || activeFilter === "core") && (
                <div
                  className="border border-[#00E5BE]/30 rounded-2xl p-7 shadow-[0_0_40px_rgba(0,102,255,0.15)]"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(0,102,255,0.2) 0%, rgba(14,21,38,0.9) 70%)",
                  }}
                >
                  <div className="text-xs font-bold text-[#10F296] uppercase tracking-widest mb-2">
                    Phase 2 • Post-Launch Exploration
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">What comes after v1.0</h3>
                  <p className="text-sm text-slate-400 mb-5">
                    Ideas for later releases. These are not included in the v1.0 feature list:
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {PHASE2_TAGS.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-full text-sm text-slate-400 bg-white/6 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <ShortcutsModal open={shortcutsOpen} onClose={() => setShortcutsOpen(false)} />
    </>
  );
}
