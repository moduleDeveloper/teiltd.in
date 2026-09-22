import { SOLUTION_VIDEO_LINKS } from '../config/links';
import type { Solution } from '../types';

/** The "Also from SETU" cards. This is the single source of truth for that data —
 * the footer's Solutions column derives its entries from this array (see
 * data/footer.ts) instead of maintaining a second, easily-drifting copy. */
export const SOLUTIONS: Solution[] = [
  {
    id: 'digital-community',
    title: 'Digital Community Platform',
    description: 'For trusts, NGOs & societies.',
    link: SOLUTION_VIDEO_LINKS.digitalCommunity,
    type: 'external',
    icon: <path d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z" stroke="#e8b84b" strokeWidth="1.7" />,
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Automation',
    description: 'Automated, at scale.',
    // No destination yet — stays a non-clickable card, matching current behaviour.
    type: 'internal',
    sectionId: 'solutions',
    icon: (
      <path
        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
        stroke="#e8b84b"
        strokeWidth="1.6"
      />
    ),
  },
  {
    id: 'voice-agent',
    title: 'AI sales engine',
    description: 'Hindi & English, handled for you.',
    link: SOLUTION_VIDEO_LINKS.voiceAgent,
    type: 'external',
    icon: (
      <>
        <path d="M12 18v3M8 21h8" stroke="#f0c96a" strokeWidth="1.7" strokeLinecap="round" />
        <rect x="9" y="2" width="6" height="12" rx="3" stroke="#f0c96a" strokeWidth="1.7" />
        <path d="M5 10a7 7 0 0014 0" stroke="#f0c96a" strokeWidth="1.7" />
      </>
    ),
  },
  {
    id: 'digital-directory',
    title: 'Digital Directory',
    description: 'Simple & secure member directory.',
    link: SOLUTION_VIDEO_LINKS.digitalDirectory,
    type: 'external',
    muted: true,
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#9a9fb0" strokeWidth="1.7" />
        <path d="M3 9h18M8 4v5" stroke="#9a9fb0" strokeWidth="1.7" />
      </>
    ),
  },
];

/** Extra cards to reveal once "Explore all solutions" is shown again; empty for now. */
export const MORE_SOLUTIONS: Solution[] = [];
