import { useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent, type RefObject } from 'react';
import { AppButton } from '@/components/ui';
import { Reveal } from '@/components/ui';
import { CONTACT } from '@/lib/config/constants';
import { EXTERNAL_LINKS } from '@/lib/config/links';
import { normalizeIndianMobile, validateLaunchAppForm, type LaunchAppFormData, type LaunchAppFormErrors } from '@/lib/utils/validation';
import { Phone } from "lucide-react";

const QUESTIONS = ['What do you sell?', 'How many products / SKUs?', 'How many dealers or buyers?'];

const INITIAL_FORM_DATA: LaunchAppFormData = { mobile: '', business: '' };
const INITIAL_TOUCHED: Record<keyof LaunchAppFormData, boolean> = { mobile: false, business: false };

export default function LaunchAppSection() {
  const [formData, setFormData] = useState<LaunchAppFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<LaunchAppFormErrors>({});
  const [touched, setTouched] = useState(INITIAL_TOUCHED);

  const mobileRef = useRef<HTMLInputElement>(null);
  const businessRef = useRef<HTMLInputElement>(null);
  const fieldRefs: Record<keyof LaunchAppFormData, RefObject<HTMLInputElement | null>> = {
    mobile: mobileRef,
    business: businessRef,
  };

  const handleChange = (field: keyof LaunchAppFormData) => (event: ChangeEvent<HTMLInputElement>) => {
    const nextData = { ...formData, [field]: event.target.value };
    setFormData(nextData);
    if (touched[field]) {
      setErrors(validateLaunchAppForm(nextData));
    }
  };

  const handleBlur = (field: keyof LaunchAppFormData) => (event: FocusEvent<HTMLInputElement>) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validateLaunchAppForm({ ...formData, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateLaunchAppForm(formData);
    setErrors(validationErrors);
    setTouched({ mobile: true, business: true });

    const firstInvalidField = (Object.keys(validationErrors) as Array<keyof LaunchAppFormErrors>)[0];
    if (firstInvalidField) {
      const field = fieldRefs[firstInvalidField].current;
      field?.focus();
      field?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const params = new URLSearchParams({
      mobile: `+91${normalizeIndianMobile(formData.mobile)}`,
      business: formData.business.trim(),
    });

    window.location.assign(`${EXTERNAL_LINKS.login}?${params.toString()}`);
  };

  return (
    <section id="contact" className="section-tight" style={{ borderTop: '1px solid var(--line)', overflow: 'hidden', position: 'relative' }}>
      <div className="aurora">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div
        className="glow"
        style={{ width: 700, height: 400, background: 'radial-gradient(ellipse,rgba(232,184,75,0.14),transparent 70%)', top: -100, left: '30%' }}
      />
      <div
        className="container grid2"
        style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}
      >
        <Reveal variant="left" className="hero-copy" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div className="eyebrow">Launch your app</div>
          <h2 style={{ fontSize: 38, lineHeight: 1.2 }}>Tell us three things. We&apos;ll show Run Sale on your own business.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 6 }}>
            {QUESTIONS.map((q, i) => (
              <div key={q} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'var(--text)' }}>
                <div className="step-num" style={{ width: 30, height: 30, fontSize: 12 }}>
                  {i + 1}
                </div>
                {q}
              </div>
            ))}
          </div>
          <div className="btn-row" style={{ display: 'flex', gap: 14, marginTop: 10 }}>
            <AppButton
              variant="ghost"
              href={EXTERNAL_LINKS.whatsappChat}
              style={{ borderColor: 'rgba(37,211,102,0.5)', color: 'var(--green)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
              Chat on WhatsApp
            </AppButton>
            <AppButton variant="ghost" href={CONTACT.whatsappNumberTel} newTab={false}>
              Call Us <Phone size={16} className="scale-x-[-1]" /> 
            </AppButton>
          </div>
        </Reveal>
        <Reveal variant="right" as="div" className="card" style={{ padding: 32, borderColor: 'var(--line-2)' }}>
          <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: 700, fontSize: 16 }}>Quick Launch</div>
              <span className="tag">Step 1 / 2</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label htmlFor="launch-mobile" style={{ fontSize: 12, color: 'var(--sub-2)' }}>
                Mobile number
              </label>
              <div
                className={`launch-app-input${errors.mobile ? ' input-error' : ''}`}
                style={{ display: 'flex', alignItems: 'center', padding: 0, gap: 8, overflow: 'hidden' }}
              >
                <span style={{ paddingLeft: 16, color: 'var(--sub-2)' }}>+91</span>
                <input
                  id="launch-mobile"
                  ref={mobileRef}
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="10-digit mobile number"
                  value={formData.mobile}
                  onChange={handleChange('mobile')}
                  onBlur={handleBlur('mobile')}
                  aria-invalid={Boolean(errors.mobile)}
                  aria-describedby={errors.mobile ? 'launch-mobile-error' : undefined}
                  className="launch-app-input-field"
                  style={{ flex: 1, height: '100%', border: 'none', background: 'transparent', color: 'var(--text)', fontSize: 14, outline: 'none', paddingRight: 16 }}
                />
              </div>
              {errors.mobile && (
                <span id="launch-mobile-error" className="field-error">
                  {errors.mobile}
                </span>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label htmlFor="launch-business" style={{ fontSize: 12, color: 'var(--sub-2)' }}>
                What do you sell?
              </label>
              <input
                id="launch-business"
                ref={businessRef}
                type="text"
                autoComplete="off"
                placeholder="e.g. Electrical fittings"
                value={formData.business}
                onChange={handleChange('business')}
                onBlur={handleBlur('business')}
                aria-invalid={Boolean(errors.business)}
                aria-describedby={errors.business ? 'launch-business-error' : undefined}
                className={`launch-app-input${errors.business ? ' input-error' : ''}`}
              />
              {errors.business && (
                <span id="launch-business-error" className="field-error">
                  {errors.business}
                </span>
              )}
            </div>
            <AppButton variant="primary" type="submit" className="pulse" style={{ justifyContent: 'center', marginTop: 6 }}>
              Try Now
            </AppButton>
            <div style={{ fontSize: 12, color: 'var(--sub-2)', textAlign: 'center' }}>
              Your lead is saved immediately. We&apos;ll call within a working day.
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
