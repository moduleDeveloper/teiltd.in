/** Height (in px) to offset a scroll target by when the nav is fixed/sticky, so the
 * section heading doesn't land underneath it. Returns 0 when the nav is in normal
 * flow (its current state), computed live rather than hardcoded so this stays
 * correct if the header's positioning ever changes. */
export function getHeaderOffset(): number {
  const nav = document.querySelector<HTMLElement>('.nav');
  if (!nav) return 0;
  const navPosition = getComputedStyle(nav).position;
  if (navPosition !== 'fixed' && navPosition !== 'sticky') return 0;
  return nav.getBoundingClientRect().height + 12;
}

/** Smoothly scrolls to a section by id, safely no-op'ing if the element doesn't
 * exist (e.g. a stale link, or the section hasn't mounted yet). */
export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({ top, behavior: 'smooth' });
}
