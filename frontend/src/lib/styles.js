import { extendTailwindMerge } from 'tailwind-merge';

// tailwind-merge only knows Tailwind's default theme; tell it about our custom animation and
// font names so e.g. animate-float and animate-[floatY_...] are treated as the same property.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      animate: [
        'line-grow', 'glow-pulse', 'float', 'float-icon', 'pulse-gold', 'shimmer', 'phone-shine', 'spin-slow',
        'orbit-1', 'orbit-2', 'orbit-3', 'node-pulse', 'flow-dash', 'spark', 'sweep', 'logo-glow', 'drift-1',
        'drift-2', 'drift-3', 'gline', 'ang-spin', 'eye-blink', 'underline', 'word-in', 'social-bounce', 'plan-shimmer',
        'pop-in', 'phone-in', 'spin-in', 'slide-in', 'line-draw', 'step-fill', 'sweep-once', 'run-dot-1', 'run-dot-2',
        'run-core', 'run-done', 'run-check',
      ],
      font: ['inter', 'display'],
    },
  },
});

// Merges Tailwind class lists; when two classes set the same thing, the later one wins.
export const cn = (...classes) => twMerge(...classes);

// Tailwind class sets reused across several components.

export const container = 'max-w-[1240px] mx-auto w-full';

export const section =
  'py-[96px] px-[100px] relative tablet:px-[40px]! tablet:py-[72px]! mobile:px-[20px]! mobile:py-[56px]!';

export const sectionTight =
  'py-[84px] px-[100px] relative tablet:px-[40px]! tablet:py-[64px]! mobile:px-[20px]! mobile:py-[52px]!';

// Direct children of the page grids may shrink below their content width.
export const grid2 = '*:min-w-0 tablet:gap-[40px]! mobile:grid-cols-1! mobile:gap-[22px]!';
export const grid3 = '*:min-w-0 mobile:grid-cols-1! mobile:gap-[22px]!';
export const grid4 = '*:min-w-0 tablet:grid-cols-[repeat(2,1fr)]! mobile:grid-cols-1! mobile:gap-[22px]!';

// h1 / h2: gold gradient serif headings. h2 also shrinks on mobile.
export const heading =
  "font-display m-0 tracking-[0] font-bold bg-[linear-gradient(135deg,#f7d488_0%,#e8b84b_45%,#d9a53a_100%)] bg-clip-text text-transparent [overflow-wrap:anywhere]";
export const heading2 = `${heading} mobile:text-[28px]! mobile:leading-[1.25]!`;
export const heading3 = 'font-display m-0 text-gold-2 font-bold [overflow-wrap:anywhere] mobile:text-[19px]!';
export const paragraph = 'mobile:max-w-none!';

// Links default to gold, lighter gold on hover.
export const link = 'text-gold hover:text-gold-2';

export const eyebrow =
  "text-[12px] font-bold tracking-[0.16em] uppercase text-gold flex items-center gap-[8px] before:content-[''] before:animate-line-grow";

export const tag =
  'text-[11px] font-bold tracking-[0.08em] uppercase px-[12px] py-[5px] rounded-[999px] border border-line-2 text-sub';

export const card =
  "bg-[linear-gradient(180deg,var(--color-card),var(--color-card-2))] border border-line rounded-[20px] relative [transition:transform_0.4s_cubic-bezier(0.2,0.7,0.2,1),box-shadow_0.4s,border-color_0.4s] hover:[transform:translateY(-6px)] hover:[box-shadow:0_24px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(232,184,75,0.18)] hover:border-[rgba(232,184,75,0.55)]! mobile:p-[22px]! before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px] before:bg-[conic-gradient(from_var(--ang,0deg),transparent_0_70%,rgba(247,212,136,0.9)_85%,transparent_100%)] before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)_exclude] before:opacity-0 before:[transition:opacity_0.4s] before:pointer-events-none hover:before:opacity-100 hover:before:animate-ang-spin";

const buttonBase =
  'inline-flex items-center gap-[10px] rounded-[999px] text-[15px] relative overflow-hidden [transition:transform_0.25s,box-shadow_0.25s,border-color_0.25s] cursor-pointer [font-family:inherit] hover:[transform:translateY(-2px)] mobile:px-[20px]! mobile:py-[13px]! mobile:text-[14px]!';

export const btnPrimary = `${buttonBase} px-[26px] py-[15px] bg-[linear-gradient(135deg,var(--color-gold-2),var(--color-gold)_60%,#c8912a)] text-[#1a1204] font-bold [box-shadow:0_8px_30px_rgba(232,184,75,0.25)] border-none hover:[box-shadow:0_14px_36px_rgba(232,184,75,0.45)] after:content-[''] after:absolute after:top-0 after:left-[-80%] after:w-[50%] after:h-full after:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.55),transparent)] after:[transform:skewX(-20deg)] after:animate-sweep motion-reduce:after:hidden`;

export const btnGhost = `${buttonBase} px-[25px] py-[14px] border border-line-2 text-ink font-semibold bg-[rgba(232,184,75,0.04)] hover:border-gold! hover:text-gold-2 hover:[box-shadow:0_10px_28px_rgba(232,184,75,0.18)]`;

// Pulsing gold ring used on the main "Try Now" buttons.
export const pulse = 'animate-pulse-gold motion-reduce:animate-none!';

export const shimmerText =
  'bg-[linear-gradient(90deg,var(--color-gold-2),var(--color-gold)_40%,#fff3c4_50%,var(--color-gold)_60%,var(--color-gold-2))] [background-size:200%_auto] bg-clip-text text-transparent animate-shimmer motion-reduce:animate-none!';

export const glow =
  'absolute rounded-[50%] [filter:blur(90px)] pointer-events-none animate-glow-pulse motion-reduce:animate-none! mobile:[filter:blur(60px)]!';

export const stepNum =
  'w-[40px] h-[40px] rounded-[50%] bg-bg-2 border-[1.5px] border-gold flex items-center justify-center font-bold text-[14px] text-gold z-[1] [transition:transform_0.3s,box-shadow_0.3s] hover:[transform:scale(1.15)] hover:[box-shadow:0_0_18px_rgba(232,184,75,0.5)]';

// Scroll-reveal states (see useReveal): hidden until the element scrolls into view.
// While revealing, the transition also covers box-shadow/border-color so a card's own
// hover transition isn't lost; once done, Reveal drops these classes entirely.
const revealTransition =
  '[transition:opacity_0.9s_cubic-bezier(0.2,0.7,0.2,1),transform_0.9s_cubic-bezier(0.2,0.7,0.2,1),box-shadow_0.4s,border-color_0.4s] motion-reduce:[transition:none]';
export const revealHidden = {
  up: `${revealTransition} opacity-0 [transform:translateY(44px)] mobile:[transform:translateY(28px)]`,
  left: `${revealTransition} opacity-0 [transform:translateX(-64px)] mobile:[transform:translateY(28px)]`,
  right: `${revealTransition} opacity-0 [transform:translateX(64px)] mobile:[transform:translateY(28px)]`,
  zoom: `${revealTransition} opacity-0 [transform:translateY(24px)_scale(0.92)]`,
  flip: `${revealTransition} opacity-0 origin-top [transform:perspective(900px)_rotateX(24deg)_translateY(36px)]`,
};
export const revealShown = `${revealTransition} opacity-100 [transform:none]`;

// One-shot fade-up on load, with optional stagger.
export const fadeUp = {
  d1: 'animate-[fadeUp_0.9s_cubic-bezier(0.2,0.7,0.2,1)_0.1s_both] motion-reduce:animate-none!',
  d2: 'animate-[fadeUp_0.9s_cubic-bezier(0.2,0.7,0.2,1)_0.25s_both] motion-reduce:animate-none!',
  d3: 'animate-[fadeUp_0.9s_cubic-bezier(0.2,0.7,0.2,1)_0.4s_both] motion-reduce:animate-none!',
};

export const input =
  'w-full h-[48px] border border-line rounded-[12px] bg-[rgba(232,184,75,0.04)] px-[16px] py-0 text-ink text-[14px] [font-family:inherit] [outline:none] [transition:border-color_0.2s_ease,box-shadow_0.2s_ease] placeholder:text-sub-2 focus-within:border-line-2 focus-within:[box-shadow:0_0_0_3px_rgba(232,184,75,0.14),0_0_22px_rgba(232,184,75,0.12)]';
// Keeps browser autofill from painting the dark inputs white.
export const autofill =
  '[&:-webkit-autofill]:[-webkit-text-fill-color:var(--color-ink)] [&:-webkit-autofill]:[caret-color:var(--color-ink)] [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s] [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_var(--color-card)_inset]';
export const inputError = 'border-[#ef4444]! bg-[rgba(239,68,68,0.04)]';
export const fieldError = 'block mt-[6px] text-[12px] text-[#ef4444]';
