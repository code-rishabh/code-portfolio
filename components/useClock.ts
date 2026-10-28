"use client";

import { useEffect, useState } from "react";

/** Live hh:mm in the given IANA timezone. Empty until mounted to avoid hydration mismatch. */
export function useClock(timeZone: string) {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = window.setInterval(update, 15000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return time;
}
