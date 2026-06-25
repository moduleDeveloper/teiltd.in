import { legalInfo } from "@/lib/legal";

const WhatsAppBrandIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10.3" fill="#25D366" />
    <path
      d="M12 5.45c-3.56 0-6.45 2.74-6.45 6.12 0 1.08.3 2.12.88 3.05l-.64 2.94 3.04-.77c.88.47 1.88.72 3.17.72 3.56 0 6.45-2.74 6.45-6.12S15.56 5.45 12 5.45Z"
      fill="white"
    />
    <path
      d="M9.92 8.25c.16-.35.32-.36.47-.36h.4c.14 0 .33 0 .5.38l.82 1.86c.13.31.03.54-.07.67l-.28.33c-.1.11-.21.27-.09.5.24.47.56.91.96 1.31.4.4.84.71 1.31.95.23.12.39 0 .5-.09l.39-.32c.14-.11.36-.19.67-.07l1.82.75c.37.16.39.34.39.48 0 .14-.03.34-.11.51-.14.33-.68.86-1.05 1-.37.13-.81.15-1.22.06-.63-.14-1.6-.53-2.77-1.21-1.06-.62-1.91-1.39-2.55-2.31-.71-1.02-1.14-2.09-1.25-2.72-.08-.4-.06-.83.08-1.2.14-.39.68-.94 1.01-1.08Z"
      fill="#25D366"
    />
  </svg>
);

const FloatingWhatsApp = () => {
  return (
    <button
      type="button"
      onClick={() => window.open(legalInfo.whatsappHref, "_blank", "noopener,noreferrer")}
      aria-label="Chat on WhatsApp"
      className="fixed right-3 sm:right-4 bottom-4 sm:top-1/2 sm:-translate-y-1/2 z-50 group flex h-14 w-14 hover:w-[19rem] items-center justify-start gap-3 overflow-hidden rounded-full border border-white/10 bg-[rgba(10,12,18,0.92)] px-2 py-2 shadow-elegant backdrop-blur-md transition-all duration-500 hover:border-green-400/40 hover:shadow-[0_20px_40px_rgba(37,211,102,0.22)]"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_24px_rgba(37,211,102,0.35)] transition-transform duration-300 group-hover:scale-105 overflow-hidden shrink-0">
        <WhatsAppBrandIcon className="h-8 w-8" />
      </span>
      <span className="flex h-10 w-6 items-center justify-center text-white/90 shrink-0 text-2xl leading-none">
        &lsaquo;
      </span>
      <span className="min-w-0 max-w-0 overflow-hidden whitespace-nowrap text-left leading-tight opacity-0 transition-all duration-500 group-hover:max-w-[12rem] group-hover:opacity-100">
        <span className="block text-xs uppercase tracking-[0.2em] text-white/55">WhatsApp</span>
        <span className="block text-sm font-semibold text-white">Chat with us</span>
      </span>
    </button>
  );
};

export default FloatingWhatsApp;
