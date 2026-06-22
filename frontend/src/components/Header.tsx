import { Menu, X, LogIn, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import setuLogo from "@/assets/logo-setu.jpeg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ADMIN_PANEL_URL = "https://app-test.teiltd.in/";
const USER_APP_LOGIN_URL = "https://user-test.teiltd.in/";

const moduleCategories: { title: string; tint: string; items: { name: string; desc: string }[] }[] = [
  {
    title: "Community",
    tint: "from-rose-500/15 to-rose-300/0",
    items: [
      { name: "Member Directory", desc: "Search, call & connect with verified members." },
      { name: "Gallery", desc: "Every seva, camp & activity beautifully archived." },
      { name: "Noticeboard", desc: "Official updates, no more lost WhatsApp messages." },
      { name: "Events & RSVP", desc: "Programs, attendance & invites in one place." },
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
    title: "Sponsors & Engagement",
    tint: "from-amber-500/15 to-amber-300/0",
    items: [
      { name: "Donations", desc: "UPI / Razorpay flows with donor recognition." },
      { name: "Sponsors & Ads", desc: "Gold/Silver/Platinum sponsor placements." },
      { name: "Sponsor Visibility", desc: "Premium sponsor placements for trusted community businesses." },
      { name: "Push Notifications", desc: "Reach every member instantly." },
    ],
  },
  {
    title: "Communication & Automation",
    tint: "from-emerald-500/15 to-emerald-300/0",
    items: [
      { name: "Voice Reminder Assistant", desc: "Hindi voice calling support for renewals, reminders and event communication." },
      { name: "WhatsApp Member Updates", desc: "Secure member communication for notices, onboarding, reminders and support." },
      { name: "Mobile OTP Login", desc: "Secure India-first member auth." },
      { name: "Admin Management", desc: "Modular feature flags per trust." },
    ],
  },
];

const links = [
  { href: "/", label: "Home" },
  { href: "#about-company", label: "About" },
  { href: "#pricing", label: "Products" },
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

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

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
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between gap-3 h-20 sm:h-24">
        <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3 group">
          <div className="w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-xl bg-black ring-1 ring-gold/70 shadow-elegant overflow-hidden shrink-0">
            <img
              src={setuLogo}
              alt="SETU logo"
              className="w-full h-full object-cover scale-[1.22] brightness-125 contrast-125 saturate-110 transition-transform group-hover:scale-[1.28]"
            />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="font-display font-bold text-xl sm:text-2xl text-gold tracking-wide">SETU</div>
            <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-gold-soft/90">
              Power connects AI
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          <div className="relative" onMouseEnter={openMega} onMouseLeave={scheduleClose}>
            <button
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMegaOpen((value) => !value)}
              aria-expanded={megaOpen}
            >
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-gold text-gold-foreground shadow-gold">
                Platform Features
              </span>
              Services & Modules
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`fixed left-1/2 -translate-x-1/2 top-20 w-[min(94vw,1040px)] origin-top transition-all duration-300 ${
                megaOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
              }`}
              onMouseEnter={openMega}
              onMouseLeave={scheduleClose}
            >
              <div className="mt-3 rounded-3xl bg-[linear-gradient(145deg,hsl(220_28%_9%)_0%,hsl(220_34%_6%)_60%,hsl(220_38%_4%)_100%)] border border-gold/30 shadow-elegant p-6 relative overflow-hidden">
                <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gold/20 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-primary-glow/40 blur-3xl pointer-events-none" />

                <div className="relative mb-5 flex items-start gap-3 rounded-2xl bg-white/[0.03] backdrop-blur border border-gold/30 p-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center text-gold-foreground font-bold shrink-0 shadow-gold">
                    *
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">What SETU Offers Your Organization</div>
                    <p className="text-sm text-white/85 leading-snug mt-0.5">
                      These are the <span className="text-gold font-semibold">platform features and community tools</span> inside your custom digital ecosystem.
                    </p>
                    <p className="text-xs text-gold-soft font-semibold mt-2">Your trust. Your members. Your digital ecosystem.</p>
                  </div>
                </div>

                <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {moduleCategories.map((cat) => (
                    <div
                      key={cat.title}
                      className="relative rounded-2xl p-4 overflow-hidden border border-gold/20 bg-white/[0.03] backdrop-blur-sm hover:border-gold/60 hover:bg-gold/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-gold group"
                    >
                      <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${cat.tint} blur-2xl opacity-90`} />
                      <h4 className="relative font-display text-sm font-bold text-gold uppercase tracking-wider mb-3">{cat.title}</h4>
                      <ul className="relative space-y-2.5">
                        {cat.items.map((it) => (
                          <li key={it.name} className="group/item">
                            <div className="text-sm font-semibold text-white group-hover/item:text-gold transition-colors">{it.name}</div>
                            <div className="text-xs text-white/65 leading-snug">{it.desc}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="relative mt-5 flex items-center justify-between gap-4 pt-4 border-t border-gold/20">
                  <div className="text-xs text-white/70">Every organization gets a customized digital experience based on its community needs.</div>
                  <a href="#contact" className="text-xs font-semibold text-gold hover:text-white transition-colors whitespace-nowrap">
                    Talk to us
                  </a>
                </div>
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={USER_APP_LOGIN_URL}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full border border-gold/25 bg-background/50 text-foreground text-xs sm:text-sm font-semibold hover:border-gold hover:text-gold transition-all duration-500"
          >
            <LogIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            User Login
          </a>
          <a
            href={ADMIN_PANEL_URL}
            className="btn-shine inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-xs sm:text-sm font-semibold shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-0.5"
          >
            <LogIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            App Login
          </a>
          <button
            className="lg:hidden p-2.5 rounded-xl border border-gold/30 bg-background/70 text-primary"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in-up">
          <div className="container py-6 flex max-h-[calc(100vh-5rem)] sm:max-h-[calc(100vh-6rem)] flex-col gap-5 overflow-y-auto overscroll-contain">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-gold/20 bg-white/[0.03] px-4 py-3">
              <div>
                <div className="text-sm font-semibold text-gold">Navigation Menu</div>
                <div className="text-xs text-muted-foreground">Tap any option to continue</div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-background/70 text-primary transition-colors hover:border-gold"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-gold/10 bg-white/[0.02] px-4 py-3 text-base font-medium text-foreground/85 hover:border-gold/40 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={USER_APP_LOGIN_URL}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gold/20 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-foreground/85 hover:border-gold hover:text-gold transition-colors"
              >
                <LogIn className="w-4 h-4" />
                User Login
              </a>
              <a
                href={ADMIN_PANEL_URL}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-elegant"
              >
                <LogIn className="w-4 h-4" />
                App Login
              </a>
            </div>

            <div className="rounded-2xl border border-gold/15 bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-gold text-gold-foreground">
                  Platform Features
                </span>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Services & Modules</div>
              </div>
              <p className="text-xs text-muted-foreground mb-3">Your trust. Your members. Your digital ecosystem.</p>

              <Accordion type="single" collapsible className="rounded-2xl border border-gold/15 bg-background/30 px-4">
                {moduleCategories.map((cat, index) => (
                  <AccordionItem
                    key={cat.title}
                    value={cat.title}
                    className={index === moduleCategories.length - 1 ? "border-b-0" : "border-gold/10"}
                  >
                    <AccordionTrigger className="py-3 text-left font-display text-base font-bold text-primary hover:no-underline">
                      {cat.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <ul className="space-y-2">
                        {cat.items.map((it) => (
                          <li key={it.name} className="rounded-xl border border-gold/10 bg-white/[0.02] px-3 py-2">
                            <div className="text-sm font-semibold text-foreground/90">{it.name}</div>
                            <div className="text-xs leading-relaxed text-muted-foreground">{it.desc}</div>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
