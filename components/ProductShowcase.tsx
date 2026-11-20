"use client";

import { useState } from "react";
import ClipboardSearch from "@/components/ClipboardSearch";
import Everywhere from "@/components/Everywhere";

export default function ProductShowcase() {
  const [view, setView] = useState<"search" | "devices">("search");
  return (
    <div className="product-showcase">
      <div className="showcase-selector" aria-label="Choose a product preview">
        <button type="button" aria-pressed={view === "search"} onClick={() => setView("search")}>Find what you copied</button>
        <button type="button" aria-pressed={view === "devices"} onClick={() => setView("devices")}>Across your devices</button>
      </div>
      <div hidden={view !== "search"}><ClipboardSearch /></div>
      <div hidden={view !== "devices"}><Everywhere /></div>
    </div>
  );
}
