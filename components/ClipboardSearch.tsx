"use client";

import { useMemo, useState } from "react";
import { Code2, FileText, Link2, Palette, Search, X } from "lucide-react";

type Category = "All" | "Links" | "Notes" | "Colors" | "Code";
const items = [
  { category: "Links", title: "Project inspiration", detail: "Are.na · Design references", text: "design inspiration website project reference link url", time: "Just now", icon: Link2, style: "link" },
  { category: "Notes", title: "Ideas for the next launch", detail: "A few things to explore this week.", text: "meeting notes ideas launch work text", time: "12 min ago", icon: FileText, style: "note" },
  { category: "Colors", title: "Ocean teal", detail: "#00E5BE", text: "color teal blue green hex palette design figma", time: "Today", icon: Palette, style: "color" },
  { category: "Code", title: "Format a date", detail: "new Intl.DateTimeFormat('en-US')", text: "code snippet javascript developer date function", time: "Today", icon: Code2, style: "code" },
  { category: "Links", title: "Product roadmap", detail: "linear.app · Planning", text: "project roadmap planning product link url website", time: "Yesterday", icon: Link2, style: "link" },
  { category: "Notes", title: "Meeting follow-up", detail: "Share the brief and next steps.", text: "meeting work follow up notes brief task text", time: "Yesterday", icon: FileText, style: "note" },
] as const;
const categories: Category[] = ["All", "Links", "Notes", "Colors", "Code"];

export default function ClipboardSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const results = useMemo(() => {
    const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    return items.filter((item) => {
      const haystack = `${item.title} ${item.detail} ${item.category} ${item.text}`.toLowerCase();
      return (category === "All" || item.category === category) && words.every((word) => haystack.includes(word));
    });
  }, [query, category]);

  return (
    <section className="search-feature" aria-labelledby="find-heading">
      <div className="search-feature-inner">
        <div className="search-feature-intro">
          <span className="search-feature-eyebrow">Your clipboard, easy to find</span>
          <h2 id="find-heading">Find that thing<br />you copied.</h2>
          <p>That link, color, note or snippet is never far away. Try searching the sample clipboard below.</p>
        </div>
        <div className="search-demo">
          <div className="search-demo-top"><div><span className="search-demo-dot" /> Clipboard search <span className="search-demo-label">Interactive demo</span></div><span className="search-demo-count" aria-live="polite">{results.length} {results.length === 1 ? "item" : "items"}</span></div>
          <div className="search-demo-controls">
            <label className="search-demo-input"><Search size={19} aria-hidden="true" /><span className="sr-only">Search sample clipboard items</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search links, notes, colors..." />{query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><X size={17} /></button>}</label>
            <div className="search-demo-filters" aria-label="Filter by type">{categories.map((name) => <button key={name} type="button" aria-pressed={category === name} onClick={() => setCategory(name)}>{name}</button>)}</div>
          </div>
          <div className="search-demo-results" aria-live="polite">
            {results.length ? results.map((item) => { const Icon = item.icon; return <article className={`search-result search-result-${item.style}`} key={item.title}><div className="search-result-top"><span><Icon size={15} aria-hidden="true" /> {item.category}</span><span>{item.time}</span></div><div className="search-result-content"><div className="search-result-art" aria-hidden="true">{item.style === "color" ? "#00E5BE" : item.style === "code" ? "{  }" : item.style === "link" ? "↗" : "“ ”"}</div><h3>{item.title}</h3><p>{item.detail}</p></div></article>; }) : <div className="search-demo-empty"><Search size={22} aria-hidden="true" /><strong>No matching items</strong><span>Try another word or choose a different type.</span><button type="button" onClick={() => { setQuery(""); setCategory("All"); }}>Show all items</button></div>}
          </div>
          <div className="search-demo-hint">Try <button type="button" onClick={() => { setCategory("All"); setQuery("design"); }}>design</button>, <button type="button" onClick={() => { setCategory("All"); setQuery("meeting"); }}>meeting</button>, or <button type="button" onClick={() => { setCategory("All"); setQuery("#00E5BE"); }}>#00E5BE</button></div>
        </div>
      </div>
    </section>
  );
}
