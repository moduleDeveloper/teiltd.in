import { postJson } from './http';

const CATALOG_ENDPOINT = import.meta.env.VITE_CATALOG_ENDPOINT || '/api/catalog';

const num = (value) => {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
};

const isActive = (item) => (item.status ?? 'active').toLowerCase() === 'active';

/**
 * "NGO App - Yearly Plan" -> "NGO App" (the billing cycle is shown separately).
 */
const cleanName = (name) => name.replace(/\s*[-–]\s*(yearly|monthly|annual|quarterly)\s*plan\s*$/i, '').trim();

function toPlan(product) {
  const price = product.prices?.find(isActive);
  if (!price) return null;
  return {
    id: product.id,
    code: product.product_code,
    name: cleanName(product.product_name),
    mrp: num(price.mrp),
    discountPct: num(price.discount_pct),
    price: num(price.price_after_discount),
    gstPct: num(price.gst_pct),
    billingType: String(price.billing_type || '').toLowerCase(),
    features: (product.attribute_values ?? []).filter(isActive),
  };
}

export async function fetchCatalog(signal) {
  // The backend pins the trust id and forwards this to the Supabase RPC, so no body is needed.
  const data = await postJson(CATALOG_ENDPOINT, {}, { signal });
  const root = Array.isArray(data) ? data[0] : data;

  // Only live products: active product -> active price -> active attributes.
  // The category's own status is intentionally ignored.
  return (root?.categories ?? [])
    .flatMap((category) => category.products ?? [])
    .filter(isActive)
    .map(toPlan)
    .filter((plan) => plan !== null);
}
