import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site-shell";
import { TeamProfile } from "@/components/team-card";
import { team } from "@/lib/kosmos-data";

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [
    { title: "Our Team | Voice of Kosmos" },
    { name: "description", content: "Meet the residents, professionals and community members of Team Voice of Kosmos." },
    { property: "og:title", content: "Meet Team Voice of Kosmos" },
    { property: "og:description", content: "Residents with experience, commitment and a record of work inside Jaypee Kosmos." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: TeamPage,
});

function TeamPage() {
  return <Page>
    <section className="bg-primary py-10 text-primary-foreground sm:py-20"><div className="mx-auto max-w-6xl px-4 sm:px-5"><p className="eyebrow text-primary-foreground/70">Our team</p><h1 className="mt-3 max-w-4xl font-display text-4xl uppercase leading-none sm:mt-4 sm:text-7xl">Residents. <span className="text-highlight">Professionals.</span><br/>Community members.</h1><p className="mt-4 max-w-2xl text-sm leading-6 text-primary-foreground/70 sm:mt-6 sm:text-base sm:leading-7">A diverse group of Jaypee Kosmos residents bringing professional experience, local knowledge and a commitment to visible results.</p></div></section>
    <section className="bg-primary py-7 sm:py-16"><div className="mx-auto max-w-5xl space-y-4 px-3 sm:space-y-6 sm:px-5">{team.map(member => <TeamProfile key={member.name} member={member} />)}</div></section>
  </Page>;
}