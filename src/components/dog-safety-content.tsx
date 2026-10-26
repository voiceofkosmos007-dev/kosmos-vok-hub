import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FileText, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dogSafetyContent } from "@/lib/kosmos-data";
import july from "@/assets/dog-safety-july-correspondence.pdf.asset.json";
import september from "@/assets/dog-safety-september-follow-up.pdf.asset.json";
import october from "@/assets/dog-safety-october-follow-up.pdf.asset.json";
import rti from "@/assets/dog-safety-rti-first-appeal.pdf.asset.json";

const documents = [
  { title: "Draft representations to DM & CEO", date: "15 July 2026", detail: "Email to Kosmos AOA sharing draft letters for approval.", asset: july },
  { title: "Follow-up to the ACEO", date: "16 September — supplied filename", detail: "Letter requesting action on reported safety concerns and meeting minutes; the letter itself is undated.", asset: september },
  { title: "RTI first appeal & acknowledgement", date: "Acknowledged 1 October 2026", detail: "First appeal referencing the original RTI application dated 2 September 2026.", asset: rti },
  { title: "Urgent follow-up & acknowledgement", date: "14 October 2026", detail: "Representation requesting clarification and a time-bound Action Taken Report.", asset: october },
];

export function DogSafetyContent() {
  return <>
    <section className="bg-surface py-10 sm:py-14" id="documents">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <p className="eyebrow">Letters · Correspondence · RTI</p>
        <h2 className="mt-3 font-display text-2xl uppercase text-primary sm:text-3xl">Supporting documents</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {documents.map(doc => <article key={doc.asset.url} className="flex min-w-0 flex-col rounded-md border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-accent-foreground"><FileText size={18}/><span className="text-xs font-bold">PDF · {doc.date}</span></div>
            <h3 className="mt-3 text-lg font-bold text-primary">{doc.title}</h3>
            <p className="mb-5 mt-2 text-sm leading-6 text-muted-foreground">{doc.detail}</p>
            <Button asChild variant="outline" className="mt-auto self-start"><a href={doc.asset.url} target="_blank" rel="noopener noreferrer" aria-label={`Open PDF: ${doc.title}`}>Open PDF <ArrowUpRight/></a></Button>
          </article>)}
        </div>
      </div>
    </section>
    <section className="bg-background py-10 sm:py-14"><div className="mx-auto max-w-4xl px-4 sm:px-5">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
        h2: ({children}) => <h2 className="mb-4 mt-10 font-display text-2xl text-primary first:mt-0">{children}</h2>,
        h3: ({children}) => <h3 className="mb-3 mt-7 text-lg font-bold text-primary">{children}</h3>,
        p: ({children}) => <p className="mb-4 text-sm leading-7 text-muted-foreground sm:text-base">{children}</p>,
        ul: ({children}) => <ul className="mb-5 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground sm:text-base">{children}</ul>,
        ol: ({children}) => <ol className="mb-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-muted-foreground sm:text-base">{children}</ol>,
        strong: ({children}) => <strong className="font-bold text-foreground">{children}</strong>,
        hr: () => <hr className="my-8 border-border"/>,
        table: ({children}) => <div className="my-6 overflow-x-auto rounded-md border border-border"><table className="w-full min-w-[620px] border-collapse text-left text-sm leading-6">{children}</table></div>,
        th: ({children}) => <th className="border-b border-border bg-primary px-4 py-3 text-primary-foreground">{children}</th>,
        td: ({children}) => <td className="border-b border-border px-4 py-3 align-top text-muted-foreground">{children}</td>,
      }}>{dogSafetyContent}</ReactMarkdown>
    </div></section>
  </>;
}