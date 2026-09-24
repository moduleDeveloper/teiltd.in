import { Reveal } from '@/components/ui';

export default function AiHuman() {
  return (
    <section className="section-tight" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
      <div className="container grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <Reveal as="div" variant="left" className="card" style={{ padding: 36 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'rgba(240,201,106,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 18,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="#f0c96a" strokeWidth="1.7" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#f0c96a" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </div>
          <h3 style={{ fontSize: 22 }}>AI handles the repetitive.</h3>
          <p style={{ color: 'var(--sub)', fontSize: 15, lineHeight: 1.7, marginTop: 10 }}>
            Catalogue matching, explaining products, follow-up on stuck buyers and abandoned carts — with full memory
            of every conversation.
          </p>
        </Reveal>
        <Reveal as="div" variant="right" className="card" style={{ padding: 36 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'rgba(232,184,75,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 18,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 21v-6a2 2 0 012-2h12a2 2 0 012 2v6" stroke="#e8b84b" strokeWidth="1.8" />
              <circle cx="12" cy="7" r="4" stroke="#e8b84b" strokeWidth="1.8" />
            </svg>
          </div>
          <h3 style={{ fontSize: 22 }}>Your team closes the valuable.</h3>
          <p style={{ color: 'var(--sub)', fontSize: 15, lineHeight: 1.7, marginTop: 10 }}>
            Bulk quantity, special pricing, negotiation — the call transfers to your salesman with everything the
            buyer saw, asked and wanted.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
