import { Reveal } from '@/components/ui';
import { card, cn, container, grid2, heading3, paragraph, sectionTight } from '@/lib/styles';

export default function AiHuman() {
  return (
    <section className={cn(sectionTight, 'border-t border-t-line bg-bg-2')}>
      <div className={cn(container, grid2, 'grid grid-cols-[1fr_1fr] gap-[20px]')}>
        <Reveal as="div" variant="left" className={cn(card, 'p-[36px]')}>
          <div
            className="w-[40px] h-[40px] rounded-[10px] bg-[rgba(240,201,106,0.12)] flex items-center justify-center mb-[18px] animate-spin-in motion-reduce:animate-none!"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="#f0c96a" strokeWidth="1.7" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#f0c96a" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className={cn(heading3, 'text-[22px]')}>AI handles the repetitive.</h3>
          <p className={cn(paragraph, 'text-sub text-[15px] leading-[1.7] mt-[10px]')}>
            Catalogue matching, explaining products, follow-up on stuck buyers and abandoned carts — with full memory
            of every conversation.
          </p>
        </Reveal>
        <Reveal as="div" variant="right" className={cn(card, 'p-[36px]')}>
          <div
            className="w-[40px] h-[40px] rounded-[10px] bg-[rgba(232,184,75,0.12)] flex items-center justify-center mb-[18px] animate-spin-in motion-reduce:animate-none!"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 21v-6a2 2 0 012-2h12a2 2 0 012 2v6" stroke="#e8b84b" strokeWidth="1.8" />
              <circle cx="12" cy="7" r="4" stroke="#e8b84b" strokeWidth="1.8" />
            </svg>
          </div>
          <h3 className={cn(heading3, 'text-[22px]')}>Your team closes the valuable.</h3>
          <p className={cn(paragraph, 'text-sub text-[15px] leading-[1.7] mt-[10px]')}>
            Bulk quantity, special pricing, negotiation — the call transfers to your salesman with everything the
            buyer saw, asked and wanted.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
