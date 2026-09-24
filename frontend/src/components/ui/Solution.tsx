import { Reveal } from '@/components/ui';

function DashedConnector() {
  return (
    <svg width="2" height="36" viewBox="0 0 2 36">
      <line x1="1" y1="0" x2="1" y2="36" stroke="var(--gold)" strokeWidth="2" strokeDasharray="3 4" />
    </svg>
  );
}

export default function Solution() {
  return (
    <section className="section-tight" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)', overflow: 'hidden', position: 'relative' }}>
      <div className="aurora">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div
        className="container grid2"
        style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}
      >
        <Reveal variant="left" className="hero-copy">
          <div className="eyebrow">The solution</div>
          <h2 style={{ fontSize: 52, marginTop: 16, lineHeight: 1.18 }}>
            Right Product. <span className="shimmer-text">Right Buyer.</span>
            <br />
            <span className="shimmer-text">AI</span> Does the Selling.
          </h2>
          <p style={{ color: 'var(--sub)', fontSize: 16, lineHeight: 1.7, marginTop: 20, maxWidth: 460 }}>
            SETU matches each buyer with the product they actually need — then SETU AI Sales Engine takes it from
            there, automatically.
          </p>
          <div
            style={{
              marginTop: 22,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(232,184,75,0.1)',
              border: '1px solid rgba(232,184,75,0.4)',
              borderRadius: 999,
              padding: '11px 22px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
            </svg>
            <span style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--gold-2)' }}>
              You click <span style={{ color: '#fff' }}>&quot;Run Sale&quot;</span>. <span className="shimmer-text">SETU</span> takes it forward.
            </span>
          </div>
        </Reveal>
        <Reveal variant="right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
          <div className="card" style={{ padding: '16px 28px', borderColor: 'var(--line-2)', textAlign: 'center', width: 'fit-content' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>You click &quot;Run Sale&quot;</span>
          </div>
          <DashedConnector />
          <div
            className="card"
            style={{
              padding: '34px 40px',
              borderColor: 'var(--gold)',
              boxShadow: '0 0 50px rgba(232,184,75,0.22)',
              textAlign: 'center',
              width: 'fit-content',
              position: 'relative',
            }}
          >
            <div
              className="tag"
              style={{
                position: 'absolute',
                top: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--gold)',
                color: '#1a1204',
                border: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Does everything for you
            </div>
            <div className="shimmer-text" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 24 }}>
              SETU AI
              <br />
              Sales Engine
            </div>
          </div>
          <DashedConnector />
          <div className="card" style={{ padding: '16px 28px', borderColor: 'rgba(232,184,75,0.4)', textAlign: 'center', width: 'fit-content' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--gold-2)' }}>Sale closed</span>
          </div>
          <div style={{ marginTop: 18, fontSize: 12.5, color: 'var(--sub-2)', textAlign: 'center' }}>
            System-driven selling. Less manual chasing.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
