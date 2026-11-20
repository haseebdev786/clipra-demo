import { Keyboard, Share, LayoutGrid, CircleDot } from "lucide-react";

/*
  Group 5 of /features: iPhone & iPad.
  A phone frame showing the keyboard extension, plus four plain rows.
  iOS has no background clipboard access — the keyboard extension is the
  Apple-approved way in, and the page says so.
*/

const ROWS = [
  {
    icon: Keyboard,
    title: "iOS keyboard extension",
    text: "Switch to the Clipra keyboard while typing in any app and paste from your history without leaving what you are writing.",
  },
  {
    icon: Share,
    title: "Share Sheet extension",
    text: "Save directly from Safari, WhatsApp and other apps, straight into your clipboard history.",
  },
  {
    icon: LayoutGrid,
    title: "Home Screen widget",
    text: "Your last three copied items on the Home Screen, one tap away.",
  },
  {
    icon: CircleDot,
    title: "Dynamic Island",
    text: "Quick access to your latest copy from the Dynamic Island on supported iPhones.",
  },
];

const KEYS = ["#0066FF", "linear.app", "const dedupe", "Review build", "⌘C"];

export default function IPhoneSection() {
  return (
    <section className="section band-mist" aria-label="Clipra on iPhone and iPad">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="mx-auto w-[280px] rounded-[44px] bg-[#0B0D14] border border-black/20 shadow-[0_24px_60px_rgba(0,0,0,0.3)] p-2.5">
            <div className="relative rounded-[36px] bg-white/90 backdrop-blur overflow-hidden">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[72px] h-[20px] rounded-full bg-black z-10" aria-hidden="true" />
              <div className="pt-10 px-4 pb-4">
                <p className="text-[13px] font-semibold text-[#1D1D1F]">Notes</p>
                <p className="text-[13px] text-[#424245] leading-relaxed mt-2 min-h-[64px]">
                  The launch notes are ready. The clipboard that organises itself is coming to
                  Mac, iPhone and iPad.
                </p>
                <div className="mt-4 rounded-2xl bg-white/50 backdrop-blur border border-white/60 p-3">
                  <p className="text-[10px] font-semibold tracking-wider text-[#0066FF]">CLIPRA KEYBOARD</p>
                  <div className="flex gap-1.5 mt-2 overflow-x-auto">
                    {KEYS.map((k) => (
                      <span
                        key={k}
                        className="flex-shrink-0 px-2.5 py-2 rounded-lg bg-white/70 backdrop-blur border border-white/60 text-[11px] font-medium text-[#1D1D1F] whitespace-nowrap"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                  <p className="text-[10px] text-[#6E6E73] mt-2">Hold the globe key to switch keyboards.</p>
                </div>
                <div className="grid grid-cols-10 gap-1 mt-3" aria-hidden="true">
                  {"QWERTYUIOP".split("").map((l) => (
                    <span key={l} className="h-8 grid place-items-center rounded-md bg-white/55 backdrop-blur text-[11px] text-[#1D1D1F]">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-[#86868B] mt-4">Keyboard extension concept preview</p>
        </div>

        <div className="order-1 lg:order-2">
          <p className="kicker">iPhone and iPad</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
            Your clipboard, while you type.
          </h2>
          <p className="lede mt-5">
            Apple does not let any app read the clipboard in the background on iOS. Clipra works
            the Apple-approved way instead — through its keyboard extension.
          </p>
          <div className="grid gap-6 mt-10">
            {ROWS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-3.5 items-start">
                <span className="grid place-items-center flex-shrink-0 w-11 h-11 rounded-xl bg-[#0066FF]/10 text-[#0066FF]">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#1D1D1F]">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#6E6E73] max-w-[440px]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
