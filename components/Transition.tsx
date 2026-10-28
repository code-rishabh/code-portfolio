"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { AnchorHTMLAttributes } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap, ScrollTrigger, scrollToTarget } from "@/lib/gsap";

type Ctx = { navigate: (href: string, label?: string) => void };
const TransitionCtx = createContext<Ctx>({ navigate: () => {} });
export const usePageTransition = () => useContext(TransitionCtx);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const curtain = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const pending = useRef<string | null>(null);
  const busy = useRef(false);
  const [label, setLabel] = useState("");

  const navigate = useCallback(
    (href: string, nextLabel = "") => {
      const url = new URL(href, window.location.href);
      if (url.pathname === window.location.pathname) {
        scrollToTarget(url.hash || 0);
        return;
      }
      if (busy.current) return;
      busy.current = true;
      pending.current = href;
      setLabel(nextLabel);

      gsap
        .timeline()
        .set(curtain.current, { clipPath: "inset(100% 0% 0% 0%)" })
        .set(title.current, { opacity: 0, y: 40 })
        .to(curtain.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.85, ease: "expo.inOut" })
        .to(title.current, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }, "-=0.35")
        .add(() => router.push(url.pathname, { scroll: false }));
    },
    [router]
  );

  useEffect(() => {
    const href = pending.current;
    if (!href) return;
    pending.current = null;

    scrollToTarget(0, true);
    window.scrollTo(0, 0);

    // Wait two frames so the new page has laid out before measuring.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        const hash = new URL(href, window.location.href).hash;
        if (hash) scrollToTarget(hash, true);

        gsap
          .timeline({ onComplete: () => void (busy.current = false) })
          .to(title.current, { opacity: 0, y: -30, duration: 0.4, ease: "power2.in" }, 0.15)
          .to(curtain.current, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.95, ease: "expo.inOut" }, 0.3)
          .set(curtain.current, { clipPath: "inset(100% 0% 0% 0%)" });
      })
    );
  }, [pathname]);

  return (
    <TransitionCtx.Provider value={{ navigate }}>
      {children}
      <div className="curtain" ref={curtain} aria-hidden>
        <div className="curtain__title" ref={title}>
          {label}
        </div>
      </div>
    </TransitionCtx.Provider>
  );
}

type TLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; label?: string };

/** Internal link that plays the curtain transition before routing. */
export function TLink({ href, label, onClick, children, ...rest }: TLinkProps) {
  const { navigate } = usePageTransition();
  const router = useRouter();

  return (
    <a
      href={href}
      onMouseEnter={() => router.prefetch(href.split("#")[0] || "/")}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        navigate(href, label);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
