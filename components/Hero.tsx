"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { onReady, takeFirstIntro } from "@/lib/ready";
import { profile } from "@/lib/data";
import { useClock } from "./useClock";

const HeroCanvas = dynamic(() => import("./HeroCanvas").then((m) => m.HeroCanvas), { ssr: false });

const chars = (word: string) =>
  word.split("").map((c, i) => (
    <span className="char" key={i}>
      {c}
    </span>
  ));

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const time = useClock(profile.timezone);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(el);
      const rows = q(".hero__name .row");
      const roles = q(".roles-track span");

      // Role rotator
      if (roles.length) {
        gsap.set(roles, { yPercent: 110, visibility: "visible" });
        gsap.set(roles[0], { yPercent: 0 });
        const rot = gsap.timeline({ repeat: -1, delay: 3 });
        roles.forEach((r, i) => {
          const next = roles[(i + 1) % roles.length];
          rot
            .to(r, { yPercent: -110, duration: 0.9, ease: "expo.inOut" }, "+=2.2")
            .fromTo(next, { yPercent: 110 }, { yPercent: 0, duration: 0.9, ease: "expo.inOut" }, "<");
        });
      }

      // Scroll choreography: name rows drift apart, portrait sinks and softens.
      if (!reduced) {
        const st = { trigger: el, start: "top top", end: "bottom top", scrub: true };
        gsap.to(rows[0], { xPercent: -8, ease: "none", scrollTrigger: st });
        gsap.to(rows[1], { xPercent: 8, ease: "none", scrollTrigger: st });
        gsap.to(q(".hero__portrait"), { yPercent: 18, scale: 0.92, ease: "none", scrollTrigger: st });
        gsap.to(q(".hero__glow"), { yPercent: 30, opacity: 0.4, ease: "none", scrollTrigger: st });
      }
    }, el);

    const off = onReady(() => {
      if (reduced) return;
      const delay = takeFirstIntro() ? 0.1 : 0.8;
      ctx.add(() => {
        const q = gsap.utils.selector(el);
        gsap
          .timeline({ delay })
          .to(q(".hero__name .row:nth-child(1) .char"), { y: 0, duration: 1.4, ease: "expo.out", stagger: 0.045 })
          .to(q(".hero__name .row:nth-child(2) .char"), { y: 0, duration: 1.4, ease: "expo.out", stagger: 0.045 }, 0.15)
          .to(q(".hero__portrait-wrap"), { clipPath: "inset(-20% -40% -20% -40%)", duration: 1.6, ease: "expo.inOut" }, 0.1)
          .to(q("[data-hero-fade]"), { opacity: 1, y: 0, duration: 1.2, ease: "expo.out", stagger: 0.08 }, 0.6);
      });
    });

    return () => {
      off();
      ctx.revert();
    };
  }, []);

  return (
    <section className="hero" ref={root} id="top">
      <div className="hero__glow" aria-hidden>
        <span />
        <span />
        <span />
      </div>

      <div className="hero__meta">
        <div data-hero-fade>
          <span className="mono">Currently</span>
          <strong>Technical Product Lead · Fore Excel</strong>
        </div>
        <div data-hero-fade>
          <span className="mono">Also</span>
          <strong>Product & Tech Owner · Red Stone USA</strong>
        </div>
        <div data-hero-fade>
          <span className="mono">Based in</span>
          <strong>
            {profile.location} · {time}
          </strong>
        </div>
        <div data-hero-fade>
          <span className="mono">Status</span>
          <strong className="status-dot">
            <i /> Open to APM / TPM / FSD roles
          </strong>
        </div>
      </div>

      <div className="hero__stage">
        <h1 className="hero__name" aria-label={profile.name}>
          <span className="row" aria-hidden>
            {chars(profile.first)}
          </span>
          <span className="row" aria-hidden>
            {chars(profile.last)}
          </span>
        </h1>

        <div className="hero__portrait-wrap" data-cursor="Hover">
          <div className="hero__portrait">
            <HeroCanvas />
          </div>
          <div className="hero__portrait-badge" aria-hidden>
            <svg viewBox="0 0 120 120">
              <defs>
                <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
              </defs>
              <circle cx="60" cy="60" r="58" fill="#1d1813" />
              <text fill="#efe5d4" fontSize="10.5" letterSpacing="2.6" fontFamily="var(--font-mono)">
                <textPath href="#badge-circle">IDEA ✳ PRD ✳ CODE ✳ CLOUD ✳ LAUNCH ✳ </textPath>
              </text>
              <path d="M52 68 L68 52 M56 52 H68 V64" stroke="#e7b77b" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      <div className="hero__foot">
        <p className="hero__intro" data-hero-fade>
          I build products end to end, <em>and think hard about why they should exist.</em> 3+ years taking
          B2B SaaS, EdTech, AI and XR products from discovery to launch.
        </p>
        <div className="hero__roles" data-hero-fade>
          <span className="mono" style={{ color: "var(--ink-soft)", display: "block", marginBottom: 8 }}>
            Working as
          </span>
          <span className="roles-track">
            {profile.titles.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </span>
        </div>
        <div className="hero__scroll" data-hero-fade>
          <span className="mono">Scroll</span>
          <i />
        </div>
      </div>
    </section>
  );
}
