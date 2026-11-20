/*
  Group 6 of /features: the Mac menu bar.
  A horizontal shelf of clips (the menu-bar strip, triggered by ⌘⇧V),
  then four plain rows for Paste Stack, Quick Paste, Screen Share Hide
  and JSON export.
*/

const SHELF = [
  { label: "Code", text: "const dedupe = ...", app: "VS Code" },
  { label: "Colour", text: "#0066FF", app: "Figma" },
  { label: "Link", text: "linear.app/projects", app: "Safari" },
  { label: "Note", text: "Review macOS build", app: "Slack" },
  { label: "Code", text: "npm run build", app: "Terminal" },
];

const ROWS = [
  {
    title: "Paste Stack",
    text: "Copy multiple items in sequence, then paste them in exact order one by one.",
    keys: "⌘C ⌘C ⌘C, then ⌘V",
  },
  {
    title: "Quick Paste",
    text: "Jump straight to one of your last nine copies without opening the shelf.",
    keys: "⌘1 – ⌘9",
  },
  {
    title: "Screen Share Hide",
    text: "Keep the clipboard panel out of view while you present or record.",
    keys: "Planned for Mac",
  },
  {
    title: "JSON export and import",
    text: "Back up your history as JSON on Mac, for corporate backup or moving to a new machine.",
    keys: "Planned for Mac",
  },
];

export default function MacShelf() {
  return (
    <section className="section bg-white" aria-label="Clipra on Mac">
      <div className="wrap">
        <div className="max-w-3xl">
          <p className="kicker">Mac menu bar</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
            Always there, never in the way.
          </h2>
          <p className="lede mt-5">
            Clipra lives in the menu bar. Press <kbd className="kbd">⌘⇧V</kbd> and the shelf
            appears at the bottom of your screen, with your latest copies ready to paste.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-black/[0.08] bg-[#F5F5F7] p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between text-xs text-[#6E6E73] mb-4 px-1">
            <span className="font-medium text-[#1D1D1F]">Clipra shelf</span>
            <span className="font-mono">⌘⇧V</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {SHELF.map((item) => (
              <div key={item.text} className="rounded-2xl bg-white border border-black/[0.07] p-4 min-h-[110px] flex flex-col">
                <span className="text-[11px] font-medium text-[#0066FF]">{item.label}</span>
                <p className="text-[13px] font-medium text-[#1D1D1F] mt-2 break-all">{item.text}</p>
                <span className="text-[11px] text-[#6E6E73] mt-auto pt-2">{item.app}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 mt-14">
          {ROWS.map((row) => (
            <div key={row.title} className="border-t border-black/[0.08] pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-[#1D1D1F]">{row.title}</h3>
                <span className="text-xs font-mono text-[#6E6E73] flex-shrink-0">{row.keys}</span>
              </div>
              <p className="text-[15px] leading-relaxed text-[#6E6E73] mt-2">{row.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
