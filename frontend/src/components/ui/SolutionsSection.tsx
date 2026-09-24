import { useState } from 'react';
import { AppButton } from '@/components/ui';
import { Reveal } from '@/components/ui';
import { MORE_SOLUTIONS, SOLUTIONS } from '@/lib/data/solutions';
import SolutionCard from './SolutionCard';

// Flip to true once there are additional solution cards to reveal — the button
// below already toggles `showMore`, it's just not rendered until then.
const SHOW_EXPLORE_ALL_BUTTON = false;

export default function SolutionsSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="solutions" className="section-tight" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
      <div className="container">
        <Reveal
          as="div"
          variant="up"
          className="sec-head"
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: SHOW_EXPLORE_ALL_BUTTON ? 'space-between' : 'center', marginBottom: 40 }}
        >
          <div style={{ textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              Also from SETU
            </div>
            <h2 style={{ fontSize: 32, marginTop: 14 }}>One backend. Every channel.</h2>
          </div>
          {SHOW_EXPLORE_ALL_BUTTON && (
            <AppButton variant="ghost" onClick={() => setShowMore((v) => !v)} style={{ padding: '11px 20px', fontSize: 13.5 }}>
              Explore all solutions
            </AppButton>
          )}
        </Reveal>
        <div className="grid4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
          {[...SOLUTIONS, ...(showMore ? MORE_SOLUTIONS : [])].map((solution, i) => (
            <Reveal as="div" variant="up" staggerIndex={i} key={solution.id}>
              <SolutionCard solution={solution} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
