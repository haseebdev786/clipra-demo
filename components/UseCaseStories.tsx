import { Braces, Zap, ListOrdered, Palette, Presentation, Compass, FolderHeart, Trash2, Mail, Layers, Contact } from "lucide-react";

/*
  Use Cases — Parts 2–4: Developers (dark band), Designers, Content & Marketing.
  Each has an app-frame visual and four cards, all mapped to brief features.
*/

function CodeFrame() {
  return (
    <div className="rounded-2xl bg-[#0B0D14] border border-white/10 p-5 font-mono text-[13px] leading-relaxed text-[#F1F5F9]">
      <div className="flex justify-between text-[11px] text-[#94A3B8] mb-4">
        <span>Code Snippets pinboard</span>
        <span>⌘F</span>
      </div>
      <p><span className="text-[#2E82FF]">const</span> dedupe = (arr) =&gt; [...<span className="text-[#2E82FF]">new Set</span>(arr)];</p>
      <p className="text-[#94A3B8]">{"// auto-tagged: JavaScript · VS Code"}</p>
      <p>npm run build <span className="text-[#94A3B8]"># Terminal · 2m ago</span></p>
      <p><span className="text-[#2E82FF]">{"{ \"status\":"}</span> <span className="text-[#00C4B4]">"ready"</span><span className="text-[#2E82FF]">{" }"}</span></p>
    </div>
  );
}

function ColourFrame() {
  return (
    <div className="rounded-2xl border border-black/[0.08] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between text-xs text-[#6E6E73] mb-4">
        <span className="font-medium text-[#1D1D1F]">Brand Colors pinboard</span>
        <span>⌘F</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["#0066FF", "#1D1D1F", "#00C4B4", "#F5F5F7"].map((c) => (
          <div key={c} className="rounded-xl overflow-hidden border border-black/[0.08]">
            <div className="h-16" style={{ background: c }} />
            <p className="text-[10px] font-mono text-center py-2 text-[#1D1D1F] bg-[#F5F5F7]">{c}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-[#6E6E73] mt-3">Copied from Figma · filed by Smart Auto-Sort</p>
    </div>
  );
}

function EmailFrame() {
  return (
    <div className="rounded-2xl border border-black/[0.08] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between text-xs text-[#6E6E73] mb-3">
        <span className="font-medium text-[#1D1D1F]">Email Templates pinboard</span>
        <span>⌘F</span>
      </div>
      <p className="text-xs text-[#6E6E73]">Subject: Launch update</p>
      <p className="text-sm text-[#1D1D1F] leading-relaxed mt-2">
        Hi everyone — the launch notes are ready. The clipboard that organises itself is coming to
        Mac, iPhone and iPad.
      </p>
      <p className="text-xs text-[#6E6E73] mt-3">Saved from Mail · tracking removed by Text Transformer</p>
    </div>
  );
}

const CARDS = [
  {
    icon: Braces,
    title: "Versatile code snippet collections",
    text: "Commands, JSON, and the pieces you reach for often — kept in pinboards, searchable by type, app, or date.",
  },
  {
    icon: Trash2,
    title: "No more accidental overwrites",
    text: "Unlimited history on Pro keeps every copy, and 30-day trash means a deleted item is recoverable.",
  },
  {
    icon: Zap,
    title: "Powerful automations via Shortcuts",
    text: "Smart Auto-Sort rules file copies into the right pinboard, and Text Transformer cleans them before you paste.",
  },
  {
    icon: ListOrdered,
    title: "Paste in a sequence",
    text: "Paste Stack is planned for Mac — copy several items, then paste them in exact order, one by one.",
  },
];

const DESIGN_CARDS = [
  {
    icon: Palette,
    title: "Colour schemes",
    text: "Hex and RGB values copied from Figma stay organised in a Brand Colors pinboard.",
  },
  {
    icon: Presentation,
    title: "Presentation references",
    text: "Links, images, and the notes behind your deck — saved where you can find them again.",
  },
  {
    icon: Compass,
    title: "Guides and system design",
    text: "Component names, spacing values, and system tokens kept beside the work that uses them.",
  },
  {
    icon: FolderHeart,
    title: "Resources and templates",
    text: "Reusable copy, asset links, and the details you reach for on every project.",
  },
];

const CONTENT_CARDS = [
  {
    icon: Trash2,
    title: "No more accidental deletions",
    text: "Every copy is saved in history, and deleted items stay in the trash for 30 days.",
  },
  {
    icon: Mail,
    title: "Email and social templates",
    text: "Replies, captions, and the drafts you reuse — pinned in an Email Templates pinboard.",
  },
  {
    icon: Layers,
    title: "Organise into pinboards",
    text: "Sort campaigns, clients, and topics into pinboards instead of re-typing the same copy.",
  },
  {
    icon: Contact,
    title: "Save contact info",
    text: "Names, numbers, and details you copy from emails and messages — kept where you can search for them.",
  },
];

export default function UseCaseStories() {
  return (
    <>
      {/* Developers — dark band */}
      <section className="section band-dark" aria-label="Clipra for developers">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="kicker">For developers</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                An assistant that knows your preferences and never loses a thing.
              </h2>
              <p className="mt-5 leading-relaxed" style={{ color: "#94A3B8" }}>
                Snippets, terminal commands, and JSON you have already formatted — filed by source
                app and ready to paste again.
              </p>
            </div>
            <CodeFrame />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-14">
            {CARDS.map((c) => (
              <article key={c.title} className="glass-card p-6">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-[#0066FF]/15 text-[#2E82FF] mb-4">
                  <c.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <h3 className="text-[15px] font-semibold text-white">{c.title}</h3>
                <p className="text-sm leading-relaxed mt-2" style={{ color: "#94A3B8" }}>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Designers */}
      <section className="section bg-white" aria-label="Clipra for designers">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ColourFrame />
            <div>
              <p className="kicker">For designers</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
                A helping hand within your daily design ritual.
              </h2>
              <p className="lede mt-5">
                Colours, references, and the small details that make a design feel consistent —
                kept where you can find them again.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-14">
            {DESIGN_CARDS.map((c) => (
              <article key={c.title} className="light-card p-6">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-[#0066FF]/10 text-[#0066FF] mb-4">
                  <c.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <h3 className="text-[15px] font-semibold text-[#1D1D1F]">{c.title}</h3>
                <p className="text-sm leading-relaxed text-[#6E6E73] mt-2">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Content and Marketing */}
      <section className="section band-mist" aria-label="Clipra for content and marketing">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="kicker">For content and marketing</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
                Keep track of everything you want to say.
              </h2>
              <p className="lede mt-5">
                Links, draft copy, and campaign details you return to through the day — then find
                the right version when you need it.
              </p>
            </div>
            <EmailFrame />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-14">
            {CONTENT_CARDS.map((c) => (
              <article key={c.title} className="light-card p-6">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-[#0066FF]/10 text-[#0066FF] mb-4">
                  <c.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <h3 className="text-[15px] font-semibold text-[#1D1D1F]">{c.title}</h3>
                <p className="text-sm leading-relaxed text-[#6E6E73] mt-2">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
