import type { CSSProperties, ReactNode } from 'react';

interface PhoneFrameProps {
  logoSrc: string;
  name: string;
  badgeLabel: string;
  animationDelay?: string;
  wrapperStyle?: CSSProperties;
  children: ReactNode;
}

/** The shared `.float` phone shell used by the three "Your App in 2 Minutes" mockups:
 * notch, header row (logo/name/bell), "your logo" caption and app-type badge. */
export default function PhoneFrame({ logoSrc, name, badgeLabel, animationDelay, wrapperStyle, children }: PhoneFrameProps) {
  return (
    <div style={wrapperStyle}>
      <div
        className="float"
        style={{
          width: 250,
          height: 520,
          borderRadius: 38,
          background: '#0a0804',
          border: '1px solid var(--line-2)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.6),inset 0 0 0 6px #1a1408',
          padding: '22px 14px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          position: 'relative',
          animationDelay,
        }}
      >
        <div style={{ width: 70, height: 6, borderRadius: 4, background: '#2a2210', margin: '0 auto' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, position: 'relative' }}>
            <img
              src={logoSrc}
              alt="SETU"
              style={{ width: 22, height: 22, borderRadius: 6, objectFit: 'contain', background: '#000', flexShrink: 0 }}
            />
            <span style={{ fontSize: 11, fontWeight: 800 }}>{name}</span>
          </div>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 16V11a6 6 0 0112 0v5l2 2H4l2-2zM10 20a2 2 0 004 0"
              stroke="#e8b84b"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, margin: '-2px 0 2px 2px' }}>
          <span style={{ fontSize: 11, color: 'var(--gold-2)', lineHeight: 1 }}>↖</span>
          <span style={{ fontSize: 7.5, color: 'var(--gold-2)', fontStyle: 'italic', letterSpacing: '0.02em' }}>
            Your logo &amp; business name
          </span>
        </div>
        <span
          style={{
            alignSelf: 'flex-start',
            fontSize: 8,
            fontWeight: 800,
            letterSpacing: '0.08em',
            padding: '3px 8px',
            borderRadius: 999,
            background: 'rgba(232,184,75,0.12)',
            border: '1px solid rgba(232,184,75,0.35)',
            color: '#e8b84b',
            margin: '0 4px',
          }}
        >
          {badgeLabel}
        </span>
        {children}
      </div>
    </div>
  );
}
