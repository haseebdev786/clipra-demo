"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

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
    <section id="faq" className="section band-mist">
      <div className="wrap">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal-on-scroll">
          <p className="kicker">Clear answers</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
            Frequently asked questions
          </h2>
          <p className="lede mx-auto mt-5">
            Everything you need to know about Clipra&rsquo;s permissions, privacy, and architecture.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3 reveal-on-scroll">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className="glass-2 overflow-hidden"
            >
              <button
                type="button"
                className="w-full min-h-[44px] text-left px-6 py-5 flex items-center justify-between gap-4 text-base font-semibold text-[#1D1D1F]"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <Plus
                  className={`w-5 h-5 text-[#0066FF] flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {open === i && (
                <p className="px-6 pb-5 text-[15px] text-[#6E6E73] leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
