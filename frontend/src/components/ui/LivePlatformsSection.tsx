import type { ReactNode } from 'react';
import { AppButton } from '@/components/ui';
import { Reveal } from '@/components/ui';
import { EXTERNAL_LINKS } from '@/lib/config/links';

interface TrustCard {
  name: string;
  desc: string;
  icon: ReactNode;
}

const TRUSTS: TrustCard[] = [
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
    <section id="live-platforms" className="section-tight" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            Live platforms
          </div>
          <h2 style={{ fontSize: 34, marginTop: 14 }}>Real platforms. Real members.</h2>
        </div>
        <div className="grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
          {TRUSTS.map((t, i) => (
            <Reveal as="div" variant="up" staggerIndex={i} key={t.name} className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(232,184,75,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {t.icon}
                  </svg>
                </div>
                <span className="tag" style={{ color: 'var(--gold)', borderColor: 'rgba(232,184,75,0.5)' }}>
                  Live
                </span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 17 }}>{t.name}</div>
              <div style={{ color: 'var(--sub)', fontSize: 13.5, lineHeight: 1.6 }}>{t.desc}</div>
            </Reveal>
          ))}
        </div>
        <div className="btn-row" style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 32 }}>
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
