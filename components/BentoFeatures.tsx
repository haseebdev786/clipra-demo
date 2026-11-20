"use client";

import { Layers, Download, EyeOff, Search, Lock, Trash2 } from "lucide-react";

const FEATURES = [
  {
    icon: Layers,
    title: "Paste Stack",
    desc: "Copy multiple items in sequence, then paste them in exact order one by one.",
    footer: "Available on Mac · Sequential queue",
    wide: true,
  },
  {
    icon: Download,
    title: "Offline Export & Import",
    desc: "The most requested feature on Paste's public board, with 161 votes. Export your entire clipboard history to structured JSON for corporate backup, compliance, or local migration.",
    footer: "Offline JSON export",
    wide: false,
  },
  {
    icon: EyeOff,
    title: "Screen Share Stealth",
    desc: "Hide the clipboard panel while you present or record. Planned for Mac.",
    footer: "Hidden during screen share",
    wide: false,
  },
  {
    icon: Search,
    title: "Power Search",
    desc: "Filter your history by type, source app, or date, and find a copy again without scrolling through everything.",
    footer: "Search by type, app, or date",
    wide: false,
  },
  {
    icon: Lock,
    title: "Biometric Protection",
    desc: "Lock pinboards and history behind Face ID or Touch ID on iPhone and iPad.",
    footer: "Face ID and Touch ID on iPhone and iPad",
    wide: false,
  },
  {
    icon: Trash2,
    title: "30-Day Trash Recovery",
    desc: "Accidentally removed an important API token or contract address? Clipra keeps deleted items safe for 30 days before permanent purging.",
    footer: "Undo protection built in",
    wide: false,
  },
];

export default function BentoFeatures() {
  return (
    <section id="features" className="section band-mist">
      <div className="wrap">
        <div className="max-w-3xl mb-12 reveal-on-scroll">
          <p className="kicker">Planned for v1.0</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
            The tools for the copies you make every day.
          </h2>
          <p className="lede mt-5">
            For developers, designers, and teams who copy and paste all day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className={`light-card p-7 flex flex-col justify-between reveal-on-scroll ${
                f.wide ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-[#0066FF]/10 text-[#0066FF] mb-4">
                  <f.icon className="w-6 h-6" aria-hidden="true" />
                </span>
                <h3 className="text-[17px] font-semibold text-[#1D1D1F] mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed text-[#6E6E73]">{f.desc}</p>
              </div>
              <p className="mt-5 text-xs font-semibold text-[#0066FF]">{f.footer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
