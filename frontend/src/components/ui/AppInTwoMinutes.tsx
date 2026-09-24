import { AppButton } from '@/components/ui';
import { CascadeHeading } from '@/components/ui';
import { EXTERNAL_LINKS } from '@/lib/config/links';
import { useReveal } from '@/hooks/useReveal';
import PhoneFrame from './PhoneFrame';

const CHECKS = ['AI-Powered Selling', 'Orders & Payments', 'Customer & Member Engagement'];

const STEPS = [
  { num: '1', color: 'var(--gold)', title: 'Share your details', desc: 'Name, logo, products or members', cardStyle: {} },
  {
    num: '2',
    color: 'var(--cyan)',
    title: 'AI generates your app',
    desc: '2 – 5 minutes, fully exclusive',
    cardStyle: {},
  },
  {
    num: '3',
    color: 'var(--gold)',
    title: 'Run Sale & go live',
    desc: 'Start selling the same day',
    cardStyle: { borderColor: 'rgba(232,184,75,0.4)' },
    titleColor: 'var(--gold-2)',
  },
];

function Check({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17l-5-5" stroke="#f0c96a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </div>
  );
}

function StepCard({ index, step }: { index: number; step: (typeof STEPS)[number] }) {
  const { ref, inView } = useReveal<HTMLDivElement>(index);
  return (
    <div
      ref={ref}
      className={`card rv${inView ? ' in' : ''}`}
      style={{ padding: 24, display: 'flex', alignItems: 'center', gap: 16, ...step.cardStyle }}
    >
      <div className="step-num" style={{ borderColor: step.color, color: step.color }}>
        {step.num}
      </div>
      <div>
        <div style={{ fontWeight: 700, color: step.titleColor }}>{step.title}</div>
        <div style={{ fontSize: 13, color: 'var(--sub)' }}>{step.desc}</div>
      </div>
    </div>
  );
}

export default function AppInTwoMinutes() {
  return (
    <section id="home" className="section hero-top-section" style={{ overflow: 'hidden', paddingTop: 36 }}>
      <div className="aurora">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div
        className="glow"
        style={{
          width: 640,
          height: 640,
          background: 'radial-gradient(circle,rgba(240,201,106,0.12),transparent 70%)',
          top: -160,
          left: -120,
        }}
      />
      <div
        className="glow"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle,rgba(232,184,75,0.12),transparent 70%)',
          bottom: -200,
          right: -120,
        }}
      />

      <div
        className="container grid2"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: 56,
          alignItems: 'center',
        }}
      >
        <div className="hero-copy" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <CascadeHeading style={{ fontSize: 48, lineHeight: 1.12 }}>
            {['Your Exclusive App', <br key="br1" />, 'Ready in 2 Minutes']}
          </CascadeHeading>
          <CascadeHeading style={{ fontSize: 21, lineHeight: 1.35 }}>
            {[
              'Turn Connections',
              <br key="br2" />,
              'Into ',
              <span className="shimmer-text" key="growth">
                Growth.
              </span>,
            ]}
          </CascadeHeading>
          <p style={{ color: 'var(--sub)', fontSize: 16, lineHeight: 1.7, maxWidth: 460, margin: 0 }}>
            Sell smarter, manage better and grow faster with SETU.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {CHECKS.map((c) => (
              <Check key={c} label={c} />
            ))}
          </div>
          <div className="btn-row" style={{ display: 'flex', gap: 14, marginTop: 6 }}>
            <AppButton variant="primary" href={EXTERNAL_LINKS.login} newTab={false} className="pulse">
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
          className="phones-wrap"
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 0, position: 'relative', height: 600 }}
        >
          <div className="phones-position">
          <div className="phones">
            <div className="ring ring-phones" style={{ width: 560, height: 560, top: 20, left: '50%', marginLeft: -280 }} />

            {/* Phone 1: Business App */}
            <PhoneFrame
              logoSrc="/setu-logo-phone1.png"
              name="Logo"
              badgeLabel="BUSINESS APP"
              wrapperStyle={{ transform: 'translateX(30px) translateY(30px) rotate(-6deg)', zIndex: 1 }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, padding: '0 4px' }}>Hello, Member</div>
              <div
                style={{
                  borderRadius: 14,
                  padding: 14,
                  background: 'linear-gradient(135deg,rgba(232,184,75,0.18),rgba(232,184,75,0.04))',
                  border: '1px solid rgba(232,184,75,0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                }}
              >
                <div style={{ fontSize: 8, letterSpacing: '0.1em', color: 'var(--gold)' }}>DIGITAL ID</div>
                <div style={{ fontSize: 13, fontWeight: 800 }}>[Member Name]</div>
                <div style={{ fontSize: 9, color: 'var(--sub)' }}>[Association name] · ID 00421</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div
                  style={{
                    background: 'rgba(232,184,75,0.05)',
                    border: '1px solid var(--line)',
                    borderRadius: 12,
                    padding: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 8,
                      background: 'rgba(232,184,75,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" stroke="#e8b84b" strokeWidth="1.8" />
                      <path d="M4 21a8 8 0 0116 0" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700 }}>Members</div>
                </div>
                <div
                  style={{
                    background: 'rgba(232,184,75,0.05)',
                    border: '1px solid var(--line)',
                    borderRadius: 12,
                    padding: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 8,
                      background: 'rgba(232,184,75,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="5" width="18" height="16" rx="2" stroke="#e8b84b" strokeWidth="1.8" />
                      <path d="M3 10h18M8 3v4M16 3v4" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700 }}>Events</div>
                </div>
              </div>
            </PhoneFrame>

            {/* Phone 2: Association App */}
            <PhoneFrame
              logoSrc="/setu-logo-phone2.png"
              name="Company Name"
              badgeLabel="ASSOCIATION APP"
              animationDelay="-2s"
              wrapperStyle={{ zIndex: 3 }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, padding: '0 4px' }}>Products</div>
              <div
                style={{
                  height: 30,
                  borderRadius: 9,
                  border: '1px solid var(--line)',
                  background: 'rgba(232,184,75,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 10px',
                  fontSize: 9,
                  color: 'var(--sub-2)',
                }}
              >
                Search…
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
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
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      background: 'rgba(232,184,75,0.05)',
                      border: '1px solid var(--line)',
                      borderRadius: 12,
                      padding: '8px 10px',
                    }}
                  >
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 9,
                        background: 'linear-gradient(135deg,rgba(232,184,75,0.22),rgba(232,184,75,0.06))',
                        border: '1px solid rgba(232,184,75,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
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
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: 10.5,
                          fontWeight: 700,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.name}
                      </div>
                      <div style={{ fontSize: 9.5, color: 'var(--gold-2)', fontWeight: 600, marginTop: 1 }}>{item.price}</div>
                    </div>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        color: '#1a1204',
                        background: 'var(--gold)',
                        padding: '4px 10px',
                        borderRadius: 999,
                        flexShrink: 0,
                      }}
                    >
                      View
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="btn-primary"
                style={{
                  marginTop: 'auto',
                  justifyContent: 'center',
                  padding: 11,
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  alignSelf: 'center',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1204" strokeWidth="2.6" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </PhoneFrame>

            {/* Phone 3: NGO App */}
            <PhoneFrame
              logoSrc="/setu-logo-phone3.png"
              name="Your Name"
              badgeLabel="NGO APP"
              animationDelay="-4s"
              wrapperStyle={{ transform: 'translateX(-30px) translateY(30px) rotate(6deg)', zIndex: 1 }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, padding: '0 4px' }}>Noticeboard</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  { label: 'Annual general meeting', meta: '24 Oct' },
                  { label: 'Membership renewal', meta: 'Due' },
                  { label: 'Committee meeting', meta: '12 Oct' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'rgba(232,184,75,0.05)',
                      border: '1px solid var(--line)',
                      borderRadius: 10,
                      padding: '10px 12px',
                      fontSize: 10.5,
                    }}
                  >
                    <span>{item.label}</span>
                    <span style={{ color: 'var(--sub-2)', fontSize: 9 }}>{item.meta}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 9, color: 'var(--sub-2)', letterSpacing: '0.08em', padding: '4px 4px 0' }}>
                UPCOMING EVENT
              </div>
              <div
                style={{
                  borderRadius: 12,
                  padding: 12,
                  background: 'rgba(232,184,75,0.05)',
                  border: '1px solid var(--line)',
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700 }}>Community gathering</div>
                <div style={{ fontSize: 9, color: 'var(--sub)', marginTop: 3 }}>Sunday · 10:00 AM</div>
              </div>
            </PhoneFrame>
          </div>
          </div>
        </div>
      </div>

      <div
        className="container grid3"
        style={{ position: 'relative', zIndex: 2, marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}
      >
        {STEPS.map((step, i) => (
          <StepCard key={step.num} index={i} step={step} />
        ))}
      </div>
    </section>
  );
}
