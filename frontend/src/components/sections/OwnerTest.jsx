import { CascadeHeading, Reveal } from '@/components/ui';
import { cn, container, eyebrow, glow, paragraph, sectionTight } from '@/lib/styles';

// Gold underline that sweeps under the key phrase once it has risen in.
const highlight =
  "relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[3px] after:rounded-[3px] after:bg-[linear-gradient(90deg,var(--color-gold-2),var(--color-gold),transparent)] after:origin-left after:[transform:scaleX(0)] after:animate-underline motion-reduce:after:animate-none! motion-reduce:after:[transform:none]";

export default function OwnerTest() {
  return (
    <section className={cn(sectionTight, 'border-t border-t-line overflow-hidden relative')}>
      <div
        className={cn(glow, 'w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(232,184,75,0.12),transparent_70%)] top-[-80px] left-[50%] [transform:translateX(-50%)]')}
      />
      <div
        className={cn(container, 'relative z-[2] text-center flex flex-col items-center gap-[18px]')}
      >
        <Reveal as="div" variant="up" staggerIndex={0} className={cn(eyebrow, 'justify-center')}>
          The owner test
        </Reveal>
        <CascadeHeading continuous className="text-[40px] max-w-[820px] leading-[1.2]">
          {[
            'If you take ',
            <span key="days" className={cn(highlight, 'bg-[linear-gradient(135deg,#f7d488_0%,#e8b84b_45%,#d9a53a_100%)] bg-clip-text text-transparent')}>
              15 days off
            </span>,
            ', does your selling continue — or slow down?',
          ]}
        </CascadeHeading>
        <Reveal as="p" variant="up" staggerIndex={2} className={cn(paragraph, 'text-sub text-[16px] max-w-[560px] leading-[1.7]')}>
          If it depends on a person, your business is owner-dependent. SETU makes it system-driven. You stay in
          control — without being stuck in every follow-up.
        </Reveal>
      </div>
    </section>
  );
}
