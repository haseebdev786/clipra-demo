"use client";

import { useState, useRef } from "react";
import { ArrowRight, Check, Copy, Search } from "lucide-react";

interface ClipCardItem {
  id: string;
  type: "code" | "colors" | "links" | "notes";
  source: string;
  shortcut: string;
  content: React.ReactNode;
  ruleTag: string;
  time: string;
}

const RULE = "bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20";

const INITIAL_CARDS: ClipCardItem[] = [
  {
    id: "card-1",
    type: "code",
    source: "VS Code",
    shortcut: "⌘1",
    content: (
      <div className="font-mono text-[11px] text-[#F1F5F9] leading-relaxed">
        <span className="text-[#0066FF]">const</span> dedupe = &lt;T&gt;(arr: T[]): T[] =&gt; [
        ...<span className="text-[#0066FF]">new Set</span>(arr)];
      </div>
    ),
    ruleTag: "Rule: Code Language",
    time: "14s ago",
  },
  {
    id: "card-2",
    type: "colors",
    source: "Figma",
    shortcut: "⌘2",
    content: (
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#0066FF] flex-shrink-0" />
        <div>
          <div className="font-mono font-semibold text-[#F1F5F9] text-xs">#0066FF</div>
          <div className="text-[11px] text-[#94A3B8]">rgb(0, 102, 255)</div>
        </div>
      </div>
    ),
    ruleTag: "Rule: Hex Color",
    time: "2m ago",
  },
  {
    id: "card-3",
    type: "links",
    source: "Safari",
    shortcut: "⌘3",
    content: (
      <div>
        <div className="text-[11px] line-through text-[#64748B] mb-0.5 truncate">
          linear.app/?utm_source=slack&amp;ref=12
        </div>
        <div className="text-xs font-semibold text-[#F1F5F9] truncate">
          https://linear.app/projects
        </div>
      </div>
    ),
    ruleTag: "Tracking removed",
    time: "12m ago",
  },
  {
    id: "card-4",
    type: "notes",
    source: "Slack",
    shortcut: "⌘4",
    content: (
      <div className="text-xs text-[#CBD5E1] space-y-0.5">
        <div>• Review macOS 26 Swift build</div>
        <div>• Test StoreKit 2 Lifetime IAP</div>
        <div>• Finalize App Store video brief</div>
      </div>
    ),
    ruleTag: "Rule: Task List",
    time: "1h ago",
  },
];

const STREAM_ITEMS: Omit<ClipCardItem, "id">[] = [
  {
    type: "colors",
    source: "Figma",
    shortcut: "⌘1",
    content: (
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#F1F5F9] flex-shrink-0" />
        <div>
          <div className="font-mono font-semibold text-[#F1F5F9] text-xs">#F1F5F9</div>
          <div className="text-[11px] text-[#94A3B8]">rgb(29, 29, 31)</div>
        </div>
      </div>
    ),
    ruleTag: "Rule: Hex Color",
    time: "Just now",
  },
  {
    type: "code",
    source: "Xcode",
    shortcut: "⌘1",
    content: (
      <div className="font-mono text-[11px] text-[#F1F5F9]">
        <span className="text-[#0066FF]">let</span> container ={" "}
        <span className="text-[#0066FF]">CKContainer</span>.default()
      </div>
    ),
    ruleTag: "Rule: Swift CloudKit",
    time: "Just now",
  },
  {
    type: "links",
    source: "Safari",
    shortcut: "⌘1",
    content: (
      <div>
        <div className="text-[11px] line-through text-[#64748B] mb-0.5 truncate">
          github.com/arswift/clipra?ref=producthunt
        </div>
        <div className="text-xs font-semibold text-[#F1F5F9] truncate">
          https://github.com/arswift/clipra
        </div>
      </div>
    ),
    ruleTag: "Tracking removed",
    time: "Just now",
  },
];

const FILTERS = [
  { key: "all", label: "All History" },
  { key: "code", label: "Code" },
  { key: "colors", label: "Colours" },
  { key: "links", label: "Links" },
  { key: "notes", label: "Notes" },
] as const;

function miniLabel(card: ClipCardItem) {
  if (card.source === "Xcode") return "let container = ...";
  if (card.source === "Arc Browser") return "github.com/arswift/clipra";
  if (card.type === "code") return "const dedupe = ...";
  if (card.type === "colors") return "#0066FF";
  if (card.type === "links") return "linear.app/projects";
  return "Review macOS build";
}

export default function Hero() {
  const [cards, setCards] = useState<ClipCardItem[]>(INITIAL_CARDS);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const streamIdxRef = useRef(0);

  const simulateCopy = () => {
    const item = STREAM_ITEMS[streamIdxRef.current % STREAM_ITEMS.length];
    streamIdxRef.current++;
    setCards((prev) => [{ ...item, id: `stream-${Date.now()}` }, ...prev.slice(0, 3)]);
  };

  const filteredCards = cards.filter(
    (card) =>
      (activeFilter === "all" || card.type === activeFilter) &&
      `${card.source} ${card.type} ${card.ruleTag}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="glass-pill mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5BE]" />
            In development for Mac, iPhone &amp; iPad
          </p>
          <h1 className="text-[44px] sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-5">
            Everything you copy, <span className="text-[#2E82FF]">on every device.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-8">
            Clipra is a clipboard manager for Mac, iPhone and iPad. Anything you copied, back in
            seconds — organised, searchable, and in sync.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-white bg-[#0066FF] hover:bg-[#2E82FF] rounded-full transition-all shadow-[0_12px_32px_rgba(0,102,255,0.4)] hover:-translate-y-0.5"
            >
              Download free
            </a>
            <a
              href="/features#smart-sort"
              className="inline-flex items-center gap-1.5 px-6 py-3 text-[15px] font-medium text-[#0066FF] hover:underline"
            >
              See how it works
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-[#64748B] mb-10">
            Planned pricing — the app is in development.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-[#94A3B8] mb-14">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#0066FF]" /> Free plan planned at launch
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#0066FF]" /> Private iCloud sync — no Clipra servers
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#0066FF]" /> Pro planned at $14.99/yr
            </span>
          </div>
        </div>

        {/* Devices: Mac window with the same clipboard cards as iPad and iPhone. */}
        <div className="device-stage">
          <div className="device-tablet" aria-hidden="true">
            <div className="device-small-screen">
              <div className="device-small-top">
                <span>9:41</span>
                <span>Wi-Fi · 100%</span>
              </div>
              <div className="device-small-heading">
                Clipboard <span>All clips</span>
              </div>
              <div className="device-small-grid">
                {cards.map((card) => (
                  <div className={`mini-clip mini-${card.type}`} key={card.id}>
                    <span>{card.source}</span>
                    <strong>{miniLabel(card)}</strong>
                    <small>{card.ruleTag}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="device-phone" aria-hidden="true">
            <div className="device-phone-screen">
              <div className="device-notch" />
              <div className="device-phone-time">
                <span>9:41</span>
                <span>Wi-Fi</span>
              </div>
              <div className="device-phone-title">
                Clipboard <span>All clips</span>
              </div>
              <div className="device-phone-grid">
                {cards.map((card) => (
                  <div className={`mini-clip mini-${card.type}`} key={card.id}>
                    <span>{card.source}</span>
                    <strong>{miniLabel(card)}</strong>
                    <small>{card.ruleTag}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="device-laptop">
            <div className="device-screen">
              <div className="device-menu">
                <span>Clipra&nbsp;&nbsp;File&nbsp;&nbsp;Edit&nbsp;&nbsp;View</span>
                <span>9:41 AM</span>
              </div>
              <div className="device-app">
                <div className="flex items-center justify-between px-4 py-3 bg-white/[0.06] border-b border-white/10 gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57] border border-white/10" />
                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-white/10" />
                    <span className="w-3 h-3 rounded-full bg-[#28C840] border border-white/10" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#F1F5F9]">
                    <Copy className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>Clipra — Clipboard</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#0066FF]/10 text-[#0066FF]">
                      Interactive demo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={simulateCopy}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[#0066FF] hover:bg-[#2E82FF] text-white transition-colors"
                      title="Simulate copying an item"
                    >
                      Simulate ⌘C
                    </button>
                    <label className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs text-[#94A3B8] bg-white/[0.06] border border-white/10 rounded-lg">
                      <Search className="w-3 h-3" />
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search your clips"
                        className="bg-transparent outline-none w-28 text-[#F1F5F9] placeholder:text-[#64748B]"
                        aria-label="Search your clips"
                      />
                    </label>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-white/[0.06]">
                  <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4">
                    {FILTERS.map((f) => (
                      <button
                        key={f.key}
                        type="button"
                        onClick={() => setActiveFilter(f.key)}
                        aria-pressed={activeFilter === f.key}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                          activeFilter === f.key
                            ? "bg-[#0066FF] text-white"
                            : "bg-white/[0.06] hover:bg-white/[0.10] text-[#CBD5E1] border border-white/10"
                        }`}
                      >
                        {f.label}
                        {f.key === "all" && (
                          <span className="ml-1.5 text-[10px] font-mono opacity-80">
                            {cards.length}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="hero-clip-grid">
                    {filteredCards.map((card) => (
                      <div
                        key={card.id}
                        className="relative p-4 rounded-2xl bg-[#0A0A0F] border border-white/10 flex flex-col justify-between min-h-[160px]"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3 text-[11px] text-[#94A3B8]">
                            <span className="font-medium text-[#F1F5F9] flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                              {card.source}
                            </span>
                            <span className="font-mono px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/10">
                              {card.shortcut}
                            </span>
                          </div>
                          <div className="mb-3">{card.content}</div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-[#94A3B8]">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${RULE}`}>
                            {card.ruleTag}
                          </span>
                          <span>{card.time}</span>
                        </div>
                      </div>
                    ))}
                    {filteredCards.length === 0 && (
                      <p className="text-sm text-[#94A3B8] py-6">
                        No demo items found. Try another search or category.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="device-base" aria-hidden="true">
              <span />
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-[#64748B] mt-6">
          Interactive concept — try the filters, search, or simulate a copy.
        </p>
      </div>
    </section>
  );
}
