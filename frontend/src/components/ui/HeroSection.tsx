import { AppButton } from '@/components/ui';
import { EXTERNAL_LINKS } from '@/lib/config/links';
import { useCountUp } from '@/hooks/useCountUp';

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

export default function HeroSection() {
  const { ref: bigRef, value } = useCountUp<HTMLSpanElement>(4, '×', 1400);

  return (
    <section
      id="ai-sales-engine"
      className="section"
      style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--line)', overflow: 'hidden' }}
    >
      <div className="aurora">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div
        className="glow"
        style={{ width: 700, height: 700, background: 'radial-gradient(circle,rgba(232,184,75,0.18),transparent 70%)', top: -240, right: -180 }}
      />
      <div
        className="glow"
        style={{ width: 520, height: 520, background: 'radial-gradient(circle,rgba(240,201,106,0.10),transparent 70%)', bottom: -160, left: -120 }}
      />
      <svg
        className="neural"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.7, pointerEvents: 'none' }}
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
      >
        <line x1="120" y1="120" x2="360" y2="60" />
        <line x1="360" y1="60" x2="560" y2="180" />
        <line x1="120" y1="120" x2="240" y2="330" />
        <line x1="240" y1="330" x2="560" y2="180" />
        <line x1="880" y1="90" x2="1120" y2="150" />
        <line x1="1120" y1="150" x2="1340" y2="80" />
        <line x1="1120" y1="150" x2="1260" y2="380" />
        <line x1="880" y1="90" x2="1020" y2="330" />
        <line x1="1020" y1="330" x2="1260" y2="380" />
        <line x1="1260" y1="380" x2="1380" y2="560" />
        <line x1="140" y1="560" x2="300" y2="640" />
        <line x1="140" y1="560" x2="240" y2="330" />
        <circle cx="120" cy="120" r="4" />
        <circle cx="360" cy="60" r="4" style={{ animationDelay: '-1s' }} />
        <circle cx="560" cy="180" r="4" className="c" style={{ animationDelay: '-2s' }} />
        <circle cx="240" cy="330" r="4" style={{ animationDelay: '-.5s' }} />
        <circle cx="880" cy="90" r="4" className="c" />
        <circle cx="1120" cy="150" r="4" style={{ animationDelay: '-1.5s' }} />
        <circle cx="1340" cy="80" r="4" style={{ animationDelay: '-2.5s' }} />
        <circle cx="1260" cy="380" r="4" className="c" style={{ animationDelay: '-1s' }} />
        <circle cx="1020" cy="330" r="4" style={{ animationDelay: '-2s' }} />
        <circle cx="1380" cy="560" r="4" style={{ animationDelay: '-.7s' }} />
        <circle cx="140" cy="560" r="4" className="c" style={{ animationDelay: '-1.2s' }} />
        <circle cx="300" cy="640" r="4" style={{ animationDelay: '-2.2s' }} />
      </svg>
      <div className="grain" />

      <div
        className="container hero-grid"
        style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 64, alignItems: 'center' }}
      >
        <div className="hero-copy" style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
          <div className="tag" style={{ alignSelf: 'flex-start', color: 'var(--gold)', borderColor: 'rgba(232,184,75,0.4)' }}>
            SETU AI Sales Engine
          </div>
          <h1 aria-label="4× your revenue" className="reveal d1 hero-h1" style={{ fontSize: 58, lineHeight: 1.3, fontWeight: 800, paddingTop: 8 }}>
            <span ref={bigRef} aria-hidden="true" className="shimmer-text hero-big" style={{ fontSize: 104, lineHeight: 1.2, display: 'block', marginBottom: 6 }}>
              {value}
            </span>
            your revenue
          </h1>
          <p className="reveal d2" style={{ fontSize: 18, color: 'var(--sub)', maxWidth: 520, lineHeight: 1.6, margin: 0 }}>
            Your products. Your buyers. SETU AI Sales Engine connects them, sells and follows up — automatically.
          </p>
          <div className="reveal d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 6 }}>
            <AppButton variant="primary" href={EXTERNAL_LINKS.login} newTab={false} className="pulse">
              Try Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#1a1204" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </AppButton>
          </div>
          <div className="hero-checks" style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 8, fontSize: 13, color: 'var(--sub-2)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#f0c96a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Exclusive Android &amp; iOS app
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#f0c96a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Go live in 2 weeks
            </span>
          </div>
        </div>

        <div className="reveal d3 hero-visual" style={{ position: 'relative' }}>
          <div className="orbit o1" />
          <div className="orbit o2" />
          <div className="orbit o3" />
          <div className="float-icon" style={{ top: '6%', left: '-6%', animationDelay: '-1s' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f7d488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
          </div>
          <div className="float-icon" style={{ top: '28%', right: '-4%', animationDelay: '-2.5s' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f7d488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 18v3M8 21h8" />
              <rect x="9" y="2" width="6" height="12" rx="3" />
              <path d="M5 10a7 7 0 0014 0" />
            </svg>
          </div>
          <div className="float-icon" style={{ bottom: '14%', left: '-2%', animationDelay: '-4s' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f7d488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21a8 8 0 0116 0" />
            </svg>
          </div>
          <div className="float-icon" style={{ bottom: '2%', right: '4%', animationDelay: '-3s' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f7d488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z" />
            </svg>
          </div>

          <div className="ring ring-hero" style={{ width: 620, height: 620, top: '50%', left: '50%', margin: '-310px 0 0 -310px' }} />

          <div
            className="app-phone"
            style={{
              width: 296,
              margin: '0 auto',
              borderRadius: 42,
              background: '#0a0804',
              border: '1px solid var(--line-2)',
              boxShadow: '0 40px 90px rgba(0,0,0,0.65),0 0 70px rgba(232,184,75,0.18),inset 0 0 0 6px #1a1408',
              padding: 11,
              position: 'relative',
            }}
          >
            <div style={{ height: 26, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px 4px', fontSize: 11, fontWeight: 600, color: 'var(--sub)' }}>
              <span>9:41</span>
              <span style={{ width: 74, height: 18, borderRadius: 10, background: '#1a1408' }} />
              <span>●●● ▮</span>
            </div>
            <div style={{ borderRadius: '0 0 30px 30px', overflow: 'hidden', borderTop: '1px solid var(--line)', background: '#0a0804', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <img src="/setu-logo-hero.png" alt="SETU" style={{ width: 26, height: 26, borderRadius: 7, objectFit: 'contain', background: '#000' }} />
                  <span style={{ fontSize: 12, fontWeight: 800 }}>[Your Business Name]</span>
                </div>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 16V11a6 6 0 0112 0v5l2 2H4l2-2zM10 20a2 2 0 004 0" />
                </svg>
              </div>

              <div style={{ padding: '14px 16px 6px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 10 }}>
                  <span style={{ fontSize: 10, letterSpacing: '0.08em', color: 'var(--sub-2)', fontWeight: 700 }}>YOUR PRODUCTS</span>
                  <div style={{ display: 'flex', gap: 5 }}>
                    <span style={{ fontSize: 9.5, fontWeight: 700, padding: '6px 12px', borderRadius: 999, background: 'var(--gold)', color: '#1a1204', whiteSpace: 'nowrap' }}>
                      Fashion
                    </span>
                    <span style={{ fontSize: 8.5, fontWeight: 600, padding: '5px 9px', borderRadius: 999, border: '1px solid var(--line-2)', color: 'var(--sub)', whiteSpace: 'nowrap' }}>
                      Electrical
                    </span>
                    <span style={{ fontSize: 8.5, fontWeight: 600, padding: '5px 9px', borderRadius: 999, border: '1px solid var(--line-2)', color: 'var(--sub)', whiteSpace: 'nowrap' }}>
                      Textile
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'rgba(232,184,75,0.1)',
                    border: '1px solid rgba(232,184,75,0.4)',
                    borderRadius: 10,
                    padding: '8px 10px',
                    marginBottom: 8,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
                  </svg>
                  <span style={{ fontSize: 9, color: 'var(--gold-2)', fontWeight: 600, lineHeight: 1.3 }}>
                    AI matches every product to the right buyer, automatically
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {PRODUCTS.map((p) => (
                    <div
                      key={p.name}
                      style={{
                        background: 'rgba(232,184,75,0.05)',
                        border: '1px solid var(--line)',
                        borderRadius: 12,
                        padding: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6,
                      }}
                    >
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 9,
                          background: 'linear-gradient(135deg,rgba(232,184,75,0.22),rgba(232,184,75,0.06))',
                          border: '1px solid rgba(232,184,75,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          {p.icon}
                        </svg>
                      </div>
                      <div style={{ fontSize: 9.5, fontWeight: 700, lineHeight: 1.25 }}>{p.name}</div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 8, color: 'var(--sub-2)', letterSpacing: '0.04em' }}>{p.category}</span>
                        <span style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--gold-2)' }}>{p.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ margin: '6px 16px 0', padding: '11px 12px', background: 'rgba(232,184,75,0.06)', border: '1px solid var(--line)', borderRadius: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--sub-2)', marginBottom: 8 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 16l5-5 4 4 3-3 6 6" />
                  </svg>
                  APP GALLERY
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  {GALLERY_ICONS.map((icon, i) => (
                    <div
                      key={i}
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: '50%',
                        background: 'rgba(232,184,75,0.12)',
                        border: '1px solid rgba(232,184,75,0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {icon}
                      </svg>
                    </div>
                  ))}
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      border: '1px dashed var(--line-2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 9,
                      color: 'var(--sub-2)',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    +120
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '12px 22px 16px', background: 'linear-gradient(180deg,rgba(232,184,75,0.06),rgba(232,184,75,0.1))', borderTop: '1px solid var(--line)' }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1v-9z" />
                </svg>
              </div>
              <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 18px rgba(232,184,75,0.5)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1204" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
              <div style={{ width: 38, height: 38, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
