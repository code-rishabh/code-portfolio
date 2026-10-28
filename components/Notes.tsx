import { pmStudies, profile } from "@/lib/data";
import { Split } from "./Split";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export function Notes() {
  return (
    <section className="section" id="writing">
      <div className="section-head">
        <span className="label">Product case studies</span>
        <Split text="Product thinking, *written down*" />
      </div>

      <div className="notes">
        {pmStudies.map((s, i) => (
          <div key={s.title} data-reveal style={{ display: "flex" }}>
          <a
            className="note"
            style={{ flex: 1 }}
            href={profile.notion}
            target="_blank"
            rel="noreferrer"
            data-cursor="Read"
          >
            <div className="note__top">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <span>{s.tag}</span>
            </div>
            <div>
              <h3 className="note__title">{s.title}</h3>
              <p className="note__line">{s.line}</p>
            </div>
            <span className="note__arrow">
              <Arrow />
            </span>
          </a>
          </div>
        ))}
      </div>

      <div className="notes__cta" data-reveal>
        <a className="btn" href={profile.notion} target="_blank" rel="noreferrer">
          All case studies on Notion <Arrow />
        </a>
      </div>
    </section>
  );
}

export { Arrow };
