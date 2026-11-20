"use client";

import { useState, useEffect, useRef } from "react";
import AmbientCanvas from "@/components/AmbientCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Stats from "@/components/Stats";
import SmartAutoSort from "@/components/SmartAutoSort";
import TextTransformer from "@/components/TextTransformer";
import CircularSplitRoll from "@/components/ui/circular-split-roll";
import Ecosystem from "@/components/Ecosystem";
import BentoFeatures from "@/components/BentoFeatures";
import ComparisonTable from "@/components/ComparisonTable";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ShortcutsModal from "@/components/ShortcutsModal";

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

  // Scroll-reveal observer
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

  // Card mouse-spotlight
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(
      ".glass-card, .price-card, .bento-card, .usecase-display-box"
    );
    const handlers = Array.from(cards).map((card) => {
      const fn = (e: Event) => {
        const me = e as MouseEvent;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${me.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${me.clientY - rect.top}px`);
      };
      card.addEventListener("mousemove", fn);
      return { card, fn };
    });
    return () => handlers.forEach(({ card, fn }) => card.removeEventListener("mousemove", fn));
  }, []);

  return (
    <>
      <a
        className="fixed top-[-100px] left-4 z-[300] px-5 py-3 bg-[#0E1526] border border-[#00E5BE] rounded-lg focus:top-3 focus:clip-auto text-white text-sm font-semibold transition-all"
        href="#main"
      >
        Skip to content
      </a>

      <AmbientCanvas />
      <Navbar onOpenShortcuts={() => setShortcutsOpen(true)} />

      <main id="main">
        <Hero />
        <ProductShowcase />
        <SmartAutoSort />
        <TextTransformer />
        <section aria-label="Clipra for different workflows">
          <div className="text-center px-6 pt-16"><p className="text-sm font-bold text-[#75e7d5] mb-3">Made for your workflow</p><h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">A clipboard for the way you work.</h2></div>
          <CircularSplitRoll items={[{id:"dev",title:"For developers",image:"/workflows/developers.svg"},{id:"design",title:"For designers",image:"/workflows/designers.svg"},{id:"marketing",title:"For marketers",image:"/workflows/marketers.svg"},{id:"teams",title:"For agencies",image:"/workflows/agencies.svg"}]} background="#080f1b" titleColor="#edf7fa" radius={270} cardSize={240} sectionHeight={40} columnOffsetPx={260} focusPhase={0} className="workflow-roll" />
        </section>
        <Ecosystem />
        <section className="relative z-10 py-20 text-center px-6"><p className="text-slate-400 mb-5">Explore Clipra in more detail</p><div className="flex flex-wrap justify-center gap-4"><a className="btn btn-glass" href="/features">Explore all features</a><a className="btn btn-glass" href="/pricing">See planned pricing</a><a className="btn btn-glass" href="/use-cases">See use cases</a></div></section>
        <FinalCTA />
      </main>

      <Footer onOpenShortcuts={() => setShortcutsOpen(true)} />
      <ShortcutsModal
        open={shortcutsOpen}
        onClose={() => setShortcutsOpen(false)}
      />
    </>
  );
}
