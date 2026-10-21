import { useEffect, useRef } from 'react';

/** Thin gold bar fixed to the top of the screen that fills as the page is scrolled.
 * Updates at most once per frame and only touches `transform`, so it never causes layout. */
export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (ref.current) ref.current.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
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
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left [transform:scaleX(0)] bg-[linear-gradient(90deg,#c8912a,var(--color-gold),var(--color-gold-2))] [box-shadow:0_0_12px_rgba(232,184,75,0.7)] pointer-events-none"
    />
  );
}
