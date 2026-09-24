export interface LaunchAppFormData {
  mobile: string;
  business: string;
}

export interface LaunchAppFormErrors {
  mobile?: string;
  business?: string;
}

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;

/** Strips a leading +91/91 country code plus spaces/dashes, so a pasted full
 * number (e.g. "+91 84472 47138") still validates against the bare 10-digit
 * local number the form stores — the field's own UI already shows a fixed
 * "+91" prefix beside the input. */
export function normalizeIndianMobile(value: string): string {
  // Only strip "91" when it is a country code (12+ digits), not the start of a
  // 10-digit number like 9123456789.
  return value.trim().replace(/[\s-]/g, '').replace(/^\+?91(?=\d{10}$)/, '');
}

/** Pure validator kept out of JSX so the form component only wires state to it. */
export function validateLaunchAppForm(values: LaunchAppFormData): LaunchAppFormErrors {
  const errors: LaunchAppFormErrors = {};

  const mobile = normalizeIndianMobile(values.mobile);
  if (!mobile) {
    errors.mobile = 'Please enter your mobile number.';
  } else if (!INDIAN_MOBILE_REGEX.test(mobile)) {
    errors.mobile = 'Please enter a valid 10-digit mobile number.';
  }

  if (!values.business.trim()) {
    errors.business = 'Please tell us what you sell.';
  }

  return errors;
}
