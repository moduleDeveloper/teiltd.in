import { cn } from '@/lib/styles';

/**
 * The shared floating phone shell used by the three "Your App in 2 Minutes" mockups:
 * notch, header row (logo/name/bell), "your logo" caption and app-type badge.
 * `wrapperClass` positions/tilts the phone; `floatClass` can replace the float animation
 * (e.g. to start it at a different point so the phones don't bob in sync).
 */
export default function PhoneFrame({ logoSrc, name, badgeLabel, wrapperClass, floatClass, children }) {
  return (
    <div className={wrapperClass}>
      <div
        className={cn('animate-float motion-reduce:animate-none! w-[250px] h-[520px] rounded-[38px] bg-[#0a0804] border border-line-2 [box-shadow:0_30px_60px_rgba(0,0,0,0.6),inset_0_0_0_6px_#1a1408] pt-[22px] pb-[14px] px-[14px] flex flex-col gap-[12px] relative', floatClass)}
      >
        <div className="w-[70px] h-[6px] rounded-[4px] bg-[#2a2210] my-0 mx-auto" />
        <div className="flex items-center justify-between py-0 px-[4px]">
          <div className="flex items-center gap-[6px] relative">
            <img
              src={logoSrc}
              alt="SETU"
              className="w-[22px] h-[22px] rounded-[6px] object-contain bg-[#000] shrink-0"
            />
            <span className="text-[11px] font-extrabold">{name}</span>
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
        <div className="flex items-center gap-[4px] mt-[-2px] mb-[2px] ml-[2px] mr-0">
          <span className="text-[11px] text-gold-2 leading-[1]">↖</span>
          <span className="text-[7.5px] text-gold-2 italic tracking-[0.02em]">
            Your logo &amp; business name
          </span>
        </div>
        <span
          className="self-start text-[8px] font-extrabold tracking-[0.08em] py-[3px] px-[8px] rounded-[999px] bg-[rgba(232,184,75,0.12)] border border-[rgba(232,184,75,0.35)] text-[#e8b84b] my-0 mx-[4px]"
        >
          {badgeLabel}
        </span>
        {children}
      </div>
    </div>
  );
}
