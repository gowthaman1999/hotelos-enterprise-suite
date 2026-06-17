import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, PlayCircle, Sparkles, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { DashboardMock } from "@/components/site/Dashboard";
import {
  TrustedBy, Ecosystem, Showcase, AIIntel, Journey, Outcomes, Comparison,
} from "@/components/site/Sections";
import {
  Testimonials, ROI, Pricing, FAQ, Contact, Footer,
} from "@/components/site/Marketing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BlackStone AI — Powering the Future of Hospitality Operations" },
      {
        name: "description",
        content:
          "One intelligent platform for revenue, hotel operations, guest experience and automation. Trusted by 8,400+ properties across 62 countries.",
      },
      { property: "og:title", content: "BlackStone AI — Hospitality Operations Platform" },
      {
        property: "og:description",
        content:
          "PMS, channel manager, AI revenue, guest messaging, housekeeping, POS and analytics in one platform.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section id="top"><Hero /></section>
        <TrustedBy />
        <section id="platform"><Ecosystem /></section>
        <section id="solutions"><Showcase /></section>
        <AIIntel />
        <Journey />
        <Outcomes />
        <Comparison />
        <section id="customers"><Testimonials /></section>
        <ROI />
        <section id="pricing"><Pricing /></section>
        <section id="resources"><FAQ /></section>
        <section id="demo"><Contact /></section>
        <Footer />
      </main>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="bg-hero absolute inset-0" aria-hidden />
      <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
      {/* Glow accents */}
      <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-secondary/30 blur-[140px]" aria-hidden />
      <div className="absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-accent/20 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-accent text-[10px] font-bold text-ink">
              <Sparkles className="h-2.5 w-2.5" />
            </span>
            BlackStone AI 3.0 · Now live across 8,400+ properties
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-[85px]">
            Powering the Future of<br />
            <span className="text-gradient">Hospitality Operations</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            One intelligent platform for revenue growth, hotel operations, guest experience and automation —
            built for luxury hotels, resorts and global hospitality brands.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#demo" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-glow transition hover:translate-y-[-1px] cursor-pointer">
              Book a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#solutions" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 cursor-pointer">
              <PlayCircle className="h-4 w-4" /> Watch Platform Tour
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-widest text-white/40">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-success" /> SOC 2 Type II
            </span>
            <span>PCI-DSS L1</span>
            <span>ISO 27001</span>
            <span>GDPR</span>
            <span>99.99% Uptime</span>
          </div>
        </div>

        <div className="relative mx-auto mt-20 max-w-6xl">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
