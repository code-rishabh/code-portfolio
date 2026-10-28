"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { markReady } from "@/lib/ready";

const WORDS = ["Discover", "Define", "Design", "Build", "Ship", "Hello."];

export function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("rs-intro") === "1";
      sessionStorage.setItem("rs-intro", "1");
    } catch {}

    if (seen || prefersReducedMotion()) {
      setDone(true);
      markReady();
      return;
    }

    document.body.classList.add("is-loading");
    const counter = { v: 0 };
    const steps = WORDS.length - 1;

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.classList.remove("is-loading");
        setDone(true);
      },
    });

    tl.to(counter, {
      v: 100,
      duration: 2.4,
      ease: "power2.inOut",
      onUpdate: () => {
        if (count.current) count.current.textContent = String(Math.round(counter.v)).padStart(2, "0");
      },
    })
      .to(bar.current, { scaleX: 1, duration: 2.4, ease: "power2.inOut" }, 0)
      .to(
        track.current,
        { yPercent: (-100 / WORDS.length) * steps, duration: 2.4, ease: `steps(${steps})` },
        0
      )
      .add(() => markReady(), "+=0.15")
      .to(root.current, { clipPath: "inset(0% 0% 100% 0%)", duration: 1.1, ease: "expo.inOut" }, "<");

    return () => {
      tl.kill();
      document.body.classList.remove("is-loading");
    };
  }, []);

  if (done) return null;

  return (
    <div className="loader" ref={root} aria-hidden>
      <div className="loader__top">
        <span className="mono">Rishabh Sharma</span>
        <span className="mono">Portfolio — ©2026</span>
      </div>
      <div className="loader__center">
        <div className="loader__word">
          <div className="loader__word-track" ref={track}>
            {WORDS.map((w, i) => (
              <span key={w} className={i === WORDS.length - 1 ? "italic accent" : undefined}>
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="loader__bottom">
        <span className="loader__count" ref={count}>
          00
        </span>
        <span className="mono">Idea → Deployment</span>
      </div>
      <div className="loader__bar" ref={bar} />
    </div>
  );
}
