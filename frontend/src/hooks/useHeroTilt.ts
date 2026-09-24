import { useEffect } from 'react';

/** Reproduces the reference's single global mousemove-driven 3D tilt on `.app-phone`
 * (hero 2) and parallax drift on `.phones` (the three-phone group in hero 1), matching
 * the source's `document.querySelector` targeting exactly rather than component refs.
 *
 * `.phones` only ever receives a `translate()` here — responsive centering/scaling
 * lives entirely in CSS on the `.phones-position` wrapper around it (see
 * App.css), so this parallax transform can never clobber or go stale
 * against the responsive scale the way capturing a computed "base" transform once
 * on mount would. */
export function useHeroTilt() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      const ph = document.querySelector<HTMLElement>('.app-phone');
      if (ph) {
        ph.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateY(${
          Math.sin(Date.now() / 900) * 6
        }px)`;
      }

      const phones = document.querySelector<HTMLElement>('.phones');
      if (phones) {
        phones.style.transform = `translate(${x * -14}px,${y * -10}px)`;
      }
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);
}
