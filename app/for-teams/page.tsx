import PageShell from "@/components/PageShell";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";
import { Users, Share2, ShieldCheck, Clock } from "lucide-react";

export const metadata = {
  title: "For Teams | Clipra",
  description: "Team and shared pinboards are planned for Phase 2 of Clipra. See what team sharing will do and why it waits.",
};

const WILL_DO = [
  {
    icon: Share2,
    title: "Shared pinboards",
    text: "A team pinboard that everyone on the team can add to — approved copy, campaign links, and project references in one shared place.",
  },
  {
    icon: Users,
    title: "A place for the whole team",
    text: "Every teammate keeps their own history and pinboards, and the shared ones sit alongside them — the team's memory, not just one person's.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design, even shared",
    text: "Shared pinboards would use the same private iCloud approach as personal sync. Nothing would be stored on AR Swift servers.",
  },
];

export default function ForTeamsPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <p className="kicker">For teams · planned for Phase 2</p>
        <h1>
          A shared clipboard,
          <br />
          <span>when the time is right.</span>
        </h1>
        <p>
          Team and shared pinboards are part of Clipra&rsquo;s Phase 2 plans — after the first
          release. This page explains what team sharing will do, and why it waits.
        </p>
      </section>

      <section className="section band-mist">
        <div className="wrap">
          <div className="max-w-3xl mb-12">
            <p className="kicker">What team sharing will do</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
              The pieces your team reaches for, in one place.
            </h2>
            <p className="lede mt-5">
              Today Clipra is being built for one person and their devices. Shared pinboards would
              extend the same idea to a team.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {WILL_DO.map((item) => (
              <article key={item.title} className="light-card p-7">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-[#0066FF]/10 text-[#0066FF] mb-4">
                  <item.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <h3 className="text-[17px] font-semibold text-[#1D1D1F]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#6E6E73] mt-2">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="kicker">Why it waits for Phase 2</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F]">
              Sharing is easy to promise and hard to get right.
            </h2>
            <p className="lede mt-5">
              Syncing one person&rsquo;s clipboard across their own devices is already a careful
              job — private iCloud, no Clipra servers, and rules that keep passwords out. Sharing
              between people adds permissions, conflicts, and the question of who can see what.
            </p>
          </div>
          <div className="light-card p-7">
            <span className="grid place-items-center w-11 h-11 rounded-xl bg-[#0066FF]/10 text-[#0066FF] mb-4">
              <Clock className="w-5 h-5" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">The order we are building in</h3>
            <ol className="space-y-4 text-[15px] leading-relaxed text-[#6E6E73]">
              <li>
                <strong className="text-[#1D1D1F]">v1.0 — for you.</strong> Unlimited history,
                pinboards, Smart Auto-Sort, Text Transformer, and private iCloud sync across your
                own Mac, iPhone, and iPad.
              </li>
              <li>
                <strong className="text-[#1D1D1F]">Phase 2 — for teams.</strong> Shared pinboards,
                built on the same privacy approach, once the personal experience is solid.
              </li>
            </ol>
            <p className="text-sm text-[#6E6E73] mt-5 pt-5 border-t border-black/[0.07]">
              No team plan, pricing, or sign-up exists yet. When team sharing is ready, it will
              be announced on the roadmap.
            </p>
          </div>
        </div>
      </section>

      <section className="section band-dark">
        <div className="wrap text-center max-w-2xl mx-auto">
          <p className="kicker">Stay in the loop</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Want to know when teams arrive?
          </h2>
          <p className="mt-5 leading-relaxed" style={{ color: "#94A3B8" }}>
            There is no sign-up form yet — we will not pretend otherwise. Follow the roadmap to
            see when shared pinboards move from Phase 2 into development.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/updates" className="btn btn-glass">
              Read the roadmap
            </Link>
            <Link href="/pricing" className="btn btn-outline !border-white/25 !text-white hover:!bg-white/10">
              See planned pricing
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageShell>
  );
}
