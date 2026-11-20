import { Cloud, Keyboard, ShieldCheck, Wifi, BatteryFull, Signal, Search, Plus, MoreHorizontal } from "lucide-react";

const benefits = [
  { icon: Keyboard, title: "Your clipboard, while you type", description: "The planned iPhone keyboard brings saved clips into the apps where you work." },
  { icon: Cloud, title: "Your devices, in sync", description: "Private iCloud sync is planned to keep your history close across Mac, iPhone and iPad." },
  { icon: ShieldCheck, title: "Private by design", description: "The planned design stores clipboard history locally and in your private iCloud database." },
];

const clips = [
  { type: "Link", source: "Safari", title: "Project inspiration", detail: "linear.app/projects", art: "↗", artClass: "bg-[#0066FF]/10 text-[#0066FF]" },
  { type: "Color", source: "Figma", title: "Primary blue", detail: "#0066FF", art: "#0066FF", artClass: "bg-[#0066FF] text-white text-[10px]" },
  { type: "Code", source: "VS Code", title: "Quick snippet", detail: "const dedupe = ...", art: "{ }", artClass: "bg-black/[0.05] text-[#1D1D1F]" },
  { type: "Note", source: "Notes", title: "Meeting notes", detail: "Ideas for the next launch", art: "“ ”", artClass: "bg-[#FFF4D6] text-[#1D1D1F]" },
];

export default function Ecosystem() {
  return (
    <section className="section" aria-label="Clipra on your devices">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="kicker">Made for your devices</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
            Your clipboard goes where you do.
          </h2>
          <p className="lede mt-5">
            From your Mac to your iPhone and iPad, Clipra is being designed to keep the things you
            copy close at hand.
          </p>
          <div className="grid gap-5 mt-8">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-3.5 items-start">
                <span className="grid place-items-center flex-shrink-0 w-11 h-11 rounded-xl bg-[#0066FF]/10 text-[#0066FF]">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#1D1D1F]">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#6E6E73] max-w-[420px]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-3 !rounded-[28px] relative min-h-[540px] flex flex-col justify-center items-center overflow-hidden p-6">
          <div aria-hidden="true" className="halo w-[300px] h-[300px] bg-[#0066FF]/15 -top-10 -right-10" />
          <div aria-hidden="true" className="halo w-[260px] h-[260px] bg-[#00C4B4]/12 bottom-0 -left-8" />
          <div
            className="relative w-[245px] h-[500px] p-2 rounded-[43px] bg-[#0B0D14] border border-black/20 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
            role="img"
            aria-label="Concept preview of Clipra clipboard history on iPhone"
          >
            <div className="relative h-full overflow-hidden rounded-[36px] bg-[#0B0D14] text-white">
              <div className="h-10 flex justify-between items-center px-4 text-[11px] font-semibold">
                <strong>9:41</strong>
                <span className="flex items-center gap-1">
                  <Signal size={11} aria-hidden="true" />
                  <Wifi size={11} aria-hidden="true" />
                  <BatteryFull size={14} aria-hidden="true" />
                </span>
              </div>
              <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-[70px] h-[19px] rounded-full bg-black" aria-hidden="true" />
              <div className="flex justify-between items-center px-4 py-2">
                <div>
                  <p className="text-[8px] font-semibold tracking-wider text-[#2E82FF]">YOUR CLIPBOARD</p>
                  <p className="text-[22px] leading-tight font-bold tracking-tight">All clips</p>
                </div>
                <span className="grid place-items-center w-7 h-7 rounded-full bg-white/[0.07]">
                  <MoreHorizontal size={17} aria-hidden="true" />
                </span>
              </div>
              <div className="flex items-center gap-2 h-8 mx-3.5 px-2.5 rounded-lg bg-white/[0.07] text-[10px] text-[#64748B]">
                <Search size={14} aria-hidden="true" /> Search your clips
              </div>
              <div className="flex gap-1.5 mx-3.5 mt-3 text-[9px] text-[#CBD5E1]">
                <span className="px-2 py-1 rounded-full bg-[#0066FF] text-white font-semibold">All</span>
                <span className="px-2 py-1 rounded-full bg-white/[0.07]">Links</span>
                <span className="px-2 py-1 rounded-full bg-white/[0.07]">Notes</span>
                <span className="px-2 py-1 rounded-full bg-white/[0.07]">Colors</span>
              </div>
              <div className="grid grid-cols-2 gap-2 px-3.5 mt-3">
                {clips.map((clip) => (
                  <div key={clip.title} className="rounded-xl bg-white/[0.05] border border-white/10 overflow-hidden">
                    <div className="flex justify-between px-2 py-1.5 text-[8px] text-[#CBD5E1]">
                      <span>{clip.type}</span>
                      <span>{clip.source}</span>
                    </div>
                    <div className="p-1.5">
                      <div className={`grid place-items-center h-12 rounded-md text-lg font-semibold ${clip.artClass}`}>
                        {clip.art}
                      </div>
                      <p className="text-[9px] font-semibold mt-1.5 truncate">{clip.title}</p>
                      <p className="text-[8px] text-[#64748B] truncate">{clip.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[#CBD5E1]">
                <span className="grid place-items-center w-8 h-8 rounded-full bg-white/[0.07] border border-white/10">
                  <Search size={15} aria-hidden="true" />
                </span>
                <span className="px-3.5 h-8 grid place-items-center rounded-full bg-[#0066FF] text-white text-[10px] font-medium">
                  ▣&nbsp; Clipboard
                </span>
                <span className="grid place-items-center w-8 h-8 rounded-full bg-white/[0.07] border border-white/10">
                  <Plus size={16} aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-[#86868B] mt-4">iPhone concept preview</p>
        </div>
      </div>
    </section>
  );
}
