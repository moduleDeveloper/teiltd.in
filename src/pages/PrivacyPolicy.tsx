import { useEffect } from "react";
import LegalPageLayout from "@/components/LegalPageLayout";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - SETU";
  }, []);

  return (
    <LegalPageLayout title="Privacy Policy - SETU" updated="May 2026">
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
          We collect name, mobile number, email address, organization name, role, type of organization and number of members when you fill the Book Demo form.
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
          We use WhatsApp only for transactional and service-related communication: member onboarding, event reminders, notices, support messages and community updates. We do not send promotional spam.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">5. Data Sharing</h2>
        <p className="mt-3">
          We do not sell, rent or share your personal data with any third party for marketing purposes. Data may be shared only if required by law.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">6. Data Security</h2>
        <p className="mt-3">
          All data is stored securely. We take reasonable precautions to protect your information from unauthorized access.
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
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
