import { TLink } from "@/components/Transition";

export default function NotFound() {
  return (
    <section className="cs-hero" style={{ minHeight: "100svh" }}>
      <span className="label">404</span>
      <h1 className="cs-hero__title">
        Not <em className="accent">shipped</em> yet.
      </h1>
      <TLink href="/" label="Home" className="btn">
        Back home
      </TLink>
    </section>
  );
}
