"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SmartAutoSort from "@/components/SmartAutoSort";
import TextTransformer from "@/components/TextTransformer";
import Ecosystem from "@/components/Ecosystem";
import BentoFeatures from "@/components/BentoFeatures";
import ComparisonTable from "@/components/ComparisonTable";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ShortcutsModal from "@/components/ShortcutsModal";
import AmbientCanvas from "@/components/AmbientCanvas";

const WORKFLOWS = [
  {
    id: "dev",
    label: "Developers",
    title: "Code, commands, and the pieces you reuse.",
    text: "Snippets, terminal commands, and JSON you have already formatted. Keep them in a pinboard and find them by source app or date.",
    points: ["JSON prettify and minify", "Base64 encode and decode", "Paste Stack for Mac"],
  },
  {
    id: "design",
    label: "Designers",
    title: "Colours, links, and references in one place.",
    text: "Hex values copied from Figma, component names, and asset links. Pinboards keep each project separate.",
    points: ["Colour values auto-sorted", "Links with tracking removed", "Pinboards per project"],
  },
  {
    id: "marketing",
    label: "Marketers",
    title: "Clean links and copy you can reuse.",
    text: "Strip tracking parameters from a link before you share it. Keep approved copy and campaign notes where you can find them again.",
    points: ["Tracking removed from links", "Approved copy pinned", "History searchable by date"],
  },
  {
    id: "teams",
    label: "Agencies",
    title: "Project notes and handover details.",
    text: "References, links, and reusable copy for each client. Export history as JSON on Mac, and hide the clipboard during presentations.",
    points: ["JSON export on Mac", "Screen Share Hide planned", "30-day trash recovery"],
  },
];

function WorkflowTabs() {
  const [active, setActive] = useState("dev");
  const current = WORKFLOWS.find((w) => w.id === active)!;
  return (
    <section aria-label="Clipra for different workflows" className="py-20">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-medium text-[#0066FF] mb-3">Made for your workflow</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F1F5F9]">
            A clipboard for the way you work.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="Workflows">
          {WORKFLOWS.map((w) => (
            <button
              key={w.id}
              type="button"
              role="tab"
              aria-selected={active === w.id}
              onClick={() => setActive(w.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === w.id
                  ? "bg-[#0066FF] text-white"
                  : "bg-white/[0.06] text-[#CBD5E1] hover:bg-white/[0.10]"
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>
        <div className="glass-card max-w-2xl mx-auto p-8 sm:p-10 text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-[#F1F5F9] mb-3">
            {current.title}
          </h3>
          <p className="text-[#94A3B8] leading-relaxed mb-6">{current.text}</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {current.points.map((p) => (
              <li
                key={p}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.06] border border-white/10 text-[#CBD5E1]"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [shortcutsOpen, setShortcutsOpen] = useState(false);

  // ⌘K global shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setShortcutsOpen(true);
      }
      if (e.key === "Escape") setShortcutsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Scroll-reveal observer (fade only)
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-on-scroll");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <a
        className="fixed top-[-100px] left-4 z-[300] px-5 py-3 bg-[#0B0D14]/90 backdrop-blur-xl border border-white/10 rounded-lg focus:top-3 text-[#F1F5F9] text-sm font-medium transition-all"
        href="#main"
      >
        Skip to content
      </a>

      <AmbientCanvas />
      <Navbar onOpenShortcuts={() => setShortcutsOpen(true)} />

      <main id="main" className="relative z-10">
        <Hero />
        <SmartAutoSort />
        <TextTransformer />
        <Ecosystem />
        <WorkflowTabs />
        <BentoFeatures />
        <ComparisonTable />
        <Pricing />
        <FAQ />
        <section className="py-16">
          <div className="max-w-[1024px] mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-4">
            <a
              className="inline-flex items-center px-6 py-3 text-[15px] font-medium text-white bg-[#0066FF] hover:bg-[#2E82FF] rounded-full transition-colors"
              href="/features"
            >
              Explore all features
            </a>
            <a
              className="inline-flex items-center px-6 py-3 text-[15px] font-medium text-[#0066FF] bg-white/[0.06] hover:bg-white/[0.10] rounded-full transition-colors"
              href="/pricing"
            >
              See planned pricing
            </a>
            <a
              className="inline-flex items-center px-6 py-3 text-[15px] font-medium text-[#0066FF] bg-white/[0.06] hover:bg-white/[0.10] rounded-full transition-colors"
              href="/use-cases"
            >
              See use cases
            </a>
          </div>
        </section>
        <FinalCTA />
      </main>

      <Footer onOpenShortcuts={() => setShortcutsOpen(true)} />
      <ShortcutsModal open={shortcutsOpen} onClose={() => setShortcutsOpen(false)} />
    </>
  );
}
