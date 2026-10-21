import { useEffect } from 'react';

/** Reproduces the reference site's global gold spark trail: throttled to ~24ms,
 * spawns 2 particles per tick at a random angle/distance, each fading out over 800ms. */
export default function CursorSpark() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Phones/tablets have no cursor to trail.
    if (window.matchMedia('(hover: none)').matches) return;

    let last = 0;
    const onMove = (e) => {
      const now = performance.now();
      if (now - last < 24) return;
      last = now;

      for (let i = 0; i < 2; i++) {
        const sp = document.createElement('div');
        sp.className =
          'fixed w-[6px] h-[6px] rounded-[50%] bg-[radial-gradient(circle,#fff3c4,#e8b84b_60%,transparent_70%)] [box-shadow:0_0_8px_#e8b84b] pointer-events-none z-[99] animate-spark';
        const a = Math.random() * Math.PI * 2;
        const d = 14 + Math.random() * 22;
        sp.style.setProperty('--dx', `${Math.cos(a) * d}px`);
        sp.style.setProperty('--dy', `${Math.sin(a) * d}px`);
        // Viewport-fixed so sparks near the screen edge never widen the page (no horizontal scrollbar).
        sp.style.left = `${e.clientX + (Math.random() - 0.5) * 6}px`;
        sp.style.top = `${e.clientY + (Math.random() - 0.5) * 6}px`;
        const size = 3 + Math.random() * 4;
        sp.style.width = `${size}px`;
        sp.style.height = `${size}px`;
        document.body.appendChild(sp);
        setTimeout(() => sp.remove(), 800);
      }
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return null;
}
