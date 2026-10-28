import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { Placeholder } from "@/components/Placeholder";
import { Split } from "@/components/Split";
import { TLink } from "@/components/Transition";
import { Contact } from "@/components/Contact";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return {};
  const title = `${p.title}: ${p.kicker}`;
  return {
    title: p.title,
    description: p.summary,
    openGraph: { title, description: p.summary, url: `/work/${p.slug}`, type: "article" },
    twitter: { title, description: p.summary },
  };
}

export default function CaseStudy({ params }: Params) {
  const i = projects.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <article>
      <header className="cs-hero">
        <TLink href="/#work" label="Work" className="cs-hero__back mono" data-cursor="Back">
          <span>←</span> All work
        </TLink>
        <div className="cs-hero__top">
          <span className="label">Case study {p.index}</span>
          <span className="mono">{p.year}</span>
        </div>
        <Split as="h1" className="cs-hero__title" text={p.title} />
        <p className="cs-hero__kicker" data-reveal>
          {p.kicker}
        </p>

        <div className="cs-meta">
          {[
            ["Client", p.client],
            ["Role", p.role],
            ["Team", p.team],
            ["Timeline", p.timeline],
          ].map(([k, v]) => (
            <div key={k} data-reveal>
              <span className="mono">{k}</span>
              {v}
            </div>
          ))}
        </div>
      </header>

      <div className="cs-cover" data-reveal>
        <Placeholder media={p.cover} hue={p.hue} parallax={6} sizes="94vw" />
      </div>

      <section className="cs-intro">
        <span className="label">Overview</span>
        <p data-reveal>{p.summary}</p>
      </section>

      <div className="cs-metrics">
        {p.metrics.map((m) => (
          <div key={m.label} data-reveal>
            <strong>{m.value}</strong>
            <span>{m.label}</span>
          </div>
        ))}
      </div>
      {p.note && <p className="cs-note">✳ {p.note}</p>}

      {p.sections.map((s, si) => (
        <section className="cs-section" key={s.heading}>
          <div className="cs-section__row">
          <div className="cs-section__head">
            <span className="mono">{String(si + 1).padStart(2, "0")}</span>
            <Split text={s.heading} />
          </div>
          <div className="cs-section__body">
            {s.body.map((b) => (
              <p key={b} data-reveal>
                {b}
              </p>
            ))}
            {s.bullets && (
              <ul>
                {s.bullets.map((b) => (
                  <li key={b} data-reveal>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
          </div>
          {s.media && (
            <div className={`cs-section__media ${s.media.layout === "portrait" ? "is-portrait" : ""}`} data-reveal>
              <div className="cs-section__frame">
                <Placeholder
                  media={s.media}
                  hue={p.hue}
                  parallax={4}
                  style={{ borderRadius: 0 }}
                  sizes={s.media.layout === "portrait" ? "(max-width: 900px) 92vw, 40vw" : "(max-width: 900px) 92vw, 94vw"}
                />
              </div>
            </div>
          )}
        </section>
      ))}

      <section className="cs-stack">
        <span className="label">Stack & tools</span>
        <div className="cs-stack__chips" data-reveal>
          {p.stack.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>
      </section>

      <TLink href={`/work/${next.slug}`} label={next.title} className="cs-next" data-cursor="Next">
        <span className="label">Next case study · {next.index}</span>
        <div className="cs-next__title">{next.title}</div>
      </TLink>

      <Contact />
    </article>
  );
}
