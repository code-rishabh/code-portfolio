"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import Image from "next/image";
import { journey, journeyPhoto } from "@/lib/data";

const GLOWS = ["#f2c58a", "#efb48f", "#e8c9a0", "#d9c08b", "#e6a77c", "#c9d0b4"];

export function Journey() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = root.current;
    const tr = track.current;
    if (!el || !tr || prefersReducedMotion()) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px)", () => {
      const distance = () => tr.scrollWidth - window.innerWidth;
      const tween = gsap.to(tr, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
            setActive(Math.min(journey.length - 1, Math.floor(self.progress * journey.length * 1.06)));
          },
        },
      });

      // Each card leans in as it crosses the viewport.
      tr.querySelectorAll<HTMLElement>(".stage").forEach((card) => {
        gsap.fromTo(
          card,
          { rotate: 2.5, y: 40 },
          {
            rotate: 0,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: "left right",
              end: "center center",
              scrub: true,
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="journey" id="process" ref={root}>
      <div className="journey__pin">
        <div className="journey__head">
          <div>
            <span className="label">How I work</span>
            <h2 style={{ marginTop: 16 }}>
              From idea to <em>deployment,</em> and back again.
            </h2>
          </div>
          <div className="journey__steps" aria-hidden>
            {journey.map((s, i) => (
              <span key={s.verb} className={i <= active ? "is-on" : ""}>
                {s.no} {s.verb}
              </span>
            ))}
          </div>
        </div>
        <div className="journey__progress" aria-hidden>
          <i ref={bar} />
        </div>

        <div className="journey__track" ref={track}>
          {journey.map((s, i) => (
            <article className="stage" key={s.verb} style={{ ["--stage-glow" as string]: GLOWS[i] }}>
              <div>
                <div className="stage__top">
                  <span className="stage__no">{s.no} / 06</span>
                  <span className="mono" style={{ color: "var(--ink-soft)" }}>
                    Stage
                  </span>
                </div>
                <h3 className="stage__verb">{s.verb}</h3>
                <p className="stage__line">{s.line}</p>
              </div>
              <div />
              <ul className="stage__proof">
                {s.proof.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
          <div className="journey__end">
            <figure className="journey__photo">
              <Image src={journeyPhoto.src} alt={journeyPhoto.label} fill sizes="(max-width: 900px) 92vw, 30vw" style={{ objectFit: "cover", objectPosition: "50% 25%" }} />
              <figcaption className="ph__caption">{journeyPhoto.label}</figcaption>
            </figure>
            <span className="label">The loop</span>
            <p>
              Most teams split these across five people. I&apos;ve owned <em>all six,</em> often in the same week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
