import { education, experience } from "@/lib/data";
import { Split } from "./Split";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="exp">
        <aside className="exp__aside">
          <span className="label">Experience</span>
          <Split text="Where I've *been building*" />
          <div className="exp__edu" data-reveal>
            {education.map((e) => (
              <div key={e.title}>
                <strong>{e.title}</strong>
                <span>
                  {e.org} · {e.meta}
                </span>
              </div>
            ))}
          </div>
        </aside>

        <ol className="exp__list">
          {experience.map((x) => (
            <li className="exp__item" key={x.org} data-reveal>
              <span className="exp__period">{x.period}</span>
              <div>
                <h3 className="exp__org">{x.org}</h3>
                <div className="exp__role">
                  <span>{x.role}</span>
                  <span>· {x.place}</span>
                </div>
                <p className="exp__line">{x.line}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
