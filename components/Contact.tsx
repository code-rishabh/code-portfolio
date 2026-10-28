"use client";

import { profile } from "@/lib/data";
import { scrollToTarget } from "@/lib/gsap";
import { Magnetic } from "./Magnetic";
import { useClock } from "./useClock";
import { Arrow } from "./Notes";

export function Contact() {
  const time = useClock(profile.timezone);

  return (
    <footer className="contact" id="contact">
      <span className="label">Contact</span>
      <h2 className="contact__title">
        Have a product that needs <em>building,</em> and thinking?
      </h2>

      <div className="contact__row">
        <a className="contact__mail" href={`mailto:${profile.email}`} data-cursor="Write">
          {profile.email} <Arrow />
        </a>
        <Magnetic strength={0.4}>
          <a className="contact__circle" href={profile.linkedin} target="_blank" rel="noreferrer" data-cursor="Say hi">
            Connect on
            <br />
            LinkedIn ↗
          </a>
        </Magnetic>
      </div>

      <div className="contact__grid">
        <div>
          <h3>Elsewhere</h3>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.notion} target="_blank" rel="noreferrer">
            Product case studies
          </a>
        </div>
        <div>
          <h3>Résumé</h3>
          {profile.resumes.map((r) => (
            <a key={r.href} href={r.href} target="_blank" rel="noreferrer">
              {r.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Based in</h3>
          <p>
            {profile.location}
            <br />
            Local time {time} IST
          </p>
        </div>
        <div>
          <h3>Availability</h3>
          <p>
            Immediate joiner
            <br />
            Remote · Hybrid · Relocation
          </p>
        </div>
      </div>

      <div className="contact__huge" aria-hidden>
        Rishabh Sharma
      </div>

      <div className="contact__base">
        <span className="mono">© 2026 Rishabh Sharma</span>
        <span className="mono">Designed &amp; built in Pune</span>
        <button className="mono" onClick={() => scrollToTarget(0)}>
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
