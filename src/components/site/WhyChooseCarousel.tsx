import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Layers3, HeartHandshake, BadgeCheck, Timer, Trophy } from "lucide-react";

type Item = { title: string; desc: string };
const AUTO_SPEED = 130;

const ICONS = [
  { Icon: ShieldCheck, grad: "linear-gradient(135deg,#f59e0b,#ef4444)" },
  { Icon: Layers3, grad: "linear-gradient(135deg,#38bdf8,#6366f1)" },
  { Icon: HeartHandshake, grad: "linear-gradient(135deg,#fb7185,#a855f7)" },
  { Icon: BadgeCheck, grad: "linear-gradient(135deg,#34d399,#0ea5e9)" },
  { Icon: Timer, grad: "linear-gradient(135deg,#facc15,#f97316)" },
  { Icon: Trophy, grad: "linear-gradient(135deg,#22d3ee,#2563eb)" },
];

export function WhyChooseCarousel({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const [dragging, setDragging] = useState(false);
  const draggingRef = useRef(false);
  const drag = useRef({ startX: 0, startScroll: 0 });
  const track = [...items, ...items];

  useEffect(() => {
    const el = ref.current; if (!el) return;
    let raf = 0; let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min(now - last, 32); last = now;
      if (!paused.current) {
        el.scrollLeft += (AUTO_SPEED * dt) / 1000;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    setDragging(true); draggingRef.current = true; paused.current = true;
    drag.current = { startX: e.clientX, startScroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || !ref.current) return;
    ref.current.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX) * 1.4;
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(false); draggingRef.current = false; paused.current = false;
    ref.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="relative mt-10">
      <div
        ref={ref}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => { if (!dragging) paused.current = false; }}
        className={`flex gap-px overflow-x-auto bg-border select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ touchAction: "pan-y", overscrollBehaviorX: "contain" }}
      >
        {track.map((w, i) => {
          const { Icon, grad } = ICONS[i % items.length % ICONS.length];
          return (
          <div key={i} className="group shrink-0 bg-background p-8" style={{ width: "min(85vw, 360px)" }}>
            <span
              className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-[0_14px_35px_-14px_rgba(0,0,0,0.6)] ring-1 ring-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              style={{ backgroundImage: grad }}
            >
              <span aria-hidden className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/35 to-transparent" />
              <Icon className="relative h-7 w-7 text-white drop-shadow" strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{w.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
          </div>
          );
        })}
      </div>
    </div>
  );
}
