import { useEffect } from 'react';

/** Reproduces the reference site's global gold spark trail: throttled to ~24ms,
 * spawns 2 particles per tick at a random angle/distance, each fading out over 800ms. */
export default function CursorSpark() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let last = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - last < 24) return;
      last = now;

      for (let i = 0; i < 2; i++) {
        const sp = document.createElement('div');
        sp.className = 'spark';
        const a = Math.random() * Math.PI * 2;
        const d = 14 + Math.random() * 22;
        sp.style.setProperty('--dx', `${Math.cos(a) * d}px`);
        sp.style.setProperty('--dy', `${Math.sin(a) * d}px`);
        sp.style.left = `${e.pageX + (Math.random() - 0.5) * 6}px`;
        sp.style.top = `${e.pageY + (Math.random() - 0.5) * 6}px`;
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
