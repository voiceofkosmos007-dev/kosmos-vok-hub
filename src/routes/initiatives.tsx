import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site-shell";
import { DogSafetyContent } from "@/components/dog-safety-content";

export const Route = createFileRoute("/initiatives")({
  head: () => ({ meta: [
    { title: "Our Initiatives | Voice of Kosmos" },
    { name: "description", content: "Kosmos Society dog-safety representations, meetings and RTI follow-up, with supporting letters and PDF records." },
    { property: "og:title", content: "Our Initiatives — Dog Safety | Voice of Kosmos" },
    { property: "og:description", content: "Document-based updates on resident safety and follow-up with NOIDA Authority." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: DogSafetyPage,
});

function DogSafetyPage() {
  return <Page>
    <section className="bg-primary py-10 text-primary-foreground sm:py-16"><div className="mx-auto max-w-6xl px-4 sm:px-5">
      <p className="eyebrow text-primary-foreground/70">Our Initiatives · Resident safety</p>
      <h1 className="mt-3 max-w-4xl font-display text-3xl uppercase leading-tight sm:text-5xl">Kosmos Society <span className="text-highlight">Dog Safety Issue</span></h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/75 sm:text-lg">Official Representations, Meetings &amp; Follow-up with NOIDA Authority</p>
    </div></section>
    <DogSafetyContent/>
  </Page>;
}