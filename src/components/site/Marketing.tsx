import { useMemo, useState, type FormEvent } from "react";
import { Star, ChevronDown, Check, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

/* -------------------- Testimonials -------------------- */
const tms = [
  {
    q: "BlackStone AI replaced four legacy tools across our 38 properties in three months. RevPAR is up 22%.",
    n: "Élise Marchand", r: "VP Operations, Maison d'Or Hotels", c: "Paris · 38 properties",
  },
  {
    q: "The AI pricing engine alone pays for the platform every month. Direct bookings went from 22% to 51%.",
    n: "Rohan Mehta", r: "Revenue Director, Aurora Resorts", c: "Bali · 12 properties",
  },
  {
    q: "Our guest satisfaction score moved from 4.6 to 4.9 once WhatsApp automation went live. Game changer.",
    n: "Sofia Bernal", r: "Guest Experience Lead, Atelier Collection", c: "Mexico City · 22 properties",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-ink-soft">Loved by leading hotel groups</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-ink md:text-6xl">
            From boutique houses<br />to <span className="text-gradient-brand">global brands.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {tms.map((t, i) => (
            <figure
              key={i}
              className="relative flex flex-col rounded-3xl border border-border bg-surface p-8 shadow-soft"
            >
              <div className="flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-5 text-lg font-medium leading-snug tracking-tight text-ink">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                  {t.n.split(" ").map(s => s[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{t.n}</div>
                  <div className="text-xs text-ink-soft">{t.r}</div>
                  <div className="text-[11px] text-ink-soft/70">{t.c}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- ROI Calculator -------------------- */
export function ROI() {
  const [rooms, setRooms] = useState(120);
  const [adr, setAdr] = useState(280);
  const [occ, setOcc] = useState(72);

  const { current, projected, gain } = useMemo(() => {
    const days = 365;
    const baseRev = rooms * (occ / 100) * adr * days;
    const lift = 1 + 0.18; // 18% uplift average
    const newOcc = Math.min(95, occ + 8);
    const newAdr = adr * 1.07;
    const newRev = rooms * (newOcc / 100) * newAdr * days;
    return {
      current: baseRev,
      projected: newRev,
      gain: newRev - baseRev,
    };
  }, [rooms, adr, occ]);

  const fmt = (n: number) => "$" + Math.round(n).toLocaleString();

  return (
    <section className="relative bg-[oklch(0.155_0.04_265)] py-32 text-white">
      <div className="bg-mesh absolute inset-0 opacity-80" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
            <Sparkles className="h-3 w-3" /> ROI Calculator
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            See your revenue lift <span className="text-gradient">in real time.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-glow md:p-12 lg:grid-cols-2">
          <div className="space-y-8">
            <Range label="Rooms across portfolio" v={rooms} setV={setRooms} min={20} max={1000} step={10} suffix="" />
            <Range label="Average daily rate (ADR)" v={adr} setV={setAdr} min={80} max={1200} step={10} suffix="$" prefix />
            <Range label="Current occupancy" v={occ} setV={setOcc} min={30} max={95} step={1} suffix="%" />
          </div>

          <div className="rounded-2xl border border-white/10 bg-[oklch(0.21_0.05_265)] p-8">
            <div className="text-xs uppercase tracking-widest text-white/50">Projected with BlackStone AI</div>
            <div className="mt-3 text-5xl font-bold text-gradient md:text-6xl">{fmt(gain)}</div>
            <div className="mt-1 text-sm text-white/60">Additional annual revenue</div>

            <div className="mt-8 space-y-3 text-sm">
              <Row k="Current annual revenue" v={fmt(current)} />
              <Row k="Projected annual revenue" v={fmt(projected)} highlight />
              <Row k="Avg revenue per room (gain)" v={fmt(gain / rooms)} />
            </div>

            <a href="#demo" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-ink cursor-pointer hover:opacity-95">
              Book a tailored revenue audit <ArrowRight className="h-4 w-4" />
            </a>
            <div className="mt-3 text-center text-[11px] text-white/40">
              Based on average 18% revenue lift across 1,200+ BlackStone AI customers.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Range({
  label, v, setV, min, max, step, suffix = "", prefix = false,
}: { label: string; v: number; setV: (n: number) => void; min: number; max: number; step: number; suffix?: string; prefix?: boolean }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-white/80">{label}</label>
        <div className="text-2xl font-bold text-white">{prefix ? suffix : ""}{v.toLocaleString()}{!prefix ? suffix : ""}</div>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={v}
        onChange={(e) => setV(Number(e.target.value))}
        className="mt-3 w-full accent-[oklch(0.74_0.13_207)]"
      />
      <div className="mt-1 flex justify-between text-[11px] text-white/40">
        <span>{prefix ? suffix : ""}{min}</span>
        <span>{prefix ? suffix : ""}{max}{!prefix ? suffix : ""}</span>
      </div>
    </div>
  );
}

function Row({ k, v, highlight = false }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div className={`flex items-center justify-between rounded-lg px-3 py-2.5 ${highlight ? "bg-success/10 text-success" : "bg-white/[0.03] text-white/70"}`}>
      <span>{k}</span>
      <span className="font-semibold">{v}</span>
    </div>
  );
}

/* -------------------- Pricing -------------------- */
const plans = [
  {
    n: "Boutique", p: "$199", per: "/property/month",
    d: "For independent hotels & boutique stays.",
    f: ["Up to 50 rooms", "PMS + Booking Engine", "Channel Manager (50 OTAs)", "WhatsApp messaging", "Standard analytics"],
    cta: "Start free trial",
  },
  {
    n: "Group", p: "$449", per: "/property/month",
    d: "For multi-property hotel groups.",
    f: ["Unlimited rooms", "Everything in Boutique", "AI Revenue & forecasting", "POS, Spa & F&B", "Group reporting & BI", "Priority support"],
    cta: "Book a demo", popular: true,
  },
  {
    n: "Enterprise", p: "Custom", per: "",
    d: "For chains, resorts & vacation rental brands.",
    f: ["100+ properties", "Dedicated success team", "Custom SLAs & SSO", "Open API & on-prem", "White-label options"],
    cta: "Talk to sales",
  },
];

export function Pricing() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-ink-soft">Pricing</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-ink md:text-6xl">
            Simple pricing.<br /><span className="text-gradient-brand">Built to scale.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-soft">Per property. No setup fees. Cancel any time.</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.n}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                p.popular
                  ? "border-secondary/30 bg-[oklch(0.155_0.04_265)] text-white shadow-glow"
                  : "border-border bg-surface text-ink shadow-soft"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-white">
                  MOST POPULAR
                </span>
              )}
              <div className={`text-sm font-semibold uppercase tracking-widest ${p.popular ? "text-accent" : "text-ink-soft"}`}>{p.n}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">{p.p}</span>
                <span className={p.popular ? "text-white/60" : "text-ink-soft"}>{p.per}</span>
              </div>
              <p className={`mt-3 text-sm ${p.popular ? "text-white/70" : "text-ink-soft"}`}>{p.d}</p>

              <a href="#demo" className={`mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold cursor-pointer hover:opacity-95 ${
                p.popular ? "bg-white text-ink" : "bg-ink text-white"
              }`}>
                {p.cta} <ArrowRight className="h-4 w-4" />
              </a>

              <ul className="mt-8 space-y-3 text-sm">
                {p.f.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.popular ? "text-accent" : "text-success"}`} />
                    <span className={p.popular ? "text-white/85" : "text-ink"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FAQ -------------------- */
const faq = [
  ["How long does implementation take?", "Most independent hotels are live in 5–10 days. Multi-property groups typically go live property-by-property over 4–8 weeks with a dedicated implementation manager."],
  ["Can we migrate from our current PMS?", "Yes. We've built migration tooling for the 30+ most common PMS platforms — reservations, guest history, rate plans and folios come across cleanly."],
  ["Does BlackStone AI connect to Booking.com, Expedia and Airbnb?", "Yes — and 200+ more channels through our certified Channel Manager, with sub-second sync."],
  ["Is the AI revenue engine optional?", "AI pricing is included in Group and Enterprise plans. You can run it in advisory mode and approve every change, or let it operate autonomously."],
  ["What about data security and compliance?", "BlackStone AI is SOC 2 Type II, PCI-DSS Level 1, GDPR and ISO 27001 certified. Data is encrypted at rest and in transit."],
  ["Do you support multi-property and multi-currency?", "Yes — group reporting, cross-property guest profiles, multi-currency and multi-language are native to the platform."],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-surface-elevated py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-ink-soft">FAQ</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Answers, before you ask.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faq.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-ink md:text-lg">{q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-ink-soft transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <div className="px-6 pb-6 text-ink-soft">{a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Contact / Demo CTA + Footer -------------------- */
export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "");
    if (!email) {
      toast.error("Please provide a work email so we can reach you.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Demo request received", {
        description: `We'll be in touch at ${email} within 1 business day.`,
      });
      form.reset();
      setSubmitting(false);
    }, 700);
  };

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[oklch(0.155_0.04_265)]" aria-hidden />
      <div className="bg-mesh absolute inset-0 opacity-100" aria-hidden />
      <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-white">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
              Book a demo
            </span>
            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              See BlackStone AI,<br /><span className="text-gradient">tailored to your portfolio.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-white/70">
              A 30-minute working session with a hospitality specialist — we'll model your revenue lift and walk through the platform live.
            </p>
            <ul className="mt-8 space-y-3 text-white/85">
              {["Custom revenue projection", "Property-by-property migration plan", "Pricing tailored to your portfolio"].map(t => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 shadow-glow">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="First name" name="firstName" required />
              <Field label="Last name" name="lastName" required />
              <Field label="Work email" name="email" type="email" required />
              <Field label="Hotel group" name="group" />
              <Field label="Properties" name="properties" placeholder="e.g. 12" />
              <Field label="Country" name="country" />
            </div>
            <Field label="Tell us about your operation" name="notes" textarea />
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-ink cursor-pointer transition hover:opacity-95 disabled:opacity-60"
            >
              {submitting ? "Scheduling…" : "Schedule my demo"} <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-[11px] text-white/50">
              We'll respond within 1 business day. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", textarea = false, placeholder, required,
}: { label: string; name: string; type?: string; textarea?: boolean; placeholder?: string; required?: boolean }) {
  const cls =
    "w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
  return (
    <label className={`block ${textarea ? "mt-4" : ""}`}>
      <span className="mb-1.5 block text-xs font-medium text-white/70">{label}{required && <span className="text-accent"> *</span>}</span>
      {textarea ? (
        <textarea name={name} rows={3} placeholder={placeholder} required={required} className={cls} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} required={required} className={cls} />
      )}
    </label>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-elevated py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold text-ink">BlackStone AI</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-ink-soft">
              The operating system for modern hospitality. Built for luxury hotels, resorts, boutique properties and vacation rentals worldwide.
            </p>
          </div>
          {([
            ["Platform", [["PMS", "#platform"], ["Booking Engine", "#platform"], ["Channel Manager", "#platform"], ["AI Revenue", "#solutions"], ["Guest Messaging", "#solutions"]]],
            ["Company", [["About", "#customers"], ["Customers", "#customers"], ["Careers", "#demo"], ["Newsroom", "#customers"], ["Contact", "#demo"]]],
            ["Resources", [["Docs", "#resources"], ["Blog", "#resources"], ["Help center", "#resources"], ["Security", "#resources"], ["Status", "#resources"]]],
          ] as Array<[string, Array<[string, string]>]>).map(([t, items]) => (
            <div key={t}>
              <div className="text-sm font-semibold text-ink">{t}</div>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                {items.map(([label, href]) => <li key={label}><a href={href} className="hover:text-ink cursor-pointer">{label}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-ink-soft md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} BlackStone AI Inc. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <span>SOC 2 Type II</span>
            <span>PCI-DSS L1</span>
            <span>ISO 27001</span>
            <span>GDPR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
