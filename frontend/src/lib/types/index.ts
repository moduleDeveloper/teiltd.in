import type { CSSProperties, ReactNode } from 'react';

/** A navbar/footer nav entry: either scrolls to a same-page section, routes via
 * React Router, or leaves the app entirely. Exactly one of these should be set. */
export interface NavigationItem {
  label: string;
  sectionId?: string;
  route?: string;
  externalUrl?: string;
}

export type SolutionLinkType = 'internal' | 'external';

/** One "Also from SETU" solution — reused both for the card grid and the footer's
 * Solutions column so the two never drift out of sync. */
export interface Solution {
  id: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  /** External destination (e.g. a YouTube walkthrough). Required when type is 'external'. */
  link?: string;
  /** Same-page section to scroll to when type is 'internal' and a link exists. */
  sectionId?: string;
  type: SolutionLinkType;
  muted?: boolean;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
  background: string;
  borderRadius: number;
  bounceDelay: string;
}

/** A single row rendered in a footer column — either an external URL or a same-page
 * section to scroll to. */
export interface FooterLinkItem {
  label: string;
  href?: string;
  external?: boolean;
  sectionId?: string;
}

export interface FooterSection {
  title: string;
  items: FooterLinkItem[];
}

export type AppButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface AppButtonBaseProps {
  variant?: AppButtonVariant;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  'aria-label'?: string;
  /** Only relevant for the plain <button> branch (no href/to/sectionId) — lets a
   * button submit its enclosing <form> instead of just being a click target. */
  type?: 'button' | 'submit';
}
