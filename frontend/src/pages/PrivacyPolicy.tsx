import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import LegalPageLayout from "@/components/LegalPageLayout";

const promises = [
  {
    title: "It stays yours, always.",
    body: "Your personal data remains yours from day one. We are only the technology partner looking after it on your behalf — we never become its owner.",
  },
  {
    title: "Used only for what you signed up for.",
    body: "Your details are used only to respond to your demo request and to run the SETU services your organisation has approved. Never for any other purpose.",
  },
  {
    title: "Never sold. Never shared.",
    body: "We will never sell, rent or share your personal data with any third party for marketing purposes — not today, not ever.",
  },
  {
    title: "Only verified access.",
    body: "Every user is verified through secure, OTP-based checks. There are no shared passwords and no back-door access to your information.",
  },
  {
    title: "Your data, stored safely.",
    body: "All data is stored on secure servers with encryption and access controls in place, protected by reasonable technical and organisational precautions.",
  },
  {
    title: "Take it back, any time.",
    body: "You may request a copy or deletion of your data whenever you wish, no conditions attached — just message us on WhatsApp.",
  },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - SETU";
  }, []);

  return (
    <LegalPageLayout title="Privacy Policy" updated="July 2026">
      <section>
        <h2 className="font-display text-2xl font-bold text-gold">A Personal Note Before We Begin</h2>
        <p className="mt-3">
          We know your data is not just a form entry — it represents your trust in us. We would feel exactly the
          same way if we were in your position. That's why we've written this policy in plain, honest language
          instead of dense legal fine print, so you know exactly how we think about your data and how we treat it
          every single day.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">Our Promise to You</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {promises.map((item) => (
            <div key={item.title} className="flex gap-3 rounded-2xl border border-gold/15 bg-background/40 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
              <div>
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm text-foreground/70">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">1. Company Information</h2>
        <p className="mt-3">
          <strong>Brand Name:</strong> SETU
          <br />
          <strong>Legal Entity:</strong> Thermal Engineers &amp; Insulators Private Limited
          <br />
          <strong>CIN:</strong> U74210DL2011PTC220424
          <br />
          <strong>GSTIN:</strong> 07AADCT8694H1ZS
          <br />
          <strong>Registered Office:</strong> 4th Floor, C-57, TEI Tower, Wazirpur Industrial Area, New Delhi - 110052
          <br />
          <strong>WhatsApp:</strong> +91 91363 73636
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">2. Information We Collect</h2>
        <p className="mt-3">
          We collect name, mobile number, email address, organization name, role, type of organization and number
          of members when you fill the Book Demo form.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">3. How We Use Your Information</h2>
        <ul className="mt-3 list-disc pl-6 space-y-1">
          <li>To contact you regarding your demo request</li>
          <li>To send service-related WhatsApp messages including onboarding, reminders, event alerts and support communication</li>
          <li>To improve our platform and services</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">4. WhatsApp Communication</h2>
        <p className="mt-3">
          We use WhatsApp only for transactional and service-related communication: member onboarding, event
          reminders, notices, support messages and community updates. We do not send promotional spam.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">5. Data Sharing</h2>
        <p className="mt-3">
          We do not sell, rent or share your personal data with any third party for marketing purposes. Data may
          be shared only if required by law.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">6. Data Security</h2>
        <p className="mt-3">
          All data is stored securely. We take reasonable precautions to protect your information from
          unauthorized access.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">7. Your Rights</h2>
        <p className="mt-3">
          You may request deletion of your data by contacting us on WhatsApp at +91 91363 73636.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">8. Contact Us</h2>
        <p className="mt-3">
          Thermal Engineers &amp; Insulators Private Limited
          <br />
          4th Floor, C-57, TEI Tower, Wazirpur Industrial Area, New Delhi - 110052
          <br />
          WhatsApp: +91 91363 73636
        </p>
      </section>

      <section className="rounded-2xl border border-gold/20 bg-gradient-gold/10 p-6 text-center">
        <p className="italic text-foreground/80">
          "Your trust means more to us than your data ever could."
        </p>
        <p className="mt-4 text-sm text-foreground/70">
          Our business is built on long, trusted relationships with our community — not on a single transaction.
          We treat every member record with the same care and responsibility we would want for our own community.
          We look forward to earning your trust every day, and to building a long and meaningful partnership.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">With Mutual Respect and Commitment</h2>
        <div className="mt-6 grid gap-10 sm:grid-cols-2">
          <div>
            <p className="font-semibold text-foreground">SETU</p>
            <p className="text-sm text-foreground/60">(Where Connections Create Power)</p>
            <div className="mt-8 space-y-6">
              <div className="border-b border-foreground/30 pb-1 text-sm text-foreground/40">&nbsp;</div>
              <p className="text-xs text-foreground/60">Name</p>
              <div className="border-b border-foreground/30 pb-1 text-sm text-foreground/40">&nbsp;</div>
              <p className="text-xs text-foreground/60">Designation</p>
              <div className="border-b border-foreground/30 pb-1 text-sm text-foreground/40">&nbsp;</div>
              <p className="text-xs text-foreground/60">Signature</p>
              <div className="border-b border-foreground/30 pb-1 text-sm text-foreground/40">&nbsp;</div>
              <p className="text-xs text-foreground/60">Date</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-foreground">For the Organisation</p>
            <div className="mt-8 space-y-6">
              <div className="border-b border-foreground/30 pb-1 text-sm text-foreground/40">&nbsp;</div>
              <p className="text-xs text-foreground/60">Organisation Name</p>
              <div className="border-b border-foreground/30 pb-1 text-sm text-foreground/40">&nbsp;</div>
              <p className="text-xs text-foreground/60">Authorised Representative</p>
              <div className="border-b border-foreground/30 pb-1 text-sm text-foreground/40">&nbsp;</div>
              <p className="text-xs text-foreground/60">Designation</p>
              <div className="border-b border-foreground/30 pb-1 text-sm text-foreground/40">&nbsp;</div>
              <p className="text-xs text-foreground/60">Signature</p>
              <div className="border-b border-foreground/30 pb-1 text-sm text-foreground/40">&nbsp;</div>
              <p className="text-xs text-foreground/60">Date</p>
            </div>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
