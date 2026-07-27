import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { AIChat } from "@/components/AIChat";
const logoAsset = "/logo.jpg";
function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sultan Sons Estate & Builders — Premium Construction & Real Estate in Pakistan" },
      { name: "description", content: "Sultan Sons Estate & Builders — 10+ years of premium construction, architecture, interiors and real estate services across Pakistan." },
      { name: "author", content: "Sultan Sons Estate & Builders" },
      { property: "og:title", content: "Sultan Sons Estate & Builders — Premium Construction & Real Estate" },
      { property: "og:description", content: "Contemporary architecture, luxury interiors and turnkey construction across Pakistan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: logoAsset, type: "image/jpeg" },
      { rel: "apple-touch-icon", href: logoAsset },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&family=Hind:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  // Auto shine-box glow on scroll — light every card currently in viewport
  useEffect(() => {
    let raf = 0;
    let started = false;
    const lit = new Set<Element>();
    const update = () => {
      const vh = window.innerHeight;
      const next = new Set<Element>();
      document.querySelectorAll<HTMLElement>(".shine-box").forEach((el) => {
        const r = el.getBoundingClientRect();
        // Consider "in view" when at least 25% of the element is visible
        const visible = Math.min(r.bottom, vh) - Math.max(r.top, 0);
        if (visible > 0 && visible / Math.max(r.height, 1) > 0.25) next.add(el);
      });
      lit.forEach((el) => { if (!next.has(el)) el.classList.remove("is-lit"); });
      next.forEach((el) => { if (!lit.has(el)) el.classList.add("is-lit"); });
      lit.clear();
      next.forEach((el) => lit.add(el));
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    // Start only after the page has fully loaded + hydrated, so we never
    // mutate classNames while React is still hydrating.
    const begin = () => {
      started = true;
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    };
    let start = 0;
    const kick = () => { start = window.setTimeout(begin, 800); };
    if (document.readyState === "complete") kick();
    else window.addEventListener("load", kick, { once: true });
    return () => {
      window.clearTimeout(start);
      window.removeEventListener("load", kick);
      cancelAnimationFrame(raf);
      if (started) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };
  }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat />
        <AIChat />
      </div>
    </QueryClientProvider>
  );
}
