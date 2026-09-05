import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view so the navbars can highlight it.
 * Uses a viewport band around the middle of the screen, which behaves better
 * than "topmost visible" when sections differ a lot in height.
 */
export default function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        });

        if (visible.size === 0) return;

        // Pick the section occupying the most of the band.
        const [best] = Array.from(visible.entries()).sort((a, b) => b[1] - a[1]);
        setActive(best[0]);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
