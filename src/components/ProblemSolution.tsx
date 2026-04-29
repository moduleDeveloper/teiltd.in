import { useReveal } from "@/hooks/useReveal";
import { MessageSquareX, FileWarning, UserX, EyeOff, CheckCircle2, Smartphone, Bell, Heart } from "lucide-react";

const problems = [
  { icon: MessageSquareX, t: "Lost WhatsApp Updates", d: "Important notices buried under daily chatter." },
  { icon: FileWarning, t: "Paper Notices Missed", d: "Manual notices and Excel sheets slow everything down." },
  { icon: EyeOff, t: "Sponsors Stay Invisible", d: "Sponsors get no real visibility or measurable impact." },
  { icon: UserX, t: "Members Feel Disconnected", d: "Donors and members don't see the work happening." },
];

const solutions = [
  { icon: Smartphone, t: "Branded Mobile App", d: "Your logo. Your colors. Your members' pocket." },
  { icon: Bell, t: "Real-Time Notices", d: "Every member informed instantly — no chaos." },
  { icon: Heart, t: "Donor & Sponsor Visibility", d: "Premium recognition for those who give." },
  { icon: CheckCircle2, t: "Member-Only Access", d: "OTP login. Verified, exclusive community." },
];

const ProblemSolution = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="py-24 bg-white relative">
      <div className="container">
        {/* Problem */}
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.2em] text-destructive font-semibold bg-destructive/5 rounded-full">
            The Problem
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-primary leading-tight">
            Your trust is doing extraordinary work. <br />
            <span className="text-gradient-gold">Your members just don't know it yet.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Most trusts still depend on WhatsApp groups, Excel sheets, paper notices and manual calls. Important updates get missed. Sponsors don't get visibility. Donors don't see impact. Members feel disconnected.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <div key={p.t} className="reveal card-3d bg-gradient-card border border-border rounded-2xl p-6 shadow-card" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg text-primary mb-1">{p.t}</h3>
              <p className="text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>

        {/* Solution */}
        <div className="mt-28 max-w-3xl mx-auto text-center reveal">
          <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-deep font-semibold bg-gold-soft rounded-full">
            The TEI Solution
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-primary leading-tight">
            A private <span className="text-gradient-gold">digital home</span> for your respected community.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Each organization gets its own branded, exclusive mobile app experience with member login, notices, events, gallery, donations, sponsors, directory, appointments, referrals, AI calling and automation.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((s, i) => (
            <div key={s.t} className="reveal card-3d bg-gradient-card border border-gold/20 rounded-2xl p-6 shadow-card hover:border-gold/50" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-gold text-gold-foreground flex items-center justify-center mb-4 shadow-gold">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg text-primary mb-1">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
