import { useEffect, useRef, useState } from 'react';
import { Aurora, Reveal } from '@/components/ui';
import { card, cn, container, glow, grid2, heading2, paragraph, sectionTight, stepNum, tag } from '@/lib/styles';

/** How an app gets made on SETU, in the order the user does it. */
const STEPS = [
  { num: '1', title: 'Enter your business name', desc: 'e.g. "Royal Jewellers" for an e-commerce app.' },
  { num: '2', title: 'Add your logo', desc: 'Your brand on the icon, header and every screen.' },
  { num: '3', title: 'SETU AI builds your app', desc: 'A ready app in 2 – 5 minutes, fully exclusive.' },
  { num: '4', title: 'Customise your features', desc: 'Switch on exactly what your business needs.' },
];

/** The main features a business can switch on (from the rest of the site). */
const FEATURES = [
  'Create in 2 Minutes',
  'Product catalogue',
  'Orders & payments',
  'Members & digital ID',
  'Events & noticeboard',
  'WhatsApp automation',
];

/** Category circles on the generated phone (jewellery store example). */
// Photos live in frontend/public/about/ (ring-1.jpg ... ring-9.jpg).
// A missing photo falls back to the gold gradient behind it.
const APP_CATEGORIES = [
  { name: 'Rings', img: '/about/ring-7.jpg' },
  { name: 'Antique', img: '/about/ring-8.jpg' },
  { name: 'Temple', img: '/about/ring-9.jpg' },
];

/** Photo that hides itself if the file is not there yet. */
function AppPhoto({ src, className }) {
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
      className={cn('absolute inset-0 w-full h-full object-cover', className)}
    />
  );
}

/** Product tiles on the generated phone. */
const APP_PRODUCTS = [
  { name: 'Ruby Emerald Lotus Gold Ring', img: '/about/ring-1.jpg' },
  { name: 'Emerald Paisley Gold Ring', img: '/about/ring-2.jpg' },
  { name: 'Emerald Peacock Gold Ring', img: '/about/ring-3.jpg' },
  { name: 'Emerald Ruby Floral Gold Ring', img: '/about/ring-4.jpg' },
  { name: 'Royal Peacock Gold Ring', img: '/about/ring-5.jpg' },
  { name: 'Ruby Floral Gold Ring', img: '/about/ring-6.jpg' },
];

/** Typed out headline: [plain part, gold part]. */
const TAGLINE = ['Your own business app, ', 'ready in minutes.'];

/**
 * Types the tagline letter by letter in a loop: type, pause, erase, pause, type again.
 * It only runs while the line is on screen. The not-yet-typed letters stay in the layout
 * (invisible), so the text never jumps. Reduced-motion users get the full line, no animation.
 */
function TypewriterTagline() {
  const ref = useRef(null);
  const total = TAGLINE.join('').length;
  const [count, setCount] = useState(() => (window.matchMedia('(prefers-reduced-motion: reduce)').matches ? total : 0));

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let timer = 0;
    let typed = 0;
    let erasing = false;

    const step = () => {
      if (!erasing) {
        typed += 1;
        setCount(typed);
        if (typed >= total) {
          erasing = true;
          timer = setTimeout(step, 1800); // hold the full line before erasing
        } else {
          timer = setTimeout(step, 55);
        }
      } else {
        typed -= 1;
        setCount(typed);
        if (typed <= 0) {
          erasing = false;
          timer = setTimeout(step, 500); // short pause before typing again
        } else {
          timer = setTimeout(step, 28);
        }
      }
    };

    // Pause the loop while the line is off screen, carry on when it comes back.
    const io = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timer);
        if (entry.isIntersecting) timer = setTimeout(step, 400);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, [total]);

  const [first, second] = TAGLINE;
  const split = (text, from) => [text.slice(0, Math.max(0, count - from)), text.slice(Math.max(0, count - from))];
  const [firstDone, firstRest] = split(first, 0);
  const [secondDone, secondRest] = split(second, first.length);
  const caret = (
    <span className="inline-block w-[2px] h-[0.9em] ml-[2px] align-[-0.1em] bg-gold-2 animate-[caretBlink_0.8s_steps(1)_infinite] motion-reduce:hidden" />
  );

  return (
    <p
      ref={ref}
      aria-label={TAGLINE.join('')}
      className="font-display text-gold-2 font-bold text-[28px] leading-[1.3] mt-[14px] max-w-[540px] mobile:text-[21px]"
    >
      <span aria-hidden="true">
        {firstDone}
        {secondDone === '' && caret}
        <span className="opacity-0">{firstRest}</span>
        {/* Plain solid gold: no gradient, no shimmer. */}
        <span className="text-gold">
          {secondDone}
          {secondDone !== '' && caret}
          <span className="opacity-0">{secondRest}</span>
        </span>
      </span>
    </p>
  );
}

/** Fades a piece of the mockup in after `delay` seconds, once the section is on screen. */
const appear = 'animate-[fadeUp_0.6s_cubic-bezier(0.2,0.7,0.2,1)_both] motion-reduce:animate-none!';

function Field({ label, children, delay }) {
  return (
    <div className={cn('flex flex-col gap-[6px]', appear)} style={{ animationDelay: `${delay}s` }}>
      <span className="text-[11px] text-sub-2 tracking-[0.04em]">{label}</span>
      <div className="h-[34px] rounded-[10px] border border-line-2 bg-[rgba(232,184,75,0.05)] flex items-center gap-[8px] px-[11px] text-[12px] text-ink">
        {children}
      </div>
    </div>
  );
}

/** "Create your app" form on the left, the generated app on a phone on the right. */
function BuilderMockup() {
  return (
    <div className="relative flex items-center justify-center gap-[14px] w-full below640:flex-col below640:gap-[14px]">
      <div className={cn(card, 'p-[18px] flex flex-col gap-[11px] w-[250px] max-w-full shrink-0 border-line-2')}>
        <div className="flex items-center justify-between gap-[12px]">
          <span className="font-bold text-[14px] text-ink">Create your app</span>
          <span className={cn(tag, 'text-[9.5px] px-[9px] py-[3px] text-gold border-[rgba(232,184,75,0.4)]')}>SETU AI</span>
        </div>
        <Field label="Business name" delay={0.3}>
          Royal Jewellers
          <span className="w-[2px] h-[16px] bg-gold animate-[glowPulse_1s_steps(2)_infinite] motion-reduce:animate-none!" aria-hidden="true" />
        </Field>
        <Field label="App type" delay={0.5}>
          <span className="w-[8px] h-[8px] rounded-[50%] bg-gold" aria-hidden="true" />
          Jewellers App
        </Field>
        <Field label="Logo" delay={0.7}>
          <img src="/setu-logo.webp" alt="" width={24} height={24} loading="lazy" className="w-[24px] h-[24px] rounded-[6px] object-contain bg-[#000]" />
          jewellers-logo.png
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="ml-auto" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" stroke="var(--color-green)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Field>
        <div
          className={cn(appear, 'mt-[2px] h-[36px] rounded-[999px] flex items-center justify-center gap-[8px] text-[13px] font-bold text-[#1a1204] bg-[linear-gradient(135deg,var(--color-gold-2),var(--color-gold)_60%,#c8912a)] animate-pulse-gold')}
          style={{ animationDelay: '0.9s' }}
        >
          Generate my app
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="#1a1204" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Arrow: the form turns into the app. */}
      <div className="flex items-center justify-center w-[32px] h-[32px] shrink-0 rounded-[50%] border border-line-2 bg-[rgba(232,184,75,0.08)] animate-pulse-gold below640:rotate-90" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="var(--color-gold-2)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="animate-float motion-reduce:animate-none! shrink-0">
        <div className="w-[190px] rounded-[28px] bg-[#0a0804] border border-line-2 [box-shadow:0_30px_60px_rgba(0,0,0,0.6),0_0_50px_rgba(232,184,75,0.16),inset_0_0_0_5px_#1a1408] p-[8px] pt-[12px] flex flex-col gap-[7px]">
          <div className="w-[50px] h-[4px] rounded-[4px] bg-[#2a2210] mx-auto" />
          <div className="rounded-[18px] overflow-hidden bg-[#fbfaf7] flex flex-col">
            {/* App bar: menu, store name, plus, bell. */}
            <div className="flex items-center justify-between px-[9px] py-[7px] bg-[linear-gradient(90deg,#b5d9ee,#d6d6ee,#ead8ea)]">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
              <span className="text-[10px] font-extrabold text-[#111] tracking-[0.04em]">Royal Jewellers</span>
              <span className="flex items-center gap-[6px]">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 16V11a6 6 0 0112 0v5l2 2H4l2-2zM10 20a2 2 0 004 0" /></svg>
              </span>
            </div>
            {/* Gold welcome strip. */}
            <div className="px-[8px] py-[3px] text-[6.5px] font-bold text-white whitespace-nowrap overflow-hidden bg-[linear-gradient(90deg,#a98334,#d4b25e,#a98334)]">
              ⭐ welcome to the jewellery world
            </div>
            {/* Category circles. */}
            <div className="grid grid-cols-3 gap-[4px] px-[8px] pt-[8px]">
              {APP_CATEGORIES.map((c, i) => (
                <div key={c.name} className={cn(appear, 'flex flex-col items-center gap-[3px]')} style={{ animationDelay: `${1.1 + i * 0.12}s` }}>
                  <div className="relative overflow-hidden w-[34px] h-[34px] rounded-[50%] bg-[radial-gradient(circle_at_35%_30%,#f7d488,#c8912a_70%)] [box-shadow:0_2px_6px_rgba(0,0,0,0.25)]">
                    <AppPhoto src={c.img} />
                  </div>
                  <span className="text-[6.5px] font-semibold text-[#222] text-center leading-[1.1]">{c.name}</span>
                </div>
              ))}
            </div>
            <div className="px-[8px] pt-[8px] pb-[2px] text-[8.5px] font-extrabold text-[#111]">Rings</div>
            {/* Product grid. */}
            <div className="grid grid-cols-3 gap-[5px] px-[8px] pb-[8px]">
              {APP_PRODUCTS.map((p, i) => (
                <div key={p.name} className={cn(appear, 'min-w-0 flex flex-col gap-[2px]')} style={{ animationDelay: `${1.4 + i * 0.1}s` }}>
                  <div className="relative overflow-hidden aspect-[4/5] rounded-[4px] bg-[radial-gradient(circle_at_50%_45%,#e8b84b_0%,#b98a2e_38%,#5a3a12_100%)] flex items-center justify-center">
                    <span className="w-[40%] h-[40%] rounded-[50%] border-[2px] border-[#f7d488] bg-[radial-gradient(circle,#c0143c,#7a0a24)]" />
                    <AppPhoto src={p.img} />
                  </div>
                  <span className="text-[6px] leading-[1.15] text-[#222] font-medium">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className={cn(sectionTight, 'border-t border-t-line bg-bg-2 overflow-hidden relative')}>
      <Aurora />
      <div
        className={cn(glow, 'w-[620px] h-[420px] bg-[radial-gradient(ellipse,rgba(232,184,75,0.12),transparent_70%)] top-[-120px] right-[-120px]')}
      />

      <div className={cn(container, grid2, 'relative z-[2] grid grid-cols-[1fr_1fr] gap-[56px] items-center tablet:grid-cols-1! tablet:gap-[40px]!')}>
        <Reveal variant="left" className="flex flex-col tablet:items-center tablet:text-center">
          <h2 className={cn(heading2, 'text-[52px] mobile:text-[38px] leading-[1.1] font-extrabold tracking-[0.01em]')}>About SETU</h2>
          <TypewriterTagline />
          <p className={cn(paragraph, 'text-sub text-[16.5px] leading-[1.7] mt-[18px] max-w-[540px]')}>
            SETU AI is an app builder for industries, manufacturers, traders, distributors, trusts, NGOs and associations.
            Type your business name, add your logo, and SETU AI creates your own exclusive app. Your dealers, retailers and
            buyers can then browse your catalogue, place bulk orders and pay, while AI follows up on every lead. Customise it
            with the features your business needs. No coding, no developers.
          </p>
          <div className="flex flex-wrap gap-[10px] mt-[22px] max-w-[540px] tablet:justify-center">
            {FEATURES.map((f) => (
              <span key={f} className={cn(tag, 'text-gold-2 border-[rgba(232,184,75,0.35)] normal-case tracking-[0.02em] text-[12px] px-[14px] py-[7px]')}>
                {f}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal variant="right" className="flex justify-center w-full">
          <BuilderMockup />
        </Reveal>
      </div>

      <div className={cn(container, 'relative z-[2] pt-[64px] tablet:pt-[48px]! grid grid-cols-[repeat(4,1fr)] gap-[18px] *:min-w-0 tablet:grid-cols-[repeat(2,1fr)]! mobile:grid-cols-1! mobile:gap-[14px]!')}>
        {STEPS.map((s, i) => (
          <Reveal key={s.num} variant="up" staggerIndex={i} className={cn(card, 'p-[24px] flex flex-col gap-[14px] h-full')}>
            <div
              className={cn(stepNum, 'animate-step-fill motion-reduce:animate-none!')}
              style={{ animationDelay: `${0.6 + i * 0.5}s` }}
            >
              {s.num}
            </div>
            <div>
              <div className="font-bold text-[15.5px] text-ink">{s.title}</div>
              <div className="mt-[6px] text-[13px] text-sub leading-[1.6]">{s.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
      {/* Progress track under the steps: fills left to right as the circles light up. */}
      <div className={cn(container, 'relative z-[2] mt-[18px] h-[2px] rounded-[2px] bg-line overflow-hidden tablet:hidden')} aria-hidden="true">
        <div className="h-full origin-left [transform:scaleX(0)] bg-[linear-gradient(90deg,var(--color-gold-2),var(--color-gold))] [box-shadow:0_0_10px_rgba(232,184,75,0.6)] animate-[lineDraw_2s_ease-in-out_0.5s_forwards] motion-reduce:animate-none! motion-reduce:[transform:none]" />
      </div>
    </section>
  );
}
