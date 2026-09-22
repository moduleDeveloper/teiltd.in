import { http } from './http';
import type { CatalogCategory, CatalogProduct, Plan } from '@/types/catalog';

const CATALOG_ENDPOINT = import.meta.env.VITE_CATALOG_ENDPOINT || '/api/catalog';

const TRUST_ID = import.meta.env.VITE_CATALOG_TRUST_ID;
/** Argument name of the get_products_by_trust_id function — change if your SQL function names it differently. */
const TRUST_ID_PARAM = 'p_trust_id';

const num = (value: unknown): number => {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
};

const isActive = (item: { status?: string }) => (item.status ?? 'active').toLowerCase() === 'active';

/** "NGO App - Yearly Plan" -> "NGO App" (the billing cycle is shown separately). */
const cleanName = (name: string) => name.replace(/\s*[-–]\s*(yearly|monthly|annual|quarterly)\s*plan\s*$/i, '').trim();

function toPlan(product: CatalogProduct): Plan | null {
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

export async function fetchCatalog(signal?: AbortSignal): Promise<Plan[]> {
  // Supabase RPC functions are invoked with POST and a JSON body of the function's params.
  const { data } = await http.post<{ categories?: CatalogCategory[] } | Array<{ categories?: CatalogCategory[] }>>(
    CATALOG_ENDPOINT,
    { [TRUST_ID_PARAM]: TRUST_ID },
    { signal },
  );
  const root = Array.isArray(data) ? data[0] : data;

  // Only live products: active product -> active price -> active attributes.
  // The category's own status is intentionally ignored.
  return (root?.categories ?? [])
    .flatMap((category) => category.products ?? [])
    .filter(isActive)
    .map(toPlan)
    .filter((plan): plan is Plan => plan !== null);
}
