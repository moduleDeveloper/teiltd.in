import { ExternalLink } from '@/components/ui';
import type { Solution } from '@/lib/types';

interface SolutionCardProps {
  solution: Solution;
}

/** One "Also from SETU" card. Only wraps itself in a link when the solution has an
 * external destination — cards with no destination yet (e.g. WhatsApp Automation)
 * stay plain, non-clickable cards. */
export default function SolutionCard({ solution }: SolutionCardProps) {
  const body = (
    <div className="card" style={{ padding: 26, opacity: solution.muted ? 0.85 : undefined }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 16 }}>
        {solution.icon}
      </svg>
      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{solution.title}</div>
      <div style={{ color: 'var(--sub)', fontSize: 13, lineHeight: 1.6 }}>{solution.description}</div>
    </div>
  );

  if (solution.type === 'external' && solution.link) {
    return (
      <ExternalLink href={solution.link} style={{ display: 'block', color: 'inherit' }}>
        {body}
      </ExternalLink>
    );
  }

  return body;
}
