import { Link } from "@tanstack/react-router";

export function PageHero({
  eyebrow,
  title,
  accent,
  desc,
  image,
  brandName,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  desc?: string;
  image: string;
  brandName?: string;
}) {
  return (
    <section className="shine-box relative -mt-[88px] flex min-h-[70svh] items-end overflow-hidden bg-primary text-primary-foreground">
      <img src={image} alt="" fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover animate-slow-pan" />
      {/** Brand badge (optional) */}
      {brandName && (
        <div aria-hidden className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-sm ring-1 ring-white/15">
          <span className="h-1 w-1 rounded-full bg-accent" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/90">{brandName}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
      <div className="relative mx-auto w-[min(1200px,calc(100%-2rem))] pt-40 pb-16 sm:pb-20">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</span>
        </div>
        <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          {title} {accent && <span className="text-accent">{accent}</span>}
        </h1>
        {desc && <p className="mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/85 sm:text-lg">{desc}</p>}
        <nav className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <span className="text-accent">{eyebrow}</span>
        </nav>
      </div>
    </section>
  );
}
