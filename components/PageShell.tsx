"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShortcutsModal from "@/components/ShortcutsModal";

export default function PageShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") { event.preventDefault(); setOpen(true); }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  return <>
    <a href="#main" className="fixed top-[-100px] left-4 z-[300] px-5 py-3 bg-white border border-black/10 rounded-lg focus:top-3 text-[#1D1D1F] shadow-lg">Skip to content</a>
    <Navbar onOpenShortcuts={() => setOpen(true)} />
    <main id="main" className="inner-page">{children}</main>
    <Footer onOpenShortcuts={() => setOpen(true)} />
    <ShortcutsModal open={open} onClose={() => setOpen(false)} />
  </>;
}
