"use client";

import { useState } from "react";

const FAQS = [
  { q: "When will Clipra be available?", a: "Clipra is currently in development. The roadmap shares what is planned for the first release and what may come later." },
  { q: "How will Clipra keep my clipboard private?", a: "The planned design stores history locally and uses your private iCloud database for sync. Clipboard content is not intended to be stored on AR Swift servers." },
  { q: "How will clipboard history work on iPhone?", a: "The planned keyboard extension will let you access saved history while typing, and a Share Sheet extension will let you save items. iOS does not allow background clipboard capture." },
  { q: "Can I export my clipboard history?", a: "JSON export and import are planned for the Mac app." },
  { q: "Are these prices final?", a: "The plans and prices shown are proposed for launch and may change before release." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 bg-[#080C16]/70 z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal-on-scroll">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00E5BE] mb-4">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Everything you need to know about Clipra&apos;s permissions, privacy, and architecture.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3.5 reveal-on-scroll stagger-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`bg-[#0E1526]/60 border rounded-xl overflow-hidden transition-all duration-300 ${
                open === i ? "border-white/18" : "border-white/8 hover:border-white/18"
              }`}
            >
              <button
                type="button"
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 text-base font-bold text-white"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span
                  className={`text-xl text-[#00E5BE] flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-45 text-[#10F296]" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
