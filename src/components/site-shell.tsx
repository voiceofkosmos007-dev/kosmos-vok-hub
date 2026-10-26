import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import type { ReactNode } from "react";
import logo from "@/assets/voice-of-kosmos-logo.png.asset.json";
import { Button } from "@/components/ui/button";

export function Header() {
  return <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
    <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:h-20 sm:px-5 md:flex md:justify-between">
      <Link to="/" className="flex items-center gap-3" aria-label="Voice of Kosmos home">
        <img src={logo.url} alt="Voice of Kosmos" className="size-11 shrink-0 rounded-full sm:size-14" />
        <span className="hidden sm:block"><strong className="block font-display text-lg uppercase text-primary">Voice of <span className="text-highlight">Kosmos</span></strong><small className="block text-[10px] font-bold uppercase text-muted-foreground">Jaypee Kosmos, Noida</small></span>
      </Link>
      <nav className="hidden items-center gap-5 text-sm font-bold text-primary md:flex" aria-label="Main navigation">
        <Link to="/" activeProps={{ className: "text-highlight" }}>Home</Link>
        <Link to="/agenda" activeProps={{ className: "text-highlight" }}>Our Agenda</Link>
        <Link to="/team" activeProps={{ className: "text-highlight" }}>Our Team</Link>
        <Link to="/initiatives" activeProps={{ className: "text-highlight" }}>Our Initiatives</Link>
      </nav>
      <Link to="/team" className="hidden rounded-md bg-highlight px-5 py-3 text-xs font-extrabold uppercase text-highlight-foreground shadow-sm transition-transform hover:-translate-y-0.5 sm:inline-flex">Meet our team →</Link>
      <Link to="/team" className="grid size-10 shrink-0 place-items-center text-primary md:hidden" aria-label="Open team page"><Menu size={22} /></Link>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="bg-primary text-primary-foreground">
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-5 sm:py-12 md:grid-cols-[1fr_auto] md:items-end">
      <div><p className="font-display text-2xl uppercase">Fit Kosmos, <span className="text-highlight">Happy Kosmos</span></p><p className="mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/75">Every issue in our society moves faster when residents speak with one voice. Support the Voice of Kosmos team and let us take our society forward together.</p></div>
      <p className="text-xs text-primary-foreground/60">Team Voice of Kosmos · Sector 134, Noida</p>
    </div>
  </footer>;
}

export function Page({ children }: { children: ReactNode }) {
  return <><Header /><nav className="flex flex-wrap justify-center border-b border-border bg-background px-2 py-2 md:hidden" aria-label="Page navigation"><Button asChild variant="ghost" size="sm"><Link to="/">Home</Link></Button><Button asChild variant="ghost" size="sm"><Link to="/agenda">Agenda</Link></Button><Button asChild variant="ghost" size="sm"><Link to="/team">Team</Link></Button><Button asChild variant="ghost" size="sm"><Link to="/initiatives">Our Initiatives</Link></Button></nav><main>{children}</main><Footer /></>;
}