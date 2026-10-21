import { useRef, useState } from 'react';
import { AppButton, Aurora, CascadeHeading, Reveal } from '@/components/ui';
import { CONTACT } from '@/lib/config/constants';
import { EXTERNAL_LINKS } from '@/lib/config/links';
import { normalizeIndianMobile, validateLaunchAppForm } from '@/lib/utils/validation';
import { Phone } from "lucide-react";
import { autofill, card, cn, container, eyebrow, fieldError, glow, grid2, input, inputError, pulse, sectionTight, stepNum, tag } from '@/lib/styles';

const QUESTIONS = ['What do you sell?', 'How many products / SKUs?', 'How many dealers or buyers?'];

const INITIAL_FORM_DATA = { mobile: '', business: '' };
const INITIAL_TOUCHED = { mobile: false, business: false };
const VALID_MOBILE = /^[6-9]\d{9}$/;

const SHAKE = [
  { transform: 'translateX(0)' },
  { transform: 'translateX(-8px)' },
  { transform: 'translateX(7px)' },
  { transform: 'translateX(-5px)' },
  { transform: 'translateX(3px)' },
  { transform: 'translateX(0)' },
];

export default function LaunchAppSection() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(INITIAL_TOUCHED);

  const mobileRef = useRef(null);
  const mobileWrapRef = useRef(null);
  const businessRef = useRef(null);
  const fieldRefs = {
    mobile: mobileRef,
    business: businessRef,
  };

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    // Mobile keeps only the 10 local digits, so a pasted "+91 84472 47138" still fits.
    const nextValue = field === 'mobile' ? normalizeIndianMobile(value).replace(/\D/g, '').slice(0, 10) : value;
    const nextData = { ...formData, [field]: nextValue };
    setFormData(nextData);
    if (touched[field]) {
      setErrors(validateLaunchAppForm(nextData));
    }
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validateLaunchAppForm(formData));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateLaunchAppForm(formData);
    setErrors(validationErrors);
    setTouched({ mobile: true, business: true });

    const firstInvalidField = Object.keys(validationErrors)[0];
    if (firstInvalidField) {
      // A short shake draws the eye to the field that needs fixing.
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        mobileWrapRef.current?.animate(SHAKE, { duration: 420, easing: 'ease-out' });
      }
      const field = fieldRefs[firstInvalidField].current;
      field?.focus();
      field?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const params = new URLSearchParams({ mobile: `+91${normalizeIndianMobile(formData.mobile)}` });
    const business = formData.business.trim();
    if (business) params.set('business', business);

    window.location.assign(`${EXTERNAL_LINKS.login}?${params.toString()}`);
  };

  return (
    <section id="contact" className={cn(sectionTight, 'border-t border-t-line overflow-hidden relative')}>
      <Aurora />
      <div
        className={cn(glow, 'w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(232,184,75,0.14),transparent_70%)] top-[-100px] left-[30%]')}
      />
      <div
        className={cn(container, grid2, 'relative z-[2] grid grid-cols-[1fr_1fr] gap-[64px] items-center')}
      >
        <Reveal variant="left" className="mobile:w-full mobile:items-center mobile:text-center flex flex-col gap-[18px]">
          <div className={eyebrow}>Launch your app</div>
          <CascadeHeading continuous className="text-[38px] leading-[1.2]">
            {["Tell us three things. We'll show Run Sale on your own business."]}
          </CascadeHeading>
          <div className="flex flex-col gap-[10px] mt-[6px]">
            {QUESTIONS.map((q, i) => (
              <div
                key={q}
                className="flex items-center gap-[12px] text-[15px] text-ink animate-slide-in motion-reduce:animate-none!"
                style={{ animationDelay: `${0.5 + i * 0.2}s` }}
              >
                <div
                  className={cn(stepNum, 'w-[30px] h-[30px] text-[12px] animate-step-fill motion-reduce:animate-none!')}
                  style={{ animationDelay: `${0.8 + i * 0.2}s` }}
                >
                  {i + 1}
                </div>
                {q}
              </div>
            ))}
          </div>
          <div className="mobile:flex-wrap mobile:justify-center flex gap-[14px] mt-[10px]">
            <AppButton
              variant="ghost"
              href={EXTERNAL_LINKS.whatsappChat}
              className="border-[rgba(37,211,102,0.5)] text-green hover:text-green"
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
        <Reveal variant="right" as="div" className={cn(card, 'p-[32px] border-line-2 overflow-hidden')}>
          {/* One soft light sweep across the card as it arrives. */}
          <span
            aria-hidden="true"
            className="absolute top-0 left-[-60%] w-[45%] h-full pointer-events-none bg-[linear-gradient(120deg,transparent,rgba(247,212,136,0.14),transparent)] [transform:skewX(-20deg)] animate-sweep-once motion-reduce:hidden"
          />
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[14px]">
            <div className="flex items-center justify-between">
              <div className="font-bold text-[16px]">Quick Launch</div>
              <span className={tag}>Step 1 / 2</span>
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="launch-mobile" className="text-[12px] text-sub-2">
                Mobile number
              </label>
              <div
                ref={mobileWrapRef}
                className={cn(input, autofill, 'flex items-center p-0 gap-[8px] overflow-hidden', errors.mobile && inputError)}
              >
                <span className="pl-[16px] text-sub-2">+91</span>
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
                  className={cn(autofill, 'flex-1 min-w-0 h-full border-none bg-[transparent] text-ink text-[14px] [outline:none] pr-[16px]')}
                />
                {/* Green tick as soon as the number is a valid 10-digit mobile. */}
                {VALID_MOBILE.test(formData.mobile) && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 mr-[14px] animate-pop-in motion-reduce:animate-none!">
                    <circle cx="12" cy="12" r="10" fill="rgba(37,211,102,0.15)" />
                    <path d="M7.5 12.5l3 3 6-6.5" stroke="var(--color-green)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              {errors.mobile && (
                <span id="launch-mobile-error" className={fieldError}>
                  {errors.mobile}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="launch-business" className="text-[12px] text-sub-2">
                What do you sell? <span className="opacity-[0.7]">(optional)</span>
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
                className={cn(input, autofill)}
              />
            </div>
            <AppButton variant="primary" type="submit" className={cn(pulse, 'justify-center mt-[6px]')}>
              Try Now
            </AppButton>
            <div className="text-[12px] text-sub-2 text-center">
              Your lead is saved immediately. We&apos;ll call within a working day.
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
