"use client";

import { useState } from "react";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const FILTER_BUTTONS = [
  { key: "all", label: "All roadmap items" },
  { key: "core", label: "Core architecture" },
  { key: "tools", label: "Power tools" },
  { key: "privacy", label: "Privacy & iCloud" },
  { key: "mobile", label: "iPhone & iPad" },
];

const TIMELINE_ITEMS = [
  {
    cat: "core",
    badge: "Planned for v1.0",
    title: "Smart Auto-Sort",
    desc: "Rules will sort copied links, color codes, and code snippets into pinboards. Custom rules will let you organize by content or source app.",
    footer: "Target: macOS menu bar · iOS keyboard companion",
  },
  {
    cat: "tools",
    badge: "Planned for v1.0",
    title: "Text Transformer",
    desc: "Clean tracking parameters from links, format JSON, change letter case, encode or decode text, and remove formatting. Transformations are planned to run on your device.",
    footer: "Status: Planned for the first release",
  },
  {
    cat: "privacy",
    badge: "Privacy",
    title: "Private iCloud sync",
    desc: "The planned design stores history locally and syncs through your private iCloud database. Clipboard content will not be stored on AR Swift servers.",
    footer: "Planned for Pro and Lifetime",
  },
  {
    cat: "mobile",
    badge: "Mobile ecosystem",
    title: "iOS custom keyboard extension & Dynamic Island",
    desc: "A custom keyboard will provide access to saved history in supported apps. A Share Sheet extension will let you save items on iPhone and iPad. Background clipboard capture is not part of the iOS plan.",
    footer: "Platform: iPhone · iPad · Dynamic Island status",
  },
  {
    cat: "tools",
    badge: "Backup & presentation tools",
    title: "JSON backups & Screen Share Hide",
    desc: "Export and import history as JSON on Mac. Screen Share Hide is planned to keep the clipboard panel out of view during presentations and recordings.",
    footer: "Status: Planned for Mac",
  },
];

const PHASE2_TAGS = [
  "Apple Intelligence predictions",
  "Team & shared pinboards",
  "MCP / AI tool integration",
  "Local REST API",
  "iPad split view tailored layout",
];

export default function UpdatesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visible = TIMELINE_ITEMS.filter(
    (item) => activeFilter === "all" || item.cat === activeFilter
  );

  return (
    <PageShell>
      <section className="inner-hero inner-hero-compact">
        <p className="kicker">The Clipra roadmap</p>
        <h1>
          Good things are<br />
          <span>in motion.</span>
        </h1>
        <p>
          Clipra is in development. Here is what we are planning for the first release and
          exploring for later. Features may change as we test.
        </p>
        <div className="flex flex-wrap gap-2.5 mt-9">
          {FILTER_BUTTONS.map((btn) => (
            <button
              key={btn.key}
              type="button"
              onClick={() => setActiveFilter(btn.key)}
              aria-pressed={activeFilter === btn.key}
              className={`min-h-[44px] px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === btn.key
                  ? "bg-[#0066FF] text-white"
                  : "bg-white/60 backdrop-blur border border-white/60 text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-white/80"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </section>

      <section className="section band-mist">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-24 glass-3 p-6">
                <p className="kicker">Inside the build</p>
                <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">
                  Calm, intentional clipboard software.
                </h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed mb-5">
                  We are building a clipboard manager for Mac, iPhone, and iPad, with automatic
                  organization, text tools, and private iCloud sync.
                </p>
                <div className="border-t border-black/[0.08] pt-4 text-sm text-[#6E6E73] space-y-1.5">
                  <p>
                    Current phase: <strong className="text-[#0066FF]">In development</strong>
                  </p>
                  <p>SwiftUI + CloudKit core</p>
                </div>
              </div>
            </aside>

            <div className="flex flex-col gap-5">
              {visible.map((item) => (
                <article
                  key={item.title}
                  className="glass-2 p-7"
                >
                  <span className="inline-block text-xs font-semibold text-[#0066FF] bg-[#0066FF]/10 px-2.5 py-1 rounded-md mb-3">
                    {item.badge}
                  </span>
                  <h2 className="text-xl font-bold text-[#1D1D1F] mb-2.5">{item.title}</h2>
                  <p className="text-sm text-[#6E6E73] leading-relaxed mb-4">{item.desc}</p>
                  <p className="text-xs font-mono text-[#0066FF]">{item.footer}</p>
                </article>
              ))}

              {(activeFilter === "all" || activeFilter === "core") && (
                <div className="glass-card p-8">
                  <p className="kicker">Phase 2 · post-launch exploration</p>
                  <h3 className="text-2xl font-bold text-white mb-2">What comes after v1.0</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#94A3B8" }}>
                    Ideas for later releases. These are not included in the v1.0 feature list:
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {PHASE2_TAGS.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-2 rounded-full text-sm bg-white/[0.07] border border-white/10 text-[#CBD5E1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm mt-6">
                    <Link href="/for-teams" className="text-white font-medium underline underline-offset-4">
                      Team and shared pinboards are a Phase 2 idea — see what is planned for teams
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
