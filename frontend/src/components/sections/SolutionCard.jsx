import { ExternalLink } from '@/components/ui';
import { card, cn } from '@/lib/styles';

/**
 * One "Also from SETU" card. Only wraps itself in a link when the solution has an
 * external destination — cards with no destination yet (e.g. WhatsApp Automation)
 * stay plain, non-clickable cards. `index` staggers the icon's draw-in.
 */
// Each icon line is hidden by a long dash and then "drawn" like a pen stroke.
const drawIcon =
  'mb-[16px] [&_*]:[stroke-dasharray:100] [&_*]:[stroke-dashoffset:100] [&_*]:[animation:iconDraw_1.6s_ease-out_var(--draw-delay)_forwards] motion-reduce:[&_*]:[stroke-dashoffset:0] motion-reduce:[&_*]:[animation:none]';

export default function SolutionCard({ solution, index = 0 }) {
  const body = (
    <div className={cn(card, 'p-[26px]', solution.muted && 'opacity-[0.85]')}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={drawIcon} style={{ '--draw-delay': `${0.5 + index * 0.15}s` }}>
        {solution.icon}
      </svg>
      <div className="font-bold text-[15px] mb-[6px]">{solution.title}</div>
      <div className="text-sub text-[13px] leading-[1.6]">{solution.description}</div>
    </div>
  );

  if (solution.type === 'external' && solution.link) {
    return (
      <ExternalLink href={solution.link} className="block text-inherit hover:text-inherit">
        {body}
      </ExternalLink>
    );
  }

  return body;
}
