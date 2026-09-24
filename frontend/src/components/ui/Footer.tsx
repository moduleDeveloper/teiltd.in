import { useState } from 'react';
import { ExternalLink, Reveal } from '@/components/ui';
import { COMPANY, CONTACT } from '@/lib/config/constants';
import { EXTERNAL_LINKS } from '@/lib/config/links';
import { FOOTER_SECTIONS } from '@/lib/data/footer';
import { SOCIALS } from '@/lib/data/socials';
import FooterColumn from './FooterColumn';

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer id="about" className="footer" style={{ borderTop: '1px solid var(--line)', padding: '56px 100px 40px', background: 'var(--bg-2)' }}>
      <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
        <Reveal as="div" variant="up" staggerIndex={0} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <img
            src="/setu-logo-footer.png"
            alt="SETU — Where AI Connections Create Power"
            width={210}
            height={210}
            loading="lazy"
            decoding="async"
            style={{ width: 210, height: 210, borderRadius: 18, objectFit: 'contain', background: '#000', padding: 8, border: '1px solid var(--line)', display: 'block' }}
          />
          <div style={{ fontSize: 13, color: 'var(--sub)', lineHeight: 1.7 }}>
            Where AI Connections Create Power.
            <br />
            A digital ecosystem by {COMPANY.name}
          </div>
          <div style={{ fontSize: 12, color: 'var(--sub-2)', lineHeight: 1.7 }}>
            {COMPANY.address}
            <br />
            CIN:&nbsp;{COMPANY.cin}
            <br />
            GSTIN:&nbsp;{COMPANY.gstin}
          </div>
        </Reveal>

        {FOOTER_SECTIONS.map((section, i) => (
          <FooterColumn key={section.title} section={section} staggerIndex={i + 1} />
        ))}

        <Reveal as="div" variant="up" staggerIndex={FOOTER_SECTIONS.length + 1} style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5, color: 'var(--sub)' }}>
          <div style={{ fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Support</div>
          <span>{CONTACT.supportEmail}</span>
          <span>Phone {CONTACT.phoneNumberDisplay}</span>
          <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
            <ExternalLink href={EXTERNAL_LINKS.userLogin} newTab={false} className="tag">
              User Login
            </ExternalLink>
            <ExternalLink href={EXTERNAL_LINKS.login} newTab={false} className="tag">
              App Login
            </ExternalLink>
          </div>
          <div style={{ marginTop: 18 }}>
            <div style={{ fontSize: 12, color: 'var(--sub-2)', letterSpacing: '0.04em', marginBottom: 10 }}>Also connect with us</div>
            <div style={{ display: 'flex', gap: 10 }}>
              {SOCIALS.map((s) => (
                <ExternalLink
                  key={s.id}
                  href={s.href}
                  aria-label={s.label}
                  className="social-bounce"
                  style={{
                    animationDelay: s.bounceDelay,
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: '#0a0a0a',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: s.borderRadius,
                      background: s.background,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {s.icon}
                  </div>
                </ExternalLink>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div
        className="container"
        style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}
      >
        <span style={{ fontSize: 12, color: 'var(--sub-2)' }}>© 2026 {COMPANY.name} All rights reserved.</span>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            font: 'inherit',
            fontSize: 12,
            color: 'var(--sub-2)',
            cursor: 'pointer',
            textDecoration: 'underline',
            textUnderlineOffset: 3,
          }}
        >
          Crafted by the SETU Dev Team ↗
        </button>
      </div>

      {modalOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
          style={{ display: 'flex', position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(0,0,0,0.7)', alignItems: 'center', justifyContent: 'center', padding: 20 }}
        >
          <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line-2)', borderRadius: 18, padding: 32, maxWidth: 360, width: '100%', position: 'relative', boxShadow: '0 30px 70px rgba(0,0,0,0.6)' }}>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                position: 'absolute',
                top: 16,
                right: 18,
                cursor: 'pointer',
                color: 'var(--sub-2)',
                fontSize: 18,
              }}
            >
              ✕
            </button>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: 'var(--gold-2)', marginBottom: 6 }}>
              Design &amp; Development
            </div>
            <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 600 }}>SETU Development Team</div>
            <div style={{ fontSize: 13, color: 'var(--sub)', marginTop: 10, lineHeight: 1.6 }}>
              Built in-house by the SETU technology team at {COMPANY.name}
            </div>
            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: 'var(--sub)' }}>
              <span>✉️ {CONTACT.supportEmail}</span>
              <span>📞 {CONTACT.phoneNumberDisplay}</span>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
