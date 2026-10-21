import ExternalLink from './ExternalLink';
import { EXTERNAL_LINKS } from '@/lib/config/links';
import { cn, link } from '@/lib/styles';

/** The floating gold bot icon — opens the AI assistant. Previously misnamed
 * "WhatsAppFab": the character is SETU's AI assistant, not a WhatsApp entry point
 * (see the separate "Chat on WhatsApp" CTA in the Launch App section for that). */
export default function AIBotFab() {
  return (
    <ExternalLink
      href={EXTERNAL_LINKS.aiBot}
      aria-label="Open AI Assistant"
      className={cn(link, 'mobile:right-[12px]! mobile:w-[52px]! mobile:h-[52px]! fixed right-[36px] top-[50%] [transform:translateY(-50%)] z-[50] w-[56px] h-[56px] rounded-[50%] bg-[#0a0804] border border-line-2 flex items-center justify-center [box-shadow:0_10px_30px_rgba(232,184,75,0.35)] overflow-hidden p-[5px]')}
    >
      <img
        src="/setu-wa-fab.jpg"
        alt=""
        className="w-full h-full rounded-[50%] object-cover relative"
      />
      {/* Eyelid overlays positioned over the character's actual eyes (not the
          antenna/hand arcs below); each briefly scales up to fake a blink. */}
      <div className="absolute top-[5px] left-[5px] right-[5px] bottom-[5px] rounded-[50%] overflow-hidden pointer-events-none" aria-hidden="true">
        <span className="absolute top-[37%] w-[14%] h-[11%] rounded-[50%] bg-[#0a0804] [transform:scaleY(0)] animate-eye-blink motion-reduce:animate-none! left-[34%]" />
        <span className="absolute top-[37%] w-[14%] h-[11%] rounded-[50%] bg-[#0a0804] [transform:scaleY(0)] animate-eye-blink motion-reduce:animate-none! left-[50%]" />
      </div>
      <svg width="52" height="40" viewBox="0 0 52 40" className="absolute top-[-3px] left-[2px] pointer-events-none">
        <path d="M8 20C8 8 17 1 26 1S44 8 44 20" stroke="var(--color-gold-2)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <rect x="4" y="16" width="9" height="14" rx="4.5" fill="var(--color-gold-2)" stroke="#1a1204" strokeWidth="1" />
        <rect x="39" y="16" width="9" height="14" rx="4.5" fill="var(--color-gold-2)" stroke="#1a1204" strokeWidth="1" />
      </svg>
    </ExternalLink>
  );
}
