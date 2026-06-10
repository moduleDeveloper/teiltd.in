import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, ".env") });

const app = express();
const port = Number(process.env.PORT || 3001);

const localOrigins = ["http://localhost:8080", "http://127.0.0.1:8080"];
const allowedOrigins = (process.env.CORS_ORIGIN || process.env.FRONTEND_ORIGIN || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
const corsOrigins = [...new Set([...allowedOrigins, ...localOrigins])];

app.use(
  cors({
    origin: corsOrigins.length > 0 ? corsOrigins : true,
    credentials: true,
  }),
);
app.use(express.json());

const requiredEnv = ["MAIL_USER", "MAIL_APP_PASSWORD", "MAIL_TO"];
const missing = requiredEnv.filter((name) => !process.env[name]);

if (missing.length > 0) {
  console.warn(`Missing env vars: ${missing.join(", ")}`);
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const leadsTableUrl = supabaseUrl ? `${supabaseUrl.replace(/\/$/, "")}/rest/v1/leads` : null;

const toLeadRow = (body) => {
  const {
    name = null,
    mobile = null,
    email = null,
    org = null,
    org_name = null,
    source = null,
    sourceDetail = null,
    remark = null,
  } = body ?? {};

  return {
    name: name || null,
    mobile: mobile || null,
    email: email || null,
    org_name: org_name || org || null,
    source: sourceDetail ? `${source || ""}${source ? " - " : ""}${sourceDetail}` : source || null,
    remark: remark || null,
  };
};

const saveLead = async (body) => {
  if (!leadsTableUrl || !supabaseServiceKey) {
    throw new Error("Supabase configuration is missing.");
  }

  const row = toLeadRow(body);
  const headers = {
    apikey: supabaseServiceKey,
    Authorization: `Bearer ${supabaseServiceKey}`,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  const existingResponse = await fetch(`${leadsTableUrl}?mobile=eq.${encodeURIComponent(String(row.mobile))}&order=created_at.desc&limit=1`, {
    headers,
  });

  if (!existingResponse.ok) {
    throw new Error("Failed to look up existing lead");
  }

  const existingLeads = await existingResponse.json();
  const existingLead = Array.isArray(existingLeads) ? existingLeads[0] : null;

  if (existingLead?.id) {
    const updateResponse = await fetch(`${leadsTableUrl}?id=eq.${existingLead.id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(row),
    });

    if (!updateResponse.ok) {
      throw new Error("Failed to update lead");
    }

    return { action: "updated" };
  }

  const insertResponse = await fetch(leadsTableUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      ...row,
      status: "new",
      lead_received_at: new Date().toISOString(),
    }),
  });

  if (!insertResponse.ok) {
    throw new Error("Failed to insert lead");
  }

  return { action: "inserted" };
};

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/book-demo", async (req, res) => {
  const { name, org, mobile, email, remark, source, sourceDetail } = req.body ?? {};
  const normalizedMobile = String(mobile ?? "").replace(/\D/g, "");

  if (!/^[0-9]{10}$/.test(normalizedMobile)) {
    return res.status(400).json({ error: "Mobile number must be exactly 10 digits." });
  }

  try {
    const dbResult = await saveLead({ name, org, mobile: normalizedMobile, email, remark, source, sourceDetail });
    return res.status(200).json({
      ok: true,
      message: "We have received your request. Our team will contact you shortly.",
      db: dbResult,
    });
  } catch (error) {
    console.error("Lead save failed:", error);
    return res.status(500).json({ error: "Failed to save lead." });
  }
});

app.listen(port, () => {
  console.log(`Email backend running on http://localhost:${port}`);
});
