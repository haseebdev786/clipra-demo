import PageShell from "@/components/PageShell";
import SmartAutoSort from "@/components/SmartAutoSort";
import TextTransformer from "@/components/TextTransformer";
import Ecosystem from "@/components/Ecosystem";
import FinalCTA from "@/components/FinalCTA";
import HistorySearch from "@/components/HistorySearch";
import MacShelf from "@/components/MacShelf";
import IPhoneSection from "@/components/IPhoneSection";

export const metadata = {
  title: "Features | Clipra",
  description: "Explore the clipboard tools planned for Clipra — history and search, Smart Auto-Sort, Text Transformer, sync, iPhone and Mac.",
};

export default function FeaturesPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <p className="kicker">A more useful clipboard</p>
        <h1>
          Everything you copy,<br />
          <span>ready when you are.</span>
        </h1>
        <p>
          From automatically organized pinboards to useful text tools, Clipra is being built to
          keep your work moving.
        </p>
        <a href="#history" className="inline-block text-[#0066FF] font-medium mt-7 py-2.5">
          Explore the features ↓
        </a>
      </section>

      <HistorySearch />
      <SmartAutoSort />
      <TextTransformer />
      <Ecosystem />

      <section className="section band-mist" aria-label="Privacy rules, biometric lock and trash">
        <div className="wrap">
          <div className="max-w-3xl">
            <p className="kicker">Sync and privacy</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
              Private first, then in sync.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3 mt-12">
            <div className="glass-1 p-7">
              <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">Privacy rules</h3>
              <p className="text-[15px] leading-relaxed text-[#6E6E73]">
                Clipra is planned to ignore passwords and sensitive apps automatically, so a copy
                you never meant to keep never enters your history.
              </p>
            </div>
            <div className="glass-2 p-7">
              <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">Face ID and Touch ID</h3>
              <p className="text-[15px] leading-relaxed text-[#6E6E73]">
                Lock pinboards and history behind biometrics on iPhone and iPad. Your clipboard
                stays yours when someone else holds your phone.
              </p>
            </div>
            <div className="glass-3 p-7">
              <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">30-day trash</h3>
              <p className="text-[15px] leading-relaxed text-[#6E6E73]">
                Deleted items are kept for 30 days before permanent purging, so an important API
                token or address is recoverable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <IPhoneSection />
      <MacShelf />
      <FinalCTA />
    </PageShell>
  );
}
