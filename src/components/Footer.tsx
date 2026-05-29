import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import setuLogo from "@/assets/logo-setu.jpeg";
import { legalInfo } from "@/lib/legal";

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
              <p>SETU is owned and operated by {legalInfo.companyName}.</p>
              <p><span className="text-gold font-semibold">Legal Entity:</span> {legalInfo.companyName}</p>
              <p><span className="text-gold font-semibold">CIN:</span> {legalInfo.cin}</p>
              <p><span className="text-gold font-semibold">GSTIN:</span> {legalInfo.gstin}</p>
              <p><span className="text-gold font-semibold">Registered Office:</span> {legalInfo.registeredOffice}</p>
              <p>
                <span className="text-gold font-semibold">WhatsApp:</span>{" "}
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
              <li><a href="#proof" className="hover:text-gold transition-colors">Live Trusts</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Book Demo</a></li>
              <li><a href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-gold">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/setu.subscriber/", label: "Instagram" },
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61588890179524", label: "Facebook" },
                { Icon: Youtube, href: "https://www.youtube.com/@EliteCommunity_Hub", label: "YouTube" },
                { Icon: MessageCircle, href: "https://wa.me/919136373636", label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl bg-white/[0.04] border border-gold/20 flex items-center justify-center hover:bg-gradient-gold hover:text-gold-foreground hover:border-gold transition-all duration-500 hover:-translate-y-1 hover:rotate-6 shadow-card"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-foreground/75">
              <a href="https://wa.me/919136373636" className="hover:text-gold">+91 91363 73636</a>
            </p>
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
