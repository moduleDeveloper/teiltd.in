import { useEffect } from "react";
import LegalPageLayout from "@/components/LegalPageLayout";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service - SETU";
  }, []);

  return (
    <LegalPageLayout title="Terms of Service - SETU" updated="May 2026">
      <section>
        <h2 className="font-display text-2xl font-bold text-gold">1. About SETU</h2>
        <p className="mt-3">
          SETU is a digital community platform owned and operated by Thermal Engineers &amp; Insulators Private Limited (CIN: U74210DL2011PTC220424). Registered Office: 4th Floor, C-57, TEI Tower, Wazirpur Industrial Area, New Delhi - 110052.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">2. Acceptance of Terms</h2>
        <p className="mt-3">
          By accessing our website or booking a demo, you agree to these Terms of Service.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">3. Services Provided</h2>
        <p className="mt-3">
          SETU provides digital platform services for trusts, NGOs, hospitals, samitis and HNI communities including member management, communication tools, digital ID cards, event management and sponsor engagement.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">4. WhatsApp Communication</h2>
        <p className="mt-3">
          By submitting the Book Demo form, you consent to receive WhatsApp messages from SETU for service-related communication only.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">5. Intellectual Property</h2>
        <p className="mt-3">
          All content on this website including logos, text and design belongs to Thermal Engineers &amp; Insulators Private Limited. Unauthorized use is prohibited.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">6. Limitation of Liability</h2>
        <p className="mt-3">
          SETU shall not be liable for any indirect or consequential damages arising from use of our platform.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">7. Governing Law</h2>
        <p className="mt-3">
          These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in New Delhi.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-gold">8. Contact Us</h2>
        <p className="mt-3">
          Thermal Engineers &amp; Insulators Private Limited
          <br />
          WhatsApp: +91 91363 73636
          <br />
          4th Floor, C-57, TEI Tower, Wazirpur Industrial Area, New Delhi - 110052
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default TermsOfService;
