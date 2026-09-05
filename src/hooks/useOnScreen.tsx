import { RefObject, useEffect, useState } from "react";

export interface UseOnScreenOptions {
  /** Once revealed, stay revealed. Prevents content flickering back out on scroll. */
  once?: boolean;
  /** Fraction of the element that must be visible before it counts as on screen. */
  threshold?: number;
  /** Reveal slightly before the element enters the viewport. */
  rootMargin?: string;
}

export default function useOnScreen(
  ref: RefObject<Element | null>,
  { once = true, threshold = 0.15, rootMargin = "0px 0px -10% 0px" }: UseOnScreenOptions = {}
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Without IntersectionObserver (or with motion disabled) show content immediately
    // rather than leaving it permanently hidden.
    if (typeof IntersectionObserver === "undefined") {
      setIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIntersecting(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, once, threshold, rootMargin]);

  return isIntersecting;
}
