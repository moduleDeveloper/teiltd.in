import { Aurora, CascadeHeading, Reveal } from '@/components/ui';
import { card, cn, container, eyebrow, grid2, paragraph, sectionTight, shimmerText, tag } from '@/lib/styles';

/** Dashed line between two flow steps, with a glowing dot that travels down it as
 * part of the looping "Run Sale" animation (`dotClass` picks which leg of the loop). */
function DashedConnector({ dotClass }) {
  return (
    <div className="relative w-[10px] h-[36px] flex justify-center">
      <svg width="2" height="36" viewBox="0 0 2 36">
        <line x1="1" y1="0" x2="1" y2="36" stroke="var(--color-gold)" strokeWidth="2" strokeDasharray="3 4" />
      </svg>
      <span
        aria-hidden="true"
        className={cn(
          'absolute top-0 left-0 w-[10px] h-[10px] rounded-[50%] bg-gold-2 [box-shadow:0_0_12px_4px_rgba(247,212,136,0.75)] opacity-0 motion-reduce:hidden',
          dotClass
        )}
      />
    </div>
  );
}

export default function Solution() {
  return (
    <section className={cn(sectionTight, 'border-t border-t-line bg-bg-2 overflow-hidden relative')}>
      <Aurora />
      <div
        className={cn(container, grid2, 'relative z-[2] grid grid-cols-[1.1fr_0.9fr] gap-[64px] items-center')}
      >
        <Reveal variant="left" className="mobile:w-full mobile:items-center mobile:text-center">
          <div className={eyebrow}>The solution</div>
          <CascadeHeading continuous className="text-[52px] mt-[16px] leading-[1.18]">
            {[
              'Right Product. ',
              <span key="buyer" className={shimmerText}>Right Buyer.</span>,
              <br key="br" />,
              <span key="ai" className={shimmerText}>AI</span>,
              ' Does the Selling.',
            ]}
          </CascadeHeading>
          <p className={cn(paragraph, 'text-sub text-[16px] leading-[1.7] mt-[20px] max-w-[460px]')}>
            SETU matches each buyer with the product they actually need — then SETU AI Sales Engine takes it from
            there, automatically.
          </p>
          <div
            className="mt-[22px] inline-flex items-center gap-[10px] bg-[rgba(232,184,75,0.1)] border border-[rgba(232,184,75,0.4)] rounded-[999px] py-[11px] px-[22px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
            </svg>
            <span className="text-[14.5px] font-bold text-gold-2">
              You click <span className="text-[#fff]">&quot;Run Sale&quot;</span>. <span className={shimmerText}>SETU</span> takes it forward.
            </span>
          </div>
        </Reveal>
        <Reveal variant="right" className="flex flex-col items-center gap-0">
          <div className={cn(card, 'py-[16px] px-[28px] border-line-2 text-center w-fit')}>
            <span className="text-[13px] font-bold text-ink">You click &quot;Run Sale&quot;</span>
          </div>
          <DashedConnector dotClass="animate-run-dot-1" />
          <div
            className={cn(card, 'py-[34px] px-[40px] border-gold [box-shadow:0_0_50px_rgba(232,184,75,0.22)] text-center w-fit relative hover:[box-shadow:0_0_50px_rgba(232,184,75,0.22)] animate-run-core motion-reduce:animate-none!')}
          >
            <div
              className={cn(tag, 'absolute top-[-12px] left-[50%] [transform:translateX(-50%)] bg-gold text-[#1a1204] border-none border-current whitespace-nowrap')}
            >
              Does everything for you
            </div>
            <div className={cn(shimmerText, "[font-family:'Playfair_Display',serif] font-bold text-[24px]")}>
              SETU AI
              <br />
              Sales Engine
            </div>
          </div>
          <DashedConnector dotClass="animate-run-dot-2" />
          <div className={cn(card, 'py-[16px] px-[28px] border-[rgba(232,184,75,0.4)] text-center w-fit animate-run-done motion-reduce:animate-none!')}>
            <span className="inline-flex items-center gap-[8px] text-[13px] font-bold text-gold-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-0 animate-run-check motion-reduce:hidden">
                <path d="M20 6L9 17l-5-5" stroke="var(--color-green)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Sale closed
            </span>
          </div>
          <div className="mt-[18px] text-[12.5px] text-sub-2 text-center">
            System-driven selling. Less manual chasing.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
