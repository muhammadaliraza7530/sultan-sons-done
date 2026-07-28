import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Building2, HardHat, Ruler, Hammer, Layers, KeyRound,
  MapPin, Phone, Target, Eye, Gem, Check,
} from "lucide-react";

const ceoPortrait = "/ceo-portrait.jpg";
const hero1 = "/hero-1.jpg";
const hero2 = "/hero-2.jpg";
const hero3 = "/hero-3.jpg";
const hero4 = "/hero-4.jpg";
const villaDha = "/villa-dha-1.jpg";
const villaSpanish = "/villa-spanish-bahria.jpg";
const villaDusk = "/villa-dusk.jpg";
const villaInterior = "/villa-interior.jpg";
const villa1 = "/spanish-villa-1.jpg";
const villa2 = "/spanish-villa-2.jpg";
const realP1 = "/real-project-1.jpg";
const realP2 = "/real-project-2.jpg";
const realP3 = "/real-project-3.jpg";
const realP4 = "/real-project-4.jpg";
const realP5 = "/real-project-5.jpg";
const realP6 = "/real-project-6.jpg";
const realP7 = "/real-project-7.jpg";
import { CountOnView } from "@/components/site/CountUpStat";
import { MovingGallery } from "@/components/site/MovingGallery";
import { WhyChooseCarousel } from "@/components/site/WhyChooseCarousel";
import { BrandSection } from "@/components/site/BrandSection";
import { TeamSection } from "@/components/site/TeamSection";

const WHATSAPP = "https://wa.me/923277314000";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sultan Sons Estate & Builders — Premium Construction & Real Estate in Pakistan" },
      { name: "description", content: "Sultan Sons Estate & Builders — 10+ years delivering premium construction, architecture, interiors and real estate across Pakistan." },
      { property: "og:title", content: "Sultan Sons Estate & Builders" },
      { property: "og:description", content: "Contemporary architecture, luxury interiors and turnkey construction across Pakistan." },
    ],
    links: [
      { rel: "preload", as: "image", href: hero1 },
    ],
  }),
});

const heroSlides = [
  { img: hero1, kind: "welcome" as const, eyebrow: "Welcome to",
    desc: "A full-service construction & real-estate firm — architecture, interiors, grey structure and turnkey delivery across Pakistan." },
  { img: hero4, kind: "standard" as const, eyebrow: "Modern Architecture · Pakistan", titleLead: "Designer villas with", titleAccent: "signature craftsmanship.",
    desc: "Ten years of premium residential and commercial delivery — from luxury bungalows to iconic estates." },
  { img: hero2, kind: "standard" as const, eyebrow: "Turnkey Delivery", titleLead: "From blueprint", titleAccent: "to the keys in your hand.",
    desc: "Architecture, grey structure, finishing and interiors — one accountable team from concept to handover." },
  { img: hero3, kind: "standard" as const, eyebrow: "Interiors & Finishing", titleLead: "Curated interiors,", titleAccent: "flawless finishing.",
    desc: "Premium materials, textures and lighting — interiors your family will love for decades." },
];

const services = [
  { Icon: Building2, img: villaDha, title: "Construction", desc: "Full-scale residential, commercial & industrial construction with strict quality control from foundation to finishing." },
  { Icon: Ruler, img: realP1, title: "Architecture Design", desc: "Bespoke architectural blueprints combining functional living with iconic modern form." },
  { Icon: Hammer, img: realP4, title: "Renovation & Upgrades", desc: "Bring new life to existing homes and commercial spaces with premium modern upgrades." },
  { Icon: Layers, img: villaInterior, title: "Interior Design", desc: "Curated interiors that reflect identity through premium materials, textures and lighting." },
  { Icon: HardHat, img: villaSpanish, title: "Project Supervision", desc: "End-to-end planning, coordination and supervision — delivered on schedule and on budget." },
  { Icon: KeyRound, img: villaDusk, title: "Turnkey Delivery", desc: "Complete design-to-handover package. You share the vision, we deliver the keys." },
];

const whyUs = [
  { title: "10+ Years of Trust", desc: "A decade of on-time, quality delivery across Pakistan." },
  { title: "Complete Solutions", desc: "Architecture, construction, interiors & real estate under one roof." },
  { title: "Client-Centered", desc: "Transparent planning, communication and delivery at every step." },
  { title: "Quality Without Compromise", desc: "Top-grade materials and modern engineering standards." },
  { title: "On-Time Delivery", desc: "Milestone-driven project management, no missed deadlines." },
  { title: "Proven Portfolio", desc: "A growing list of satisfied clients and delivered landmarks." },
];

const gallery = [
  { src: realP1, alt: "Three-story residential estate under construction" },
  { src: realP2, alt: "Modern house with grand window openings" },
  { src: realP3, alt: "Contemporary bungalow against clear sky" },
  { src: villaDha, alt: "Modern DHA-style luxury villa" },
  { src: realP5, alt: "Nearly finished modern two-story home" },
  { src: villaSpanish, alt: "Spanish-style villa with arches" },
];

const movingImages = [
  { src: realP1, alt: "Estate under construction" },
  { src: realP2, alt: "Modern facade" },
  { src: realP3, alt: "Bungalow build" },
  { src: realP4, alt: "Arched Spanish detail" },
  { src: realP5, alt: "Finished modern home" },
  { src: realP6, alt: "Front elevation" },
  { src: realP7, alt: "Site progress" },
  { src: villa1, alt: "Spanish villa" },
  { src: villa2, alt: "Luxury villa exterior" },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-accent" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">{children}</span>
    </div>
  );
}

function Index() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="shine-box relative -mt-[88px] flex min-h-[100svh] items-center overflow-hidden bg-primary text-primary-foreground">
        {heroSlides.map((s, i) => (
          <img
            key={s.img}
            src={s.img}
            alt={s.eyebrow}
            loading={i === 0 ? "eager" : "lazy"}
            decoding={i === 0 ? "sync" : "async"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
              i === slide ? "opacity-100 animate-slow-pan" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-primary/35" />

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setSlide(i)}
              className={`h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-accent" : "w-4 bg-primary-foreground/40"}`}
            />
          ))}
        </div>

        <div className="relative mx-auto w-[min(1200px,calc(100%-2rem))] pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
            <div aria-hidden className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-sm ring-1 ring-white/15">
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/90">Sultan Sons</span>
            </div>
          {heroSlides.map((s, i) => (
            <div
              key={s.img}
              aria-hidden={i !== slide}
              className={`transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                i === slide ? "relative opacity-100 translate-y-0" : "pointer-events-none absolute inset-x-0 opacity-0 translate-y-3"
              }`}
            >
              {s.kind === "welcome" ? (
                <>
                  <div className="flex justify-center"><Eyebrow>{s.eyebrow}</Eyebrow></div>
                  <h1 className="mx-auto mt-5 max-w-5xl leading-[0.95] tracking-tight">
                    <span className="block text-[0.75rem] font-semibold uppercase tracking-[0.4em] text-primary-foreground/70 sm:text-sm">
                      Welcome to
                    </span>
                    <span className={`mt-3 block font-display text-[2.5rem] font-black uppercase tracking-tight text-accent sm:text-7xl md:text-8xl lg:text-[8.5rem] ${i === slide ? "animate-reveal-io" : ""}`}
                          style={{ textShadow: "0 0 40px color-mix(in oklab, var(--accent) 45%, transparent)" }}>
                      Sultan Sons
                    </span>
                    <span className="mt-3 block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-primary-foreground/85 sm:text-xs md:text-sm">
                      Real Estate &amp; Builders
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-primary-foreground/85 sm:text-lg">{s.desc}</p>
                </>
              ) : (
                <>
                  <div className="flex justify-center"><Eyebrow>{s.eyebrow!}</Eyebrow></div>
                  <h1 className="mx-auto mt-5 max-w-4xl text-[1.75rem] font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    {s.titleLead}<span className="block text-accent sm:inline"> {s.titleAccent}</span>
                  </h1>
                  <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-primary-foreground/85 sm:text-lg">{s.desc}</p>
                </>
              )}
            </div>
          ))}

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a href="#projects"
               className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent/90">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
               className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary-foreground/30 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary-foreground/10">
              Request Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 mx-auto -mt-14 w-[min(1200px,calc(100%-2rem))] sm:-mt-20">
        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {[["120+", "Projects Delivered"], ["10", "Years Experience"], ["100%", "Client Satisfaction"]].map(([n, l]) => (
            <div key={l} className="shine-box group relative overflow-hidden rounded-2xl border border-border bg-card px-4 py-5 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.6)] transition-all hover:-translate-y-0.5 hover:border-accent/60 sm:rounded-3xl sm:px-7 sm:py-8">
              <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/20 blur-2xl opacity-60 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              <div className="relative font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                <CountOnView value={n} threshold={0.25} />
              </div>
              <div className="relative mt-2 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CEO Message */}
      <section id="about" className="mx-auto mt-24 w-[min(1200px,calc(100%-2rem))] sm:mt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center"><Eyebrow>From the Desk of the CEO</Eyebrow></div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            A message from<span className="text-accent"> our founder.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
          <div className="group relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-xl">
            <span aria-hidden className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--accent)_35%,transparent),transparent_70%)] blur-2xl animate-pulse" />
            <div className="shine-box relative block w-full overflow-hidden rounded-[1.5rem] border border-accent/40 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.7)]">
              <span className="pointer-events-none absolute left-0 top-0 z-[3] h-10 w-10 rounded-tl-[1.5rem] border-l-2 border-t-2 border-accent/80" />
              <span className="pointer-events-none absolute right-0 top-0 z-[3] h-10 w-10 rounded-tr-[1.5rem] border-r-2 border-t-2 border-accent/80" />
              <span className="pointer-events-none absolute bottom-0 left-0 z-[3] h-10 w-10 rounded-bl-[1.5rem] border-b-2 border-l-2 border-accent/80" />
              <span className="pointer-events-none absolute bottom-0 right-0 z-[3] h-10 w-10 rounded-br-[1.5rem] border-b-2 border-r-2 border-accent/80" />
              <img src={ceoPortrait} alt="Sultan Sons — CEO" loading="lazy" decoding="async" width={1200} height={1500} className="relative z-[1] block h-auto w-full object-contain" />
            </div>
            <div className="relative z-[4] mx-auto mt-6 w-fit rounded-full border border-accent/40 bg-card/70 px-5 py-2 text-center backdrop-blur">
              <p className="text-sm font-semibold tracking-wide text-accent sm:text-base">Founder &amp; CEO</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Sultan Sons Estate &amp; Builders</p>
            </div>
          </div>

          <article className="shine-box relative overflow-hidden rounded-2xl border border-border bg-card p-7 sm:rounded-3xl sm:p-9 lg:p-10">
            <span aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <div className="text-6xl font-serif leading-none text-accent/60">“</div>
              <p className="mt-2 text-base leading-relaxed text-foreground/90 sm:text-lg">
                For over a decade, Sultan Sons has stood for one thing — trust. Every wall we raise
                and every finish we approve is a promise kept to a family who entrusted us with their
                life's biggest investment.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/90 sm:text-lg">
                Our architects, engineers and craftsmen share one belief: quality is not a feature,
                it is the foundation. From the first blueprint to handover day, you will always know
                exactly where your project stands.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/90 sm:text-lg">
                Thank you for considering Sultan Sons. It would be a privilege to build with you.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-10 bg-accent/60" />
                <p className="text-sm font-semibold">
                  <span className="text-accent">Founder &amp; CEO</span>
                  <span className="text-muted-foreground"> — Sultan Sons Estate &amp; Builders</span>
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Moving gallery */}
      <div id="projects" className="mt-20 sm:mt-28">
        <MovingGallery images={movingImages} />
      </div>

      {/* Mission / Vision / Values */}
      <section className="mx-auto mt-24 w-[min(1200px,calc(100%-2rem))] sm:mt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center"><Eyebrow>Our Foundation</Eyebrow></div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The principles that<span className="text-accent"> build every project.</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            More than concrete and steel — Sultan Sons is built on a clear promise to our clients across Pakistan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {[
            { Icon: Target, tag: "Mission", grad: "linear-gradient(135deg,#f59e0b,#ef4444)", title: "Deliver homes that outlast trends.",
              desc: "Engineer contemporary residences and commercial spaces that pair uncompromising build quality with timeless design — on time, on budget.",
              points: ["Premium-grade materials only", "Transparent milestone pricing", "Owner-supervised site quality"] },
            { Icon: Eye, tag: "Vision", grad: "linear-gradient(135deg,#38bdf8,#6366f1)", title: "Set a new standard for Pakistani construction.",
              desc: "Be the most trusted name in modern architecture — where clients approve every façade, interior and finish long before ground is broken.",
              points: ["Design-first workflow", "Nationwide delivery network", "Turnkey accountability"] },
            { Icon: Gem, tag: "Values", grad: "linear-gradient(135deg,#34d399,#0ea5e9)", title: "Standards built into every wall.",
              desc: "Integrity in our costing. Craftsmanship in our finish. Respect for every family whose home we are entrusted with.",
              points: ["Integrity in every estimate", "Craftsmanship over speed", "Client-first communication"] },
          ].map(({ Icon, tag, grad, title, desc, points }) => (
            <article key={tag}
                     className="shine-box group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/80 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_55%,transparent),0_25px_60px_-20px_color-mix(in_oklab,var(--accent)_45%,transparent)] sm:rounded-3xl sm:p-9">

              <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/25 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all duration-500 group-hover:via-accent" />
              <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all duration-500 group-hover:via-accent" />
              <span className="pointer-events-none absolute left-0 top-0 h-8 w-8 rounded-tl-2xl border-l-2 border-t-2 border-accent/0 transition-all duration-500 group-hover:border-accent sm:rounded-tl-3xl" />
              <span className="pointer-events-none absolute right-0 top-0 h-8 w-8 rounded-tr-2xl border-r-2 border-t-2 border-accent/0 transition-all duration-500 group-hover:border-accent sm:rounded-tr-3xl" />
              <span className="pointer-events-none absolute left-0 bottom-0 h-8 w-8 rounded-bl-2xl border-l-2 border-b-2 border-accent/0 transition-all duration-500 group-hover:border-accent sm:rounded-bl-3xl" />
              <span className="pointer-events-none absolute right-0 bottom-0 h-8 w-8 rounded-br-2xl border-r-2 border-b-2 border-accent/0 transition-all duration-500 group-hover:border-accent sm:rounded-br-3xl" />

              <div className="relative flex items-center justify-between">
                <span
                  className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-[0_14px_35px_-12px_rgba(0,0,0,0.65)] ring-1 ring-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundImage: grad }}
                >
                  <span aria-hidden className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/35 to-transparent" />
                  <Icon className="relative h-8 w-8 text-white drop-shadow" strokeWidth={2} />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">{tag}</span>
              </div>

              <h3 className="relative mt-6 font-display text-xl font-bold leading-snug sm:text-2xl">{title}</h3>
              <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>

              <ul className="relative mt-6 space-y-2.5 border-t border-border pt-5">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/80">
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 ring-1 ring-accent/40">
                      <Check className="h-2.5 w-2.5 text-accent" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Services — editorial bento */}
      <section id="services" className="mx-auto mt-28 w-[min(1200px,calc(100%-2rem))] p-6 sm:p-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 pb-10 sm:flex sm:flex-wrap sm:justify-between">
          <div className="min-w-0">
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="mt-4 text-xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Everything from concept<br className="hidden sm:block" /> <span className="text-accent">to handover.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Six disciplines. One accountable studio. Every stage engineered with the precision of a boutique atelier.
            </p>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer"
             className="group inline-flex shrink-0 items-center gap-2 border-b border-accent/50 pb-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent hover:border-accent">
            Book Call <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {services.map(({ Icon, img, title }, idx) => {
            const layout = ["lg:col-span-7 lg:row-span-2", "lg:col-span-5", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"][idx];
            const isFeatured = idx === 0;
            return (
              <article key={title} className={`shine-box group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/80 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_55%,transparent),0_25px_60px_-20px_color-mix(in_oklab,var(--accent)_45%,transparent)] ${layout}`}>
                <span className="pointer-events-none absolute left-0 top-0 z-[3] h-8 w-8 rounded-tl-[1.5rem] border-l-2 border-t-2 border-accent/0 transition-all duration-500 group-hover:border-accent" />
                <span className="pointer-events-none absolute right-0 top-0 z-[3] h-8 w-8 rounded-tr-[1.5rem] border-r-2 border-t-2 border-accent/0 transition-all duration-500 group-hover:border-accent" />
                <span className="pointer-events-none absolute left-0 bottom-0 z-[3] h-8 w-8 rounded-bl-[1.5rem] border-l-2 border-b-2 border-accent/0 transition-all duration-500 group-hover:border-accent" />
                <span className="pointer-events-none absolute right-0 bottom-0 z-[3] h-8 w-8 rounded-br-[1.5rem] border-r-2 border-b-2 border-accent/0 transition-all duration-500 group-hover:border-accent" />
                <span className="pointer-events-none absolute -right-10 -top-10 z-[2] h-40 w-40 rounded-full bg-accent/30 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className={`relative overflow-hidden ${isFeatured ? "aspect-[4/5] lg:aspect-auto lg:flex-1" : "aspect-[16/10]"}`}>
                  <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.06]" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent" />
                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-background/90 shadow-lg ring-1 ring-accent/25 backdrop-blur-md">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.9} />
                  </div>
                  <div className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-sm ring-1 ring-white/15">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/90">Sultan Sons</span>
                  </div>

                  {isFeatured && (
                    <div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground">
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h3>
                    </div>
                  )}
                </div>

                {!isFeatured && (
                  <div className="relative flex flex-1 flex-col justify-center gap-3 p-6">
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{title}</h3>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Why us carousel */}
      <section className="shine-box mx-auto mt-28 w-[min(1200px,calc(100%-2rem))] p-6 sm:p-10">
        <Eyebrow>Why Sultan Sons</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Why families across Pakistan choose us.
        </h2>
        <WhyChooseCarousel items={whyUs} />
      </section>

      {/* Gallery grid */}
      <section className="shine-box mx-auto mt-28 w-[min(1200px,calc(100%-2rem))] p-6 sm:p-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 border-b border-border pb-8 sm:flex sm:flex-wrap sm:justify-between">
          <div className="min-w-0">
            <Eyebrow>Signature Work</Eyebrow>
            <h2 className="mt-4 text-xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Modern homes,<br className="hidden sm:block" /> <span className="text-accent">luxury interiors &amp; more.</span>
            </h2>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer"
             className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent hover:text-accent/80">
            Full Portfolio <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((img, i) => (
            <figure key={img.alt}
                    style={{ animationDelay: `${i * 140}ms` }}
                    className="animate-tile-in shine-box group relative overflow-hidden rounded-2xl bg-primary ring-1 ring-border transition-all hover:ring-accent hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_60%,transparent),0_25px_60px_-20px_color-mix(in_oklab,var(--accent)_50%,transparent)]">
              <span className="pointer-events-none absolute -right-10 -top-10 z-[2] h-40 w-40 rounded-full bg-accent/25 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="pointer-events-none absolute left-0 top-0 z-[3] h-8 w-8 rounded-tl-2xl border-l-2 border-t-2 border-accent/0 transition-all duration-500 group-hover:border-accent" />
              <span className="pointer-events-none absolute right-0 bottom-0 z-[3] h-8 w-8 rounded-br-2xl border-r-2 border-b-2 border-accent/0 transition-all duration-500 group-hover:border-accent" />
              <img src={img.src} alt={img.alt} loading="lazy"
                   className="animate-ken-drift aspect-[4/3] w-full object-cover object-center transition-transform duration-[900ms]"
                   style={{ animationDelay: `${i * 900}ms` }} />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 z-[4] translate-y-2 p-5 text-primary-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium">{img.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="shine-box mx-auto mt-28 w-[min(1200px,calc(100%-2rem))] p-6 sm:p-10">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 text-primary-foreground sm:rounded-3xl sm:px-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Eyebrow>Start Your Project</Eyebrow>
              <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to build your dream home?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Book a free consultation with our team. Get clear answers, transparent pricing and a realistic timeline for your project.
              </p>
            </div>
            <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-primary-foreground/15">
              <ul className="space-y-4 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
09,Jasmine, 1st Roundabout, Park View City Lahore
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  0327 7314000 · Mon – Sat, 10 AM to 7 PM
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={WHATSAPP} target="_blank" rel="noreferrer"
                   className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent/90">
                  WhatsApp Now
                </a>
                <a href="tel:+923277314000"
                   className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary-foreground/10">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
      <BrandSection />
    </div>
  );
}
