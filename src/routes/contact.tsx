import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
const villaSpanish = "/villa-spanish-bahria.jpg";
const WHATSAPP = "https://wa.me/923277314000";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Sultan Sons Estate & Builders — Get a Free Consultation" },
      { name: "description", content: "Contact Sultan Sons Estate & Builders for premium construction, architecture and real estate across Pakistan. WhatsApp, call or email us." },
      { property: "og:title", content: "Contact Sultan Sons" },
      { property: "og:description", content: "Get a free consultation for your next project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let's build"
        accent="something remarkable."
        desc="Reach out for a free consultation. Our team responds within one working day."
        image={villaSpanish}
      />

      <section className="mx-auto mt-16 mb-24 grid w-[min(1200px,calc(100%-2rem))] gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { Icon: Phone, label: "Call Us", value: "0327 7314000 · 0304 2828284", href: "tel:+923277314000" },
            { Icon: MessageCircle, label: "WhatsApp", value: "Chat with our team", href: WHATSAPP, external: true },
            { Icon: Mail, label: "Email", value: "sultansonseb@gmail.com", href: "mailto:sultansonseb@gmail.com" },
            { Icon: MapPin, label: "Office", value: "09,Jasmine, 1st Roundabout, Park View City Lahore" },
          ].map(({ Icon, label, value, href, external }) => {
            const inner = (
              <div className="shine-box flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-accent/60">
                <Icon className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{label}</div>
                  <div className="mt-1 text-sm text-foreground/90">{value}</div>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
                {inner}
              </a>
            ) : <div key={label}>{inner}</div>;
          })}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const msg = `Hi Sultan Sons,%0A%0AName: ${f.get("name")}%0APhone: ${f.get("phone")}%0AProject: ${f.get("project")}%0A%0A${f.get("message")}`;
            window.open(`${WHATSAPP}?text=${msg}`, "_blank");
          }}
          className="shine-box rounded-3xl border border-border bg-card p-7 sm:p-9"
        >
          <h2 className="text-2xl font-bold">Request a consultation</h2>
          <p className="mt-2 text-sm text-muted-foreground">We'll reply on WhatsApp within one working day.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Name</span>
              <input required name="name" className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent" />
            </label>
            <label className="block">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Phone</span>
              <input required name="phone" className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent" />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Project Type</span>
              <input name="project" placeholder="Villa, bungalow, renovation…" className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent" />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Message</span>
              <textarea required name="message" rows={5} className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent" />
            </label>
          </div>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent/90">
            <MessageCircle className="h-4 w-4" /> Send via WhatsApp
          </button>
        </form>
      </section>
    </div>
  );
}
