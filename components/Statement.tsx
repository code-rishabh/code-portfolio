"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { statement } from "@/lib/data";

const HIGHLIGHT = new Set(["should", "why.", "both:"]);

export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.to(el.querySelectorAll(".word"), {
        opacity: 1,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: 0.6 },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section">
      <div className="statement">
        <span className="label">(The short version)</span>
        <p ref={ref}>
          {statement.split(" ").map((w, i) => (
            <span key={i}>
              <span className={`word ${HIGHLIGHT.has(w) ? "hl" : ""}`}>{w}</span>{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
