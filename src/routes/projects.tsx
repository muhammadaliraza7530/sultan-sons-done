import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, Play, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

const villaDha = "/villa-dha-1.jpg";
const villaSpanish = "/villa-spanish-bahria.jpg";
const villaDusk = "/villa-dusk.jpg";
const villa1 = "/spanish-villa-1.jpg";
const villa2 = "/spanish-villa-2.jpg";
const realP1 = "/real-project-1.jpg";
const realP2 = "/real-project-2.jpg";
const realP3 = "/real-project-3.jpg";
const realP4 = "/real-project-4.jpg";
const realP5 = "/real-project-5.jpg";
const realP6 = "/real-project-6.jpg";
const realP7 = "/real-project-7.jpg";
const wa01 = "/wa/01-3590-crystal.jpg";
const wa02 = "/wa/02-969-tulip-ex.jpg";
const wa03 = "/wa/03-1923-tulip-ex.jpg";
const wa04 = "/wa/04-678-jade-ex.jpg";
const wa05 = "/wa/05-2420-tulip-os.jpg";
const wa06 = "/wa/06-spanish-villa.jpg";
const wa07 = "/wa/07-335-platinum.jpg";
const wa08 = "/wa/08-signature-estate.jpg";
const wa09 = "/wa/09-3024-tulip.jpg";
const wa11 = "/wa/11-922-platinum.jpg";
const wa12 = "/wa/12-marble-facade.jpg";
const wa13 = "/wa/13-1030-tulip-os.jpg";
const wa14 = "/wa/14-969-tulip-ex-ii.jpg";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects & Portfolio — Sultan Sons Estate & Builders" },
      {
        name: "description",
        content:
          "Explore Sultan Sons' portfolio of completed and ongoing luxury villas, bungalows, architecture design and commercial builds across Pakistan.",
      },
      { property: "og:title", content: "Sultan Sons — Featured Projects" },
      {
        property: "og:description",
        content:
          "Modern villas, DHA/Bahria style residences, turnkey commercial builds, and on-site project progress.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

// All 20 images from /public/newProjectImages/
const allNewProjectImages = [
  {
    img: "/newProjectImages/WhatsApp Image 2026-07-28 at 11.02.07 AM.jpeg",
    title: "Harbor View Residence",
    location: "Park View City, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-07-28 at 11.02.08 AM (1).jpeg",
    title: "Cedar Ridge Contemporary Villa",
    location: "Bahria Town, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-07-28 at 11.02.08 AM (2).jpeg",
    title: "Sunset Terrace Modern Estate",
    location: "DHA Phase 6, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-07-28 at 11.02.08 AM.jpeg",
    title: "Maple Lane Luxury Home",
    location: "Park View City, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-07-28 at 11.02.09 AM.jpeg",
    title: "Eden Court Contemporary",
    location: "Bahria Town, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-07-28 at 11.02.10 AM.jpeg",
    title: "Palmetto House Exterior",
    location: "DHA Phase 7, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-07-28 at 11.07.10 AM.jpeg",
    title: "Stonewater Estate Facade",
    location: "Islamabad",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-07-28 at 11.07.11 AM.jpeg",
    title: "Willow Grove Designer Villa",
    location: "Park View City, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-07-28 at 11.07.13 AM.jpeg",
    title: "Oakfield Manor Luxury Villa",
    location: "Bahria Town, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-07-28 at 11.07.14 AM.jpeg",
    title: "Azure Heights Spanish Build",
    location: "Bahria Orchard",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-07-28 at 11.07.15 AM (1).jpeg",
    title: "Golden Horizon Residence",
    location: "Park View City, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-07-28 at 11.07.15 AM.jpeg",
    title: "Serene Pavilion Estate",
    location: "DHA, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-10-05 at 4.47.04 AM.jpeg",
    title: "Broadway Signature Villa",
    location: "Park View City, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-10-05 at 4.47.04 AM (1).jpeg",
    title: "Parkview Contemporary Bungalow",
    location: "Broadway Commercial, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-10-05 at 4.47.05 AM.jpeg",
    title: "Grand Horizon Residence",
    location: "Park View City, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-10-05 at 4.47.05 AM (1).jpeg",
    title: "Emerald Crest Luxury Estate",
    location: "Bahria Town, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-10-05 at 4.47.06 AM.jpeg",
    title: "Royal Palm Residence",
    location: "DHA Phase 5, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-10-05 at 4.47.06 AM (1).jpeg",
    title: "Sapphire Heights Modern Build",
    location: "Park View City, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-10-05 at 4.47.07 AM.jpeg",
    title: "Imperial Court Villa",
    location: "Bahria Town, Lahore",
    category: "New Projects",
  },
  {
    img: "/newProjectImages/WhatsApp Image 2026-10-05 at 4.47.07 AM (1).jpeg",
    title: "Pearl Avenue Luxury Home",
    location: "Park View City, Lahore",
    category: "New Projects",
  },
];

// Project folder images
const additionalProjectImages = [
  {
    img: "/project/img1.png",
    title: "Pearl Contemporary Suite",
    location: "Lahore",
    category: "Residential",
  },
  {
    img: "/project/img2.png",
    title: "Modernist Living Pavilion",
    location: "Lahore",
    category: "Residential",
  },
  {
    img: "/project/img3.png",
    title: "Minimalist Master Bedroom",
    location: "DHA",
    category: "Residential",
  },
  {
    img: "/project/img4.png",
    title: "Executive Office Suite",
    location: "Lahore",
    category: "Commercial",
  },
  {
    img: "/project/img5.png",
    title: "Double-Height Lounge",
    location: "Bahria Town",
    category: "Residential",
  },
  {
    img: "/project/img6.png",
    title: "Designer Staircase & Foyer",
    location: "Islamabad",
    category: "Residential",
  },
];

const videoProjects = [
  {
    img: "/newProjectImages/WhatsApp Video 2026-07-28 at 11.07.16 AM (1).mp4",
    title: "Walkthrough — Crystal Luxury Villa",
    location: "Park View City, Lahore",
    category: "Videos",
    type: "Video" as const,
  },
  {
    img: "/newProjectImages/WhatsApp Video 2026-07-28 at 11.07.16 AM.mp4",
    title: "Walkthrough — Tulip Architectural Tour",
    location: "Bahria Town, Lahore",
    category: "Videos",
    type: "Video" as const,
  },
  {
    img: "/newProjectImages/WhatsApp Video 2026-07-28 at 11.07.17 AM.mp4",
    title: "Walkthrough — Spanish Estate Progress",
    location: "Bahria Orchard",
    category: "Videos",
    type: "Video" as const,
  },
  {
    img: "/newProjectImages/WhatsApp Video 2026-07-28 at 11.07.18 AM.mp4",
    title: "Walkthrough — Platinum Modern Residence",
    location: "DHA, Lahore",
    category: "Videos",
    type: "Video" as const,
  },
  {
    img: "/project/video1.mp4",
    title: "On-Site Tour — Concrete & Elevation",
    location: "Lahore",
    category: "Videos",
    type: "Video" as const,
  },
  {
    img: "/project/video2.mp4",
    title: "On-Site Tour — Finishing & Marble",
    location: "Park View City",
    category: "Videos",
    type: "Video" as const,
  },
  {
    img: "/project/video3.mp4",
    title: "On-Site Tour — Luxury Villa Interior",
    location: "Bahria Town",
    category: "Videos",
    type: "Video" as const,
  },
  {
    img: "/project/video4.mp4",
    title: "On-Site Tour — Turnkey Handover Preview",
    location: "Islamabad",
    category: "Videos",
    type: "Video" as const,
  },
];

const signatureProjects = [
  { img: wa01, title: "3590 Crystal", location: "Bahria Orchard", category: "Residential" },
  { img: wa02, title: "969 Tulip Ex", location: "Bahria Town", category: "Grey Structure" },
  { img: wa03, title: "1923 Tulip Ex", location: "Bahria Town", category: "Grey Structure" },
  { img: wa04, title: "678 Jade Ex", location: "Bahria Town", category: "Residential" },
  { img: wa05, title: "2420 Tulip Os", location: "Bahria Town", category: "Grey Structure" },
  { img: wa06, title: "Spanish Villa Build", location: "Bahria Town", category: "Residential" },
  { img: wa07, title: "335 Platinum", location: "Bahria Town", category: "Grey Structure" },
  { img: wa08, title: "Signature Estate", location: "Bahria Town", category: "Residential" },
  { img: wa09, title: "3024 Tulip", location: "Bahria Town", category: "Residential" },
  { img: wa11, title: "922 Platinum", location: "Bahria Town", category: "Grey Structure" },
  { img: wa12, title: "Marble Facade Home", location: "Bahria Town", category: "Residential" },
  { img: wa13, title: "1030 Tulip Os", location: "Bahria Town", category: "Residential" },
  { img: wa14, title: "969 Tulip Ex II", location: "Bahria Town", category: "Grey Structure" },
  { img: villaDha, title: "DHA Modern Villa", location: "DHA, Lahore", category: "Residential" },
  { img: villaSpanish, title: "Spanish Villa", location: "Bahria Town", category: "Residential" },
  { img: villaDusk, title: "Designer Bungalow", location: "Islamabad", category: "Residential" },
  { img: realP1, title: "Three-Storey Estate", location: "Lahore", category: "Residential" },
  { img: realP2, title: "Modern Facade Home", location: "Karachi", category: "Residential" },
  { img: realP3, title: "Contemporary Bungalow", location: "Islamabad", category: "Residential" },
  { img: realP4, title: "Arched Spanish Estate", location: "Bahria Town", category: "Residential" },
  { img: realP5, title: "Modern Two-Storey", location: "DHA", category: "Residential" },
  { img: realP6, title: "Front Elevation Build", location: "Lahore", category: "Residential" },
  { img: realP7, title: "Site Progress Build", location: "Pakistan", category: "Grey Structure" },
  { img: villa1, title: "Signature Spanish Villa", location: "Bahria", category: "Residential" },
  { img: villa2, title: "Luxury Exterior", location: "DHA", category: "Residential" },
];

type ProjectItem = {
  img: string;
  title: string;
  location: string;
  category: string;
  type?: "Video";
};

const allProjects: ProjectItem[] = [
  ...allNewProjectImages,
  ...videoProjects,
  ...additionalProjectImages,
  ...signatureProjects,
];

const categories = ["All", "New Projects", "Videos", "Residential", "Grey Structure"];

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navLightbox = (dir: number) => {
    if (lightboxIndex === null) return;
    const len = filteredProjects.length;
    setLightboxIndex((lightboxIndex + dir + len) % len);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredProjects.length : null));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredProjects.length) % filteredProjects.length : null,
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredProjects.length]);

  return (
    <div>
      <PageHero
        eyebrow="Portfolio &amp; Showcase"
        title="Signature projects,"
        accent="proven craftsmanship."
        desc="A comprehensive showcase of our latest builds, ongoing developments, and walkthrough videos across Park View City, Bahria Town, DHA, and beyond."
        image={villaDha}
      />

      <section className="mx-auto mt-14 mb-24 w-[min(1200px,calc(100%-2rem))]">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "border border-border bg-card/60 text-muted-foreground hover:border-accent/60 hover:text-foreground"
                }`}
              >
                {cat} {cat === "New Projects" && `(${allNewProjectImages.length})`}
              </button>
            ))}
          </div>

          <div className="text-xs uppercase tracking-wider text-muted-foreground">
            Showing <span className="font-semibold text-accent">{filteredProjects.length}</span>{" "}
            items
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p, idx) => {
            const isVideo = p.type === "Video";
            return (
              <article
                key={`${p.title}-${p.img}-${idx}`}
                className="shine-box group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-accent/80"
              >
                <div
                  className="relative h-64 w-full cursor-pointer overflow-hidden bg-primary"
                  onClick={() => openLightbox(idx)}
                >
                  {isVideo ? (
                    <video
                      src={p.img}
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent backdrop-blur-md">
                    {isVideo ? (
                      <>
                        <Play className="h-3 w-3 fill-accent text-accent" /> Video Tour
                      </>
                    ) : (
                      p.category
                    )}
                  </div>

                  {/* Zoom indicator on hover */}
                  <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-md">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
                    {p.location && (
                      <p className="mt-1 text-xs text-muted-foreground">{p.location}</p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && filteredProjects[lightboxIndex] && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-md animate-magic-aperture"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute right-5 top-5 z-[105] rounded-full border border-white/20 bg-black/60 p-2.5 text-white transition hover:border-accent hover:text-accent"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                navLightbox(-1);
              }}
              className="absolute left-3 sm:left-6 z-[105] rounded-full border border-white/20 bg-black/60 p-3 text-white transition hover:border-accent hover:text-accent"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                navLightbox(1);
              }}
              className="absolute right-3 sm:right-6 z-[105] rounded-full border border-white/20 bg-black/60 p-3 text-white transition hover:border-accent hover:text-accent"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div
              className="relative max-h-[85vh] w-[min(1100px,94vw)] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredProjects[lightboxIndex].type === "Video" ? (
                <video
                  src={filteredProjects[lightboxIndex].img}
                  controls
                  autoPlay
                  className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl"
                />
              ) : (
                <img
                  src={filteredProjects[lightboxIndex].img}
                  alt={filteredProjects[lightboxIndex].title}
                  className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl animate-magic-pop"
                />
              )}

              <div className="mt-4 text-center">
                <h3 className="text-base font-bold text-white">
                  {filteredProjects[lightboxIndex].title}
                </h3>
                <p className="mt-1 text-xs text-white/70">
                  {filteredProjects[lightboxIndex].location} •{" "}
                  {filteredProjects[lightboxIndex].category}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA section */}
        <div className="shine-box mt-16 rounded-3xl border border-accent/40 bg-card p-10 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Want to see a project in person?</h2>
          <p className="mt-3 text-muted-foreground">Book a guided site visit with our team.</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground"
          >
            Book a Site Visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
