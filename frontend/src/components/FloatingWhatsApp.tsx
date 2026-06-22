import { legalInfo } from "@/lib/legal";
import waLogo from "/proof/wa.png";

const FloatingWhatsApp = () => {
  return (
    <button
      type="button"
      onClick={() => window.open(legalInfo.whatsappHref, "_blank", "noopener,noreferrer")}
      aria-label="Chat on WhatsApp"
      className="fixed right-3 sm:right-4 bottom-4 sm:top-1/2 sm:-translate-y-1/2 z-50 group flex h-14 w-14 hover:w-[19rem] items-center justify-start gap-3 overflow-hidden rounded-full border border-white/10 bg-[rgba(10,12,18,0.92)] px-2 py-2 shadow-elegant backdrop-blur-md transition-all duration-500 hover:border-green-400/40 hover:shadow-[0_20px_40px_rgba(37,211,102,0.22)]"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_24px_rgba(37,211,102,0.35)] transition-transform duration-300 group-hover:scale-105 overflow-hidden shrink-0">
        <img src={waLogo} alt="" className="h-8 w-8 object-contain" />
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
