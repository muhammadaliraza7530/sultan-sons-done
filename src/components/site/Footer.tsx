import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone, Mail } from "lucide-react";

const logoAsset = "/logo.jpg";
const WHATSAPP = "https://wa.me/923277314000";
const logo = logoAsset;

export function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-white/10 bg-[oklch(0.11_0.005_60)] text-white">
      <div className="mx-auto grid w-[min(1200px,calc(100%-2rem))] gap-10 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Sultan Sons logo" loading="lazy" decoding="async" className="h-12 w-12 object-contain" />
            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-tight text-white">SULTAN SONS</span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.24em] text-white/70">Estate &amp; Builders</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/80">
            A full-service construction &amp; real-estate firm. Contemporary architecture,
            luxury interiors and turnkey delivery across Pakistan for over a decade.
          </p>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Explore</h3>
          <nav className="mt-5 flex flex-col gap-2.5 text-sm">
            <Link to="/" className="text-white/75 hover:text-white">Home</Link>
            <Link to="/about" className="text-white/75 hover:text-white">About</Link>
            <Link to="/services" className="text-white/75 hover:text-white">Services</Link>
            <Link to="/projects" className="text-white/75 hover:text-white">Projects</Link>
            <Link to="/contact" className="text-white/75 hover:text-white">Contact</Link>
          </nav>

        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              09,Jasmine, 1st Roundabout, Park View City Lahore<br /> 
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+923277314000" className="hover:text-white">0327 7314000</a>
              <span className="text-white/40">·</span>
              <a href="tel:+923042828284" className="hover:text-white">0304 2828284</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:sultansonseb@gmail.com" className="hover:text-white">sultansonseb@gmail.com</a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="h-4 w-4 shrink-0 text-accent" />
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp us anytime</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Sultan Sons Estate &amp; Builders · Mon – Sat · 10 AM to 7 PM
        <div className="mt-2 text-white/60">
          Design &amp; Developed by <span className="font-semibold text-accent">Brand Up</span>
        </div>
      </div>
    </footer>
  );
}
