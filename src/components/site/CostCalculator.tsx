import { useMemo, useState } from "react";
import { Calculator, X, Phone, MessageCircle, Home, Hammer, Building2 } from "lucide-react";
const logoAsset = "/logo.jpg";
const PHONE_TEL = "tel:+923044190190";
const WHATSAPP_NUM = "923044190190";

type PackageKey = "grey" | "finishing" | "turnkey";

const PACKAGES: Record<PackageKey, { label: string; rate: number; blurb: string; icon: React.ComponentType<{ className?: string }> }> = {
  grey: { label: "Grey Structure", rate: 2600, blurb: "60-grade steel, RCC structure, brickwork & plaster.", icon: Building2 },
  finishing: { label: "Finishing", rate: 2400, blurb: "Tiles, paint, woodwork, electrical & plumbing.", icon: Hammer },
  turnkey: { label: "Turnkey (Grey + Finishing)", rate: 5000, blurb: "Complete ready-to-move-in home, premium materials.", icon: Home },
};

const formatPkr = (n: number) => "₨ " + Math.round(n).toLocaleString("en-PK");

export function CostCalculator() {
  const [open, setOpen] = useState(false);
  const [pkg, setPkg] = useState<PackageKey>("grey");
  const [area, setArea] = useState<number>(1500);

  const total = useMemo(() => PACKAGES[pkg].rate * (Number.isFinite(area) ? area : 0), [pkg, area]);
  const advance = total * 0.2;

  const waMessage = encodeURIComponent(
    `Hi Sultan Sons,\n\nI used your cost calculator:\n• Package: ${PACKAGES[pkg].label}\n• Covered Area: ${area} sqft\n• Rate: ₨${PACKAGES[pkg].rate}/sqft\n• Estimated Total: ${formatPkr(total)}\n\nPlease share a detailed quote.`,
  );
  const waHref = `https://wa.me/${WHATSAPP_NUM}?text=${waMessage}`;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open cost calculator"
        className="group fixed bottom-5 left-5 z-[120] flex h-14 items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.85_0.14_80)] via-accent to-[oklch(0.7_0.13_80)] pl-2 pr-4 shadow-[0_12px_36px_-8px_color-mix(in_oklab,var(--accent)_75%,transparent)] ring-2 ring-white/70 transition-transform hover:scale-105 active:scale-95 sm:bottom-6 sm:left-6"
      >
        <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-accent/40" />
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-inner ring-2 ring-white/90">
          <Calculator className="h-5 w-5" strokeWidth={2.6} />
        </span>
        <span className="relative text-left text-[10px] font-black uppercase leading-[1.05] tracking-[0.14em] text-primary-foreground">
          Cost<br />Calculator
        </span>
      </button>

      {open && (
        <div role="dialog" aria-modal="true" onClick={() => setOpen(false)}
             className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/80 px-3 py-6 backdrop-blur-md">
          <div onClick={(e) => e.stopPropagation()}
               className="relative my-auto w-[min(560px,100%)] overflow-hidden rounded-3xl bg-card shadow-2xl ring-1 ring-accent/40">
            <button onClick={() => setOpen(false)} aria-label="Close"
                    className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/20 backdrop-blur-md hover:bg-black/80">
              <X className="h-4 w-4" />
            </button>

            <div className="relative overflow-hidden bg-primary px-5 pb-6 pt-7 text-primary-foreground sm:px-7">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
              <div className="flex items-start gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 ring-2 ring-accent/60 shadow-lg sm:h-16 sm:w-16">
                  <img src={logoAsset} alt="Sultan Sons logo" loading="lazy" decoding="async" className="h-full w-full object-contain" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">Sultan Sons</p>
                  <h2 className="mt-1 text-2xl font-black leading-tight sm:text-3xl">
                    Construction Cost <span className="text-accent">Calculator</span>
                  </h2>
                </div>
              </div>
              <p className="mt-3 max-w-md text-xs text-primary-foreground/75 sm:text-sm">
                Get an instant estimate for your dream home. Choose a package and enter covered area.
              </p>
            </div>

            <div className="space-y-5 p-5 sm:space-y-6 sm:p-7">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-[0.24em] text-muted-foreground">Select Package</label>
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {(Object.keys(PACKAGES) as PackageKey[]).map((key) => {
                    const p = PACKAGES[key]; const Icon = p.icon; const active = pkg === key;
                    return (
                      <button key={key} type="button" onClick={() => setPkg(key)}
                              className={`flex flex-col items-start rounded-2xl border p-3 text-left transition-all ${
                                active ? "border-accent bg-primary text-primary-foreground shadow-lg" : "border-border bg-background hover:border-accent"
                              }`}>
                        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${active ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"}`}>
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="mt-2 text-[11px] font-bold uppercase tracking-wider">{p.label}</span>
                        <span className={`mt-1 text-[11px] font-semibold ${active ? "text-accent" : "text-accent"}`}>₨{p.rate.toLocaleString()}/sqft</span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-xs text-foreground/80">{PACKAGES[pkg].blurb}</p>
              </div>

              <div>
                <label htmlFor="area-input" className="text-[10px] font-bold uppercase tracking-[0.24em] text-muted-foreground">Covered Area (sqft)</label>
                <div className="mt-2 flex items-center gap-3">
                  <input id="area-input" type="number" min={100} max={20000} step={50}
                         value={Number.isFinite(area) ? area : ""}
                         onChange={(e) => setArea(parseInt(e.target.value || "0", 10))}
                         className="w-28 shrink-0 rounded-xl border-2 border-accent/40 bg-background px-3 py-2.5 text-lg font-black text-foreground outline-none focus:border-accent sm:w-32" />
                  <input type="range" min={200} max={10000} step={50}
                         value={Number.isFinite(area) ? area : 0}
                         onChange={(e) => setArea(parseInt(e.target.value, 10))}
                         className="h-2 min-w-0 flex-1 cursor-pointer appearance-none rounded-full bg-secondary accent-[oklch(0.78_0.13_80)]" />
                </div>
                <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
                  <span>1 Marla ≈ 225 sqft</span><span>1 Kanal ≈ 4500 sqft</span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-primary p-5 text-primary-foreground ring-1 ring-accent/30">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/25 blur-3xl" />
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">Estimated Total</p>
                <p className="mt-1 text-3xl font-black leading-none sm:text-4xl">{formatPkr(total)}</p>
                <p className="mt-1 text-[11px] text-primary-foreground/70">{area || 0} sqft × ₨{PACKAGES[pkg].rate}/sqft</p>
                <div className="mt-3 flex items-center justify-between border-t border-primary-foreground/15 pt-3 text-xs">
                  <span className="text-primary-foreground/70">Booking Advance (20%)</span>
                  <span className="font-bold text-accent">{formatPkr(advance)}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <a href={waHref} target="_blank" rel="noopener noreferrer"
                   className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground shadow-lg hover:scale-[1.02] sm:text-sm">
                  <MessageCircle className="h-4 w-4" /> Get Detailed Quote
                </a>
                <a href={PHONE_TEL}
                   className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground shadow-lg ring-1 ring-accent/40 hover:scale-[1.02] sm:text-sm">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
              <p className="text-center text-[10px] text-muted-foreground">
                * Estimates are indicative. Final cost depends on design, site &amp; material selection.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
