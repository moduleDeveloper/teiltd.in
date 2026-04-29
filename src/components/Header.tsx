import { Menu, X, LogIn, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const moduleCategories: { title: string; tint: string; items: { name: string; desc: string }[] }[] = [
  {
    title: "Community",
    tint: "from-rose-500/15 to-rose-300/0",
    items: [
      { name: "Member Directory", desc: "Search, call & connect with verified members." },
      { name: "Noticeboard", desc: "Official updates — no more lost WhatsApp messages." },
      { name: "Events & RSVP", desc: "Programs, attendance & invites in one place." },
      { name: "Gallery", desc: "Every seva, camp & activity beautifully archived." },
    ],
  },
  {
    title: "Hospital & Patron",
    tint: "from-indigo-500/15 to-indigo-300/0",
    items: [
      { name: "Hospital OPD", desc: "Doctors, timings & appointments inside the app." },
      { name: "VIP / Patron Dashboard", desc: "Premium identity, referrals & benefits." },
      { name: "Digital ID Card", desc: "Branded e-card for every member." },
      { name: "Referral System", desc: "Track and reward member referrals." },
    ],
  },
  {
    title: "Growth & Money",
    tint: "from-amber-500/15 to-amber-300/0",
    items: [
      { name: "Donations", desc: "UPI / Razorpay flows with donor recognition." },
      { name: "Sponsors & Ads", desc: "Gold/Silver/Platinum sponsor placements." },
      { name: "Digital Marketing", desc: "Social, leads & creative campaigns." },
      { name: "Push Notifications", desc: "Reach every member instantly." },
    ],
  },
  {
    title: "AI Automation",
    tint: "from-emerald-500/15 to-emerald-300/0",
    items: [
      { name: "AI Voice Agent", desc: "Hindi AI agent for renewals & invites." },
      { name: "WhatsApp Automation", desc: "Follow-ups, greetings & campaigns." },
      { name: "Mobile OTP Login", desc: "Secure India-first member auth." },
      { name: "Admin Management", desc: "Modular feature flags per trust." },
    ],
  },
];

const links = [
  { href: "#proof", label: "Live Trusts" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-display text-lg shadow-elegant transition-transform group-hover:rotate-6 group-hover:scale-110">
            T
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg text-primary">TEI</div>
            <div className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground -mt-0.5">
              Thermal Engineers
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {/* Modules dropdown trigger */}
          <div
            className="relative"
            onMouseEnter={openMega}
            onMouseLeave={scheduleClose}
          >
            <button
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMegaOpen((v) => !v)}
              aria-expanded={megaOpen}
            >
              Modules
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Mega dropdown */}
            <div
              className={`fixed left-1/2 -translate-x-1/2 top-20 w-[min(92vw,980px)] origin-top transition-all duration-300 ${
                megaOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
              }`}
              onMouseEnter={openMega}
              onMouseLeave={scheduleClose}
            >
              <div className="mt-3 rounded-3xl bg-background/95 backdrop-blur-xl border border-border shadow-elegant p-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
                {moduleCategories.map((cat) => (
                  <div key={cat.title} className="relative rounded-2xl p-4 overflow-hidden border border-border/60 hover:border-gold/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-card group">
                    <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${cat.tint} blur-2xl opacity-80`} />
                    <h4 className="relative font-display text-sm font-bold text-primary uppercase tracking-wider mb-3">
                      {cat.title}
                    </h4>
                    <ul className="relative space-y-2.5">
                      {cat.items.map((it) => (
                        <li key={it.name} className="group/item">
                          <div className="text-sm font-semibold text-foreground group-hover/item:text-gold transition-colors">
                            {it.name}
                          </div>
                          <div className="text-xs text-muted-foreground leading-snug">{it.desc}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-gradient-gold after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://test-admin-panel-9s7o.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-0.5"
          >
            <LogIn className="w-4 h-4" />
            Login
          </a>
          <button
            className="lg:hidden p-2 rounded-md text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in-up max-h-[80vh] overflow-y-auto">
          <div className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Modules</div>
              <div className="grid gap-4">
                {moduleCategories.map((cat) => (
                  <div key={cat.title}>
                    <div className="font-display text-sm font-bold text-primary mb-1.5">{cat.title}</div>
                    <ul className="space-y-1">
                      {cat.items.map((it) => (
                        <li key={it.name} className="text-sm text-foreground/80">• {it.name}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
