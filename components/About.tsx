import Image from "next/image";
import { profile } from "@/lib/data";
import { Split } from "./Split";
import { Arrow } from "./Notes";

const PRINCIPLES = [
  { title: "Start with why", line: "Discovery and a clear PRD before a single commit." },
  { title: "Own the outcome", line: "From the CEO call to the headset fleet after launch." },
  { title: "AI-first, human-reviewed", line: "Claude Code and Cursor for speed, my judgement for quality." },
];

export function About() {
  return (
    <section className="section" id="about">
      <div className="about">
        <div className="about__media" data-reveal>
          <div className="about__frame">
            <Image
              src="/images/me.png"
              alt="Rishabh Sharma"
              fill
              sizes="(max-width: 900px) 90vw, 40vw"
              data-parallax="6"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="about__caption">
            <span className="mono">Rishabh Sharma · Pune</span>
            <span className="mono">B.Tech E&amp;TC · GPA 9.2</span>
          </div>
        </div>

        <div className="about__body">
          <span className="label">About</span>
          <Split text="An engineer who learned to *ask better questions*" />
          <p data-reveal>
            I&apos;m Rishabh, a product-focused engineer in Pune. For the last three years I&apos;ve taken B2B SaaS,
            EdTech, AI and XR products from discovery to launch for clients in the US and India, including
            enterprise and government teams.
          </p>
          <p data-reveal>
            My days swing between a PRD and a pull request, a stakeholder demo and a deploy. That range is the
            point: I can talk to a CEO about go-to-market in the morning and set up the server that runs it in the
            afternoon. Right now I&apos;m sharpening the product side through AirTribe&apos;s AI Product Manager
            programme.
          </p>

          <div className="about__principles" data-reveal>
            {PRINCIPLES.map((p) => (
              <div key={p.title}>
                <strong>{p.title}</strong>
                <span>{p.line}</span>
              </div>
            ))}
          </div>

          <div className="about__actions" data-reveal>
            {profile.resumes.map((r, i) => (
              <a key={r.href} className={`btn ${i === 0 ? "btn--solid" : ""}`} href={r.href} target="_blank" rel="noreferrer">
                {r.label} <Arrow />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
