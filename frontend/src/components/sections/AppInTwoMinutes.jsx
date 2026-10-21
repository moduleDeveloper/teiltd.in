import { AppButton, Aurora } from '@/components/ui';
import { CascadeHeading } from '@/components/ui';
import { EXTERNAL_LINKS } from '@/lib/config/links';
import { useReveal } from '@/hooks/useReveal';
import PhoneFrame from './PhoneFrame';
import { btnPrimary, card, cn, container, glow, grid2, grid3, paragraph, pulse, revealHidden, revealShown, section, shimmerText, stepNum } from '@/lib/styles';

const CHECKS = ['AI-Powered Selling', 'Orders & Payments', 'Customer & Member Engagement'];

const STEPS = [
  { num: '1', numClass: 'border-gold text-gold', title: 'Share your details', desc: 'Name, logo, products or members' },
  {
    num: '2',
    numClass: 'border-cyan text-cyan',
    title: 'AI generates your app',
    desc: '2 – 5 minutes, fully exclusive',
  },
  {
    num: '3',
    numClass: 'border-gold text-gold',
    title: 'Run Sale & go live',
    desc: 'Start selling the same day',
    cardClass: 'border-[rgba(232,184,75,0.4)]',
    titleClass: 'text-gold-2',
  },
];

function Check({ label }) {
  return (
    <div className="flex items-center gap-[10px] text-[14px]">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17l-5-5" stroke="#f0c96a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </div>
  );
}

function StepCard({ index, step }) {
  const { ref, inView, done } = useReveal(index);
  return (
    <div
      ref={ref}
      className={cn(card, 'p-[24px] flex items-center gap-[16px] z-[1]', step.cardClass, done ? null : inView ? revealShown : revealHidden.up)}
    >
      {/* Circles fill with gold one after another (1, 2, 3) in step with the track below. */}
      <div
        className={cn(stepNum, step.numClass, 'animate-step-fill motion-reduce:animate-none!')}
        style={{ animationDelay: `${0.6 + index * 0.5}s` }}
      >
        {step.num}
      </div>
      <div>
        <div className={cn('font-bold', step.titleClass)}>{step.title}</div>
        <div className="text-[13px] text-sub">{step.desc}</div>
      </div>
    </div>
  );
}

export default function AppInTwoMinutes() {
  return (
    <section id="home" className={cn(section, 'pt-[36px]! tablet:pt-[28px]! mobile:pt-[22px]! hub:px-[56px]! overflow-hidden')}>
      <Aurora />
      <div
        className={cn(glow, 'w-[640px] h-[640px] bg-[radial-gradient(circle,rgba(240,201,106,0.12),transparent_70%)] top-[-160px] left-[-120px]')}
      />
      <div
        className={cn(glow, 'w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(232,184,75,0.12),transparent_70%)] bottom-[-200px] right-[-120px]')}
      />

      <div
        className={cn(container, grid2, 'relative z-[2] grid grid-cols-[0.9fr_1.1fr] gap-[56px] items-center hub:gap-[40px]!')}
      >
        <div className="mobile:w-full mobile:items-center mobile:text-center flex flex-col gap-[20px]">
          <CascadeHeading className="text-[48px] leading-[1.12]">
            {['Your Exclusive App', <br key="br1" />, 'Ready in 2 Minutes']}
          </CascadeHeading>
          <CascadeHeading className="text-[21px] leading-[1.35]">
            {[
              'Turn Connections',
              <br key="br2" />,
              'Into ',
              <span className={shimmerText} key="growth">
                Growth.
              </span>,
            ]}
          </CascadeHeading>
          <p className={cn(paragraph, 'text-sub text-[16px] leading-[1.7] max-w-[460px] m-0')}>
            Sell smarter, manage better and grow faster with SETU.
          </p>
          <div className="flex flex-col gap-[10px]">
            {CHECKS.map((c) => (
              <Check key={c} label={c} />
            ))}
          </div>
          <div className="mobile:flex-wrap flex gap-[14px] mt-[6px]">
            <AppButton variant="primary" href={EXTERNAL_LINKS.login} newTab={false} className={pulse}>
              Try Now
            </AppButton>
            <AppButton variant="ghost" href={EXTERNAL_LINKS.watchDemo}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5.5v13a1 1 0 001.5.86l10.5-6.5a1 1 0 000-1.72L9.5 4.64A1 1 0 008 5.5z" />
              </svg>
              Watch Demo
            </AppButton>
          </div>
        </div>

        <div
          className="tablet:h-[540px]! tablet:w-full hub:h-[460px]! mobile:h-[360px]! xs:h-[300px]! mini:h-[460px]! flex items-end justify-center gap-0 relative h-[600px]"
        >
          <div className="w-max tablet:absolute tablet:left-[50%] tablet:bottom-0 tablet:[transform:translateX(-50%)_scale(0.88)] tablet:origin-[bottom_center] hub:absolute hub:left-[50%] hub:bottom-0 hub:[transform:translateX(-50%)_scale(0.86)] hub:origin-[bottom_center] mobile:[transform:translateX(-50%)_scale(0.6)] xs:[transform:translateX(-50%)_scale(0.5)] mini:[transform:translateX(-50%)_scale(0.78)]!">
          <div data-hero-phones className="flex items-end justify-center w-max">
            <div className="absolute rounded-[50%] border border-dashed border-[rgba(232,184,75,0.25)] animate-spin-slow motion-reduce:animate-none! pointer-events-none mobile:block! w-[560px] h-[560px] top-[20px] left-[50%] ml-[-280px]" />

            {/* Phone 1: Business App */}
            <PhoneFrame
              logoSrc="/setu-logo-phone.webp"
              name="Logo"
              badgeLabel="BUSINESS APP"
              wrapperClass="[transform:translateX(30px)_translateY(30px)_rotate(-6deg)] z-[1]"
            >
              <div className="text-[12px] font-bold py-0 px-[4px]">Hello, Member</div>
              <div
                className="rounded-[14px] p-[14px] bg-[linear-gradient(135deg,rgba(232,184,75,0.18),rgba(232,184,75,0.04))] border border-[rgba(232,184,75,0.4)] flex flex-col gap-[6px]"
              >
                <div className="text-[8px] tracking-[0.1em] text-gold">DIGITAL ID</div>
                <div className="text-[13px] font-extrabold">[Member Name]</div>
                <div className="text-[9px] text-sub">[Association name] · ID 00421</div>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-[8px]">
                <div
                  className="bg-[rgba(232,184,75,0.05)] border border-line rounded-[12px] p-[12px] flex flex-col gap-[8px]"
                >
                  <div
                    className="w-[26px] h-[26px] rounded-[8px] bg-[rgba(232,184,75,0.12)] flex items-center justify-center"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" stroke="#e8b84b" strokeWidth="1.8" />
                      <path d="M4 21a8 8 0 0116 0" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="text-[10px] font-bold">Members</div>
                </div>
                <div
                  className="bg-[rgba(232,184,75,0.05)] border border-line rounded-[12px] p-[12px] flex flex-col gap-[8px]"
                >
                  <div
                    className="w-[26px] h-[26px] rounded-[8px] bg-[rgba(232,184,75,0.12)] flex items-center justify-center"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="5" width="18" height="16" rx="2" stroke="#e8b84b" strokeWidth="1.8" />
                      <path d="M3 10h18M8 3v4M16 3v4" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="text-[10px] font-bold">Events</div>
                </div>
              </div>
            </PhoneFrame>

            {/* Phone 2: Association App */}
            <PhoneFrame
              logoSrc="/setu-logo-phone.webp"
              name="Company Name"
              badgeLabel="ASSOCIATION APP"
              floatClass="animate-[floatY_6s_ease-in-out_-2s_infinite]"
              wrapperClass="z-[3]"
            >
              <div className="text-[12px] font-bold py-0 px-[4px]">Products</div>
              <div
                className="h-[30px] rounded-[9px] border border-line bg-[rgba(232,184,75,0.04)] flex items-center py-0 px-[10px] text-[9px] text-sub-2"
              >
                Search…
              </div>
              <div className="flex flex-col gap-[7px]">
                {[
                  {
                    name: 'MCB 32A Single Pole',
                    price: '₹240',
                    icon: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
                  },
                  {
                    name: 'Modular Switch 16A',
                    price: '₹85',
                    icon: (
                      <>
                        <rect x="6" y="4" width="12" height="16" rx="2" />
                        <circle cx="12" cy="9" r="1.4" />
                      </>
                    ),
                  },
                  {
                    name: 'LED Panel 18W',
                    price: '₹410',
                    icon: <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3 11c.6.5 1 1.3 1 2h4c0-.7.4-1.5 1-2a6 6 0 00-3-11z" />,
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-[10px] bg-[rgba(232,184,75,0.05)] border border-line rounded-[12px] py-[8px] px-[10px]"
                  >
                    <div
                      className="w-[34px] h-[34px] rounded-[9px] bg-[linear-gradient(135deg,rgba(232,184,75,0.22),rgba(232,184,75,0.06))] border border-[rgba(232,184,75,0.3)] flex items-center justify-center shrink-0"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#e8b84b"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-[10.5px] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
                      >
                        {item.name}
                      </div>
                      <div className="text-[9.5px] text-gold-2 font-semibold mt-[1px]">{item.price}</div>
                    </div>
                    <span
                      className="text-[9px] font-bold text-[#1a1204] bg-gold py-[4px] px-[10px] rounded-[999px] shrink-0"
                    >
                      View
                    </span>
                  </div>
                ))}
              </div>
              <div
                className={cn(btnPrimary, 'mt-auto justify-center p-[11px] w-[38px] h-[38px] rounded-[50%] self-center')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1204" strokeWidth="2.6" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </PhoneFrame>

            {/* Phone 3: NGO App */}
            <PhoneFrame
              logoSrc="/setu-logo-phone.webp"
              name="Your Name"
              badgeLabel="NGO APP"
              floatClass="animate-[floatY_6s_ease-in-out_-4s_infinite]"
              wrapperClass="[transform:translateX(-30px)_translateY(30px)_rotate(6deg)] z-[1]"
            >
              <div className="text-[12px] font-bold py-0 px-[4px]">Noticeboard</div>
              <div className="flex flex-col gap-[6px]">
                {[
                  { label: 'Annual general meeting', meta: '24 Oct' },
                  { label: 'Membership renewal', meta: 'Due' },
                  { label: 'Committee meeting', meta: '12 Oct' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center bg-[rgba(232,184,75,0.05)] border border-line rounded-[10px] py-[10px] px-[12px] text-[10.5px]"
                  >
                    <span>{item.label}</span>
                    <span className="text-sub-2 text-[9px]">{item.meta}</span>
                  </div>
                ))}
              </div>
              <div className="text-[9px] text-sub-2 tracking-[0.08em] pt-[4px] pb-0 px-[4px]">
                UPCOMING EVENT
              </div>
              <div
                className="rounded-[12px] p-[12px] bg-[rgba(232,184,75,0.05)] border border-line"
              >
                <div className="text-[11px] font-bold">Community gathering</div>
                <div className="text-[9px] text-sub mt-[3px]">Sunday · 10:00 AM</div>
              </div>
            </PhoneFrame>
          </div>
          </div>
        </div>
      </div>

      {/* Own animation scope: the steps sit below the fold, so their light-up waits
          until they are actually scrolled into view (see useOffscreenPause). */}
      <div data-anim-scope>
      <div
        className={cn(container, grid3, 'relative z-[2] mt-[56px] grid grid-cols-[repeat(3,1fr)] gap-[18px]')}
      >
        {STEPS.map((step, i) => (
          <StepCard key={step.num} index={i} step={step} />
        ))}
      </div>
      {/* Progress track under the steps: fills left to right as the circles light up. */}
      <div className={cn(container, 'relative z-[2] mt-[18px] h-[2px] rounded-[2px] bg-line overflow-hidden mobile:hidden')} aria-hidden="true">
        <div className="h-full origin-left [transform:scaleX(0)] bg-[linear-gradient(90deg,var(--color-gold-2),var(--color-gold))] [box-shadow:0_0_10px_rgba(232,184,75,0.6)] animate-[lineDraw_1.5s_ease-in-out_0.5s_forwards] motion-reduce:animate-none! motion-reduce:[transform:none]" />
      </div>
      </div>
    </section>
  );
}
