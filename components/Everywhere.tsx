import Link from "next/link";

const clips = [
  { type: "Link", title: "Weekend inspiration", detail: "A place worth saving", color: "blue" },
  { type: "Note", title: "A little idea", detail: "Keep the good things close.", color: "sand" },
  { type: "Color", title: "Ocean teal", detail: "#00E5BE", color: "teal" },
  { type: "Code", title: "Your next project", detail: "const ideas = []", color: "slate" },
];

function ClipGrid({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "everywhere-clips compact" : "everywhere-clips"}>{clips.map((clip) => <div className={`everywhere-clip ${clip.color}`} key={clip.title}><span>{clip.type}</span><strong>{clip.title}</strong><small>{clip.detail}</small></div>)}</div>;
}

export default function Everywhere() {
  return <section className="everywhere-section" aria-labelledby="everywhere-heading">
    <div className="everywhere-wrap">
      <div className="everywhere-heading"><p>Made for your Apple devices</p><h2 id="everywhere-heading">Your ideas, within reach.</h2></div>
      <div className="everywhere-panel">
        <div className="everywhere-art" aria-label="Concept previews of Clipra on Mac, iPad and iPhone" role="img">
          <div className="everywhere-mac"><div className="everywhere-mac-screen"><div className="everywhere-menu"><span>● &nbsp; Clipra &nbsp; File &nbsp; Edit</span><span>9:41 AM</span></div><div className="everywhere-mac-title">A little space<br />for everything.</div><div className="everywhere-mac-shelf"><div className="everywhere-shelf-title">◉ &nbsp; Clipboard <span>Links &nbsp; Notes &nbsp; Colors</span></div><ClipGrid /></div></div><div className="everywhere-mac-base" /></div>
          <div className="everywhere-ipad"><div className="everywhere-device-head">9:41 <span>● ●</span></div><div className="everywhere-device-title">Clipboard <span>•••</span></div><ClipGrid compact /></div>
          <div className="everywhere-phone"><div className="everywhere-phone-notch" /><div className="everywhere-device-head">9:41 <span>● ●</span></div><div className="everywhere-device-title">Clipboard</div><ClipGrid compact /></div>
        </div>
        <div className="everywhere-copy"><h3>At home on every device.</h3><p>Clipra is being designed for Mac, iPhone and iPad, with private iCloud sync to keep the things you save close wherever you work.</p><Link href="/features">Explore the planned features <span aria-hidden="true">↗</span></Link></div>
      </div>
    </div>
  </section>;
}
