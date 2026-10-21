import { AppButton, CascadeHeading, Reveal } from '@/components/ui';
import { EXTERNAL_LINKS } from '@/lib/config/links';
import { card, cn, container, eyebrow, grid3, sectionTight, tag } from '@/lib/styles';

const TRUSTS = [
  {
    name: 'MAH-SETU',
    desc: 'Maharaja Agrasen Hospital Charitable Trust — patron dashboard, digital ID, OPD.',
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M12 8v6M9 11h6" />
        <path d="M9 21v-3h6v3" />
      </>
    ),
  },
  {
    name: 'Ek Udaan',
    desc: 'Women entrepreneurship network — member directory, events & digital ID.',
    icon: (
      <>
        <path d="M5 21c0-9 6-16 15-16-1 10-7 16-15 16z" />
        <path d="M5 21c3-3 6-6 8-10" />
      </>
    ),
  },
  {
    name: 'Kamdhenu',
    desc: "Dairy farmers' cooperative — orders, payments & AI-powered sales.",
    icon: (
      <>
        <circle cx="12" cy="13" r="7" />
        <path d="M8 9l-2-3M16 9l2-3M9 13h.01M15 13h.01" />
      </>
    ),
  },
];

export default function LivePlatformsSection() {
  return (
    <section id="live-platforms" className={cn(sectionTight, 'border-t border-t-line')}>
      <div className={container}>
        <div className="text-center mb-[44px]">
          <div className={cn(eyebrow, 'justify-center')}>
            Live platforms
          </div>
          <CascadeHeading continuous className="text-[34px] mt-[14px]">
            {['Real platforms. Real members.']}
          </CascadeHeading>
        </div>
        <div className={cn(grid3, 'grid grid-cols-[repeat(3,1fr)] gap-[18px]')}>
          {TRUSTS.map((t, i) => (
            <Reveal as="div" variant="zoom" staggerIndex={i} key={t.name} className={cn(card, 'p-[28px] flex flex-col gap-[12px]')}>
              <div className="flex items-center justify-between">
                <div className="w-[36px] h-[36px] rounded-[10px] bg-[rgba(232,184,75,0.1)] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {t.icon}
                  </svg>
                </div>
                <span className={cn(tag, 'text-gold border-[rgba(232,184,75,0.5)] inline-flex items-center gap-[7px]')}>
                  {/* Pulsing green "on air" dot. */}
                  <span className="relative flex w-[7px] h-[7px]" aria-hidden="true">
                    <span className="absolute inset-0 rounded-[50%] bg-green opacity-75 animate-ping motion-reduce:animate-none!" />
                    <span className="relative w-[7px] h-[7px] rounded-[50%] bg-green" />
                  </span>
                  Live
                </span>
              </div>
              <div className="font-bold text-[17px]">{t.name}</div>
              <div className="text-sub text-[13.5px] leading-[1.6]">{t.desc}</div>
            </Reveal>
          ))}
        </div>
        <div className="mobile:flex-wrap flex justify-center gap-[14px] mt-[32px]">
          <AppButton variant="ghost" href={EXTERNAL_LINKS.login} newTab={false}>
            Create your own personalized app
          </AppButton>
          <AppButton variant="ghost" href={EXTERNAL_LINKS.appDownload}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M12 3v12M7 10l5 5 5-5M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download the App
          </AppButton>
        </div>
      </div>
    </section>
  );
}
