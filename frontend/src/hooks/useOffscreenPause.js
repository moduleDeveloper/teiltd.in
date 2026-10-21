import { useLayoutEffect } from 'react';

/**
 * Marks every top-level block of the page (`main`'s children and the footer) with
 * `data-offscreen` while it is out of view. index.css pauses all animations inside a
 * marked block, so:
 * - looping effects (glows, orbits, aurora) stop using CPU/GPU when nobody sees them;
 * - one-shot entrance animations (word cascades, fade-ups, line draws) wait and play
 *   when the visitor scrolls to that section, instead of finishing unseen on page load.
 *
 * Any element with a `data-anim-scope` attribute gets the same treatment, for content
 * that sits far below the top of its own section.
 *
 * A block counts as visible once its top passes 88% of the viewport height.
 */
export function useOffscreenPause(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const blocks = root.querySelectorAll(':scope > main > *, :scope > footer, [data-anim-scope]');
    // Set before the first paint so nothing below the fold starts early.
    blocks.forEach((el) => el.setAttribute('data-offscreen', ''));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.target.toggleAttribute('data-offscreen', !entry.isIntersecting));
      },
      { rootMargin: '0px 0px -12% 0px' }
    );
    blocks.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootRef]);
}
