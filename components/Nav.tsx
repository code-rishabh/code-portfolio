"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TLink } from "./Transition";
import { useClock } from "./useClock";
import { profile } from "@/lib/data";

const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const time = useClock(profile.timezone);
  const pathname = usePathname();

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > last && y > 320);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const lenis = window.__lenis;
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open]);

  return (
    <>
      <header className={`nav ${hidden && !open ? "is-hidden" : ""} ${solid && !open ? "is-solid" : ""}`}>
        <TLink href="/" label="Home" className="nav__brand" data-cursor="Home">
          Rishabh Sharma<sup>©26</sup>
        </TLink>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <TLink key={l.href} href={l.href} label={l.label}>
              {l.label}
            </TLink>
          ))}
        </nav>

        <div className="nav__meta">
          <span className="mono nav__time">Pune {time}</span>
          <span className="mono status-dot">
            <i /> Available
          </span>
          <button className="nav__menu-btn mono" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div className={`menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div>
          {LINKS.map((l) => (
            <TLink key={l.href} href={l.href} label={l.label} className="menu__link" onClick={() => setOpen(false)}>
              {l.label}
            </TLink>
          ))}
        </div>
        <div>
          <span className="mono status-dot">
            <i /> {profile.availability}
          </span>
        </div>
      </div>
    </>
  );
}
