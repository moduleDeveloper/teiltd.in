import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors());
app.use(express.json());

const requiredEnv = ["MAIL_USER", "MAIL_APP_PASSWORD", "MAIL_TO"];
const missing = requiredEnv.filter((name) => !process.env[name]);

if (missing.length > 0) {
  console.warn(`Missing env vars: ${missing.join(", ")}`);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_APP_PASSWORD,
  },
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/book-demo", async (req, res) => {
  const { name, org, mobile, email } = req.body ?? {};

  if (!mobile) {
    return res.status(400).json({ error: "Mobile number is required." });
  }

  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const hasExtraDetails = Boolean(name || org || email);
  const text = [
    hasExtraDetails ? "Book Demo request updated with details" : "New quick Book Demo lead",
    `Mobile: ${mobile}`,
    `Name: ${name || "Not provided"}`,
    `Organization: ${org || "Not provided"}`,
    `Email: ${email || "Not provided"}`,
    `Submitted At (IST): ${submittedAt}`,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"SETU Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      ...(email ? { replyTo: email } : {}),
      subject: hasExtraDetails
        ? `Book Demo Request - ${org || mobile}`
        : `Quick Demo Lead - ${mobile}`,
      text,
      html: `
        <h2>${hasExtraDetails ? "Book Demo request updated with details" : "New quick Book Demo lead"}</h2>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Name:</b> ${name || "Not provided"}</p>
        <p><b>Organization:</b> ${org || "Not provided"}</p>
        <p><b>Email:</b> ${email || "Not provided"}</p>
        <p><b>Submitted At (IST):</b> ${submittedAt}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(port, () => {
  console.log(`Email backend running on http://localhost:${port}`);
});
