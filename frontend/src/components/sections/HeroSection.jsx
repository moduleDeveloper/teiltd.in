import { AppButton, Aurora } from '@/components/ui';
import { EXTERNAL_LINKS } from '@/lib/config/links';
import { useCountUp } from '@/hooks/useCountUp';
import { cn, container, fadeUp, glow, heading, paragraph, pulse, section, shimmerText, tag } from '@/lib/styles';

const PRODUCTS = [
  { name: 'Designer Kurti', category: 'Fashion', price: '₹1,199', icon: <path d="M8 3l4 2 4-2 4 4-3 3v11H7V10L4 7z" /> },
  { name: 'MCB 32A Switch', category: 'Electrical', price: '₹240', icon: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" /> },
  { name: 'Silk Saree', category: 'Textile', price: '₹2,499', icon: <path d="M4 4h16v4H4z M4 10h16M4 14h16M4 18h16" /> },
  {
    name: 'Leather Handbag',
    category: 'Fashion',
    price: '₹1,650',
    icon: (
      <>
        <path d="M6 8h12l1 12H5L6 8z" />
        <path d="M9 8a3 3 0 016 0" />
      </>
    ),
  },
];

const GALLERY_ICONS = [
  <path key="grid" d="M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2" />,
  <path key="mountain" d="M5 21c0-9 6-16 15-16-1 10-7 16-15 16z M5 21c3-3 6-6 8-10" />,
  <>
    <circle key="head" cx="9" cy="8" r="3" />
    <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M15 13.2c2.6.4 5 2.2 5 5" />
  </>,
  <>
    <path key="bag" d="M6 8h12l1 12H5L6 8z" />
    <path d="M9 8a3 3 0 016 0" />
  </>,
];

// Faint animated "neural network" drawn behind the hero.
const neuralLine = '[stroke:rgba(232,184,75,0.35)] [stroke-width:1] [stroke-dasharray:6_14] animate-flow-dash motion-reduce:animate-none!';
const neuralNode = 'fill-gold animate-node-pulse motion-reduce:animate-none!';

export default function HeroSection() {
  const { ref: bigRef, value } = useCountUp(4, '×', 1400);

  return (
    <section
      id="ai-sales-engine"
      className={cn(section, 'pt-[96px] pb-[96px] border-t border-t-line overflow-hidden')}
    >
      <Aurora />
      <div
        className={cn(glow, 'w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(232,184,75,0.18),transparent_70%)] top-[-240px] right-[-180px]')}
      />
      <div
        className={cn(glow, 'w-[520px] h-[520px] bg-[radial-gradient(circle,rgba(240,201,106,0.10),transparent_70%)] bottom-[-160px] left-[-120px]')}
      />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.7] pointer-events-none"
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
      >
        <line x1="120" y1="120" x2="360" y2="60" className={neuralLine} />
        <line x1="360" y1="60" x2="560" y2="180" className={neuralLine} />
        <line x1="120" y1="120" x2="240" y2="330" className={neuralLine} />
        <line x1="240" y1="330" x2="560" y2="180" className={neuralLine} />
        <line x1="880" y1="90" x2="1120" y2="150" className={neuralLine} />
        <line x1="1120" y1="150" x2="1340" y2="80" className={neuralLine} />
        <line x1="1120" y1="150" x2="1260" y2="380" className={neuralLine} />
        <line x1="880" y1="90" x2="1020" y2="330" className={neuralLine} />
        <line x1="1020" y1="330" x2="1260" y2="380" className={neuralLine} />
        <line x1="1260" y1="380" x2="1380" y2="560" className={neuralLine} />
        <line x1="140" y1="560" x2="300" y2="640" className={neuralLine} />
        <line x1="140" y1="560" x2="240" y2="330" className={neuralLine} />
        <circle cx="120" cy="120" r="4" className={neuralNode} />
        <circle cx="360" cy="60" r="4" className={cn(neuralNode, 'animate-[nodePulse_3s_ease-in-out_-1s_infinite]')} />
        <circle cx="560" cy="180" r="4" className={cn(neuralNode, 'animate-[nodePulse_3s_ease-in-out_-2s_infinite]', 'fill-cyan')} />
        <circle cx="240" cy="330" r="4" className={cn(neuralNode, 'animate-[nodePulse_3s_ease-in-out_-.5s_infinite]')} />
        <circle cx="880" cy="90" r="4" className={cn(neuralNode, 'fill-cyan')} />
        <circle cx="1120" cy="150" r="4" className={cn(neuralNode, 'animate-[nodePulse_3s_ease-in-out_-1.5s_infinite]')} />
        <circle cx="1340" cy="80" r="4" className={cn(neuralNode, 'animate-[nodePulse_3s_ease-in-out_-2.5s_infinite]')} />
        <circle cx="1260" cy="380" r="4" className={cn(neuralNode, 'animate-[nodePulse_3s_ease-in-out_-1s_infinite]', 'fill-cyan')} />
        <circle cx="1020" cy="330" r="4" className={cn(neuralNode, 'animate-[nodePulse_3s_ease-in-out_-2s_infinite]')} />
        <circle cx="1380" cy="560" r="4" className={cn(neuralNode, 'animate-[nodePulse_3s_ease-in-out_-.7s_infinite]')} />
        <circle cx="140" cy="560" r="4" className={cn(neuralNode, 'animate-[nodePulse_3s_ease-in-out_-1.2s_infinite]', 'fill-cyan')} />
        <circle cx="300" cy="640" r="4" className={cn(neuralNode, 'animate-[nodePulse_3s_ease-in-out_-2.2s_infinite]')} />
      </svg>
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.045)_1px,transparent_0)] [background-size:26px_26px]" />

      <div
        className={cn(container, '*:min-w-0 tablet:gap-[40px]! mobile:grid-cols-1! mobile:gap-[56px]! relative z-[2] grid grid-cols-[1.05fr_0.95fr] gap-[64px] items-center')}
      >
        <div className="mobile:w-full mobile:items-center mobile:text-center flex flex-col gap-[26px]">
          <div className={cn(tag, 'self-start text-gold border-[rgba(232,184,75,0.4)] mobile:self-center!')}>
            SETU AI Sales Engine
          </div>
          <h1 aria-label="4× your revenue" className={cn(heading, fadeUp.d1, 'tablet:text-[46px]! tablet:leading-[1.3]! mobile:text-[38px]! mobile:leading-[1.3]! xs:text-[33px]! xs:leading-[1.3]! text-[58px] leading-[1.3] font-extrabold pt-[8px]')}>
            <span ref={bigRef} aria-hidden="true" className={cn(shimmerText, "relative w-fit tablet:text-[82px]! tablet:leading-[1.2]! mobile:text-[70px]! mobile:leading-[1.2]! xs:text-[60px]! xs:leading-[1.2]! mobile:mx-auto after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[6px] after:h-[6px] after:bg-[linear-gradient(90deg,var(--color-gold),transparent)] after:rounded-[4px] after:[transform:scaleX(0)] after:origin-[left] after:animate-underline text-[104px] leading-[1.2] block mb-[6px]")}>
              {value}
            </span>
            your revenue
          </h1>
          <p className={cn(paragraph, fadeUp.d2, 'text-[18px] text-sub max-w-[520px] leading-[1.6] m-0')}>
            Your products. Your buyers. SETU AI Sales Engine connects them, sells and follows up — automatically.
          </p>
          <div className={cn(fadeUp.d3, 'flex gap-[14px] flex-wrap mt-[6px]')}>
            <AppButton variant="primary" href={EXTERNAL_LINKS.heroTryNow} newTab={false} className={pulse}>
              Try Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#1a1204" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </AppButton>
          </div>
          <div className="mobile:flex-col mobile:items-center! mobile:gap-[10px]! flex items-center gap-[22px] mt-[8px] text-[13px] text-sub-2">
            <span className="flex items-center gap-[7px]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#f0c96a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Exclusive Android &amp; iOS app
            </span>
            <span className="flex items-center gap-[7px]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#f0c96a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Go live in 2 weeks
            </span>
          </div>
        </div>

        {/* Phone rises in and settles out of a slight tilt when the section is reached. */}
        <div className="animate-phone-in motion-reduce:animate-none! mobile:mx-[8px] mobile:my-0 relative">
          <div className="absolute top-[50%] left-[50%] rounded-[50%] border-[1.5px] border-[rgba(232,184,75,0.22)] pointer-events-none mobile:hidden motion-reduce:animate-none! before:content-[''] before:absolute before:top-[-5px] before:left-[50%] before:w-[9px] before:h-[9px] before:ml-[-4px] before:rounded-[50%] before:bg-gold-2 w-[440px] h-[440px] [margin:-220px_0_0_-220px] animate-orbit-1" />
          <div className="absolute top-[50%] left-[50%] rounded-[50%] border-[1.5px] border-[rgba(232,184,75,0.22)] pointer-events-none mobile:hidden motion-reduce:animate-none! before:content-[''] before:absolute before:top-[-5px] before:left-[50%] before:w-[9px] before:h-[9px] before:ml-[-4px] before:rounded-[50%] before:bg-gold-2 w-[560px] h-[560px] [margin:-280px_0_0_-280px] border-dashed animate-orbit-2" />
          <div className="absolute top-[50%] left-[50%] rounded-[50%] border-[1.5px] pointer-events-none mobile:hidden motion-reduce:animate-none! before:content-[''] before:absolute before:top-[-5px] before:left-[50%] before:w-[9px] before:h-[9px] before:ml-[-4px] before:rounded-[50%] before:bg-gold-2 w-[680px] h-[680px] [margin:-340px_0_0_-340px] border-[rgba(232,184,75,0.22)] animate-orbit-3" />
          <div className="absolute w-[44px] h-[44px] rounded-[12px] bg-[rgba(232,184,75,0.08)] border border-line-2 flex items-center justify-center [backdrop-filter:blur(6px)] animate-[floatY_5s_ease-in-out_-1s_infinite] motion-reduce:animate-none! [box-shadow:0_10px_30px_rgba(0,0,0,0.4)] mobile:hidden top-[6%] left-[-6%]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f7d488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
          </div>
          <div className="absolute w-[44px] h-[44px] rounded-[12px] bg-[rgba(232,184,75,0.08)] border border-line-2 flex items-center justify-center [backdrop-filter:blur(6px)] animate-[floatY_5s_ease-in-out_-2.5s_infinite] motion-reduce:animate-none! [box-shadow:0_10px_30px_rgba(0,0,0,0.4)] mobile:hidden top-[28%] right-[-4%]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f7d488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 18v3M8 21h8" />
              <rect x="9" y="2" width="6" height="12" rx="3" />
              <path d="M5 10a7 7 0 0014 0" />
            </svg>
          </div>
          <div className="absolute w-[44px] h-[44px] rounded-[12px] bg-[rgba(232,184,75,0.08)] border border-line-2 flex items-center justify-center [backdrop-filter:blur(6px)] animate-[floatY_5s_ease-in-out_-4s_infinite] motion-reduce:animate-none! [box-shadow:0_10px_30px_rgba(0,0,0,0.4)] mobile:hidden bottom-[14%] left-[-2%]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f7d488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21a8 8 0 0116 0" />
            </svg>
          </div>
          <div className="absolute w-[44px] h-[44px] rounded-[12px] bg-[rgba(232,184,75,0.08)] border border-line-2 flex items-center justify-center [backdrop-filter:blur(6px)] animate-[floatY_5s_ease-in-out_-3s_infinite] motion-reduce:animate-none! [box-shadow:0_10px_30px_rgba(0,0,0,0.4)] mobile:hidden bottom-[2%] right-[4%]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f7d488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z" />
            </svg>
          </div>

          <div className="absolute rounded-[50%] border border-dashed border-[rgba(232,184,75,0.25)] animate-spin-slow motion-reduce:animate-none! pointer-events-none mobile:hidden! w-[620px] h-[620px] top-[50%] left-[50%] mt-[-310px] mb-0 ml-[-310px] mr-0" />

          <div
            data-hero-phone
            className="[transform-style:preserve-3d] [transition:transform_0.15s_ease-out] mobile:w-[260px]! after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] after:bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.08)_45%,transparent_60%)] after:[background-size:250%_100%] after:animate-phone-shine after:pointer-events-none motion-reduce:after:animate-none! w-[296px] my-0 mx-auto rounded-[42px] bg-[#0a0804] border border-line-2 [box-shadow:0_40px_90px_rgba(0,0,0,0.65),0_0_70px_rgba(232,184,75,0.18),inset_0_0_0_6px_#1a1408] p-[11px] relative"
          >
            <div className="h-[26px] flex items-center justify-between pt-0 pb-[4px] px-[18px] text-[11px] font-semibold text-sub">
              <span>9:41</span>
              <span className="w-[74px] h-[18px] rounded-[10px] bg-[#1a1408]" />
              <span>●●● ▮</span>
            </div>
            <div className="rounded-[0_0_30px_30px] overflow-hidden border-t border-t-line bg-[#0a0804] flex flex-col relative">
              <div className="flex items-center justify-between py-[14px] px-[16px] border-b border-b-line">
                <div className="flex items-center gap-[8px]">
                  <img src="/setu-logo.webp" alt="SETU" className="w-[26px] h-[26px] rounded-[7px] object-contain bg-[#000]" />
                  <span className="text-[12px] font-extrabold">[Your Business Name]</span>
                </div>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 16V11a6 6 0 0112 0v5l2 2H4l2-2zM10 20a2 2 0 004 0" />
                </svg>
              </div>

              <div className="pt-[14px] pb-[6px] px-[16px]">
                <div className="flex flex-col gap-[8px] mb-[10px]">
                  <span className="text-[10px] tracking-[0.08em] text-sub-2 font-bold">YOUR PRODUCTS</span>
                  <div className="flex gap-[5px]">
                    <span className="text-[9.5px] font-bold py-[6px] px-[12px] rounded-[999px] bg-gold text-[#1a1204] whitespace-nowrap">
                      Fashion
                    </span>
                    <span className="text-[8.5px] font-semibold py-[5px] px-[9px] rounded-[999px] border border-line-2 text-sub whitespace-nowrap">
                      Electrical
                    </span>
                    <span className="text-[8.5px] font-semibold py-[5px] px-[9px] rounded-[999px] border border-line-2 text-sub whitespace-nowrap">
                      Textile
                    </span>
                  </div>
                </div>
                <div
                  className="flex items-center gap-[8px] bg-[rgba(232,184,75,0.1)] border border-[rgba(232,184,75,0.4)] rounded-[10px] py-[8px] px-[10px] mb-[8px]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
                  </svg>
                  <span className="text-[9px] text-gold-2 font-semibold leading-[1.3]">
                    AI matches every product to the right buyer, automatically
                  </span>
                </div>
                <div className="grid grid-cols-[1fr_1fr] gap-[8px]">
                  {PRODUCTS.map((p, i) => (
                    <div
                      key={p.name}
                      className="bg-[rgba(232,184,75,0.05)] border border-line rounded-[12px] p-[10px] flex flex-col gap-[6px] animate-pop-in motion-reduce:animate-none!"
                      style={{ animationDelay: `${0.9 + i * 0.12}s` }}
                    >
                      <div
                        className="w-[32px] h-[32px] rounded-[9px] bg-[linear-gradient(135deg,rgba(232,184,75,0.22),rgba(232,184,75,0.06))] border border-[rgba(232,184,75,0.3)] flex items-center justify-center"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          {p.icon}
                        </svg>
                      </div>
                      <div className="text-[9.5px] font-bold leading-[1.25]">{p.name}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] text-sub-2 tracking-[0.04em]">{p.category}</span>
                        <span className="text-[9.5px] font-bold text-gold-2">{p.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-[6px] mb-0 mx-[16px] py-[11px] px-[12px] bg-[rgba(232,184,75,0.06)] border border-line rounded-[12px]">
                <div className="flex items-center gap-[6px] text-[9px] font-bold tracking-[0.06em] text-sub-2 mb-[8px]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 16l5-5 4 4 3-3 6 6" />
                  </svg>
                  APP GALLERY
                </div>
                <div className="flex gap-[10px] items-center">
                  {GALLERY_ICONS.map((icon, i) => (
                    <div
                      key={i}
                      className="w-[38px] h-[38px] rounded-[50%] bg-[rgba(232,184,75,0.12)] border border-[rgba(232,184,75,0.35)] flex items-center justify-center shrink-0 animate-pop-in motion-reduce:animate-none!"
                      style={{ animationDelay: `${1.4 + i * 0.1}s` }}
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {icon}
                      </svg>
                    </div>
                  ))}
                  <div
                    className="w-[38px] h-[38px] rounded-[50%] border border-dashed border-line-2 flex items-center justify-center text-[9px] text-sub-2 font-bold shrink-0 animate-pop-in motion-reduce:animate-none!"
                    style={{ animationDelay: '1.8s' }}
                  >
                    +120
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-around pt-[12px] pb-[16px] px-[22px] bg-[linear-gradient(180deg,rgba(232,184,75,0.06),rgba(232,184,75,0.1))] border-t border-t-line">
              <div className="w-[38px] h-[38px] rounded-[50%] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1v-9z" />
                </svg>
              </div>
              <div className="w-[46px] h-[46px] rounded-[50%] bg-gold flex items-center justify-center [box-shadow:0_6px_18px_rgba(232,184,75,0.5)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1204" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
              <div className="w-[38px] h-[38px] rounded-[50%] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9.5 9a2.5 2.5 0 015 .5c0 1.5-2 1.8-2.3 3.3M12 17h.01" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
