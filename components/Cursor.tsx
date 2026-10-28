"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3" });

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      el.classList.remove("is-hidden");
    };
    const over = (e: MouseEvent) => {
      const target = (e.target as Element | null)?.closest?.("[data-cursor]");
      if (target) {
        setLabel(target.getAttribute("data-cursor") ?? "");
        el.classList.add("is-active");
      } else {
        el.classList.remove("is-active");
      }
    };
    const leave = () => el.classList.add("is-hidden");

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  useEffect(() => {
    ref.current?.classList.remove("is-active");
  }, [pathname]);

  return (
    <div className="cursor is-hidden" ref={ref} aria-hidden>
      <div className="cursor__dot" />
      <div className="cursor__ring">{label}</div>
    </div>
  );
}
