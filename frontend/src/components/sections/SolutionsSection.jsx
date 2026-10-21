import { useState } from 'react';
import { AppButton, CascadeHeading, Reveal } from '@/components/ui';
import { MORE_SOLUTIONS, SOLUTIONS } from '@/lib/data/solutions';
import SolutionCard from './SolutionCard';
import { cn, container, eyebrow, grid4, sectionTight } from '@/lib/styles';

// Flip to true once there are additional solution cards to reveal — the button
// below already toggles `showMore`, it's just not rendered until then.
const SHOW_EXPLORE_ALL_BUTTON = false;

export default function SolutionsSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="solutions" className={cn(sectionTight, 'border-t border-t-line bg-bg-2')}>
      <div className={container}>
        <Reveal
          as="div"
          variant="up"
          className={cn('mobile:flex-col mobile:items-center! mobile:gap-[16px] flex items-end mb-[40px]', SHOW_EXPLORE_ALL_BUTTON ? 'justify-between' : 'justify-center')}
        >
          <div className="text-center mobile:flex mobile:flex-col mobile:items-center">
            <div className={cn(eyebrow, 'justify-center')}>
              Also from SETU
            </div>
            <CascadeHeading continuous className="text-[32px] mt-[14px]">
              {['One backend. Every channel.']}
            </CascadeHeading>
          </div>
          {SHOW_EXPLORE_ALL_BUTTON && (
            <AppButton variant="ghost" onClick={() => setShowMore((v) => !v)} className="py-[11px] px-[20px] text-[13.5px]">
              Explore all solutions
            </AppButton>
          )}
        </Reveal>
        <div className={cn(grid4, 'grid grid-cols-[repeat(4,1fr)] gap-[18px]')}>
          {[...SOLUTIONS, ...(showMore ? MORE_SOLUTIONS : [])].map((solution, i) => (
            <Reveal as="div" variant="flip" staggerIndex={i} key={solution.id}>
              <SolutionCard solution={solution} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
