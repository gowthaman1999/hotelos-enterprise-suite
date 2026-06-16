import {
  TrendingUp, DollarSign, BedDouble, Globe, Star, BarChart3, ArrowUpRight, Sparkles,
} from "lucide-react";

function Metric({
  icon: Icon, label, value, delta, accent = "text-secondary",
}: { icon: any; label: string; value: string; delta: string; accent?: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center justify-between">
        <div className={`grid h-8 w-8 place-items-center rounded-lg bg-white/5 ${accent}`}>
          <Icon className="h-4 w-4" />
        </div>
        <span className="rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-semibold text-success">
          {delta}
        </span>
      </div>
      <div className="mt-3 text-2xl font-bold text-white tracking-tight">{value}</div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  );
}

const bars = [42, 58, 49, 71, 63, 80, 74, 92, 85, 96, 88, 100];

export function DashboardMock() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-8 bg-brand opacity-30 blur-3xl" aria-hidden />
      <div className="relative rounded-2xl border border-white/10 bg-[oklch(0.21_0.05_265)] p-1 shadow-glow">
        {/* window chrome */}
        <div className="flex items-center justify-between rounded-t-xl bg-white/[0.03] px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="text-[11px] text-white/40">app.hotelos.com / overview</div>
          <div className="text-[11px] text-white/40">⌘K</div>
        </div>
        <div className="rounded-b-xl bg-[oklch(0.18_0.05_265)] p-5">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs text-white/50">Group Overview · 14 properties</div>
              <div className="text-base font-semibold text-white">Aurora Hotels & Resorts</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">
                Last 30 days
              </div>
              <div className="rounded-lg bg-brand px-2.5 py-1 text-[11px] font-semibold text-white">
                Live
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            <Metric icon={BedDouble} label="Occupancy" value="92.4%" delta="+6.1%" accent="text-accent" />
            <Metric icon={DollarSign} label="Revenue (MTD)" value="$1.84M" delta="+18.3%" />
            <Metric icon={Globe} label="Direct Bookings" value="47%" delta="+9.4%" accent="text-success" />
            <Metric icon={TrendingUp} label="ADR" value="$412" delta="+4.7%" />
            <Metric icon={BarChart3} label="RevPAR" value="$381" delta="+11.2%" accent="text-accent" />
            <Metric icon={Star} label="Guest Satisfaction" value="4.92" delta="+0.18" accent="text-success" />
          </div>

          {/* Chart + AI insight */}
          <div className="mt-4 grid gap-3 md:grid-cols-5">
            <div className="md:col-span-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/50">Revenue vs Forecast</div>
                  <div className="text-sm font-semibold text-white">Pacing 118% to target</div>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-white/60">
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-secondary" /> Actual</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-white/30" /> Forecast</span>
                </div>
              </div>
              <div className="flex h-36 items-end gap-1.5">
                {bars.map((h, i) => (
                  <div key={i} className="flex-1">
                    <div
                      className="rounded-t bg-gradient-to-t from-secondary to-accent"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 rounded-xl border border-accent/20 bg-gradient-to-br from-secondary/15 to-accent/10 p-4">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-accent">
                <Sparkles className="h-3 w-3" /> AI REVENUE
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                Raise weekend ADR by $36 at Aurora Bali — projected +$28,400 next 14 days.
              </div>
              <div className="mt-3 flex items-center gap-2">
                <button className="rounded-lg bg-white text-ink px-3 py-1.5 text-xs font-semibold">
                  Apply <ArrowUpRight className="ml-0.5 inline h-3 w-3" />
                </button>
                <button className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-white/80">
                  Review
                </button>
              </div>
              <div className="mt-4 space-y-2 text-[11px] text-white/60">
                <div className="flex justify-between"><span>Forecast confidence</span><span className="text-white">96%</span></div>
                <div className="flex justify-between"><span>Channels affected</span><span className="text-white">9</span></div>
                <div className="flex justify-between"><span>Risk score</span><span className="text-success">Low</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat card */}
      <div className="animate-float absolute -left-6 bottom-12 hidden w-56 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-glow backdrop-blur-xl md:block">
        <div className="text-[11px] text-white/60">Direct booking surge</div>
        <div className="mt-1 text-xl font-bold text-white">+42%</div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-success to-accent" />
        </div>
        <div className="mt-2 text-[11px] text-white/50">vs OTAs · this quarter</div>
      </div>
    </div>
  );
}
