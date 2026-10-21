import { useEffect, useState } from 'react';

/**
 * `scrolled`: the page has moved away from the very top.
 * `hidden`: the visitor is scrolling down past the first screen (the sticky navbar
 * slides away); scrolling up brings it back.
 * Reads scroll position at most once per animation frame and only re-renders when
 * one of the two flags actually changes.
 */
export function useScrollState() {
  const [state, setState] = useState({ scrolled: false, hidden: false });

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY;
      // Ignore tiny jitters so the bar doesn't flicker.
      if (Math.abs(delta) < 6) return;
      const scrolled = y > 24;
      const hidden = delta > 0 && y > 320;
      lastY = y;
      setState((prev) => (prev.scrolled === scrolled && prev.hidden === hidden ? prev : { scrolled, hidden }));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return state;
}
