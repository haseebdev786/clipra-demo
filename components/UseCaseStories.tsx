import { Braces, ClipboardList, Code2, FileJson, FolderHeart, Link2, ListFilter, LockKeyhole, Palette, Pin, Search, ShieldCheck, TextCursorInput } from "lucide-react";

const groups = [
  {
    id: "developers", label: "For developers", title: "The snippets you need, right where you work.",
    intro: "From a useful command to a response you are debugging, Clipra is being designed to make the pieces you copy easier to find and reuse.",
    icon: Code2, panelTitle: "Code snippets", panelSubtitle: "A collection for the things you reach for often", accent: "blue",
    items: [{ label: "JavaScript", text: "const unique = [...new Set(items)];" }, { label: "Terminal", text: "npm run build" }, { label: "JSON", text: '{ "status": "ready" }' }],
    benefits: [
      { icon: Braces, title: "Keep useful snippets together", text: "Organize frequently used commands and code in pinboards so they are easier to return to." },
      { icon: FileJson, title: "Make JSON easier to read", text: "The planned Text Transformer includes tools to format and minify JSON on your device." },
      { icon: ListFilter, title: "Find the right copy", text: "Search and filter your planned clipboard history by content type, source app or date." },
      { icon: ClipboardList, title: "Paste in sequence", text: "Paste Stack is planned for Mac, helping you work through multiple copied items in order." },
    ],
  },
  {
    id: "designers", label: "For designers", title: "Keep your creative building blocks close.",
    intro: "Colors, references and the small details that make a design feel consistent deserve a place you can find again.",
    icon: Palette, panelTitle: "Brand colors", panelSubtitle: "A little collection of visual details", accent: "teal",
    items: [{ label: "Primary", text: "#0071E3" }, { label: "Accent", text: "#0071E3" }, { label: "Canvas", text: "#F5F5F7" }],
    benefits: [
      { icon: Palette, title: "Collect your colors", text: "Keep copied hex and RGB values close as you move between design files and tools." },
      { icon: FolderHeart, title: "Organize by project", text: "Planned pinboards give your references, links and reusable details a home of their own." },
      { icon: ListFilter, title: "Let rules do some sorting", text: "Smart Auto-Sort is planned to recognize color values and route them to a pinboard." },
      { icon: Search, title: "Pick up where you left off", text: "Search your history for a reference or value instead of hunting through old files." },
    ],
  },
  {
    id: "marketers", label: "For content and marketing", title: "Make room for the words that matter.",
    intro: "Save the links, draft copy and campaign details you return to throughout the day, then find the right version when you need it.",
    icon: TextCursorInput, panelTitle: "Campaign essentials", panelSubtitle: "Links and copy ready for another look", accent: "green",
    items: [{ label: "Link", text: "clipra.app/launch" }, { label: "Copy", text: "A little more room to create." }, { label: "Note", text: "Review launch email on Friday" }],
    benefits: [
      { icon: Link2, title: "Clean up a link", text: "A planned transformation can remove common tracking parameters before you share a URL." },
      { icon: Pin, title: "Keep approved copy handy", text: "Pin reusable descriptions, replies and campaign snippets for your next draft." },
      { icon: TextCursorInput, title: "Change text in a moment", text: "Planned text tools include changing case and removing formatting without leaving your workflow." },
      { icon: LockKeyhole, title: "Keep your work yours", text: "Clipboard content is planned to stay on your device and in your private iCloud database." },
    ],
  },
];

export default function UseCaseStories() {
  return <div className="stories-wrap">
    <section className="stories-intro"><p>For the everyday work</p><h2>All those little things add up.</h2><span>Clipra is being built for the links you find, the words you write and the ideas you want to keep.</span><div className="stories-intro-grid"><div><Search size={21} /><strong>Find it again</strong><span>Search your planned clipboard history for a useful copy.</span></div><div><Pin size={21} /><strong>Keep it close</strong><span>Save things you reuse in organized pinboards.</span></div><div><ShieldCheck size={21} /><strong>Make it private</strong><span>Designed around local storage and private iCloud sync.</span></div></div></section>
    {groups.map(({ id, label, title, intro, icon: Icon, panelTitle, panelSubtitle, accent, items, benefits }) => <section key={id} id={id} className={`story-section story-${accent}`}><div className="story-container"><div className="story-heading"><p>{label}</p><h2>{title}</h2><span>{intro}</span></div><div className="story-visual"><div className="story-window"><div className="story-window-top"><span className="story-window-dots"><i /><i /><i /></span><span>Clipra <span className="story-window-sub">/ {panelTitle}</span></span><span>•••</span></div><div className="story-window-content"><div className="story-sidebar"><div className="story-sidebar-title">Your pinboards</div><div className="story-sidebar-active"><Icon size={15} /> {panelTitle}</div><div>All history</div><div>Favorites</div></div><div className="story-board"><div className="story-board-title"><div><strong>{panelTitle}</strong><small>{panelSubtitle}</small></div><span>⌕</span></div><div className="story-clip-list">{items.map((item, i) => <div className="story-clip" key={item.label}><div><span>{item.label}</span><small>{i === 0 ? "Just now" : "Today"}</small></div><p>{item.text}</p></div>)}</div></div></div></div><p className="story-concept">Clipra concept preview</p></div><div className="story-benefits">{benefits.map(({ icon: BenefitIcon, title: benefitTitle, text }) => <article key={benefitTitle}><BenefitIcon size={22} aria-hidden="true" /><h3>{benefitTitle}</h3><p>{text}</p></article>)}</div></div></section>)}
    <section className="stories-note"><div><p>For independent work and agencies</p><h2>More space for the work in front of you.</h2><span>Organize project references, back up history as JSON on Mac, and keep your clipboard out of sight during presentations. These features are planned for Clipra&apos;s first release.</span></div><a href="/updates">Explore the roadmap <span aria-hidden="true">↗</span></a></section>
  </div>;
}
