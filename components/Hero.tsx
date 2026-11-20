"use client";

import { useState, useRef } from "react";
import { Check, Copy, Search } from "lucide-react";

interface ClipCardItem {
  id: string;
  type: "code" | "colors" | "links" | "notes";
  source: string;
  shortcut: string;
  content: React.ReactNode;
  ruleTag: string;
  time: string;
}

const INITIAL_CARDS: ClipCardItem[] = [
  {
    id: "card-1",
    type: "code",
    source: "VS Code",
    shortcut: "⌘1",
    content: (
      <div className="font-mono text-[12px] text-[#1D1D1F] leading-relaxed">
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
          <div className="font-mono font-semibold text-[#1D1D1F] text-xs">#0066FF</div>
          <div className="text-[11px] text-[#6E6E73]">rgb(0, 102, 255)</div>
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
      <div className="font-mono text-[12px] text-[#1D1D1F]">
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
    <section className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="wrap">
        <div className="hero-enter text-center max-w-3xl mx-auto">
          <p className="text-[15px] text-[#6E6E73] mb-6">
            In development for Mac, iPhone and iPad
          </p>
          <h1 className="text-[44px] sm:text-6xl md:text-7xl font-bold text-[#1D1D1F] leading-[1.05] mb-5">
            Everything you copy, on every device.
          </h1>
          <p className="text-lg sm:text-xl text-[#6E6E73] max-w-2xl mx-auto leading-relaxed mb-8">
            Clipra is a clipboard manager for Mac, iPhone and iPad. Anything you copied, back in
            seconds — organised, searchable, and in sync.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-5">
            <a href="/pricing" className="btn btn-primary">
              Try for free
            </a>
            <a href="/pricing" className="btn btn-outline">
              See plans
            </a>
          </div>
          <p className="text-sm text-[#6E6E73] mb-16">
            Free plan planned at launch, with private iCloud sync and Pro planned at $14.99 a
            year.
          </p>
        </div>

        {/* Devices: the same clipboard cards on Mac, iPad and iPhone. */}
        <div className="hero-enter relative max-w-[1024px] mx-auto">
          {/* iPad — left */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute z-[1] left-0 bottom-[8%] w-[22%] rounded-[18px] bg-white border border-black/10 shadow-[0_24px_50px_rgba(0,0,0,0.18)] p-1.5"
          >
            <div className="rounded-[12px] bg-[#F5F5F7] p-3 h-full">
              <div className="flex justify-between text-[9px] font-semibold text-[#1D1D1F]">
                <span>9:41</span>
                <span>Wi-Fi · 100%</span>
              </div>
              <div className="flex justify-between items-center text-[15px] font-semibold text-[#1D1D1F] mt-4 mb-3">
                Clipboard <span className="text-[11px] font-normal text-[#6E6E73]">All clips</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="min-h-[64px] p-2 rounded-lg bg-white border border-black/[0.07] flex flex-col"
                  >
                    <span className="text-[8px] text-[#6E6E73]">{card.source}</span>
                    <strong className="mt-1.5 text-[9px] leading-snug font-semibold text-[#1D1D1F]">
                      {miniLabel(card)}
                    </strong>
                    <small className="mt-auto pt-1 text-[7px] text-[#86868B]">{card.ruleTag}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* iPhone — right */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute z-[3] right-0 bottom-[5%] w-[15%] rounded-[26px] bg-white border border-black/10 shadow-[0_24px_50px_rgba(0,0,0,0.18)] p-1.5"
          >
            <div className="relative rounded-[20px] bg-[#F5F5F7] px-2 pt-4 pb-2.5 h-full">
              <div className="absolute top-1.5 left-[30%] w-[40%] h-[10px] rounded-full bg-black" />
              <div className="flex justify-between text-[9px] font-semibold text-[#1D1D1F] px-1">
                <span>9:41</span>
                <span>Wi-Fi</span>
              </div>
              <div className="flex justify-between items-center text-[14px] font-semibold text-[#1D1D1F] mt-3 mb-2 px-1">
                Clipboard <span className="text-[10px] font-normal text-[#6E6E73]">All clips</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="min-h-[58px] p-1.5 rounded-lg bg-white border border-black/[0.07] flex flex-col"
                  >
                    <span className="text-[8px] text-[#6E6E73]">{card.source}</span>
                    <strong className="mt-1 text-[8px] leading-snug font-semibold text-[#1D1D1F]">
                      {miniLabel(card)}
                    </strong>
                    <small className="mt-auto pt-1 text-[7px] text-[#86868B]">{card.ruleTag}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mac window — the live demo */}
          <div className="relative z-[2] mx-auto lg:mx-[11%]">
            <div className="app-frame">
              <div className="app-frame-bar">
                <span className="traffic-lights" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="flex items-center gap-2 font-semibold text-[#1D1D1F]">
                  <Copy className="w-3.5 h-3.5 text-[#0066FF]" aria-hidden="true" />
                  Clipra — Clipboard
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#0066FF]/10 text-[#0066FF]">
                    Interactive demo
                  </span>
                </span>
                <span className="hidden sm:flex items-center gap-2">
                  <button
                    type="button"
                    onClick={simulateCopy}
                    className="min-h-[32px] px-3 text-xs font-medium rounded-lg bg-[#0066FF] hover:bg-[#2E82FF] text-white transition-colors"
                  >
                    Simulate ⌘C
                  </button>
                  <label className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#6E6E73] bg-white border border-black/10 rounded-lg">
                    <Search className="w-3.5 h-3.5" aria-hidden="true" />
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search your clips"
                      className="bg-transparent outline-none w-28 text-[#1D1D1F] placeholder:text-[#86868B]"
                      aria-label="Search your clips"
                    />
                  </label>
                </span>
              </div>

              <div className="p-4 sm:p-5 bg-[#F5F5F7]">
                <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4">
                  {FILTERS.map((f) => (
                    <button
                      key={f.key}
                      type="button"
                      onClick={() => setActiveFilter(f.key)}
                      aria-pressed={activeFilter === f.key}
                      className={`min-h-[36px] px-3.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                        activeFilter === f.key
                          ? "bg-[#0066FF] text-white"
                          : "bg-white hover:bg-black/[0.04] text-[#424245] border border-black/10"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {filteredCards.map((card) => (
                    <div
                      key={card.id}
                      className="relative p-4 rounded-2xl bg-white border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.05)] flex flex-col justify-between min-h-[160px]"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3 text-[11px] text-[#6E6E73]">
                          <span className="font-medium text-[#1D1D1F] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                            {card.source}
                          </span>
                          <span className="font-mono px-1.5 py-0.5 rounded bg-black/[0.04] border border-black/[0.07]">
                            {card.shortcut}
                          </span>
                        </div>
                        <div className="mb-3">{card.content}</div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-black/[0.07] text-[11px] text-[#6E6E73]">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20">
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
            <div
              aria-hidden="true"
              className="h-[14px] mx-[-4%] rounded-b-[50%] bg-gradient-to-b from-[#3F4756] to-[#232936]"
            />
          </div>
        </div>

        <p className="text-center text-xs text-[#86868B] mt-8">
          Interactive concept — try the filters, search, or simulate a copy.
        </p>

        <div className="flex items-center justify-center gap-2 mt-10 text-[13px] text-[#6E6E73]">
          <Check className="w-4 h-4 text-[#0066FF]" aria-hidden="true" />
          <span>
            Paste is the benchmark: 4.5 stars, 16,000+ ratings. Clipra is being built to do the
            organising Paste never did.
          </span>
        </div>
      </div>
    </section>
  );
}
