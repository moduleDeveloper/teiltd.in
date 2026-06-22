import { Link } from "react-router-dom";
import setuLogo from "@/assets/logo-setu.jpeg";
import { legalInfo } from "@/lib/legal";

const ADMIN_PANEL_URL = "https://admin-test.contractmitra.in/";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.52 3.48A11.93 11.93 0 0 0 12.02 0C5.4 0 .02 5.37 0 11.99c0 2.11.55 4.17 1.58 5.99L0 24l6.19-1.62a11.94 11.94 0 0 0 5.83 1.5h.01c6.62 0 11.99-5.38 11.99-12 .01-3.2-1.24-6.2-3.5-8.4Zm-8.5 18.37h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.67.96.98-3.58-.24-.37a9.9 9.9 0 0 1-1.52-5.28c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.91 7.01c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.4c-.3-.15-1.79-.88-2.07-.97-.28-.1-.48-.15-.69.15-.2.3-.79.97-.96 1.16-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.7-1.68-.97-2.3-.25-.59-.51-.5-.69-.5h-.59c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.71.62.72.23 1.38.2 1.9.12.58-.09 1.79-.73 2.04-1.44.25-.71.25-1.31.18-1.43-.07-.11-.27-.18-.57-.33Z" />
  </svg>
);

const InstagramBrandIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="ig-gradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="25%" stopColor="#fa7e1e" />
        <stop offset="50%" stopColor="#d62976" />
        <stop offset="75%" stopColor="#962fbf" />
        <stop offset="100%" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <path
      d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Z"
      stroke="url(#ig-gradient)"
      strokeWidth="1.8"
    />
    <circle cx="12" cy="12" r="3.4" stroke="url(#ig-gradient)" strokeWidth="1.8" />
    <circle cx="16.8" cy="7.2" r="0.95" fill="url(#ig-gradient)" />
  </svg>
);

const FacebookBrandIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M14.5 8.6H16V6.1h-1.5c-1.7 0-2.8 1.1-2.8 3v1.7H9.7v2.5h2v7h2.7v-7h2.1l.4-2.5h-2.5V9.4c0-.5.3-.8.9-.8Z"
      fill="#1877F2"
    />
    <circle cx="12" cy="12" r="10" stroke="#1877F2" strokeWidth="1.6" opacity="0.25" />
  </svg>
);

const YouTubeBrandIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="2.2" y="5.4" width="19.6" height="13.2" rx="4" fill="#FF0000" />
    <path d="M10 9.2 15 12l-5 2.8V9.2Z" fill="white" />
  </svg>
);

const WhatsAppBrandIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="1.6" y="1.6" width="20.8" height="20.8" rx="4.8" fill="#25D366" />
    <path
      d="M12 5.1c-3.3 0-6 2.6-6 5.9 0 1.1.3 2.1.9 3l-.7 2.7 2.8-.7c.8.4 1.8.6 2.8.6 3.3 0 6-2.6 6-5.9s-2.7-5.6-5.8-5.6Zm3.2 8.4c-.1.4-.7.7-1.1.8-.3.1-.7.1-1.1 0-.3-.1-.8-.3-1.4-.6-.6-.3-1.2-.7-1.7-1.2-.5-.5-.9-1.1-1.2-1.7-.3-.6-.5-1.1-.6-1.4-.1-.4 0-.8.1-1.1.1-.3.4-.9.8-1 .2-.1.4-.1.5 0 .1 0 .2 0 .3.2l.8 1.8c.1.2.1.3 0 .5l-.3.4c-.1.1-.1.3 0 .4.2.4.5.8.9 1.2.4.4.8.7 1.2.9.1.1.3.1.4 0l.4-.3c.2-.1.3-.1.5 0l1.8.8c.2.1.2.2.2.3 0 .1 0 .3-.1.5Z"
      fill="white"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(165deg,hsl(220_40%_4%)_0%,hsl(220_35%_6%)_62%,hsl(220_32%_8%)_100%)] text-foreground pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(hsl(43 75% 66% / 0.18) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container relative">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[68px] h-[68px] rounded-xl bg-black ring-1 ring-gold/70 shadow-gold overflow-hidden shrink-0">
                <img
                  src={setuLogo}
                  alt="SETU logo"
                  className="w-full h-full object-cover scale-[1.22] brightness-125 contrast-125 saturate-110"
                />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-gold">SETU</div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-soft/90">
                  Power connects AI
                </div>
              </div>
            </div>
            <div className="text-foreground/75 max-w-md leading-relaxed text-sm space-y-1.5">
              <p>SETU is owned and created by {legalInfo.companyName}.</p>
              <p><span className="text-gold font-semibold">Legal Entity:</span> {legalInfo.companyName}</p>
              <p><span className="text-gold font-semibold">CIN:</span> {legalInfo.cin}</p>
              <p><span className="text-gold font-semibold">GSTIN:</span> {legalInfo.gstin}</p>
              <p><span className="text-gold font-semibold">Registered Office:</span> {legalInfo.registeredOffice}</p>
              <p>
                <span className="text-gold font-semibold">Contact:</span>{" "}
                <a href={legalInfo.whatsappHref} className="text-gold hover:text-gold-soft transition-colors">
                  {legalInfo.whatsapp}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-gold">Explore</h4>
            <ul className="space-y-2 text-sm text-foreground/75">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">Products</a></li>
              <li><a href="#proof" className="hover:text-gold transition-colors">Live Trusts</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Book Demo</a></li>
              <li><a href={ADMIN_PANEL_URL} className="hover:text-gold transition-colors">Admin Login</a></li>
              <li><Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-gold transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-gold">Also Connect With Social Media Platforms</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { Icon: InstagramBrandIcon, href: "https://www.instagram.com/setu.subscriber/", label: "Instagram" },
                { Icon: FacebookBrandIcon, href: "https://www.facebook.com/profile.php?id=61588890179524", label: "Facebook" },
                { Icon: YouTubeBrandIcon, href: "https://www.youtube.com/@EliteCommunity_Hub", label: "YouTube" },
                { Icon: WhatsAppBrandIcon, href: "https://wa.me/919136373636", label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl bg-white/[0.04] border border-gold/20 flex items-center justify-center hover:bg-white/[0.08] hover:border-gold transition-all duration-500 hover:-translate-y-1 hover:rotate-6 shadow-card"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/60">
          <p>&copy; {new Date().getFullYear()} SETU. All rights reserved.</p>
          <p>Crafted with <span className="text-gold">*</span> for India's most respected communities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
