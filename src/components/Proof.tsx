import { useReveal } from "@/hooks/useReveal";
import { Hospital, Users, Heart, Building2, Briefcase, ArrowUpRight } from "lucide-react";

const proofs = [
  {
    icon: Hospital,
    name: "MAH-SETU",
    org: "Maharaja Agrasen Hospital Charitable Trust",
    desc: "Patron dashboard, digital ID card, OPD, doctor listing, appointment booking and referral tracking.",
    accent: "from-rose-500/20 to-rose-300/0",
  },
  {
    icon: Users,
    name: "Ek Udaan / Pankhuri",
    org: "Mahila Mandal Punjabi Bagh",
    desc: "475+ live HNI women members. Directory, notices, events, gallery, sponsors and engagement.",
    badge: "475+ Members",
    accent: "from-pink-500/20 to-pink-300/0",
  },
  {
    icon: Heart,
    name: "Kamdhenu / Gauseva Setu",
    org: "Gau Seva & Charitable Hospital Ecosystem",
    desc: "Member updates, donation flow, sponsor visibility, gallery and community communication.",
    accent: "from-amber-500/20 to-amber-300/0",
  },
  {
    icon: Building2,
    name: "Aggarwal Sabha",
    org: "Community Organization",
    desc: "Member directory, notices, events, gallery, sponsors and updates — all in one place.",
    accent: "from-indigo-500/20 to-indigo-300/0",
  },
  {
    icon: Briefcase,
    name: "TEI App",
    org: "Internal Company App",
    desc: "Powers TEI's technology and construction ecosystem with full team & ops modules.",
    accent: "from-emerald-500/20 to-emerald-300/0",
  },
];

const Proof = () => {
  const ref = useReveal();
  return (
    <section ref={ref} id="proof" className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-deep font-semibold bg-gold-soft rounded-full">
            Live Proof
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-primary">
            Real platforms. <span className="text-gradient-gold">Real members.</span> Real impact.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            We don't just pitch — we already power some of Delhi's most respected community organizations.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofs.map((p, i) => (
            <div
              key={p.name}
              className="reveal group relative card-3d rounded-3xl p-8 bg-gradient-card border border-border shadow-card overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-70`} />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-elegant transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <p.icon className="w-7 h-7" />
                  </div>
                  {p.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-gold text-gold-foreground shadow-gold">
                      {p.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">{p.name}</h3>
                <p className="text-sm text-gold-deep font-semibold mt-1">{p.org}</p>
                <p className="text-muted-foreground mt-4 leading-relaxed">{p.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-gold transition-colors">
                  Live Platform <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
