import { Instagram, Facebook, Youtube, MessageCircle, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(hsl(42 90% 70% / 0.2) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container relative">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center text-gold-foreground font-display text-xl shadow-gold">T</div>
              <div>
                <div className="font-display text-xl font-bold">TEI</div>
                <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">Thermal Engineers & Insulators Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Premium AI & digital platforms for trusts, NGOs, hospitals and HNI communities. A digital home for respected communities.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin className="w-4 h-4 text-gold" /> North Delhi, India
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-primary-foreground/70">
              <Mail className="w-4 h-4 text-gold" /> Founder: Ankit Gupta
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-gold">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#platform" className="hover:text-gold transition-colors">Multi-Trust Platform</a></li>
              <li><a href="#proof" className="hover:text-gold transition-colors">Live Trusts</a></li>
              <li><a href="#modules" className="hover:text-gold transition-colors">Modules</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Book Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-gold">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/elitecommunity_hub/", label: "Instagram" },
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
                  className="w-11 h-11 rounded-xl bg-primary-foreground/8 border border-primary-foreground/15 flex items-center justify-center hover:bg-gradient-gold hover:text-gold-foreground hover:border-gold transition-all duration-500 hover:-translate-y-1 hover:rotate-6 shadow-card"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70">
              <a href="https://wa.me/919136373636" className="hover:text-gold">+91 91363 73636</a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Thermal Engineers & Insulators Pvt. Ltd. All rights reserved.</p>
          <p>Crafted with <span className="text-gold">★</span> for India's most respected communities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
