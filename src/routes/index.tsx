import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ShieldCheck, Building2, HandCoins, Sparkles, Dog, Users, Landmark, MessagesSquare } from "lucide-react";
import hero from "@/assets/kosmos-hero.jpg.asset.json";
import { Page } from "@/components/site-shell";
import { TeamPreview } from "@/components/team-card";
import { priorities, team } from "@/lib/kosmos-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Voice of Kosmos | Jaypee Kosmos Residents" },
    { name: "description", content: "Meet Voice of Kosmos—residents and professionals committed to transparent, accountable community action." },
    { property: "og:title", content: "Voice of Kosmos" },
    { property: "og:description", content: "A safer, cleaner, better-connected Kosmos." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const priorityItems = priorities.map((item, index) => ({ item, Icon: [ShieldCheck, Building2, HandCoins, Sparkles, Dog, Users, Landmark, MessagesSquare][index] ?? ShieldCheck }));

function Index() {
  return (
    <Page>
      <section className="relative overflow-hidden bg-primary text-primary-foreground sm:min-h-[610px]">
        <img src={hero.url} alt="Landscaped residential community at Jaypee Kosmos" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto grid max-w-6xl gap-7 px-4 pb-16 pt-9 sm:min-h-[610px] sm:px-5 sm:pb-20 sm:pt-16 lg:items-center"><div className="min-w-0 max-w-2xl"><p className="eyebrow text-primary-foreground/75">A safer, cleaner, better-connected Kosmos</p><h1 className="mt-4 font-display text-5xl uppercase leading-[.92] sm:mt-5 sm:text-7xl lg:text-8xl">Voice of<br /><span className="text-highlight">Kosmos</span></h1><p className="mt-4 text-lg font-semibold sm:mt-5 sm:text-xl">Our Society. Our Voice. A Brighter Tomorrow.</p><p className="mt-3 max-w-xl text-sm leading-6 text-primary-foreground/75 sm:mt-5 sm:leading-7">We are residents of Jaypee Kosmos with professional experience and a commitment to transparent, accountable community action. We stand for faster issue resolution, honest communication and outcomes residents can see.</p><div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3"><Link to="/agenda" className="rounded-md bg-highlight px-3 py-3 text-center text-[11px] font-extrabold uppercase text-highlight-foreground sm:px-5 sm:text-xs">Our agenda →</Link><Link to="/team" className="rounded-md border border-primary-foreground/40 px-3 py-3 text-center text-[11px] font-extrabold uppercase text-primary-foreground sm:px-5 sm:text-xs">Meet our team →</Link></div></div></div>
      </section>
      <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 sm:-mt-10 sm:px-5"><div className="grid grid-cols-2 overflow-hidden rounded-md border border-border bg-card shadow-card sm:grid-cols-4 xl:grid-cols-8">{priorityItems.map(({ item, Icon }) => <Link to={item[0] === "Dog Management" ? "/initiatives" : "/agenda"} key={item[0]} className="flex min-h-28 flex-col items-center justify-center border-b border-r border-border p-3 text-center text-primary sm:min-h-32"><span className="mb-3 grid size-10 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground"><Icon size={20}/></span><span className="text-[11px] font-extrabold leading-4">{item[0]}</span></Link>)}</div></section>
      <TeamPreview members={team} />
      <section className="bg-background py-14 sm:py-20"><div className="mx-auto max-w-6xl px-4 text-center sm:px-5"><p className="eyebrow">People · Priorities · Progress</p><h2 className="section-title mx-auto max-w-3xl">Let’s build a better <span>Kosmos</span> together</h2><p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">A safer, cleaner, better-connected and more accountable community.</p></div></section>
    </Page>
  );
}
