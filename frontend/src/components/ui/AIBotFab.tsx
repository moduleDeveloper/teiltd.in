import ExternalLink from './ExternalLink';
import { EXTERNAL_LINKS } from '@/lib/config/links';

/** The floating gold bot icon — opens the AI assistant. Previously misnamed
 * "WhatsAppFab": the character is SETU's AI assistant, not a WhatsApp entry point
 * (see the separate "Chat on WhatsApp" CTA in the Launch App section for that). */
export default function AIBotFab() {
  return (
    <ExternalLink
      href={EXTERNAL_LINKS.aiBot}
      aria-label="Open AI Assistant"
      className="ai-bot-fab"
      style={{
        position: 'fixed',
        right: 36,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 50,
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: '#0a0804',
        border: '1px solid var(--line-2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 30px rgba(232,184,75,0.35)',
        overflow: 'hidden',
        padding: 5,
      }}
    >
      <img
        src="/setu-wa-fab.jpg"
        alt=""
        style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', position: 'relative' }}
      />
      {/* Eyelid overlays positioned over the character's actual eyes (not the
          antenna/hand arcs below) — see .ai-bot-fab-eye in App.css. */}
      <div className="ai-bot-fab-eyes" aria-hidden="true">
        <span className="ai-bot-fab-eye ai-bot-fab-eye-l" />
        <span className="ai-bot-fab-eye ai-bot-fab-eye-r" />
      </div>
      <svg width="52" height="40" viewBox="0 0 52 40" style={{ position: 'absolute', top: -3, left: 2, pointerEvents: 'none' }}>
        <path d="M8 20C8 8 17 1 26 1S44 8 44 20" stroke="var(--gold-2)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <rect x="4" y="16" width="9" height="14" rx="4.5" fill="var(--gold-2)" stroke="#1a1204" strokeWidth="1" />
        <rect x="39" y="16" width="9" height="14" rx="4.5" fill="var(--gold-2)" stroke="#1a1204" strokeWidth="1" />
      </svg>
    </ExternalLink>
  );
}
