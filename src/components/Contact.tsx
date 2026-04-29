import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  org: z.string().trim().min(2, "Organization is required").max(120),
  role: z.string().trim().max(80).optional().or(z.literal("")),
  mobile: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, "Valid mobile required"),
  email: z.string().trim().email("Valid email required").max(160),
  type: z.string().trim().max(80).optional().or(z.literal("")),
  members: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().max(800).optional().or(z.literal("")),
});

const Contact = () => {
  const ref = useReveal();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast({ title: "Please check the form", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast({ title: "Demo request sent ✨", description: "Our team will reach out within 24 hours." });
    }, 800);
  };

  const input = "w-full px-4 py-3 rounded-xl bg-white border border-border focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none transition-all";

  return (
    <section ref={ref} id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-gold/15 blur-3xl animate-blob" />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-deep font-semibold bg-gold-soft rounded-full">
            Book a Demo
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-primary leading-tight">
            Ready to give your trust a <span className="text-gradient-gold">premium digital identity?</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From WhatsApp chaos to a premium branded digital home — in 2 weeks. Tell us about your organization and we'll show you a live demo.
          </p>
          <div className="mt-8 p-6 rounded-2xl bg-gradient-card border border-border">
            <p className="text-sm text-muted-foreground">Or reach us directly on</p>
            <a href="https://wa.me/919136373636" target="_blank" rel="noopener noreferrer" className="font-display text-2xl text-primary hover:text-gold transition-colors">
              WhatsApp: +91 91363 73636
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="reveal bg-gradient-card rounded-3xl p-8 shadow-elegant border border-border space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Your Name *" className={input} required />
            <input name="org" placeholder="Organization Name *" className={input} required />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="role" placeholder="Your Role" className={input} />
            <input name="mobile" placeholder="Mobile Number *" className={input} required />
          </div>
          <input name="email" type="email" placeholder="Email *" className={input} required />
          <div className="grid sm:grid-cols-2 gap-4">
            <select name="type" className={input} defaultValue="">
              <option value="" disabled>Type of Organization</option>
              <option>NGO</option><option>Charitable Trust</option><option>Hospital</option>
              <option>Mahila Mandal</option><option>Gaushala</option><option>Temple Trust</option>
              <option>Association / Club</option><option>HNI Community</option><option>Other</option>
            </select>
            <input name="members" placeholder="Number of Members" className={input} />
          </div>
          <textarea name="message" rows={4} placeholder="Tell us briefly..." className={input} />
          <button
            type="submit"
            disabled={loading}
            className="btn-shine w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-60"
          >
            <Send className="w-4 h-4" />
            {loading ? "Sending..." : "Book My Demo"}
          </button>
          <p className="text-xs text-muted-foreground text-center">We respond within 24 hours.</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
