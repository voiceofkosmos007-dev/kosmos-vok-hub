import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { Page } from "@/components/site-shell";
import { manifestoCommitments, manifestoSections } from "@/lib/kosmos-data";

export const Route = createFileRoute("/agenda")({
  head: () => ({ meta: [
    { title: "Our Manifesto | Voice of Kosmos" },
    { name: "description", content: "Read the complete Voice of Kosmos manifesto in English and Hindi." },
    { property: "og:title", content: "Our Manifesto | Voice of Kosmos" },
    { property: "og:description", content: "Four key commitments and a practical plan for a stronger, safer and better Kosmos." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: AgendaPage,
});

function AgendaPage() {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const index = language === "hi" ? 1 : 0;
  const hi = language === "hi";

  return <Page>
    <section className="bg-primary py-10 text-primary-foreground sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:px-5">
        <div className="min-w-0"><p className="eyebrow text-primary-foreground/70">{hi ? "आपका वोट · आपके लोग · आपकी AOA" : "Your vote · Your people · Your AOA"}</p><h1 className="mt-3 font-display text-4xl uppercase leading-none sm:mt-4 sm:text-7xl">{hi ? "हमारा घोषणापत्र" : "Our Manifesto"}</h1><p className="mt-4 max-w-2xl text-sm leading-6 text-primary-foreground/75 sm:mt-5 sm:text-lg">{hi ? "मजबूत AOA और बेहतर कल के लिए स्पष्ट प्राथमिकताएँ, समयसीमा और जवाबदेही।" : "Clear priorities, timelines and accountability for a stronger AOA and a better tomorrow."}</p></div>
        <div className="grid grid-cols-2 rounded-md border border-primary-foreground/25 p-1" role="group" aria-label="Manifesto language"><button type="button" onClick={() => setLanguage("en")} className={`rounded-sm px-4 py-2.5 text-sm font-bold ${!hi ? "bg-highlight text-highlight-foreground" : "text-primary-foreground"}`}>English</button><button type="button" onClick={() => setLanguage("hi")} className={`rounded-sm px-4 py-2.5 text-sm font-bold ${hi ? "bg-highlight text-highlight-foreground" : "text-primary-foreground"}`}>हिन्दी</button></div>
      </div>
    </section>

    <section className="bg-surface py-10 sm:py-16"><div className="mx-auto max-w-6xl px-4 sm:px-5">
      <header className="mb-6 sm:mb-8"><p className="eyebrow">{hi ? "समयबद्ध कार्ययोजना" : "Time-bound action"}</p><h2 className="section-title">{hi ? "हमारी 4 प्रमुख प्रतिबद्धताएँ" : "Our 4 key commitments"}</h2></header>
      <div className="grid gap-4 lg:grid-cols-2">{manifestoCommitments.map((item) => <article key={item.key} className="overflow-hidden rounded-md border border-border bg-card shadow-card"><div className="grid grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-3 bg-primary px-4 py-3 text-primary-foreground"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-highlight font-display text-lg text-highlight-foreground">{item.key}</span><h3 className="font-display text-base uppercase leading-tight sm:text-xl">{item.title[index]}</h3></div><div className="p-4 sm:p-5"><p className="font-bold leading-6 text-primary">{item.summary[index]}</p><ul className="mt-4 space-y-2.5">{item.points.map((point) => <li key={point[0]} className="grid grid-cols-[1rem_minmax(0,1fr)] gap-2 text-sm leading-5 text-muted-foreground"><Check size={16} className="mt-0.5 text-highlight"/><span>{point[index]}</span></li>)}</ul><div className="mt-5 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-sm bg-accent px-3 py-2"><span className="text-[10px] font-extrabold uppercase text-accent-foreground">{hi ? "समयसीमा" : "Deadline"}</span><strong className="text-right text-sm text-primary">{item.deadline[index]}</strong></div></div></article>)}</div>
    </div></section>

    <section className="bg-background py-10 sm:py-16"><div className="mx-auto max-w-6xl px-4 sm:px-5"><header className="mb-6 sm:mb-8"><p className="eyebrow">{hi ? "हर आयु के लिए बेहतर जीवन" : "A better life for every age"}</p><h2 className="section-title">{hi ? "हमारी विस्तृत कार्ययोजना" : "Our action plan"}</h2></header><div className="grid gap-4 sm:grid-cols-2">{manifestoSections.map((section, sectionIndex) => <article key={section.title[0]} className="overflow-hidden rounded-md border border-border bg-card shadow-card"><div className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3 bg-primary px-4 py-3 text-primary-foreground"><span className="grid size-8 place-items-center rounded-full bg-highlight font-display text-highlight-foreground">{sectionIndex + 1}</span><h3 className="font-display text-sm uppercase leading-tight sm:text-lg">{section.title[index]}</h3></div><ul className="space-y-2.5 p-4 sm:p-5">{section.points.map((point) => <li key={point[0]} className="grid grid-cols-[.75rem_minmax(0,1fr)] gap-2 text-sm leading-5 text-muted-foreground"><span className="mt-1.5 size-2 rounded-full bg-highlight"/><span>{point[index]}</span></li>)}</ul></article>)}</div><div className="mt-8 rounded-md bg-primary px-5 py-7 text-center text-primary-foreground"><p className="font-display text-2xl uppercase sm:text-3xl">{hi ? "टीम वॉइस ऑफ कॉसमॉस को वोट दें" : "Vote for Team Voice of Kosmos"}</p><p className="mt-2 text-sm text-primary-foreground/75">{hi ? "पारदर्शी AOA · जवाबदेह बिल्डर · सीपेज-मुक्त कॉसमॉस" : "Transparent AOA · Accountable Builder · Seepage-Free Kosmos"}</p></div></div></section>
  </Page>;
}