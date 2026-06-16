import {
  Hotel, CalendarCheck, Network, Sparkles, MessageCircle, BedDouble, Utensils, BarChart3,
  Check, Minus, Search, Bookmark, KeyRound, Coffee, Star as StarIcon, Repeat,
  ArrowRight, ArrowUpRight, Bot, LineChart, TrendingUp, Heart,
} from "lucide-react";

/* -------------------- Trusted by -------------------- */
const logos = [
  "AURORA", "MERIDIAN", "NORTHWIND", "ATELIER", "MAISON D'OR", "BAYSIDE",
  "KAIROS", "OASIS", "VELLUM", "SOLSTICE", "RIVIERA", "ALTITUDE",
];

export function TrustedBy() {
  return (
    <section className="relative border-y border-border/60 bg-surface-elevated py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-ink-soft">
              Trusted by hotels worldwide
            </p>
            <h3 className="mt-3 text-2xl font-bold text-ink md:text-3xl">
              Operating <span className="text-gradient-brand">$4.2B+</span> in annual room revenue
              across 62 countries.
            </h3>
          </div>
          <div className="overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-14">
              {[...logos, ...logos].map((l, i) => (
                <span key={i} className="whitespace-nowrap text-xl font-bold tracking-[0.18em] text-ink/35">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-4">
          {[
            ["8,400+", "Properties live"],
            ["62", "Countries"],
            ["$4.2B", "Revenue managed"],
            ["99.99%", "Platform uptime"],
          ].map(([v, l]) => (
            <div key={l} className="bg-surface p-8">
              <div className="text-3xl font-bold text-ink md:text-4xl">{v}</div>
              <div className="mt-1 text-sm text-ink-soft">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Product ecosystem -------------------- */
const modules = [
  { i: Hotel, t: "Property Management", d: "Reservations, folios, group blocks and front-office flows built for speed.", c: "from-blue-500/20 to-cyan-400/10" },
  { i: CalendarCheck, t: "Booking Engine", d: "Beautiful direct-booking experiences with zero commission.", c: "from-cyan-400/20 to-emerald-400/10" },
  { i: Network, t: "Channel Manager", d: "Real-time sync across Booking.com, Expedia, Airbnb and 200+ channels.", c: "from-indigo-500/20 to-blue-500/10" },
  { i: Sparkles, t: "AI Revenue", d: "Dynamic pricing, forecasting and upsell recommendations.", c: "from-violet-500/20 to-fuchsia-400/10" },
  { i: MessageCircle, t: "Guest Messaging", d: "WhatsApp, email and in-stay automation across the journey.", c: "from-emerald-400/20 to-teal-400/10" },
  { i: BedDouble, t: "Housekeeping", d: "Mobile-first task ops, room status and minibar in real time.", c: "from-amber-400/20 to-orange-400/10" },
  { i: Utensils, t: "POS & Restaurant", d: "F&B, retail, spa and minibar — billed straight to the folio.", c: "from-rose-500/20 to-pink-400/10" },
  { i: BarChart3, t: "Analytics", d: "Group-wide BI with property, segment and channel drill-downs.", c: "from-sky-500/20 to-blue-400/10" },
];

export function Ecosystem() {
  return (
    <section className="relative py-32">
      <div className="dot-bg absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ink-soft">
            Product Ecosystem
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-ink md:text-6xl">
            One platform.<br />
            <span className="text-gradient-brand">Every workflow.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-soft">
            Eight tightly integrated modules sharing one data model — replace a stack of disconnected tools with a single source of truth.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {modules.map(({ i: Icon, t, d, c }) => (
            <div
              key={t}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c} opacity-0 transition-opacity group-hover:opacity-100`} />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Interactive product showcase -------------------- */
import { useState } from "react";
const tabs = [
  {
    k: "PMS", label: "Property Management",
    title: "Front office, redesigned for the modern hotelier.",
    desc: "Drag-to-assign rooms, instant folio splits, group blocks, and a check-in flow that takes 23 seconds.",
    bullets: ["Smart room assignment", "Folio splitting & group billing", "Self check-in & digital key"],
  },
  {
    k: "REV", label: "AI Revenue",
    title: "Pricing that thinks like your best revenue manager.",
    desc: "Forecasts demand 365 days out and rebalances rates across every channel — automatically.",
    bullets: ["365-day forecast horizon", "Auto-publish to all channels", "Compset & event signals"],
  },
  {
    k: "GUEST", label: "Guest Messaging",
    title: "Reach guests on the channel they prefer.",
    desc: "WhatsApp, email and in-app — automated through the entire journey with one AI inbox.",
    bullets: ["WhatsApp Business API", "Pre-arrival upsells", "Sentiment-aware AI replies"],
  },
  {
    k: "HK", label: "Housekeeping",
    title: "Mobile-first ops your team will actually use.",
    desc: "Real-time room status, minibar posting and maintenance — all from a phone.",
    bullets: ["Live room board", "Maintenance tickets", "Performance scorecards"],
  },
];

export function Showcase() {
  const [active, setActive] = useState(0);
  const t = tabs[active];
  return (
    <section className="relative bg-[oklch(0.155_0.04_265)] py-32 text-white">
      <div className="bg-mesh absolute inset-0 opacity-90" aria-hidden />
      <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
            Interactive showcase
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            See the platform <span className="text-gradient">in motion</span>.
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tabs.map((tab, i) => (
            <button
              key={tab.k}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                i === active ? "bg-white text-ink" : "border border-white/15 text-white/80 hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">{t.title}</h3>
            <p className="mt-4 text-lg text-white/70">{t.desc}</p>
            <ul className="mt-6 space-y-3">
              {t.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white/85">
                  <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-success/20 text-success">
                    <Check className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink">
              Explore the module <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-2 shadow-glow">
            <div className="rounded-xl bg-[oklch(0.21_0.05_265)] p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-xs uppercase tracking-wider text-white/40">{t.label}</div>
                <div className="text-[11px] text-white/40">Real-time</div>
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2.5">
                    <div className="flex items-center gap-3">
                      <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-secondary to-accent text-[10px] font-bold text-white">
                        {String(100 + n)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Suite {100 + n} · {["Aurora Bali", "Aurora Paris", "Aurora NYC", "Aurora Tokyo", "Aurora London"][n - 1]}</div>
                        <div className="text-[11px] text-white/40">Updated 2s ago</div>
                      </div>
                    </div>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      n % 3 === 0 ? "bg-amber-400/20 text-amber-300" : n % 2 === 0 ? "bg-success/20 text-success" : "bg-accent/20 text-accent"
                    }`}>
                      {n % 3 === 0 ? "In progress" : n % 2 === 0 ? "Ready" : "Cleaning"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- AI Hospitality Intelligence -------------------- */
const ai = [
  { i: TrendingUp, t: "Dynamic Pricing", d: "Optimizes rates every 15 minutes across every channel and room type." },
  { i: LineChart, t: "Revenue Forecasting", d: "365-day pacing with compset, events and weather signals." },
  { i: ArrowUpRight, t: "Upselling Automation", d: "Personalized upgrade offers timed to guest intent." },
  { i: Heart, t: "Guest Sentiment", d: "Real-time NPS and AI sentiment from every conversation and review." },
];

export function AIIntel() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-secondary">
            <Bot className="h-3 w-3" /> AI Hospitality Intelligence
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-ink md:text-6xl">
            An AI layer that runs <span className="text-gradient-brand">underneath everything.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-soft">
            Trained on $4B+ of hospitality transactions, the HotelOS AI engine is woven into every module — quietly making your team faster and your revenue higher.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ai.map(({ i: Icon, t, d }) => (
            <div key={t} className="glass-light rounded-2xl p-7 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Guest Journey -------------------- */
const journey = [
  { i: Search, t: "Search", d: "SEO-optimized booking pages" },
  { i: Bookmark, t: "Book", d: "Direct, commission-free" },
  { i: KeyRound, t: "Check-In", d: "Self-service & digital key" },
  { i: Coffee, t: "Stay", d: "WhatsApp concierge & upsells" },
  { i: StarIcon, t: "Review", d: "Automated NPS & responses" },
  { i: Repeat, t: "Repeat", d: "Personalized re-engagement" },
];

export function Journey() {
  return (
    <section className="relative overflow-hidden bg-surface-elevated py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ink-soft">
            Guest Journey
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-ink md:text-6xl">
            Automate every step,<br />
            <span className="text-gradient-brand">from discovery to loyalty.</span>
          </h2>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent md:block" />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
            {journey.map(({ i: Icon, t, d }, idx) => (
              <div key={t} className="relative text-center">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-2xl border border-border bg-surface shadow-elevated">
                  <Icon className="h-9 w-9 text-secondary" />
                </div>
                <div className="absolute left-1/2 top-12 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-secondary md:block animate-pulse-ring" style={{ animationDelay: `${idx * 0.2}s` }} />
                <h4 className="mt-5 font-semibold text-ink">{t}</h4>
                <p className="mt-1 text-sm text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Revenue growth outcomes -------------------- */
const outcomes = [
  { v: "+42%", l: "Direct bookings", d: "More guests booking on your site, not OTAs." },
  { v: "-31%", l: "OTA commissions", d: "Shift demand to your highest-margin channel." },
  { v: "+18%", l: "Occupancy", d: "AI pricing fills the rooms that used to sit empty." },
  { v: "+0.6", l: "Guest satisfaction", d: "Higher review scores across all platforms." },
];

export function Outcomes() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end justify-between gap-6 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-ink-soft">Revenue Growth</span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-ink md:text-6xl">
              Outcomes you can <span className="text-gradient-brand">measure.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg text-ink-soft md:text-right">
            Average results from 1,200+ properties in their first 12 months on HotelOS.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o) => (
            <div key={o.l} className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-soft">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand opacity-10 blur-2xl" />
              <div className="text-5xl font-bold text-gradient-brand md:text-6xl">{o.v}</div>
              <div className="mt-4 text-base font-semibold text-ink">{o.l}</div>
              <p className="mt-1 text-sm text-ink-soft">{o.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Why hotels switch comparison -------------------- */
const rows = [
  ["Modern, unified data model", false, true],
  ["AI dynamic pricing built-in", false, true],
  ["Native WhatsApp automation", false, true],
  ["Direct booking engine (0% fees)", false, true],
  ["Multi-property group reporting", false, true],
  ["Real-time channel sync (< 1s)", false, true],
  ["Open API & 1,000+ integrations", false, true],
  ["Implementation in days, not months", false, true],
];

export function Comparison() {
  return (
    <section className="relative bg-surface-elevated py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-ink-soft">Why hotels switch</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Traditional PMS vs <span className="text-gradient-brand">HotelOS</span>
          </h2>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated">
          <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-4 border-b border-border bg-surface-elevated px-6 py-5 text-sm font-semibold text-ink-soft">
            <div>Capability</div>
            <div className="text-center">Legacy PMS</div>
            <div className="text-center">HotelOS</div>
          </div>
          {rows.map(([label, legacy, hos], i) => (
            <div
              key={i}
              className={`grid grid-cols-[1.6fr_1fr_1fr] items-center gap-4 px-6 py-4 text-sm ${
                i % 2 ? "bg-surface-elevated/60" : ""
              }`}
            >
              <div className="font-medium text-ink">{label}</div>
              <div className="flex justify-center">
                {legacy ? <Check className="h-5 w-5 text-success" /> : <Minus className="h-5 w-5 text-ink-soft/40" />}
              </div>
              <div className="flex justify-center">
                {hos ? (
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand text-white">
                    <Check className="h-4 w-4" />
                  </span>
                ) : (
                  <Minus className="h-5 w-5 text-ink-soft/40" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
