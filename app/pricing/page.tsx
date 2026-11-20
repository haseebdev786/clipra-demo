import PageShell from "@/components/PageShell";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
export const metadata = { title: "Pricing | Clipra", description: "Explore Clipra's planned free, Pro and lifetime plans." };
export default function PricingPage() {
  return <PageShell><section className="inner-hero inner-hero-compact"><p className="inner-kicker">Plans for the way you work</p><h1>A little more room<br /><span>to get things done.</span></h1><p>Start with the essentials, or choose more space and tools. Pricing below is planned for launch.</p></section><Pricing /><FAQ /></PageShell>;
}
