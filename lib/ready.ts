// Tiny signal the preloader fires once the intro is done, so the hero can start
// its entrance at the right moment (or immediately on later navigations).
let ready = false;
let firstIntro = true;
const subs = new Set<() => void>();

export function markReady() {
  if (ready) return;
  ready = true;
  subs.forEach((fn) => fn());
  subs.clear();
}

export function onReady(fn: () => void) {
  if (ready) {
    fn();
    return () => {};
  }
  subs.add(fn);
  return () => {
    subs.delete(fn);
  };
}

export const isReady = () => ready;

/** True only for the very first hero entrance after a full page load. */
export function takeFirstIntro() {
  const v = firstIntro;
  firstIntro = false;
  return v;
}
