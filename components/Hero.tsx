"use client";

import { useState, useRef } from "react";
import { Apple, ArrowDown, Check, Command, Sparkles, Search, Copy } from "lucide-react";

interface ClipCardItem {
  id: string;
  type: "code" | "colors" | "links" | "notes";
  source: string;
  shortcut: string;
  content: React.ReactNode;
  ruleTag: string;
  ruleClass: string;
  time: string;
}

const INITIAL_CARDS: ClipCardItem[] = [
  {
    id: "card-1",
    type: "code",
    source: "VS Code",
    shortcut: "⌘1",
    content: (
      <div className="font-mono text-[11px] text-[#7DD3FC] leading-relaxed">
        <span className="text-[#F472B6]">const</span> dedupe = &lt;T&gt;(arr: T[]): T[] =&gt; [...<span className="text-[#38BDF8]">new Set</span>(arr)];
      </div>
    ),
    ruleTag: "Rule: Code Language",
    ruleClass: "bg-blue-500/15 text-[#2E82FF] border-blue-500/30",
    time: "14s ago",
  },
  {
    id: "card-2",
    type: "colors",
    source: "Figma",
    shortcut: "⌘2",
    content: (
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#00E5BE] shadow-[0_0_16px_rgba(0,229,190,0.5)] border border-white/40 flex-shrink-0" />
        <div>
          <div className="font-mono font-bold text-white text-xs">#00E5BE</div>
          <div className="text-[11px] text-slate-400">rgba(0, 229, 190, 1.0)</div>
        </div>
      </div>
    ),
    ruleTag: "Rule: Hex Color",
    ruleClass: "bg-[#00E5BE]/15 text-[#00E5BE] border-[#00E5BE]/30",
    time: "2m ago",
  },
  {
    id: "card-3",
    type: "links",
    source: "Safari",
    shortcut: "⌘3",
    content: (
      <div>
        <div className="text-[11px] line-through text-slate-500 mb-0.5 truncate">
          linear.app/?utm_source=slack&amp;ref=12
        </div>
        <div className="text-xs font-semibold text-[#10F296] truncate">
          https://linear.app/projects
        </div>
      </div>
    ),
    ruleTag: "Auto-Cleaned UTM",
    ruleClass: "bg-[#10F296]/15 text-[#10F296] border-[#10F296]/30",
    time: "12m ago",
  },
  {
    id: "card-4",
    type: "notes",
    source: "Slack",
    shortcut: "⌘4",
    content: (
      <div className="text-xs text-slate-300 space-y-0.5">
        <div>• Review macOS 26 Swift build</div>
        <div>• Test StoreKit 2 Lifetime IAP</div>
        <div>• Finalize App Store video brief</div>
      </div>
    ),
    ruleTag: "Rule: Task List",
    ruleClass: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    time: "1h ago",
  },
];

const STREAM_ITEMS = [
  {
    type: "colors" as const,
    source: "Figma",
    shortcut: "⌘1",
    content: (
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#10F296] shadow-[0_0_16px_rgba(16,242,150,0.5)] border border-white/40 flex-shrink-0" />
        <div>
          <div className="font-mono font-bold text-white text-xs">#10F296</div>
          <div className="text-[11px] text-slate-400">rgba(16, 242, 150, 1.0)</div>
        </div>
      </div>
    ),
    ruleTag: "Rule: Brand Tokens",
    ruleClass: "bg-[#10F296]/15 text-[#10F296] border-[#10F296]/30",
    time: "Just now",
  },
  {
    type: "code" as const,
    source: "Xcode",
    shortcut: "⌘1",
    content: (
      <div className="font-mono text-[11px] text-[#7DD3FC]">
        <span className="text-[#F472B6]">let</span> container = <span className="text-[#38BDF8]">CKContainer</span>.default()
      </div>
    ),
    ruleTag: "Rule: Swift CloudKit",
    ruleClass: "bg-blue-500/15 text-[#2E82FF] border-blue-500/30",
    time: "Just now",
  },
  {
    type: "links" as const,
    source: "Arc Browser",
    shortcut: "⌘1",
    content: (
      <div>
        <div className="text-[11px] line-through text-slate-500 mb-0.5 truncate">
          github.com/arswift/clipra?ref=producthunt
        </div>
        <div className="text-xs font-semibold text-[#00E5BE] truncate">
          https://github.com/arswift/clipra
        </div>
      </div>
    ),
    ruleTag: "Cleaned UTM Referral",
    ruleClass: "bg-[#00E5BE]/15 text-[#00E5BE] border-[#00E5BE]/30",
    time: "Just now",
  },
];

export default function Hero() {
  const [cards, setCards] = useState<ClipCardItem[]>(INITIAL_CARDS);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const streamIdxRef = useRef(0);

  const simulateCopy = () => {
    const item = STREAM_ITEMS[streamIdxRef.current % STREAM_ITEMS.length];
    streamIdxRef.current++;

    const newCard: ClipCardItem = {
      id: `stream-${Date.now()}`,
      type: item.type,
      source: item.source,
      shortcut: item.shortcut,
      content: item.content,
      ruleTag: item.ruleTag,
      ruleClass: item.ruleClass,
      time: item.time,
    };

    setCards((prev) => [newCard, ...prev.slice(0, 3)]);
  };

  const filteredCards = cards.filter((card) =>
    (activeFilter === "all" || card.type === activeFilter) &&
    `${card.source} ${card.type} ${card.ruleTag}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <div className="glass-pill px-4 py-1.5 flex items-center gap-2.5 text-xs text-slate-300 border border-white/10 bg-white/5 rounded-full shadow-[0_0_20px_rgba(0,102,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#00E5BE] animate-ping" />
            <span className="font-medium">In development for Mac, iPhone &amp; iPad</span>
            <span className="text-[#00E5BE]">●</span>
            <span className="text-slate-400">Private by design</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            The clipboard that{" "}
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00E5BE] to-[#10F296] bg-clip-text text-transparent">
              organizes itself.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Never lose a link, color palette, or code snippet again. Clipra pairs zero-latency Smart Auto-Sort with instant Text Transformation and private iCloud sync — at half the price of Paste.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-[#00E5BE] to-[#10F296] hover:from-[#38F8D4] hover:to-[#44FBB0] rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(0,229,190,0.4)] hover:shadow-[0_0_50px_rgba(16,242,150,0.7)] active:scale-95 group"
            >
              <Apple className="w-5 h-5 fill-current" />
              <span>Explore planned pricing</span>
              <span className="ml-1 px-1.5 py-0.5 rounded bg-black/20 text-[10px] font-mono font-bold tracking-wider">
                ⌘⇧V
              </span>
            </a>

            <a
              href="/features#smart-sort"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 shadow-sm"
            >
              <span>Explore Interactive Demo</span>
              <ArrowDown className="w-4 h-4 text-[#00E5BE] animate-bounce" />
            </a>
          </div>

          {/* Trust Meta Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 mb-16">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#00E5BE] stroke-[3]" />
              <span>Free plan planned at launch</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#00E5BE] stroke-[3]" />
              <span>100% Private iCloud (No AR Swift Servers)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#00E5BE] stroke-[3]" />
              <span>$14.99/yr vs Paste&apos;s $29.99</span>
            </div>
          </div>
        </div>

        {/* A device-stage concept with an interactive clipboard shelf. */}
        <div className="device-stage">
          <div className="device-tablet" aria-hidden="true"><div className="device-small-screen"><div className="device-small-top">9:41 <span>Wi-Fi &nbsp; 100%</span></div><div className="device-small-heading">Clipboard <span>???</span></div><div className="device-small-grid">{cards.map((card) => <div className={`mini-clip mini-${card.type}`} key={card.id}><span>{card.source}</span><strong>{card.source === "Xcode" ? "let container = ..." : card.source === "Arc Browser" ? "github.com/arswift/clipra" : card.ruleTag === "Rule: Brand Tokens" ? "#10F296" : card.type === "code" ? "const dedupe = ..." : card.type === "colors" ? "#00E5BE" : card.type === "links" ? "linear.app/projects" : "Review macOS build"}</strong><small>{card.ruleTag}</small></div>)}</div></div></div>
          <div className="device-phone" aria-hidden="true"><div className="device-phone-screen"><div className="device-notch" /><div className="device-phone-time">9:41 <span>Wi-Fi</span></div><div className="device-phone-title">Clipboard <span>???</span></div><div className="device-phone-grid">{cards.map((card) => <div className={`mini-clip mini-${card.type}`} key={card.id}><span>{card.source}</span><strong>{card.source === "Xcode" ? "let container = ..." : card.source === "Arc Browser" ? "github.com/arswift/clipra" : card.ruleTag === "Rule: Brand Tokens" ? "#10F296" : card.type === "code" ? "const dedupe = ..." : card.type === "colors" ? "#00E5BE" : card.type === "links" ? "linear.app/projects" : "Review macOS build"}</strong><small>{card.ruleTag}</small></div>)}</div></div></div>
          <div className="device-laptop">
            <div className="device-screen">
              <div className="device-wallpaper" aria-hidden="true"><div className="device-menu"><span>? &nbsp; Clipra &nbsp; File &nbsp; Edit &nbsp; View</span><span>? &nbsp; ? &nbsp; 9:41 AM</span></div><div className="device-wallpaper-copy">A little more room<br />for your ideas.</div></div>
              <div className="device-app">
            {/* Mac Titlebar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0C1222]/80 border-b border-white/10 gap-3 flex-wrap">
              {/* Traffic Lights */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/20" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/20" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/20" />
              </div>

              {/* Title Center */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Copy className="w-3.5 h-3.5 text-[#00E5BE]" />
                <span>Clipra Shelf — macOS Liquid Glass</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#00E5BE]/10 text-[#00E5BE] border border-[#00E5BE]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5BE] animate-ping" />
                  Interactive demo
                </span>
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={simulateCopy}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#00E5BE]/15 hover:bg-[#00E5BE]/25 text-white border border-[#00E5BE]/40 shadow-sm transition-all active:scale-95 flex items-center gap-1.5"
                  title="Simulate copying an item to trigger instant Smart Auto-Sort"
                >
                  <Sparkles className="w-3 h-3 text-[#00E5BE]" />
                  <span>Simulate ⌘C</span>
                </button>

                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs text-slate-400 bg-black/40 border border-white/10 rounded-lg">
                  <Search className="w-3 h-3" />
                  <span>Search OCR...</span>
                  <span className="text-[10px] font-mono px-1 rounded bg-white/10">⌘F</span>
                </div>
              </div>
            </div>

            {/* Mac Shelf Body */}
            <div className="p-4 sm:p-6">
              {/* Pinboards Row */}
              <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
                <button
                  type="button"
                  onClick={() => setActiveFilter("all")}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    activeFilter === "all"
                      ? "bg-gradient-to-r from-[#0066FF] to-[#00E5BE] text-white shadow-[0_0_15px_rgba(0,229,190,0.3)]"
                      : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/8"
                  }`}
                >
                  <span>⚡ All History</span>
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black/30 font-mono font-bold">
                    {cards.length}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFilter("code")}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    activeFilter === "code"
                      ? "bg-gradient-to-r from-[#0066FF] to-[#00E5BE] text-white shadow-[0_0_15px_rgba(0,229,190,0.3)]"
                      : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/8"
                  }`}
                >
                  <span>&#123; &#125; Code Snippets</span>

                </button>

                <button
                  type="button"
                  onClick={() => setActiveFilter("colors")}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    activeFilter === "colors"
                      ? "bg-gradient-to-r from-[#0066FF] to-[#00E5BE] text-white shadow-[0_0_15px_rgba(0,229,190,0.3)]"
                      : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/8"
                  }`}
                >
                  <span>◈ Brand Colors</span>

                </button>

                <button
                  type="button"
                  onClick={() => setActiveFilter("links")}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    activeFilter === "links"
                      ? "bg-gradient-to-r from-[#0066FF] to-[#00E5BE] text-white shadow-[0_0_15px_rgba(0,229,190,0.3)]"
                      : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/8"
                  }`}
                >
                  <span>↗ Clean URLs</span>

                </button>

                <button
                  type="button"
                  onClick={() => setActiveFilter("notes")}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    activeFilter === "notes"
                      ? "bg-gradient-to-r from-[#0066FF] to-[#00E5BE] text-white shadow-[0_0_15px_rgba(0,229,190,0.3)]"
                      : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/8"
                  }`}
                >
                  <span>✎ Meeting Notes</span>

                </button>
              </div>

              {/* Cards Grid */}
              <div className="hero-clip-grid">
                {filteredCards.map((card) => (
                  <div
                    key={card.id}
                    className="group relative p-4 rounded-xl bg-[#0E1526]/80 hover:bg-[#141E34]/90 border border-white/8 hover:border-[#00E5BE]/40 shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col justify-between min-h-[175px]"
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-3 text-[11px] text-slate-400">
                        <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5BE]" />
                          {card.source}
                        </span>
                        <span className="font-mono text-slate-400 px-1 rounded bg-black/40 border border-white/5">
                          {card.shortcut}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="mb-3">{card.content}</div>
                    </div>

                    {/* Card Footer */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/6 text-[11px] text-slate-500">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${card.ruleClass}`}
                      >
                        {card.ruleTag}
                      </span>
                      <span>{card.time}</span>
                    </div>
                  </div>
                ))}
                {filteredCards.length === 0 && <p className="text-sm text-slate-400 py-6">No demo items found. Try another search or category.</p>}
              </div>
            </div>
            </div>
            </div>
            <div className="device-base" aria-hidden="true"><span /></div>
          </div>
        </div>
        <p className="text-center text-xs text-slate-400 mt-6">Interactive concept - Try the filters, search, or simulate a copy</p>
      </div>
    </section>
  );
}
