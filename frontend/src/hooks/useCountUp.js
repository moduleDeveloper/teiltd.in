import { useEffect, useRef, useState } from 'react';

const plain = (n) => n;

/**
 * Reproduces the reference's `countUp`: an ease-out-cubic rAF tween from 0 to `to`,
 * triggered once the element scrolls into view, formatted as `format(Math.round(value)) + suffix`.
 * `format` lets callers show e.g. a rupee amount while it counts.
 */
export function useCountUp(to, suffix = '', duration = 1200, format = plain) {
  const ref = useRef(null);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Reduced-motion users skip the tween and see the final value straight away.
  const [value, setValue] = useState(reduced ? `${format(to)}${suffix}` : `${format(0)}${suffix}`);
  const formatRef = useRef(format);
  formatRef.current = format;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      setValue(`${formatRef.current(to)}${suffix}`);
      return;
    }

    let frame = 0;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = null;
        const step = (t) => {
          if (start === null) start = t;
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(`${formatRef.current(Math.round(to * eased))}${suffix}`);
          if (p < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, suffix, duration, reduced]);

  return { ref, value };
}
