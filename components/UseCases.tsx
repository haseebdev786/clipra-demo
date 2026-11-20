import { Bookmark, Layers, HardDrive, Search } from "lucide-react";

/*
  Use Cases — Part 1: For Everyone.
  Four benefits, each with a small live fragment. Copy maps only to brief features:
  pinboards, unlimited history (Pro), Power Search.
*/

const BENEFITS = [
  {
    icon: Bookmark,
    title: "Save your favourite sites, photos, and messages",
    text: "Keep the links, images, and messages you come back to, instead of hunting through chats and tabs for them again.",
    fragment: (
      <div className="mt-4 rounded-xl border border-black/[0.07] bg-[#F5F5F7] p-4">
        <p className="text-xs font-medium text-[#0066FF]">Pinned · Favourites</p>
        <p className="text-sm font-medium text-[#1D1D1F] mt-1.5">Photos from Lisbon — album link</p>
        <p className="text-xs text-[#6E6E73] mt-1">Saved from Messages</p>
      </div>
    ),
  },
  {
    icon: Layers,
    title: "Stay organised with collections",
    text: "Pinboards group your clips by project, client, or topic, so the piece you need is never buried under the last fifty copies.",
    fragment: (
      <div className="mt-4 rounded-xl border border-black/[0.07] bg-[#F5F5F7] p-4">
        {["Holiday planning", "Gift ideas", "Flat search"].map((b, i) => (
          <p key={b} className="flex items-center justify-between text-sm text-[#1D1D1F] py-1.5 border-b border-black/[0.06] last:border-b-0">
            <span>{b}</span>
            <span className="text-xs text-[#6E6E73]">{[12, 8, 21][i]} clips</span>
          </p>
        ))}
      </div>
    ),
  },
  {
    icon: HardDrive,
    title: "Limitless storage for your clipboard",
    text: "Pro keeps your full history, with no limit. An hour ago or a year ago, the copy is still there when you need it.",
    fragment: (
      <div className="mt-4 rounded-xl border border-black/[0.07] bg-[#F5F5F7] p-4">
        <p className="text-sm text-[#1D1D1F]">
          <span className="font-semibold">2,418</span> <span className="text-[#6E6E73]">items kept</span>
        </p>
        <p className="text-xs text-[#6E6E73] mt-1">Free keeps your last 50 items.</p>
      </div>
    ),
  },
  {
    icon: Search,
    title: "Quick search in an instant",
    text: "Find a copy again by type, source app, or date — no scrolling through everything you copied this week.",
    fragment: (
      <div className="mt-4 rounded-xl border border-black/[0.07] bg-[#F5F5F7] p-4">
        <p className="text-sm font-mono text-[#1D1D1F]">⌘F · type: link app: Safari</p>
        <p className="text-xs text-[#6E6E73] mt-1.5">3 results · sorted by date</p>
      </div>
    ),
  },
];

export default function UseCases() {
  return (
    <section id="usecases" className="section band-mist" aria-label="Clipra for everyone">
      <div className="wrap">
        <div className="max-w-3xl mb-12">
          <p className="kicker">For everyone</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
            Do what you love. Do it faster with Clipra.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {BENEFITS.map((b) => (
            <article key={b.title} className="light-card p-7">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-[#0066FF]/10 text-[#0066FF] mb-4">
                <b.icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <h3 className="text-[17px] font-semibold text-[#1D1D1F]">{b.title}</h3>
              <p className="text-sm leading-relaxed text-[#6E6E73] mt-2">{b.text}</p>
              {b.fragment}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
