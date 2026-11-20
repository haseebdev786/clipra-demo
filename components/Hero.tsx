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

const RULE = "bg-[#0071E3]/10 text-[#0071E3] border border-[#0071E3]/20";

const INITIAL_CARDS: ClipCardItem[] = [
  {
    id: "card-1",
    type: "code",
    source: "VS Code",
    shortcut: "⌘1",
    content: (
      <div className="font-mono text-[11px] text-[#1D1D1F] leading-relaxed">
        <span className="text-[#0071E3]">const</span> dedupe = &lt;T&gt;(arr: T[]): T[] =&gt; [
        ...<span className="text-[#0071E3]">new Set</span>(arr)];
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
        <div className="w-9 h-9 rounded-lg bg-[#0071E3] flex-shrink-0" />
        <div>
          <div className="font-mono font-semibold text-[#1D1D1F] text-xs">#0071E3</div>
          <div className="text-[11px] text-[#6E6E73]">rgb(0, 113, 227)</div>
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
        <div className="text-[11px] line-through text-[#86868B] mb-0.5 truncate">
          linear.app/?utm_source=slack&amp;ref=12
        </div>
        <div className="text-xs font-semibold text-[#1D1D1F] truncate">
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
      <div className="text-xs text-[#424245] space-y-0.5">
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
        <div className="w-9 h-9 rounded-lg bg-[#1D1D1F] flex-shrink-0" />
        <div>
          <div className="font-mono font-semibold text-[#1D1D1F] text-xs">#1D1D1F</div>
          <div className="text-[11px] text-[#6E6E73]">rgb(29, 29, 31)</div>
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
      <div className="font-mono text-[11px] text-[#1D1D1F]">
        <span className="text-[#0071E3]">let</span> container ={" "}
        <span className="text-[#0071E3]">CKContainer</span>.default()
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
        <div className="text-[11px] line-through text-[#86868B] mb-0.5 truncate">
          github.com/arswift/clipra?ref=producthunt
        </div>
        <div className="text-xs font-semibold text-[#1D1D1F] truncate">
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
  if (card.type === "colors") return "#0071E3";
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
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-block text-xs font-medium text-[#6E6E73] bg-white border border-black/10 rounded-full px-3.5 py-1.5 mb-6">
            In development for Mac, iPhone &amp; iPad
          </p>
          <h1 className="text-[40px] sm:text-6xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.08] mb-5">
            Everything you copy, on every device.
          </h1>
          <p className="text-lg sm:text-xl text-[#6E6E73] max-w-2xl mx-auto leading-relaxed mb-8">
            Clipra is a clipboard manager for Mac, iPhone and iPad. Anything you copied, back in
            seconds — organised, searchable, and in sync.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] rounded-full transition-colors"
            >
              Download free
            </a>
            <a
              href="/features#smart-sort"
              className="inline-flex items-center gap-1.5 px-6 py-3 text-[15px] font-medium text-[#0071E3] hover:underline"
            >
              See how it works
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-[#86868B] mb-10">
            Planned pricing — the app is in development.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-[#6E6E73] mb-14">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#0071E3]" /> Free plan planned at launch
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#0071E3]" /> Private iCloud sync — no Clipra servers
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#0071E3]" /> Pro planned at $14.99/yr
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
                <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-black/10 gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/10" />
                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/10" />
                    <span className="w-3 h-3 rounded-full bg-[#28C840] border border-black/10" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#1D1D1F]">
                    <Copy className="w-3.5 h-3.5 text-[#0071E3]" />
                    <span>Clipra — Clipboard</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#0071E3]/10 text-[#0071E3]">
                      Interactive demo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={simulateCopy}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[#0071E3] hover:bg-[#0077ED] text-white transition-colors"
                      title="Simulate copying an item"
                    >
                      Simulate ⌘C
                    </button>
                    <label className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs text-[#6E6E73] bg-black/[0.04] border border-black/10 rounded-lg">
                      <Search className="w-3 h-3" />
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search your clips"
                        className="bg-transparent outline-none w-28 text-[#1D1D1F] placeholder:text-[#86868B]"
                        aria-label="Search your clips"
                      />
                    </label>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-white">
                  <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4">
                    {FILTERS.map((f) => (
                      <button
                        key={f.key}
                        type="button"
                        onClick={() => setActiveFilter(f.key)}
                        aria-pressed={activeFilter === f.key}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                          activeFilter === f.key
                            ? "bg-[#0071E3] text-white"
                            : "bg-black/[0.04] hover:bg-black/[0.07] text-[#424245] border border-black/10"
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
                        className="relative p-4 rounded-2xl bg-[#F5F5F7] border border-black/10 flex flex-col justify-between min-h-[160px]"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3 text-[11px] text-[#6E6E73]">
                            <span className="font-medium text-[#1D1D1F] flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3]" />
                              {card.source}
                            </span>
                            <span className="font-mono px-1.5 py-0.5 rounded bg-white border border-black/10">
                              {card.shortcut}
                            </span>
                          </div>
                          <div className="mb-3">{card.content}</div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-black/10 text-[11px] text-[#6E6E73]">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${RULE}`}>
                            {card.ruleTag}
                          </span>
                          <span>{card.time}</span>
                        </div>
                      </div>
                    ))}
                    {filteredCards.length === 0 && (
                      <p className="text-sm text-[#6E6E73] py-6">
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
        <p className="text-center text-xs text-[#86868B] mt-6">
          Interactive concept — try the filters, search, or simulate a copy.
        </p>
      </div>
    </section>
  );
}
