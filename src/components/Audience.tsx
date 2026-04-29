import { useReveal } from "@/hooks/useReveal";

const audience = [
  "NGOs", "Mahila Mandals", "Charitable Trusts", "Hospital Patron Programs",
  "Gaushalas", "Temple Trusts", "Rotary / Lions Clubs", "Professional Associations",
  "Alumni Networks", "HNI Community Groups", "Business Associations",
];

const reasons = [
  "Live proven platforms — not just a pitch",
  "475+ HNI women already onboarded in MMPB",
  "Branded platform live in around 2 weeks",
  "Exclusive member-only access",
  "India-first OTP login",
  "Built for elderly + HNI members",
  "Sponsor & donation monetization included",
  "AI + automation ready",
  "Affordable vs custom app development",
];

const Audience = () => {
  const ref = useReveal();
  return (
    <section ref={ref} id="why" className="py-24 bg-white">
      <div className="container grid lg:grid-cols-2 gap-12 items-start">
        <div className="reveal">
          <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-deep font-semibold bg-gold-soft rounded-full">
            Built For
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-primary leading-tight">
            Organizations where <span className="text-gradient-gold">trust, prestige</span> & member relationships matter.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Give your members an experience as exclusive as their status.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {audience.map((a) => (
              <span key={a} className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-gradient-gold hover:text-gold-foreground transition-colors cursor-default">
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal">
          <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-deep font-semibold bg-gold-soft rounded-full">
            Why TEI
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-primary leading-tight">
            Proven. Premium. <span className="text-gradient-gold">Production-ready.</span>
          </h2>

          <ul className="mt-8 space-y-3">
            {reasons.map((r, i) => (
              <li
                key={r}
                className="flex items-start gap-3 p-4 rounded-xl bg-gradient-card border border-border hover:border-gold/40 transition-all duration-500 hover:translate-x-1"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center text-gold-foreground text-xs font-bold shadow-gold">✓</div>
                <span className="text-primary font-medium">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Audience;
