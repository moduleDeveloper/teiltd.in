import heroImg from "@/assets/hero-tei.jpg";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-hero">
      {/* Decorative light */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gold/20 blur-3xl animate-blob" />
      <div className="absolute top-40 -right-20 w-[28rem] h-[28rem] rounded-full bg-gold-deep/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-soft border border-gold/30 text-gold-deep text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Trusted by 5+ Live HNI Communities
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-primary">
            Where Communities <span className="text-gradient-gold">Feel Connected</span>
          </h1>

          <div className="mt-6 max-w-xl space-y-3 text-lg text-muted-foreground leading-relaxed">
            <p>
              SETU helps trusts, NGOs, hospitals and respected communities keep every member informed, connected and proud - through premium digital platforms, member communication and community engagement tools.
            </p>
            <p>
              SETU is owned and operated by Thermal Engineers &amp; Insulators Pvt. Ltd.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn-shine group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-1"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#proof"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-gold/25 hover:border-gold bg-background/70 backdrop-blur text-foreground font-semibold transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
            >
              <PlayCircle className="w-5 h-5 text-gold" />
              See Live Trust Platforms
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-border/60">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Trusted by live community platforms
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-primary/80">
              {["MAH-SETU", "Ek Udaan", "Kamdhenu"].map((n) => (
                <span key={n} className="hover:text-gold transition-colors">{n}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 3D image side */}
        <div className="relative perspective-1000 group/hero">
          <div className="relative preserve-3d animate-float transition-transform duration-700 group-hover/hero:-translate-y-1 group-hover/hero:rotate-[0.6deg]">
            <div className="absolute inset-0 bg-gradient-glow rounded-[2rem] blur-2xl" />
            <img
              src={heroImg}
              alt="TEI premium digital platform for trusts"
              width={1280}
              height={960}
              className="relative rounded-[2rem] shadow-elegant ring-1 ring-border w-full transition-transform duration-700 group-hover/hero:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(125deg,hsl(220_40%_4%/.58)_0%,hsl(220_35%_6%/.25)_46%,hsl(43_74%_63%/.12)_100%)] transition-opacity duration-700 group-hover/hero:opacity-80" />
          </div>

          {/* Floating stat cards */}
          <div className="absolute -left-4 top-10 bg-background/90 rounded-2xl p-4 shadow-elegant border border-gold/20 animate-float-slow hidden md:block backdrop-blur transition-all duration-700 group-hover/hero:-translate-y-1 group-hover/hero:shadow-gold">
            <div className="text-xs text-muted-foreground">Live HNI Members</div>
            <div className="font-display text-2xl text-gold">475+</div>
          </div>
          <div className="absolute -right-4 bottom-10 bg-background/90 rounded-2xl p-4 shadow-elegant border border-gold/20 animate-float-slow hidden md:block backdrop-blur transition-all duration-700 group-hover/hero:-translate-y-1 group-hover/hero:shadow-gold" style={{ animationDelay: "1.5s" }}>
            <div className="text-xs text-muted-foreground">Go Live In</div>
            <div className="font-display text-2xl text-gradient-gold">2 Weeks</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
