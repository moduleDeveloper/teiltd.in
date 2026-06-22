import { useReveal } from "@/hooks/useReveal";
import { CalendarDays, Check, CreditCard, Sparkles, ShieldCheck } from "lucide-react";

const plan = {
  name: "Annual Subscription",
  price: "₹1,00,000",
  period: "per unit / year",
  description: "Simple yearly subscription card for payment verification.",
  features: ["12 months validity", "Subscription model"],
};

const Pricing = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(hsl(43 74% 63% / 0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="container relative" id="pricing">
        <div className="text-center max-w-xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-gold-deep font-semibold bg-gold-soft/90 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            Products
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-primary">
            Annual subscription plan for <span className="text-gradient-gold">digital services</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            A formal subscription product designed for payment gateway setup, onboarding and annual billing.
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <div className="reveal rounded-[1.75rem] border border-gold/20 bg-[#0f1218] shadow-elegant p-5 sm:p-6 md:p-7 text-white">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verification Ready
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-soft/80">
                <CreditCard className="w-4 h-4 text-gold" />
                Payment gateway product
              </div>
            </div>

            <div className="mt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="max-w-xl">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm md:text-base text-white/72">{plan.description}</p>
              </div>

              <div className="rounded-2xl border border-gold/20 bg-black/30 px-4 py-3 min-w-[220px]">
                <div className="text-[11px] uppercase tracking-[0.2em] text-gold-soft/70">Price</div>
                <div className="mt-1 font-display text-4xl md:text-5xl font-bold text-gold leading-none">{plan.price}</div>
                <div className="mt-1 text-sm text-white/75">{plan.period}</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white/85">
                <CalendarDays className="w-4 h-4 text-gold" />
                12 months
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white/85">
                <ShieldCheck className="w-4 h-4 text-gold" />
                Subscription
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 rounded-xl border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/86">
                  <Check className="w-4 h-4 text-gold shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
