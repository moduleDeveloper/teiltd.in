import { useEffect, useRef, useState } from 'react';

/** Reproduces the reference's `countUp`: an ease-out-cubic rAF tween from 0 to `to`,
 * triggered once the element scrolls into view, formatted as `Math.round(value) + suffix`. */
export function useCountUp<T extends HTMLElement>(to: number, suffix: string, duration: number) {
  const ref = useRef<T | null>(null);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Reduced-motion users skip the tween and see the final value straight away.
  const [value, setValue] = useState(reduced ? `${to}${suffix}` : `0${suffix}`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) return;

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start: number | null = null;
        const step = (t: number) => {
          if (start === null) start = t;
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(`${Math.round(to * eased)}${suffix}`);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to, suffix, duration, reduced]);

  return { ref, value };
}
