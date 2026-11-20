"use client";

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    iconClass: "icon-blue",
    title: "Paste Stack",
    desc: (
      <>
        Copy multiple items in sequence with <kbd className="kbd">⌘C</kbd> <kbd className="kbd">⌘C</kbd>{" "}
        <kbd className="kbd">⌘C</kbd>, then paste them in exact order one by one with{" "}
        <kbd className="kbd">⌘V</kbd>. Zero context switching.
      </>
    ),
    footer: "Available on Mac • Sequential Queue",
    footerColor: "text-[#2E82FF]",
    stagger: "stagger-1",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    iconClass: "icon-teal",
    title: "Offline Export & Import",
    desc: "The #1 request on Paste's public board with 161 votes. Export your entire clipboard history to structured JSON for corporate backup, compliance, or local migration.",
    footer: "Enterprise-Ready • 100% Offline",
    footerColor: "text-[#00E5BE]",
    stagger: "stagger-2",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
    iconClass: "icon-green",
    title: "Screen Share Stealth",
    desc: "Present with confidence. Clipra automatically detects screen sharing across Zoom, Google Meet, and Teams to hide sensitive snippets and credentials.",
    footer: "Privacy Protection • Zero Leaks",
    footerColor: "text-[#10F296]",
    stagger: "stagger-3",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    iconClass: "icon-teal",
    title: "OCR Power Search",
    desc: "Search text located inside screenshots, filter by source app (Figma, Terminal, Safari), and find copies by exact timestamp or regex query.",
    footer: "Instant Query Engine",
    footerColor: "text-[#00E5BE]",
    stagger: "stagger-4",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    iconClass: "icon-blue",
    title: "Biometric Protection",
    desc: "Lock your sensitive pinboards and complete history behind Touch ID on Mac and Face ID on iPhone & iPad.",
    footer: "Hardware-Level Secure Enclave",
    footerColor: "text-[#2E82FF]",
    stagger: "stagger-5",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    iconClass: "icon-green",
    title: "30-Day Trash Recovery",
    desc: "Accidentally removed an important API token or contract address? Clipra keeps deleted items safe for 30 days before permanent purging.",
    footer: "Undo Protection Built-in",
    footerColor: "text-[#10F296]",
    stagger: "stagger-6",
  },
];

export default function BentoFeatures() {
  return (
    <section id="features" className="relative py-24 z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00E5BE] mb-4">
            v1.0 Launch Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            Everything power users need.{" "}
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00E5BE] to-[#10F296] bg-clip-text text-transparent">
              Nothing they don&apos;t.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Crafted specifically for developers, designers, and high-velocity teams who copy hundreds
            of times each day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className={`glass-card bento-card p-7 flex flex-col justify-between reveal-on-scroll ${f.stagger}`}>
              <div>
                <div className={`bento-icon ${f.iconClass}`}>{f.icon}</div>
                <h3 className="bento-title">{f.title}</h3>
                <p className="bento-desc">{f.desc}</p>
              </div>
              <div className={`mt-5 text-xs font-semibold ${f.footerColor}`}>{f.footer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
