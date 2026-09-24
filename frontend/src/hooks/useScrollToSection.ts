import { useCallback, type MouseEvent } from 'react';
import { scrollToSection } from '@/lib/utils/navigation';

/** Centralizes same-page section navigation so components never call
 * `document.getElementById` / `window.scrollTo` directly. `getClickHandler` returns
 * a ready-to-spread onClick for a real `<a href="#id">`, so the link stays a valid,
 * crawlable anchor while the actual scroll (with header-offset awareness) is
 * handled here. */
export function useScrollToSection() {
  const goTo = useCallback((id: string) => scrollToSection(id), []);

  const getClickHandler = useCallback(
    (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection(id);
    },
    []
  );

  return { scrollToSection: goTo, getClickHandler };
}
