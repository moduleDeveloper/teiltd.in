import { useEffect, useState } from 'react';

/**
 * Returns the id of the section the visitor is currently reading: of `ids`, the one
 * whose top is closest above the middle of the screen. At the very bottom of the page
 * the lowest section wins (the footer is too short to reach the middle).
 * Checks at most once per animation frame. `ids` must be a stable array (any order).
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.45;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = ids[0] ?? null;
      let best = -Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        // The closest section above the line wins (at the bottom: the lowest one).
        if ((atBottom || top <= line) && top > best) {
          best = top;
          current = id;
        }
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}
