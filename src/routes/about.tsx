import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Gem } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
const ceoPortrait = "/ceo-portrait.jpg";
const villaDusk = "/villa-dusk.jpg";
import { CountOnView } from "@/components/site/CountUpStat";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Sultan Sons Estate & Builders — Our Story & Leadership" },
      { name: "description", content: "Learn about Sultan Sons Estate & Builders — a decade of premium construction, architecture and real estate delivery across Pakistan." },
      { property: "og:title", content: "About Sultan Sons Estate & Builders" },
      { property: "og:description", content: "Ten years of trust, craftsmanship and turnkey delivery across Pakistan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Building trust,"
        accent="one home at a time."
        desc="Sultan Sons Estate & Builders is a full-service construction and real-estate firm delivering premium residences and commercial spaces across Pakistan for over a decade."
        image={villaDusk}
      />

      <section className="mx-auto mt-20 w-[min(1200px,calc(100%-2rem))]">
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">
          {[["100+", "Projects Delivered"], ["10", "Years Experience"], ["50+", "Happy Clients"]].map(([n, l]) => (
            <div key={l} className="shine-box relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-7">
              <div className="font-display text-4xl font-bold tracking-tight"><CountOnView value={n} /></div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 grid w-[min(1200px,calc(100%-2rem))] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="shine-box relative overflow-hidden rounded-[1.5rem] border border-accent/40">
          <img src={ceoPortrait} alt="Founder & CEO" loading="lazy" decoding="async" className="block h-auto w-full object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">From the Desk of the CEO</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">A message from<span className="text-accent"> our founder.</span></h2>
          <p className="mt-5 leading-relaxed text-foreground/85">
            For over a decade, Sultan Sons has stood for one thing — trust. Every wall we raise and every finish we approve is a promise kept to a family who entrusted us with their life's biggest investment.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/85">
            Our architects, engineers and craftsmen share one belief: quality is not a feature, it is the foundation. From the first blueprint to handover day, you will always know exactly where your project stands.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-24 w-[min(1200px,calc(100%-2rem))]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The principles that<span className="text-accent"> build every project.</span></h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { Icon: Target, tag: "Mission", title: "Homes that outlast trends.", desc: "Engineer contemporary residences with uncompromising build quality — on time, on budget." },
            { Icon: Eye, tag: "Vision", title: "A new standard for Pakistani construction.", desc: "Be the most trusted name in modern architecture where every façade, interior and finish is approved before ground is broken." },
            { Icon: Gem, tag: "Values", title: "Standards built into every wall.", desc: "Integrity in our costing. Craftsmanship in our finish. Respect for every family we build with." },
          ].map(({ Icon, tag, title, desc }) => (
            <article key={tag} className="shine-box rounded-2xl border border-border bg-card p-7">
              <Icon className="h-8 w-8 text-accent" />
              <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">{tag}</div>
              <h3 className="mt-2 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 mb-24 w-[min(1200px,calc(100%-2rem))]">
        <div className="shine-box relative overflow-hidden rounded-3xl border border-accent/40 bg-card p-10 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to build with us?</h2>
          <p className="mt-3 text-muted-foreground">Let's talk about your next project.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
