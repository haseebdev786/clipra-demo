import { Cloud, Keyboard, ShieldCheck, Wifi, BatteryFull, Signal, Search, Plus, MoreHorizontal } from "lucide-react";

const benefits = [
  { icon: Keyboard, title: "Your clipboard, while you type", description: "The planned iPhone keyboard brings saved clips into the apps where you work." },
  { icon: Cloud, title: "Your devices, in sync", description: "Private iCloud sync is planned to keep your history close across Mac, iPhone and iPad." },
  { icon: ShieldCheck, title: "Private by design", description: "The planned design stores clipboard history locally and in your private iCloud database." },
];
const clips = [
  { type: "Link", source: "Safari", title: "Project inspiration", detail: "linear.app/projects", color: "link" },
  { type: "Color", source: "Figma", title: "Primary blue", detail: "#0071E3", color: "color" },
  { type: "Code", source: "VS Code", title: "Quick snippet", detail: "const dedupe = ...", color: "code" },
  { type: "Note", source: "Notes", title: "Meeting notes", detail: "Ideas for the next launch", color: "note" },
];

export default function Ecosystem() {
  return <section className="ecosystem-section"><div className="ecosystem-layout">
    <div className="ecosystem-copy"><p className="ecosystem-kicker">Made for your devices</p><h2>Your clipboard goes<br /><span>where you do.</span></h2><p className="ecosystem-intro">From your Mac to your iPhone and iPad, Clipra is being designed to keep the things you copy close at hand.</p><div className="ecosystem-benefits">{benefits.map(({ icon: Icon, title, description }) => <div className="ecosystem-benefit" key={title}><span className="ecosystem-benefit-icon"><Icon size={20} aria-hidden="true" /></span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div></div>
    <div className="ecosystem-visual"><div className="eco-halo" /><div className="eco-phone" role="img" aria-label="Concept preview of Clipra clipboard history on iPhone"><div className="eco-phone-screen"><div className="eco-status"><strong>9:41</strong><div className="eco-island" /><span><Signal size={11} /><Wifi size={11} /><BatteryFull size={14} /></span></div><div className="eco-app-head"><div><small>YOUR CLIPBOARD</small><strong>All clips</strong></div><span className="eco-more"><MoreHorizontal size={17} /></span></div><div className="eco-search"><Search size={14} /> Search your clips</div><div className="eco-chips"><span>All</span><span>Links</span><span>Notes</span><span>Colors</span></div><div className="eco-grid">{clips.map((clip) => <div className={`eco-clip eco-${clip.color}`} key={clip.title}><div className="eco-clip-top"><span>{clip.type}</span><span>{clip.source}</span></div><div className="eco-clip-body"><div className="eco-clip-art">{clip.color === "color" ? "#0071E3" : clip.color === "link" ? "↗" : clip.color === "code" ? "{ }" : "“ ”"}</div><strong>{clip.title}</strong><small>{clip.detail}</small></div></div>)}</div><div className="eco-bottom"><span><Search size={15} /></span><span className="eco-selected">▣ &nbsp; Clipboard</span><span><Plus size={16} /></span></div><div className="eco-home" /></div></div><span className="eco-concept-label">iPhone concept preview</span></div>
  </div></section>;
}
