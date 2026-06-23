import { Building2, Layers3 } from "lucide-react";
import { legalInfo } from "@/lib/legal";

const AboutCompany = () => {
  const website = typeof window !== "undefined" ? window.location.origin : "SETU website";

  return (
    <section id="about-company" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-70 pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div>
            <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-foreground font-semibold bg-gradient-gold rounded-full shadow-gold">
              About Company
            </span>
            <p className="mt-4 text-base md:text-lg font-semibold text-gold-soft leading-relaxed">
              SETU is owned and created by Thermal Engineers &amp; Insulators Pvt. Ltd.
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              About Thermal Engineers &amp; Insulators Pvt. Ltd.
            </h2>
          </div>

          <div className="rounded-3xl border border-gold/20 bg-gradient-card p-7 md:p-9 shadow-card">
            <div className="grid sm:grid-cols-2 gap-4 mb-7">
              <div className="rounded-2xl border border-gold/20 bg-white/[0.03] p-5">
                <Building2 className="w-8 h-8 text-gold mb-3" />
                <p className="text-sm font-semibold text-gold-soft">Civil &amp; Industrial Construction</p>
              </div>
              <div className="rounded-2xl border border-gold/20 bg-white/[0.03] p-5">
                <Layers3 className="w-8 h-8 text-gold mb-3" />
                <p className="text-sm font-semibold text-gold-soft">Technology Platforms</p>
              </div>
            </div>

            <div className="space-y-5 text-base md:text-lg leading-relaxed text-foreground/80">
              <p>
                Thermal Engineers &amp; Insulators Pvt. Ltd. is a North Delhi based Private Limited company with two business verticals: Civil &amp; Industrial Construction and Technology Platforms. Under its technology division, the company operates SETU - a premium digital platform for NGOs, Trusts, Hospitals, Samitis, Gaushalas and HNI communities.
              </p>
              <p>
                SETU currently powers live community platforms including <span className="text-gold font-semibold">MAH-SETU</span>, <span className="text-gold font-semibold">Pankhuri: Ek Udaan</span>, <span className="text-gold font-semibold">Kamdhenu / Gauseva Setu</span> and other trust-based digital ecosystems. Its purpose is simple: trusts do the work, SETU makes sure every member sees it, feels it and stays proud of it.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gold/15 text-sm text-foreground/75 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              <p><span className="text-gold font-semibold">Business Legal Name:</span> {legalInfo.companyName}</p>
              <p><span className="text-gold font-semibold">Brand Name:</span> {legalInfo.brandName}</p>
              <p><span className="text-gold font-semibold">CIN:</span> {legalInfo.cin}</p>
              <p><span className="text-gold font-semibold">GSTIN:</span> {legalInfo.gstin}</p>
              <p><span className="text-gold font-semibold">Website:</span> {website}</p>
              <p><span className="text-gold font-semibold">Business Category:</span> Software / Digital Community Platform</p>
              <p><span className="text-gold font-semibold">Registered Office:</span> {legalInfo.registeredOffice}</p>
              <p><span className="text-gold font-semibold">Support Email:</span> {legalInfo.officialEmail}</p>
              <p className="sm:col-span-2">
                <span className="text-gold font-semibold">Support WhatsApp:</span>{" "}
                <a href={legalInfo.whatsappHref} className="text-foreground/80 hover:text-gold transition-colors">
                  {legalInfo.whatsapp}
                </a>
              </p>
              <p className="sm:col-span-2">
                <span className="text-gold font-semibold">Support Phone:</span>{" "}
                <a href={legalInfo.secondaryPhoneHref} className="text-foreground/80 hover:text-gold transition-colors">
                  {legalInfo.secondaryPhone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
