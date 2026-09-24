import type { NavigationItem } from '../types';

/** Navbar entries. All four are same-page sections today; a future item can switch
 * to `route` (a real React Router path) or `externalUrl` without touching Navbar.tsx. */
export const NAV_ITEMS: NavigationItem[] = [
  { label: 'Home', sectionId: 'home' },
  { label: 'About', sectionId: 'about' },
  { label: 'Live Trusts', sectionId: 'live-platforms' },
  { label: 'Contact', sectionId: 'contact' },
];
