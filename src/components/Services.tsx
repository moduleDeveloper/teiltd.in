import { useReveal } from "@/hooks/useReveal";
import { Smartphone, PhoneCall, MessageCircle, Megaphone, Crown, IndianRupee } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    t: "White-Label Mobile Apps",
    d: "Custom branded app experiences for NGOs, hospitals, samitis, gaushalas, associations and HNI communities.",
    tag: "Most Popular",
  },
  {
    icon: PhoneCall,
    t: "AI Voice Agents",
    d: "Hindi-speaking AI agent like 'Pooja' for renewal calls, reminders, event invites, OPD reminders and member onboarding.",
  },
  {
    icon: MessageCircle,
    t: "WhatsApp Automation",
    d: "Automated member communication, enquiry handling, reminders and campaign follow-ups at scale.",
  },
  {
    icon: Megaphone,
    t: "Digital Marketing",
    d: "Social media, lead generation, creative campaigns and growth support for trusts, NGOs and businesses.",
  },
  {
    icon: Crown,
    t: "Sponsor & Ad Systems",
    d: "Premium sponsor banners, profiles, Gold/Silver/Platinum placements with verified HNI audience visibility.",
  },
  {
    icon: IndianRupee,
    t: "Donations & Payments",
    d: "Razorpay/UPI donation flows, donor recognition, donation tracking and future 80G receipt support.",
  },
];

const Services = () => {
  const ref = useReveal();
  return (
    <section ref={ref} id="services" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-gold/15 blur-3xl animate-blob" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-deep font-semibold bg-gold-soft rounded-full">
            Our Services
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-primary">
            Everything your trust needs to <span className="text-gradient-gold">go fully digital</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.t}
              className="reveal group relative card-3d bg-white border border-border rounded-3xl p-8 shadow-card overflow-hidden"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-glow pointer-events-none" />
              {s.tag && (
                <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-gold text-gold-foreground shadow-gold">
                  {s.tag}
                </span>
              )}
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-elegant mb-5 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
