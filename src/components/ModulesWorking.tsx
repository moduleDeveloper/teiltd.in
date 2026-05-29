import { useReveal } from "@/hooks/useReveal";

const items = [
  ["Member Directory", "Members can search, call, email and connect with other approved members."],
  ["Noticeboard", "All official updates stay organized. No more lost WhatsApp messages."],
  ["Events", "Announce programs, RSVP, attendance and event updates."],
  ["Gallery", "Every event, seva, camp and activity becomes visible to all members."],
  ["Sponsors", "Businesses display banners and profiles to verified HNI members."],
  ["Donations", "Members donate via UPI/Razorpay and see the causes they support."],
  ["Hospital OPD", "Doctors, timings, appointments and referrals — inside the app."],
  ["VIP Dashboard", "Patron/VIP members get premium digital identity, referrals and benefits."],
  ["Voice Reminder Assistant", "Hindi voice calling support for renewals, reminders and event communication."],
  ["WhatsApp Member Updates", "Secure member communication for notices, onboarding, reminders and support."],
];

const ModulesWorking = () => {
  const ref = useReveal();
  return (
    <section ref={ref} id="modules" className="py-24 bg-gradient-hero">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-deep font-semibold bg-gold-soft rounded-full">
            How It Works
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-primary">
            Every module, explained simply.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {items.map(([t, d], i) => (
            <div
              key={t}
              className="reveal group flex gap-5 p-6 rounded-2xl bg-white border border-border hover:border-gold hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-gold text-gold-foreground font-display font-bold flex items-center justify-center shadow-gold transition-transform group-hover:rotate-6">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-primary">{t}</h3>
                <p className="text-muted-foreground text-sm mt-1">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesWorking;
