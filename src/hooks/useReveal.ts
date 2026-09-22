import { useEffect, useRef, useState } from 'react';

let sharedObserver: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, () => void>();

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

/** Mirrors the reference site's `.rv/.rv-l/.rv-r` IntersectionObserver reveal, including
 * the `min(siblingIndex, 5) * 90ms` stagger delay computed from DOM position. */
export function useReveal<T extends HTMLElement>(staggerIndex = 0) {
  const ref = useRef<T | null>(null);
  // Reduced-motion users skip the animation, so start already revealed.
  const [inView, setInView] = useState(() => window.matchMedia(reducedMotionQuery).matches);

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

  return { ref, inView };
}
