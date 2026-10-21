import { useEffect, useState } from 'react';

/**
 * True once the element comes within `margin` of the viewport (and stays true).
 * Used to start work such as an API request just before a section is seen,
 * instead of on page load.
 */
export function useNearViewport(ref, margin = '800px') {
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: `${margin} 0px ${margin} 0px` }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, margin, near]);

  return near;
}
