import { describe, expect, it } from 'vitest';
import { normalizeIndianMobile, validateLaunchAppForm } from '@/lib/utils/validation';

describe('normalizeIndianMobile', () => {
  it('strips a +91 prefix, spaces and dashes', () => {
    expect(normalizeIndianMobile('+91 84472-47138')).toBe('8447247138');
    expect(normalizeIndianMobile('918447247138')).toBe('8447247138');
  });

  it('keeps a 10-digit number that itself starts with 91', () => {
    expect(normalizeIndianMobile('9123456789')).toBe('9123456789');
  });
});

describe('validateLaunchAppForm', () => {
  it('accepts a valid mobile and business', () => {
    expect(validateLaunchAppForm({ mobile: '8447247138', business: 'Sarees' })).toEqual({});
  });

  it('flags empty fields', () => {
    const errors = validateLaunchAppForm({ mobile: '', business: '  ' });
    expect(errors.mobile).toBeDefined();
    expect(errors.business).toBeDefined();
  });

  it('rejects numbers that do not start with 6-9', () => {
    expect(validateLaunchAppForm({ mobile: '5447247138', business: 'x' }).mobile).toBeDefined();
  });
});
