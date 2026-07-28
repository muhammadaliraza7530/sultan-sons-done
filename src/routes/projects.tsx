import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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
      { name: "description", content: "Explore Sultan Sons' portfolio of completed and ongoing luxury villas, bungalows and commercial builds across Pakistan." },
      { property: "og:title", content: "Sultan Sons — Featured Projects" },
      { property: "og:description", content: "Modern villas, DHA/Bahria style residences, and turnkey commercial builds." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const projectFolderImages = [
  "/project/img4.png",
  "/project/img5.png",
  "/project/img6.png",
  "/newProjectImages/WhatsApp Image 2026-07-28 at 11.02.07 AM.jpeg",
  "/newProjectImages/WhatsApp Image 2026-07-28 at 11.02.08 AM (1).jpeg",
  "/newProjectImages/WhatsApp Image 2026-07-28 at 11.02.08 AM (2).jpeg",
  "/newProjectImages/WhatsApp Image 2026-07-28 at 11.02.08 AM.jpeg",
  "/newProjectImages/WhatsApp Image 2026-07-28 at 11.02.09 AM.jpeg",
  "/newProjectImages/WhatsApp Image 2026-07-28 at 11.02.10 AM.jpeg",
  "/newProjectImages/WhatsApp Image 2026-07-28 at 11.07.10 AM.jpeg",
  "/newProjectImages/WhatsApp Image 2026-07-28 at 11.07.11 AM.jpeg",
  "/newProjectImages/WhatsApp Image 2026-07-28 at 11.07.13 AM.jpeg",
  "/newProjectImages/WhatsApp Image 2026-07-28 at 11.07.14 AM.jpeg",
  "/newProjectImages/WhatsApp Image 2026-07-28 at 11.07.15 AM (1).jpeg",
  "/newProjectImages/WhatsApp Image 2026-07-28 at 11.07.15 AM.jpeg",
];

const projectVideos = [
  "/project/video1.mp4",
  "/project/video2.mp4",
  "/project/video3.mp4",
  "/project/video4.mp4",
  "/newProjectImages/WhatsApp%20Video%202026-07-28%20at%2011.07.16%20AM%20(1).mp4",
  "/newProjectImages/WhatsApp%202026-07-28%20at%2011.07.16%20AM.mp4",
  "/newProjectImages/WhatsApp%20Video%202026-07-28%20at%2011.07.17%20AM.mp4",
  "/newProjectImages/WhatsApp%20Video%202026-07-28%20at%2011.07.18%20AM.mp4",
];

const projects = [
  ...projectFolderImages.map((img, index) => {
    const shortTitles = [
      "Harbor View Residence",
      "Cedar Ridge Villa",
      "Sunset Terrace",
      "Maple Lane Home",
      "Eden Court",
      "Palmetto House",
      "Stonewater Estate",
      "Willow Grove",
      "Oakfield Manor",
      "Azure Heights",
      "Golden Horizon",
      "Serene Pavilion",
      "Pearl Avenue",
      "Twilight Residence",
      "Marina Loft",
    ];

    return {
      img,
      title: shortTitles[index] ?? "Signature Residence",
      location: "Pakistan",
      type: "Residential",
    };
  }),
  { img: wa01, title: "3590 Crystal", location: "Bahria Orchard", type: "Residential" },
  { img: wa02, title: "969 Tulip Ex", location: "Bahria Town", type: "Grey Structure" },
  { img: wa03, title: "1923 Tulip Ex", location: "Bahria Town", type: "Grey Structure" },
  { img: wa04, title: "678 Jade Ex", location: "Bahria Town", type: "Residential" },
  { img: wa05, title: "2420 Tulip Os", location: "Bahria Town", type: "Under Construction" },
  { img: wa06, title: "Spanish Villa Build", location: "Bahria Town", type: "Residential" },
  { img: wa07, title: "335 Platinum", location: "Bahria Town", type: "Grey Structure" },
  { img: wa08, title: "Signature Estate", location: "Bahria Town", type: "Completed" },
  { img: wa09, title: "3024 Tulip", location: "Bahria Town", type: "Completed" },
  { img: wa11, title: "922 Platinum", location: "Bahria Town", type: "Grey Structure" },
  { img: wa12, title: "Marble Facade Home", location: "Bahria Town", type: "Residential" },
  { img: wa13, title: "1030 Tulip Os", location: "Bahria Town", type: "Residential" },
  { img: wa14, title: "969 Tulip Ex II", location: "Bahria Town", type: "Under Construction" },
  { img: villaDha, title: "DHA Modern Villa", location: "DHA, Lahore", type: "Residential" },
  { img: villaSpanish, title: "Spanish Villa", location: "Bahria Town", type: "Residential" },
  { img: villaDusk, title: "Designer Bungalow", location: "Islamabad", type: "Residential" },
  { img: realP1, title: "Three-Storey Estate", location: "Lahore", type: "Residential" },
  { img: realP2, title: "Modern Facade Home", location: "Karachi", type: "Residential" },
  { img: realP3, title: "Contemporary Bungalow", location: "Islamabad", type: "Residential" },
  { img: realP4, title: "Arched Spanish Estate", location: "Bahria Town", type: "Residential" },
  { img: realP5, title: "Modern Two-Storey", location: "DHA", type: "Residential" },
  { img: realP6, title: "Front Elevation Build", location: "Lahore", type: "Residential" },
  { img: realP7, title: "Site Progress Build", location: "Pakistan", type: "Construction" },
  { img: villa1, title: "Signature Spanish Villa", location: "Bahria", type: "Residential" },
  { img: villa2, title: "Luxury Exterior", location: "DHA", type: "Residential" },
];

function ProjectsPage() {
  const videoTitles = [
    "Walkthrough - Crystal Design",
    "Walkthrough - Tulip Showcase",
    "Walkthrough - Spanish Estate",
    "Walkthrough - Platinum Villa",
    "Walkthrough - Signature Tour",
    "Walkthrough - Modern Exterior",
    "Walkthrough - Luxury Interior",
    "Walkthrough - Site Progress",
  ];

  const videoProjects = projectVideos.map((video, index) => ({
    img: video,
    title: videoTitles[index] ?? `Walkthrough ${index + 1}`,
    location: "Pakistan",
    type: "Video",
  }));

  const displayProjects = [...videoProjects, ...projects];

  return (
    <div>
      <PageHero
        eyebrow="Portfolio"
        title="Signature projects,"
        accent="proven craftsmanship."
        desc="A curated look at our delivered and ongoing builds — from luxury villas to contemporary estates across Pakistan."
        image={villaDha}
      />

      <section className="mx-auto mt-16 mb-24 w-[min(1200px,calc(100%-2rem))]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((p) => (
            <article key={p.title} className="shine-box group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative h-64 overflow-hidden bg-primary">
                {p.type === "Video" ? (
                  <video src={p.img} controls autoPlay muted loop playsInline className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" />
                )}
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="shine-box mt-16 rounded-3xl border border-accent/40 bg-card p-10 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Want to see a project in person?</h2>
          <p className="mt-3 text-muted-foreground">Book a site visit with our team.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground">
            Book a Site Visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
