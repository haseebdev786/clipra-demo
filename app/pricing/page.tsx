import PageShell from "@/components/PageShell";
import Pricing from "@/components/Pricing";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
export const metadata = { title: "Pricing | Clipra", description: "Explore Clipra's planned free, Pro and lifetime plans." };
export default function PricingPage() {
  return <PageShell><section className="inner-hero inner-hero-compact"><p className="kicker">Plans for the way you work</p><h1>A little more room<br /><span>to get things done.</span></h1><p>Start with the essentials, or choose more space and tools. Pricing below is planned for launch.</p></section><Pricing /><ComparisonTable /><FAQ /><FinalCTA /></PageShell>;
}
