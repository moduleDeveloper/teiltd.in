import { useEffect } from 'react';

/** Reproduces the reference's single global mousemove-driven 3D tilt on the hero app phone
 * ([data-hero-phone]) and parallax drift on the three-phone group ([data-hero-phones]),
 * matching the source's `document.querySelector` targeting rather than component refs.
 *
 * Mouse moves only record the pointer; the DOM is written at most once per frame
 * (requestAnimationFrame), and the two targets are looked up once, not on every move.
 *
 * The phone group only ever receives a `translate()` here — responsive centering/scaling
 * lives on the wrapper around it (Tailwind classes in AppInTwoMinutes), so this parallax
 * transform can never clobber or go stale against the responsive scale the way capturing
 * a computed "base" transform once on mount would. */
export function useHeroTilt() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Touch screens have no hover pointer to follow.
    if (window.matchMedia('(hover: none)').matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    let ph = null;
    let phones = null;

    const apply = () => {
      frame = 0;
      ph ??= document.querySelector('[data-hero-phone]');
      phones ??= document.querySelector('[data-hero-phones]');

      if (ph) {
        ph.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateY(${
          Math.sin(Date.now() / 900) * 6
        }px)`;
      }
      if (phones) {
        phones.style.transform = `translate(${x * -14}px,${y * -10}px)`;
      }
    };

    const onMove = (e) => {
      x = e.clientX / window.innerWidth - 0.5;
      y = e.clientY / window.innerHeight - 0.5;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);
}
