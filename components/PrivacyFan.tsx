import { Lock, ShieldCheck } from "lucide-react";

/*
  "Private by design" — white band, green shield, a fan of clip cards.
  Password cards show a lock: Clipra is planned to ignore passwords and
  sensitive apps, and history stays local + in the user's private iCloud.
*/

const CARDS = [
  { kind: "Link", title: "Project inspiration", detail: "linear.app/projects", bg: "bg-[#EAF2FF]", locked: false },
  { kind: "Colour", title: "Primary blue", detail: "#0066FF", bg: "bg-[#0066FF] text-white", locked: false },
  { kind: "Password", title: "App Store password", detail: "Hidden by privacy rules", bg: "bg-[#F5F5F7]", locked: true },
  { kind: "Code", title: "Deploy script", detail: "npm run build", bg: "bg-[#1D1D1F] text-white", locked: false },
  { kind: "Note", title: "Meeting notes", detail: "Ideas for the next launch", bg: "bg-[#FFF4D6]", locked: false },
  { kind: "Password", title: "Bank login", detail: "Hidden by privacy rules", bg: "bg-[#F5F5F7]", locked: true },
  { kind: "Image", title: "Mood board", detail: "Saved from Safari", bg: "bg-[#E6F7F4]", locked: false },
  { kind: "Link", title: "Invoice link", detail: "receipts.example.com", bg: "bg-[#FDECEA]", locked: false },
];

export default function PrivacyFan() {
  return (
    <section className="section bg-white" aria-label="Private by design">
      <div className="wrap">
        <div className="text-center max-w-2xl mx-auto">
          <span
            className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-[#00C4B4]/10 text-[#00A896] mb-6"
            aria-hidden="true"
          >
            <ShieldCheck className="w-7 h-7" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">Private by design</h2>
          <p className="lede mx-auto mt-5">
            Your clipboard stays on your device and in your private iCloud. It never touches
            Clipra servers. Set rules so Clipra ignores passwords and other sensitive apps.
          </p>
        </div>

        <div className="max-w-[1024px] mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className={`rounded-2xl border border-black/[0.07] p-4 min-h-[132px] flex flex-col ${card.bg}`}
            >
              <div className="flex items-center justify-between text-[11px] font-medium">
                <span className={card.bg.includes("text-white") ? "text-white/80" : "text-[#6E6E73]"}>
                  {card.kind}
                </span>
                {card.locked && <Lock className="w-3.5 h-3.5 text-[#6E6E73]" aria-label="Locked" />}
              </div>
              <p
                className={`text-[14px] font-semibold mt-6 ${
                  card.bg.includes("text-white") ? "text-white" : "text-[#1D1D1F]"
                }`}
              >
                {card.title}
              </p>
              <p
                className={`text-[12px] truncate ${
                  card.bg.includes("text-white") ? "text-white/70" : "text-[#6E6E73]"
                }`}
              >
                {card.detail}
              </p>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-[#6E6E73] mt-8 max-w-xl mx-auto">
          Privacy rules, Face ID and Touch ID on iPhone and iPad, and a 30-day trash are all
          planned for the first release.
        </p>
      </div>
    </section>
  );
}
