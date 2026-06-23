import { useReveal } from "@/hooks/useReveal";
import { Check, Shield, Sparkles } from "lucide-react";
import { legalInfo } from "@/lib/legal";

type PlanKey = "starter" | "professional" | "legacy";

const comparisonRows = [
  { feature: "Members", starter: "Unlimited", professional: "Unlimited", legacy: "Unlimited" },
  { feature: "Storage", starter: "1 GB", professional: "3 GB", legacy: "5 GB" },
  { feature: "Events", starter: "Current only", professional: "Current + future", legacy: "Current + future + past" },
  { feature: "Donations", starter: "1 campaign", professional: "3 campaigns", legacy: "Unlimited" },
  { feature: "Themes", starter: "Fixed", professional: "3 options", legacy: "Custom" },
  { feature: "User panel", starter: "1 user", professional: "1 user", legacy: "3 users" },
  { feature: "Member directory", starter: true, professional: true, legacy: true },
  { feature: "Notice board", starter: "1", professional: "3", legacy: "Unlimited" },
  { feature: "Gallery", starter: true, professional: true, legacy: true },
  { feature: "Facilities", starter: "3", professional: "5", legacy: "Unlimited" },
  { feature: "Achievements", starter: "3", professional: "5", legacy: "Unlimited" },
  { feature: "Executive body", starter: true, professional: true, legacy: true },
  { feature: "Sponsorships", starter: "3", professional: "5", legacy: "Unlimited" },
  { feature: "Notification", starter: "To all", professional: "To all", legacy: "Customised" },
  { feature: "Mobile app", starter: true, professional: true, legacy: true },
  { feature: "Priority support", starter: "48 hrs", professional: "48 hrs", legacy: "24 hrs" },
] as const;

const plans: Array<{
  key: PlanKey;
  name: string;
  tagline: string;
  price: string;
  period: string;
  note?: string;
  cta: string;
  featured?: boolean;
  light?: boolean;
  bullets: string[];
}> = [
  {
    key: "starter",
    name: "Growth",
    tagline: "For societies getting started with digital management.",
    price: "₹1,00,000",
    period: "per year",
    cta: "Choose growth",
    bullets: [
      "Unlimited members",
      "1 GB storage",
      "Current events only",
      "1 donation campaign",
      "Fixed theme, 1 user panel",
      "Member directory & gallery",
      "3 facilities, 3 achievements, 3 sponsorships",
      "Mobile app access",
      "Priority support, 48 hrs",
    ],
  },
  {
    key: "professional",
    name: "Professional",
    tagline: "For growing societies that need more room and flexibility.",
    price: "₹2,50,000",
    period: "per year",
    cta: "Choose professional",
    featured: true,
    bullets: [
      "Unlimited members",
      "3 GB storage",
      "Current + future events",
      "3 donation campaigns",
      "3 theme options, 1 user panel",
      "Member directory & gallery",
      "5 facilities, 5 achievements, 5 sponsorships",
      "Mobile app access",
      "Priority support, 48 hrs",
    ],
  },
  {
    key: "legacy",
    name: "Enterprise",
    tagline: "Custom-built for societies with complex, long-term needs.",
    price: "Custom",
    period: "talk to our team",
    cta: "Contact us",
    light: true,
    bullets: [
      "Unlimited members",
      "5 GB storage",
      "Current + future + past events",
      "Unlimited donation campaigns",
      "Custom theme, 3 user panels",
      "Unlimited facilities, achievements, sponsorships",
      "Customised notifications",
      "Priority support, 24 hrs",
    ],
  },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const TableValue = ({ value }: { value: (typeof comparisonRows)[number][PlanKey] }) => {
  if (value === true) return <CheckIcon />;
  return <span>{value}</span>;
};

const Pricing = () => {
  const ref = useReveal();

  return (
    <section ref={ref} id="pricing" className="relative overflow-hidden bg-[#090806] py-20 text-[#f3efe4] sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, rgba(232,184,90,0.12), transparent 32%), radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03), transparent 24%), radial-gradient(circle at 80% 0%, rgba(232,184,90,0.06), transparent 26%)",
        }}
      />
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#3a2f16] bg-[#121009] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b98d35]">
            <Sparkles className="h-3.5 w-3.5" />
            Plans
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[#f3efe4] md:text-5xl">
            Subscription plans built for
            <span className="block text-[#f0c15a]">Every society, Every scale.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#b3ac99] md:text-base">
            Choose the plan that fits your organisation, from a single resident association to a custom legacy deployment.
            All plans are billed annually.
          </p>
        </div>

        <div className="mt-14 reveal">
          <h3 className="text-center font-display text-2xl font-semibold text-[#f3efe4] md:text-3xl">Compare all features</h3>
          <p className="mt-2 text-center text-sm text-[#b3ac99]">A complete side-by-side comparison of each plan.</p>

          <div className="scrollbar-gold mt-8 overflow-x-auto rounded-2xl border border-[#332812] bg-[#120f0a] shadow-[0_18px_40px_-24px_rgba(0,0,0,0.9)]">
            <div className="min-w-[760px]">
              <table className="w-full border-collapse text-left">
              <thead className="bg-[#0f0d09]">
                <tr>
                  <th className="sticky left-0 z-20 border-b border-[#4a3a18] bg-[#0f0d09] px-5 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#82775f]">
                    Features
                  </th>
                  <th className="border-b border-[#4a3a18] px-5 py-4 font-display text-base font-semibold text-[#e7bb53]">
                    Growth - {"₹"}1,00,000
                  </th>
                  <th className="border-b border-[#4a3a18] px-5 py-4 font-display text-base font-semibold text-[#e7bb53]">
                    Professional - {"₹"}2,50,000
                  </th>
                  <th className="border-b border-[#4a3a18] px-5 py-4 font-display text-base font-semibold text-[#e7bb53]">
                    Enterprise - Custom
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-[#2c2312] last:border-b-0">
                    <td className="sticky left-0 z-10 bg-[#120f0a] px-5 py-4 text-sm font-medium text-[#efe7d5]">
                      {row.feature}
                    </td>
                    <td className="px-5 py-4 text-sm text-[#b3ac99]">
                      <TableValue value={row.starter} />
                    </td>
                    <td className="px-5 py-4 text-sm text-[#b3ac99]">
                      <TableValue value={row.professional} />
                    </td>
                    <td className="px-5 py-4 text-sm text-[#b3ac99]">
                      <TableValue value={row.legacy} />
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-center text-xs uppercase tracking-[0.18em] text-[#7f7356] sm:hidden">
            Swipe left or right to compare plans
          </p>
        </div>

        <p className="mt-10 text-center text-sm text-[#82775f]">
          Need help choosing?{" "}
          <a href={legalInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-[#c49b45] transition-colors hover:text-[#e7bb53]">
            Talk to our team →
          </a>
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.key}
              className={[
                "flex h-full flex-col rounded-[1.25rem] border p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:-translate-y-1",
                plan.key === "starter"
                  ? "border-[#2a241a] bg-[#0d0c0a] text-[#f3efe4] shadow-[0_20px_50px_-30px_rgba(0,0,0,0.75)]"
                  : plan.key === "professional"
                    ? "border-[#d2d2d2] bg-[#c8c8c8] text-[#111111] shadow-[0_20px_50px_-30px_rgba(200,200,200,0.3)]"
                    : "border-[#e7bb53] bg-[#e0b84a] text-[#0b0a08] shadow-[0_20px_50px_-30px_rgba(231,187,83,0.35)]",
                plan.featured ? "border-[#d2d2d2] ring-1 ring-white/20" : "",
              ].join(" ")}
            >
              <div className="flex min-h-[44px] items-center justify-between gap-3">
                <span
                  className={[
                    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em]",
                    plan.key === "starter"
                      ? "border-[#3a2f16] bg-[#121009] text-[#b98d35]"
                      : plan.key === "professional"
                        ? "border-[#8a8a8a] bg-[#e8e8e8] text-[#111111]"
                        : "border-[#0b0a08]/10 bg-[#efc959] text-[#0b0a08]",
                  ].join(" ")}
                >
                  <Shield className="h-3.5 w-3.5" />
                  Verification ready
                </span>
                {plan.featured ? (
                  <span className="rounded-full bg-[#f2f2f2] px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#111111]">
                    Most popular
                  </span>
                ) : null}
              </div>

              <h3 className="mt-4 min-h-[3.5rem] font-display text-3xl font-semibold">{plan.name}</h3>
              <p className={["mt-2 text-sm leading-6", plan.key === "professional" ? "text-[#111111]/75" : plan.key === "starter" ? "text-[#b3ac99]" : "text-[#1c1a14]/75"].join(" ")}>
                {plan.tagline}
              </p>

              <div className={["mt-6 min-h-[132px] rounded-2xl border p-4", plan.key === "starter" ? "border-[#2c2312] bg-black/15" : plan.key === "professional" ? "border-[#8f8f8f] bg-[#ececec]" : "border-[#c69322] bg-[#f0c44f]"].join(" ")}>
                <div className={["text-[11px] uppercase tracking-[0.14em]", plan.key === "professional" ? "text-[#111111]/70" : plan.key === "starter" ? "text-[#82775f]" : "text-[#0b0a08]/70"].join(" ")}>
                  Price
                </div>
                <div className={["mt-1 font-display text-4xl font-semibold leading-none", plan.key === "starter" ? "text-[#e7bb53]" : plan.key === "professional" ? "text-[#111111]" : "text-[#0b0a08]"].join(" ")}>
                  {plan.price}
                </div>
                <div className={["mt-2 text-sm", plan.key === "professional" ? "text-[#111111]/75" : plan.key === "starter" ? "text-[#b3ac99]" : "text-[#0b0a08]/75"].join(" ")}>
                  {plan.period}
                </div>
              </div>

              {plan.key === "legacy" ? (
                <a
                  href={legalInfo.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "mt-5 inline-flex w-full items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold transition-colors",
                    plan.key === "starter"
                      ? "border-[#0b0a08] bg-[#0b0a08] text-[#f3cf7e] hover:bg-[#1c1a14] hover:text-[#f8e29b]"
                      : plan.key === "professional"
                        ? "border-[#111111] bg-[#f2f2f2] text-[#111111] hover:bg-white"
                        : "border-[#7d6122] bg-[#7d6122] text-[#0b0a08] hover:bg-[#0b0a08] hover:text-[#f3cf7e]",
                  ].join(" ")}
                >
                  {plan.cta}
                </a>
              ) : (
                <button
                  className={[
                    "mt-5 w-full rounded-xl border px-4 py-3 text-sm font-semibold transition-colors",
                    plan.key === "starter"
                      ? "border-[#0b0a08] bg-[#0b0a08] text-[#f3cf7e] hover:bg-[#1c1a14] hover:text-[#f8e29b]"
                      : plan.key === "professional"
                        ? "border-[#111111] bg-[#f2f2f2] text-[#111111] hover:bg-white"
                        : "border-[#7d6122] bg-transparent text-[#e7bb53] hover:bg-[#e7bb53] hover:text-[#0b0a08]",
                  ].join(" ")}
                >
                  {plan.cta}
                </button>
              )}

              <ul className="mt-6 flex-1 space-y-3">
                {plan.bullets.map((bullet) => (
                  <li
                  key={bullet}
                    className={["flex items-start gap-2 text-sm leading-6", plan.key === "professional" ? "text-[#111111]/80" : plan.key === "starter" ? "text-[#b3ac99]" : "text-[#0b0a08]/80"].join(" ")}
                  >
                    <Check className={["mt-0.5 h-4 w-4 shrink-0", plan.key === "starter" ? "text-[#6fae6a]" : plan.key === "professional" ? "text-[#6b6b6b]" : "text-[#0b0a08]/70"].join(" ")} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
