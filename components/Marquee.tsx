"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { toolbox } from "@/lib/data";

const Star = () => (
  <svg className="marquee__star" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 0v24M0 12h24M3.5 3.5l17 17M20.5 3.5l-17 17" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

function Row({ items, variant }: { items: string[]; variant: "a" | "b" }) {
  const group = (
    <div className="marquee__group">
      {items.map((t) => (
        <span key={t} style={{ display: "contents" }}>
          <span className="marquee__item">{t}</span>
          <Star />
        </span>
      ))}
    </div>
  );
  return (
    <div className={`marquee__row marquee__row--${variant}`} data-dir={variant === "a" ? -1 : 1}>
      {group}
      <div aria-hidden style={{ display: "contents" }}>
        {group}
      </div>
    </div>
  );
}

export function Marquee() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const loops = gsap.utils.toArray<HTMLElement>(".marquee__row", el).map((row) => {
        const dir = Number(row.dataset.dir);
        gsap.set(row, { xPercent: dir > 0 ? -50 : 0 });
        return gsap.to(row, { xPercent: dir > 0 ? 0 : -50, duration: 48, ease: "none", repeat: -1 });
      });

      // Scrolling speeds the loops up, then they ease back to cruising speed.
      let target = 1;
      let speed = 1;
      ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          target = Math.max(target, 1 + Math.min(Math.abs(self.getVelocity()) / 260, 5));
        },
      });
      const tick = () => {
        speed += (target - speed) * 0.12;
        target += (1 - target) * 0.04;
        loops.forEach((l) => l.timeScale(speed));
      };
      gsap.ticker.add(tick);
      return () => gsap.ticker.remove(tick);
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="marquee" ref={ref} aria-label="Toolbox">
      <div className="marquee__caption">
        <span className="label">Product toolkit</span>
        <span className="label">Build toolkit</span>
      </div>
      <Row items={toolbox.product} variant="a" />
      <Row items={toolbox.build} variant="b" />
    </section>
  );
}
