import { useReveal } from "@/hooks/useReveal";
import { Layers, Palette, Smartphone, Repeat, ToggleRight, Rocket } from "lucide-react";

const points = [
  { icon: Layers, t: "One Codebase, Many Trusts", d: "A single robust foundation powers unlimited trust apps." },
  { icon: Palette, t: "Fully Branded", d: "Every trust gets its own logo, theme, colors and content." },
  { icon: Smartphone, t: "Mobile OTP Login", d: "Secure India-first login built for HNI and elderly members." },
  { icon: Repeat, t: "Multi-Trust Switching", d: "Members of multiple trusts switch seamlessly inside one app." },
  { icon: ToggleRight, t: "Modular Feature Flags", d: "Enable or disable any module per trust in one click." },
  { icon: Rocket, t: "Live in ~2 Weeks", d: "From kickoff to launch in roughly two weeks." },
];

const modules = [
  "Member Directory","Noticeboard","Events","Gallery","Sponsors","Donations",
  "OPD Schedule","Doctor Directory","Appointment Booking","Referral System",
  "VIP/Patron Dashboard","Digital ID Card","Benefits Tracker","Push Notifications",
  "AI Voice Calling","WhatsApp Automation","Trust Contact Page","Admin Management",
];

const Platform = () => {
  const ref = useReveal();
  return (
    <section ref={ref} id="platform" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(hsl(42 90% 70% / 0.15) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-gold/20 blur-3xl animate-blob" />

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold font-semibold bg-gold/10 border border-gold/30 rounded-full">
            Multi-Trust Platform
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">
            One Platform. Multiple Trusts. <br />
            <span className="text-gradient-gold">Personalized Member Experience.</span>
          </h2>
          <p className="mt-5 text-primary-foreground/70 text-lg">
            Your trust. Your brand. Your legacy — in every member's pocket.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <div
              key={p.t}
              className="reveal group p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 hover:border-gold/40 hover:bg-primary-foreground/10 transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-gold text-gold-foreground flex items-center justify-center shadow-gold mb-4 transition-transform group-hover:rotate-12">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-1">{p.t}</h3>
              <p className="text-sm text-primary-foreground/70">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 reveal">
          <h3 className="text-center text-sm uppercase tracking-[0.25em] text-gold mb-6">Available Modules</h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {modules.map((m) => (
              <span key={m} className="px-4 py-2 rounded-full text-sm bg-primary-foreground/8 border border-primary-foreground/10 hover:border-gold hover:text-gold transition-colors cursor-default">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
