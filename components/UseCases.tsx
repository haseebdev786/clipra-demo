"use client";

import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const CASES = [
  {
    key: "dev",
    label: "For Developers",
    eyebrow: "DEVELOPER WORKFLOW",
    title: "Syntax-aware code snippets & terminal tokens.",
    desc: "Never re-type SSH keys, Docker commands, or regex patterns. Clipra auto-routes Swift, JS, Python, and SQL snippets to your Dev pinboard. Prettify nested JSON with a single keystroke.",
    badges: [
      { label: "⚡ JSON Prettify/Minify", color: "text-[#00E5BE]" },
      { label: "🔒 Base64 Decode", color: "text-[#2E82FF]" },
      { label: "⌨️ Paste Stack ⌘⌥V", color: "text-[#10F296]" },
    ],
    snippet: "docker run -d -p 8080:80 --name clipra-api swift:6.0",
    footer: "✓ Auto-tagged: Shell Command • Stripped linebreaks",
  },
  {
    key: "design",
    label: "For UI/UX Designers",
    eyebrow: "DESIGNER WORKFLOW",
    title: "Color tokens, component names & asset links.",
    desc: "Copy hex codes from Figma and watch them land instantly in your Brand Colors board. Paste multiple gradient values in sequence using Paste Stack without leaving your design tool.",
    badges: [
      { label: "🎨 Auto Hex Swatches", color: "text-[#00E5BE]" },
      { label: "🖌️ Figma Asset Routing", color: "text-[#2E82FF]" },
      { label: "✦ Paste Stack Workflow", color: "text-[#10F296]" },
    ],
    snippet: "#0066FF — #00E5BE — #10F296",
    footer: "✓ Auto-sorted to: Brand Colors Pinboard",
  },
  {
    key: "market",
    label: "For Growth & Marketers",
    eyebrow: "GROWTH WORKFLOW",
    title: "Clean UTM links & campaign copy at lightning speed.",
    desc: "Strip tracking noise from every link before pasting into your CMS. Build a pinboard of approved ad copy. Encode campaign parameters to Base64 for email clients that break URLs.",
    badges: [
      { label: "🧹 Auto Strip UTMs", color: "text-[#00E5BE]" },
      { label: "📊 Campaign Copy Board", color: "text-[#2E82FF]" },
      { label: "🔗 Clean URL History", color: "text-[#10F296]" },
    ],
    snippet: "https://product.app/launch (cleaned from 5 tracking params)",
    footer: "✓ Auto-stripped: utm_source, utm_campaign, fbclid, gclid",
  },
  {
    key: "agency",
    label: "For Agency & Teams",
    eyebrow: "AGENCY WORKFLOW",
    title: "Client references, project notes & reusable copy.",
    desc: "Keep project references and reusable copy organized. JSON backups and Screen Share Hide are planned for the Mac app.",
    badges: [
      { label: "🔐 Biometric Pinboards", color: "text-[#00E5BE]" },
      { label: "📦 JSON Backup Export", color: "text-[#2E82FF]" },
      { label: "🙈 Screen Share Hide", color: "text-[#10F296]" },
    ],
    snippet: "Project handoff: links, notes and next steps",
    footer: "✓ Protected: Biometric lock active • Screen Share: Hidden",
  },
];

export default function UseCases() {
  return (
    <section id="usecases" className="relative py-24 z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00E5BE] mb-4">Made for your workflow</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">A little more flow, <span className="text-[#75e7d5]">whatever you do.</span></h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">Explore how Clipra is being designed for the things you copy every day.</p>
        </div>
        <ScrollStack useWindowScroll smoothScroll={false} itemDistance={160} itemStackDistance={16} stackPosition="120px" holdDistance={200} className="workflow-stack">
          {CASES.map((uc, index) => (
            <ScrollStackItem key={uc.key} itemClassName="workflow-stack-item" style={undefined}><article className="workflow-card">
              <div className="workflow-copy">
                <div className="workflow-label">{uc.label}</div>
                <h3>{uc.title}</h3>
                <p>{uc.desc}</p>
                <div className="workflow-badges">{uc.badges.map((badge) => <span key={badge.label} className={badge.color}>{badge.label}</span>)}</div>
              </div>
              <div className="workflow-preview" aria-label={`${uc.label} example`}>
                <div className="workflow-preview-bar"><span>{["Code snippet", "Color palette", "Campaign link", "Saved note"][index]}</span><span>Clipra</span></div>
                <div className="workflow-preview-content">{uc.snippet}</div>
                <div className="workflow-preview-footer">{uc.footer}</div>
              </div>
            </article></ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}

