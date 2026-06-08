import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import { z } from "zod";

const mobileSchema = z.object({
  mobile: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, "Valid mobile required"),
});

const fullSchema = z.object({
  mobile: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, "Valid mobile required"),
  name: z.string().trim().min(2, "Name should be at least 2 characters").max(80).optional().or(z.literal("")),
  org: z.string().trim().min(2, "Organization should be at least 2 characters").max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Valid email required").max(160).optional().or(z.literal("")),
});

const Contact = () => {
  const ref = useReveal();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");

  const resetForm = () => {
    setStep(1);
    setMobile("");
    setName("");
    setOrg("");
    setEmail("");
  };

  const submitLead = async (payload: { mobile: string; name?: string; org?: string; email?: string }) => {
    const response = await fetch("/api/book-demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to submit");
    }
  };

  const onPrimarySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = mobileSchema.safeParse({ mobile });
    if (!parsed.success) {
      toast({ title: "Please check the form", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      await submitLead(parsed.data);
      setLoading(false);
      setStep(2);
      toast({
        title: "Mobile number received",
        description: "Aapka number hume mil gaya. Ab chahein to baaki details bhi bhar sakti hain.",
      });
    } catch {
      setLoading(false);
      toast({
        title: "Could not send request",
        description: "Please try again in a moment or call us directly.",
        variant: "destructive",
      });
    }
  };

  const onDetailsSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = fullSchema.safeParse({ mobile, name, org, email });
    if (!parsed.success) {
      toast({ title: "Please check the form", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      await submitLead(parsed.data);
      setLoading(false);
      resetForm();
      toast({ title: "Demo request updated", description: "Thank you. Hum jaldi aapse contact karenge." });
    } catch {
      setLoading(false);
      toast({
        title: "Could not send details",
        description: "Please try again in a moment or call us directly.",
        variant: "destructive",
      });
    }
  };

  const input = "w-full px-4 py-3 rounded-xl bg-white/[0.92] text-zinc-800 placeholder:text-zinc-400 border border-gold/20 focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none transition-all";

  return (
    <section ref={ref} id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-gold/15 blur-3xl animate-blob" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/70 pointer-events-none" />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-foreground font-semibold bg-gradient-gold rounded-full shadow-gold">
            Book a Demo
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Ready to give your trust a <span className="text-gradient-gold">premium digital identity?</span>
          </h2>
          <div className="mt-8 p-6 rounded-2xl bg-gradient-card border border-gold/20 shadow-card">
            <p className="text-sm text-gold font-semibold">Contact us on -</p>
            <a href="https://wa.me/919136373636" target="_blank" rel="noopener noreferrer" className="font-display text-2xl text-gold hover:text-gold-soft transition-colors">
              +91 91363 73636
            </a>
          </div>
        </div>

        <div className="reveal bg-gradient-card rounded-3xl p-8 shadow-elegant border border-gold/25 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-gold">Quick Book Demo</p>
              <p className="text-xs text-muted-foreground">
                {step === 1 ? "Bas mobile number daliye." : "Optional details bhar dijiye."}
              </p>
            </div>
            <div className="text-xs text-gold-soft">Step {step}/2</div>
          </div>

          {step === 1 ? (
            <form onSubmit={onPrimarySubmit} className="space-y-4">
              <input
                name="mobile"
                placeholder="Mobile Number *"
                className={input}
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-shine w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {loading ? "Submitting..." : "Book My Demo"}
              </button>
              <p className="text-xs text-muted-foreground text-center">Number submit hote hi aapki lead hum tak aa jayegi.</p>
            </form>
          ) : (
            <form onSubmit={onDetailsSubmit} className="space-y-4">
              <input
                name="mobile"
                placeholder="Mobile Number *"
                className={input}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="Your Name"
                  className={input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  name="org"
                  placeholder="Organization Name"
                  className={input}
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                />
              </div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className={input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex flex-col-reverse sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gold/25 text-foreground hover:border-gold transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-shine w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-60"
                >
                  <ArrowRight className="w-4 h-4" />
                  {loading ? "Saving..." : "Submit Details"}
                </button>
              </div>
              <p className="text-xs text-muted-foreground text-center">Yeh step optional hai. Mobile number hume already mil chuka hai.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
