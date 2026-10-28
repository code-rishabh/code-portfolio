"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { numbers } from "@/lib/data";

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

export function Numbers() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>("[data-count]").forEach((node) => {
        const target = Number(node.dataset.count);
        const obj = { v: 0 };
        node.textContent = "0";
        gsap.to(obj, {
          v: target,
          duration: 2.2,
          ease: "expo.out",
          onUpdate: () => (node.textContent = fmt(obj.v)),
          scrollTrigger: { trigger: node, start: "top 88%", once: true },
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="numbers" ref={ref}>
        {numbers.map((n) => (
          <div className="numbers__item" key={n.label} data-reveal>
            <span className="numbers__value">
              <span data-count={n.value}>{fmt(n.value)}</span>
              <sup>{n.suffix}</sup>
            </span>
            <span className="numbers__label">{n.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
