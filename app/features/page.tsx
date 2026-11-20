import PageShell from "@/components/PageShell";
import SmartAutoSort from "@/components/SmartAutoSort";
import TextTransformer from "@/components/TextTransformer";
import Ecosystem from "@/components/Ecosystem";
import BentoFeatures from "@/components/BentoFeatures";
import FinalCTA from "@/components/FinalCTA";

export const metadata = { title: "Features | Clipra", description: "Explore the clipboard tools planned for Clipra." };
export default function FeaturesPage() {
  return <PageShell><section className="inner-hero"><p className="inner-kicker">A more useful clipboard</p><h1>Everything you copy,<br /><span>ready when you are.</span></h1><p>From automatically organized pinboards to useful text tools, Clipra is being built to keep your work moving.</p><a href="#smart-sort" className="inner-link">Explore the features <span aria-hidden="true">↓</span></a></section><SmartAutoSort /><TextTransformer /><Ecosystem /><BentoFeatures /><FinalCTA /></PageShell>;
}
