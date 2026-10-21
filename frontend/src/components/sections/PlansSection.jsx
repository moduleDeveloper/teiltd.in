import { useRef, useState } from 'react';
import { AppButton, CascadeHeading, Reveal } from '@/components/ui';
import { EXTERNAL_LINKS } from '@/lib/config/links';
import { useCatalog } from '@/hooks/useCatalog';
import { useCountUp } from '@/hooks/useCountUp';
import { useNearViewport } from '@/hooks/useNearViewport';
import { card, cn, container, eyebrow, heading3, paragraph, sectionTight } from '@/lib/styles';

/** Plans shown before the "View all plans" button is used. */
const INITIAL_VISIBLE = 3;

/** Features shown per card until "View more" is used. */
const INITIAL_FEATURES = 5;

const FEATURED_CODE =import.meta.env.VITE_FEATURED_PRODUCT_CODE;

const PLAN_ICONS = [
  <>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M16 14.2c2.9.2 5 2.4 5 5.3" />
  </>,
  <>
    <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </>,
  <>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 10v10h14V10" />
    <path d="M9 20v-6h6v6" />
  </>,
];

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

const formatInr = (n) => inr.format(n);

const CYCLE = {
  yearly: { unit: 'year', billed: 'billed yearly' },
  monthly: { unit: 'month', billed: 'billed monthly' },
  quarterly: { unit: 'quarter', billed: 'billed quarterly' },
};

function PlanCard({ plan, index, featured }) {
  // Per-card: expanding one card leaves the others as they are.
  const [expanded, setExpanded] = useState(false);
  const onToggle = () => setExpanded((v) => !v);
  const hasMore = plan.features.length > INITIAL_FEATURES;
  const shownFeatures = expanded ? plan.features : plan.features.slice(0, INITIAL_FEATURES);
  const cycle = CYCLE[plan.billingType] ?? { unit: plan.billingType, billed: `billed ${plan.billingType}` };
  const loginUrl = `${EXTERNAL_LINKS.login}?${new URLSearchParams({ plan: plan.code }).toString()}`;
  // Price counts up from ₹0 when the card scrolls into view.
  const { ref: priceRef, value: price } = useCountUp(plan.price, '', 1100, formatInr);

  return (
    <Reveal as="div" variant="up" staggerIndex={index} className={cn(card, 'pt-[20px] px-[20px] pb-[14px] flex flex-col gap-[14px]', featured && 'border-gold [box-shadow:0_0_40px_rgba(232,184,75,0.14)]')}>
      {featured && <span className="absolute top-[-12px] left-[50%] [transform:translateX(-50%)] px-[14px] py-[4px] rounded-[999px] bg-[linear-gradient(135deg,var(--color-gold-2),var(--color-gold))] text-[#1a1204] text-[10px] font-extrabold tracking-[0.08em] uppercase whitespace-nowrap">Most chosen</span>}
      <div className="flex items-center gap-[12px] min-h-[62px] pb-[14px] border-b border-b-line">
        <div className="w-[40px] h-[40px] rounded-[10px] border border-line-2 bg-[rgba(232,184,75,0.08)] flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {PLAN_ICONS[index % PLAN_ICONS.length]}
          </svg>
        </div>
        <h3 className={cn(heading3, 'text-[18px] line-clamp-2 leading-[1.25]')} title={plan.name}>
          {plan.name}
        </h3>
      </div>

      <div className="min-h-[98px] pb-[14px] border-b border-b-line">
        {plan.discountPct > 0 && plan.mrp > plan.price && (
          <div className="flex items-center gap-[10px] mb-[8px]">
            <span className="text-[12px] text-sub-2 line-through">{inr.format(plan.mrp)}</span>
            <span className="text-[10px] font-extrabold tracking-[0.04em] uppercase px-[8px] py-[2px] rounded-[999px] bg-[linear-gradient(135deg,var(--color-gold-2),var(--color-gold))] text-[#1a1204]">{Math.round(plan.discountPct)}% off</span>
          </div>
        )}
        <div className="font-display text-[28px] font-bold text-gold-2 leading-[1.15]">
          <span ref={priceRef} className="[font-variant-numeric:tabular-nums]">{price}</span> <span className="font-inter text-[13px] font-normal text-sub">/ {cycle.unit}</span>
        </div>
        <div className="mt-[6px] text-[11px] text-sub-2">
          + {plan.gstPct}% GST · {cycle.billed}
        </div>
      </div>

      {/* Collapsed cards reserve 5 single-line rows so every card lines up. */}
      <ul className={cn('list-none m-0 p-0 flex flex-col gap-[9px] text-[12.5px] text-sub', !expanded && 'min-h-[135px]')}>
        {shownFeatures.map((f, i) => (
          <li
            key={`${f.attribute_name}-${i}`}
            // Extra features shown by "View more" fade in one after another.
            className={cn('flex items-center gap-[10px]', i >= INITIAL_FEATURES && 'animate-[fadeUp_0.45s_cubic-bezier(0.2,0.7,0.2,1)_both] motion-reduce:animate-none!')}
            style={i >= INITIAL_FEATURES ? { animationDelay: `${(i - INITIAL_FEATURES) * 0.05}s` } : undefined}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#cbb98c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
            <span className={expanded ? undefined : 'line-clamp-1'}>
              {f.attribute_name}: <strong className="text-ink font-bold">{f.value}</strong>
            </span>
          </li>
        ))}
      </ul>

      <AppButton variant="primary" href={loginUrl} newTab={false} className="px-[22px] py-[12px] text-[14px] justify-center w-full">
        Try Now
      </AppButton>
      {/* Cards with <= 5 features keep an invisible placeholder so every card stays the same size. */}
      <button
        type="button"
        className={cn("self-center mt-[-8px] inline-flex items-center gap-[6px] bg-none border-none px-[8px] py-[4px] text-gold [font:600_13px_'Inter',system-ui,sans-serif] cursor-pointer hover:text-gold-2", !hasMore && 'invisible')}
        onClick={onToggle}
        aria-expanded={expanded}
        aria-hidden={!hasMore}
        tabIndex={hasMore ? 0 : -1}
      >
        {expanded ? 'View less' : 'View more'}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={expanded ? '[transform:rotate(180deg)]' : undefined}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </Reveal>
  );
}

const skeletonBar =
  'block rounded-[8px] bg-[linear-gradient(90deg,rgba(232,184,75,0.06),rgba(232,184,75,0.16),rgba(232,184,75,0.06))] [background-size:200%_100%] animate-plan-shimmer motion-reduce:animate-none!';

function PlanSkeleton() {
  return (
    <div className={cn(card, 'pt-[20px] px-[20px] pb-[14px] flex flex-col gap-[14px] min-h-[420px]')} aria-hidden="true">
      <i className={cn(skeletonBar, 'w-[55%] h-[22px]')} />
      <i className={cn(skeletonBar, 'w-[40%] h-[14px] mt-[26px]')} />
      <i className={cn(skeletonBar, 'w-[65%] h-[34px]')} />
      <i className={cn(skeletonBar, 'w-full h-[12px] mt-[26px]')} />
      <i className={cn(skeletonBar, 'w-[90%] h-[12px]')} />
      <i className={cn(skeletonBar, 'w-[80%] h-[12px]')} />
      <i className={cn(skeletonBar, 'w-full h-[42px] mt-auto rounded-[999px]')} />
    </div>
  );
}

export default function PlansSection() {
  const sectionRef = useRef(null);
  // Ask the API for plans only when the section is getting close to the screen,
  // so the first screen never waits on it.
  const near = useNearViewport(sectionRef);
  const { plans, status, retry } = useCatalog({ enabled: near });
  const [showAll, setShowAll] = useState(false);

  // Nothing to sell (empty catalog) -> don't render an empty section.
  if (status === 'success' && plans.length === 0) return null;

  const visiblePlans = showAll ? plans : plans.slice(0, INITIAL_VISIBLE);
  const featuredIndex = FEATURED_CODE ? plans.findIndex((p) => p.code === FEATURED_CODE) : plans.length >= 3 ? 1 : -1;

  return (
    <section ref={sectionRef} id="plans" className={cn(sectionTight, 'border-t border-t-line')}>
      <div className={container}>
        <div className="max-w-[640px] mt-0 mb-[40px] mx-auto text-center">
          <div className={cn(eyebrow, 'justify-center')}>
            Our products
          </div>
          <CascadeHeading continuous className="text-[38px] mt-[14px] leading-[1.2]">
            {['Plans that power your app.']}
          </CascadeHeading>
          <p className={cn(paragraph, 'text-sub text-[14.5px] leading-[1.7] mt-[14px]')}>
            Pick the plan that fits your business and get your own exclusive app. AI-powered, all set up under your name. Subscribe once, compare
            features below, and launch your app in minutes.
          </p>
        </div>

        {status === 'error' ? (
          <div className={cn(card, 'p-[32px] text-center flex flex-col items-center gap-[16px] text-sub')} role="alert">
            <p className={paragraph}>We couldn&apos;t load the plans right now.</p>
            <AppButton variant="ghost" onClick={retry}>
              Try again
            </AppButton>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-[repeat(3,1fr)] gap-[22px] [align-items:start] pt-[14px] below960:grid-cols-[repeat(2,1fr)] below640:grid-cols-[1fr]" aria-busy={status === 'loading'}>
              {status === 'loading'
                ? [0, 1, 2].map((i) => <PlanSkeleton key={i} />)
                : visiblePlans.map((plan, i) => <PlanCard key={plan.id} plan={plan} index={i} featured={i === featuredIndex} />)}
            </div>
            {status === 'success' && plans.length > INITIAL_VISIBLE && (
              <div className="flex justify-center mt-[32px]">
                <AppButton variant="ghost" onClick={() => setShowAll((v) => !v)} aria-expanded={showAll}>
                  {showAll ? 'Show fewer plans' : `View all plans (${plans.length})`}
                </AppButton>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
