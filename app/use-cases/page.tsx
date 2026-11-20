import PageShell from "@/components/PageShell";
import UseCases from "@/components/UseCases";
import UseCaseStories from "@/components/UseCaseStories";
import FinalCTA from "@/components/FinalCTA";
export const metadata = { title: "Use cases | Clipra", description: "See how Clipra is being designed for different workflows." };
export default function UseCasesPage() {
  return <PageShell><section className="inner-hero"><p className="inner-kicker">Made for your everyday</p><h1>All the little things<br /><span>that make work flow.</span></h1><p>Code snippets, color values, links and the words you use every day. Clipra is being designed to keep them close.</p><a href="#usecases" className="inner-link">Find your workflow <span aria-hidden="true">↓</span></a></section><UseCases /><UseCaseStories /><FinalCTA /></PageShell>;
}
