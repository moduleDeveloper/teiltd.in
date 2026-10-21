import { useEffect, useRef, useState } from 'react';

let sharedObserver = null;
const callbacks = new WeakMap();

function getObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target);
          if (cb) cb();
          sharedObserver?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  return sharedObserver;
}

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

/**
 * Mirrors the reference site's scroll-reveal (IntersectionObserver), including
 * the `min(siblingIndex, 5) * 90ms` stagger delay computed from DOM position.
 *
 * `done` turns true once the reveal transition has finished. Callers then drop the
 * reveal classes so the element's own transitions (e.g. a card's quick hover lift)
 * and no leftover stagger delay apply from then on.
 */
export function useReveal(staggerIndex = 0) {
  const ref = useRef(null);
  // Reduced-motion users skip the animation, so start already revealed.
  const [inView, setInView] = useState(() => window.matchMedia(reducedMotionQuery).matches);
  const [done, setDone] = useState(inView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia(reducedMotionQuery).matches) return;

    el.style.transitionDelay = `${Math.min(staggerIndex, 5) * 90}ms`;
    callbacks.set(el, () => setInView(true));
    const observer = getObserver();
    observer.observe(el);

    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, [staggerIndex]);

  useEffect(() => {
    const el = ref.current;
    if (!inView || done || !el) return;

    const finish = () => {
      el.style.transitionDelay = '';
      setDone(true);
    };
    const onEnd = (e) => {
      if (e.target === el && e.propertyName === 'opacity') finish();
    };
    el.addEventListener('transitionend', onEnd);
    // Safety net in case transitionend never fires (e.g. tab hidden mid-reveal).
    const timer = setTimeout(finish, 1600 + Math.min(staggerIndex, 5) * 90);
    return () => {
      el.removeEventListener('transitionend', onEnd);
      clearTimeout(timer);
    };
  }, [inView, done, staggerIndex]);

  return { ref, inView, done };
}
