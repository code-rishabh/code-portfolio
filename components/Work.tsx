"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { projects } from "@/lib/data";
import { TLink } from "./Transition";
import { Placeholder } from "./Placeholder";
import { Split } from "./Split";

export function Work() {
  const preview = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const pv = preview.current;
    const ls = list.current;
    if (!pv || !ls || window.matchMedia("(pointer: coarse)").matches) return;

    const xTo = gsap.quickTo(pv, "x", { duration: 0.7, ease: "power3" });
    const yTo = gsap.quickTo(pv, "y", { duration: 0.7, ease: "power3" });
    const rTo = gsap.quickTo(pv, "rotate", { duration: 0.9, ease: "power3" });
    let lastX = 0;

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      rTo(gsap.utils.clamp(-8, 8, (e.clientX - lastX) * 0.6));
      lastX = e.clientX;
    };
    const enter = () => gsap.to(pv, { scale: 1, opacity: 1, duration: 0.6, ease: "expo.out" });
    const leave = () => {
      gsap.to(pv, { scale: 0, opacity: 0, duration: 0.5, ease: "expo.out" });
      setActive(-1);
    };

    gsap.set(pv, { xPercent: -50, yPercent: -50 });
    window.addEventListener("mousemove", move);
    ls.addEventListener("mouseenter", enter);
    ls.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      ls.removeEventListener("mouseenter", enter);
      ls.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section className="section" id="work">
      <div className="section-head">
        <span className="label">Selected work · {String(projects.length).padStart(2, "0")}</span>
        <Split text="Products I've *taken from brief to launch*" />
      </div>

      <ul className="work-list" ref={list}>
        {projects.map((p, i) => (
          <li className="work-row" key={p.slug} onMouseEnter={() => setActive(i)} data-reveal>
            <TLink href={`/work/${p.slug}`} label={p.title} data-cursor="View">
              <span className="work-row__index">({p.index})</span>
              <span className="work-row__title">{p.title}</span>
              <span className="work-row__kicker">{p.kicker}</span>
              <span className="work-row__tags">
                {p.tags.slice(0, 2).map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </span>
              <span className="work-row__year">{p.year}</span>
              <span className="work-row__mobile-media">
                <Placeholder media={p.cover} hue={p.hue} />
              </span>
            </TLink>
          </li>
        ))}
      </ul>

      <div className="work-preview" ref={preview} aria-hidden>
        <div className="work-preview__slides">
          {projects.map((p, i) => (
            <div className={`work-preview__slide ${i === active ? "is-on" : ""}`} key={p.slug} style={{ zIndex: i === active ? 2 : 1 }}>
              <Placeholder media={{ ...p.cover, aspect: undefined }} hue={p.hue} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
