import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function scrollToTarget(target: string | number, immediate = false) {
  const lenis = typeof window !== "undefined" ? window.__lenis : undefined;
  const el = typeof target === "string" ? document.querySelector<HTMLElement>(target) : null;
  if (typeof target === "string" && !el) return;
  if (lenis) {
    lenis.scrollTo(el ?? (target as number), { immediate, force: true, duration: 1.6 });
  } else if (el) {
    el.scrollIntoView({ behavior: immediate ? "auto" : "smooth" });
  } else {
    window.scrollTo({ top: target as number, behavior: immediate ? "auto" : "smooth" });
  }
}

export { gsap, ScrollTrigger };
