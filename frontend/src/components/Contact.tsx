import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import { z } from "zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const mobileSchema = z.object({
  mobile: z.string().trim().regex(/^[0-9]{10}$/, "Please enter a 10-digit mobile number"),
});

const fullSchema = z.object({
  mobile: z.string().trim().regex(/^[0-9]{10}$/, "Please enter a 10-digit mobile number"),
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  org: z.string().trim().min(2, "Organization name must be at least 2 characters").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(160).optional().or(z.literal("")),
  remark: z.string().trim().max(500).optional().or(z.literal("")),
  source: z.enum(["website", "insta", "facebook", "youtube", "whatsapp", "referral", "other"]),
  sourceDetail: z.string().trim().max(120).optional().or(z.literal("")),
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
  const [remark, setRemark] = useState("");
  const [source, setSource] = useState("");
  const [sourceDetail, setSourceDetail] = useState("");

  const resetForm = () => {
    setStep(1);
    setMobile("");
    setName("");
    setOrg("");
    setEmail("");
    setRemark("");
    setSource("");
    setSourceDetail("");
  };

  const submitLead = async (payload: { mobile: string; name?: string; org?: string; email?: string; remark?: string; source?: string; sourceDetail?: string }) => {
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
        description: "We have received your mobile number. You can now share the remaining details.",
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
    const parsed = fullSchema.safeParse({ mobile, name, org, email, remark, source, sourceDetail });
    if (!parsed.success) {
      toast({ title: "Please complete the required fields", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      await submitLead(parsed.data);
      setLoading(false);
      resetForm();
      toast({ title: "Demo request updated", description: "Thank you. We will contact you shortly." });
    } catch {
      setLoading(false);
      toast({
        title: "Could not send details",
        description: "Please try again in a moment or call us directly.",
        variant: "destructive",
      });
    }
  };

  const input =
    "w-full rounded-xl border border-white/10 bg-[hsl(var(--background)/0.7)] px-4 py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground shadow-sm outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/25";
  const labelClass = "text-sm font-medium text-foreground";
  const fieldGroup = "space-y-2";

  return (
    <section ref={ref} id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-gold/15 blur-3xl animate-blob" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/70 pointer-events-none" />
      <div className="container relative grid lg:grid-cols-2 gap-8 xl:gap-12 items-start">
        <div className="reveal">
          <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-foreground font-semibold bg-gradient-gold rounded-full shadow-gold">
            Book a Demo
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-xl">
            Ready to give your trust a <span className="text-gradient-gold">premium digital identity?</span>
          </h2>
          <div className="mt-8 p-5 rounded-2xl bg-gradient-card border border-gold/15 shadow-card max-w-md">
            <p className="text-sm text-gold font-semibold">Contact us at</p>
            <a href="https://wa.me/919136373636" target="_blank" rel="noopener noreferrer" className="font-display text-2xl text-gold hover:text-gold-soft transition-colors">
              +91 91363 73636
            </a>
          </div>
        </div>

        <div className="reveal w-full bg-gradient-card rounded-3xl p-6 md:p-8 shadow-elegant border border-gold/15 space-y-5 max-w-2xl">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-lg md:text-xl font-semibold text-gold">Quick Book Demo</p>
              <p className="text-xs text-muted-foreground max-w-md">
                {step === 1 ? "Please enter your mobile number." : "Share optional details if you'd like."}
              </p>
            </div>
            <div className="text-xs text-gold-soft">Step {step}/2</div>
          </div>

          {step === 1 ? (
            <form onSubmit={onPrimarySubmit} className="space-y-3" autoComplete="off">
              <input
                name="mobile"
                placeholder="91XXXXXXXX"
                className={input}
                inputMode="numeric"
                maxLength={10}
                required
                autoComplete="off"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-shine w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {loading ? "Submitting..." : "Book a Demo"}
              </button>
              <p className="text-xs text-muted-foreground text-center">Once submitted, your lead is saved immediately.</p>
            </form>
          ) : (
            <form onSubmit={onDetailsSubmit} className="space-y-4" autoComplete="off">
              <input
                name="mobile"
                placeholder="91XXXXXXXX"
                className={input}
                inputMode="numeric"
                maxLength={10}
                autoComplete="off"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                required
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className={fieldGroup}>
                  <label className={labelClass} htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    className={input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={fieldGroup}>
                  <label className={labelClass} htmlFor="org">
                    Organization Name *
                  </label>
                  <input
                    id="org"
                    name="org"
                    placeholder="Organization Name"
                    className={input}
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className={fieldGroup}>
                  <label className={labelClass} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={fieldGroup}>
                  <label className={labelClass} htmlFor="source">
                    How did you hear about us? *
                  </label>
                  <div className="space-y-2">
                    <Select
                      value={source}
                      onValueChange={(value) => {
                        setSource(value);
                        if (value !== "other") {
                          setSourceDetail("");
                        }
                      }}
                    >
                      <SelectTrigger
                        id="source"
                        className={`${input} h-12 w-full bg-[hsl(var(--background)/0.7)] text-left`}
                      >
                        <SelectValue placeholder="Select a source" />
                      </SelectTrigger>
                      <SelectContent className="border-white/10 bg-[hsl(var(--card))] text-foreground shadow-elegant">
                        <SelectItem value="website" className="focus:bg-white/5 focus:text-foreground">
                          Website
                        </SelectItem>
                        <SelectItem value="insta" className="focus:bg-white/5 focus:text-foreground">
                          Insta
                        </SelectItem>
                        <SelectItem value="facebook" className="focus:bg-white/5 focus:text-foreground">
                          Facebook
                        </SelectItem>
                        <SelectItem value="youtube" className="focus:bg-white/5 focus:text-foreground">
                          YouTube
                        </SelectItem>
                        <SelectItem value="whatsapp" className="focus:bg-white/5 focus:text-foreground">
                          WhatsApp
                        </SelectItem>
                        <SelectItem value="referral" className="focus:bg-white/5 focus:text-foreground">
                          Referral
                        </SelectItem>
                        <SelectItem value="other" className="focus:bg-white/5 focus:text-foreground">
                          Other
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {source === "other" ? (
                      <input
                        name="sourceDetail"
                        placeholder="Please specify source"
                        className={input}
                        value={sourceDetail}
                        onChange={(e) => setSourceDetail(e.target.value)}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
              <div className={fieldGroup}>
                <label className={labelClass} htmlFor="remark">
                  Remark
                </label>
                <Textarea
                  id="remark"
                  name="remark"
                  placeholder="Write your remarks here..."
                  className={`${input} min-h-40 resize-y bg-[hsl(var(--background)/0.7)]`}
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                />
              </div>
              <div className="flex flex-col-reverse sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gold/25 bg-white/[0.02] text-foreground hover:border-gold transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-shine w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-60"
                >
                  <ArrowRight className="w-4 h-4" />
                  {loading ? "Saving..." : "Submit Details"}
                </button>
              </div>
              <p className="text-xs text-muted-foreground text-center">This step is optional. Your mobile number has already been saved.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
