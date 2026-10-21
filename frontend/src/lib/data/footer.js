import { EXTERNAL_LINKS } from '@/lib/config/links';
import { SOLUTIONS } from './solutions';

// The footer's copy for a couple of entries differs slightly from the card titles
// (shorter labels read better in a narrow column) — mapped here rather than forking
// the underlying data.
const FOOTER_LABEL_OVERRIDES = {
  'digital-community': 'Community Platform',
};

const solutionFooterItems = SOLUTIONS.map((solution) => ({
  label: FOOTER_LABEL_OVERRIDES[solution.id] ?? solution.title,
  href: solution.type === 'external' ? solution.link : undefined,
  external: solution.type === 'external',
  sectionId: solution.type === 'internal' ? solution.sectionId : undefined,
}));

const FOOTER_SOLUTIONS_ITEMS = [
  { label: 'AI Sales Engine', sectionId: 'ai-sales-engine' },
  ...solutionFooterItems,
];

const FOOTER_COMPANY_ITEMS = [
  { label: 'About', sectionId: 'about' },
  { label: 'Pricing', sectionId: 'plans' },
  // { label: 'Live Trusts', sectionId: 'live-platforms' }, // section hidden for now
  { label: 'Contact', sectionId: 'contact' },
];

const FOOTER_PANEL_ITEMS = [{ label: 'Investor Panel', href: EXTERNAL_LINKS.investorPanel, external: true }];

export const FOOTER_SECTIONS = [
  { title: 'Solutions', items: FOOTER_SOLUTIONS_ITEMS },
  { title: 'Company', items: FOOTER_COMPANY_ITEMS },
  { title: 'Panel', items: FOOTER_PANEL_ITEMS },
];
