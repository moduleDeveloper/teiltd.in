import { useState } from 'react';
import { AppButton } from '@/components/ui';
import { NavItem } from '@/components/ui';
import { EXTERNAL_LINKS } from '@/lib/config/links';
import { NAV_ITEMS } from '@/lib/config/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`nav${open ? ' open' : ''}`}
      style={{
        position: 'relative',
        zIndex: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        // 60px sides up to a 1440px screen; beyond that the bar stays full width but its
        // content stays within the same 1320px it had inside the old 1440px wrapper.
        padding: '12px max(60px, calc((100% - 1320px) / 2))',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <img
          className="nav-logo"
          src="/setu-logo-nav.png"
          alt="SETU"
          width={92}
          height={92}
          fetchPriority="high"
          style={{
            width: 92,
            height: 92,
            borderRadius: 14,
            objectFit: 'contain',
            background: '#000',
            padding: 4,
            border: '1px solid var(--line-2)',
            flexShrink: 0,
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span
            style={{
              fontFamily: "'Playfair Display',serif",
              fontWeight: 700,
              fontSize: 26,
              letterSpacing: '0.04em',
              color: 'var(--gold)',
            }}
          >
            SETU
          </span>
          <span
            style={{
              fontSize: 8.5,
              letterSpacing: '0.05em',
              color: 'var(--gold-2)',
              fontWeight: 600,
              textTransform: 'uppercase',
              lineHeight: 1.35,
              maxWidth: 160,
            }}
          >
            Where AI Connections Create Power
          </span>
        </div>
      </div>

      <nav
        aria-label="Primary"
        className="nav-links"
        style={{ display: 'flex', alignItems: 'center', gap: 22, fontSize: 14.5, fontWeight: 500, color: 'var(--sub)' }}
      >
        <span
          className="nav-pill"
          style={{
            background: 'linear-gradient(135deg,var(--gold-2),var(--gold))',
            color: '#1a1204',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '8px 14px',
            borderRadius: 999,
          }}
        >
          Platform Features
        </span>
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.label}
            item={item}
            onNavigate={closeMenu}
            style={item.label === 'Home' ? { color: 'var(--text)' } : undefined}
          />
        ))}
      </nav>

      <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <AppButton
          variant="ghost"
          href={EXTERNAL_LINKS.userLogin}
          newTab={false}
          style={{ padding: '12px 22px', fontSize: 14, borderColor: 'rgba(232,184,75,0.35)' }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path
              d="M10 17l5-5-5-5M15 12H3M21 4v16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          User Login
        </AppButton>
        <AppButton variant="primary" href={EXTERNAL_LINKS.login} newTab={false} style={{ padding: '12px 22px', fontSize: 14 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path
              d="M10 17l5-5-5-5M15 12H3M21 4v16"
              stroke="#1a1204"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          App Login
        </AppButton>
      </div>

      <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
