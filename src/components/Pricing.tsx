import { useReveal } from "@/hooks/useReveal";
import { Check } from "lucide-react";

const tiers = [
  { t: "One-time Setup", d: "Branded app build, modules configuration, content setup, launch." },
  { t: "Annual Maintenance", d: "Updates, new features, member support and platform reliability." },
  { t: "Add-Ons", d: "AI voice agent, WhatsApp automation, sponsor monetization, payments." },
];

const Pricing = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="py-24 bg-gradient-hero">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-deep font-semibold bg-gold-soft rounded-full">
            Pricing & Engagement
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-primary">
            Custom pricing, <span className="text-gradient-gold">premium value</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Every trust is unique. We tailor pricing to your modules, member count and organization needs.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div
              key={t.t}
              className={`reveal card-3d relative rounded-3xl p-8 border shadow-card ${
                i === 1
                  ? "bg-gradient-primary text-primary-foreground border-gold/40"
                  : "bg-white border-border"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {i === 1 && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-gold text-gold-foreground shadow-gold">
                  Recommended
                </span>
              )}
              <div className={`text-xs uppercase tracking-[0.2em] ${i === 1 ? "text-gold" : "text-gold-deep"}`}>Tier {i + 1}</div>
              <h3 className={`mt-2 font-display text-2xl font-bold ${i === 1 ? "text-primary-foreground" : "text-primary"}`}>{t.t}</h3>
              <p className={`mt-3 ${i === 1 ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{t.d}</p>
              <div className={`mt-6 pt-6 border-t ${i === 1 ? "border-primary-foreground/15" : "border-border"} flex items-center gap-2 text-sm`}>
                <Check className={`w-4 h-4 ${i === 1 ? "text-gold" : "text-gold-deep"}`} />
                <span className={i === 1 ? "text-primary-foreground/85" : "text-foreground/80"}>Custom quote on demo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
