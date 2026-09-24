/** Raw shapes as sent by the catalog API. Only the fields the UI reads are typed. */
interface WithStatus {
  status?: string;
}

export interface CatalogPrice extends WithStatus {
  mrp: number | string;
  discount_pct: number | string;
  price_after_discount: number | string;
  gst_pct: number | string;
  billing_type: string;
  total_payable?: number | string;
}

export interface CatalogAttributeValue extends WithStatus {
  attribute_name: string;
  value: string;
}

export interface CatalogProduct extends WithStatus {
  id: string;
  product_name: string;
  product_code: string;
  prices?: CatalogPrice[];
  attribute_values?: CatalogAttributeValue[];
}

export interface CatalogCategory extends WithStatus {
  name: string;
  products?: CatalogProduct[];
}

/** UI-ready plan, derived from a CatalogProduct by services/catalog.ts. */
export interface Plan {
  id: string;
  code: string;
  name: string;
  mrp: number;
  discountPct: number;
  price: number;
  gstPct: number;
  billingType: string;
  features: CatalogAttributeValue[];
}
