import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

const products: Array<[string, string, string]> = [
  ["Property Management", "Front office, reservations, folios", "#platform"],
  ["Booking Engine", "Direct, commission-free bookings", "#platform"],
  ["Channel Manager", "200+ OTAs, real-time sync", "#platform"],
  ["AI Revenue", "Dynamic pricing & forecasting", "#solutions"],
  ["Guest Messaging", "WhatsApp, email, in-stay", "#solutions"],
  ["Housekeeping", "Mobile-first task management", "#solutions"],
  ["POS & Restaurant", "F&B, retail, spa, billing", "#platform"],
  ["Analytics", "Group & multi-property BI", "#platform"],
];

const navLinks: Array<[string, string]> = [
  ["Platform", "#platform"],
  ["Solutions", "#solutions"],
  ["Customers", "#customers"],
  ["Pricing", "#pricing"],
  ["Resources", "#resources"],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled
              ? "glass-light shadow-elevated"
              : "border border-white/10 bg-white/5 backdrop-blur-md"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white shadow-glow">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className={`text-lg font-bold tracking-tight ${scrolled ? "text-ink" : "text-white"}`}>
              HotelOS
            </span>
          </Link>

          <div className={`hidden items-center gap-1 md:flex ${scrolled ? "text-ink" : "text-white/90"}`}>
            <div className="relative" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
              <a href="#platform" className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/10 cursor-pointer">
                Platform <ChevronDown className="h-3.5 w-3.5" />
              </a>
              {mega && (
                <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3">
                  <div className="glass-light grid grid-cols-2 gap-1 rounded-2xl p-3 shadow-elevated">
                    {products.map(([t, d, href]) => (
                      <a key={t} href={href} onClick={() => setMega(false)} className="rounded-xl p-3 hover:bg-secondary/5 cursor-pointer">
                        <div className="text-sm font-semibold text-ink">{t}</div>
                        <div className="text-xs text-ink-soft">{d}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {navLinks.slice(1).map(([label, href]) => (
              <a key={label} href={href} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/10 cursor-pointer">{label}</a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a href="#demo" className={`rounded-lg px-3 py-2 text-sm font-medium cursor-pointer ${scrolled ? "text-ink hover:bg-muted" : "text-white/90 hover:bg-white/10"}`}>
              Sign in
            </a>
            <a href="#demo" className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 cursor-pointer">
              Book a Demo
            </a>
          </div>

          <button
            className={`md:hidden ${scrolled ? "text-ink" : "text-white"}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="glass-light mt-2 rounded-2xl p-4 shadow-elevated md:hidden">
            <div className="flex flex-col gap-1 text-ink">
              {navLinks.map(([label, href]) => (
                <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted cursor-pointer">{label}</a>
              ))}
              <a href="#demo" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-brand px-4 py-2.5 text-center text-sm font-semibold text-white cursor-pointer">
                Book a Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
