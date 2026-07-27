import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, HardHat, Ruler, Hammer, Layers, KeyRound } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
const villaDha = "/villa-dha-1.jpg";
const villaSpanish = "/villa-spanish-bahria.jpg";
const villaDusk = "/villa-dusk.jpg";
const villaInterior = "/villa-interior.jpg";
const realP1 = "/real-project-1.jpg";
const realP4 = "/real-project-4.jpg";
export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Construction, Architecture & Interiors | Sultan Sons" },
      { name: "description", content: "Full-service construction, architecture, renovation, interiors, project supervision and turnkey delivery across Pakistan." },
      { property: "og:title", content: "Sultan Sons — Services" },
      { property: "og:description", content: "Everything from concept to handover — one accountable team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const services = [
  { Icon: Building2, img: villaDha, title: "Construction", desc: "Full-scale residential, commercial & industrial construction with strict quality control from foundation to finishing." },
  { Icon: Ruler, img: realP1, title: "Architecture Design", desc: "Bespoke architectural blueprints combining functional living with iconic modern form." },
  { Icon: Hammer, img: realP4, title: "Renovation & Upgrades", desc: "Bring new life to existing homes and commercial spaces with premium modern upgrades." },
  { Icon: Layers, img: villaInterior, title: "Interior Design", desc: "Curated interiors that reflect identity through premium materials, textures and lighting." },
  { Icon: HardHat, img: villaSpanish, title: "Project Supervision", desc: "End-to-end planning, coordination and supervision — delivered on schedule and on budget." },
  { Icon: KeyRound, img: villaDusk, title: "Turnkey Delivery", desc: "Complete design-to-handover package. You share the vision, we deliver the keys." },
];

function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our Services"
        title="Everything from concept"
        accent="to handover."
        brandName="Sultan Sons"
        desc="Six disciplines. One accountable team. Delivered across Pakistan with a decade of proven craftsmanship."
        image={villaInterior}
      />

      <section className="mx-auto mt-20 mb-24 w-[min(1200px,calc(100%-2rem))]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, img, title, desc }) => (
            <article key={title} className="shine-box group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative h-48 overflow-hidden">
                <img src={img} alt={title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <Icon className="absolute bottom-4 left-4 h-8 w-8 text-accent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="shine-box mt-16 rounded-3xl border border-accent/40 bg-card p-10 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Have a project in mind?</h2>
          <p className="mt-3 text-muted-foreground">Get a free consultation and site visit.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground">
            Request Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
