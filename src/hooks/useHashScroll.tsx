import { useEffect } from "react";

/**
 * The browser resolves a URL hash before React has rendered the sections, so a
 * deep link like /#projects lands at the top of the page. Re-run the scroll
 * once the target exists.
 */
export default function useHashScroll() {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash || hash.length < 2) return;

    let frame = 0;
    let attempts = 0;

    const scrollToTarget = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
      // Sections mount over a couple of frames; retry briefly, then give up.
      if (attempts++ < 30) frame = requestAnimationFrame(scrollToTarget);
    };

    frame = requestAnimationFrame(scrollToTarget);
    return () => cancelAnimationFrame(frame);
  }, []);
}
