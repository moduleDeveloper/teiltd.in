import { useState, type ReactNode } from 'react';
import { AppButton } from '@/components/ui';
import { Reveal } from '@/components/ui';
import { EXTERNAL_LINKS } from '@/lib/config/links';
import { useCatalog } from '@/hooks/useCatalog';
import type { Plan } from '@/lib/types/catalog';

/** Plans shown before the "View all plans" button is used. */
const INITIAL_VISIBLE = 3;

/** Features shown per card until "View more" is used. */
const INITIAL_FEATURES = 5;

const FEATURED_CODE =import.meta.env.VITE_FEATURED_PRODUCT_CODE;

const PLAN_ICONS: ReactNode[] = [
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

const CYCLE: Record<string, { unit: string; billed: string }> = {
  yearly: { unit: 'year', billed: 'billed yearly' },
  monthly: { unit: 'month', billed: 'billed monthly' },
  quarterly: { unit: 'quarter', billed: 'billed quarterly' },
};

function PlanCard({ plan, index, featured }: { plan: Plan; index: number; featured: boolean }) {
  // Per-card: expanding one card leaves the others as they are.
  const [expanded, setExpanded] = useState(false);
  const onToggle = () => setExpanded((v) => !v);
  const hasMore = plan.features.length > INITIAL_FEATURES;
  const shownFeatures = expanded ? plan.features : plan.features.slice(0, INITIAL_FEATURES);
  const cycle = CYCLE[plan.billingType] ?? { unit: plan.billingType, billed: `billed ${plan.billingType}` };
  const loginUrl = `${EXTERNAL_LINKS.login}?${new URLSearchParams({ plan: plan.code }).toString()}`;

  return (
    <Reveal as="div" variant="up" staggerIndex={index} className={`card plan-card${featured ? ' plan-card--featured' : ''}`}>
      {featured && <span className="plan-badge">Most chosen</span>}
      <div className="plan-head">
        <div className="plan-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {PLAN_ICONS[index % PLAN_ICONS.length]}
          </svg>
        </div>
        <h3 style={{ fontSize: 18 }} title={plan.name}>
          {plan.name}
        </h3>
      </div>

      <div className="plan-price">
        {plan.discountPct > 0 && plan.mrp > plan.price && (
          <div className="plan-mrp-row">
            <span className="plan-mrp">{inr.format(plan.mrp)}</span>
            <span className="plan-off">{Math.round(plan.discountPct)}% off</span>
          </div>
        )}
        <div className="plan-amount">
          {inr.format(plan.price)} <span>/ {cycle.unit}</span>
        </div>
        <div className="plan-gst">
          + {plan.gstPct}% GST · {cycle.billed}
        </div>
      </div>

      <ul className={`plan-features${expanded ? '' : ' plan-features--clamped'}`}>
        {shownFeatures.map((f, i) => (
          <li key={`${f.attribute_name}-${i}`}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#cbb98c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
            <span>
              {f.attribute_name}: <strong>{f.value}</strong>
            </span>
          </li>
        ))}
      </ul>

      <AppButton variant="primary" href={loginUrl} newTab={false} className="plan-cta">
        Try Now
      </AppButton>
      {/* Cards with <= 5 features keep an invisible placeholder so every card stays the same size. */}
      <button
        type="button"
        className="plan-more"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-hidden={!hasMore}
        tabIndex={hasMore ? 0 : -1}
        style={hasMore ? undefined : { visibility: 'hidden' }}
      >
        {expanded ? 'View less' : 'View more'}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: expanded ? 'rotate(180deg)' : undefined }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </Reveal>
  );
}

function PlanSkeleton() {
  return (
    <div className="card plan-card plan-skeleton" aria-hidden="true">
      <i style={{ width: '55%', height: 22 }} />
      <i style={{ width: '40%', height: 14, marginTop: 26 }} />
      <i style={{ width: '65%', height: 34 }} />
      <i style={{ width: '100%', height: 12, marginTop: 26 }} />
      <i style={{ width: '90%', height: 12 }} />
      <i style={{ width: '80%', height: 12 }} />
      <i style={{ width: '100%', height: 42, marginTop: 'auto', borderRadius: 999 }} />
    </div>
  );
}

export default function PlansSection() {
  const { plans, status, retry } = useCatalog();
  const [showAll, setShowAll] = useState(false);

  // Nothing to sell (empty catalog) -> don't render an empty section.
  if (status === 'success' && plans.length === 0) return null;

  const visiblePlans = showAll ? plans : plans.slice(0, INITIAL_VISIBLE);
  const featuredIndex = FEATURED_CODE ? plans.findIndex((p) => p.code === FEATURED_CODE) : plans.length >= 3 ? 1 : -1;

  return (
    <section id="plans" className="section-tight" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div style={{ maxWidth: 640, margin: '0 auto 40px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            Our products
          </div>
          <h2 style={{ fontSize: 38, marginTop: 14, lineHeight: 1.2 }}>Plans that power your app.</h2>
          <p style={{ color: 'var(--sub)', fontSize: 14.5, lineHeight: 1.7, marginTop: 14 }}>
            Pick the plan that fits your business and get your own exclusive app. AI-powered, all set up under your name. Subscribe once, compare
            features below, and launch your app in minutes.
          </p>
        </div>

        {status === 'error' ? (
          <div className="card plan-error" role="alert">
            <p>We couldn&apos;t load the plans right now.</p>
            <AppButton variant="ghost" onClick={retry}>
              Try again
            </AppButton>
          </div>
        ) : (
          <>
            <div className="plans-grid" aria-busy={status === 'loading'}>
              {status === 'loading'
                ? [0, 1, 2].map((i) => <PlanSkeleton key={i} />)
                : visiblePlans.map((plan, i) => <PlanCard key={plan.id} plan={plan} index={i} featured={i === featuredIndex} />)}
            </div>
            {status === 'success' && plans.length > INITIAL_VISIBLE && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
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
