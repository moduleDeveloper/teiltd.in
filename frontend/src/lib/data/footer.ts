import { SOLUTIONS } from './solutions';
import type { FooterLinkItem, FooterSection } from '../types';

// The footer's copy for a couple of entries differs slightly from the card titles
// (shorter labels read better in a narrow column) — mapped here rather than forking
// the underlying data.
const FOOTER_LABEL_OVERRIDES: Record<string, string> = {
  'digital-community': 'Community Platform',
};

const solutionFooterItems: FooterLinkItem[] = SOLUTIONS.map((solution) => ({
  label: FOOTER_LABEL_OVERRIDES[solution.id] ?? solution.title,
  href: solution.type === 'external' ? solution.link : undefined,
  external: solution.type === 'external',
  sectionId: solution.type === 'internal' ? solution.sectionId : undefined,
}));

const FOOTER_SOLUTIONS_ITEMS: FooterLinkItem[] = [
  { label: 'AI Sales Engine', sectionId: 'ai-sales-engine' },
  ...solutionFooterItems,
];

const FOOTER_COMPANY_ITEMS: FooterLinkItem[] = [
  { label: 'About', sectionId: 'about' },
  { label: 'Live Trusts', sectionId: 'live-platforms' },
  { label: 'Contact', sectionId: 'contact' },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  { title: 'Solutions', items: FOOTER_SOLUTIONS_ITEMS },
  { title: 'Company', items: FOOTER_COMPANY_ITEMS },
];
